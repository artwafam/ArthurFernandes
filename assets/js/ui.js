/**
 * UI bootstrap: nav toggle, language menu, scroll reveal,
 * clipboard copy for [data-copy], and module init on DOMContentLoaded.
 */
(function (window, document) {
  'use strict';

  var SOCIAL = {
    email: 'arthurfernandes.developer@gmail.com',
    discord: '.artwa.fer',
    itch: 'https://arthurfam.itch.io',
    github: 'https://github.com/artwafam',
  };

  var revealObserver = null;

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function t(key, fallback) {
    if (window.I18n && typeof window.I18n.t === 'function') {
      return window.I18n.t(key, fallback);
    }
    return fallback != null ? fallback : key;
  }

  /* ---------- Nav / mobile menu ---------- */

  function initNav() {
    var toggle = qs('#nav-toggle');
    var menu = qs('#mobile-menu');
    if (!toggle || !menu) return;

    var iconOpen = toggle.querySelector('.icon-open');
    var iconClose = toggle.querySelector('.icon-close');

    function setOpen(open) {
      if (open) {
        menu.classList.remove('hidden');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        menu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      }
      if (iconOpen) iconOpen.classList.toggle('hidden', open);
      if (iconClose) iconClose.classList.toggle('hidden', !open);
    }

    setOpen(false);

    toggle.addEventListener('click', function () {
      setOpen(menu.classList.contains('hidden'));
    });

    qsa('.nav-link', menu).forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  /* ---------- Language menu ---------- */

  function initLangMenu() {
    var btn = qs('#lang-toggle');
    var menu = qs('#lang-menu');
    if (!btn || !menu) return;

    function close() {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }

    function open() {
      menu.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    }

    close();

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (menu.classList.contains('hidden')) open();
      else close();
    });

    qsa('.lang-option[data-locale]', menu).forEach(function (opt) {
      opt.addEventListener('click', function (e) {
        e.stopPropagation();
        var code = opt.getAttribute('data-locale');
        if (!code || !window.I18n) {
          close();
          return;
        }
        window.I18n.changeLanguage(code).finally(close);
      });
    });

    document.addEventListener('click', function (e) {
      if (!menu.classList.contains('hidden')) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
          close();
        }
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ---------- Scroll reveal ---------- */

  function observeReveals(root) {
    var nodes = qsa('.reveal', root || document);
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '-60px 0px', threshold: 0.08 },
      );
    }

    nodes.forEach(function (el) {
      if (!el.classList.contains('is-visible')) {
        revealObserver.observe(el);
      }
    });
  }

  function initReveal() {
    observeReveals(document);
  }

  /* ---------- Clipboard / data-copy ---------- */

  function resolveCopyValue(raw) {
    if (!raw) return '';
    var key = String(raw).trim().toLowerCase();
    if (SOCIAL[key]) return SOCIAL[key];
    return String(raw);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        if (ok) resolve();
        else reject(new Error('copy failed'));
      } catch (err) {
        document.body.removeChild(ta);
        reject(err);
      }
    });
  }

  function initCopy() {
    qsa('[data-copy]').forEach(function (el) {
      if (!el.getAttribute('data-i18n-idle')) {
        el.setAttribute('data-i18n-idle', el.textContent.trim());
      }

      el.addEventListener('click', function () {
        var value = resolveCopyValue(el.getAttribute('data-copy'));
        if (!value) return;

        copyText(value)
          .then(function () {
            el.setAttribute('data-copy-state', 'copied');
            var label =
              el.querySelector('.contact-card__label[data-i18n]') ||
              el.querySelector('[data-i18n]') ||
              el;
            var idle = el.getAttribute('data-i18n-idle') || label.textContent.trim();
            var idleKey =
              label.getAttribute('data-i18n') || el.getAttribute('data-i18n') || '';
            label.textContent = t('contact.copied', 'Copied!');
            window.setTimeout(function () {
              el.removeAttribute('data-copy-state');
              if (idleKey && window.I18n) {
                label.textContent = t(idleKey, idle || '');
              } else {
                label.textContent = idle || label.textContent;
              }
            }, 2000);
          })
          .catch(function (err) {
            console.warn('[ui] clipboard copy failed', err);
          });
      });
    });
  }

  /* ---------- Boot ---------- */

  function boot() {
    initNav();
    initLangMenu();
    initReveal();
    initCopy();

    var tasks = [];

    if (window.I18n && typeof window.I18n.init === 'function') {
      tasks.push(window.I18n.init());
    }

    if (window.CyberBg && typeof window.CyberBg.init === 'function') {
      window.CyberBg.init();
    }

    if (window.GitHubStats && typeof window.GitHubStats.mount === 'function') {
      var hasGh =
        document.getElementById('gh-avatar') ||
        document.getElementById('profile-avatar') ||
        document.getElementById('gh-repos');
      if (hasGh) {
        tasks.push(window.GitHubStats.mount());
      }
    }

    return Promise.all(tasks).catch(function (err) {
      console.error('[ui] boot error', err);
    });
  }

  window.UI = {
    init: boot,
    observeReveals: observeReveals,
    SOCIAL: SOCIAL,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(window, document);
