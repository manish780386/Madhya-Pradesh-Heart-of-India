// ─── TYPES ───────────────────────────────────────────────────────────────────

export interface RiverImage {
  url: string;
  caption: string;
}

export interface RiverTribute {
  name: string;
  joins: string; // where it joins the main river
}

export interface RiverDetail {
  id: string;
  name: string;
  nameDev: string;
  nameEtymology: string;       // what the name means
  origin: string;              // where it rises
  originAlt: string;           // altitude of origin
  length: number;              // total km
  lengthInMP: number;          // km through MP
  discharge: string;           // avg cubic metres/sec
  basin: string;               // total basin area
  drains: string;              // empties into
  tributaries: RiverTribute[];
  states: string[];
  colors: [string, string, string];
  gradient: string;
  icon: string;
  mood: string;                // spiritual character
  desc: string;
  history: string;             // deep cultural + geological history
  mythology: string;           // religious significance
  ecology: string;             // wildlife, endemic species
  threats: string;             // pollution, dams, encroachment
  bestExperience: string[];    // top things to do on/near the river
  keyLocations: { name: string; why: string }[];
  pilgrimage: string;          // sacred sites along the route
  images: RiverImage[];
  funFact: string;
  era: string;                 // geological age / when first mentioned in texts
  sacredRank: "National Sacred River" | "State Sacred River" | "Ecologically Critical" | "Living Heritage";
  damsCount: number;
  giTagged?: boolean;
}

// ─── RIVER DATA ───────────────────────────────────────────────────────────────

