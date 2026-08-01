<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/config.php';

$GAMES = [
    [
        'id' => 'shattered-paradise',
        'titleKey' => 'games.shatteredParadise.title',
        'subtitleKey' => 'games.shatteredParadise.subtitle',
        'descriptionKey' => 'games.shatteredParadise.description',
        'href' => 'https://shattered-paradise.com/',
        'status' => 'wip',
        'media' => [
            'type' => 'image',
            'src' => 'https://shattered-paradise.com/static/main/media/brand/logo/logo_2.webp',
            'alt' => 'Shattered Paradise',
        ],
        'tags' => ['roguelike', 'godot', 'studio'],
        'featured' => true,
        'size' => 'lg',
    ],
    [
        'id' => 'rdk',
        'titleKey' => 'games.rdk.title',
        'subtitleKey' => 'games.rdk.subtitle',
        'descriptionKey' => 'games.rdk.description',
        'links' => [
            ['labelKey' => 'games.rdk.patreon', 'href' => 'https://www.patreon.com/rdk_game'],
            ['labelKey' => 'games.rdk.reddit', 'href' => 'https://www.reddit.com/r/godot/comments/1rvnxux/i_made_this_intro_cutscene_entirely_using_godots/'],
        ],
        'status' => 'wip',
        'href' => 'https://www.youtube.com/watch?v=tEkTe1g0w5c',
        'media' => ['type' => 'youtube', 'src' => 'tEkTe1g0w5c', 'alt' => 'Rapid Deployment Killzone gameplay'],
        'tags' => ['3d', 'action', 'godot'],
        'featured' => true,
        'size' => 'lg',
    ],
    [
        'id' => 'crimson-yule',
        'titleKey' => 'games.crimsonYule.title',
        'subtitleKey' => 'games.crimsonYule.subtitle',
        'descriptionKey' => 'games.crimsonYule.description',
        'href' => 'https://www.youtube.com/watch?v=E8OEPxf1ojg',
        'status' => 'wip',
        'media' => ['type' => 'youtube', 'src' => 'E8OEPxf1ojg', 'alt' => 'The Crimson Yule - Occultism Simulator'],
        'tags' => ['simulator', 'godot'],
        'featured' => true,
        'size' => 'lg',
    ],
    [
        'id' => 'fight-life-legacy',
        'titleKey' => 'games.fightLifeLegacy.title',
        'subtitleKey' => 'games.fightLifeLegacy.subtitle',
        'descriptionKey' => 'games.fightLifeLegacy.description',
        'href' => 'https://store.steampowered.com/app/4240750/Fight_Life_Legacy/',
        'status' => 'workedOn',
        'media' => [
            'type' => 'image',
            'src' => 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4240750/369b086366153bf746724d6fcef6a9ab4d5a9a61/capsule_616x353.jpg',
            'alt' => 'Fight Life Legacy',
        ],
        'tags' => ['rpg', 'fighting', 'studio', 'steam'],
        'featured' => true,
        'size' => 'lg',
    ],
    [
        'id' => 'talora',
        'titleKey' => 'games.talora.title',
        'subtitleKey' => 'games.talora.subtitle',
        'descriptionKey' => 'games.talora.description',
        'status' => 'wip',
        'media' => ['type' => 'image', 'src' => 'images/TaloraRollDesk_PROMO.png', 'alt' => 'Talora Roll Desk'],
        'tags' => ['godot', 'desk'],
        'featured' => true,
        'size' => 'md',
    ],
    [
        'id' => 'andromeda',
        'titleKey' => 'games.andromeda.title',
        'subtitleKey' => 'games.andromeda.subtitle',
        'descriptionKey' => 'games.andromeda.description',
        'href' => 'https://arthurfam.itch.io/take-it-to-andromeda',
        'status' => 'released',
        'media' => ['type' => 'image', 'src' => 'images/print02.png', 'alt' => 'Take it to Andromeda'],
        'tags' => ['nes', 'jam'],
        'featured' => true,
        'size' => 'md',
    ],
    [
        'id' => 'tiny4',
        'titleKey' => 'games.tiny4.title',
        'subtitleKey' => 'games.tiny4.subtitle',
        'descriptionKey' => 'games.tiny4.description',
        'href' => 'https://gx.games/pt-br/games/stwow8/tiny-4-bullets/',
        'status' => 'online',
        'media' => ['type' => 'image', 'src' => 'images/CAPA tiny 4 bullets.png', 'alt' => 'Tiny 4 Bullets'],
        'tags' => ['multiplayer', '4p'],
        'featured' => true,
        'size' => 'md',
    ],
    [
        'id' => 'beak-pulp',
        'titleKey' => 'games.beakPulp.title',
        'subtitleKey' => 'games.beakPulp.subtitle',
        'descriptionKey' => 'games.beakPulp.description',
        'status' => 'wip',
        'media' => ['type' => 'image', 'src' => 'images/BeakAndPulp.jpeg', 'alt' => 'Beak and Pulp'],
        'tags' => ['adventure'],
        'featured' => true,
        'size' => 'md',
    ],
    [
        'id' => 'chip',
        'titleKey' => 'games.chip.title',
        'subtitleKey' => 'games.chip.subtitle',
        'descriptionKey' => 'games.chip.description',
        'status' => 'released',
        'media' => ['type' => 'gif', 'src' => 'images/MOSHED-2019-8-8-1-26-30.gif', 'alt' => 'Chip Keyboard'],
        'tags' => ['rhythm'],
        'featured' => true,
        'size' => 'md',
    ],
];

