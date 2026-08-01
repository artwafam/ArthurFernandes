/**
 * Lightweight i18n for the PHP portfolio rewrite.
 * Loads lang/{code}.json, persists locale in localStorage, updates [data-i18n].
 */
(function (window) {
  'use strict';

  var SUPPORTED = ['en', 'pt', 'ja', 'sv'];
  var LOCALES = [
    { code: 'en', label: 'EN', flag: 'images/reino-unido.png' },
    { code: 'pt', label: 'PT', flag: 'images/brasil.png' },
    { code: 'ja', label: 'JA', flag: 'images/japan-flag-icon-32.png' },
    { code: 'sv', label: 'SV', flag: 'images/suecia.png' },
  ];

  var dict = {};
  var locale = 'en';
  var ready = false;
  var readyPromise = null;

  function resolvePath(obj, key) {
    if (!key) return undefined;
    var parts = String(key).split('.');
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null || typeof cur !== 'object' || !(parts[i] in cur)) {
        return undefined;
      }
      cur = cur[parts[i]];
    }
    return cur;
  }

  function t(key, fallback) {
    var value = resolvePath(dict, key);
    if (typeof value === 'string') return value;
    if (fallback != null && fallback !== '') return fallback;
    return key;
  }

  function detectInitialLocale() {
    try {
      var saved = localStorage.getItem('locale');
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (_) {
      /* private mode */
    }
    var browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(browser) !== -1) return browser;
    return 'en';
  }

  function langUrl(code) {
    return 'lang/' + code + '.json';
  }

  function loadDict(code) {
    return fetch(langUrl(code), { credentials: 'same-origin' })
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load locale: ' + code);
        return res.json();
      })
      .catch(function (err) {
        if (code !== 'en') {
          console.warn('[i18n]', err);
          return loadDict('en');
        }
        throw err;
      });
  }

  function preserveArrowSuffix(el, text) {
    var current = el.textContent || '';
    var match = current.match(/(\s*→\s*)$/);
    return match ? text + match[1] : text;
  }

  function applyTranslations(root) {
    var scope = root || document;
    var nodes = scope.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n');
      if (!key) continue;
      var translated = t(key);
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, translated);
      } else {
        el.textContent = preserveArrowSuffix(el, translated);
      }
    }

    var idleNodes = scope.querySelectorAll('[data-i18n-idle]');
    for (var j = 0; j < idleNodes.length; j++) {
      var idleEl = idleNodes[j];
      if (idleEl.getAttribute('data-copy-state') === 'copied') continue;
      var idleKey = idleEl.getAttribute('data-i18n');
      if (idleKey) {
        idleEl.textContent = t(idleKey);
      } else {
        idleEl.textContent = idleEl.getAttribute('data-i18n-idle') || idleEl.textContent;
      }
    }
  }

  function updateLangChrome() {
    var meta = LOCALES.find(function (l) {
      return l.code === locale;
    }) || LOCALES[0];

    var flag = document.getElementById('lang-flag');
    var label = document.getElementById('lang-label');
    if (flag) flag.src = meta.flag;
    if (label) label.textContent = meta.label;

    document.documentElement.lang = locale;

    var options = document.querySelectorAll('.lang-option[data-locale]');
    for (var i = 0; i < options.length; i++) {
      var opt = options[i];
      if (opt.getAttribute('data-locale') === locale) {
        opt.classList.add('is-active');
      } else {
        opt.classList.remove('is-active');
      }
    }
  }

  function changeLanguage(code) {
    if (SUPPORTED.indexOf(code) === -1) {
      return Promise.reject(new Error('Unsupported locale: ' + code));
    }

    return loadDict(code).then(function (data) {
      dict = data || {};
      locale = code;
      ready = true;
      try {
        localStorage.setItem('locale', code);
      } catch (_) {
        /* ignore */
      }
      applyTranslations(document);
      updateLangChrome();
      window.dispatchEvent(
        new CustomEvent('localechange', { detail: { locale: code } }),
      );
      return locale;
    });
  }

  function getLocale() {
    return locale;
  }

  function init() {
    if (readyPromise) return readyPromise;
    var initial = detectInitialLocale();
    readyPromise = changeLanguage(initial).catch(function (err) {
      console.error('[i18n] init failed', err);
      dict = {};
      locale = 'en';
      ready = true;
      applyTranslations(document);
      updateLangChrome();
      return locale;
    });
    return readyPromise;
  }

  window.I18n = {
    t: t,
    changeLanguage: changeLanguage,
    getLocale: getLocale,
    init: init,
    LOCALES: LOCALES,
    SUPPORTED: SUPPORTED,
    apply: applyTranslations,
    isReady: function () {
      return ready;
    },
  };
})(window);
