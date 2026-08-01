<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/data/content.php';
require_once __DIR__ . '/includes/header.php';
?>

<section id="top" class="hero section-padding">
  <div class="container-main hero__grid">
    <div class="hero__copy reveal">
      <span class="text-label hero__badge" data-i18n="hero.badge"><?= e(i18n('hero.badge')) ?></span>
      <h1>
        <span data-i18n="hero.title"><?= e(i18n('hero.title')) ?></span><br />
        <span class="gradient-text" data-i18n="hero.titleAccent"><?= e(i18n('hero.titleAccent')) ?></span>
      </h1>
      <p class="hero__subtitle" data-i18n="hero.subtitle"><?= e(i18n('hero.subtitle')) ?></p>
      <div class="hero__actions">
        <a href="games.php" class="btn btn-primary" data-i18n="hero.ctaGames"><?= e(i18n('hero.ctaGames')) ?></a>
        <a href="crocotile.php" class="btn btn-ghost" data-i18n="hero.ctaModels"><?= e(i18n('hero.ctaModels')) ?></a>
        <a href="#contact" class="btn btn-ghost" data-i18n="hero.ctaContact"><?= e(i18n('hero.ctaContact')) ?></a>
      </div>
    </div>

    <div class="hero__aside reveal">
      <a id="profile-link" href="https://github.com/<?= e(GITHUB_USERNAME) ?>" target="_blank" rel="noopener noreferrer" class="profile-card glass glass-hover">
        <div class="profile-card__avatar-wrap">
          <img id="profile-avatar" src="https://github.com/<?= e(GITHUB_USERNAME) ?>.png?size=200" alt="Arthur Fernandes" class="profile-card__avatar" />
          <span class="profile-card__gh-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </span>
        </div>
        <div>
          <p id="profile-name" class="profile-card__name">Arthur Fernandes</p>
          <p id="profile-login" class="profile-card__login">@<?= e(GITHUB_USERNAME) ?></p>
          <p class="text-small profile-card__tagline" data-i18n="profile.tagline"><?= e(i18n('profile.tagline')) ?></p>
        </div>
      </a>

      <div class="glass about-card">
        <span class="text-label" data-i18n="about.label"><?= e(i18n('about.label')) ?></span>
        <h2 data-i18n="about.title"><?= e(i18n('about.title')) ?></h2>
        <p class="text-small" data-i18n="about.p1"><?= e(i18n('about.p1')) ?></p>
        <p class="text-small" data-i18n="about.p2"><?= e(i18n('about.p2')) ?></p>
        <div class="about-card__langs">
          <div class="lang-flags">
            <span class="text-small" data-i18n="about.languages"><?= e(i18n('about.languages')) ?></span>
            <div class="lang-flags__list">
              <img class="flag-icon flag-md" src="images/brasil.png" alt="Português" />
              <img class="flag-icon flag-md" src="images/reino-unido.png" alt="English" />
              <img class="flag-icon flag-md" src="images/suecia.png" alt="Svenska" />
              <img class="flag-icon flag-md" src="images/japan-flag-icon-32.png" alt="日本語" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="scroll-cue" aria-hidden="true">
    <div class="scroll-cue__ring"><div class="scroll-cue__dot"></div></div>
  </div>
</section>

<section id="stack" class="section-padding">
  <div class="container-main">
    <div class="reveal">
      <div class="section-header">
        <span class="text-label" data-i18n="github.label"><?= e(i18n('github.label')) ?></span>
        <h2 data-i18n="github.title"><?= e(i18n('github.title')) ?></h2>
        <div class="section-header__rule"></div>
      </div>
      <p class="text-small section-lead" data-i18n="github.description"><?= e(i18n('github.description')) ?></p>
    </div>

    <div class="gh-grid">
      <div class="glass glass-hover gh-profile reveal">
        <div class="gh-profile__top">
          <img id="gh-avatar" src="https://github.com/<?= e(GITHUB_USERNAME) ?>.png?size=200" alt="<?= e(GITHUB_USERNAME) ?>" class="gh-avatar" />
          <div>
            <a id="gh-link" href="https://github.com/<?= e(GITHUB_USERNAME) ?>" target="_blank" rel="noopener noreferrer" class="gh-login">
              <span id="gh-login">@<?= e(GITHUB_USERNAME) ?></span>
            </a>
            <p id="gh-bio" class="text-small">…</p>
          </div>
        </div>
        <div class="gh-stats">
          <div class="stat-box">
            <p id="gh-repos" class="stat-box__value">—</p>
            <p class="text-small stat-box__label" data-i18n="github.repos"><?= e(i18n('github.repos')) ?></p>
          </div>
          <div class="stat-box">
            <p id="gh-followers" class="stat-box__value">—</p>
            <p class="text-small stat-box__label" data-i18n="github.followers"><?= e(i18n('github.followers')) ?></p>
          </div>
          <div class="stat-box">
            <p id="gh-since" class="stat-box__value">—</p>
            <p class="text-small stat-box__label" data-i18n="github.since"><?= e(i18n('github.since')) ?></p>
          </div>
        </div>
        <a id="gh-profile-btn" href="https://github.com/<?= e(GITHUB_USERNAME) ?>" target="_blank" rel="noopener noreferrer" class="gh-profile-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span data-i18n="github.viewProfile"><?= e(i18n('github.viewProfile')) ?></span>
        </a>
      </div>

      <div class="glass gh-langs-panel reveal">
        <h3 class="text-label" data-i18n="github.languages"><?= e(i18n('github.languages')) ?></h3>
        <div id="gh-loading" class="gh-loading">
          <div class="skeleton"></div>
          <div class="skeleton"></div>
          <div class="skeleton"></div>
        </div>
        <p id="gh-error" class="text-small hidden" data-i18n="github.error"><?= e(i18n('github.error')) ?></p>
        <p id="gh-empty" class="text-small hidden"></p>
        <div id="gh-langs" class="gh-langs"></div>
        <div id="gh-lang-strip" class="lang-strip"></div>
      </div>
    </div>

    <div class="glass tech-panel reveal">
      <h3 class="text-label" data-i18n="github.techStack"><?= e(i18n('github.techStack')) ?></h3>
      <div class="tech-grid">
        <?php foreach (TECH_STACK as $tech): ?>
          <a href="<?= e($tech['href']) ?>" target="_blank" rel="noopener noreferrer" class="tech-card glass-hover<?= !empty($tech['featured']) ? ' tech-card--featured' : '' ?>">
            <div class="tech-card__icon">
              <img src="<?= e(asset($tech['icon'])) ?>" alt="" />
            </div>
            <div>
              <p class="tech-card__name"><?= e($tech['name']) ?></p>
              <p class="text-small tech-card__cat">
                <?php if (!empty($tech['featured'])): ?>
                  <span data-i18n="github.primaryLanguage"><?= e(i18n('github.primaryLanguage')) ?></span>
                <?php else: ?>
                  <?= e($tech['category']) ?>
                <?php endif; ?>
              </p>
            </div>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>