$ANIMATIONS = [
    [
        'id' => 'commander-amelia',
        'titleKey' => 'animation.commanderAmelia.title',
        'subtitleKey' => 'animation.commanderAmelia.subtitle',
        'descriptionKey' => 'animation.commanderAmelia.description',
        'href' => 'https://youtu.be/BHVearPn7E0',
        'media' => ['type' => 'youtube', 'src' => 'BHVearPn7E0', 'alt' => 'Commander Amelia character intro'],
        'tags' => ['2d', 'character', 'intro'],
        'size' => 'lg',
    ],
];

$MODELS = [
    [
        'id' => 'banana-duck',
        'titleKey' => 'models.bananaDuck.title',
        'statsKey' => 'models.bananaDuck.stats',
        'media' => ['type' => 'gif', 'src' => 'images/Panana.gif', 'alt' => 'Banana Duck'],
        'palette' => ['#ffffff', '#ffc400', '#ffee00', '#42250d', '#dafa4a'],
    ],
    [
        'id' => 'insect',
        'titleKey' => 'models.insect.title',
        'statsKey' => 'models.insect.stats',
        'media' => ['type' => 'gif', 'src' => 'images/GarGIF.gif', 'alt' => 'Insect Base'],
        'palette' => ['#b31a0a', '#2b243d', '#ffffff', '#5291c2'],
    ],
    [
        'id' => 'model-slot-1',
        'titleKey' => 'models.future1.title',
        'statsKey' => 'models.future1.stats',
        'media' => ['type' => 'placeholder'],
        'palette' => [],
    ],
];

$WORKFLOW_STEPS = [
    ['id' => 'planning', 'titleKey' => 'workflow.planning.title', 'descriptionKey' => 'workflow.planning.description'],
    ['id' => 'modeling', 'titleKey' => 'workflow.modeling.title', 'descriptionKey' => 'workflow.modeling.description'],
    ['id' => 'texturing', 'titleKey' => 'workflow.texturing.title', 'descriptionKey' => 'workflow.texturing.description'],
    ['id' => 'optimization', 'titleKey' => 'workflow.optimization.title', 'descriptionKey' => 'workflow.optimization.description'],
    ['id' => 'export', 'titleKey' => 'workflow.export.title', 'descriptionKey' => 'workflow.export.description'],
];

$GALLERY_ITEMS = [
    ['id' => 'talora-promo', 'media' => ['type' => 'image', 'src' => 'images/TaloraRollDesk_PROMO.png', 'alt' => 'Talora Roll Desk']],
    ['id' => 'rdk-game', 'media' => ['type' => 'image', 'src' => 'images/RDKgame.png', 'alt' => 'Rapid Deployment Killzone']],
    ['id' => 'panana-2d', 'media' => ['type' => 'image', 'src' => 'images/Panana2D.png', 'alt' => 'Panana 2D']],
    ['id' => 'beak-pulp', 'media' => ['type' => 'image', 'src' => 'images/BeakAndPulp.jpeg', 'alt' => 'Beak and Pulp']],
    ['id' => 'banana-duck', 'media' => ['type' => 'gif', 'src' => 'images/Panana.gif', 'alt' => 'Banana Duck']],
    ['id' => 'insect', 'media' => ['type' => 'gif', 'src' => 'images/GarGIF.gif', 'alt' => 'Insect Base']],
    ['id' => 'tiny4', 'media' => ['type' => 'image', 'src' => 'images/tiny4bullets.png', 'alt' => 'Tiny 4 Bullets']],
    ['id' => 'andromeda', 'media' => ['type' => 'image', 'src' => 'images/print02.png', 'alt' => 'Take it to Andromeda']],
    ['id' => 'chip', 'media' => ['type' => 'gif', 'src' => 'images/MOSHED-2019-8-8-1-26-30.gif', 'alt' => 'Chip Keyboard']],
];

$HOME_GAME_PREVIEWS = array_values(array_filter($GAMES, static fn ($g) => !empty($g['featured'])));
