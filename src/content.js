export const officialLinks = {
  steam: 'https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/',
  official: 'https://ironnest-game.com/',
  discord: 'https://discord.gg/E92DaqgnZv',
  youtube: 'https://www.youtube.com/@IRONNESTgame',
  gog: 'https://www.gog.com/en/game/iron_nest_heavy_turret_simulator',
  roadmap: 'https://steamcommunity.com/app/2950790/discussions/0/604170759802194525/',
};

export const externalLinkMap = {
  'Official site': officialLinks.official,
  'Steam': officialLinks.steam,
  'Steam page': officialLinks.steam,
  'Steam store page': officialLinks.steam,
  'GOG': officialLinks.gog,
  'GOG page': officialLinks.gog,
  'Official Discord': officialLinks.discord,
  'Official YouTube': officialLinks.youtube,
  'Steam official FAQ': officialLinks.roadmap,
  'Official Roadmap FAQ': officialLinks.roadmap,
  'Steam news': 'https://store.steampowered.com/news/app/2950790',
  'Pro Game Guides beginner guide':
    'https://progameguides.com/iron-nest/complete-iron-nest-beginners-guide-learn-how-to-play/',
  'Pro Game Guides map guide':
    'https://progameguides.com/iron-nest/iron-nest-map-and-measurements-guide-how-to-find-targets/',
  'Pro Game Guides counter-battery guide':
    'https://progameguides.com/iron-nest/iron-nest-counter-battery-fire-guide-how-to-stop-enemy-artillery/',
  'Pro Game Guides shell list':
    'https://progameguides.com/iron-nest/every-iron-nest-shell-type-full-ammo-list/',
  'Whisper Fire and Light walkthrough': 'https://www.whisperofthehouse.com/iron-nest/fire-and-light-walkthrough',
  'Whisper Liberation walkthrough': 'https://www.whisperofthehouse.com/iron-nest/liberation-walkthrough',
  'Whisper White Shells endings': 'https://www.whisperofthehouse.com/iron-nest/white-shells-endings',
  'Whisper of the House hub': 'https://www.whisperofthehouse.com/iron-nest',
  'Iron Nest Missions hub': 'https://ironnestmissions.com/',
  'Iron Nest Missions Mission 3 page': 'https://ironnestmissions.com/missions/mission-3-liberation',
  'Steam discussion': 'https://steamcommunity.com/app/2950790/discussions/0/592938720043291125/',
  'hello Tomi Mission 2 video': 'https://www.youtube.com/watch?v=rwQlG2iCq0Y',
  'hello Tomi Mission 3 video': 'https://www.youtube.com/watch?v=CjdMjfI71uA',
  'Tpose Gaming endings guide': 'https://tposegaming.com/iron-nest-endings-guide/',
  'IronNest.app endings': 'https://ironnest.app/endings/',
  'Destructoid speedrun guide':
    'https://www.destructoid.com/iron-nest-heavy-turret-simulator-speedrun-guide-how-to-kill-the-king/',
};

