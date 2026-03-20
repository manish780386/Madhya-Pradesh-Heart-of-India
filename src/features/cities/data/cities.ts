export interface Highlight {
  label: string;
  icon: string;
}

export interface StoryMoment {
  time: string;
  icon: string;
  desc: string;
}

export interface City {
  id: string;
  name: string;
  nameDev: string;
  title: string;
  tagline: string;
  description: string;
  region: string;
  accent: string;
  accentDark: string;
  heroGradient: string;
  coords: { x: number; y: number };
  emoji: string;
  coverImage: string;
  galleryImages: string[];
  highlights: Highlight[];
  story: StoryMoment[];
  food: string[];
  bestTime: string;
  distance: string;
  population?: string;
  famousFor?: string;
}

export const CITIES: City[] = [
  {
    id: "bhopal",
    name: "Bhopal",
    nameDev: "भोपाल",
    title: "City of Lakes",
    tagline: "Where serenity meets history on silver shores",
    description:
      "Bhopal, the capital of Madhya Pradesh, is a city of breathtaking lakes, Mughal-era mosques, and a vibrant tribal museum that holds the world's finest collection of indigenous art. Twin lakes shimmer at its heart, splitting the city into old and new — each half a universe unto itself.",
    region: "Central MP",
    accent: "#4ECDC4",
    accentDark: "#2A9D8F",
    heroGradient: "linear-gradient(135deg,#0F2A3F 0%,#1A6B8A 55%,#4ECDC4 100%)",
    coords: { x: 43, y: 48 },
    emoji: "🏛️",
    coverImage:
      "https://peopleplaces.in/wp-content/uploads/2023/01/Bhopal-Explore-The-City-Of-Lakes-1000x600.jpg",
    galleryImages: [
      "https://www.trawell.in/admin/images/upload/14523914Bhopal_Main.jpg",
      "https://th.bing.com/th/id/OIP.Bi9foRBvxa8WF7NfFaWLhwHaE8?w=255&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.oYI-yfhJcdL8KA-Chkt2PwHaDt?w=298&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.PnS-A3J-Vk_1khh-6IT4_AHaEr?w=226&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    ],
    highlights: [
      { label: "Upper Lake (Bada Talab)", icon: "🌊" },
      { label: "Taj-ul-Masajid", icon: "🕌" },
      { label: "Bhojpur Temple", icon: "⛩️" },
      { label: "Van Vihar National Park", icon: "🦁" },
      { label: "Indira Gandhi Tribal Museum", icon: "🏺" },
      { label: "Sanchi Stupa (nearby)", icon: "☸️" },
    ],
    story: [
      {
        time: "Dawn",
        icon: "🌅",
        desc: "Morning mist rises over Upper Lake as fishermen cast their nets in golden silence. The call to prayer from Taj-ul-Masajid drifts across the water, ancient and unhurried.",
      },
      {
        time: "Morning",
        icon: "☕",
        desc: "Poha and bhutte ka kees at Chatori Gali. The old city wakes with the scent of cardamom and wood smoke — a ritual older than memory.",
      },
      {
        time: "Afternoon",
        icon: "🏛️",
        desc: "Wander the Indira Gandhi Tribal Museum — 5,000 artifacts, each one a universe. The Gond paintings seem to breathe on their own.",
      },
      {
        time: "Dusk",
        icon: "🌇",
        desc: "Watch twin lakes blush rose-gold from Shyamla Hills as city lights flicker on. Two worlds — old and new — reflected in still water.",
      },
      {
        time: "Night",
        icon: "🌙",
        desc: "New Market buzzes with intent. Seekh kebabs sizzle on charcoal, families stroll by the lake promenade, and the city hums its ancient lullaby.",
      },
    ],
    food: ["Bhutte Ka Kees", "Seekh Kebab", "Shahi Sheermal", "Dal Bafla", "Mawa Bati"],
    bestTime: "October – March",
    distance: "0 km (Capital)",
    population: "1.8 Million",
    famousFor: "Twin Lakes, Tribal Art, Mughal Architecture",
  },
  {
    id: "indore",
    name: "Indore",
    nameDev: "इंदौर",
    title: "Culinary Capital",
    tagline: "A city that never stops eating or dreaming",
    description:
      "India's cleanest city for 7 consecutive years, Indore is a sensory explosion — palatial architecture, bazaars bursting with silk and spice, and street food that stops time. The Malwa plateau gives it crisp winters and fierce summers, and a stubborn pride in its Holkar heritage.",
    region: "Western MP (Malwa)",
    accent: "#F4A261",
    accentDark: "#E76F51",
    heroGradient: "linear-gradient(135deg,#5C1A0A 0%,#C0392B 55%,#F4A261 100%)",
    coords: { x: 28, y: 60 },
    emoji: "🌆",
    coverImage:
      "https://th.bing.com/th/id/ODL.d3ac9c4d6f00be9e63a630bddc3bf7e8?w=310&h=198&c=7&rs=1&bgcl=ffff14&r=0&o=6&dpr=1.5&pid=AlgoBlockDebug",
    galleryImages: [
      "https://th.bing.com/th/id/OIP.6Sxt2RvG_pbmvsqv_48rbgHaEK?w=239&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      "https://tse2.mm.bing.net/th/id/OIP.7aIjkIF1sLWHko-mJVuaawHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.sZPZMDwcf4GLGoSvHfwqOAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.I0-7iLYjwQm8it7ldeDtTgHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
    highlights: [
      { label: "Sarafa Bazaar (Midnight Food)", icon: "🌙" },
      { label: "Rajwada Palace", icon: "🏰" },
      { label: "Lal Bagh Palace", icon: "👑" },
      { label: "Patalpani Waterfall", icon: "💧" },
      { label: "Khajrana Ganesh Temple", icon: "🐘" },
      { label: "Textile Markets", icon: "🛍️" },
      { label: "Annapurna Temple", icon: "⛩️" },
    ],
    story: [
      {
        time: "Dawn",
        icon: "🌄",
        desc: "Poha-jalebi at sunrise — Indore's sacred morning ritual. The city of 3 million wakes in crisp Malwa air to this golden, syrupy covenant.",
      },
      {
        time: "Morning",
        icon: "🏰",
        desc: "Rajwada's seven-storey facade glows in soft morning light — 200 years of Holkar grandeur compressed into carved stone and latticed windows.",
      },
      {
        time: "Afternoon",
        icon: "🛍️",
        desc: "The bazaars hum — silk, spice, silver, and stories. Kajuri Bazaar, the textile lanes, the chaos of Cloth Market — a city doing business loudly.",
      },
      {
        time: "Dusk",
        icon: "🌆",
        desc: "Lal Bagh Palace at golden hour. Italian marble corridors catch the light just so — colonialism meeting Maratha pride in uneasy, gorgeous alliance.",
      },
      {
        time: "Night",
        icon: "🌃",
        desc: "Sarafa Bazaar erupts after midnight. Garadu, malpua, jalebi, and the best chaat in central India. Strangers become friends over shared plates at 2 AM.",
      },
    ],
    food: ["Poha-Jalebi", "Garadu", "Sabudana Khichdi", "Bhutte Ki Kees", "Shikanji"],
    bestTime: "October – February",
    distance: "190 km from Bhopal",
    population: "2.2 Million",
    famousFor: "Street Food, Cleanliness Award, Holkar Heritage",
  },
  {
    id: "khajuraho",
    name: "Khajuraho",
    nameDev: "खजुराहो",
    title: "Temple of Love",
    tagline: "Stone poems of desire carved across centuries",
    description:
      "A UNESCO World Heritage Site where the 10th-century Chandela dynasty built 85 temples celebrating every dimension of human experience — from the erotic to the divine. Only 22 survive, but those 22 are enough to rearrange your understanding of what art can do.",
    region: "Eastern MP (Bundelkhand)",
    accent: "#DAA520",
    accentDark: "#8B6914",
    heroGradient: "linear-gradient(135deg,#2D1000 0%,#8B4513 55%,#DAA520 100%)",
    coords: { x: 73, y: 29 },
    emoji: "⛩️",
    coverImage:
      "https://tse3.mm.bing.net/th/id/OIP.aEk30Px9nw6mrOj4nXhpWwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    galleryImages: [
      "https://th.bing.com/th/id/OIP.QEIf9RUo0hTO16odStWEIAHaE3?w=241&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.dqY2BOA5D1ENWFiT45q_EgHaL-?w=115&h=181&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.5s4ayfw5RGWNc6nQByNWFQHaFS?w=275&h=197&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1d/24/a5/visit-famous-khajuraho.jpg?w=1200&h=1200&s=1",
    ],
    highlights: [
      { label: "Western Temple Group (UNESCO)", icon: "🏛️" },
      { label: "Kandariya Mahadeva Temple", icon: "🔱" },
      { label: "Eastern & Jain Temples", icon: "🕉️" },
      { label: "Archaeological Museum", icon: "🗿" },
      { label: "Light & Sound Show", icon: "✨" },
    ],
    story: [
      {
        time: "Dawn",
        icon: "🌅",
        desc: "First light transforms sandstone into living gold. The temples seem to breathe — their thousands of carved figures stirring in the warm amber glow.",
      },
      {
        time: "Morning",
        icon: "⛩️",
        desc: "Walk among the Western Group alone at opening hour. Every inch carved with celestial precision — apsaras, warriors, lovers — a civilization's entire theology in stone.",
      },
      {
        time: "Afternoon",
        icon: "🏛️",
        desc: "The museum holds what time tried to erase. Fragments of the original 85 temples and explanations of the tantric philosophy encoded in every carving.",
      },
      {
        time: "Dusk",
        icon: "🌇",
        desc: "The temples turn violet, then scarlet, then deep amber. Local guides recite Sanskrit verses while tourists sit in reverent silence.",
      },
      {
        time: "Night",
        icon: "✨",
        desc: "The Light and Sound Show transforms the Western Group into a living mythology. Chandela kings rise again; their temples glow; passion and devotion echo into the dark.",
      },
    ],
    food: ["Thekua", "Malpua", "Chausela", "Dal Puri", "Bhutte Ki Kees"],
    bestTime: "October – February",
    distance: "375 km from Bhopal",
    population: "25,000",
    famousFor: "UNESCO Temples, Erotic Sculptures, Chandela Dynasty",
  },
  {
    id: "gwalior",
    name: "Gwalior",
    nameDev: "ग्वालियर",
    title: "Fortress City",
    tagline: "A rampart that has witnessed every dynasty",
    description:
      "Rising 100 meters above the plains on a sheer sandstone plateau, Gwalior Fort has been called the pearl among fortresses in India. Below it, palaces and music halls tell stories of Tansen and empire. This is where Hindustani classical music was refined, and where kings built monuments to outlast time.",
    region: "Northern MP (Chambal)",
    accent: "#E63946",
    accentDark: "#9B1B2A",
    heroGradient: "linear-gradient(135deg,#080808 0%,#1C1C3A 55%,#E63946 100%)",
    coords: { x: 55, y: 11 },
    emoji: "🏯",
    coverImage:
      "https://www.holidify.com/images/bgImages/GWALIOR.jpg",
    galleryImages: [
      "https://th.bing.com/th/id/OIP.pjuFfWXjFDiR0YsfiyTC8gHaDt?w=350&h=175&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.gCVc6rTUfv2SFmIe2qXHvQHaFc?w=304&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      "https://tse1.mm.bing.net/th/id/OIP.FvkxMEbh46wR-0RotUZ7ZQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.Ag6xpX1NfOJc_UCuHGcWdwHaE8?w=246&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    ],
    highlights: [
      { label: "Gwalior Fort (Man Mandir Palace)", icon: "🏯" },
      { label: "Jai Vilas Palace & Museum", icon: "👑" },
      { label: "Tansen's Tomb", icon: "🎵" },
      { label: "Sas-Bahu Temple Complex", icon: "⛩️" },
      { label: "Tansen Music Festival", icon: "🎶" },
    ],
    story: [
      {
        time: "Dawn",
        icon: "🏯",
        desc: "The fort looms over the city like a sleeping colossus. At first light, its blue-tiled Man Mandir Palace blazes against the pale sky — impossible and magnificent.",
      },
      {
        time: "Morning",
        icon: "👑",
        desc: "Jai Vilas Palace opens its 35 rooms to visitors. The dining hall's two chandeliers weigh 3.5 tonnes each — they tested the ceiling's strength with 8 elephants first.",
      },
      {
        time: "Afternoon",
        icon: "🎵",
        desc: "Tansen's tomb — the legendary court musician of Akbar lies here. They say chewing tamarind leaves above his grave improves your singing voice.",
      },
      {
        time: "Dusk",
        icon: "🌆",
        desc: "From atop the fort, the city spreads below in layers — Mughal, Maratha, colonial, modern — all compressed into this northern gateway to the Deccan.",
      },
      {
        time: "Night",
        icon: "🎶",
        desc: "In November, Tansen Music Festival transforms the tomb into a cathedral of sound. Classical ragas float through winter air until 3 AM. Magic is mundane here.",
      },
    ],
    food: ["Bedai Kachori", "Gajak", "Moong Dal Halwa", "Til Patti", "Ghewar"],
    bestTime: "October – March",
    distance: "423 km from Bhopal",
    population: "1.1 Million",
    famousFor: "Gwalior Fort, Tansen Festival, Classical Music",
  },
  {
    id: "ujjain",
    name: "Ujjain",
    nameDev: "उज्जैन",
    title: "Sacred Capital",
    tagline: "Where time was born and devotion never ends",
    description:
      "One of India's seven sacred cities, Ujjain is where the world's largest religious gathering happens — the Kumbh Mela. Home to Mahakaleshwar, one of 12 Jyotirlinga shrines, this city runs on devotion, operates outside of secular time, and has been a centre of astronomy and spirituality for 3,000 years.",
    region: "Western MP (Malwa)",
    accent: "#FF6B35",
    accentDark: "#C0392B",
    heroGradient: "linear-gradient(135deg,#1A0030 0%,#6A0DAD 55%,#FF6B35 100%)",
    coords: { x: 27, y: 51 },
    emoji: "🕌",
    coverImage:
      "https://kookdook.com/wp-content/uploads/2023/09/image-482-1024x768.png",
    galleryImages: [
     "https://th.bing.com/th/id/OIP.v1n4m55Vo1DiLw8BeIL03gHaFj?w=248&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
     "https://th.bing.com/th/id/OIP.PnZ2ZWDaGMBgchmj28s9OAHaE8?w=278&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
     "https://th.bing.com/th/id/OIP.tZqftydLbE3hyZHSAxWUNAHaEY?w=216&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.X5iFacswFt0tEPNGvbnhfwHaEK?w=193&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
    ],
    highlights: [
      { label: "Mahakaleshwar Temple (Jyotirlinga)", icon: "🔱" },
      { label: "Ram Ghat & Shipra Aarti", icon: "🙏" },
      { label: "Kal Bhairav Temple", icon: "⚔️" },
      { label: "Vedh Shala (Observatory)", icon: "🌠" },
      { label: "Simhastha Kumbh Mela Site", icon: "🌊" },
    ],
    story: [
      {
        time: "Pre-Dawn",
        icon: "🔔",
        desc: "Bhasma Aarti begins at 4 AM. Sacred ash from cremation grounds is applied to the Shivalinga while priests chant in Sanskrit. The air vibrates at a frequency older than language.",
      },
      {
        time: "Morning",
        icon: "🙏",
        desc: "The Shipra flows quiet and holy below Ram Ghat. Pilgrims submerge their grief, their illness, their questions. The water takes everything — and gives something back.",
      },
      {
        time: "Afternoon",
        icon: "🏛️",
        desc: "Ram Ghat fills with orange. Marigolds float. Monks discuss scripture. An old man watches it all from a crumbling step — he has been coming here for 60 years.",
      },
      {
        time: "Dusk",
        icon: "🌅",
        desc: "The evening aarti at Ram Ghat stops time. Dozens of priests move in choreographed devotion. The lamps create doubles in the water below.",
      },
      {
        time: "Night",
        icon: "🌕",
        desc: "Under Ujjain's sky, you sense the meridian. This was the world's prime longitude before Greenwich — where time itself was measured. The stars feel intentional.",
      },
    ],
    food: ["Kachori Sabzi", "Mawa Bati", "Dal Baati Churma", "Shrikhand", "Sabudana Khichdi"],
    bestTime: "October – March",
    distance: "183 km from Bhopal",
    population: "575,000",
    famousFor: "Mahakaleshwar Jyotirlinga, Kumbh Mela, Shipra River",
  },
  {
    id: "pachmarhi",
    name: "Pachmarhi",
    nameDev: "पचमढ़ी",
    title: "Queen of Satpura",
    tagline: "Misty valleys where waterfalls write poetry",
    description:
      "The only hill station in Madhya Pradesh, Pachmarhi sits at 1,067 meters in the Satpura Range — a landscape of ancient forests, prehistoric cave paintings, cascading falls, and tigers. The British discovered it in 1857 and called it paradise. It still is.",
    region: "Central MP (Satpura)",
    accent: "#52B788",
    accentDark: "#2D6A4F",
    heroGradient: "linear-gradient(135deg,#051208 0%,#1B4332 55%,#52B788 100%)",
    coords: { x: 56, y: 63 },
    emoji: "🌿",
    coverImage:
  "https://tse4.mm.bing.net/th/id/OIP.26IZE7pq7zmPN5aEgmkmHQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

galleryImages: [
  "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/05/22131230/Chauragarh.jpg?tr=w-1366",
  "https://th.bing.com/th/id/OIP.qQvZwgfL2gbFS-sDH9_ssQHaEK?w=272&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  "https://tse3.mm.bing.net/th/id/OIP.VQOyZfAk9gDq1paEeiZukQHaEj?rs=1&pid=ImgDetMain&o=7&rm=3",
],
    highlights: [
      { label: "Bee Falls", icon: "💧" },
      { label: "Dhoopgarh (Highest Peak)", icon: "⛰️" },
      { label: "Pandav Caves (Prehistoric)", icon: "🪨" },
      { label: "Satpura Tiger Reserve", icon: "🐯" },
      { label: "Rajat Prapat (Silver Falls)", icon: "🌊" },
    ],
    story: [
      {
        time: "Pre-Dawn",
        icon: "🌫️",
        desc: "Mist fills every valley before sunrise. You cannot see the hills — you only feel them around you. This is what the earth felt like before humans claimed it.",
      },
      {
        time: "Morning",
        icon: "🌊",
        desc: "Bee Falls roar through ancient rocks worn smooth by millennia. The spray is cold and alive on your face. For one moment, everything that isn't this waterfall becomes irrelevant.",
      },
      {
        time: "Afternoon",
        icon: "🦅",
        desc: "Dhoopgarh — the highest point in Satpura at 1,352 meters. Eagles share this altitude with you. Below, the range folds into itself in 40 shades of green.",
      },
      {
        time: "Dusk",
        icon: "🌲",
        desc: "The forest settles into symphony. Crickets layer on cicadas layer on nightjars. A twig snaps in the bamboo grove. Your guide doesn't react — which is either reassuring or not.",
      },
      {
        time: "Night",
        icon: "🌌",
        desc: "Zero light pollution at the forest rest house. The Milky Way is so bright it casts a shadow. Ancient cave painters saw this same sky — and painted in response.",
      },
    ],
    food: ["Bhajiya", "Maize Roti with Dal", "Jungle Mushroom Sabzi", "Mahua Ladoo", "Forest Honey Tea"],
    bestTime: "October – June",
    distance: "210 km from Bhopal",
    population: "14,000",
    famousFor: "Hill Station, Satpura Tiger Reserve, Waterfalls",
  },
  {
    id: "orchha",
    name: "Orchha",
    nameDev: "ओरछा",
    title: "Frozen in Time",
    tagline: "A Bundela kingdom that refused to disappear",
    description:
      "Orchha sits on a rocky island in the Betwa River, its 16th-century palaces and cenotaphs rising from the jungle like a dream that outlasted its dreamers. The Bundela Rajputs built it; history forgot it; travellers discovered it; and now it stands perfectly preserved — a city-sized monument to royal stubbornness.",
    region: "Northern MP (Bundelkhand)",
    accent: "#C77DFF",
    accentDark: "#7B2FBE",
    heroGradient: "linear-gradient(135deg,#1A0028 0%,#4A0060 55%,#C77DFF 100%)",
    coords: { x: 61, y: 20 },
    emoji: "🏰",
    coverImage:
      "https://tse4.mm.bing.net/th/id/OIP.3tgIA56hMIgpGQsp65V_5gHaLG?rs=1&pid=ImgDetMain&o=7&rm=3",
    galleryImages: [
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/08/22160343/Untitled-design-6-1024x576.jpg",
      "https://th.bing.com/th/id/OIP.n_Zt9F4JcuVXGffM53Sn1QHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      
    ],
    highlights: [
      { label: "Jahangir Mahal (Palace)", icon: "🏰" },
      { label: "Raj Mahal", icon: "👑" },
      { label: "Chaturbhuj Temple", icon: "🛕" },
      { label: "Betwa River Cenotaphs", icon: "🌊" },
      { label: "Ram Raja Temple", icon: "🔱" },
    ],
    story: [
      {
        time: "Dawn",
        icon: "🌅",
        desc: "Parakeets erupt from the palace windows at first light. The cenotaphs stand ankle-deep in morning mist beside the Betwa — 14 royal monuments to kings who wanted to be remembered.",
      },
      {
        time: "Morning",
        icon: "🏰",
        desc: "Jahangir Mahal: 136 rooms, 8 corner towers, built in a single year for a Mughal emperor's one-night visit. The scale of royal flattery has never been surpassed.",
      },
      {
        time: "Afternoon",
        icon: "🛕",
        desc: "Ram Raja Temple — the only temple in India where Lord Ram is worshipped as a king, not a deity. Police stand guard. The protocols are strictly royal.",
      },
      {
        time: "Dusk",
        icon: "🌇",
        desc: "The Betwa turns bronze at sundown. From the river bank, all 14 cenotaphs glow simultaneously. This is when Orchha is most itself — suspended between history and dream.",
      },
      {
        time: "Night",
        icon: "🌙",
        desc: "Orchha has no nightlife. This is its great gift. The palace is lit amber. Owls call across the ruins. The silence is the loudest thing you've heard in years.",
      },
    ],
    food: ["Bundeli Dal Bafla", "Malpua", "Moong Dal Cheela", "Poha", "Jalebi"],
    bestTime: "October – March",
    distance: "340 km from Bhopal",
    population: "9,000",
    famousFor: "Bundela Palaces, Jahangir Mahal, Betwa River",
  },
  {
    id: "sanchi",
    name: "Sanchi",
    nameDev: "सांची",
    title: "Buddhist Crown Jewel",
    tagline: "Where Emperor Ashoka built peace in stone",
    description:
      "Sanchi is the oldest stone structure in India — Emperor Ashoka built the Great Stupa here in 268 BCE as an act of atonement after the bloody Kalinga war. The carved toranas (gateways) are India's finest pre-medieval sculpture, telling Buddhist stories in limestone with the confidence of a civilization at its peak.",
    region: "Central MP",
    accent: "#FFB347",
    accentDark: "#FF8C00",
    heroGradient: "linear-gradient(135deg,#2B1500 0%,#8B5E00 55%,#FFB347 100%)",
    coords: { x: 40, y: 42 },
    emoji: "☸️",
    coverImage:
      "https://tse3.mm.bing.net/th/id/OIP.wKZQ04NTlVtoJNtrm81GygHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    galleryImages: [
      "https://tse3.mm.bing.net/th/id/OIP.wKZQ04NTlVtoJNtrm81GygHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.n5bp0b9ABFuUSqnKSN8opwHaEx?w=270&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    ],
    highlights: [
      { label: "Great Stupa (UNESCO)", icon: "☸️" },
      { label: "Northern Torana Gate", icon: "🏛️" },
      { label: "Sanchi Museum", icon: "🗿" },
      { label: "Ashoka Pillar", icon: "🏺" },
      { label: "Buddhist Monastery Ruins", icon: "🕌" },
    ],
    story: [
      {
        time: "Dawn",
        icon: "☀️",
        desc: "The Great Stupa is perfectly white at sunrise — a hemisphere of peace on a hill in Madhya Pradesh. Monks from Sri Lanka, Japan, Thailand circle it in silence. Every step is a prayer.",
      },
      {
        time: "Morning",
        icon: "🏛️",
        desc: "The northern torana — carved in 50 BCE. Every inch tells a story from the Jataka tales. No space is wasted; no figure is without meaning. This is literacy in stone.",
      },
      {
        time: "Afternoon",
        icon: "🗿",
        desc: "The museum holds the original lion capital of Ashoka's pillar — the same lion that now appears on every Indian passport. The weight of that is difficult to overstate.",
      },
      {
        time: "Dusk",
        icon: "🌄",
        desc: "Sit on the hill as the sun sets over Vidisha below. The Stupa turns amber, then gold, then deep red. 2,300 years of peace concentrated into one hour.",
      },
      {
        time: "Night",
        icon: "🌕",
        desc: "Sanchi has no tourist crowds after dark. The full moon over the stupa is a private experience between you and 23 centuries of Buddhist intention. Worth every arrangement.",
      },
    ],
    food: ["Dal Bafla", "Sattu Paratha", "Poha", "Samosa", "Lassi"],
    bestTime: "October – March",
    distance: "46 km from Bhopal",
    population: "8,700",
    famousFor: "Ashoka's Great Stupa, UNESCO Heritage, Buddhist Art",
  },
  {
    id: "bandhavgarh",
    name: "Bandhavgarh",
    nameDev: "बांधवगढ़",
    title: "Tiger Kingdom",
    tagline: "The highest density of tigers on Earth",
    description:
      "Bandhavgarh National Park has the highest density of Bengal Tigers in the world. Set in the Vindhya hills of eastern MP, its ancient fort ruins and sal forests create a landscape of primal beauty. A morning safari here — when the mist clears and a tiger materialises from the bamboo — is one of travel's irreversible experiences.",
    region: "Eastern MP (Vindhya)",
    accent: "#FF9A00",
    accentDark: "#CC6600",
    heroGradient: "linear-gradient(135deg,#0A0400 0%,#3D1800 55%,#FF9A00 100%)",
    coords: { x: 78, y: 40 },
    emoji: "🐯",
    coverImage:
      "https://th.bing.com/th/id/OIP.oQopLEb8rg9ilqjInZVx3AHaEK?w=275&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    galleryImages: [
      "https://tse2.mm.bing.net/th/id/OIP.5oi4e2oE7Sb4nKe-MMwD8AHaEN?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.fuKWa0pH6_P0PHo5DpKzhQHaE3?w=191&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.Ip2hc8CAx03LKF02fIi_HwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse2.mm.bing.net/th/id/OIP.n9TFXpiUhHXcRkOPNFiwBAHaNK?rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    highlights: [
      { label: "Tiger Safari (Jeep)", icon: "🐯" },
      { label: "Bandhavgarh Fort Ruins", icon: "🏯" },
      { label: "Elephant Safari", icon: "🐘" },
      { label: "Tala Zone (Core Area)", icon: "🌿" },
      { label: "Bird Watching (250+ species)", icon: "🦅" },
    ],
    story: [
      {
        time: "Pre-Dawn",
        icon: "🌑",
        desc: "The jeep enters the park at 5:30 AM. Headlights cut through sal forest fog. Your naturalist cuts the engine. The jungle breathes around you. Something is very close.",
      },
      {
        time: "Morning",
        icon: "🐯",
        desc: "The tigress crosses the road 15 meters ahead and sits. She looks directly at you — not as prey, not as threat. As something to be assessed and dismissed. It is humbling.",
      },
      {
        time: "Afternoon",
        icon: "🏯",
        desc: "Bandhavgarh Fort: 2,000 years old, accessible only by elephant or on foot. Vishnu carvings, an ancient Shivalinga, and a view that explains why kings built here.",
      },
      {
        time: "Dusk",
        icon: "🌅",
        desc: "The park empties of jeeps but fills with sound. Spotted deer alarm calls signal a predator moving. You hear a tiger before you see it — a low, chest-deep sound.",
      },
      {
        time: "Night",
        icon: "🌌",
        desc: "At the lodge, guides share records of the park's tigers by name — their territories, their cubs, their histories. You realize conservation is also biography.",
      },
    ],
    food: ["Jungle Lodge Thali", "Tribal Rice Beer (Mahua)", "Maize Roti", "Forest Honey", "Sattu"],
    bestTime: "November – June (Park Closed July–Oct)",
    distance: "490 km from Bhopal",
    population: "N/A (Forest Reserve)",
    famousFor: "Bengal Tigers, Highest Tiger Density, Tala Zone",
  },
  {
    id: "mandu",
    name: "Mandu",
    nameDev: "मांडू",
    title: "City of Joy",
    tagline: "A plateau of monsoon romance and Afghan glory",
    description:
      "Perched at 633 meters on the Vindhya Range, Mandu was the capital of the Afghan Malwa Sultanate and the setting of the greatest love story of medieval India — Baz Bahadur and Rupmati. Its palaces, baolis, and mosques are built for rain, for romance, and for forever. During monsoon, when the plateau turns electric green, Mandu is paradise.",
    region: "Western MP (Malwa)",
    accent: "#06D6A0",
    accentDark: "#048A65",
    heroGradient: "linear-gradient(135deg,#001A12 0%,#005440 55%,#06D6A0 100%)",
    coords: { x: 22, y: 67 },
    emoji: "🏰",
    coverImage:
      "https://hindi.holidayrider.com/wp-content/uploads/2019/11/compressed-vkeo.jpg",
    galleryImages: [
      "https://th.bing.com/th/id/OIP.y91JvA_JCsDZtQZ4hTh8DgHaE-?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.iDy5ysHQafAJ15NhPWBH1QHaE8?w=284&h=189&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.7L7augylRW31ekiKoFdPxwHaEK?w=270&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    ],
    highlights: [
      { label: "Jahaz Mahal (Ship Palace)", icon: "⛵" },
      { label: "Rupmati's Pavilion", icon: "🎵" },
      { label: "Hindola Mahal", icon: "🏛️" },
      { label: "Baz Bahadur's Palace", icon: "👑" },
      { label: "Monsoon Magic (Jul–Sep)", icon: "🌧️" },
    ],
    story: [
      {
        time: "Dawn",
        icon: "🌫️",
        desc: "Mist rolls off the Narmada valley far below. From Rupmati's Pavilion, the singer-queen watched this exact view every morning before singing for her king. Some love stories are also geographical.",
      },
      {
        time: "Morning",
        icon: "⛵",
        desc: "Jahaz Mahal — the Ship Palace — floats between two lakes. Its 110-meter length, designed to resemble a vessel, was a harem for 15,000 women. The scale of medieval luxury is disorienting.",
      },
      {
        time: "Afternoon",
        icon: "🏛️",
        desc: "Hindola Mahal's sloping walls were engineered to bear weight like no other structure in Afghanistan's Indian empire. Architecture as an expression of confidence.",
      },
      {
        time: "Dusk",
        icon: "🌧️",
        desc: "In monsoon, the entire plateau erupts in wildflowers after rain. The stone palaces turn dark and wet. Frogs call from every direction. This is Mandu as it was meant to be seen.",
      },
      {
        time: "Night",
        icon: "🌙",
        desc: "Mandu after dark is a silence deeper than most cities can manage. Stars appear from horizon to horizon. The love story of Rupmati and Baz Bahadur doesn't feel like history here. It feels recent.",
      },
    ],
    food: ["Dal Baati Churma", "Bafla", "Malpua", "Kadhi Bafla", "Mahua Sheera"],
    bestTime: "July – March (Monsoon for Green Magic)",
    distance: "295 km from Bhopal",
    population: "5,000",
    famousFor: "Afghan Architecture, Baz Bahadur–Rupmati Love Story, Monsoon Beauty",
  },
];