<section id="game" class="section-padding">
  <div class="container-main">
    <div class="reveal section-head-row">
      <div class="section-header mb-0">
        <span class="text-label" data-i18n="games.label"><?= e(i18n('games.label')) ?></span>
        <h2 data-i18n="games.title"><?= e(i18n('games.title')) ?></h2>
        <div class="section-header__rule"></div>
      </div>
      <a href="gallery.php" class="btn btn-ghost" data-i18n="games.galleryCta"><?= e(i18n('games.galleryCta')) ?></a>
    </div>
    <p class="text-small section-lead reveal" data-i18n="games.description"><?= e(i18n('games.description')) ?></p>
    <div class="cards-grid">
      <?php foreach ($HOME_GAME_PREVIEWS as $project): ?>
        <?php require __DIR__ . '/includes/project-card.php'; ?>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section id="animation" class="section-padding">
  <div class="container-main">
    <div class="reveal">
      <div class="section-header">
        <span class="text-label" data-i18n="animation.label"><?= e(i18n('animation.label')) ?></span>
        <h2 data-i18n="animation.title"><?= e(i18n('animation.title')) ?></h2>
        <div class="section-header__rule"></div>
      </div>
      <p class="text-small section-lead" data-i18n="animation.description"><?= e(i18n('animation.description')) ?></p>
    </div>
    <div class="cards-grid">
      <?php foreach ($ANIMATIONS as $project): ?>
        <?php require __DIR__ . '/includes/project-card.php'; ?>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section id="modeling" class="section-padding">
  <div class="container-main">
    <div class="reveal">
      <div class="section-header">
        <span class="text-label" data-i18n="modeling.label"><?= e(i18n('modeling.label')) ?></span>
        <h2 data-i18n="modeling.title"><?= e(i18n('modeling.title')) ?></h2>
        <div class="section-header__rule"></div>
      </div>
      <div class="modeling-grid">
        <p class="text-small" data-i18n="modeling.description"><?= e(i18n('modeling.description')) ?></p>
        <div class="glass glass-hover modeling-feature">
          <?php render_media(['type' => 'gif', 'src' => 'images/Panana.gif', 'alt' => 'Banana Duck'], 'aspect-video'); ?>
          <div class="modeling-feature__footer">
            <div>
              <p class="modeling-feature__name" data-i18n="modeling.featured"><?= e(i18n('modeling.featured')) ?></p>
              <p class="text-small text-accent" data-i18n="modeling.tiles"><?= e(i18n('modeling.tiles')) ?></p>
            </div>
            <a href="crocotile.php" class="btn btn-primary" data-i18n="modeling.cta"><?= e(i18n('modeling.cta')) ?></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="web" class="section-padding">
  <div class="container-main">
    <div class="reveal">
      <div class="section-header">
        <span class="text-label" data-i18n="web.label"><?= e(i18n('web.label')) ?></span>
        <h2 data-i18n="web.title"><?= e(i18n('web.title')) ?></h2>
        <div class="section-header__rule"></div>
      </div>
      <div class="web-grid">
        <div>
          <p class="text-small" data-i18n="web.description"><?= e(i18n('web.description')) ?></p>
          <p class="text-small mt-4" data-i18n="web.experience"><?= e(i18n('web.experience')) ?></p>
          <div class="web-activities">
            <?php foreach (['web', 'design', 'video'] as $activity): ?>
              <div class="glass activity-card">
                <p class="text-small" data-i18n="web.activities.<?= e($activity) ?>"><?= e(i18n('web.activities.' . $activity)) ?></p>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
        <div class="web-art">
          <img src="images/htmlEditor.png" alt="Web development" class="glass web-art__img" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/contact-section.php'; ?>
<?php require __DIR__ . '/includes/footer.php'; ?>