export const pages = [
  {
    slug: 'iron-nest-guide',
    title: 'Iron Nest Guide',
    keyword: 'iron nest guide',
    type: 'Guide',
    icon: 'book',
    description:
      'A field manual for new operators: read orders, plot targets, calculate firing data, choose shells, and survive the first sorties.',
    summary:
      'Use this as the central guide page. It links the core loop, beginner controls, mission notes, triangulation, shell choices, counter-battery pressure, endings, multiplayer, and roadmap pages.',
    sections: [
      {
        heading: 'Start With The Actual Loop',
        body:
          'Iron Nest is built around a repeatable artillery workflow. Read High Command orders, copy useful field data to the clipboard, place known positions on the tactical map, find the target from bearings or distances, calculate the firing solution, load the correct shell, then rotate and elevate the turret before firing.',
      },
      {
        heading: 'Do Not Guess Coordinates',
        body:
          'Mission details can depend on the current briefing, so treat guide examples as worked examples rather than universal answers. A useful guide should teach players how to read the map, not only give them one set of coordinates.',
      },
      {
        heading: 'Priority Pages',
        body:
          'The first cluster should focus on beginner guide, how to play, triangulation, counter-battery, shell types, mission 2, mission 3, endings, multiplayer, and roadmap. Download, trainer, torrent, and pure navigation searches stay out of the first version.',
      },
    ],
    sources: ['Official site', 'Steam store page', 'Pro Game Guides beginner guide'],
  },
  {
    slug: 'iron-nest-beginner-guide',
    title: 'Iron Nest Beginner Guide',
    keyword: 'iron nest beginner guide',
    type: 'Beginner',
    icon: 'flag',
    description:
      'Learn the first controls, clipboard habits, map basics, and firing sequence before your first serious Iron Nest mission.',
    summary:
      'A first-hour route for players who are intimidated by the turret room, map tools, typewriters, gauges, shell loader, and firing console.',
    sections: [
      {
        heading: 'Controls To Learn First',
        body:
          'Use WASD for movement, E to enter key interactions, left click to move parts or draw lines, right click to remove map lines or clipboard notes, Caps Lock to toggle the clipboard, Tab to focus the clipboard, G for the gas mask, and Esc to leave an interaction.',
      },
      {
        heading: 'Keep The Clipboard Visible',
        body:
          'The clipboard is the bridge between the briefing, reports, map, and firing console. Keep it visible while collecting coordinates, bearings, ranges, and calculator outputs so you do not rely on memory.',
      },
      {
        heading: 'Your First Shot',
        body:
          'Mark the Iron Nest, spotters, and reference points first. Then use the map tools to locate the target, draw the final line from your turret to the target, transfer range and bearing to the ballistic calculator, load the required shell, align the turret, and fire.',
      },
    ],
    sources: ['Pro Game Guides beginner guide', 'Official site', 'Steam store page'],
  },
  {
    slug: 'iron-nest-how-to-play',
    title: 'How To Play Iron Nest',
    keyword: 'iron nest how to play',
    type: 'Guide',
    icon: 'target',
    description:
      'A quick explanation of Iron Nest gameplay, from orders and field reports to map plotting, shell loading, turret movement, and shot review.',
    summary:
      'Answers the basic search intent directly: Iron Nest is a first-person artillery workflow, not a standard shooter.',
    sections: [
      {
        heading: 'Read Orders Before Touching The Gun',
        body:
          'Each mission starts with High Command and field intelligence. These notes define your objective, target type, current Iron Nest position, spotter positions, and clues such as bearing or distance.',
      },
      {
        heading: 'Turn Reports Into A Target',
        body:
          'Move the important lines to your clipboard and mark the tactical map. Bearings create lines from known points, distances create circles, and intersections reveal likely target locations.',
      },
      {
        heading: 'Calculate And Fire',
        body:
          'Once the target is marked, draw a final line from Iron Nest to the target to capture bearing and range. Use the ballistic calculator to choose distance, bearing, shell, charges, target type, and required elevation, then operate the turret and fire.',
      },
    ],
    sources: ['Official site', 'GOG page', 'Pro Game Guides beginner guide'],
  },
  {
    slug: 'iron-nest-mission-2-guide',
    title: 'Iron Nest Mission 2 Guide',
    keyword: 'iron nest mission 2 guide',
    type: 'Mission',
    icon: 'target',
    description:
      'Mission 2 Fire and Light guide notes for hostile target plotting, Star Shell correction, and why fixed coordinates should not be copied blindly.',
    summary:
      'Mission 2 has two clear phases: destructive fire against hostile targets, then illumination work with Star Shells.',
    sections: [
      {
        heading: 'Mission Shape',
        body:
          'Mission 2 is commonly referenced as Fire & Light. Third-party guides describe an opening hostile-target phase followed by a Star Shell illumination phase, so the page should separate destructive shots from correction shots.',
      },
      {
        heading: 'First Target Workflow',
        body:
          'Start by marking the Iron Nest and the two spotters from the briefing. Draw the two spotter bearing lines, mark their intersection, then draw the final firing line from Iron Nest to the target before using the ballistic calculator.',
      },
      {
        heading: 'Star Shell Correction',
        body:
          'After the first phase, illumination becomes the focus. One walkthrough uses a correction shot and then adjusts from the photo result; that should be framed as an example because mission values must be recalculated from the player’s own briefing.',
      },
    ],
    sources: ['Whisper Fire and Light walkthrough', 'Iron Nest Missions hub', 'hello Tomi Mission 2 video'],
  },
  {
    slug: 'iron-nest-mission-3-guide',
    title: 'Iron Nest Mission 3 Guide',
    keyword: 'iron nest mission 3 guide',
    type: 'Mission',
    icon: 'target',
    description:
      'Mission 3 Liberation guide notes for infantry targets, Scout Plane recon, AP ammo cache shots, and requisition choices.',
    summary:
      'Mission 3 appears to revolve around five infantry targets, recon usage, and an armored supply or ammunition cache.',
    sections: [
      {
        heading: 'What The Sources Agree On',
        body:
          'Mission 3 is commonly titled Liberation. Current sources point to requisition management, Scout Plane recon, five infantry targets, and an armored cache that needs AP rather than a broad explosive shell.',
      },
      {
        heading: 'Use Recon Carefully',
        body:
          'Player discussions show the likely pain point: finding all five infantry targets, especially around the friendly urban sector. The page should explain when to use Scout Plane or P4 recon instead of spending resources blindly.',
      },
      {
        heading: 'Avoid Fixed Coordinates',
        body:
          'Do not present copied coordinates as universal. The useful content is the method: read the current briefing, triangulate from supplied spotter data, protect friendlies, then pick shell type by target class.',
      },
    ],
    sources: ['Iron Nest Missions Mission 3 page', 'Whisper Liberation walkthrough', 'Steam discussion', 'hello Tomi Mission 3 video'],
  },
  {
    slug: 'iron-nest-how-to-triangulate',
    title: 'How To Triangulate In Iron Nest',
    keyword: 'iron nest how to triangulate',
    type: 'Mechanics',
    icon: 'crosshair',
    description:
      'Learn how Iron Nest triangulation works with grid cells, sub-cells, spotter bearings, distance circles, and final range checks.',
    summary:
      'This page is one of the best SEO fits because it answers a specific mechanic players get stuck on.',
    sections: [
      {
        heading: 'Understand The Grid',
        body:
          'The tactical map uses a large 20 by 10 grid with columns A through T and rows 1 through 10. Each large square is divided into a 10 by 10 sub-grid, so locations can look like F10 8:0 or I7 2:4.',
      },
      {
        heading: 'Place Known Positions First',
        body:
          'Mark the Iron Nest, spotters, and reference points before drawing any target lines. A small early marker mistake can push every later bearing, distance, and firing solution away from the true target.',
      },
      {
        heading: 'Find The Intersection',
        body:
          'Bearings are lines from known points, while distances are circles around known points. A target is usually found where two clues intersect; after that, draw from Iron Nest to the target to get the firing bearing and range.',
      },
    ],
    sources: ['Pro Game Guides map guide', 'Pro Game Guides beginner guide', 'Official site'],
  },
  {
    slug: 'iron-nest-counter-battery',
    title: 'Iron Nest Counter Battery Guide',
    keyword: 'iron nest counter battery',
    type: 'Mechanics',
    icon: 'shield',
    description:
      'A practical Iron Nest counter-battery guide covering the CBT timer, artillery priorities, Fire Direction Centers, and Emergency Move.',
    summary:
      'Counter-battery is urgent because the timer starts after your first shell when enemy artillery is active.',
    sections: [
      {
        heading: 'What Triggers CBT',
        body:
          'Counter-Battery Fire is the enemy artillery response to your attack. If enemy artillery is present, firing your first shell can start a countdown that ends with the Iron Nest being hit.',
      },
      {
        heading: 'Prepare Before The First Shot',
        body:
          'If a mission includes enemy artillery, locate as many targets as possible before firing. Mark all known variables and calculate multiple elevations before the timer begins.',
      },
      {
        heading: 'How To Stop Or Delay It',
        body:
          'Current guide sources say destroying artillery adds time, destroying Fire Direction Centers pauses the timer until another shell, and Emergency Move can reposition the Iron Nest while adding time. Destroying all enemy artillery ends the danger.',
      },
    ],
    sources: ['Pro Game Guides counter-battery guide', 'Official site'],
  },
  {
    slug: 'iron-nest-shell-types',
    title: 'Iron Nest Shell Types',
    keyword: 'iron nest shell types',
    type: 'Mechanics',
    icon: 'gauge',
    description:
      'A version-aware list of Iron Nest shell types, including HE, HCHE, AP, Star Shell, Smoke, Phosgene, and Tear Gas.',
    summary:
      'The game advertises 30 ammo types and abilities, while current third-party lists only confirm a smaller active set.',
    sections: [
      {
        heading: 'Version Warning',
        body:
          'Official material says the game includes or unlocks 30 ammo types and abilities. One current third-party list only confirms seven active shell types, so this page should say current known shells and refresh before publishing.',
      },
      {
        heading: 'Combat Shells',
        body:
          'HE is the standard explosive shell, HCHE has a much larger blast radius, and AP is for armored, bunker, or underground-style targets where penetration matters more than area damage.',
      },
      {
        heading: 'Utility Shells',
        body:
          'Star Shell is used for illumination and reconnaissance-like tasks. Smoke, Phosgene, and Tear Gas are listed as tactical or non-standard effects; practical mission use should be verified against the current build.',
      },
    ],
    sources: ['Official site', 'Steam page', 'Pro Game Guides shell list'],
  },
  {
    slug: 'iron-nest-calculator',
    title: 'Iron Nest Calculator Guide',
    keyword: 'iron nest calculator',
    type: 'Tool',
    icon: 'calculator',
    description:
      'Use the Iron Nest ballistic calculator correctly by entering range, bearing, shell type, powder charges, target type, and elevation.',
    summary:
      'This should start as a guide to the in-game calculator, not a promised external calculator tool.',
    sections: [
      {
        heading: 'What Players Are Looking For',
        body:
          'The search intent is likely help with the in-game ballistic calculator. The page should explain inputs, order of operations, and common mistakes before offering any separate tool.',
      },
      {
        heading: 'Required Inputs',
        body:
          'Use the final line from Iron Nest to the marked target to get range and bearing. Then set shell type, powder charges, and target category before calculating the required gun elevation.',
      },
      {
        heading: 'Tool Scope',
        body:
          'Do not invent formulas. If the site later adds an interactive calculator, it needs verified ballistic data from the game; first version should be a clean step-by-step usage page.',
      },
    ],
    sources: ['Official site', 'Pro Game Guides beginner guide', 'Pro Game Guides map guide'],
  },
  {
    slug: 'iron-nest-endings',
    title: 'Iron Nest Endings Guide',
    keyword: 'iron nest endings',
    type: 'Endings',
    icon: 'warning',
    description:
      'Spoiler-heavy Iron Nest endings notes for White Shells choices, High Command betrayal, and kill-the-king speedrun routes.',
    summary:
      'The page can be written, but it must be explicit that ending details come from third-party/player guide sources.',
    sections: [
      {
        heading: 'Add A Spoiler Warning',
        body:
          'Endings content should open with a spoiler warning. Several third-party sources point to four major outcomes around the final White Shells mission, but official materials only support the broader story/decision framing.',
      },
      {
        heading: 'White Shells Choices',
        body:
          'Current guide sources describe different final outcomes based on whether the player uses propaganda-style payloads, chemical or white phosphorus routes, atomic destruction, or turns on High Command and survives retaliation.',
      },
      {
        heading: 'Keep Speedrun Routes Separate',
        body:
          'The kill-the-king speedrun material should be a separate subsection. Do not merge it with every White Shells ending unless another source confirms the relationship.',
      },
    ],
    sources: ['Whisper White Shells endings', 'Tpose Gaming endings guide', 'IronNest.app endings', 'Destructoid speedrun guide'],
  },
  {
    slug: 'iron-nest-multiplayer',
    title: 'Is Iron Nest Multiplayer?',
    keyword: 'iron nest multiplayer',
    type: 'FAQ',
    icon: 'radio',
    description:
      'Answer whether Iron Nest is multiplayer now, what the official FAQ says about future co-op or competitive modes, and what is still undated.',
    summary:
      'This is an FAQ page with a current answer and a roadmap answer.',
    sections: [
      {
        heading: 'Current Answer',
        body:
          'Steam and GOG list the current game as single-player, and the official FAQ says version 1.0 is a fully single-player experience.',
      },
      {
        heading: 'Future Multiplayer',
        body:
          'The same official FAQ says Heavy Turret Simulator will get its own multiplayer mode, where each player commands their own Iron Nest on the same map for cooperative missions or competitive modes. No specific release date is given.',
      },
      {
        heading: 'Standalone Co-Op',
        body:
          'The FAQ also mentions a separate standalone cooperative game planned for late 2027 or early 2028. That is not the same as a dated multiplayer update for the current game.',
      },
    ],
    sources: ['Steam page', 'GOG page', 'Steam official FAQ'],
  },
  {
    slug: 'iron-nest-roadmap',
    title: 'Iron Nest Roadmap',
    keyword: 'iron nest roadmap',
    type: 'Roadmap',
    icon: 'map',
    description:
      'Officially sourced Iron Nest roadmap notes covering PC release, console and VR order, multiplayer plans, and the separate co-op project.',
    summary:
      'A roadmap page should separate confirmed direction from exact dates that are not yet announced.',
    sections: [
      {
        heading: '1.0 Status',
        body:
          'The official FAQ says Iron Nest launched as a full 1.0 release on August 6, 2026, not Early Access.',
      },
      {
        heading: 'Platforms',
        body:
          'Official FAQ wording puts PC first, then major console ports a few months after PC release, then VR after PC and console work. Avoid naming a specific console date unless the Steam News page confirms it later.',
      },
      {
        heading: 'Multiplayer And Co-Op',
        body:
          'The roadmap notes future multiplayer for Heavy Turret Simulator, plus a separate standalone co-op game targeted for late 2027 or early 2028. These should be written as separate roadmap items.',
      },
    ],
    sources: ['Steam official FAQ', 'Steam news', 'Official site'],
  },
];

