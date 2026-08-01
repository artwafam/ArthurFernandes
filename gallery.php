<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/data/content.php';
require_once __DIR__ . '/includes/header.php';
?>

<section class="page-hero section-padding">
  <div class="container-main reveal">
    <span class="text-label" data-i18n="galleryPage.label"><?= e(i18n('galleryPage.label')) ?></span>
    <h1 data-i18n="galleryPage.hero"><?= e(i18n('galleryPage.hero')) ?></h1>
    <p class="text-small section-lead" data-i18n="galleryPage.description"><?= e(i18n('galleryPage.description')) ?></p>
    <div class="section-header__rule"></div>
  </div>
</section>

<section class="section-padding section-padding--tight-top">
  <div class="container-main">
    <div class="cards-grid">
      <?php foreach ($GALLERY_ITEMS as $item): ?>
        <article class="gallery-card glass glass-hover reveal">
          <?php render_media($item['media'], 'aspect-video', 'rounded-none'); ?>
          <?php if (!empty($item['media']['alt'])): ?>
            <p class="text-small gallery-card__caption"><?= e($item['media']['alt']) ?></p>
          <?php endif; ?>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/contact-section.php'; ?>
<?php require __DIR__ . '/includes/footer.php'; ?>