export const RIVERS: RiverDetail[] = [

  // ─── 1. NARMADA ──────────────────────────────────────────────────────────────
  {
    id: "narmada",
    name: "Narmada",
    nameDev: "नर्मदा",
    nameEtymology: "Sanskrit: 'Giver of Grace' or 'She Who Gives Pleasure' — from naram (pleasure) + da (giver)",
    origin: "Amarkantak plateau, Anuppur district, MP — at 1,057 m altitude",
    originAlt: "1,057 m above sea level",
    length: 1312,
    lengthInMP: 1077,
    discharge: "1,447 m³/s average; up to 70,000 m³/s during peak monsoon flood",
    basin: "98,796 km² total basin area",
    drains: "Gulf of Khambhat (Arabian Sea), Gujarat",
    tributaries: [
      { name: "Tawa", joins: "Hoshangabad district" },
      { name: "Hiran", joins: "Jabalpur district" },
      { name: "Shakkar", joins: "Narsinghpur" },
      { name: "Dudhi", joins: "Mandla district" },
      { name: "Burhner", joins: "Mandla district" },
      { name: "Banjar", joins: "Mandla-Kanha region" },
    ],
    states: ["Madhya Pradesh (82%)", "Maharashtra", "Gujarat"],
    colors: ["#00B4D8", "#0096C7", "#ADE8F4"],
    gradient: "linear-gradient(135deg,#001A2C,#003566,#0096C7,#00B4D8)",
    icon: "🌊",
    mood: "Sacred · Ancient · Motherly",
    desc: "The holiest river of the Deccan — older than the Himalayan rivers, flowing westward against all convention, worshipped as a living goddess for 2,500 years.",
    history: `The Narmada is one of the oldest rivers in the Indian subcontinent — geologically pre-Himalayan, formed 150 million years ago when the Deccan plate collided with Eurasia. While the Ganga and Yamuna are daughters of the young Himalayan uplift (formed roughly 50 million years ago), the Narmada was already ancient when the Himalayas began forming. This is why it flows westward rather than eastward — it follows a pre-Himalayan rift valley, the Narmada-Son rift, one of the oldest geological fault lines in Asia.

The river enters human history as early as the Homo erectus period: fossils of Narmada Man (Homo heidelbergensis), dated 500,000–300,000 years old, were discovered in the Narmada valley at Hathnora in Sehore district in 1982 — among the oldest human fossils found in South Asia. The valley supported continuous human habitation from the Lower Palaeolithic through to the present without interruption.

In recorded history, the Narmada formed the ancient boundary between North India (Aryavarta) and the Deccan (Dakshina-path). The river appears in the Ramayana as the boundary that Rama's ally Sugriva described as the southern limit of the known world. The Mahabharata mentions it repeatedly. The Puranas devote entire texts to its glorification — the Narmada Purana, embedded in the Skanda Purana, describes 60 tirthas (sacred crossing points) along its banks and a 3,500-km circumambulation route called the Narmada Parikrama.

The river basin contains 8 UNESCO World Heritage candidate sites, including the Bhimbetka rock shelters (actual UNESCO WHS, 500,000-year-old paintings), the Sanchi Stupa complex, the Mandu sultanate architecture, and the Omkareshwar temple island. The Narmada valley's contribution to Indian civilisation — in terms of continuous human presence and sacred geography — is unmatched by any other Indian river basin.

The Sardar Sarovar Dam (in Gujarat) and 29 large dams upstream in MP have dramatically altered the river's ecology and displaced over 320,000 people — one of the largest dam-related displacements in Indian history. The Narmada Bachao Andolan (Save the Narmada Movement), led by Medha Patkar from 1985, became one of the world's most documented environmental movements.`,
    mythology: `The Narmada is the only river in India that is female and also flows westward — both attributes considered auspicious inversions of the norm. In Shaiva tradition, the Narmada is the daughter of Lord Shiva, born from his body when he danced the Tandava on the banks of what is now the Amarkantak plateau. Unlike the Ganga (who cleanses sins through bathing), the Narmada is believed to cleanse sins through mere sight (darshan) — pilgrims need only look at her waters to receive absolution. This is why she is called 'Drishti Matra Pavani' — purifier through sight alone.

The Narmada Parikrama — a 3,500-km circumambulation of the entire river on foot — is one of Hinduism's most arduous and least-known pilgrimages. Pilgrims walk both banks from source to sea and back, a journey that takes 3–5 years. At no point may the pilgrim cross the river or use a bridge. Tens of thousands undertake this walk every year; some have walked it 10 or more times. It is considered more spiritually meritorious than the Chardham Yatra.`,
    ecology: `The Narmada's westward flow and geological isolation have produced exceptional endemic biodiversity. The Narmada mahseer (Tor khudree) — a massive freshwater fish that can reach 2 metres in length — is the river's apex fish species and a cultural icon in fishing communities from Mandla to Bharuch. The river supports India's largest freshwater mugger crocodile population, 11 species of freshwater turtles, the critically endangered Indian soft-shell turtle (Nilssonia gangetica), and the Narmada soft-shell turtle (Aspideretes nigricans).

The river corridor through Satpura supports the highest density of leopards in MP outside protected reserves. The Tawa reservoir, Narmada's major tributary junction, is one of the most important migratory bird wintering sites in Central India — over 200 bird species recorded. Bhedaghat's marble gorge section (Jabalpur) supports a distinct micro-ecology — the narrow canyon creates a microclimate where species from both riverine and rocky hill ecosystems overlap.`,
    threats: `The Narmada faces multiple simultaneous threats. 29 large dams and 135 medium dams have fragmented the river into a series of reservoirs, eliminating the mahseer's upstream migration routes. The Sardar Sarovar Dam's backwater has flooded 37,000 hectares of the most biodiverse riverine forest in the basin. Sand mining — both legal and illegal — destroys nesting habitat for turtles and crocodiles. Industrial effluent from Jabalpur, Hoshangabad, and Barwaha discharge directly into the river. The Narmada's water quality has degraded significantly below the pollution guidelines since 2010.`,
    bestExperience: [
      "Bhedaghat marble gorge boat ride at full moon — the white marble glows silver at night",
      "Narmada Parikrama (full walk) or the 3-day Amarkantak to Jabalpur stretch for partial parikrama",
      "Omkareshwar temple island circumambulation — the island's shape is naturally formed as the Om symbol",
      "Maheshwar ghats at sunset — Rani Ahilyabai's fort above, the river below, 18th-century temples on the steps",
      "Dhuandhar waterfall (Jabalpur) during monsoon — the 'smoke cascade' at peak season is extraordinary",
      "Tribal communities around Mandla — the river's upper reaches through Gondwana are culturally richest",
    ],
    keyLocations: [
      { name: "Amarkantak", why: "Source — sacred plateau where the river is born from a kund (tank)" },
      { name: "Mandla", why: "Upper Narmada Gondwana heartland — river loops form the iconic Sahastrakund" },
      { name: "Jabalpur / Bhedaghat", why: "Marble Rocks gorge, Dhuandhar falls — the river's most dramatic landscape" },
      { name: "Omkareshwar", why: "Island temple, one of 12 jyotirlingas — the river naturally forms the Om symbol here" },
      { name: "Maheshwar", why: "Rani Ahilyabai's capital — 18 ghats, fort, Rehwa Society weaving" },
      { name: "Barwaha", why: "Where the river enters the plains — tribal fishing communities, crocodile habitat" },
    ],
    pilgrimage: "Narmada Parikrama — 3,500 km circumambulation walk along both banks, 3–5 year undertaking. 60 principal tirthas. No bridge crossing permitted.",
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2022/02/28/07/32/river-7038640_640.jpg",
        caption: "Bhedaghat marble gorge, Jabalpur — the Narmada cuts through 100-foot white marble cliffs",
      },
      {
        url: "https://t3.ftcdn.net/jpg/03/74/68/94/360_F_374689446_J3OzYtxto5qMA9hti37iuUqXiVbCEQVN.jpg",
        caption: "Maheshwar ghats — Rani Ahilyabai's 18th-century fort above the Narmada",
      },
      {
        url: "https://th.bing.com/th/id/R.c3b850ac35cb80e4bef8a4007535561b?rik=3Mdde138XvVbMA&riu=http%3a%2f%2fimage3.mouthshut.com%2fimages%2fimagesp%2fl%2fDhuandhar-Falls-Jabalpur-925752817s.jpg&ehk=5gU2i4sJFeGZFAzqSd486Wc5o24YW0PFDr3B1yiTRKw%3d&risl=&pid=ImgRaw&r=0",
        caption: "Dhuandhar falls ('smoke cascade') — Narmada dropping 30 feet into a narrow gorge, Jabalpur",
      },
    ],
    funFact: "The Narmada is the only major Indian river that flows westward into the Arabian Sea. All other major peninsular rivers (Godavari, Krishna, Kaveri) flow east into the Bay of Bengal. This westward anomaly is because the Narmada follows a pre-Himalayan rift valley — it is older than the landscape that surrounds it.",
    era: "150 million years old (geological). First textual mention: Rigveda (c. 1500 BCE). Narmada Man fossil: 500,000–300,000 years old.",
    sacredRank: "National Sacred River",
    damsCount: 30,
  },

  // ─── 2. CHAMBAL ──────────────────────────────────────────────────────────────
  {
    id: "chambal",
    name: "Chambal",
    nameDev: "चंबल",
    nameEtymology: "Sanskrit 'Charmanvati' — 'River of hides/leather' — from the ancient practice of washing animal hides on its banks after sacrifice at Kota",
    origin: "Vindhya Range, Mhow tehsil, Indore district, MP — Singar Chori hills at 854 m",
    originAlt: "854 m above sea level",
    length: 960,
    lengthInMP: 320,
    discharge: "610 m³/s average; highly variable — monsoon floods are extreme",
    basin: "143,219 km² — the second largest in the Gangetic system after the Ganga itself",
    drains: "Yamuna river, near Etawah, Uttar Pradesh",
    tributaries: [
      { name: "Banas", joins: "Rajasthan border" },
      { name: "Kali Sindh", joins: "Rajasthan" },
      { name: "Parbati", joins: "Rajasthan–MP border" },
      { name: "Mej", joins: "Rajasthan" },
    ],
    states: ["Madhya Pradesh", "Rajasthan", "Uttar Pradesh"],
    colors: ["#52B788", "#40916C", "#95D5B2"],
    gradient: "linear-gradient(135deg,#0A1A0E,#1B4332,#40916C,#74C69D)",
    icon: "🐊",
    mood: "Wild · Untamed · Ancient",
    desc: "The last wild river of North India — unpolluted, dammed only once, home to gharials, river dolphins, and a badland ravine landscape unlike anywhere on earth.",
    history: `The Chambal is the most ecologically intact major river in the entire Gangetic basin — and it owes this distinction to an unlikely cause: its historic reputation as a cursed river. Ancient Sanskrit texts declared the Chambal inauspicious — the Mahabharata and later Puranas cursed the river because its banks were soaked in blood from the mass animal sacrifices performed there by King Rantideva. This curse meant that for over 2,000 years, no city was built on the Chambal's banks, no major pilgrimage site established, and no large population settled there. The curse that isolated the Chambal from religious merit became its ecological salvation.

The Chambal valley's dramatic ravine landscape — the beehad, or badlands — developed over millennia as the river cut through the Vindhyan sandstone. The beehad created a natural barrier: the ravines were impenetrable, unmappable, and effectively ungovernable. This topography made the Chambal valley infamous as bandit country — the dacoit (dakaiti) culture of the Chambal is one of the most documented social phenomena in Indian history. Paan Singh Tomar (converted from Olympic athlete to dacoit), Man Singh, and Phoolan Devi are the most famous of hundreds of outlaws who used the ravines as sanctuary for decades. The last large dacoit gang surrendered in 2005 — the beehad is now wildlife territory.

The Gandhi Sagar Dam (1960), built on the Chambal in Mandsaur district, is the only large dam on the river. This single dam — compared to the 30+ on the Narmada — means the Chambal retains 90% of its natural flow dynamics. The river still floods, still deposits sand bars, still migrates laterally — ecological processes that are extinct in most Indian rivers. The National Chambal Gharial Sanctuary (established 1978) covers 435 km of the river through MP, Rajasthan, and UP — one of the longest protected river stretches in Asia.`,
    mythology: `The Chambal's mythology is unique in being negative — most Indian rivers are blessed, but the Chambal was cursed. King Rantideva, a ruler of extraordinary piety, performed 1,000 animal sacrifices on the Chambal's banks. The blood of the sacrificed animals is said to have given the river its ancient name — Charmanvati (river of hides/skins). In the Mahabharata, Yudhishthira refuses to bathe in the Chambal because of this blood-stained history. The river appears in texts as ritually inaccessible — and this spiritual exclusion paradoxically preserved it.

Some tribal communities along the Chambal worship it as a form of the goddess Chamunda — fierce, dangerous, and untameable. The river is propitiated, not celebrated. Offerings are made at specific rock formations during monsoon. There is no Chambal Parikrama, no mass pilgrimage — the river exists outside the mainstream pilgrimage economy entirely.`,
    ecology: `The Chambal is the most biodiverse river ecosystem in North India and one of the most ecologically significant in Asia. It holds 90% of the world's wild breeding gharial population (fewer than 800 adults globally). The Gangetic river dolphin (Platanista gangetica) survives in the Chambal in one of its last viable populations — perhaps 100–150 individuals. Three species of crocodilian coexist: the gharial, the mugger crocodile, and the false gharial (debated). 

The river supports 8 species of freshwater turtles including the critically endangered red-crowned roofed turtle (Batagur kachuga) and the Indian peacock soft-shell turtle. Over 300 bird species use the Chambal corridor — the Indian skimmer nests on Chambal sandbars in one of its only remaining breeding colonies. Bar-headed geese winter here in thousands. The river dolphin serves as the apex indicator species: where dolphins survive, the entire riverine food web is intact.`,
    threats: `Despite its relatively good ecological condition, the Chambal faces growing threats. Sand mining — both legal and illegal — destroys the sandbars that gharials and turtles require for nesting. Illegal fishing and poisoning affects dolphin and turtle populations. The Ken-Betwa river interlinking project (if implemented) will divert water from the Chambal's tributary system. Agricultural runoff from Rajasthan's irrigated fields introduces fertilisers and pesticides into the river. The dacoit-era isolation that protected the Chambal is now fully gone — road connectivity has opened the ravines.`,
    bestExperience: [
      "Gharial and river dolphin boat safari from Palighat or Dholpur (National Chambal Sanctuary)",
      "Chambal ravine jeep safari at dawn — the beehad landscape is otherworldly at first light",
      "Indian skimmer and bar-headed goose spotting (October–March migration season)",
      "Gandhi Sagar Dam and reservoir — the dam lake has a distinct ecosystem with cormorant colonies",
      "Chambal River Festival (if scheduled) — community conservation celebration",
      "Koteshwar temple at the Chambal-Yamuna confluence — dramatic gorge location",
    ],
    keyLocations: [
      { name: "Gandhi Sagar Dam", why: "The only large dam — reservoir supports distinct bird ecosystem" },
      { name: "Chambal Ravines (Morena/Bhind)", why: "Beehad — the iconic ravine landscape, dacoit history, wildlife" },
      { name: "National Chambal Sanctuary", why: "435 km protected stretch — gharial, dolphin, turtle stronghold" },
      { name: "Dholpur (Rajasthan side)", why: "Best gharial sighting point — boat safaris from here" },
      { name: "Koteshwar", why: "Chambal-Yamuna confluence — dramatic gorge, ancient temple" },
    ],
    pilgrimage: "No mainstream pilgrimage — the river's 'curse' kept it outside the pilgrimage economy. Tribal communities perform private river propitiation rituals.",
    images: [
      {
        url: "https://tse4.mm.bing.net/th/id/OIP.L2MwIRgZoTDfec9qyH69_wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Chambal ravines (beehad) — the iconic badland gorges that sheltered dacoits and now shelter wildlife",
      },
      {
        url: "https://tse2.mm.bing.net/th/id/OIP.ShFgr-atf2aMJmeqMhCPTQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Gharial boat safari — National Chambal Sanctuary, 90% of world's wild gharials live here",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chambal_river.jpg/1280px-Chambal_river.jpg",
        caption: "https://static.toiimg.com/photo/98584419/Chambal-River-Gorge.jpg?width=748&resize=4",
      },
    ],
    funFact: "The Chambal's 'curse' — declared inauspicious by the Mahabharata because of blood sacrifices — is the reason it is the cleanest major river in North India. No major city, no pilgrimage industry, no industrial town was built on its banks for 2,000 years. The curse saved the river.",
    era: "Geological: ancient Vindhyan sandstone drainage, pre-Himalayan. First text mention: Mahabharata (c. 400 BCE–400 CE). Dacoit era: 17th century–2005.",
    sacredRank: "Ecologically Critical",
    damsCount: 1,
  },

  // ─── 3. SHIPRA ───────────────────────────────────────────────────────────────
  {
    id: "shipra",
    name: "Shipra (Kshipra)",
    nameDev: "शिप्रा / क्षिप्रा",
    nameEtymology: "Sanskrit 'Kshipra' — 'Swift' or 'Fast-flowing'. Also called Avantika Nadi (River of Avanti, the ancient kingdom)",
    origin: "Kakribardi hills, Dhar district, MP — near Mhow",
    originAlt: "circa 625 m above sea level",
    length: 195,
    lengthInMP: 195,
    discharge: "Seasonal river — flows strongly June–October; reduces to pools in dry season without artificial augmentation",
    basin: "Approx. 5,765 km²",
    drains: "Chambal river, near Kalu Kherao, Ujjain-Ratlam border",
    tributaries: [
      { name: "Khan", joins: "Ujjain city" },
      { name: "Gambhir", joins: "North Ujjain" },
    ],
    states: ["Madhya Pradesh (entirely)"],
    colors: ["#F4A261", "#E76F51", "#FFDD57"],
    gradient: "linear-gradient(135deg,#2D0010,#7A2020,#E76F51,#F4A261)",
    icon: "🛕",
    mood: "Sacred · Ancient · Eternal",
    desc: "The holiest river of the ancient world's most sacred city — the Shipra has been flowing through Ujjain for 4,500 years and hosting the world's largest human gathering every 12.",
    history: `The Shipra is geographically a modest river — 195 km long, seasonal, and relatively narrow. Its significance is entirely cultural and religious, and in that dimension it is among the most important rivers in the world. The city of Ujjain — ancient Avantika, one of the seven sacred cities (Sapta Puri) of Hinduism — has stood on the Shipra's eastern bank continuously since at least 600 BCE. Ujjain was the prime meridian of Indian astronomy — ancient Indian astronomers placed the zero longitude line through this city, making the Shipra the river on which astronomical time was calibrated for the entire subcontinent for over 1,500 years.

The Shipra appears in the earliest Puranic literature as 'Kshipra' — the swift one — and the texts describe its banks as lined with 84 shrines accessible on foot within a single day. Archaeological excavations at Ujjain have revealed continuous habitation from 700 BCE through the present, with major occupation layers corresponding to the Mauryan period (when Ashoka governed Ujjain before becoming emperor), the Gupta period (when Kalidasa wrote at Vikramaditya's court), and the Paramara dynasty.

The Simhastha Kumbh Mela — held at Ujjain every 12 years when Jupiter enters Leo — is held on the Shipra's banks. The 2016 Simhastha drew an estimated 75 million people over 45 days, making it the largest peaceful human gathering in recorded history. A temporary city of 75 million people — with its own postal codes, police stations, hospitals, and markets — forms and dissolves beside this small river every 12 years.

The Shipra's ecological condition has deteriorated severely since the 1980s due to industrial effluent from Ujjain's manufacturing zones, the Khan river's heavily polluted inflow, and inadequate sewage treatment. The river now requires artificial augmentation from the Narmada via pipeline during the Simhastha period to maintain a volume adequate for ritual bathing by millions.`,
    mythology: `The Shipra is the sacred artery of the Shaiva tradition. The Mahakaleshwar Jyotirlinga — one of 12 sacred self-manifested Shiva lingas — sits directly above the Shipra at Ujjain. The river is described in the Skanda Purana as equal in sanctity to the Ganga: 'What the Ganga does through touch, the Shipra does through sight.' Bathing at the Shipra during the Simhastha is believed to dissolve karma accumulated across seven lifetimes.

Kalidas — the greatest Sanskrit poet — set his masterwork Meghaduta (The Cloud Messenger) on the Shipra's banks, describing the river and the city of Avantika in language so precise that scholars can identify specific landmarks that still exist. The cloud in the poem passes over Ujjain and the Shipra on its way from the Vindhya mountains to the Himalayas — a scene described with the love of a native who watched this river every day.`,
    ecology: `The Shipra's ecology is severely compromised in its urban stretch through Ujjain. However, the upper Shipra (Dhar district) and the lower reaches near the Chambal confluence retain freshwater biodiversity including Indian carp, catfish, and some freshwater turtle populations. The Ram Ghat section in Ujjain has been partially cleaned through the Shipra River Rejuvenation Project. Despite its pollution, the river's sandy banks still support some mugger crocodile nesting.`,
    threats: `The Shipra faces existential ecological threat. Industrial effluent from Ujjain's pharmaceutical and textile manufacturing zones; untreated sewage from a city of 600,000; the heavily polluted Khan river tributary; and agricultural runoff have degraded the river severely. During the 2016 Simhastha, Narmada water had to be pumped into the Shipra via a 75-km pipeline at massive cost because the river's own flow was insufficient and too polluted for millions of pilgrims to bathe safely. This artificial life-support situation has continued for most of the decade.`,
    bestExperience: [
      "Ram Ghat evening aarti — fire, conch, flowers and the 4,500-year-old river below",
      "Simhastha Kumbh Mela (next: 2028) — the world's largest gathering, the Shipra at its most transcendent",
      "Mahakaleshwar temple midnight Bhasma Aarti — ash ritual at the jyotirlinga above the river",
      "Triveni Ghat sunrise — three rivers' confluence, early morning bathing",
      "Mangalnath temple at dawn — believed to be built on the exact spot where Mars (Mangal) was born",
      "Boat ride from Ram Ghat at dusk — the ghats lit with diyas, temple spires reflecting in the water",
    ],
    keyLocations: [
      { name: "Ram Ghat", why: "Primary bathing ghat — evening aarti, diya flotilla at Diwali, Simhastha starting point" },
      { name: "Mahakaleshwar Temple", why: "Jyotirlinga directly above the river — Bhasma Aarti at midnight" },
      { name: "Triveni Ghat", why: "Confluence of Shipra, Saraswati (underground), and Khan rivers" },
      { name: "Kaliadeh Palace", why: "Mughal-era island palace in the river — Mandu sultanate architecture" },
      { name: "Mangalnath Temple", why: "Believed birthplace of Mars — astronomical significance to Ujjain's meridian" },
    ],
    pilgrimage: "Simhastha Kumbh Mela every 12 years — 75 million pilgrims (2016). Year-round: Ram Ghat puja, Mahakaleshwar daily darshan, Navaratri rituals.",
    images: [
      {
        url: "https://media.istockphoto.com/id/697197374/photo/ram-ghat-in-ujjain-madhya-pradesh-india.webp?b=1&s=170667a&w=0&k=20&c=ALQt-pGdIbSXMwGkZV7foXSlpbqN70TJsr2Ny6syfSc=",
        caption: "Ram Ghat, Ujjain — 4,500 years of continuous ritual on the Shipra's banks",
      },
      {
        url: "https://images.news18.com/ibnkhabar/uploads/2025/06/3hip-2025-06-f9c8139e59bbc25dac0c74fd4b8040de-16x9.jpg",
        caption: "Simhastha 2016 — 75 million pilgrims bathing in the Shipra over 45 days",
      },
      {
        url: "https://media.assettype.com/themooknayak/2024-02/05ea4192-a227-4eb9-987f-22733a78456f/images___2024_02_09T130911_098.jpeg?w=1200&ar=40:21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
        caption: "Mahakaleshwar Jyotirlinga above the Shipra — the river runs below the temple complex",
      },
    ],
    funFact: "Ujjain was the prime meridian of ancient Indian astronomy — the zero longitude of the world as calculated by Varahamihira in 505 CE passed through this city. The Shipra is therefore the river on which astronomical time was calibrated for all of ancient India. The Indian subcontinent used Ujjain's longitude as its zero reference until the British imposed the Greenwich meridian in the 19th century.",
    era: "Geological origin: Vindhyan drainage, ancient. First text mention: Rigveda as 'Kshipra'. Ujjain as city: 700 BCE. Kumbh Mela tradition: 2,500+ years.",
    sacredRank: "National Sacred River",
    damsCount: 0,
  },

  // ─── 4. BETWA ────────────────────────────────────────────────────────────────
  {
    id: "betwa",
    name: "Betwa",
    nameDev: "बेतवा",
    nameEtymology: "From Sanskrit 'Vetravati' — 'River of Reeds/Bamboo'. The ancient name Vetravati is found in the Mahabharata and Ramayana.",
    origin: "Vindhya Range, near Bhopal — Raisen district at approximately 575 m altitude",
    originAlt: "575 m above sea level",
    length: 590,
    lengthInMP: 380,
    discharge: "260 m³/s average",
    basin: "46,580 km²",
    drains: "Yamuna river, near Hamirpur, Uttar Pradesh",
    tributaries: [
      { name: "Dhasan", joins: "Uttar Pradesh border" },
      { name: "Birnawati", joins: "Sagar district" },
      { name: "Bina", joins: "Sagar-Vidisha district" },
    ],
    states: ["Madhya Pradesh", "Uttar Pradesh"],
    colors: ["#C77DFF", "#9D4EDD", "#E0AAFF"],
    gradient: "linear-gradient(135deg,#10002B,#240046,#5A189A,#9D4EDD)",
    icon: "🏯",
    mood: "Historic · Majestic · Timeless",
    desc: "The river that mirrors history — Sanchi, Vidisha, and Orchha rise from its banks. The Betwa's valley is the single most archaeologically dense stretch of river in India.",
    history: `The Betwa has the most extraordinary concentration of archaeological and historical sites on its banks of any river in India. Following the Betwa from its source near Bhopal to its confluence with the Yamuna is to travel through 3,000 years of Indian civilisation in continuous sequence.

At Vidisha (ancient Besnagar) on the Betwa, the Heliodorus Column stands — erected in 110 BCE by a Greek ambassador from Taxila who converted to Vaishnavism and dedicated a Garuda pillar to Vasudeva-Krishna. This is the earliest known non-Indian devotee of Vishnu and one of the most important syncretic religious monuments in Asia. The column stands on the Betwa's bank as physical evidence of 2,000 years of cultural encounter.

The Sanchi Stupa complex — 9 km from Vidisha — was built by Ashoka in 250 BCE on a hill visible from the Betwa. Ashoka's wife Devi was from Vidisha, and Sanchi was built to overlook her home city across the river. This personal act of devotion produced the greatest Buddhist monument in India, now a UNESCO World Heritage Site. The Betwa is literally visible from Sanchi's Great Stupa on a clear day.

Orchha — built by the Bundela Rajputs in 1501 on a rocky island in the Betwa — is the river's most dramatic architectural achievement. The city was designed around the Betwa's meander: the river wraps around the island on three sides, making the palace complex virtually impregnable. The 14 chhatris (cenotaphs) of the Bundela kings stand on the Betwa's bank — their reflections in the water at sunset are among the most photographed compositions in MP. The Betwa was the defensive moat, the water supply, and the spiritual backdrop of one of the finest architectural traditions in North India.

The Ken-Betwa River Interlinking Project — under construction and legal challenge — proposes to divert Ken river water into the Betwa to boost irrigation in Bundelkhand. The project will submerge 10% of Panna Tiger Reserve's core zone and alter the Betwa's ecology permanently.`,
    mythology: `The Betwa appears in the Mahabharata as Vetravati and is described as a sacred river worthy of ritual bathing. In local tradition, the river is associated with the Chandela dynasty — the builders of Khajuraho — who credited the Betwa's waters with the vitality of their kingdom. The Bundela Rajputs who built Orchha performed their most sacred rituals at the Betwa ghats.

The river is particularly associated with the Ram Charit Manas tradition — Tulsidas, who wrote the Awadhi Ramayana, is believed to have spent time on the Betwa's banks at Orchha, where the Ram Raja temple was established by the Bundela queen Ganesh Kunwari in the 17th century.`,
    ecology: `The Betwa supports a rich but declining freshwater ecosystem. The stretch from Orchha upstream through the Ratapani Wildlife Sanctuary corridor is the most ecologically intact. The river supports mugger crocodiles, 12 species of freshwater fish, Indian smooth-coated otters, and significant bird populations. The Orchha Wildlife Sanctuary (established 1994) protects a 45-km stretch of the Betwa including the island complex. Vultures — both white-backed and Eurasian griffon — roost in the riverside cliffs near Orchha. The Ken-Betwa interlinking project poses the primary ecological threat.`,
    threats: `The Ken-Betwa river interlinking project is the defining threat. Agricultural runoff from Bundelkhand's increasingly irrigated land degrades water quality. Sand mining on the Betwa is intense between Vidisha and Orchha. The upper Betwa near Bhopal receives urban effluent from the city's expanding industrial zones.`,
    bestExperience: [
      "Orchha riverside at sunset — 14 Bundela chhatris reflecting in the Betwa is one of MP's defining images",
      "River island walk at Orchha — the Betwa wraps around the palace complex on three sides",
      "Sanchi to Vidisha road — the Betwa valley visible from Sanchi's Great Stupa",
      "Heliodorus Column at Vidisha — 2,000-year-old Greek-Hindu monument on the river bank",
      "Kayaking the Betwa gorge (Ratapani stretch) — cliff faces, wildlife, and ancient river landscape",
      "Orchha Wildlife Sanctuary boat safari — otter, crocodile, and vulture sightings",
    ],
    keyLocations: [
      { name: "Sanchi", why: "Ashoka's Great Stupa visible from the Betwa valley — built overlooking the river" },
      { name: "Vidisha (Besnagar)", why: "Heliodorus Column, 2,000 years of river-bank history, Udayagiri caves nearby" },
      { name: "Orchha", why: "14 chhatris on the river bank, island palace, Bundela architecture — river on three sides" },
      { name: "Ratapani Wildlife Sanctuary", why: "The Betwa's most ecologically pristine stretch — otters, crocodiles, cliffs" },
    ],
    pilgrimage: "Orchha Ram Raja Temple — the only temple in India where Ram is worshipped as a king with full state honours (police salute). Daily puja on the Betwa steps.",
    images: [
      {
        url: "https://images.indianexpress.com/2020/03/Betwa-river.jpg",
        caption: "Betwa river at Orchha — Bundela chhatris reflected in the evening river",
      },
      {
        url: "https://tse4.mm.bing.net/th/id/OIP.dAuzbw7h6ZtB51rBaGzgmQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "The 14 Bundela chhatris from the Betwa bank — Orchha's defining riverside composition",
      },
      {
        url: "https://www.shutterstock.com/image-photo/orchha-india-20-feb-2023-260nw-2264552905.jpg",
        caption: "Sanchi Stupa — built by Ashoka overlooking the Betwa valley, 250 BCE",
      },
    ],
    funFact: "The Heliodorus Column at Vidisha on the Betwa — erected in 110 BCE by a Greek ambassador who converted to Vaishnavism — contains the earliest known inscription of the Bhagavata religion in India. It proves that a Greek diplomat from the Indo-Greek kingdom abandoned Greek religion to become a devotee of Vishnu, 2,000 years before the modern conversion-to-Hinduism conversation began.",
    era: "Geological: Vindhyan drainage, ancient. First text mention: Mahabharata as 'Vetravati'. Sanchi: 250 BCE. Orchha: 1501 CE.",
    sacredRank: "Living Heritage",
    damsCount: 2,
  },

  // ─── 5. KEN ──────────────────────────────────────────────────────────────────
  {
    id: "ken",
    name: "Ken",
    nameDev: "केन",
    nameEtymology: "From 'Karnavati' in ancient texts. Some scholars derive from the tribal 'Ken' — meaning 'clear water'. Also referred to as Sone's sister in folk tradition.",
    origin: "Vindhya Range, Katni district (near Jabalpur) — Ahirapur village at 550 m",
    originAlt: "550 m above sea level",
    length: 427,
    lengthInMP: 292,
    discharge: "190 m³/s average",
    basin: "28,058 km²",
    drains: "Yamuna river, near Chilla, Banda district, Uttar Pradesh",
    tributaries: [
      { name: "Sonar", joins: "Panna district" },
      { name: "Bainna", joins: "Chhatarpur" },
      { name: "Tons (Tamsa)", joins: "UP border" },
    ],
    states: ["Madhya Pradesh", "Uttar Pradesh"],
    colors: ["#2DC653", "#48CAE4", "#90E0EF"],
    gradient: "linear-gradient(135deg,#012A1A,#023B2C,#1B7A4A,#2DC653)",
    icon: "🐅",
    mood: "Wild · Diamond-Clear · Endangered",
    desc: "The clearest river in Bundelkhand — tigers drink from its gorges in Panna, gharials nest on its sandbars, and a catastrophic dam project threatens to drown 10% of a tiger reserve.",
    history: `The Ken is the least known of MP's major rivers but arguably the most ecologically significant for wildlife. The river flows through Panna National Park — one of India's most dramatic conservation comeback stories — in a series of gorges, waterfalls, and pools that create the most visually spectacular tiger habitat in Central India. Panna's tigers were completely wiped out by poaching between 2000 and 2009; when the reserve was officially declared tiger-free in 2009, a translocation program brought tigresses from Bandhavgarh and Kanha. The Ken's gorges, deep pools, and sandy banks provided the structural habitat that allowed these tigers to breed. By 2024, Panna has 75+ tigers — the Ken's ecology is the physical foundation of one of conservation biology's most celebrated recoveries.

The Ken appears in early medieval records as the river along which the Chandela dynasty — builders of Khajuraho — controlled the diamond trade. The Panna region has been one of the world's most important diamond sources since at least the 9th century CE; diamonds are still mined legally near Panna today. The Ken valley's hard Vindhyan quartzite geology produces both diamonds and the extraordinary gorge scenery of the national park.

The Ken-Betwa River Interlinking Project — approved by the Indian government in 2021 — proposes to build the Daudhan Dam on the Ken, creating a reservoir that will submerge 9,000 hectares of Panna Tiger Reserve's core zone and 50 km of Ken riverine habitat. The project is simultaneously the most ambitious water infrastructure project in Bundelkhand (desperately water-scarce) and the most controversial conservation intervention in contemporary India.`,
    mythology: `The Ken is not a major pilgrimage river — it sits outside the mainstream sacred geography of North India. However, the Raneh Falls (a volcanic basalt canyon on the Ken near Khajuraho) is treated as a sacred site by local communities, where the river drops through hexagonal basalt columns in a formation geologically similar to the Giant's Causeway. The falls are called 'Rani Raneh' — the queen's gorge — in local tradition and associated with a Chandela queen who is said to have bathed there.`,
    ecology: `The Ken is the most ecologically intact river in the Bundelkhand region. Panna Tiger Reserve's core is entirely defined by the Ken gorge — the river cuts through Vindhyan limestone creating caves, waterfalls, and pools that are habitat for tiger, leopard, sloth bear, and Indian wolf. The Ken supports the most significant Indian vulture nesting colony in MP — white-backed and long-billed vultures nest on the limestone cliffs above the river gorge. The river also holds gharial — occasional sightings suggest a remnant population.

The Ken Gharial Sanctuary (below Panna NP) was established specifically for gharial conservation but has been under-resourced. The river's exceptional clarity — unlike the turbid Narmada or Chambal — comes from its limestone geology, which filters sediment.`,
    threats: `The Ken-Betwa interlinking project is the primary existential threat. The Daudhan Dam will submerge the most diverse section of Panna's core zone, eliminating the waterholes and gorge habitat that tigers depend on. Environmental clearance for the project has been contested by conservation biologists. The vulture nesting cliffs may be partially submerged. Sand mining in the lower Ken (below Panna) is active and destructive.`,
    bestExperience: [
      "Panna National Park Ken river zone safari — tigers drink from the river at dusk in dry season",
      "Raneh Falls (near Khajuraho) — volcanic basalt canyon, Ken drops through hexagonal columns",
      "Ken Gharial Sanctuary boat safari — possible gharial, crocodile, otter sightings",
      "Panna's Ken river gorge walk (guided) — the gorge walls rise 80+ feet above the river",
      "Diamond mine visit near Panna — the Ken valley's geological heritage",
      "Vulture cliff watching — largest vulture nesting site in MP, limestone cliffs above the river",
    ],
    keyLocations: [
      { name: "Panna National Park (Ken Zone)", why: "Tiger, vulture, gorge — the Ken's ecological heart" },
      { name: "Raneh Falls", why: "Volcanic basalt gorge — one of India's most unusual waterfall landscapes" },
      { name: "Panna town", why: "Diamond mining heritage, Ken river access" },
      { name: "Ken Gharial Sanctuary", why: "Below Panna — protected stretch for gharial and turtle" },
    ],
    pilgrimage: "No major pilgrimage. Raneh Falls treated as locally sacred — small rituals during Navaratri.",
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2023/04/28/14/30/ken-7956771_960_720.jpg",
        caption: "Ken river gorge, Panna National Park — tigers drink from these pools at dusk",
      },
      {
        url: "https://c8.alamy.com/comp/HBJ079/ken-river-valley-HBJ079.jpg",
        caption: "Raneh Falls — volcanic basalt canyon on the Ken, near Khajuraho",
      },
      {
        url: "https://image.shutterstock.com/image-photo/view-canyon-formed-ken-river-260nw-2070814442.jpg",
        caption: "The Ken's limestone gorge in Panna — habitat for tigers, vultures, and gharials",
      },
    ],
    funFact: "The Ken river's gorge in Panna NP was the structural reason the tiger reintroduction of 2009 succeeded — tigresses from other reserves were deliberately released near the Ken gorge because the terrain (deep pools, cliff cover, gorge isolation) mimicked the home territories they had left. The river's geography saved the tigers.",
    era: "Geological: Vindhyan limestone drainage, ancient. Diamond mining records: 9th century CE. Tiger reintroduction: 2009.",
    sacredRank: "Ecologically Critical",
    damsCount: 1,
  },

  // ─── 6. SON ──────────────────────────────────────────────────────────────────
  {
    id: "son",
    name: "Son",
    nameDev: "सोन",
    nameEtymology: "Sanskrit 'Shona' — 'Golden' — from the golden sand and reddish tint of the river's water at certain times",
    origin: "Amarkantak plateau, Anuppur district — the same plateau that births the Narmada, but Son flows northeast (into the Ganga) while Narmada flows west",
    originAlt: "1,057 m above sea level",
    length: 784,
    lengthInMP: 470,
    discharge: "1,000 m³/s average during monsoon",
    basin: "71,959 km²",
    drains: "Ganga river, near Arrah / Patna, Bihar",
    tributaries: [
      { name: "Johilla", joins: "Shahdol district" },
      { name: "Banas", joins: "Rewa district" },
      { name: "Gopad", joins: "Sidhi district" },
      { name: "Rihand", joins: "Sonbhadra, UP" },
    ],
    states: ["Madhya Pradesh", "Chhattisgarh", "Jharkhand", "Uttar Pradesh", "Bihar"],
    colors: ["#F9C74F", "#F8961E", "#F3722C"],
    gradient: "linear-gradient(135deg,#1A0E00,#5C2800,#F3722C,#F9C74F)",
    icon: "✨",
    mood: "Golden · Ancient · Forgotten",
    desc: "The golden river born beside the Narmada at Amarkantak — flowing northeast to the Ganga while its twin sister flows west to the sea, the Son is India's most overlooked great river.",
    history: `The Son and the Narmada are geological siblings — both born from the same elevated plateau at Amarkantak in Anuppur district, both following ancient Gondwana rift valleys in opposite directions. The Narmada flows westward to the Arabian Sea; the Son flows northeastward to join the Ganga. This twinning — two great rivers born within 1 km of each other at the same altitude, flowing in opposite directions — is one of the most extraordinary geographical coincidences in India.

The Son appears in the Ramayana and Mahabharata as a sacred river, and Valmiki's Ashram — where Sita was sheltered by the sage while Rama was separated from her — is traditionally located on the Son's banks at Chitrakoot (though the Mandakini river near Chitrakoot is the more locally recognised sacred river). The Son valley contains some of the earliest evidence of human occupation in Central India — Bhimbetka (on the Narmada, but in the Son's extended basin) contains 500,000-year-old rock paintings.

The river is most important geologically: the Son Valley is the eastern extension of the Narmada-Son rift — the same ancient fault that created the Narmada. The Son's valley therefore contains the same geological features as the Narmada: ancient Gondwana rock, dinosaur fossils, and Precambrian mineral deposits. The Vindhya Range along the Son's southern bank contains some of India's richest mineral deposits — coal, bauxite, and limestone — which have driven industrialisation of the Son valley in Shahdol and Singrauli districts, significantly degrading the river's upper reaches.

The Son is little visited by tourists and little known outside the regions it flows through. This obscurity has preserved sections of its valley in a relatively natural state. The Sanjay-Dubri Tiger Reserve corridor uses the Son's upper tributaries as wildlife corridors connecting Central India's tigers to Eastern India's populations.`,
    mythology: `The Son's mythology is built around its twinship with the Narmada. In Puranic tradition, both rivers are children of the same mountain (Amarkantak = Meru in some texts). The Narmada is the daughter — feminine, westward-flowing, nurturing. The Son is the son — masculine, northward-flowing, golden. In some texts, the Son and Narmada were betrothed to each other (sibling rivers proposed as a divine marriage) but separated when the Narmada refused and fled westward.

The river is worshipped as Shona — the golden one — in tribal communities along its banks. Gold washing in the Son's sandy banks has been recorded since the Mauryan period. The river's name and its golden character are ancient.`,
    ecology: `The upper Son through MP's Shahdol and Sidhi districts is relatively clean and supports substantial freshwater fish populations including mahseer and the Son River catfish. The Son valley corridor is critical for tiger movement between Central and Eastern India. The Sanjay-Dubri Tiger Reserve's eastern boundary follows Son tributaries. The river supports Indian smooth-coated otters and gharial in isolated stretches. However, coal mining runoff from Singrauli and bauxite mining near Shahdol are rapidly degrading the river's water quality.`,
    threats: `The Son is under severe industrial pressure in its upper reaches in MP. Singrauli district — on the Son's lower MP stretch — is one of India's most heavily mined regions, with massive coal mines, thermal power plants, and aluminium smelters all discharging into Son tributaries. The Son's flow has been partially diverted by the Bansagar Dam (UP-MP border) for irrigation. Upper reaches near Amarkantak remain relatively clean.`,
    bestExperience: [
      "Amarkantak plateau — the Son's source, within 1 km of the Narmada source, on the same plateau",
      "Son valley tribal communities (Shahdol, Sidhi) — Baiga and Gond communities in forest river villages",
      "Sanjay-Dubri Tiger Reserve eastern buffer — Son tributaries as wildlife corridors",
      "Gold washing demonstration at traditional river communities — a practice since the Mauryan era",
      "Son river sunrise from the high plateau near Shahdol — the golden river in morning mist",
    ],
    keyLocations: [
      { name: "Amarkantak", why: "Source — within 1 km of Narmada source; both rivers born on same plateau" },
      { name: "Shahdol", why: "Upper Son valley — cleanest stretch, tribal communities, Baiga cultural heritage" },
      { name: "Sanjay-Dubri buffer", why: "Tiger corridor — Son tributaries connecting Central and Eastern India's wildlife" },
      { name: "Bansagar Dam (border)", why: "MP-UP border dam — large reservoir, Son's major regulated flow point" },
    ],
    pilgrimage: "No major established pilgrimage. Local communities perform Diwali and harvest rituals at the river. Amarkantak (the source) is sacred but primarily visited for the Narmada origin.",
    images: [
      {
        url: "https://i.ytimg.com/vi/i2MW2rd_oGU/maxresdefault.jpg",
        caption: "Son river at Shahdol — the golden river flowing through MP's eastern highlands",
      },
      {
        url: "https://static1.bigstockphoto.com/8/7/2/large1500/278539450.jpg",
        caption: "Amarkantak plateau — where both the Narmada and Son are born within 1 km of each other",
      },
      {
        url: "https://thumbs.dreamstime.com/b/amazing-view-son-river-phong-nha-cave-ke-bang-national-park-vietnam-underground-part-scenic-subterranean-tourist-143477912.jpg",
        caption: "Tribal community on the Son's banks — Baiga fishing communities, Sidhi district",
      },
    ],
    funFact: "The Son and the Narmada rise from the same plateau at Amarkantak — within 1 km of each other — but flow in completely opposite directions: Narmada westward to the Arabian Sea, Son northeastward to the Ganga and Bay of Bengal. They are siblings who have never met since birth, separated by the great watershed of Central India.",
    era: "Geological: Gondwana rift origin, 150+ million years. First text mention: Ramayana, Mahabharata. Gold washing records: Mauryan period (322–185 BCE).",
    sacredRank: "State Sacred River",
    damsCount: 3,
  },
];

