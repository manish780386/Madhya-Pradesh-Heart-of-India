import type { WildlifeSpecies, NationalPark } from "../../../types";

// ─── EXTENDED TYPES ───────────────────────────────────────────────────────────

export interface SafariTip {
  icon: string;
  title: string;
  detail: string;
}

export interface SeasonalWindow {
  season: string;
  months: string;
  condition: string;
  verdict: "best" | "good" | "avoid";
  tip: string;
}

export interface ConservationStat {
  label: string;
  value: string;
  context: string;
  icon: string;
}

export interface JungleRule {
  rule: string;
  why: string;
  icon: string;
}

export interface WildlifeBehavior {
  time: string;
  label: string;
  what: string;
  icon: string;
}

// ─── SPECIES ──────────────────────────────────────────────────────────────────

export const WILDLIFE_SPECIES: WildlifeSpecies[] = [
  {
    id: "bengal-tiger",
    name: "Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    park: "Bandhavgarh · Kanha · Pench",
    icon: "🐯",
    rarity: "Rare",
    desc: "The white tiger legacy lives here — Bandhavgarh has the highest tiger density of any reserve in India. A single male tiger patrols a territory of 60–100 sq km. They mark boundaries with scent, scratch trees, and leave pugmarks in dust that trackers read like a newspaper. Females are smaller, more secretive, and far more dangerous when cubs are near.",
    fact: "MP has over 785 tigers — roughly 23% of India's entire wild tiger population. Project Tiger began here.",
    color: "#F4A261",
    behaviors: [
      "Dawn patrol of territory boundaries",
      "Midday rest near waterholes",
      "Dusk hunting along deer corridors",
      "Territorial roar audible from 3 km",
    ],
    bestSpot: "Tala Zone, Bandhavgarh — highest sighting probability in Asia",
    threatLevel: "Population recovering but habitat loss remains critical",
  },
  {
    id: "indian-leopard",
    name: "Indian Leopard",
    scientificName: "Panthera pardus fusca",
    park: "Pench · Satpura · Kanha buffer",
    icon: "🐆",
    rarity: "Uncommon",
    desc: "The forest's ghost. Pench's most intelligent and elusive resident adapts to any terrain — rocky outcrops, dense teak, riverine gallery forests. Unlike tigers, leopards are opportunists who hunt 30+ prey species. They are the great survivors, thriving in areas where tigers have disappeared. Spotting one in daylight is a rare gift.",
    fact: "Leopards can carry prey twice their body weight vertically up a tree — storing kills away from tigers and wild dogs.",
    color: "#E9C46A",
    behaviors: [
      "Nocturnal by nature, occasionally diurnal",
      "Hoist kills into forks of tall trees",
      "Extremely territorial with rosetted coat as camouflage",
      "Ambush hunter relying on proximity not speed",
    ],
    bestSpot: "Satpura's rocky buffer zones — leopard density rivals tiger zones",
    threatLevel: "Adaptable but declining near human settlements",
  },
  {
    id: "wild-elephant",
    name: "Wild Asian Elephant",
    scientificName: "Elephas maximus indicus",
    park: "Kanha · Pench · Bandhavgarh",
    icon: "🐘",
    rarity: "Common",
    desc: "Gentle giants that reshape ecosystems. A single herd of 20 elephants strips bark, breaks branches, and carves paths through jungle that smaller animals use for decades. They have an extraordinary spatial memory — matriarchs navigate the same seasonal migration routes their grandmothers used. Kanha's meadows at dawn, with fog rising and elephant silhouettes moving through sal forest, is one of India's great wildlife spectacles.",
    fact: "Elephants communicate through infrasound — seismic vibrations felt through their feet, detectable 30 km away.",
    color: "#90A9B7",
    behaviors: [
      "Dawn movement to water sources and mineral licks",
      "Midday dust bathing — natural sunscreen and insect repellent",
      "Matriarch-led family units of 10–20 individuals",
      "Bull elephants live solitary or in bachelor groups",
    ],
    bestSpot: "Kanha's Kisli Zone — early morning jeep safari along grassland edges",
    threatLevel: "Locally stable, threatened by corridor fragmentation",
  },
  {
    id: "gharial",
    name: "Gharial",
    scientificName: "Gavialis gangeticus",
    park: "National Chambal Sanctuary",
    icon: "🐊",
    rarity: "Critically Rare",
    desc: "A 280-million-year-old design that survived five mass extinctions — and nearly didn't survive humanity. Gharials are fish-eaters, incapable of consuming large prey despite their fearsome appearance. The Chambal River is their last true stronghold. Watching a 5-metre male slide off a sandbank into the river, his ghara (nasal boss) glinting in morning light, is witnessing deep time made flesh.",
    fact: "Fewer than 800 adults remain in the wild globally. The Chambal holds over 90% of the world's breeding population.",
    color: "#52B788",
    behaviors: [
      "Basking on clean sandy riverbanks in winter sun",
      "Fish-hunting by lateral jaw sweeps — not biting",
      "Males defend stretch of river as territory",
      "Females nest on high sandbars, guard eggs for 90 days",
    ],
    bestSpot: "Chambal River boat safari, Dholpur to Paliwal stretch",
    threatLevel: "Critically Endangered — one of India's most urgent conservation crises",
  },
  {
    id: "barasingha",
    name: "Barasingha (Swamp Deer)",
    scientificName: "Rucervus duvaucelii",
    park: "Kanha",
    icon: "🦌",
    rarity: "Uncommon",
    desc: "The living symbol of India's greatest conservation success. By 1970, only 66 survived — poaching, habitat loss, and disease had destroyed an animal that once roamed across the subcontinent. Kanha's rangers launched a decades-long recovery program. Today 700+ barasingha graze Kanha's meadows — their broad antlers (12 tines at full maturity) spread like candelabras above the grass. The state animal of MP has come back from the very edge.",
    fact: "The hard-ground subspecies (Kanha's barasingha) uniquely evolved hooves adapted to dry grassland, not the swampy lowlands of other subspecies.",
    color: "#95D5B2",
    behaviors: [
      "Herd grazing in open meadows — safety in numbers",
      "Rutting season (Nov–Dec): dramatic antler clashing",
      "Young stags form bachelor herds, challenging elders",
      "Highly wary — they are tigers' preferred large prey",
    ],
    bestSpot: "Kanha Meadows (Kanha Zone) — herd of 100+ barasingha at dawn",
    threatLevel: "Recovering but entirely dependent on Kanha's protection",
  },
  {
    id: "sloth-bear",
    name: "Sloth Bear",
    scientificName: "Melursus ursinus",
    park: "Satpura · Pench · Kanha",
    icon: "🐻",
    rarity: "Common",
    desc: "Shaggy, chaotic, and utterly unpredictable — the sloth bear is the forest's id. Unlike most bears, sloth bears are specialized insectivores. They excavate termite mounds with curved claws, seal lips around the opening, and create an industrial vacuum with a hollow palate. The sound — a wet, mechanical slurping — is audible from 100 metres. They are also the most dangerous large mammal in Indian forests for unprotected encounters; they charge instantly and bite the face.",
    fact: "Sloth bear mothers carry cubs on their back for up to 9 months — the only bear species to do this routinely.",
    color: "#B7935A",
    behaviors: [
      "Nocturnal but active in cool morning hours",
      "Termite mound excavation is primary feeding strategy",
      "Seasonal fruit feasting on mahua, figs, and berries",
      "Mother-cub pairs are most dangerous encounters",
    ],
    bestSpot: "Satpura's sal forests — highest sloth bear density in Central India",
    threatLevel: "Vulnerable — declining outside protected areas",
  },
  {
    id: "indian-wolf",
    name: "Indian Wolf",
    scientificName: "Canis lupus pallipes",
    park: "Sanjay-Dubri · Chambal Region",
    icon: "🐺",
    rarity: "Rare",
    desc: "Leaner, shorter-furred, and more adapted to heat than Himalayan cousins — the Indian wolf is one of the world's most genetically distinct wolf populations, isolated from other wolf lineages for 400,000 years. They hunt in packs of 4–8, coordinating ambushes on blackbuck and chinkara with remarkable precision. In the Chambal badlands, packs use the eroded ravines as hunting corridors. They are cryptic, intelligent, and seen by very few.",
    fact: "Indian wolves are being proposed as a separate species (Canis indica) — they diverged from grey wolves before European wolves did.",
    color: "#ADB5BD",
    behaviors: [
      "Dawn and dusk pack hunts on open scrubland",
      "Elaborate howl communication — territory defence",
      "Den sites in rocky outcrops or earthen dens",
      "Pup-rearing involves entire pack as helpers",
    ],
    bestSpot: "Sanjay-Dubri eastern grasslands and Chambal valley edges",
    threatLevel: "Endangered — fewer than 2,000–3,000 remain in India",
  },
  {
    id: "gaur",
    name: "Gaur (Indian Bison)",
    scientificName: "Bos gaurus",
    park: "Kanha · Pench · Satpura",
    icon: "🦬",
    rarity: "Uncommon",
    desc: "The largest wild bovine on Earth. A dominant gaur bull at Kanha can stand 1.9 metres at the shoulder and weigh over 1,100 kg. They fear very little — tigers will attempt to hunt them but the attempt is always dangerous, and gaur have been documented killing tigers. The distinctive dorsal ridge rising from forehead to rump, the white 'stockings,' and the massive neck give them an almost mythological appearance moving through bamboo forest at dusk.",
    fact: "Gaur have a unique ridge of cartilage running from head to tail — thought to be for display and possibly thermoregulation.",
    color: "#6C757D",
    behaviors: [
      "Herd of 10–40 individuals led by dominant cow",
      "Mineral lick visits are highly predictable",
      "Stand their ground against most predators",
      "Highly alert — sentinel behaviour in herds",
    ],
    bestSpot: "Kanha's bamboo zones and mineral licks near Mukki Gate",
    threatLevel: "Vulnerable — foot and mouth disease from livestock is primary threat",
  },
  {
    id: "dhole",
    name: "Dhole (Indian Wild Dog)",
    scientificName: "Cuon alpinus",
    park: "Kanha · Pench · Bandhavgarh",
    icon: "🦊",
    rarity: "Rare",
    desc: "The most efficient pack predator in Indian forests. A dhole pack of 15–20 can run down a full-grown sambar deer over 3–4 km through dense jungle. They communicate through an extraordinary range of whistles, clucks, and screams — no barking. Even tigers will vacate a waterhole when a dhole pack approaches. Their cooperative hunting, with roles assigned mid-chase, rivals wolves and African wild dogs in sophistication.",
    fact: "Dholes have proportionally more teeth than any other canid — they have an extra lower molar giving them carnassials of extraordinary shearing power.",
    color: "#C0633A",
    behaviors: [
      "Dawn and dusk pack hunts — highly coordinated relay chasing",
      "Regurgitate food for pups and injured pack members",
      "Den sites used communally; pack raises all pups together",
      "Whistle-based communication — can coordinate across 500 m",
    ],
    bestSpot: "Kanha's meadow edges — pack sightings are rare but unforgettable",
    threatLevel: "Endangered — habitat loss and conflict with humans",
  },
  {
    id: "mugger-croc",
    name: "Mugger Crocodile",
    scientificName: "Crocodylus palustris",
    park: "Satpura · Panna (Ken River) · Pench",
    icon: "🐊",
    rarity: "Common",
    desc: "The ancient ruler of every warm freshwater body in Central India. Muggers are broad-snouted generalists — ambush hunters who take fish, deer, and anything that comes to the water's edge to drink. In Satpura, boat safaris on the Denwa River bring you within metres of muggers basking on rocks, mouths open (thermoregulating, not threatening). Unlike gharials, muggers are opportunists who will take large prey.",
    fact: "Mugger crocodiles 'cry' — they shed tears while eating, giving origin to the phrase 'crocodile tears.' It's actually sinus flushing.",
    color: "#4A7C59",
    behaviors: [
      "Basking with open mouth — thermoregulation, not aggression",
      "High-walk on land — can sprint short distances",
      "Ambush hunting at river edges, especially at dusk",
      "Nest guarding: females protect eggs and hatchlings fiercely",
    ],
    bestSpot: "Satpura's Denwa River canoe safari — intimate encounters",
    threatLevel: "Locally stable, vulnerable to dam construction and poaching",
  },
];