export const sourceLinks = [
  ['Official site', officialLinks.official],
  ['Steam', officialLinks.steam],
  ['GOG', officialLinks.gog],
  ['Official Discord', officialLinks.discord],
  ['Official YouTube', officialLinks.youtube],
  ['Official Roadmap FAQ', officialLinks.roadmap],
];

export const pageExpansions = {
  'iron-nest-guide': {
    steps: [
      'Read High Command first and separate objective text from useful numbers such as your current grid, target class, spotter position, bearing, range, and required ammunition.',
      'Move every reusable clue to the clipboard before touching the map. If a value looks temporary or tied to one mission state, label it instead of mixing it with confirmed coordinates.',
      'Place the Iron Nest and all known observation points on the tactical map. Do this slowly; one wrong sub-grid position can make every later bearing look plausible but miss the target.',
      'Use bearings as lines and distances as circles. Look for intersections, then verify that the suspected target also makes sense with the target description and mission context.',
      'Draw the final firing line from the Iron Nest to the target. Use that line, not a spotter line, as the value you transfer into the ballistic calculator.',
      'Choose shell type by target class. Infantry, armor, underground caches, illumination, and area denial should not be treated as the same problem.',
      'Before firing, check bearing, range, elevation, charge count, shell, and turret orientation. After firing, read the result photo or report before spending more ammunition.',
    ],
    checklist: [
      'Current Iron Nest coordinate is marked.',
      'All spotter or reference-point coordinates are marked.',
      'Target position is derived from at least two clues when available.',
      'Final range and bearing are measured from Iron Nest to target.',
      'Ballistic calculator inputs match the selected shell and target class.',
      'Counter-battery risk is considered before the first shot.',
    ],
    mistakes: [
      'Copying coordinates from a walkthrough without checking whether your mission instance uses the same briefing.',
      'Using a spotter-to-target bearing as the turret bearing. The turret needs the Iron Nest-to-target line.',
      'Firing as soon as one target is found when the mission has enemy artillery. Prepare multiple solutions before starting the timer.',
      'Treating every guide page as final truth. Early post-release guides can lag behind patches, so version-sensitive mechanics need rechecking.',
    ],
    faq: [
      {
        q: 'Should I start with mission guides or mechanics guides?',
        a: 'Start with the beginner guide and triangulation page first. Mission pages make more sense once you can read coordinates, draw bearings, and transfer the final firing solution correctly.',
      },
      {
        q: 'Why does this wiki avoid fixed coordinates?',
        a: 'Iron Nest missions can depend on the current briefing and objective state. A good guide should teach the method first, then use coordinates only as examples when the source clearly supports them.',
      },
      {
        q: 'What should be updated most often?',
        a: 'Shell types, roadmap, multiplayer status, and mission-specific details are the most version-sensitive pages. They should be refreshed before publishing or after major game updates.',
      },
    ],
  },
  'iron-nest-beginner-guide': {
    steps: [
      'Walk the turret room before starting serious inputs. Identify the map table, clipboard, ballistic calculator, shell handling area, turret controls, elevation controls, and report terminals.',
      'Practice entering and leaving interactions with E and Esc. New players often lose time because they stay locked into one station while another station needs attention.',
      'Keep the clipboard open while reading orders. Copy only the values you can act on, then keep the original wording nearby until the target is fully solved.',
      'Mark your own position first. Then place spotters and reference points. Do not start drawing target lines until the fixed positions are correct.',
      'Use the map to solve position before using the calculator. The calculator does not find the target; it turns your map solution into firing data.',
      'Load the shell only after you know the target type. If the mission asks for illumination, armor penetration, or area damage, the wrong shell can waste the whole cycle.',
      'After the shot, read the result instead of immediately changing random values. The game usually gives you enough feedback to decide whether to correct range, bearing, or target choice.',
    ],
    checklist: [
      'Know how to open and focus the clipboard.',
      'Know which control exits a station.',
      'Can mark and remove map lines without clearing useful work.',
      'Can distinguish target bearing from turret bearing.',
      'Can explain why the selected shell matches the target.',
      'Can read the post-shot result before firing again.',
    ],
    mistakes: [
      'Trying to play it like a shooter. The core challenge is information handling, not fast aiming.',
      'Writing everything down without labels. A pile of numbers is worse than a short, clean clipboard.',
      'Skipping the final Iron Nest-to-target measurement because the target intersection looks obvious.',
      'Changing several variables after a miss. Correct one likely error at a time.',
    ],
    faq: [
      {
        q: 'What is the first habit a beginner should build?',
        a: 'Build a clipboard habit. Every mission gives you text, numbers, and map clues; keeping those organized makes the rest of the game much less intimidating.',
      },
      {
        q: 'Do I need to memorize all controls?',
        a: 'No. Learn movement, interaction, clipboard, map drawing, and interaction exit first. The rest becomes easier once you stop fighting the room.',
      },
      {
        q: 'When should I fire the first shell?',
        a: 'Fire only after the target position, final bearing, range, shell, charge, and elevation agree with each other. In artillery missions, the first shot can change the pressure dramatically.',
      },
    ],
  },
  'iron-nest-how-to-play': {
    steps: [
      'Treat each mission as a chain: orders create clues, clues create a map position, the map position creates a firing solution, and the firing solution creates a shot result.',
      'Read the mission objective in plain language first. Decide whether the job is destruction, illumination, suppression, recon support, or a story choice.',
      'Extract the operational data. Typical useful values include coordinates, bearing, distance, target type, friendly position, ammunition instruction, and reconnaissance hints.',
      'Build the map solution. Use known positions, then draw lines or circles from those positions until a target candidate appears.',
      'Translate the map solution into calculator inputs. The key values are final range and bearing from the Iron Nest, plus shell and charge choices.',
      'Operate the turret deliberately. A correct calculation still fails if the turret direction, elevation, or shell loading step is wrong.',
      'Use feedback loops. Mission photos, reports, and new orders should tell you whether to continue, correct, or switch objective.',
    ],
    checklist: [
      'Objective type is understood before firing.',
      'All numbers have labels and sources.',
      'Friendly areas are identified before using large-area shells.',
      'Target class and shell type match.',
      'Post-shot feedback is checked before the next round.',
    ],
    mistakes: [
      'Opening the calculator too early and trying to solve the mission from calculator fields alone.',
      'Assuming every objective is solved by HE. Some tasks require illumination, AP, smoke, gas, or restraint.',
      'Forgetting that the map is both a measuring tool and a record of battle results.',
      'Ignoring requisition choices until resources are already tight.',
    ],
    faq: [
      {
        q: 'What kind of game is Iron Nest?',
        a: 'It is best understood as a first-person artillery workflow game: read, plot, calculate, operate, fire, and interpret results.',
      },
      {
        q: 'Is the goal always to destroy every enemy marker?',
        a: 'No. Some missions care about illumination, protecting friendlies, choosing payloads, or making story decisions. Read the objective before assuming the goal.',
      },
      {
        q: 'Why do people get stuck early?',
        a: 'Most early mistakes come from mixing up spotter data with firing data. A spotter helps find the target; the turret still needs its own final range and bearing.',
      },
    ],
  },
  'iron-nest-mission-2-guide': {
    steps: [
      'Start Mission 2 by reading all Fire and Light instructions before plotting. Separate the destructive-fire phase from the later Star Shell phase.',
      'Mark the Iron Nest and both spotter positions. Check the sub-grid digits twice because the first target depends heavily on their exact placement.',
      'Draw bearing lines from both spotters. The first hostile target should be treated as the point where the two bearing clues agree.',
      'Draw a new line from Iron Nest to that target. This is the firing line that should feed the calculator, not either of the spotter lines.',
      'Use the instructed destructive shell for the hostile target phase, then review the result photo or report before moving to illumination.',
      'For Star Shell work, expect a correction cycle. Treat the first illumination shot as a way to measure error, then adjust from the reported direction and distance.',
      'Keep phase notes separate on the clipboard. Mixing hostile target values with Star Shell correction values is the easiest way to lose the thread.',
    ],
    checklist: [
      'Mission phase is identified: hostile fire or illumination.',
      'Two spotter bearings are drawn from the correct coordinates.',
      'Final firing line starts at the Iron Nest.',
      'Shell selection changes when the objective changes.',
      'Correction data is applied after reading the shot result.',
    ],
    mistakes: [
      'Using one walkthrough coordinate as a universal Mission 2 answer.',
      'Correctly finding the target but forgetting to measure from the Iron Nest.',
      'Keeping old hostile-target numbers on the clipboard during the Star Shell phase.',
      'Assuming a missed illumination shot means the whole map solution is wrong; sometimes it needs a correction, not a restart.',
    ],
    faq: [
      {
        q: 'Why is Mission 2 harder than the tutorial flow?',
        a: 'It combines two different tasks. The early phase rewards target triangulation, while the later phase asks you to interpret and correct illumination shots.',
      },
      {
        q: 'Can I publish fixed coordinates for Mission 2?',
        a: 'Only as clearly labeled examples. The safer SEO content is a method guide because players may have different values or updated mission behavior.',
      },
      {
        q: 'What should the page answer first?',
        a: 'It should explain the phase split, where players usually make the bearing mistake, and how to use Star Shell correction without guessing.',
      },
    ],
  },
  'iron-nest-mission-3-guide': {
    steps: [
      'Read the Liberation briefing and list every known infantry clue, friendly location, reconnaissance option, and ammunition requirement.',
      'Mark the new Iron Nest coordinate first. Do not reuse a prior mission position unless the current briefing explicitly says so.',
      'Plot the first infantry targets from supplied spotter data. Keep each target label separate so later recon does not overwrite earlier work.',
      'Use reconnaissance when the available field reports stop being enough. Mission 3 sources point to Scout Plane or P4-style recon as a key tool for hidden or urban-sector targets.',
      'Treat the armored ammunition or supply cache as a different target class. AP is the safer assumption for armored or hardened objectives than broad explosive fire.',
      'Before firing in or near friendly areas, check whether the shell radius and target estimate could endanger the wrong sector.',
      'Finish by confirming all five infantry targets and the cache objective are resolved. Do not spend final requisition until the remaining objective is clear.',
    ],
    checklist: [
      'Current mission coordinate is used, not a previous mission marker.',
      'Each infantry target has its own label.',
      'Recon is saved for unclear targets instead of spent immediately.',
      'AP is considered for armored cache objectives.',
      'Friendly-sector risk is checked before area shells.',
      'All five infantry targets are accounted for.',
    ],
    mistakes: [
      'Getting stuck on the last infantry target because recon was spent before the urban-sector clue mattered.',
      'Using a large blast shell near friendlies without checking target confidence.',
      'Treating the ammo cache like ordinary infantry.',
      'Writing a page that gives only coordinates instead of explaining requisition and recon choices.',
    ],
    faq: [
      {
        q: 'What is the main Mission 3 search intent?',
        a: 'Players are usually stuck on finding all five infantry targets, using reconnaissance efficiently, or deciding how to handle the armored cache.',
      },
      {
        q: 'Why should the guide avoid exact-coordinate promises?',
        a: 'The valuable part is the decision route: map the known targets, spend recon when information runs out, protect friendlies, and match ammo to target class.',
      },
      {
        q: 'What should be refreshed before publishing?',
        a: 'Any exact target order, recon name, and cache behavior should be checked against current gameplay footage or patch state before the page is treated as final.',
      },
    ],
  },
  'iron-nest-how-to-triangulate': {
    steps: [
      'Translate every coordinate into a map marker first. Large grid letters and numbers get you to the cell; sub-grid digits place the marker inside that cell.',
      'Label markers by role: Iron Nest, spotter, reference, suspected target, confirmed target, or friendly location.',
      'For a bearing clue, start the line from the position that reported the bearing. A bearing from a spotter does not start at the Iron Nest unless the briefing says so.',
      'For a distance clue, draw or imagine a circle around the known point. The target lies somewhere on that distance radius.',
      'Combine two clues. Two bearing lines, a bearing plus a distance, or two distances should narrow the target to an intersection or a small zone.',
      'After locating the target, draw a separate line from Iron Nest to target. This final line gives the turret bearing and range.',
      'If the shot misses, compare the error direction with your map layers. A wrong source point causes a very different correction than a small target placement error.',
    ],
    checklist: [
      'Every coordinate is placed in the correct large cell and sub-cell.',
      'Each line starts from the clue source.',
      'Friendly markers are visible before choosing shell type.',
      'Target is confirmed by more than one clue when possible.',
      'Final firing values are measured from Iron Nest only.',
    ],
    mistakes: [
      'Drawing all bearings from the Iron Nest because the turret is where the player stands.',
      'Confusing grid row and column order when copying coordinates.',
      'Treating a distance as a straight line instead of a radius around the reporting point.',
      'Leaving old lines on the map until the screen becomes unreadable.',
    ],
    faq: [
      {
        q: 'What does triangulation mean in Iron Nest?',
        a: 'It means using multiple clues from known positions to narrow a hidden target location, then measuring the final shot from your turret to that target.',
      },
      {
        q: 'Do I need a real calculator outside the game?',
        a: 'Not for basic triangulation. The important step is clean map geometry; the in-game ballistic calculator handles the firing solution once the map work is correct.',
      },
      {
        q: 'What is the quickest self-check?',
        a: 'Ask whether each line starts from the correct source. If the line source is wrong, the target can look mathematically clean and still be completely wrong.',
      },
    ],
  },
  'iron-nest-counter-battery': {
    steps: [
      'Before the first shot, read whether enemy artillery or fire direction support is present. If it is, assume a countdown may begin once you reveal yourself.',
      'Plot as many known targets as possible before firing. Counter-battery pressure punishes players who solve one target, shoot, and only then begin the next calculation.',
      'Prioritize targets that reduce the timer pressure. Current guide sources describe enemy artillery and Fire Direction Centers as key pressure points.',
      'Keep multiple firing solutions ready. If you can destroy a battery or FDC quickly after the first shot, the timer becomes much easier to manage.',
      'Use Emergency Move as a tactical option, not a panic button. Moving can buy time but may also force you to re-check the Iron Nest position and future calculations.',
      'After destroying artillery assets, confirm whether the timer stopped, paused, or simply gained time. Do not assume one hit ended the whole threat.',
    ],
    checklist: [
      'Enemy artillery presence is checked before first shot.',
      'At least one follow-up target is pre-plotted.',
      'FDC and artillery targets are labeled separately.',
      'Emergency Move consequences are understood.',
      'New Iron Nest position is updated after moving.',
    ],
    mistakes: [
      'Firing the first easy target before preparing the dangerous ones.',
      'Ignoring Fire Direction Centers because they do not look like direct artillery pieces.',
      'Using Emergency Move and then continuing with old firing values.',
      'Waiting for the timer to become urgent before deciding target priority.',
    ],
    faq: [
      {
        q: 'What starts counter-battery fire?',
        a: 'When enemy artillery is active, firing can reveal the Iron Nest and start a timer. The exact mission behavior should be read from the current briefing and confirmed in-game.',
      },
      {
        q: 'What should I destroy first?',
        a: 'If the mission supports it, prioritize assets that reduce or pause the counter-battery threat: artillery pieces and Fire Direction Centers are the obvious candidates.',
      },
      {
        q: 'Is Emergency Move always good?',
        a: 'No. It can buy time, but movement changes your operating context. Update your position and recalculate instead of treating it as a free reset.',
      },
    ],
  },
  'iron-nest-shell-types': {
    steps: [
      'Start with target class. Infantry, armor, underground structures, illumination tasks, smoke screens, and chemical effects imply different ammunition choices.',
      'Use HE as the baseline explosive shell, but do not let it become the answer to every problem.',
      'Use HCHE-style area damage only when a larger blast radius helps and friendly or civilian risk is not the main constraint.',
      'Use AP when the target is armored, hardened, bunker-like, or described as a cache that needs penetration rather than surface blast.',
      'Use Star Shell when the objective is illumination, observation, or correction rather than destruction.',
      'Treat Smoke, Phosgene, and Tear Gas as mission-specific tactical tools until the current build confirms exact use cases.',
      'Update the page when new shell names, unlocks, or patch changes are confirmed. The official 30 ammo types and abilities claim is broader than most current public lists.',
    ],
    checklist: [
      'Target class is known.',
      'Friendly risk is checked before large-radius shells.',
      'Illumination tasks use Star Shell logic.',
      'Armored targets trigger an AP check.',
      'Version-sensitive shell claims are labeled as current-known, not permanent.',
    ],
    mistakes: [
      'Writing a fake complete ammo list before every shell is verified.',
      'Forgetting that utility shells can be mission objectives, not just optional tools.',
      'Choosing a larger explosion when precision is safer.',
      'Treating official total counts and third-party active lists as the same thing.',
    ],
    faq: [
      {
        q: 'How many shell types are there?',
        a: 'Official material advertises 30 ammo types and abilities, but public third-party lists may only confirm a smaller current set. The page should distinguish official scope from verified active examples.',
      },
      {
        q: 'What shell should new players learn first?',
        a: 'Learn HE, AP, and Star Shell first because they teach the three core categories: explosive damage, penetration, and illumination or correction work.',
      },
      {
        q: 'Can this page become a full ammo database?',
        a: 'Yes, but only after each shell is verified with current gameplay, official notes, or reliable guide material. Until then it should stay version-aware.',
      },
    ],
  },
  'iron-nest-calculator': {
    steps: [
      'Use the map first. The calculator should receive a solved target line, not vague guesses from the briefing.',
      'Measure range from the Iron Nest to the target marker. If the range comes from a spotter report, it may describe a clue, not the final firing distance.',
      'Measure bearing from the Iron Nest to the target. This is the direction the turret needs, even when the target was found from another observer.',
      'Select shell type and charge data according to target class and mission instruction. Shell changes can affect the correct firing setup.',
      'Enter target type or terrain-related inputs only after reading the mission wording. Do not invent classifications when the game gives a specific label.',
      'Transfer the calculated elevation carefully to the turret controls. A correct calculator output can still fail if the mechanical input is off.',
      'After firing, use the result to diagnose one variable at a time: wrong target, wrong bearing, wrong range, wrong shell, or wrong elevation input.',
    ],
    checklist: [
      'Target marker is solved before calculator use.',
      'Range and bearing come from Iron Nest to target.',
      'Shell and charge match the objective.',
      'Elevation is copied exactly.',
      'Miss correction changes one likely variable at a time.',
    ],
    mistakes: [
      'Treating the website page as an external calculator promise. The first version should explain the in-game tool.',
      'Using spotter distance as firing range without checking source.',
      'Changing shell type after calculating but before firing.',
      'Assuming a missed shot means the calculator is wrong when the map input may be wrong.',
    ],
    faq: [
      {
        q: 'Does this site provide a working calculator?',
        a: 'Not yet. The page explains how to use the in-game calculator. A real external calculator would need verified formulas and current game data.',
      },
      {
        q: 'What input causes the most mistakes?',
        a: 'Bearing source is the big one. The firing bearing must be from the Iron Nest to the target, not from a spotter to the target.',
      },
      {
        q: 'Should I recalculate after Emergency Move?',
        a: 'Yes. Moving changes your firing origin, so the final range and bearing need to be measured again from the new Iron Nest position.',
      },
    ],
  },
  'iron-nest-endings': {
    steps: [
      'Add a spoiler boundary before any ending names or final mission choices. Players searching for mechanics may not want the story outcome revealed immediately.',
      'Separate confirmed broad structure from third-party route details. Official material supports a decision-heavy story frame; route specifics should be marked as guide/player sourced.',
      'Explain the White Shells choice space as a decision cluster rather than one simple good or bad ending.',
      'Keep payload-type consequences separate: propaganda-style, chemical or white phosphorus routes, atomic destruction, and betrayal routes should each have their own paragraph.',
      'Treat kill-the-king speedrun material as a separate route until sources clearly tie it to every ending branch.',
      'Tell readers to save before final decisions if the game allows it, because ending routes may depend on earlier choices and final payload behavior.',
    ],
    checklist: [
      'Spoiler warning appears before details.',
      'Official story framing and third-party route details are separated.',
      'White Shells options are not collapsed into one ending.',
      'Speedrun route is labeled separately.',
      'Version-sensitive ending claims are marked for recheck.',
    ],
    mistakes: [
      'Putting the spoiler answer in the meta description or first paragraph.',
      'Writing route details as official canon when they come from player guides.',
      'Merging speedrun and standard ending routes without source support.',
      'Forgetting that ending searches may attract players who only want a non-spoiler count.',
    ],
    faq: [
      {
        q: 'Should this page be spoiler-free?',
        a: 'No, the keyword intent is spoiler-heavy, but the page should give a clear warning and a short non-spoiler summary before detailed routes.',
      },
      {
        q: 'Can it list all endings?',
        a: 'It can, but each ending route should be labeled by source confidence. Third-party and player-guide details need verification before being presented as final.',
      },
      {
        q: 'Why include speedrun material?',
        a: 'It captures a related search intent around final objective routes, but it should stay in its own section so standard ending readers are not confused.',
      },
    ],
  },
  'iron-nest-multiplayer': {
    steps: [
      'Answer the present-tense question first: current platform listings and official FAQ material support single-player for version 1.0.',
      'Separate current availability from planned direction. Players searching multiplayer need to know what they can play today before reading roadmap plans.',
      'Explain the planned Heavy Turret Simulator multiplayer as future-oriented and undated unless an official update gives a specific date.',
      'Separate the future standalone cooperative project from multiplayer inside the current game. They are related but not the same release promise.',
      'Link the roadmap page from this FAQ so users can read wider console, VR, multiplayer, and co-op planning in one place.',
      'Refresh the page after official Steam News or FAQ updates, because multiplayer status is a high-change topic.',
    ],
    checklist: [
      'Current answer appears in the first screen.',
      'Single-player status is clearly stated.',
      'Future multiplayer is labeled as planned, not available.',
      'Standalone co-op is not mixed with current-game multiplayer.',
      'No fake date is invented.',
    ],
    mistakes: [
      'Writing yes because a future mode is discussed.',
      'Writing no forever because version 1.0 is single-player.',
      'Turning late-2027 or early-2028 standalone co-op language into a dated update for the current game.',
      'Ignoring platform-store labels when answering current availability.',
    ],
    faq: [
      {
        q: 'Is Iron Nest multiplayer right now?',
        a: 'The current answer should be written as no, version 1.0 is single-player, based on store listings and official FAQ wording available in the research notes.',
      },
      {
        q: 'Will multiplayer come later?',
        a: 'Official FAQ material says Heavy Turret Simulator is planned to receive its own multiplayer mode, but the page should not invent a release date.',
      },
      {
        q: 'Is the planned standalone co-op the same thing?',
        a: 'No. The standalone co-op project is a separate future project and should be described separately from multiplayer for the current game.',
      },
    ],
  },
  'iron-nest-roadmap': {
    steps: [
      'Start with the current release state. The researched official FAQ says the PC release is a full 1.0 launch, not Early Access.',
      'List platform order conservatively: PC first, then console ports a few months after PC, then VR after PC and console work.',
      'Keep date precision low unless the official source gives an exact date. Roadmap pages age badly when they overpromise.',
      'Separate Heavy Turret Simulator multiplayer from the standalone cooperative project.',
      'Mention Steam News and the official FAQ as the update sources readers should check when timing matters.',
      'Add a last-checked note before publishing so users understand whether the roadmap reflects the current official state.',
    ],
    checklist: [
      'Release status is clear.',
      'Console and VR items are written as direction, not exact schedules.',
      'Multiplayer and standalone co-op are separate rows.',
      'Dynamic update claims are not frozen without a check date.',
      'Official sources are prioritized over rumors.',
    ],
    mistakes: [
      'Converting "a few months" into an exact date.',
      'Saying Early Access when the researched official FAQ says full 1.0.',
      'Treating Discord comments or player speculation as confirmed roadmap items.',
      'Forgetting to update the page after Steam announcements.',
    ],
    faq: [
      {
        q: 'What is the safest roadmap format?',
        a: 'Use a table or timeline with status labels such as available, planned, undated, and separate project. That keeps confirmed facts apart from expectations.',
      },
      {
        q: 'Should the roadmap page include rumors?',
        a: 'Not in the first version. If rumors are useful later, they should be clearly separated from official notes and probably kept out of SEO snippets.',
      },
      {
        q: 'What should be checked before deployment?',
        a: 'Recheck Steam News, the official FAQ, and the official site for any new platform, multiplayer, VR, or co-op announcements.',
      },
    ],
  },
};

