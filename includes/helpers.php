<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';

function e(?string $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function asset(string $path): string
{
    if (preg_match('#^https?://#i', $path)) {
        return $path;
    }
    return ltrim($path, '/');
}

/** Nested translation key lookup helper for default English server render */
function t_default(array $dict, string $key, string $fallback = ''): string
{
    $parts = explode('.', $key);
    $cur = $dict;
    foreach ($parts as $part) {
        if (!is_array($cur) || !array_key_exists($part, $cur)) {
            return $fallback !== '' ? $fallback : $key;
        }
        $cur = $cur[$part];
    }
    return is_string($cur) ? $cur : ($fallback !== '' ? $fallback : $key);
}

function load_en_dict(): array
{
    static $dict = null;
    if ($dict === null) {
        $raw = file_get_contents(__DIR__ . '/../lang/en.json');
        $dict = json_decode($raw ?: '{}', true) ?: [];
    }
    return $dict;
}

function i18n(string $key, string $fallback = ''): string
{
    return t_default(load_en_dict(), $key, $fallback);
}

function render_media(array $media, string $aspect = 'aspect-video', string $class = ''): void
{
    $type = $media['type'] ?? 'placeholder';
    $src = $media['src'] ?? null;
    $alt = $media['alt'] ?? '';

    if ($type === 'placeholder' || !$src) {
        echo '<div class="' . e("$aspect $class media-placeholder") . '">';
        echo '<svg class="icon-lg text-accent-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4" /></svg>';
        echo '<span class="text-small" data-i18n="media.addSoon">' . e(i18n('media.addSoon')) . '</span>';
        echo '</div>';
        return;
    }

    if ($type === 'youtube') {
        echo '<div class="' . e("$aspect $class media-frame") . '">';
        echo '<iframe src="https://www.youtube.com/embed/' . e($src) . '" title="' . e($alt ?: 'YouTube video') . '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        echo '</div>';
        return;
    }

    if ($type === 'video') {
        $poster = !empty($media['poster']) ? ' poster="' . e(asset($media['poster'])) . '"' : '';
        echo '<video class="' . e("$aspect $class media-video") . '" src="' . e(asset($src)) . '"' . $poster . ' autoplay loop muted playsinline aria-label="' . e($alt) . '"></video>';
        return;
    }

    $isSvg = str_ends_with($src, '.svg');
    $imgClass = $isSvg ? 'media-img media-img-svg' : 'media-img';
    echo '<img src="' . e(asset($src)) . '" alt="' . e($alt) . '" class="' . e("$aspect $class $imgClass") . '" loading="lazy" />';
}

function current_page(): string
{
    $script = basename($_SERVER['SCRIPT_NAME'] ?? 'index.php');
    return match ($script) {
        'games.php' => 'games',
        'crocotile.php' => 'crocotile',
        'gallery.php' => 'gallery',
        default => 'home',
    };
}
