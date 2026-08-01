/**
 * GitHub stats for artwafam — port of src/services/githubApi.ts
 * Cache key github-portfolio-cache-v2, TTL 1h.
 * Fills #gh-* and #profile-* DOM nodes via mount().
 */
(function (window) {
  'use strict';

  var GITHUB_USERNAME = 'artwafam';
  var CACHE_KEY = 'github-portfolio-cache-v2';
  var CACHE_TTL_MS = 60 * 60 * 1000;
  var MAX_REPO_LANG_FETCHES = 20;

  var HIDDEN_LANGUAGES = {
    TypeScript: true,
    JavaScript: true,
    HTML: true,
    CSS: true,
    JSON: true,
    Vue: true,
    Dockerfile: true,
  };

  var LANGUAGE_COLORS = {
    HTML: '#e34c26',
    CSS: '#563d7c',
    GDScript: '#478cbf',
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    'C#': '#178600',
    Shell: '#89e051',
  };

  var profileAvatar = 'https://github.com/' + GITHUB_USERNAME + '.png?size=200';
  var profileUrl = 'https://github.com/' + GITHUB_USERNAME;

  var FALLBACK = {
    login: GITHUB_USERNAME,
    name: 'Arthur Fernandes',
    html_url: profileUrl,
    avatar_url: profileAvatar,
    bio: null,
    public_repos: 0,
    followers: 0,
    following: 0,
    created_at: '',
  };

  var inflight = null;

  function readCache(allowStale) {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var entry = JSON.parse(raw);
      if (!allowStale && Date.now() - entry.fetchedAt > CACHE_TTL_MS) return null;
      return entry.data || null;
    } catch (_) {
      return null;
    }
  }

  function writeCache(data) {
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ fetchedAt: Date.now(), data: data }),
      );
    } catch (_) {
      /* quota / private mode */
    }
  }

  function githubFetch(url) {
    return fetch(url, {
      headers: { Accept: 'application/vnd.github+json' },
    });
  }

  function withFallback(partial) {
    if (partial && partial.user) {
      return {
        user: Object.assign({}, FALLBACK, partial.user),
        languages: partial.languages || [],
      };
    }
    return { user: Object.assign({}, FALLBACK), languages: [] };
  }

  function fetchFromNetwork() {
    return githubFetch('https://api.github.com/users/' + GITHUB_USERNAME).then(
      function (userRes) {
        if (!userRes.ok) {
          throw new Error('GitHub user fetch failed: ' + userRes.status);
        }
        return userRes.json().then(function (userJson) {
          var user = Object.assign({}, userJson, {
            avatar_url: userJson.avatar_url || profileAvatar,
            html_url: userJson.html_url || profileUrl,
          });

          return githubFetch(
            'https://api.github.com/users/' +
              GITHUB_USERNAME +
              '/repos?per_page=100&sort=updated',
          ).then(function (reposRes) {
            if (!reposRes.ok) {
              throw new Error('GitHub repos fetch failed: ' + reposRes.status);
            }
            return reposRes.json().then(function (repos) {
              var ownRepos = repos
                .filter(function (r) {
                  return !r.fork;
                })
                .slice(0, MAX_REPO_LANG_FETCHES);

              var langTotals = {};

              return Promise.all(
                ownRepos.map(function (repo) {
                  return githubFetch(repo.languages_url)
                    .then(function (langRes) {
                      if (!langRes.ok) return;
                      return langRes.json().then(function (langs) {
                        Object.keys(langs).forEach(function (name) {
                          langTotals[name] = (langTotals[name] || 0) + langs[name];
                        });
                      });
                    })
                    .catch(function () {
                      /* skip repo */
                    });
                }),
              ).then(function () {
                var filtered = Object.keys(langTotals)
                  .filter(function (name) {
                    return !HIDDEN_LANGUAGES[name];
                  })
                  .map(function (name) {
                    return [name, langTotals[name]];
                  });

                var total =
                  filtered.reduce(function (sum, pair) {
                    return sum + pair[1];
                  }, 0) || 1;

                var languages = filtered
                  .sort(function (a, b) {
                    return b[1] - a[1];
                  })
                  .slice(0, 6)
                  .map(function (pair) {
                    return {
                      name: pair[0],
                      bytes: pair[1],
                      percent: Math.round((pair[1] / total) * 100),
                      color: LANGUAGE_COLORS[pair[0]] || '#ffd60a',
                    };
                  })
                  .filter(function (lang) {
                    return lang.percent > 0;
                  });

                return { user: user, languages: languages };
              });
            });
          });
        });
      },
    );
  }

  function load() {
    var freshCache = readCache(false);
    if (freshCache) {
      return Promise.resolve({
        data: freshCache,
        fromCache: true,
        fromFallback: false,
      });
    }

    if (!inflight) {
      inflight = fetchFromNetwork()
        .then(function (data) {
          writeCache(data);
          return data;
        })
        .finally(function () {
          inflight = null;
        });
    }

    return inflight
      .then(function (data) {
        return { data: data, fromCache: false, fromFallback: false };
      })
      .catch(function () {
        var stale = readCache(true);
        if (stale) {
          return { data: stale, fromCache: true, fromFallback: false };
        }
        return {
          data: withFallback(null),
          fromCache: false,
          fromFallback: true,
        };
      });
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value == null ? '' : String(value);
  }

  function setHtml(id, value) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = value == null ? '' : String(value);
  }

  function setSrc(id, value, alt) {
    var el = document.getElementById(id);
    if (!el) return;
    if (value) el.setAttribute('src', value);
    if (alt != null && el.tagName === 'IMG') el.setAttribute('alt', alt);
  }

  function setHref(id, value) {
    var el = document.getElementById(id);
    if (el && value) el.setAttribute('href', value);
  }

  function show(id, visible) {
    var el = document.getElementById(id);
    if (!el) return;
    if (visible) el.classList.remove('hidden');
    else el.classList.add('hidden');
  }

  function i18n(key, fallback) {
    if (window.I18n && typeof window.I18n.t === 'function') {
      return window.I18n.t(key, fallback);
    }
    return fallback != null ? fallback : key;
  }

  function fillProfile(user) {
    setSrc('profile-avatar', user.avatar_url, user.name || 'Arthur Fernandes');
    setText('profile-name', user.name || 'Arthur Fernandes');
    setText('profile-login', '@' + (user.login || GITHUB_USERNAME));
    setHref('profile-link', user.html_url || profileUrl);

    var profileCard = document.querySelector('.profile-card');
    if (profileCard && profileCard.tagName === 'A') {
      profileCard.setAttribute('href', user.html_url || profileUrl);
    }
  }

  function buildLangBars(languages) {
    return languages
      .map(function (lang) {
        var isPrimary = lang.name === 'GDScript';
        return (
          '<div class="lang-bar reveal" data-lang="' +
          escapeAttr(lang.name) +
          '">' +
          '<div class="lang-bar__meta">' +
          '<span class="lang-bar__name' +
          (isPrimary ? ' is-primary' : '') +
          '">' +
          escapeHtml(lang.name) +
          '</span>' +
          '<span class="text-small">' +
          lang.percent +
          '%</span>' +
          '</div>' +
          '<div class="lang-bar__track' +
          (isPrimary ? ' is-primary' : '') +
          '">' +
          '<div class="lang-bar__fill" style="background-color:' +
          escapeAttr(lang.color) +
          ';--bar-width:' +
          lang.percent +
          '%"></div>' +
          '</div>' +
          '</div>'
        );
      })
      .join('');
  }

  function buildLangStrip(languages) {
    return languages
      .map(function (lang) {
        return (
          '<div class="lang-strip__seg" style="background-color:' +
          escapeAttr(lang.color) +
          '" title="' +
          escapeAttr(lang.name + ' ' + lang.percent + '%') +
          '"></div>'
        );
      })
      .join('');
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, '&#39;');
  }

  function fillGitHub(data, meta) {
    var user = (data && data.user) || FALLBACK;
    var languages = (data && data.languages) || [];
    var fromFallback = !!(meta && meta.fromFallback);

    fillProfile(user);

    setSrc('gh-avatar', user.avatar_url, user.login || GITHUB_USERNAME);
    setText('gh-login', '@' + (user.login || GITHUB_USERNAME));
    setHref('gh-link', user.html_url || profileUrl);
    setHref('gh-profile-btn', user.html_url || profileUrl);

    var bio =
      user.bio ||
      i18n('github.fallbackBio', 'Game Developer, web designer and 2D animator');
    setText('gh-bio', bio);

    setText('gh-repos', user.public_repos != null ? user.public_repos : '—');
    setText('gh-followers', user.followers != null ? user.followers : '—');

    var since = '—';
    if (user.created_at) {
      try {
        since = String(new Date(user.created_at).getFullYear());
      } catch (_) {
        since = '—';
      }
    }
    setText('gh-since', since);

    show('gh-loading', false);

    if (fromFallback) {
      show('gh-error', true);
      show('gh-empty', false);
      show('gh-langs', false);
      show('gh-lang-strip', false);
      return;
    }

    show('gh-error', false);

    if (!languages.length) {
      show('gh-empty', true);
      setText(
        'gh-empty',
        i18n('github.noLanguages', "Language breakdown isn't available right now."),
      );
      setHtml('gh-langs', '');
      setHtml('gh-lang-strip', '');
      show('gh-langs', false);
      show('gh-lang-strip', false);
      return;
    }

    show('gh-empty', false);
    setHtml('gh-langs', buildLangBars(languages));
    setHtml('gh-lang-strip', buildLangStrip(languages));
    show('gh-langs', true);
    show('gh-lang-strip', true);

    // Trigger reveal / bar animation on next frame
    requestAnimationFrame(function () {
      var bars = document.querySelectorAll('#gh-langs .lang-bar');
      for (var i = 0; i < bars.length; i++) {
        bars[i].classList.add('is-visible');
        var fill = bars[i].querySelector('.lang-bar__fill');
        if (fill) {
          var width = fill.style.getPropertyValue('--bar-width') || '0%';
          fill.style.width = width;
        }
      }
      if (window.UI && typeof window.UI.observeReveals === 'function') {
        window.UI.observeReveals(document.getElementById('gh-langs'));
      }
    });
  }

  function mount(options) {
    options = options || {};
    show('gh-loading', true);
    show('gh-error', false);
    show('gh-empty', false);

    // Seed profile with fallback immediately
    fillProfile(FALLBACK);
    setSrc('gh-avatar', FALLBACK.avatar_url, FALLBACK.login);
    setText('gh-login', '@' + FALLBACK.login);
    setHref('gh-link', FALLBACK.html_url);
    setHref('gh-profile-btn', FALLBACK.html_url);
    setText('gh-repos', '—');
    setText('gh-followers', '—');
    setText('gh-since', '—');
    setText('gh-bio', '…');

    return load().then(function (result) {
      fillGitHub(result.data, result);
      if (typeof options.onLoad === 'function') {
        options.onLoad(result);
      }
      return result;
    });
  }

  window.GitHubStats = {
    load: load,
    mount: mount,
    FALLBACK: FALLBACK,
    USERNAME: GITHUB_USERNAME,
  };
})(window);