// ─── NATIONAL PARKS ───────────────────────────────────────────────────────────

export const NATIONAL_PARKS: NationalPark[] = [
  {
    id: "bandhavgarh",
    name: "Bandhavgarh",
    area: "1,536 km²",
    state: "Umaria District, Vindhya Hills",
    established: 1968,
    altitude: "440–810 m above sea level",
    rivers: "Charanganga, Johilla",
    zones: ["Tala (highest wildlife density)", "Magdhi", "Khitauli"],
    bestTime: "October – June",
    peakSeason: "February – April",
    knownFor:
      "India's highest tiger density — roughly 1 tiger per 7 sq km in Tala Zone. Ancient Bandhavgarh Fort dates to the 1st century BC; 32 caves with Brahmi inscriptions sit inside the park. The Shesh Shaiya — a 10-metre reclining Vishnu carved from natural rock — lies in the deep forest. Wildlife here exists within layers of civilisation that are 2,000 years old.",
    icon: "🐯",
    gradient: "linear-gradient(135deg,#1A0800,#5C1A00,#C0392B)",
    species: [
      "Royal Bengal Tiger (highest density in Asia)",
      "Indian Leopard (Magdhi Zone specialist)",
      "Sloth Bear (bamboo forest dweller)",
      "Indian Gaur (largest wild bovine)",
      "Sambar Deer (tiger's primary prey)",
      "Spotted Deer (chital, most abundant prey)",
    ],
    safariTip: "Tala Zone jeep morning safari — book 90 days in advance. Tala has only 20 jeep permits daily.",
    funFact: "The famous white tigers discovered here in 1951 by Maharaja Martand Singh became the progenitors of all white tigers in captivity globally.",
    conservation: "Tiger count went from 22 (2006) to 135+ (2024) within the reserve complex."
  },

  {
    id: "kanha",
    name: "Kanha",
    area: "2,051 km²",
    state: "Mandla & Balaghat districts, Maikal Range",
    established: 1955,
    altitude: "450–945 m above sea level",
    rivers: "Banjar, Sulkum, Halon",
    zones: ["Kanha (meadows)", "Kisli", "Mukki", "Sarhi"],
    bestTime: "October – June",
    peakSeason: "March – May",
    knownFor:
      "The park Rudyard Kipling drew from for Jungle Book. Kanha's sal-bamboo forests, expansive meadows (maidans), and corridor ecosystem saved the barasingha from extinction through one of conservation history's most intensive efforts. It was also the model for Project Tiger's subsequent success. The meadows at dawn — mist lifting off grass, spotted deer grazing in hundreds, barasingha silhouettes in the tree line — are among India's most iconic wildlife scenes.",
    icon: "🦌",
    gradient: "linear-gradient(135deg,#051208,#1B4332,#52B788)",
    species: [
      "Royal Bengal Tiger (apex predator)",
      "Barasingha (the park's iconic recovery story)",
      "Indian Wild Dog / Dhole (pack hunters)",
      "Gaur (herd of 200+ in bamboo belts)",
      "Indian Leopard (elusive, present throughout)",
      "Indian Python (grassland ambush predator)",
    ],
    safariTip: "Kanha and Kisli Zones for big cats. Mukki Zone for quieter elephant and gaur sightings. Book Kanha Zone first.",
    funFact: "Kanha's barasingha recovery program moved from 66 animals in 1970 to 750+ today — achieved without any captive breeding, purely through habitat management.",
    conservation: "India's first national park to formally relocate villages from the core zone to buffer area with full consent."
  },

  {
    id: "pench",
    name: "Pench",
    area: "758 km²",
    state: "Seoni & Chhindwara districts, Satpura Range",
    established: 1975,
    altitude: "330–625 m above sea level",
    rivers: "Pench River (runs through centre)",
    zones: ["Turia Gate (tiger territory)", "Karmajhiri", "Rukhad"],
    bestTime: "November – June",
    peakSeason: "February – May",
    knownFor:
      "The confirmed real-world setting that inspired Kipling's Jungle Book — the Pench River is Kipling's Wainganga, and local oral tradition names specific landmarks from the stories. Pench is MP's most 'accessible' tiger reserve, compact enough that guides know individual animals by behaviour. The park's tiger families have been photographed continuously for 15+ years — the documented inter-generational dynamics here are among the most studied in wildlife science.",
    icon: "🐺",
    gradient: "linear-gradient(135deg,#0A0F05,#1E3A10,#4A7C35)",
    species: [
      "Bengal Tiger (well-documented individuals)",
      "Indian Leopard (nocturnal zone near Rukhad)",
      "Indian Wolf (rare — grassland fringe sightings)",
      "Gaur (herds of 30–40 near river)",
      "Nilgai (largest Asian antelope, grassland edges)",
      "Jungle Cat (smallest wild cat, frequently seen)",
    ],
    safariTip: "Pench is compact — a single zone covers most of the habitat. Morning safari through Turia Gate gives best tiger sighting probability.",
    funFact: "Pench's radio-collar study of tigress T-15 ('Collarwali') documented her successfully raising 29 cubs over a decade — the most recorded by any wild tigress.",
    conservation: "Pench serves as the primary wildlife corridor linking Kanha to the Melghat Tiger Reserve in Maharashtra."
  },

  {
    id: "satpura",
    name: "Satpura",
    area: "1,427 km²",
    state: "Narmadapuram (Hoshangabad), Satpura Hills",
    established: 1981,
    altitude: "300–1,352 m above sea level (highest peak: Dhupgarh)",
    rivers: "Denwa, Sondh",
    zones: ["Madhai (canoe safaris)", "Churna", "Pachmarhi buffer"],
    bestTime: "October – June",
    peakSeason: "November – March (walking safaris)",
    knownFor:
      "India's only national park offering walking safaris, canoe safaris, and jeep safaris simultaneously — making it uniquely immersive. The terrain is dramatically different from MP's other parks: ancient sandstone plateaus, deep gorges, dense sal-teak forest, and the Denwa reservoir create micro-habitats found nowhere else in Central India. Satpura has exceptional leopard density (often higher encounters than tigers) and is India's best park for the rare Indian giant squirrel.",
    icon: "🐆",
    gradient: "linear-gradient(135deg,#0F0A00,#3D2B1F,#8B5E3C)",
    species: [
      "Leopard (primary large predator — exceptional sightings)",
      "Tiger (lower density but large territory males)",
      "Sloth Bear (high density in rocky terrain)",
      "Indian Giant Squirrel (Malabar, arboreal — large and colourful)",
      "Mugger Crocodile (Denwa River colonies)",
      "Porcupine (nocturnal, commonly seen on walks)",
    ],
    safariTip: "Book the 3-day walking safari package. Madhai entry for boat safari at dawn. Satpura rewards slow travellers — fewer jeeps, deeper wilderness.",
    funFact: "Satpura's canoe safari is one of only three wildlife canoe experiences in all of India and the only one in a tiger reserve.",
    conservation: "Satpura forms the eastern anchor of the Panna-Satpura-Melghat landscape — a 6,000 sq km connected forest block."
  },

  {
    id: "panna",
    name: "Panna",
    area: "543 km²",
    state: "Panna & Chhatarpur districts, Ken River",
    established: 1981,
    altitude: "250–550 m above sea level",
    rivers: "Ken River (declared Wild Life Sanctuary river)",
    zones: ["Madla (river tigers)", "Hinauta", "Akola"],
    bestTime: "October – June",
    peakSeason: "February – April",
    knownFor:
      "The comeback story that gave conservation biology its most dramatic example. By 2009, Panna had zero tigers — poaching had emptied the reserve entirely. An emergency translocation program began, bringing tigresses from Bandhavgarh and Kanha. Today, 75+ tigers inhabit Panna again. The Ken River cuts through dramatic limestone gorges here, and the park contains a UNESCO World Heritage-nominated wildlife corridor with the Ken-Betwa river-link zone.",
    icon: "🐅",
    gradient: "linear-gradient(135deg,#080014,#2D0057,#6A0DAD)",
    species: [
      "Bengal Tiger (reintroduced, now breeding naturally)",
      "Indian Leopard (permanent resident throughout)",
      "Indian Vultures (white-backed, griffon — critical scavengers)",
      "Mugger Crocodile (Ken River sandbar colonies)",
      "Gharial (rare — occasional sightings on Ken)",
      "Indian Skimmer (endemic river bird, nests on sandbars)",
    ],
    safariTip: "Request a river zone safari route for Ken River tiger sightings — tigers here are particularly comfortable near water. Birdwatching in winter rivals any reserve in India.",
    funFact: "The Ken-Betwa River interlinking project poses an existential threat to Panna — submergence of 10% of core tiger habitat is under active legal challenge.",
    conservation: "Panna's turnaround is taught as a global case study in wildlife restoration in conservation biology curricula."
  },

  {
    id: "sanjay-dubri",
    name: "Sanjay-Dubri",
    area: "1,674 km²",
    state: "Sidhi & Singrauli districts, Eastern MP",
    established: 1981,
    altitude: "400–1,127 m above sea level",
    rivers: "Banas, Gopad, Son River tributaries",
    zones: ["Sanjay Core", "Dubri Buffer (limited access)", "Son River corridor"],
    bestTime: "November – May",
    peakSeason: "December – March",
    knownFor:
      "MP's least visited and most genuinely wild large reserve. Sanjay-Dubri connects to the Guru Ghasidas National Park in Chhattisgarh, forming a 2,200 sq km contiguous forest — one of Central India's largest tiger landscapes. The park sees perhaps 200 tourists per month (vs. 10,000+ at Bandhavgarh). The result is a forest that behaves as if humans aren't there — rare behaviour from wild animals, deep silence, and no jeep queues at sightings.",
    icon: "🦬",
    gradient: "linear-gradient(135deg,#050A10,#0F2A3F,#1A5080)",
    species: [
      "Tiger (low human disturbance — exceptional natural behaviour)",
      "Indian Wolf (Chambal-adjacent grasslands)",
      "Wild Dog / Dhole (Son River corridor packs)",
      "Gaur (dominant herbivore, large herds)",
      "Flying Squirrel (Indian giant, nocturnal glider)",
      "Barasingha (small population in eastern meadows)",
    ],
    safariTip: "Hire a local naturalist from Sidhi — they know the forest routes that official guides skip. This park rewards patience and independent travel planning.",
    funFact: "Sanjay-Dubri is one of MP's only reserves where Indian wolves and tigers share the same forest — an extremely rare ecological overlap.",
    conservation: "The Son River corridor here is critical to genetic connectivity between Central and Eastern India tiger populations."
  },
];

