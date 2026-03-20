

export interface FestivalDetail {
  id: string;
  name: string;
  nameDev: string;
  season: string;
  month: string;
  duration: string;
  city: string;
  district?: string;
  colors: string[];
  desc: string;
  longDesc: string;
  icon: string;
  mood: string;
  // Real images from search results
  images: { url: string; caption: string }[];
  // Deep content
  highlights: string[];
  bestFor: string;
  howToReach: string;
  tip: string;
  trivia: string;
  organizedBy: string;
  scale: string;  // e.g. "75 million pilgrims" or "5,000 folk artists"
  era: string;    // how old / when established
}

export const FESTIVAL_DETAILS: FestivalDetail[] = [
  // ─── 1. RANG PANCHAMI ───────────────────────────────────────────────────────
  {
    id: "rang-panchami",
    name: "Rang Panchami",
    nameDev: "रंग पंचमी",
    season: "Spring",
    month: "March",
    duration: "1 day (5 days after Holi)",
    city: "Indore",
    district: "Indore District",
    colors: ["#FF6B9D", "#FFD93D", "#6BCB77", "#FF4500", "#9B59B6"],
    desc: "Five days after Holi, Indore erupts in the world's most spectacular colour battle — streets flooded with coloured water, processions, and pure chaos.",
    longDesc: "While most of India celebrates Holi once and moves on, Indore celebrates it twice — and the second time is bigger, louder, and wetter. Rang Panchami draws lakhs of people to the narrow lanes of the old city where trucks mounted with giant water cannons drench entire streets in coloured water. The Gair — Indore's legendary Rang Panchami procession — winds through Rajwada Palace, Chhatris, and the old city bazaars. Hundreds of procession floats, brass bands playing folk music, women in mirrored ghaghra-cholis, and men drenched purple and red from head to toe. The gulaal is not applied here — it is fired from cannons. Nothing is dry. Nothing is sacred. Everything is colour.",
    icon: "🎨",
    mood: "Joyful Chaos",
    images: [
      {
        url: "https://tse3.mm.bing.net/th/id/OIP.R_YL_HXsETNkLjkxOzar7AHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Rang Panchami streets, Indore — colour cannon procession",
      },
      {
        url: "https://th.bing.com/th/id/OIP.z691TEu-ylTATGBepB1ipQHaEK?w=303&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "The Gair procession through Rajwada — Indore's colour war",
      },
      {
        url: "https://tse2.mm.bing.net/th/id/OIP.YNUS_il1F8uEM3a7neK9PwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Coloured water trucks and procession crowds, Indore 2023",
      },
    ],
    highlights: [
      "The Gair procession — India's most flamboyant colour parade",
      "Water cannons mounted on trucks — nothing stays dry",
      "Rajwada Palace as the epicentre of the celebration",
      "Traditional gulaal (dry colour) AND coloured water simultaneously",
      "Brass bands, folk music, and spontaneous dancing in streets",
    ],
    bestFor: "Anyone who wants Holi at maximum intensity — this is the final form",
    howToReach: "Indore Airport (IXI) — 8 km from city centre. Well connected to Mumbai, Delhi, Bhopal",
    tip: "Wear clothes you never want to see clean again. Store your phone in a waterproof case. The Rajwada area fills up by 9 AM — arrive before 8 AM for the best position.",
    trivia: "The Gair procession has been a Indore tradition for over 400 years, documented since the Holkar dynasty era",
    organizedBy: "Community-organised — the Gair procession is a city-wide spontaneous tradition",
    scale: "5–8 lakh participants on the main Gair day",
    era: "400+ year tradition, Holkar dynasty origin",
  },

  // ─── 2. DIWALI IN UJJAIN ────────────────────────────────────────────────────
  {
    id: "diwali-ujjain",
    name: "Diwali in Ujjain",
    nameDev: "उज्जैन दीपावली",
    season: "Autumn",
    month: "October–November",
    duration: "5 days (Dhanteras to Bhai Dooj)",
    city: "Ujjain",
    district: "Ujjain District",
    colors: ["#FFD700", "#FF6B00", "#FFCC02", "#FF4500"],
    desc: "A million diyas float down the Shipra river. Ujjain burns brightest — the city of Mahakal celebrates with unmatched spiritual intensity.",
    longDesc: "Diwali in Ujjain is not a festival — it is an act of devotion carried out in one of the holiest cities on earth. The Mahakaleshwar Temple complex blazes with oil lamps from foundation to spire while the priests perform the Bhasma Aarti — an aarti using ash from the cremation ground — at midnight. The Shipra River becomes a river of light as thousands of earthen diyas are set afloat at Ram Ghat, Mangalnath Ghat, and Triveni Ghat simultaneously. The air is dense with camphor, jasmine, and the sound of conch shells echoing across the river from temple to temple. Ujjain's Diwali has been observed in this form for over 2,000 years — this is the oldest living Diwali tradition in India.",
    icon: "🪔",
    mood: "Sacred & Luminous",
    images: [
      {
        url: "https://th.bing.com/th/id/OIP.w6451SUUJnYGhvRzhYijRwHaEK?w=217&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Mahakaleshwar Temple, Ujjain — ablaze with diyas on Diwali night",
      },
      {
        url: "https://th.bing.com/th/id/OIP.RY0zQCa7hdanUEj5-HDvhwHaEK?w=258&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Ram Ghat, Ujjain — thousands of diyas set afloat on Shipra river",
      },
      {
        url: "https://www.ibc24.in/wp-content/uploads/2023/11/Ujjain-Mahakal-DiwaliI.jpg",
        caption: "Diya reflections on the Shipra — Diwali evening at Ujjain ghats",
      },
    ],
    highlights: [
      "Bhasma Aarti at Mahakaleshwar Temple — ash aarti at midnight, extraordinarily rare ritual",
      "Ram Ghat diya flotilla — thousands of earthen lamps on the Shipra",
      "Temple spires illuminated from base to top in oil lamps",
      "Continuous chanting of Rudra Ashtadhyayi across 84 temple ghats",
      "Triveni Ghat evening aarti — fire, conch, and river in perfect ceremony",
    ],
    bestFor: "Spiritual travellers and photographers — the Shipra diya flotilla at 7 PM is transcendent",
    howToReach: "Ujjain Railway Station — well connected to Indore (54 km), Bhopal (183 km), Mumbai",
    tip: "Book the midnight Bhasma Aarti at Mahakaleshwar 2–3 months in advance — passes are limited. Ram Ghat is best on Diwali night itself, not the days before.",
    trivia: "The Mahakaleshwar Jyotirlinga is one of 12 sacred jyotirlingas — and the only one facing south (Dakshine Mukhi), making its Diwali aarti especially auspicious",
    organizedBy: "Mahakaleshwar Temple Trust + Ujjain Municipal Corporation",
    scale: "2–3 lakh devotees on the main Diwali night",
    era: "2,000+ years — Ujjain was capital of Avanti kingdom, Diwali observed since before the Common Era",
  },

  // ─── 3. KHAJURAHO DANCE FESTIVAL ────────────────────────────────────────────
  {
    id: "khajuraho-dance",
    name: "Khajuraho Dance Festival",
    nameDev: "खजुराहो नृत्य उत्सव",
    season: "Late Winter",
    month: "February",
    duration: "7 days",
    city: "Khajuraho",
    district: "Chhatarpur District",
    colors: ["#C77DFF", "#FF6B6B", "#4ECDC4", "#F7D794"],
    desc: "Classical dance forms performed against the lit UNESCO temples. Kathak, Bharatnatyam, Odissi, and Manipuri — culture and architecture in perfect dialogue.",
    longDesc: "For seven nights every February, India's greatest classical dancers perform on an open-air stage against the illuminated backdrop of the Khajuraho temples — UNESCO World Heritage monuments built by the Chandela dynasty between 950–1050 CE. The juxtaposition is not merely visual: the temples are covered in carved apsaras (celestial dancers) frozen in movement, and the living dancers below echo those movements across a millennium. Kathak feet tap in the same rhythms that temple architects encoded in stone. Bharatnatyam abhinaya mirrors the sculptural narratives of the Kandariya Mahadeva temple. The 52nd Khajuraho Dance Festival in 2026 continues a tradition that MP Kala Parishad established in 1975 — making it India's second-longest running classical dance festival.",
    icon: "💃",
    mood: "Artistic & Sublime",
    images: [
      {
        url: "https://th.bing.com/th/id/OIP.6wBv_U4J0HKWsMIp64ywLwHaEU?w=296&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Khajuraho Western Group temples — backdrop for the dance festival",
      },
      {
        url: "https://th.bing.com/th/id/OIP.RMMlSpuCKYx6QZdUH4RQggHaG-?w=183&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Classical dancer performing Odissi against lit Khajuraho temples",
      },
      {
        url: "https://tse4.mm.bing.net/th/id/OIP.gi1yPrVLY4-aqRTF8oovbAHaEx?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Kathak performance — hands, ghungroo, and temple spires",
      },
    ],
    highlights: [
      "Open-air stage opposite Chitragupta and Vishwanath Temples — lit at night",
      "7 classical forms: Kathak, Bharatnatyam, Odissi, Kuchipudi, Manipuri, Kathakali, Mohiniyattam",
      "India's finest performers — both established maestros and young prodigies",
      "Performances from dusk until 10:30 PM daily across all 7 nights",
      "Free entry for all performances — Khajuraho's gift to India",
    ],
    bestFor: "Classical arts lovers, photographers (long-exposure of dancer + temple), and anyone who cares about living culture",
    howToReach: "Khajuraho Airport (HJR) — direct flights from Delhi and Varanasi. Train from Jhansi (175 km)",
    tip: "Arrive 45 minutes before performance for front-row seating. Night 3 and Night 7 are traditionally the marquee performances — senior artists perform on opening and closing nights.",
    trivia: "The 52nd Khajuraho Dance Festival in 2026 includes a Reel-Making Competition — the oldest classical dance festival in India now has an Instagram dimension",
    organizedBy: "Madhya Pradesh Kala Parishad + Department of Culture, Govt. of MP",
    scale: "50+ performances, 200+ artists from across India",
    era: "Established 1975 — now 52 years running (2026)",
  },

  // ─── 4. LOKRANG ─────────────────────────────────────────────────────────────
  {
    id: "lokrang",
    name: "Lokrang Samaroh",
    nameDev: "लोकरंग समारोह",
    season: "Winter",
    month: "January (Republic Day Week)",
    duration: "5 days (starts January 26)",
    city: "Bhopal",
    district: "Bhopal District",
    colors: ["#F77F00", "#FCBF49", "#EAE2B7", "#D62828"],
    desc: "India's largest folk arts festival in Bhopal. Tribal music, Gond art live demonstrations, Baiga dance, and the raw beauty of India's indigenous traditions.",
    longDesc: "Every January 26th, Bhopal's open grounds transform into the most culturally dense square kilometre in India. The Lokrang Samaroh — organised by the MP Adivasi Lok Kala Evam Boli Vikas Academy — gathers over 5,000 folk and tribal artists from 28 states and international countries for a five-day immersion in India's pre-modern artistic traditions. You can watch a Gond artist paint a 6-foot canvas in real time, hear Baiga tribal music on instruments made from bamboo and forest materials, see Saura tribal paintings from Odisha, hear Rajasthani Manganiyar music, and eat food from tribal communities you have never heard of. Lokrang is proof that India is not one culture — it is a continent's worth of parallel civilisations, each with their own visual language, music, and cosmology. The word itself is an amalgamation: Lok (people) + Rang (colour). The people's colour festival.",
    icon: "🥁",
    mood: "Raw & Authentic",
    images: [
      {
        url: "https://tse4.mm.bing.net/th/id/OIP.ubDVYh4YY2690kU30M_q5gHaE2?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Lokrang Samaroh, Bhopal — tribal performers on the main stage",
      },
      {
        url: "https://th.bing.com/th/id/OIP.2uZtN1_KYfooJBPA6LKkbwHaE0?w=274&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Live Gond painting demonstration — Lokrang's craft gallery",
      },
      {
        url: "https://th.bing.com/th/id/OIP.0o4elf4p-uO9Dmc0Or62CQHaE7?w=254&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Baiga tribal dance performance — forest drums and ancient rhythm",
      },
    ],
    highlights: [
      "5,000+ folk artists from all 28 states performing simultaneously",
      "8 dedicated event categories: music, dance, theatre, visual arts, crafts, food, film, and poetry",
      "Gond painting live — watch artists create traditional art in real time",
      "Tribal food bazaar — dishes from communities rarely seen in urban India",
      "46 tribal communities of MP all represented in a single location",
      "No entry fee — completely free, organised as a public cultural gift",
    ],
    bestFor: "Ethnographers, photographers, food explorers, and anyone seeking India beyond the tourist circuit",
    howToReach: "Bhopal Raja Bhoj Airport (BHO) — well connected. Bhopal is on Delhi-Mumbai Central Railway Line",
    tip: "Arrive on Day 1 (January 26) — the opening procession is spectacular. Morning hours (10 AM–1 PM) are best for craft and art gallery exploration before afternoon crowds arrive.",
    trivia: "Lokrang has been running for 19+ years and has documented and performed art forms that were otherwise nearing extinction — including the Ramayni theatrical tradition of the Gond tribe",
    organizedBy: "MP Adivasi Lok Kala Evam Boli Vikas Academy (Government of MP)",
    scale: "5,000+ artists, artists from 28 states, 4–5 day duration",
    era: "Established 2002 — 22+ years running",
  },

  // ─── 5. TANSEN MUSIC FESTIVAL ───────────────────────────────────────────────
  {
    id: "tansen-music",
    name: "Tansen Sangeet Samaroh",
    nameDev: "तानसेन संगीत समारोह",
    season: "Winter",
    month: "November–December",
    duration: "4 nights",
    city: "Gwalior",
    district: "Gwalior District",
    colors: ["#4A90D9", "#A78BFA", "#60A5FA", "#1A1A2E"],
    desc: "At the tomb of Akbar's legendary court musician, India's finest classical singers perform ragas through the winter night under open skies.",
    longDesc: "Tansen — one of the Navaratnas of Akbar's court and perhaps the greatest musician in recorded Indian history — is buried in Gwalior. Every winter, his spirit is summoned through four nights of Hindustani classical music performed in the garden of his tomb. The festival was established in 1952, making it one of India's oldest running music festivals. Established maestros and young prodigies perform from dusk until 3 AM — the long raga tradition requires darkness to be fully realised. The audience sits wrapped in shawls in the cold Gwalior night and listens with eyes closed, sometimes for 3 hours to a single raga's unfurling. Legend holds that Tansen could literally make it rain by singing Megh Malhar and light lamps with Raga Deepak. The tradition being performed here is the same one he established — 400 years of unbroken musical descent.",
    icon: "🎵",
    mood: "Meditative & Classical",
    images: [
      {
        url: "https://th.bing.com/th/id/OIP.1Zocj_GM9Iuwe4nOiWV8iAHaEK?w=326&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Tansen's Tomb, Gwalior — the sacred site of the music festival",
      },
      {
        url: "https://th.bing.com/th/id/OIP.4JZrrIS0dwxKb3DLn_MkegHaEK?w=313&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Night performance at Tansen Sangeet Samaroh, Gwalior",
      },
      {
        url: "https://c.ndtvimg.com/2025-12/hdhd7l0k_tansen-samaroh-2025_625x300_12_December_25.png",
        caption: "Classical musician performing ragas under winter sky",
      },
    ],
    highlights: [
      "Performances at the actual tomb of Tansen — one of history's greatest musicians",
      "4 nights of Hindustani classical — ragas performed until 3 AM",
      "Both established Gharana masters and young classical prodigies",
      "Tradition of over 70 years — all major Indian classical musicians have performed here",
      "Cold winter nights and ancient ragas — combination found nowhere else in India",
    ],
    bestFor: "Serious classical music lovers — this is not background music; this is immersive, hours-long raga listening",
    howToReach: "Gwalior Airport (GWL) — connected to Delhi, Mumbai. Gwalior is on the Delhi-Mumbai main railway line",
    tip: "Bring a warm shawl — nights drop to 8°C in December. Arrive before sundown to get good ground seating. The 11 PM–1 AM slot is when the deepest ragas are performed.",
    trivia: "Local tradition says that a specific tamarind tree near Tansen's tomb was planted by Tansen himself — people chew its leaves believing it improves the voice",
    organizedBy: "Madhya Pradesh Kala Parishad + Tansen Samaroh Committee",
    scale: "50,000+ attendees over 4 nights, India's most respected Hindustani music festival",
    era: "Established 1952 — 73 years of continuous performances",
  },

  // ─── 6. SIMHASTHA KUMBH MELA ────────────────────────────────────────────────
  {
    id: "simhastha-kumbh",
    name: "Simhastha Kumbh Mela",
    nameDev: "सिंहस्थ कुम्भ मेला",
    season: "Spring",
    month: "April–May (Every 12 Years)",
    duration: "45 days",
    city: "Ujjain",
    district: "Ujjain District",
    colors: ["#FF6B35", "#FFD700", "#FF9500", "#FF2400"],
    desc: "The world's largest gathering of humanity — 75 million pilgrims converge on the Shipra river every 12 years for the most sacred of all Hindu pilgrimages.",
    longDesc: "Every 12 years, when Jupiter enters Leo and the sun enters Aries, Ujjain triggers one of the most extraordinary events in human history. The Simhastha Kumbh Mela draws between 50–75 million people over 45 days to bathe in the Shipra River at astrologically precise moments, believing the water transforms into amrit (divine nectar) during these windows. The Naga Sadhus — ash-covered, dreadlocked ascetics who renounce all possessions — arrive in the Shahi Snan (Royal Bath) procession first, mounted on horses and elephants, followed by millions of ordinary devotees. A tent city larger than most permanent cities appears and disappears by the Shipra. The next Simhastha is in 2028 — the last was 2016, when 75 million people gathered. No ticketing. No assigned seating. Just the largest peaceful human gathering on earth.",
    icon: "🌊",
    mood: "Cosmic & Overwhelming",
    images: [
      {
        url: "https://www.jagranimages.com/images/newimg/09032024/09_03_2024-simhastha-2028_23670683.webp",
        caption: "Simhastha 2016 — pilgrims at Shipra River during Shahi Snan",
      },
      {
        url: "https://th.bing.com/th/id/OIP.ZHqaiyZ57pdBl31At7WrIQHaEK?w=328&h=185&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Naga Sadhus procession — Simhastha Ujjain",
      },
      {
        url: "https://tse2.mm.bing.net/th/id/OIP.pnTHfOhqrCpKOwGXEr06RQHaEr?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "75 million pilgrims, one river — Kumbh Mela from above",
      },
    ],
    highlights: [
      "Shahi Snan processions — Naga Sadhus on horses and elephants, ash-covered, trident-bearing",
      "5 main Shahi Snan dates — each drawing 10–15 million bathers in a single day",
      "45-day tent city: 75 million people across the full festival",
      "13 Akharas (ascetic orders) participate — 1,000-year-old institutions",
      "Mahakaleshwar Temple performs extended puja sequences never seen outside Simhastha",
    ],
    bestFor: "The most overwhelming human experience available on earth — plan months in advance",
    howToReach: "Ujjain + Indore airports both active during Simhastha. Dedicated Kumbh train services from all major cities",
    tip: "Next Simhastha: 2028. Book accommodation in Indore (54 km) and travel daily — Ujjain accommodation is impossible to secure. The first Shahi Snan is the most spectacular.",
    trivia: "The 2016 Simhastha tent city had its own postal code, police station, hospital, and fire brigade — it was administratively a temporary city of 75 million people",
    organizedBy: "Government of Madhya Pradesh — full state machinery deployed for 45 days",
    scale: "75 million pilgrims (2016 estimate) — largest peaceful gathering in human history",
    era: "Ancient — Ujjain's Kumbh tradition is mentioned in Puranas, 2,500+ years old",
  },

  // ─── 7. BHAGORIA HAAT FESTIVAL ──────────────────────────────────────────────
  {
    id: "bhagoria-haat",
    name: "Bhagoria Haat Festival",
    nameDev: "भगोरिया हाट उत्सव",
    season: "Spring",
    month: "March (week before Holi)",
    duration: "7 days",
    city: "Jhabua",
    district: "Jhabua, Alirajpur, Khargone, Badwani",
    colors: ["#E74C3C", "#F39C12", "#2ECC71", "#9B59B6"],
    desc: "The tribal festival of love. Bhil and Bhilala tribes gather at weekly haats — if a boy and girl smear red on each other's faces, they are betrothed. Ancient courtship, open sky.",
    longDesc: "In the Bhil tribal heartland of western MP, Bhagoria is the only festival in India where elopement is not a scandal but a social institution. For seven days before Holi, weekly market gatherings (haats) in Jhabua, Alirajpur, Khargone, and Badwani transform into the world's most unusual matrimonial events. Young Bhil men in their finest traditional attire — turbans, silver jewellery, anklets — approach young women. If a girl accepts gulaal (red powder) applied to her cheeks by a boy, both families consider it a betrothal. If both apply gulaal to each other and flee the haat together, the elopement is legal and binding — parents cannot refuse. Traditional music on the tadpatra (bamboo flute) and mandar (drum) fills the air. It is joyful, chaotic, and one of the last living traditions of pre-arranged tribal courtship in the world.",
    icon: "💘",
    mood: "Wild & Free",
    images: [
      {
        url: "https://i.ytimg.com/vi/KOWiD31CGO8/maxresdefault.jpg",
        caption: "Bhil tribal youth at Bhagoria Haat — traditional attire and gulaal",
      },
      {
        url: "https://panchjanya.com/wp-content/uploads/2025/02/bhagoria-haat-tribal-festival-secrets-revealed.webp",
        caption: "Bhagoria Haat market — music, dance, and courtship in one space",
      },
      {
        url: "https://th.bing.com/th/id/OIP.vfUB6pZ01HH5bYbkgcQXOwHaF7?w=184&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Tribal music — tadpatra flute and mandar drum, Bhagoria",
      },
    ],
    highlights: [
      "The only festival in India where elopement is a recognised social institution",
      "Bhil and Bhilala tribal communities in full traditional attire — ornate silver jewellery",
      "Tadpatra (bamboo flute) and mandar drum music filling the haat grounds",
      "Seven different haat locations on seven successive days — rotating festival",
      "Traditional food: mahua liquor, tribal delicacies, and fresh market produce",
    ],
    bestFor: "Ethnographers, documentary photographers, and travellers seeking truly non-commercial tribal India",
    howToReach: "Jhabua — nearest airport is Indore (165 km). State buses and private taxis from Indore",
    tip: "Observe respectfully — this is a living community practice, not a performance. Seek permission before photographing individuals. Local guides from Jhabua are essential.",
    trivia: "The word Bhagoria comes from 'Bhagna' (Sanskrit: to flee) — the festival literally celebrates sanctioned elopement as its centrepiece event",
    organizedBy: "Community self-organised — the Bhil and Bhilala tribal communities, no external organiser",
    scale: "Hundreds of thousands across 7 rotating haats in 4 districts",
    era: "Pre-modern — tradition predates written records, estimated 500+ years old",
  },

  // ─── 8. KALIDAS SAMAROH ─────────────────────────────────────────────────────
  {
    id: "kalidas-samaroh",
    name: "Akhil Bhartiya Kalidas Samaroh",
    nameDev: "अखिल भारतीय कालिदास समारोह",
    season: "Autumn",
    month: "October–November",
    duration: "7 days",
    city: "Ujjain",
    district: "Ujjain District",
    colors: ["#F0C040", "#C0A820", "#E8A020", "#B07818"],
    desc: "A week-long Sanskrit and Hindi literary festival at Ujjain — the city where Kalidas himself wrote. Poetry, theatre, and classical Sanskrit drama performed where the words were born.",
    longDesc: "Kalidas — India's Shakespeare, author of Abhijnanasakuntalam, Meghaduta, and Kumarasambhavam — lived and wrote in Ujjain during the reign of Vikramaditya. The Akhil Bhartiya Kalidas Samaroh, established in 1958 by President Rajendra Prasad, celebrates his legacy with a week of classical Sanskrit drama, Hindi theatre, poetry readings, and literary discussions. India's finest Sanskrit scholars, theatre directors, and poets gather in the city where Kalidas himself once sat by the Shipra river and wrote the Meghaduta (Cloud Messenger). Performances of Shakuntala and Meghaduta are staged on an open-air platform with the Mahakaleshwar Temple in the background. This is India's most prestigious literary festival and its most ancient theme — Sanskrit, performed where Sanskrit was perfected.",
    icon: "📜",
    mood: "Intellectual & Classical",
    images: [
      {
        url: "https://tse1.mm.bing.net/th/id/OIP.pJo3xuHuuiYRnX7o27k-pgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Ujjain — city of Kalidas, setting of the Samaroh",
      },
      {
        url: "https://img.naidunia.com/naidunia/ndnimg/09112022/09_11_2022-kalidas_samaroh_2022119_233111.jpg",
        caption: "Sanskrit drama performance — Kalidas Samaroh, Ujjain",
      },
      {
        url: "https://i.ytimg.com/vi/yDCegeL4ySw/hqdefault.jpg",
        caption: "Classical theatre performance under night sky",
      },
    ],
    highlights: [
      "Sanskrit drama performances of Kalidas's own works — Shakuntala, Meghaduta",
      "Hindi and Sanskrit poetry recitations by India's finest poets",
      "Academic symposia on Sanskrit literature and Ujjain's literary history",
      "National Kalidas Samman Award — India's highest honour for Sanskrit scholarship",
      "Theatre performances in the open-air setting of Ujjain's historic ghats",
    ],
    bestFor: "Literary travellers, Sanskrit scholars, classical theatre lovers, and anyone interested in India's intellectual heritage",
    howToReach: "Ujjain Railway Station — Indore 54 km (90 min drive). Indore Airport is nearest",
    tip: "The theatre performances are in Sanskrit and Hindi — bring a programme booklet (distributed at entry) which includes summaries in English. The poetry evenings are the most accessible events for non-specialists.",
    trivia: "The festival was inaugurated by President Rajendra Prasad in 1958 — making it older than most of India's classical music and dance festivals",
    organizedBy: "MP Kala Parishad + Vikram University Ujjain + Government of MP",
    scale: "300+ scholars and artists; audience of 50,000+ over 7 days",
    era: "Established 1958 — 67 years continuous; honours a poet from the 4th–5th century CE",
  },
];

// ─── FESTIVAL STATS ───────────────────────────────────────────────────────────
export const FESTIVAL_STATS = [
  { value: "8+", label: "Major Festivals", sub: "Spanning all 12 months of the year", icon: "🎭" },
  { value: "75M", label: "Simhastha Pilgrims", sub: "World's largest peaceful gathering, every 12 years", icon: "🌊" },
  { value: "5,000+", label: "Lokrang Artists", sub: "Folk performers from 28 states in one place", icon: "🥁" },
  { value: "2,500+", label: "Years of Tradition", sub: "Ujjain's cultural calendar predates most civilisations", icon: "📜" },
  { value: "46", label: "Tribal Communities", sub: "Represented at Lokrang — India's most diverse festival", icon: "🏹" },
  { value: "1952", label: "Tansen Samaroh Est.", sub: "India's oldest continuously running classical music festival", icon: "🎵" },
];