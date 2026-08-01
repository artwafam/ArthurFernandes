<?php
declare(strict_types=1);

/** @var array $project */
$isYoutube = ($project['media']['type'] ?? '') === 'youtube';
$hasLinks = !empty($project['links']);
$isClickable = !empty($project['href']) && !$isYoutube && !$hasLinks;
$aspect = (($project['size'] ?? 'md') === 'lg') ? 'aspect-16-9' : 'aspect-video';
$wrapTag = $isClickable ? 'a' : 'div';
$attrs = $isClickable
    ? ' href="' . e($project['href']) . '" target="_blank" rel="noopener noreferrer" class="project-card-link"'
    : ' class="project-card-wrap"';
?>
<<?= $wrapTag . $attrs ?>>
  <article class="project-card glass glass-hover reveal">
    <div class="project-card__media">
      <?php render_media($project['media'], $aspect, $isYoutube ? '' : 'project-card__img'); ?>
      <?php if (!$isYoutube): ?>
        <div class="project-card__fade"></div>
      <?php endif; ?>
      <?php if (!empty($project['status'])): ?>
        <span class="project-card__status" data-i18n="games.status.<?= e($project['status']) ?>">
          <?= e(i18n('games.status.' . $project['status'])) ?>
        </span>
      <?php endif; ?>
    </div>
    <div class="project-card__body">
      <h3 class="project-card__title" data-i18n="<?= e($project['titleKey']) ?>"><?= e(i18n($project['titleKey'])) ?></h3>
      <?php if (!empty($project['subtitleKey'])): ?>
        <p class="project-card__subtitle text-small" data-i18n="<?= e($project['subtitleKey']) ?>"><?= e(i18n($project['subtitleKey'])) ?></p>
      <?php endif; ?>
      <p class="project-card__desc text-small" data-i18n="<?= e($project['descriptionKey']) ?>"><?= e(i18n($project['descriptionKey'])) ?></p>
      <?php if (!empty($project['tags'])): ?>
        <div class="project-card__tags">
          <?php foreach ($project['tags'] as $tagName): ?>
            <span class="tag"><?= e($tagName) ?></span>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
      <?php if ($hasLinks): ?>
        <div class="project-card__links">
          <?php foreach ($project['links'] as $link): ?>
            <a href="<?= e($link['href']) ?>" target="_blank" rel="noopener noreferrer" class="chip-link">
              <span data-i18n="<?= e($link['labelKey']) ?>"><?= e(i18n($link['labelKey'])) ?></span> →
            </a>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($project['href']) && $isYoutube): ?>
        <a href="<?= e($project['href']) ?>" target="_blank" rel="noopener noreferrer" class="watch-link">
          <span data-i18n="games.watchYoutube"><?= e(i18n('games.watchYoutube')) ?></span> →
        </a>
      <?php endif; ?>
    </div>
  </article>
</<?= $wrapTag ?>>
