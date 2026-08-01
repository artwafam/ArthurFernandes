<?php
declare(strict_types=1);

require_once __DIR__ . '/helpers.php';

$page = current_page();
$pageTitle = 'Arthur F.';
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="icon/apple-touch-icon.png" />
  <link rel="manifest" href="icon/site.webmanifest" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Arthur Fernandes, Game Developer, 2D &amp; 3D Animator. Low-poly modeling, Godot games, and interactive experiences." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Orbitron:wght@500;600;700;800&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/site.css" />
  <title><?= e($pageTitle) ?></title>
</head>
<body class="scanlines">
  <div id="cyber-bg" class="cyber-bg" aria-hidden="true">
    <div class="cyber-bg__void"></div>
    <div class="cyber-bg__grid cyber-grid"></div>
    <div class="cyber-bg__glow"></div>
    <canvas id="cyber-canvas"></canvas>
  </div>

  <header class="site-header">
    <nav class="nav-bar glass">
      <a href="index.php" class="brand neon-text">ARTHUR<span class="text-warm">.</span>F</a>

      <div class="nav-links">
        <a href="index.php" class="nav-link<?= $page === 'home' ? ' is-active' : '' ?>" data-i18n="nav.home"><?= e(i18n('nav.home')) ?></a>
        <a href="index.php#modeling" class="nav-link" data-i18n="nav.modeling"><?= e(i18n('nav.modeling')) ?></a>
        <a href="index.php#stack" class="nav-link" data-i18n="nav.stack"><?= e(i18n('nav.stack')) ?></a>
        <a href="games.php" class="nav-link<?= $page === 'games' ? ' is-active' : '' ?>" data-i18n="nav.games"><?= e(i18n('nav.games')) ?></a>
        <a href="index.php#web" class="nav-link" data-i18n="nav.web"><?= e(i18n('nav.web')) ?></a>
        <a href="index.php#contact" class="nav-link" data-i18n="nav.contact"><?= e(i18n('nav.contact')) ?></a>
      </div>

      <div class="nav-actions">
        <div class="lang-wrap">
          <button type="button" id="lang-toggle" class="lang-btn glass-hover" aria-label="Change language">
            <img id="lang-flag" class="flag-icon flag-sm" src="images/reino-unido.png" alt="" />
            <span id="lang-label">EN</span>
          </button>
          <div id="lang-menu" class="lang-menu glass hidden" role="menu">
            <?php foreach (LOCALES as $locale): ?>
              <button type="button" class="lang-option" data-locale="<?= e($locale['code']) ?>" role="menuitem">
                <img class="flag-icon flag-sm" src="<?= e($locale['flag']) ?>" alt="" />
                <?= e($locale['label']) ?>
              </button>
            <?php endforeach; ?>
          </div>
        </div>

        <button type="button" id="nav-toggle" class="nav-toggle" aria-label="Toggle menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path class="icon-open" d="M4 7h16M4 12h16M4 17h16" />
            <path class="icon-close hidden" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    </nav>

    <div id="mobile-menu" class="mobile-menu glass hidden">
      <a href="index.php" class="nav-link" data-i18n="nav.home"><?= e(i18n('nav.home')) ?></a>
      <a href="index.php#modeling" class="nav-link" data-i18n="nav.modeling"><?= e(i18n('nav.modeling')) ?></a>
      <a href="index.php#stack" class="nav-link" data-i18n="nav.stack"><?= e(i18n('nav.stack')) ?></a>
      <a href="games.php" class="nav-link" data-i18n="nav.games"><?= e(i18n('nav.games')) ?></a>
      <a href="index.php#web" class="nav-link" data-i18n="nav.web"><?= e(i18n('nav.web')) ?></a>
      <a href="index.php#contact" class="nav-link" data-i18n="nav.contact"><?= e(i18n('nav.contact')) ?></a>
    </div>
  </header>

  <main class="site-main">