// ─── SEASONAL GUIDE ───────────────────────────────────────────────────────────

export const SEASONAL_GUIDE: SeasonalWindow[] = [
  {
    season: "Post-Monsoon",
    months: "October – November",
    condition: "Forest reopens after 3-month closure. Lush. Animals refreshed and territorial.",
    verdict: "good",
    tip: "Tigers are active after closure stress. Excellent for birdwatching. Ground is soft — pugmark tracking is easy.",
  },
  {
    season: "Winter",
    months: "December – January",
    condition: "Cool mornings (8°C) with clear skies. Dense vegetation still present. Migratory birds arrive.",
    verdict: "good",
    tip: "Best for Chambal safari (gharial basking). Leopards more active in cold. Bring warm layers for 5 AM departures.",
  },
  {
    season: "Peak Dry Season",
    months: "February – April",
    condition: "Vegetation thins dramatically. Animals concentrate at waterholes. Tiger sightings peak.",
    verdict: "best",
    tip: "The golden window. Waterhole stakeouts are the strategy — request park naturalists for fixed-point observation.",
  },
  {
    season: "Late Dry Season",
    months: "May – June",
    condition: "40°C+ heat. Forest is skeletal. Animals barely hidden. Extreme discomfort.",
    verdict: "best",
    tip: "Counter-intuitive — best big cat sightings happen now. Start at 5:30 AM. The heat is worth the sightings.",
  },
  {
    season: "Monsoon",
    months: "July – September",
    condition: "Parks closed to visitors. Forest regenerates. Animals breed and den.",
    verdict: "avoid",
    tip: "Respect the closure — it's why these parks work. Use this time to plan: book permits 90 days in advance.",
  },
];