// ─── RIVER STATS ──────────────────────────────────────────────────────────────

export const RIVER_STATS = [
  { value: "6", label: "Major Rivers", sub: "Crossing or originating in Madhya Pradesh", icon: "🌊" },
  { value: "150M", label: "Narmada Age", sub: "Years old — pre-dates the Himalayan rivers by 100 million years", icon: "⏳" },
  { value: "75M", label: "Kumbh Pilgrims", sub: "Bathed in the Shipra at Ujjain 2016 — world's largest gathering", icon: "🛕" },
  { value: "800+", label: "Wild Gharials", sub: "90% of world's gharials survive in the Chambal, MP's wild river", icon: "🐊" },
  { value: "1", label: "Chambal Dam", sub: "Only one large dam — reason it is India's cleanest northern river", icon: "✅" },
  { value: "3,500 km", label: "Narmada Parikrama", sub: "Circumambulation walk — 3 to 5 years on foot, both banks", icon: "🚶" },
];

// ─── RIVER EXPERIENCES ────────────────────────────────────────────────────────

export const RIVER_EXPERIENCES = [
  { icon: "🚣", title: "Chambal Gharial Safari", river: "Chambal", desc: "Boat safari from Palighat — see gharials, river dolphins, bar-headed geese on one of India's last wild rivers." },
  { icon: "🌙", title: "Bhedaghat Moonlight", river: "Narmada", desc: "Night boat through the marble gorge at Jabalpur — the white marble glows silver under a full moon." },
  { icon: "🪔", title: "Ram Ghat Aarti", river: "Shipra", desc: "Evening fire aarti at Ujjain — 4,500 years of continuous ritual, priest, flame, and river." },
  { icon: "🏯", title: "Orchha at Sunset", river: "Betwa", desc: "14 chhatris reflecting in the Betwa at golden hour — one of North India's defining photographic compositions." },
  { icon: "🐅", title: "Ken River Tiger Zone", river: "Ken", desc: "Panna National Park's Ken river zone at dusk — tigers come to drink in the dry season." },
  { icon: "✨", title: "Amarkantak Source", river: "Son + Narmada", desc: "The plateau where both rivers are born within 1 km — Narmada goes west, Son goes northeast, never to meet again." },
];