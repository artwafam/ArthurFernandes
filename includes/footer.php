<?php
declare(strict_types=1);

require_once __DIR__ . '/helpers.php';
?>
  </main>

  <footer class="site-footer">
    <div class="container-main">
      <div class="footer-links">
        <a href="mailto:<?= e(SOCIAL_LINKS['email']) ?>" class="footer-link"><?= e(SOCIAL_LINKS['email']) ?></a>
        <button type="button" class="footer-link" data-copy="discord" data-i18n-idle="Discord · <?= e(SOCIAL_LINKS['discord']) ?>">
          Discord · <?= e(SOCIAL_LINKS['discord']) ?>
        </button>
        <a href="<?= e(SOCIAL_LINKS['itch']) ?>" target="_blank" rel="noopener noreferrer" class="footer-link">itch.io</a>
      </div>
      <p class="text-small footer-rights">
        <?= e((string) date('Y')) ?> · <span data-i18n="footer.rights"><?= e(i18n('footer.rights')) ?></span>
      </p>
      <a href="crocotile.php" class="footer-services">3D Services</a>
    </div>
  </footer>

  <script src="assets/js/i18n.js" defer></script>
  <script src="assets/js/github.js" defer></script>
  <script src="assets/js/cyber-bg.js" defer></script>
  <script src="assets/js/ui.js" defer></script>
</body>
</html>