export const pageQualityLayers = {
  'iron-nest-guide': {
    quickReference: [
      ['Best use', 'Central hub for learning the whole read, plot, calculate, fire, and review loop.'],
      ['First player task', 'Open the beginner guide, then move to triangulation before mission-specific pages.'],
      ['Content stance', 'Method-first guidance; fixed coordinates are avoided unless clearly labeled as examples.'],
      ['Highest-risk topics', 'Shell lists, endings, multiplayer, and roadmap items must be rechecked before publishing updates.'],
    ],
    troubleshooting: [
      {
        symptom: 'A guide answer looks plausible but the shot lands wrong.',
        likelyCause: 'The player copied a final coordinate without matching the current briefing, source point, or final firing line.',
        fix: 'Rebuild the solution from the active mission text: known positions first, clue lines second, final Iron Nest-to-target line last.',
      },
      {
        symptom: 'Different external guides disagree.',
        likelyCause: 'One guide may be using a worked example, a different mission state, or older post-release information.',
        fix: 'Prefer official facts for status and mechanics scope, then use third-party guides only for reproducible workflow hints.',
      },
      {
        symptom: 'The player understands the map but still wastes ammunition.',
        likelyCause: 'Shell choice and target class were treated as an afterthought.',
        fix: 'Add a shell check before every firing sequence: target type, friendly risk, objective phase, and mission instruction.',
      },
    ],
    sourceBoundary: {
      official: [
        'Game identity, broad feature set, platform/store status, and official resource links.',
        'High-level positioning around a heavy dieselpunk artillery simulator with map and calculator work.',
      ],
      guideSourced: [
        'Beginner controls, common map workflow, mission phase examples, shell examples, and counter-battery tactics.',
        'Ending route details and some mission-specific advice from player or guide sites.',
      ],
      avoid: [
        'Do not present third-party coordinates as universal truth.',
        'Do not invent formulas for an external calculator or promise live multiplayer dates.',
      ],
    },
  },
  'iron-nest-beginner-guide': {
    quickReference: [
      ['First five minutes', 'Walk the room, learn interaction exit, open clipboard, and identify the map and calculator stations.'],
      ['Most important habit', 'Label every copied number by source: Iron Nest, spotter, distance, bearing, target, or correction.'],
      ['First firing goal', 'One clean solved shot is better than several fast guesses.'],
      ['Beginner success signal', 'You can explain where the target is, why the shell fits, and what value controls elevation.'],
    ],
    troubleshooting: [
      {
        symptom: 'The player feels stuck in one machine or station.',
        likelyCause: 'They entered an interaction and forgot the exit flow.',
        fix: 'Practice enter, adjust, exit at each station before solving a mission under pressure.',
      },
      {
        symptom: 'The clipboard becomes a wall of numbers.',
        likelyCause: 'Coordinates, bearings, ranges, and correction notes were copied without labels.',
        fix: 'Use short labels such as IN pos, spotter A, bearing A, target guess, final range, and final bearing.',
      },
      {
        symptom: 'The first shot misses despite correct-looking inputs.',
        likelyCause: 'The range or bearing came from the observer clue instead of the final turret-to-target line.',
        fix: 'Return to the map and measure the final line from Iron Nest to the target marker.',
      },
    ],
    sourceBoundary: {
      official: [
        'Core theme, PC release/store status, and broad gameplay promise.',
        'The site can safely link to official store and community resources rather than rehosting media.',
      ],
      guideSourced: [
        'Keyboard control reminders, clipboard workflow, first-shot sequence, and map habits.',
        'Early-player mistake patterns from beginner guide material.',
      ],
      avoid: [
        'Do not claim exact universal first-mission answers.',
        'Do not hide uncertainty when a mechanic is learned from third-party guide notes.',
      ],
    },
  },
  'iron-nest-how-to-play': {
    quickReference: [
      ['Core loop', 'Read order, extract clues, mark map, solve target, calculate firing data, operate turret, review result.'],
      ['Player mindset', 'Think like a fire-control operator, not a run-and-gun shooter.'],
      ['Map role', 'The map finds the target and creates the final firing line.'],
      ['Calculator role', 'The calculator converts a solved target line into gun setup values.'],
      ['Shot review', 'Every miss should produce a question: was the target wrong, the line wrong, the shell wrong, or the mechanical input wrong?'],
    ],
    troubleshooting: [
      {
        symptom: 'The player opens the calculator but has no useful input.',
        likelyCause: 'They skipped map solving and brought raw briefing clues straight to the calculator.',
        fix: 'Finish the map target first, then enter final range and bearing from the Iron Nest.',
      },
      {
        symptom: 'Mission objectives feel inconsistent.',
        likelyCause: 'The player assumed every mission asks for direct destruction.',
        fix: 'Classify the objective before firing: destroy, illuminate, recon, protect, suppress, or choose a story route.',
      },
      {
        symptom: 'A correction makes the next shot worse.',
        likelyCause: 'Several variables were changed at once.',
        fix: 'Only adjust the variable the feedback points to: target marker, bearing, range, shell, charge, or elevation.',
      },
    ],
    sourceBoundary: {
      official: [
        'High-level gameplay framing, platform/store facts, and official resource links.',
        'Broad feature claims such as tactical map, manual operation, and artillery simulation premise.',
      ],
      guideSourced: [
        'Exact order-of-operations advice and beginner workflow details.',
        'Examples of how players translate field reports into firing data.',
      ],
      avoid: [
        'Do not reduce the game to a single calculator step.',
        'Do not give destructive-shell advice before checking the mission objective.',
      ],
    },
  },
  'iron-nest-mission-2-guide': {
    quickReference: [
      ['Mission frame', 'Treat Fire and Light as a phase-based mission: hostile fire first, illumination correction later.'],
      ['Primary skill', 'Two-source target plotting followed by a separate final firing line.'],
      ['Common blocker', 'Star Shell correction after the first illumination attempt.'],
      ['Publish stance', 'Use coordinate examples only as examples; the durable content is the correction method.'],
    ],
    troubleshooting: [
      {
        symptom: 'The hostile target is found but the turret points elsewhere.',
        likelyCause: 'The firing value was copied from a spotter bearing.',
        fix: 'Keep the spotter lines as discovery clues, then draw a new Iron Nest-to-target line for the turret.',
      },
      {
        symptom: 'Star Shells seem random.',
        likelyCause: 'The shot result was not converted into a correction direction and distance.',
        fix: 'Read the post-shot feedback as a correction instruction and adjust from the last shell impact, not from memory.',
      },
      {
        symptom: 'Old values corrupt the second phase.',
        likelyCause: 'Hostile-target notes stayed on the clipboard after the mission shifted to illumination.',
        fix: 'Create a new phase label and archive or remove values that no longer apply.',
      },
    ],
    sourceBoundary: {
      official: [
        'Game systems, platform status, and general artillery workflow.',
      ],
      guideSourced: [
        'Fire and Light phase framing, Star Shell correction examples, and mission-specific walkthrough notes.',
        'Video references can support route intuition but should not be copied as text.',
      ],
      avoid: [
        'Do not promise that one coordinate works for every player.',
        'Do not mix destructive-fire and illumination instructions into one undifferentiated checklist.',
      ],
    },
  },
  'iron-nest-mission-3-guide': {
    quickReference: [
      ['Mission frame', 'Liberation focuses on infantry targets, friendly-sector caution, recon decisions, and a hardened cache objective.'],
      ['Primary skill', 'Managing scarce information and requisition choices without losing target labels.'],
      ['Most sensitive detail', 'Exact target order and recon naming should be rechecked before publishing changes.'],
      ['Safe claim style', 'Describe decision logic first, then cite third-party examples separately.'],
    ],
    troubleshooting: [
      {
        symptom: 'One infantry target remains missing.',
        likelyCause: 'Recon was spent before the ambiguous sector needed it, or labels were overwritten.',
        fix: 'List every found infantry marker, compare it with the objective count, then spend recon only on the unresolved zone.',
      },
      {
        symptom: 'Friendly areas are endangered.',
        likelyCause: 'The target guess and shell radius were not checked against nearby friendly markers.',
        fix: 'Switch from speed to certainty: confirm target class and location before using broad-effect ammunition.',
      },
      {
        symptom: 'The cache survives ordinary fire.',
        likelyCause: 'The target was treated like soft infantry instead of armor or a hardened objective.',
        fix: 'Review the briefing language and select penetration-focused ammunition when the target class supports it.',
      },
    ],
    sourceBoundary: {
      official: [
        'Broad systems, official status, and general genre/mechanics framing.',
      ],
      guideSourced: [
        'Liberation route notes, infantry target count, recon use, and AP-cache guidance.',
        'Player discussion can identify pain points but should not be treated as a definitive patch note.',
      ],
      avoid: [
        'Do not publish an unverified target order as canon.',
        'Do not turn a player workaround into an official mechanic explanation.',
      ],
    },
  },
  'iron-nest-how-to-triangulate': {
    quickReference: [
      ['Grid rule', 'Place the large cell first, then use sub-grid digits to refine position inside the cell.'],
      ['Bearing rule', 'A bearing line starts from the reporting point, not automatically from the Iron Nest.'],
      ['Distance rule', 'A distance clue creates a radius around the known point.'],
      ['Final-fire rule', 'Only the final line from Iron Nest to target becomes firing range and bearing.'],
    ],
    troubleshooting: [
      {
        symptom: 'Two lines cross but the shot is far off.',
        likelyCause: 'One source marker was placed in the wrong cell or sub-cell.',
        fix: 'Audit source markers before target markers; bad inputs create clean but false intersections.',
      },
      {
        symptom: 'A distance clue is hard to use.',
        likelyCause: 'The player is drawing it like a direction instead of a radius.',
        fix: 'Think of it as a circle around the known point, then combine it with a bearing or another distance.',
      },
      {
        symptom: 'The map becomes unreadable.',
        likelyCause: 'Old candidate lines were left after new information narrowed the target.',
        fix: 'Remove dead lines and keep only source markers, current candidate geometry, friendly zones, and final firing line.',
      },
    ],
    sourceBoundary: {
      official: [
        'The existence of map and measurement-centered gameplay.',
      ],
      guideSourced: [
        'Grid interpretation, map drawing habits, and practical triangulation flow.',
        'Specific examples should be treated as training cases, not universal answers.',
      ],
      avoid: [
        'Do not imply the game gives one fixed target for every mission attempt.',
        'Do not write formulas beyond what the in-game systems or verified guides support.',
      ],
    },
  },
  'iron-nest-counter-battery': {
    quickReference: [
      ['Trigger concept', 'Counter-battery pressure can begin once your first shot reveals the Iron Nest in artillery-active missions.'],
      ['Best preparation', 'Pre-plot dangerous targets before the timer starts.'],
      ['Priority targets', 'Enemy artillery and Fire Direction Centers deserve early attention when sources confirm them.'],
      ['Movement rule', 'Emergency Move buys time only if you update your own position afterward.'],
      ['Timer mindset', 'Counter-battery is less about fast clicking and more about entering the first shot with two or three prepared decisions.'],
      ['Pre-shot packet', 'Before firing, prepare the first target, the pressure target, the backup target, and the post-shot action so the timer does not force guessing.'],
    ],
    troubleshooting: [
      {
        symptom: 'The timer starts and the player has no next target.',
        likelyCause: 'Only the easiest opening shot was solved before firing.',
        fix: 'Before the first shell, solve at least one follow-up battery or FDC target whenever the mission reveals enough data.',
      },
      {
        symptom: 'Emergency Move creates more misses.',
        likelyCause: 'Old range and bearing values were reused after the Iron Nest moved.',
        fix: 'Mark the new Iron Nest position and rebuild final firing lines from that new origin.',
      },
      {
        symptom: 'Destroying one target does not end pressure.',
        likelyCause: 'The mission may include multiple batteries or support assets.',
        fix: 'Track pressure assets separately and confirm whether the timer paused, gained time, or fully stopped.',
      },
    ],
    sourceBoundary: {
      official: [
        'Broad artillery simulator premise and official resource links.',
      ],
      guideSourced: [
        'Counter-battery timer behavior, FDC priority, and Emergency Move tactical advice.',
      ],
      avoid: [
        'Do not claim an exact timer duration unless current gameplay confirms it.',
        'Do not imply Emergency Move is free; it changes the firing context.',
      ],
    },
  },
  'iron-nest-shell-types': {
    quickReference: [
      ['Baseline damage', 'HE is the basic explosive reference point for soft targets and general destruction.'],
      ['Area damage', 'HCHE-style use belongs where blast radius helps and friendly risk is controlled.'],
      ['Penetration', 'AP belongs on armored, hardened, cache, bunker, or underground-style objectives.'],
      ['Utility', 'Star Shell, Smoke, Phosgene, and Tear Gas should be explained as mission tools, not generic upgrades.'],
      ['Version label', 'The page should say current-known examples until every shell name and unlock condition has been checked in the current build.'],
      ['Safety hierarchy', 'When the target is near friendlies or uncertain terrain, choose confidence and objective fit before choosing the biggest blast radius.'],
      ['Reader promise', 'Help players decide which shell logic to test next, not memorize an unverifiable ammo encyclopedia.'],
    ],
    troubleshooting: [
      {
        symptom: 'A target survives a clean hit.',
        likelyCause: 'The shell effect did not match the target class.',
        fix: 'Re-read the objective language and switch between blast, penetration, illumination, or tactical-effect logic.',
      },
      {
        symptom: 'The player harms the wrong area.',
        likelyCause: 'A large-radius shell was used without checking nearby friendlies or objective constraints.',
        fix: 'Prefer precision or recon before using broader effects in crowded map sectors.',
      },
      {
        symptom: 'The ammo page looks contradictory.',
        likelyCause: 'Official total-count claims and currently confirmed public lists are not the same evidence type.',
        fix: 'Keep examples under current-known shells and reserve complete-database language for verified data.',
      },
    ],
    sourceBoundary: {
      official: [
        'Broad claim that the game includes many ammunition types and abilities.',
      ],
      guideSourced: [
        'Public examples such as HE, HCHE, AP, Star Shell, Smoke, Phosgene, and Tear Gas.',
        'Practical use cases for each example shell.',
      ],
      avoid: [
        'Do not claim a complete ammo database before every shell is checked.',
        'Do not treat utility shells as simple damage upgrades.',
      ],
    },
  },
  'iron-nest-calculator': {
    quickReference: [
      ['Input origin', 'Final range and bearing must come from the Iron Nest-to-target line.'],
      ['Before calculator', 'Target marker, shell class, and objective type should already be known.'],
      ['After calculator', 'Copy elevation carefully and keep shell/charge choices unchanged until the shot is fired.'],
      ['Future feature', 'A real website calculator needs verified formulas and game data before it is safe to publish.'],
      ['Diagnostic order', 'When the result is wrong, audit target marker, final line, shell selection, charge, and elevation in that order.'],
      ['No shortcut', 'The in-game calculator is the second half of the solution; the first half is still careful map work and source labeling.'],
    ],
    troubleshooting: [
      {
        symptom: 'The calculated shot misses by a huge margin.',
        likelyCause: 'The calculator received a clue distance or spotter bearing instead of final firing values.',
        fix: 'Return to the map, draw the Iron Nest-to-target line, then re-enter range and bearing.',
      },
      {
        symptom: 'The math looks right but elevation is wrong in practice.',
        likelyCause: 'Shell, charge, or target-type input changed after the calculation.',
        fix: 'Lock the sequence: select shell and charge, calculate, set elevation, fire, then review.',
      },
      {
        symptom: 'A later shot after movement misses.',
        likelyCause: 'The Iron Nest origin changed after Emergency Move.',
        fix: 'Delete stale final lines and rebuild every firing line from the new position.',
      },
    ],
    sourceBoundary: {
      official: [
        'The game premise supports map-solving and calculator-like fire-control work.',
      ],
      guideSourced: [
        'Step order for using the in-game calculator and common input mistakes.',
      ],
      avoid: [
        'Do not ship an external calculator without verified formulas.',
        'Do not imply the calculator can solve target location by itself.',
      ],
    },
  },
  'iron-nest-endings': {
    quickReference: [
      ['Spoiler policy', 'Warn first, then give a short non-spoiler summary before route details.'],
      ['Source split', 'Official material supports the broader story frame; route details are third-party/player-guide sourced.'],
      ['Decision cluster', 'White Shells choices should be described as branching payload and allegiance decisions.'],
      ['Update risk', 'Ending routes should be rechecked after patches or new official notes.'],
      ['Reader split', 'Serve both readers who only want a non-spoiler count and readers who want full route consequences.'],
      ['Route labels', 'Use labels such as broad structure, reported route, speedrun route, and needs verification so players can judge confidence.'],
      ['Non-spoiler lead', 'The first screen should answer whether choices matter without naming specific payload outcomes, final targets, or betrayal consequences.'],
      ['Save advice', 'If the game state allows manual saves, tell readers to preserve a pre-finale save before experimenting with routes.'],
      ['Confidence note', 'Route names and outcome counts should stay source-labeled until they are verified against current gameplay footage or official notes.'],
    ],
    troubleshooting: [
      {
        symptom: 'Readers complain the page spoils too early.',
        likelyCause: 'Specific ending names or route outcomes appeared before the warning.',
        fix: 'Keep the first paragraph non-spoiler and move route names below the warning block.',
      },
      {
        symptom: 'Ending counts differ across sources.',
        likelyCause: 'Some sources group payload outcomes, betrayal outcomes, and speedrun objectives differently.',
        fix: 'Use source confidence labels and explain grouping rules instead of forcing one number into every heading.',
      },
      {
        symptom: 'Speedrun information confuses story readers.',
        likelyCause: 'Kill-the-king routing was mixed into standard ending explanation.',
        fix: 'Keep speedrun material in a separate section with its own source notes.',
      },
    ],
    sourceBoundary: {
      official: [
        'Broad story framing and official game identity.',
      ],
      guideSourced: [
        'White Shells routes, ending labels, and speedrun-style final objective advice.',
      ],
      avoid: [
        'Do not write player-guide routes as official canon.',
        'Do not put explicit spoilers in SEO title or meta description.',
      ],
    },
  },
  'iron-nest-multiplayer': {
    quickReference: [
      ['Current answer', 'Write the first-screen answer as single-player for the current version unless official pages change.'],
      ['Planned feature', 'Future multiplayer should be described as planned and undated when no official date is available.'],
      ['Separate project', 'Standalone co-op is not the same as multiplayer inside the current game.'],
      ['Refresh trigger', 'Recheck this page whenever Steam News, the FAQ, or store labels change.'],
      ['Answer format', 'Open with one clear sentence for today, then explain future plans below it so search visitors do not leave confused.'],
      ['Date discipline', 'If the source gives a window or broad plan, keep that uncertainty instead of converting it into a fixed date.'],
      ['Store labels', 'Use current platform-store labels for what is playable now, because roadmap posts can mention future modes before they ship.'],
      ['Update caveat', 'This page should be treated as high-change content and refreshed before publishing if any multiplayer news appears.'],
      ['Snippet rule', 'The meta description should answer current availability, while the body can explain plans and caveats in more detail.'],
    ],
    troubleshooting: [
      {
        symptom: 'The page appears to say both yes and no.',
        likelyCause: 'Current availability and future plans were merged in one sentence.',
        fix: 'Use two headings: current status and planned multiplayer.',
      },
      {
        symptom: 'Readers expect co-op now.',
        likelyCause: 'Standalone co-op roadmap language was written like a shipped mode.',
        fix: 'State clearly that planned or separate projects are not current playable features.',
      },
      {
        symptom: 'A release date claim ages badly.',
        likelyCause: 'Approximate roadmap language was converted into a hard date.',
        fix: 'Use undated, planned, or target-window language only when that is what the source supports.',
      },
    ],
    sourceBoundary: {
      official: [
        'Store labels, current mode status, FAQ wording, and roadmap direction.',
      ],
      guideSourced: [
        'Little third-party interpretation is needed; this page should lean on official pages first.',
      ],
      avoid: [
        'Do not write yes because a future mode is discussed.',
        'Do not write no forever if the official roadmap later changes.',
      ],
    },
  },
  'iron-nest-roadmap': {
    quickReference: [
      ['Current status', 'Lead with current PC release/store status and avoid Early Access confusion.'],
      ['Platform order', 'PC first, console later, VR after that, unless official updates change the sequence.'],
      ['Multiplayer', 'Separate planned Heavy Turret Simulator multiplayer from standalone co-op project notes.'],
      ['Maintenance rule', 'Every roadmap page should show a last-checked date and avoid hard dates without official support.'],
      ['Status labels', 'Use available, planned, undated, target window, and separate project so readers can distinguish shipped features from intentions.'],
      ['Change trigger', 'The page should be refreshed after Steam News, FAQ edits, store-label changes, or developer announcements.'],
      ['Reader need', 'Most visitors want to know whether to buy now, wait for console, wait for VR, or expect multiplayer later.'],
      ['Buyer framing', 'Separate playable-now facts from future wishes so the page helps purchase decisions instead of acting like a rumor roundup.'],
      ['No rumor lane', 'Leave community speculation out of the first version unless it is clearly labeled and kept below official roadmap notes.'],
      ['Maintenance cue', 'Keep a visible last-checked date near roadmap claims so readers know whether the page reflects current announcements.'],
      ['Source order', 'Use official FAQ and Steam News first, then add store pages, then only cautious third-party context.'],
    ],
    troubleshooting: [
      {
        symptom: 'The roadmap reads like a promise list.',
        likelyCause: 'Planned items were written without status labels.',
        fix: 'Use status labels such as available, planned, target window, undated, and separate project.',
      },
      {
        symptom: 'Console timing looks too specific.',
        likelyCause: 'Approximate wording was converted into a calendar date.',
        fix: 'Keep the original level of precision unless official news provides more.',
      },
      {
        symptom: 'Multiplayer and co-op are confused.',
        likelyCause: 'Two different future ideas were merged.',
        fix: 'Create separate rows for current-game multiplayer and standalone cooperative project.',
      },
    ],
    sourceBoundary: {
      official: [
        'Release status, platform direction, multiplayer planning, co-op project wording, and Steam News updates.',
      ],
      guideSourced: [
        'Third-party sources are secondary here and should only add context after official checks.',
      ],
      avoid: [
        'Do not turn target windows into exact launch dates.',
        'Do not include rumors in the first SEO version.',
      ],
    },
  },
};