// ─── CONSERVATION STATS ───────────────────────────────────────────────────────

export const CONSERVATION_STATS: ConservationStat[] = [
  {
    label: "Wild Tigers in MP",
    value: "785+",
    context: "Up from 300 in 2006 — a 161% increase in 18 years",
    icon: "🐯",
  },
  {
    label: "Protected Area",
    value: "10,862 km²",
    context: "Across 6 national parks and 25 wildlife sanctuaries",
    icon: "🌿",
  },
  {
    label: "Gharial Recovery",
    value: "90%",
    context: "Of all wild breeding gharials live in Chambal — global significance",
    icon: "🐊",
  },
  {
    label: "Barasingha Saved",
    value: "750+",
    context: "From 66 in 1970. Kanha's greatest conservation triumph",
    icon: "🦌",
  },
  {
    label: "Camera Trap Coverage",
    value: "6,200+",
    context: "Individual tigers identified by stripe patterns across MP",
    icon: "📷",
  },
  {
    label: "Forest Rangers",
    value: "3,400+",
    context: "Active across MP's protected network — among India's best-trained",
    icon: "🛡️",
  },
];

// ─── JUNGLE RULES ─────────────────────────────────────────────────────────────

export const JUNGLE_RULES: JungleRule[] = [
  {
    rule: "Silence is the entrance fee",
    why: "Animals detect human presence by sound first. A whispered conversation at normal volume can alert wildlife 200 metres away. In the forest, silence is not politeness — it's respect for the animal's right to behave naturally.",
    icon: "🤫",
  },
  {
    rule: "Never stand up in the jeep",
    why: "Animals recognise the jeep-human shape as non-threatening. The moment a human silhouette rises above the vehicle, the threat profile changes entirely. Tigers will melt into forest. Always remain seated and low.",
    icon: "🪑",
  },
  {
    rule: "Wear earth tones",
    why: "Bright clothing — especially white, red, and electric blue — registers as alarming to many species. Khaki, olive, brown, and grey allow closer approaches. It's not about being invisible; it's about being unremarkable.",
    icon: "🟤",
  },
  {
    rule: "Follow your naturalist without question",
    why: "A good naturalist reads 40 simultaneous cues — alarm calls, wind direction, jungle sounds, animal behaviour — that visitors cannot. Their instructions mid-safari are not suggestions; they are responses to real-time information you don't yet have.",
    icon: "🧭",
  },
  {
    rule: "No flash photography",
    why: "Flash disrupts nocturnal animals permanently — it can damage their night vision and destroy trust in the jeep-as-safe-object that conservationists have spent years building. Use ISO 3200+ on a fast lens instead.",
    icon: "📸",
  },
  {
    rule: "A sighting is not owed to you",
    why: "The forest does not perform. Return visitors who hold the experience lightly — who find joy in pugmarks, alarm calls, and a moving bamboo stand — see more than those who demand tigers. Arrive as a guest, not an audience member.",
    icon: "🙏",
  },
];

