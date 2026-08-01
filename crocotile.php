<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/data/content.php';
require_once __DIR__ . '/includes/header.php';
?>

<section class="page-hero section-padding">
  <div class="container-main reveal">
    <span class="text-label" data-i18n="modeling.label"><?= e(i18n('modeling.label')) ?></span>
    <h1 data-i18n="crocotilePage.hero"><?= e(i18n('crocotilePage.hero')) ?></h1>
    <p class="text-small section-lead" data-i18n="crocotilePage.description"><?= e(i18n('crocotilePage.description')) ?></p>
    <div class="section-header__rule"></div>
  </div>
</section>

<section class="section-padding section-padding--tight-top">
  <div class="container-main">
    <div class="reveal">
      <div class="section-header">
        <span class="text-label">Crocotile3D</span>
        <h2 data-i18n="crocotilePage.gallery"><?= e(i18n('crocotilePage.gallery')) ?></h2>
        <div class="section-header__rule"></div>
      </div>
    </div>
    <div class="cards-grid">
      <?php foreach ($MODELS as $i => $model): ?>
        <article class="model-card glass glass-hover reveal">
          <?php render_media($model['media'], 'aspect-square', 'rounded-none'); ?>
          <div class="model-card__body">
            <h3 data-i18n="<?= e($model['titleKey']) ?>"><?= e(i18n($model['titleKey'])) ?></h3>
            <p class="model-card__stats" data-i18n="<?= e($model['statsKey']) ?>"><?= e(i18n($model['statsKey'])) ?></p>
            <?php if (!empty($model['palette'])): ?>
              <div class="model-card__palette">
                <p class="model-card__palette-label" data-i18n="models.palette"><?= e(i18n('models.palette')) ?></p>
                <div class="palette-swatches">
                  <?php foreach ($model['palette'] as $color): ?>
                    <div class="palette-swatch" style="background-color: <?= e($color) ?>" title="<?= e($color) ?>"></div>
                  <?php endforeach; ?>
                </div>
              </div>
            <?php endif; ?>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section-padding">
  <div class="container-main">
    <div class="reveal">
      <div class="section-header">
        <span class="text-label">Pipeline</span>
        <h2 data-i18n="crocotilePage.workflow"><?= e(i18n('crocotilePage.workflow')) ?></h2>
        <div class="section-header__rule"></div>
      </div>
    </div>
    <div class="workflow-list">
      <?php foreach ($WORKFLOW_STEPS as $i => $step): ?>
        <div class="workflow-step glass glass-hover reveal">
          <span class="workflow-step__num"><?= e(str_pad((string) ($i + 1), 2, '0', STR_PAD_LEFT)) ?></span>
          <h3 data-i18n="<?= e($step['titleKey']) ?>"><?= e(i18n($step['titleKey'])) ?></h3>
          <p class="text-small" data-i18n="<?= e($step['descriptionKey']) ?>"><?= e(i18n($step['descriptionKey'])) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section-padding">
  <div class="container-main">
    <div class="reveal">
      <div class="section-header">
        <span class="text-label">$</span>
        <h2 data-i18n="crocotilePage.pricing"><?= e(i18n('crocotilePage.pricing')) ?></h2>
        <div class="section-header__rule"></div>
      </div>
      <div class="glass pricing-box">
        <p class="pricing-box__text" data-i18n="crocotilePage.pricingText"><?= e(i18n('crocotilePage.pricingText')) ?></p>
      </div>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/contact-section.php'; ?>
<?php require __DIR__ . '/includes/footer.php'; ?>
