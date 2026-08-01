<?php
declare(strict_types=1);
?>
<section id="contact" class="section-padding">
  <div class="container-main">
    <div class="reveal">
      <div class="section-header">
        <span class="text-label" data-i18n="contact.label"><?= e(i18n('contact.label')) ?></span>
        <h2 data-i18n="contact.title"><?= e(i18n('contact.title')) ?></h2>
        <div class="section-header__rule"></div>
      </div>
      <p class="text-small section-lead" data-i18n="contact.subtitle"><?= e(i18n('contact.subtitle')) ?></p>
    </div>

    <div class="contact-grid">
      <a href="mailto:<?= e(SOCIAL_LINKS['email']) ?>" class="contact-card contact-card--accent glass glass-hover reveal">
        <div class="contact-card__icon">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        </div>
        <div>
          <span class="contact-card__label" data-i18n="contact.email"><?= e(i18n('contact.email')) ?></span>
        </div>
      </a>

      <button type="button" class="contact-card contact-card--warm glass glass-hover reveal" data-copy="discord" data-i18n-idle="<?= e(i18n('contact.discord')) ?>">
        <div class="contact-card__icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.028C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.029a.077.077 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.007.128 12.301 12.301 0 0 1-1.873.891.076.076 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.077.077 0 0 0 .084.029c1.961-.607 3.95-1.522 6.002-3.029a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.029zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.334-.955 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>
        </div>
        <div>
          <span class="contact-card__label" data-i18n="contact.discord"><?= e(i18n('contact.discord')) ?></span>
          <span class="text-small contact-card__handle"><?= e(SOCIAL_LINKS['discord']) ?></span>
        </div>
      </button>

      <a href="<?= e(SOCIAL_LINKS['itch']) ?>" target="_blank" rel="noopener noreferrer" class="contact-card contact-card--accent glass glass-hover reveal">
        <div class="contact-card__icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 6v12h2V8h2l3 8h2l3-8h2v10h2V6h-3.5l-2.5 6.5L8.5 6H2z"/></svg>
        </div>
        <div>
          <span class="contact-card__label" data-i18n="contact.itch"><?= e(i18n('contact.itch')) ?></span>
        </div>
      </a>
    </div>

    <div class="contact-copy-row">
      <button type="button" class="btn btn-ghost" data-copy="email" data-i18n="contact.copy" data-i18n-idle="<?= e(i18n('contact.copy')) ?>">
        <?= e(i18n('contact.copy')) ?>
      </button>
      <span class="text-small contact-email"><?= e(SOCIAL_LINKS['email']) ?></span>
    </div>
  </div>
</section>