// ─── DAILY WILDLIFE RHYTHM ────────────────────────────────────────────────────

export const DAILY_RHYTHM: WildlifeBehavior[] = [
  {
    time: "5:00 AM",
    label: "Pre-dawn",
    icon: "🌙",
    what: "Nocturnal predators finish hunts and cache kills. Owls and nightjars fall silent. The forest shifts handover from night creatures to day creatures. This transition — 15 silent minutes where the jungle reorganises itself — is one of the most profound experiences available in any wild place.",
  },
  {
    time: "6:00 AM",
    label: "First Light",
    icon: "🌅",
    what: "Alarm calls begin. Spotted deer graze open clearings while visibility is low for predators. Tigers emerge to drink. Elephants move to water. Langurs descend from sleeping trees. The forest is fully active within 20 minutes of sunrise.",
  },
  {
    time: "8:00 AM",
    label: "Active Morning",
    icon: "☀️",
    what: "Peak wildlife activity window. Tigers finish their territorial patrol and may be found near waterholes or on established game paths. Gaur herds move through bamboo. Dholes hunt if a pack is present. Your best sighting probability is in this window.",
  },
  {
    time: "11:00 AM",
    label: "Midday Withdrawal",
    icon: "🔆",
    what: "Heat drives large animals into shade. The forest becomes visually quiet but audibly rich — cicadas, treepies, the distant shriek of a peafowl. This is when trackers look for claw marks, scrapes, and drag marks. The afternoon story is written in the morning's tracks.",
  },
  {
    time: "4:30 PM",
    label: "Afternoon Revival",
    icon: "🌤️",
    what: "Temperature drops 4–6 degrees and the forest comes alive again. Sambar move from cover. Sloth bears emerge for evening termite feeding. Tigers stretch, scent-mark, and begin evening movement. The 90-minute window before dark is the second peak.",
  },
  {
    time: "6:30 PM",
    label: "Dusk Transition",
    icon: "🌆",
    what: "Nightjars begin calling. Owls take positions. Leopards — primarily nocturnal — emerge. The jungle reorganises again, handing over from day creatures to night. You are required to be back at camp by this time. What happens after is the forest's own business.",
  },
];

