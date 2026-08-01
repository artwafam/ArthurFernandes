<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/data/content.php';
require_once __DIR__ . '/includes/header.php';
?>

<section class="page-hero section-padding">
  <div class="container-main reveal">
    <span class="text-label" data-i18n="games.label"><?= e(i18n('games.label')) ?></span>
    <h1 data-i18n="gamesPage.hero"><?= e(i18n('gamesPage.hero')) ?></h1>
    <p class="text-small section-lead" data-i18n="gamesPage.description"><?= e(i18n('gamesPage.description')) ?></p>
    <div class="section-header__rule"></div>
  </div>
</section>

<section class="section-padding section-padding--tight-top">
  <div class="container-main">
    <div class="reveal">
      <div class="section-header">
        <span class="text-label">Godot</span>
        <h2 data-i18n="gamesPage.gridTitle"><?= e(i18n('gamesPage.gridTitle')) ?></h2>
        <div class="section-header__rule"></div>
      </div>
    </div>
    <div class="cards-grid">
      <?php foreach ($GAMES as $project): ?>
        <?php require __DIR__ . '/includes/project-card.php'; ?>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/contact-section.php'; ?>
<?php require __DIR__ . '/includes/footer.php'; ?>