// ─── SAFARI TIPS ──────────────────────────────────────────────────────────────

export const SAFARI_TIPS: SafariTip[] = [
  {
    icon: "🎯",
    title: "Book 90 days out",
    detail: "Tala Zone (Bandhavgarh) and Kanha Zone (Kanha) have 20 jeep permits per safari. They sell out within hours of opening. Set a calendar reminder.",
  },
  {
    icon: "🌡️",
    title: "Temperature management",
    detail: "March–May: 5 AM departures at 15°C, 10 AM returns at 38°C. Layer with a light fleece for pre-dawn, strip to a single layer by 8 AM.",
  },
  {
    icon: "📡",
    title: "Listen to alarm calls",
    detail: "Spotted deer alarm (staccato bark), langur alarm (whooping), sambar alarm (single loud bark) — each species names the predator by direction. Learn these before you go.",
  },
  {
    icon: "🔭",
    title: "Binoculars over cameras",
    detail: "The first thing you see a tiger with should not be through a camera screen. Spend 30 seconds just watching before lifting a lens. The image you take afterward will be better.",
  },
  {
    icon: "🏕️",
    title: "Stay inside the buffer",
    detail: "Resorts inside buffer zones allow animal movement at night. Wake at 3 AM to absolute silence — then, sometimes, the sound of something very large walking past your tent.",
  },
  {
    icon: "🤝",
    title: "Tip your naturalist",
    detail: "A good naturalist earns ₹300–500 per safari in base pay. They carry 10 years of forest knowledge. ₹500 from you is appropriate gratitude — and means they stay in the profession.",
  },
];