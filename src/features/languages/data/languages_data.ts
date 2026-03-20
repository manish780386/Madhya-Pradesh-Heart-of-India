// ─── TYPES ────────────────────────────────────────────────────────────────────

export interface LangImage {
  url: string;
  caption: string;
}

export interface PhraseSample {
  phrase: string;
  script?: string;
  meaning: string;
  romanised: string;
}

export interface LanguageDetail {
  id: string;
  name: string;
  nativeName: string;          // name in its own script
  family: string;              // language family
  branch: string;              // sub-branch
  script: string;              // writing system
  speakers: string;            // number of speakers
  speakersInMP: string;
  region: string;              // where in MP
  status: "Official" | "Regional" | "Tribal" | "Endangered" | "Classical";
  vitality: "Thriving" | "Stable" | "Declining" | "Endangered" | "Critical";
  colors: [string, string, string];
  gradient: string;
  icon: string;
  mood: string;
  desc: string;
  history: string;             // deep cultural + linguistic history
  literature: string;          // notable literature, writers, oral tradition
  distinctFeatures: string[];  // what makes this language unique linguistically
  phrases: PhraseSample[];     // 4-5 sample phrases with translations
  images: LangImage[];
  keyFigures: string;          // poets, scholars, writers to know
  whereSpoken: string[];       // specific districts / cities
  funFact: string;
  era: string;                 // how old the language is
  relatedLangs: string[];      // similar / related languages
  threatLevel: string;         // what threatens the language
  writingSystem: string;       // notes on the script
}

// ─── LANGUAGE DATA ────────────────────────────────────────────────────────────

export const LANGUAGES: LanguageDetail[] = [

  // ─── 1. HINDI ─────────────────────────────────────────────────────────────
  {
    id: "hindi",
    name: "Hindi",
    nativeName: "हिन्दी",
    family: "Indo-European",
    branch: "Indo-Aryan → Central Zone",
    script: "Devanagari",
    speakers: "600 million+ (L1 + L2 globally)",
    speakersInMP: "~72 million (official language, first language of 90% of population)",
    region: "All of Madhya Pradesh — dominant in cities and rural areas alike",
    status: "Official",
    vitality: "Thriving",
    colors: ["#FF7043", "#FF8A65", "#FFCCBC"],
    gradient: "linear-gradient(135deg,#1A0A00,#4A1500,#BF360C,#FF7043)",
    icon: "📖",
    mood: "Expressive · Warm · Lyrical",
    desc: "The language of 600 million people — and in Madhya Pradesh, it carries a distinctive Malwi rhythm, a gentle musicality that sets Central Indian Hindi apart from the north.",
    history: `Hindi as spoken in Madhya Pradesh is not the standardised Khari Boli of Doordarshan or Delhi — it is a living, warm, regionally inflected form that carries the influences of centuries of linguistic exchange between the Vindhya-Malwa plateau's many communities. MP Hindi evolved from Apabhramsha (the transitional language between Sanskrit and modern North Indian languages) between the 11th and 14th centuries, absorbing vocabulary from Persian and Arabic via the Mughal and Nawabi courts of Bhopal and Gwalior, tribal lexicon from Gond and Bhil communities, and Rajasthani influence from the western districts.

The standard Hindi literary tradition has deep roots in MP. Tulsidas, who wrote the Ramcharitmanas (the most widely read literary text in the Hindi belt), spent formative years in Chitrakoot near the Betwa river. Mahakavi Subhadra Kumari Chauhan — author of the iconic patriotic poem 'Jhansi ki Rani' — was born in Prayagraj but her identity is inseparable from the Bundelkhand region she wrote about. The Hindi literary movement of the early 20th century — called Chhayavad (Romantic movement) — counted poets from the Malwa and Vindhya regions as central figures.

In Madhya Pradesh, Hindi is not one language — it is a continuum of regional expressions. The Hindi of Indore has a Malwi lilt and borrows freely from Malwi idiom. The Hindi of Gwalior carries the crispness of the Braj-Kshetra tradition. The Hindi of Bhopal has absorbed Persian constructions through centuries of Nawabi culture. The Hindi of the Baghelkhand region in eastern MP is closer to Awadhi. This internal diversity makes MP Hindi one of the richest spoken forms of the language anywhere.`,
    literature: `MP's Hindi literary tradition spans 800 years. The Chhayavad poets — Jaishankar Prasad, Sumitranandan Pant, Mahadevi Varma — were active in the 1920s–1940s and represent Hindi literature's Romantic peak. Nirala (Suryakant Tripathi Nirala), whose poetry broke free of Hindi's traditional metres, was rooted in the Central Indian tradition. Contemporary MP writers include Vinod Kumar Shukla (Dhar district) — a novelist of international standing, shortlisted for the International Booker Prize for 'The Servant's Shirt' — and the poet Ashok Vajpeyi, former director of Bharat Bhavan, Bhopal.

The oral tradition of MP Hindi includes Alha — a long martial epic of the Bundela heroes, recited from memory by Alhait singers, some of whom know 52+ chapters by heart without any written text.`,
    distinctFeatures: [
      "Malwi-inflected MP Hindi drops final vowels: 'karo' becomes 'kar', 'jao' becomes 'ja'",
      "Extensive use of 'sa' particle for approximation: 'thoda sa' (a little bit), 'aisa sa' (something like this)",
      "Persian and Urdu loanwords more prevalent in Bhopal-region Hindi than standard Hindi",
      "Bundeli subvariety uses 'to' as discourse particle constantly: 'phir to', 'fir to'",
      "MP Hindi 'haaN' (yes) has 4 distinct tonal variants each with different certainty levels",
    ],
    phrases: [
      { phrase: "म्हारो गाम कतो सुंदर है!", script: "हिंदी", romanised: "Mharo gaam kato sundar hai!", meaning: "Our village is so beautiful! (Malwi-inflected Hindi)" },
      { phrase: "कान में क्या डाल रहे हो?", script: "हिंदी", romanised: "Kaan mein kya daal rahe ho?", meaning: "What are you putting in my ears? (MP idiom for 'stop telling me false things')" },
      { phrase: "बात बनेगी जरूर।", script: "हिंदी", romanised: "Baat banegi zaroor.", meaning: "The matter will work out — (MP expression of gentle assurance)" },
      { phrase: "अरे यार, चल पड़ते हैं!", script: "हिंदी", romanised: "Are yaar, chal padte hain!", meaning: "Come on friend, let's get moving! — classic MP informal register" },
    ],
    images: [
      { url: "https://as2.ftcdn.net/v2/jpg/04/12/22/39/1000_F_412223921_yfs8bT7Yxrt1KQK6tz2C2LQJDVxnCSC1.jpg", caption: "Devanagari script — the writing system of Hindi, Sanskrit, and Marathi" },
      { url: "https://tse2.mm.bing.net/th/id/OIP.cncwluQLN0VXmiAc9teaKAHaL8?rs=1&pid=ImgDetMain&o=7&rm=3", caption: "Hindi newspapers — MP has the highest readership of Hindi dailies in India" },
      { url: "https://image.slidesharecdn.com/131603423-shriramcharit-manas-gita-press-gorakhpur-151023153312-lva1-app6892/75/Full-Shri-Ramcharitmanas-in-Hindi-Complete-With-Meaning-Ramayana-1-2048.jpg", caption: "Ramcharitmanas — written by Tulsidas, who spent years at Chitrakoot, MP" },
    ],
    keyFigures: "Tulsidas (Ramcharitmanas, Chitrakoot), Vinod Kumar Shukla (International Booker shortlist, Dhar), Ashok Vajpeyi (poet, Bharat Bhavan Bhopal), Subhadra Kumari Chauhan (Jhansi ki Rani poem)",
    whereSpoken: ["All 55 districts of MP", "Dominant in Bhopal, Indore, Gwalior, Jabalpur", "Rural areas with regional dialect variations"],
    funFact: "Madhya Pradesh has the highest readership of Hindi-language newspapers in India — Dainik Bhaskar (born in Bhopal in 1958) is the world's second-largest circulated newspaper and the single largest Hindi daily, with its roots and editorial identity in MP.",
    era: "Modern Hindi: 14th century CE. Devanagari script: 11th–13th century CE. Sanskrit ancestor: 1500 BCE+",
    relatedLangs: ["Malwi (dialect)", "Bundeli (dialect)", "Bagheli (dialect)", "Urdu (register variant)", "Sanskrit (ancestor)"],
    threatLevel: "No threat — expanding in reach and digital presence. However, regional dialects (Malwi, Bundeli) face pressure from standardised Hindi.",
    writingSystem: "Devanagari — abugida script (consonant clusters with inherent vowels). 52 primary characters. Left-to-right. Used for Hindi, Sanskrit, Marathi, Nepali, and many other languages.",
  },

  // ─── 2. MALWI ─────────────────────────────────────────────────────────────
  {
    id: "malwi",
    name: "Malwi",
    nativeName: "मालवी",
    family: "Indo-European",
    branch: "Indo-Aryan → Rajasthani-Malwi group",
    script: "Devanagari (when written)",
    speakers: "~6–8 million",
    speakersInMP: "6 million (Malwa Plateau region)",
    region: "Indore · Ujjain · Dewas · Ratlam · Mandsaur · Shajapur · Agar-Malwa",
    status: "Regional",
    vitality: "Stable",
    colors: ["#F4A261", "#E9C46A", "#FFDD57"],
    gradient: "linear-gradient(135deg,#1A0E00,#4A2500,#E76F51,#F4A261)",
    icon: "🎶",
    mood: "Musical · Earthy · Warm",
    desc: "The language of the Malwa plateau — musical, vowel-rich, and utterly distinct from standard Hindi. The tongue of Indore's street stalls, Ujjain's temple priests, and four centuries of Holkar-era folk culture.",
    history: `Malwi evolved from the Apabhramsha spoken on the Malwa plateau between the 8th and 12th centuries, influenced by the Paramara dynasty's cultural environment (which produced the poet Bhoja Raja, patron of Sanskrit literature) and later by the Rajput and Maratha linguistic traditions. The Holkar dynasty — which ruled from Indore and Maheshwar in the 18th century — patronised Malwi folk culture extensively. The Rani Ahilyabai Holkar period (1765–1795) is considered a golden age for Malwi folk music and oral tradition.

Malwi is classified by linguists as a transitional language between the Rajasthani group (western MP) and the Central Hindi dialects (eastern MP). It is more closely related to Mewari and Marwari (Rajasthani varieties) than to standard Hindi — a distinction that speakers feel strongly even if linguists sometimes classify it as a Hindi dialect. The language has its own distinct phonology, a rich folk song tradition (Malwi Lokgeet), and vocabulary that has no Hindi equivalents.

The Malwi Lokgeet — folk song genre — is one of the most diverse in India. It includes specific song types for weddings (Sanjhi, Gauri), harvests (Khambhswari), monsoon arrival (Kajri), and seasonal planting (Kharif songs). The folk theatre form Maach — a genre of musical theatre unique to the Malwa region — has been performed for 300+ years and remains active in Ujjain and Indore with performances attracting thousands.`,
    literature: `Malwi's literary tradition is primarily oral — the written tradition is relatively recent. The poet Santosh Trivedi and folk scholar Ramnarayan Upadhyay have documented Malwi oral literature extensively. The Maach theatre — Malwa's indigenous musical drama form — contains embedded lyric poetry of considerable sophistication, passed down entirely through performance.

The language has a rich tradition of agricultural metaphor and seasonal poetry. Malwi proverbs (kahawaten) are collected in several volumes and represent a complete epistemology of rural Malwa life — every proverb encodes agricultural, social, or environmental knowledge specific to the plateau's ecology.`,
    distinctFeatures: [
      "Distinctive nasal vowels — 'haN', 'maiN' have a musical nasalisation not found in standard Hindi",
      "Uses 'sa' as intensifier constantly: 'chalo sa' (let's go), 'thanda sa' (cool, in a nice way)",
      "Final syllable softening: words often end on a soft exhale rather than a hard consonant",
      "Rich vocabulary for agricultural activities — dozens of words for soil types, planting stages, weather patterns with no Hindi equivalents",
      "The word 'theek-thaak' originated in Malwi before entering standard Hindi colloquial usage",
    ],
    phrases: [
      { phrase: "भारी मजा आयो!", romanised: "Bhaari maja aayo!", meaning: "Had a great time! (Malwi expression of joy — 'bhaari' as intensifier is distinctly Malwi)" },
      { phrase: "काई बात नी।", romanised: "Kai baat ni.", meaning: "It doesn't matter / No problem — the classic Malwi dismissal of worry" },
      { phrase: "अरे, खाणो खायो के नई?", romanised: "Are, khaano khaayo ke nai?", meaning: "Hey, have you eaten yet? — the Malwi greeting that replaces 'how are you'" },
      { phrase: "मालवो धरती धाम है।", romanised: "Maалvo dharti dhaam hai.", meaning: "Malwa's earth is sacred ground — a folk proverb about the plateau's fertility" },
    ],
    images: [
      { url: "https://en-media.thebetterindia.com/uploads/2016/10/Dashavatar_group_pic-500x413.jpg", caption: "Maach folk theatre, Ujjain — Malwi's 300-year-old musical drama tradition" },
      { url: "https://tse3.mm.bing.net/th/id/OIP.jb2up6-p0gSnN12EFf9c2gHaD4?rs=1&pid=ImgDetMain&o=7&rm=3", caption: "Malwa plateau village — the landscape that shaped the Malwi language and its agricultural vocabulary" },
      { url: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2025/10/03/4173678-sali7.png?im=FitAndFill=(800,600)", caption: "Indore street culture — Malwi is the informal tongue of India's cleanest city" },
    ],
    keyFigures: "Rani Ahilyabai Holkar (patron of Malwi folk culture), Balkrishna Sharma 'Navin' (Malwi-influenced Hindi poet), Shayar Shamsher Bahadur Singh (Maach tradition)",
    whereSpoken: ["Indore", "Ujjain", "Dewas", "Ratlam", "Mandsaur", "Shajapur", "Western MP villages"],
    funFact: "The Maach theatrical tradition of Malwa is performed only at night — shows begin after 10 PM and run until dawn. The tradition of night-long theatrical performance is tied to the agricultural calendar: performances were held after harvest was done, when the community had time and energy for culture.",
    era: "Evolved 8th–12th century CE from Apabhramsha. Maach tradition: 17th century CE.",
    relatedLangs: ["Mewari (Rajasthani)", "Nimadi", "Standard Hindi", "Marwari"],
    threatLevel: "Stable in rural Malwa; urban youth increasingly use standardised Hindi. Maach theatrical tradition declining in practitioner numbers.",
    writingSystem: "Primarily oral. When written, uses standard Devanagari. No distinct Malwi script.",
  },

  // ─── 3. BUNDELI ───────────────────────────────────────────────────────────
  {
    id: "bundeli",
    name: "Bundeli (Bundelkhandi)",
    nativeName: "बुन्देली",
    family: "Indo-European",
    branch: "Indo-Aryan → Central Zone",
    script: "Devanagari",
    speakers: "~10–12 million",
    speakersInMP: "8–9 million (north-central MP)",
    region: "Sagar · Chhatarpur · Panna · Damoh · Tikamgarh · Niwari · Datia · Vidisha",
    status: "Regional",
    vitality: "Stable",
    colors: ["#C77DFF", "#9D4EDD", "#E0AAFF"],
    gradient: "linear-gradient(135deg,#10002B,#3C096C,#7B2FBE,#C77DFF)",
    icon: "🏰",
    mood: "Heroic · Poetic · Defiant",
    desc: "The language of Chandela warriors, diamond mines, and Khajuraho's builders — Bundeli carries 1,000 years of martial poetry, epic ballads, and a landscape that shaped its uncompromising character.",
    history: `Bundeli is the language of the Bundelkhand region — the rocky, drought-prone, historically isolated plateau between the Vindhya Range and the Yamuna that has produced some of India's most extraordinary warrior cultures and architectural achievements. The language evolved from the same Apabhramsha source as Hindi but developed distinct features through the isolation of the Bundelkhand terrain and the distinct political history of the region.

The Chandela dynasty (9th–13th century CE) — builders of Khajuraho — ruled from what is now Chhatarpur and Panna, and Bundeli oral tradition carries their memory in epic ballads called Alha-Udal — the story of the warrior heroes Alha and Udal who served the Chandela king Paramardideva. The Alha is one of the longest oral epics in the world — 52 chapters, sung from memory by bardic performers called Alha singers. It is the Bundeli equivalent of the Mahabharata — a complete martial cosmology in oral form.

The Bundela Rajputs, who succeeded the Chandelas and built Orchha and Datia in the 16th century, further deepened Bundeli's heroic literary tradition. The Ram Raja temple at Orchha — where Ram is worshipped as a king — and the associated devotional poetry produced by Bundela court poets represent Bundeli's literary peak. Tulsidas spent significant time in Chitrakoot (Bundeli-speaking territory) while writing the Ramcharitmanas, and the Bundeli idiom influenced his composition. The freedom fighter Rani Lakshmi Bai of Jhansi — whose story is central to Indian nationalist mythology — spoke Bundeli as her mother tongue. Subhadra Kumari Chauhan's poem 'Jhansi ki Rani' encodes Bundeli heroic vocabulary and cadence in its famous lines.`,
    literature: `The Alha-Udal epic is Bundeli's greatest literary achievement — an oral epic of 250,000+ lines still performed by professional singers called Alhait. A full performance takes multiple nights. The epic has been collected in written form (most famously by Charles Elliot in 1865) but continues as oral tradition.

Court poets of the Bundela kings produced extensive devotional and heroic poetry in Bundeli and Braj Bhasha. The Bundeli folk song tradition includes the Bihula (monsoon songs), Sohar (birth songs), Vidai (wedding farewell songs), and the Birha — a song of longing sung by women when their husbands go to work in distant cities, a tradition continuing today as Bundelkhand's water scarcity drives migration.`,
    distinctFeatures: [
      "Uses 'to' as a discourse particle constantly — 'kya to', 'fir to', 'toh phir' — creating a rhetorical momentum",
      "Retroflex sounds are stronger and more frequent than standard Hindi — a harder, more percussive phonology",
      "Masculine nouns often use '-u' suffix: 'paanu' (water), 'gaanu' (song), 'haathu' (hand)",
      "Heroic vocabulary richly developed — dozens of words for types of combat, warrior roles, martial virtues with no Hindi equivalents",
      "Diamond mining vocabulary unique to Bundeli: 50+ words for diamond qualities, extraction methods, geological formations",
    ],
    phrases: [
      { phrase: "हमाओ बुन्देलखण्ड अमर रहे!", romanised: "Hamao Bundelkhand amar rahe!", meaning: "Our Bundelkhand lives forever! — the region's identity declaration" },
      { phrase: "अरे यार, खाबे चलो।", romanised: "Are yaar, khaabe chalo.", meaning: "Come on friend, let's go eat — Bundeli 'khaabe' (infinitive for eating) is distinct from Hindi 'khana'" },
      { phrase: "का बात करत हो?", romanised: "Ka baat karat ho?", meaning: "What are you saying? — 'ka' for 'kya' is characteristic Bundeli" },
      { phrase: "इत्ती सी बात पे इत्तो बड़ो झगड़ा।", romanised: "Itti si baat pe itto bado jhagda.", meaning: "Such a big fight over such a small matter — 'itti/itto' (this much) is a Bundeli signature" },
    ],
    images: [
      { url: "https://tse1.mm.bing.net/th/id/OIP.46fiYp5Hz0ReRwB2fr_02QHaDz?rs=1&pid=ImgDetMain&o=7&rm=3", caption: "Orchha — the Bundeli heartland, where the language was court tongue for the Bundela kings" },
      
    ],
    keyFigures: "Rani Lakshmi Bai (spoke Bundeli), Tulsidas (wrote in Chitrakoot, Bundeli territory), Subhadra Kumari Chauhan (encoded Bundeli heroism in Hindi poetry), Isurdas (Bundeli Bhakti poet)",
    whereSpoken: ["Sagar", "Chhatarpur", "Panna", "Damoh", "Tikamgarh", "Niwari", "Datia", "Vidisha", "Orchha"],
    funFact: "The Alha-Udal epic of Bundelkhand is over 250,000 lines long — making it longer than the Mahabharata's main narrative. Professional Alha singers (Alhait) memorise 52+ chapters without any written text. The epic has never been fully translated into English.",
    era: "Evolved 11th–13th century. Chandela dynasty records: 9th century CE. Alha epic: 12th century CE.",
    relatedLangs: ["Bagheli", "Braj Bhasha", "Standard Hindi", "Awadhi"],
    threatLevel: "Stable but under pressure from standardised Hindi media. Alha tradition declining as professional singers age without successors. Bundelkhand water crisis driving youth migration, disrupting oral transmission.",
    writingSystem: "Devanagari. Historically also written in Kaithi script (used in legal documents during British period).",
  },

  // ─── 4. GONDI ─────────────────────────────────────────────────────────────
  {
    id: "gondi",
    name: "Gondi",
    nativeName: "கோண்டி / Gondi",
    family: "Dravidian",
    branch: "South-Central Dravidian",
    script: "Gondi script (historical) + Devanagari (modern) + GUNJALA Gondi (Unicode 2019)",
    speakers: "~3 million",
    speakersInMP: "~1.2 million (Gond communities in forest districts)",
    region: "Mandla · Dindori · Balaghat · Seoni · Chhindwara · Betul",
    status: "Tribal",
    vitality: "Declining",
    colors: ["#52B788", "#40916C", "#95D5B2"],
    gradient: "linear-gradient(135deg,#052612,#1B4332,#2D6A4F,#52B788)",
    icon: "🌿",
    mood: "Ancient · Forest-Born · Disappearing",
    desc: "A Dravidian language in the heart of Hindi country — Gondi is the oldest surviving language in MP, spoken by the Gond tribe whose kingdom once covered half of Central India.",
    history: `Gondi is the most linguistically significant language in Madhya Pradesh — because it is Dravidian, not Indo-Aryan. In a state where every other major language descends from Sanskrit, Gondi descends from the proto-Dravidian language family that predates the Indo-Aryan migration into the subcontinent. The presence of a Dravidian language deep in the heart of the Hindi belt is a linguistic survival from the pre-Vedic period, when Dravidian languages may have been spoken across a much larger area of the subcontinent.

The Gond people were the dominant political power in Central India before the Mughal period. The Gond kingdoms — Garha-Mandla (Mandla district), Deogarh (Chhindwara), Kherla (Betul), and Chanda (Maharashtra) — controlled territory across 6 modern states from the 14th to 18th centuries. The Gondwana region (now split between MP, Chhattisgarh, Jharkhand, and Maharashtra) takes its name from the Gond people. Geologically, the ancient supercontinent Gondwana — which existed 500 million years ago — was named after this region because the oldest exposed Gondwana rock in the world is found here.

Rani Durgavati — the Gond queen of Garha-Mandla — fought and died in battle against Akbar's Mughal forces in 1564, defending her kingdom with an army that is documented to have used elephants and forest guerrilla tactics. She is one of the earliest documented female military commanders in Indian history. Her story is preserved in Gondi oral tradition and in Hindi records.

Gondi's linguistic survival is remarkable given 400 years of political subordination, forced acculturation, and the dominance of Hindi. The language survived because the Gond communities inhabit dense forest regions where geographical isolation preserved their distinct cultural and linguistic identity.`,
    literature: `Gondi has a rich oral literature: creation myths, clan histories, spirit-communication songs (called Karma songs), harvest rituals, and an entire oral legal tradition (community dispute resolution through formal verse-argument). The Parrham song tradition — performed by the Pardhan Gond community who serve as genealogists and oral historians — contains the most complex Gondi oral literature, with some epic sequences running to hundreds of verses.

Written Gondi literature is very recent. The Gunjala Gondi script — developed in the 1920s–1940s by community scholar Munshi Mangal Singh Masaram — received Unicode inclusion in 2019, making it the newest script to enter the Unicode standard. This digital recognition is being used by activists to revitalise written Gondi.`,
    distinctFeatures: [
      "Dravidian verb-final sentence structure (SOV) — identical to Telugu and Tamil, completely unlike Hindi's flexible order",
      "No grammatical gender (unlike Hindi's masculine/feminine system) — Gondi uses animate/inanimate distinction instead",
      "Retroflex phonemes are significantly more numerous than Hindi — several sounds with no equivalent in Indo-Aryan languages",
      "Agglutinative morphology: one Gondi word can carry what requires an entire Hindi sentence (subject, object, tense, aspect, evidentiality)",
      "Extensive nature vocabulary: 200+ words for forest, soil, weather, and animal behaviour patterns with no Hindi equivalents",
    ],
    phrases: [
      { phrase: "Namasté nai, Johar!", romanised: "Johar!", meaning: "'Johar' is the Gondi greeting — used instead of Namaskar. It means 'I salute the divine in you'" },
      { phrase: "Nāl ēk pōyā.", romanised: "Nāl ēk pōyā.", meaning: "Let us go together — the communal phrasing reflects Gondi society's collective orientation" },
      { phrase: "Pen penḍā.", romanised: "Pen pendā.", meaning: "The spirit speaks / The deity is present — used to begin ritual songs and forest ceremonies" },
      { phrase: "Gondwana amar rahe.", romanised: "Gondwana amar rahe.", meaning: "May Gondwana live forever — the political and cultural identity declaration of the Gond people" },
    ],
    images: [
      { url: "https://i.pinimg.com/200x150/0e/33/b5/0e33b58cb91fcf9c6478a33841534c89.jpg", caption: "Gondi Gunjala script — the indigenous writing system, added to Unicode in 2019" },
      { url: "https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2015/11/03/Pictures/gondi-language_0a346298-823a-11e5-8fe0-54c761f0e0c7.jpg", caption: "Gondi script sample — a Dravidian language written in its own indigenous alphabet" },
      { url: "https://tse2.mm.bing.net/th/id/OIP.iRYVEw-YRQFqX47qz7IwUAHaEn?rs=1&pid=ImgDetMain&o=7&rm=3", caption: "Gond community gathering, Mandla — the language is transmitted through ceremony and song" },
    ],
    keyFigures: "Rani Durgavati (Gond queen, resisted Mughals 1564), Munshi Mangal Singh Masaram (creator of Gunjala Gondi script), Jangarh Singh Shyam (Gond artist who encoded cultural knowledge in painting)",
    whereSpoken: ["Mandla", "Dindori", "Balaghat", "Seoni", "Chhindwara", "Betul", "Forest villages throughout"],
    funFact: "The ancient supercontinent Gondwana — which existed 500 million years ago and split into South America, Africa, India, Australia, and Antarctica — was named after the Gond people of Madhya Pradesh, because the oldest exposed Gondwana rock is found in their homeland. The Gond people gave their name to a geological era.",
    era: "Proto-Dravidian origin: estimated 3,000–4,000 BCE. Gond kingdoms: 14th–18th century CE. Gunjala script: 1920s–1940s. Unicode inclusion: 2019.",
    relatedLangs: ["Telugu (distant relative)", "Kolami", "Kurukh", "Koya — all South-Central Dravidian"],
    threatLevel: "Declining — younger Gond generation increasingly monolingual in Hindi. Language shift is rapid in towns. Forest communities maintain better transmission. Estimated 30–40% intergenerational transmission.",
    writingSystem: "Three systems coexist: (1) Gunjala Gondi script (traditional, indigenous, now in Unicode), (2) Devanagari (most commonly used today), (3) Telugu script (in Andhra regions). No dominant single standard.",
  },

  // ─── 5. URDU ──────────────────────────────────────────────────────────────
  {
    id: "urdu",
    name: "Urdu",
    nativeName: "اُردُو",
    family: "Indo-European",
    branch: "Indo-Aryan → Western Hindi → Hindustani → Urdu register",
    script: "Nastaliq (Perso-Arabic script, written right-to-left)",
    speakers: "~70 million (L1 globally)",
    speakersInMP: "~2–3 million (concentrated in Bhopal, Gwalior, Burhanpur)",
    region: "Bhopal (Old City) · Gwalior · Burhanpur · Jabalpur · Urban Muslim communities",
    status: "Regional",
    vitality: "Stable",
    colors: ["#4A90D9", "#2575D0", "#ADD8E6"],
    gradient: "linear-gradient(135deg,#000814,#001D3D,#003566,#4A90D9)",
    icon: "✍️",
    mood: "Poetic · Refined · Nawabi",
    desc: "The language of the Nawabs of Bhopal — Urdu in MP carries the fragrance of 200 years of court culture, the finest ghazal tradition in Central India, and a Nastaliq calligraphy that is itself a visual art.",
    history: `Urdu's presence in Madhya Pradesh is inseparable from the Nawabi culture of Bhopal and the Mughal administrative legacy of Gwalior. The Nawabs of Bhopal — who ruled from 1724 to 1949 — established one of the most sophisticated Urdu literary cultures in Central India. Their court produced poetry, official records, personal correspondence, and historical chronicles entirely in Urdu. The four Nawab Begums who ruled successively (1819–1926) were themselves educated in Urdu literature and patronised poets and scholars. The Bhopal Nawab's cultural output in Urdu includes significant original ghazal collections and prose.

Burhanpur — on the Tapti river in southern MP — was a major Mughal provincial capital in the 16th–17th centuries and the administrative base for the Deccan campaigns. Emperor Shah Jahan's wife Mumtaz Mahal died in Burhanpur in 1631 while accompanying his campaign — the original plan was to build the Taj Mahal in Burhanpur's gardens, before the site was moved to Agra. The Urdu literary culture of Burhanpur carries this Mughal heritage in its archaic vocabulary and formal poetic conventions.

Urdu and Hindi are grammatically identical at a spoken level (both descend from Khari Boli) but diverge completely in script, formal vocabulary (Urdu draws from Persian and Arabic; Hindi from Sanskrit), and literary tradition. The artificial distinction between the two languages was formalised during the 19th century colonial period as a political-religious identity marker. In practice, the conversational language of Bhopal's streets — mixing Urdu and Hindi vocabulary in Devanagari and Roman scripts simultaneously — is closer to the historical Hindustani that predates the split.`,
    literature: `Urdu poetry in Bhopal produced significant ghazal writers in the 19th–20th centuries. The Bhopal Nawabs' court poets include Mirza Shauq (not the Lucknow Shauq) and several local poets whose diwan (collected verse) are preserved in Bhopal archives. The mushaira (poetry recitation gathering) tradition remains active in Bhopal's old city — monthly mushairas at private homes are an unbroken cultural institution.

The Urdu newspaper tradition in MP includes Rahnuma-e-Deccan (Bhopal) which operated from the 1920s and the Anjam-e-Bhopal. Contemporary Urdu journalism in MP is primarily digital.`,
    distinctFeatures: [
      "Bhopal Urdu has distinct Dakhini (Deccan) influences — archaic Persian vocabulary preserved from the Mughal period",
      "Nastaliq script (right-to-left) requires complete reversal of reading direction — a distinct cognitive experience from Devanagari",
      "Urdu's formal register uses Persian and Arabic loanwords with no Hindi equivalents — creating a parallel vocabulary for abstract concepts",
      "Ghazal metre system (radeef, qafia, maqta) creates a complex prosody unlike any system in Hindi poetry",
      "Burhanpur Urdu preserves 17th-century Mughal court vocabulary not found in contemporary Pakistani Urdu",
    ],
    phrases: [
      { phrase: "آداب عرض ہے", romanised: "Aadaab arz hai", meaning: "I present my respects — the formal Urdu greeting used in Bhopal's old city still today", script: "اردو" },
      { phrase: "दिल से दुआ है।", romanised: "Dil se dua hai.", meaning: "A prayer from the heart — mixed Urdu-Hindi as spoken in Bhopal's streets" },
      { phrase: "بہت خوب! بہت خوب!", romanised: "Bahut khoob!", meaning: "Excellent! Excellent! — the Urdu expression of appreciation at a mushaira", script: "اردو" },
      { phrase: "शहर-ए-भोपाल का अंदाज़ निराला है।", romanised: "Shahar-e-Bhopal ka andaaz niraala hai.", meaning: "The city of Bhopal has a unique style — mixing Urdu 'shahar' (city) with Hindi grammar" },
    ],
    images: [
      { url: "https://i.pinimg.com/736x/ca/cf/97/cacf979f78da1a9b1638ee9aae41063d.jpg", caption: "Nastaliq Urdu calligraphy — the script is itself considered a visual art form" },
      { url: "https://images.creativemarket.com/0.1.0/ps/4837007/1365/910/m1/fpnw/wm1/set-of-ancient-alphabet-symbols-of-urdu-language-on-old-parchment-.jpg?1533023045&s=fcf7393faa140d81d91946295f06e21d", caption: "urdu alphbets letter" },
      { url: "https://img.freepik.com/premium-vector/urdu-alphabets-illustration_774837-106.jpg?w=2000", caption: "alphets style of urdu language" },
    ],
    keyFigures: "Nawab Shah Jahan Begum (Urdu writer, ruler of Bhopal), Munshi Premchand (wrote in both Urdu and Hindi, from UP but MP connection), Allama Iqbal (performed at Bhopal mushairas)",
    whereSpoken: ["Bhopal Old City (Chowk, Itwara, Shahjahanabad)", "Gwalior", "Burhanpur", "Jabalpur", "Urban Muslim neighbourhoods in major MP cities"],
    funFact: "Mumtaz Mahal — for whom the Taj Mahal was built — died in Burhanpur, MP in 1631. The original plan was to build the Taj in Burhanpur's gardens on the Tapti river bank. The site was changed to Agra because the Tapti's unstable banks could not support the structure. The Taj Mahal could have been in Madhya Pradesh.",
    era: "Urdu as distinct register: 16th–18th century. Bhopal court Urdu tradition: 1724 CE. Burhanpur Mughal Urdu: 16th century CE.",
    relatedLangs: ["Hindi (grammatically identical spoken form)", "Persian (source of formal vocabulary)", "Arabic (source of religious vocabulary)", "Dakhini Urdu (southern variant)"],
    threatLevel: "Stable but generationally declining. Younger speakers often read in Devanagari, not Nastaliq. Nastaliq literacy declining rapidly. Mushaira tradition maintained by older generation.",
    writingSystem: "Nastaliq — a calligraphic variant of Perso-Arabic script. Written right-to-left. Cursive, highly stylised. Considered one of the most beautiful scripts in the world. Distinct from the Naskh script used in printed Arabic.",
  },

  // ─── 6. BHILI / BHILODI ───────────────────────────────────────────────────
  {
    id: "bhili",
    name: "Bhili (Bhilodi)",
    nativeName: "ભીલી / भीली",
    family: "Indo-European",
    branch: "Indo-Aryan → Western Zone → Bhili subgroup",
    script: "Devanagari (when written) — primarily oral",
    speakers: "~12 million (all Bhili varieties combined)",
    speakersInMP: "~2.5–3 million (western and south-western MP)",
    region: "Jhabua · Alirajpur · Dhar · Khargone · Barwani · Badwani",
    status: "Tribal",
    vitality: "Stable",
    colors: ["#E9C46A", "#F4A261", "#FF6B6B"],
    gradient: "linear-gradient(135deg,#1A0A00,#3D1C02,#F4A261,#E9C46A)",
    icon: "🏹",
    mood: "Wild · Free · Ancient",
    desc: "The tongue of the Bhil people — among India's oldest tribal communities, whose ancestors painted the Bhimbetka rock shelters 30,000 years ago and whose language has no written form by choice, only voice.",
    history: `The Bhil people are considered among the original pre-Aryan inhabitants of the Indian subcontinent, with a genetic and cultural lineage that predates the Indo-Aryan migrations. The rock shelters of Bhimbetka (UNESCO World Heritage Site, near Bhopal) — with 30,000-year-old cave paintings — are attributed by archaeologists to the ancestors of the Bhil and related communities. If this attribution is correct, the Bhil people's ancestors have been creating art in MP for 30,000 years continuously.

Bhili is classified as an Indo-Aryan language, but linguists note significant substrate influence from earlier, possibly Dravidian or Munda, languages — indicating that the Bhil community adopted an Indo-Aryan variety while preserving older linguistic features from a pre-Indo-Aryan tongue. The language is a continuum across Rajasthan, Gujarat, and western MP, with Jhabua-Alirajpur Bhili (called Bhilodi or Bhili-Bhilodi) being the most studied variety.

The Bhil people were archers of legendary skill — the Mahabharata's character Ekalavya, who teaches himself archery from a clay statue of Drona, is interpreted by many scholars and Bhil communities themselves as a Bhil archer. The story of Ekalavya — who is asked to cut off his thumb as guru-dakshina, sacrificing his archery skill, when his excellence threatens the Brahmin archer Arjuna's supremacy — is read by Bhil communities as a foundational narrative of their marginalisation. It is recited in oral form in Bhili today.

The Bhagoria festival — the unique Bhil courtship tradition where gulaal-application constitutes a marriage proposal — is conducted entirely in Bhili. The Badwa (healer) who guides Pithora painting ritual speaks the ritual invocations in Bhili. The language is inseparable from the community's spiritual practices.`,
    literature: `Bhili oral literature is extraordinarily rich. The Pithoravat — oral narrative about the Pithora horse deity — is the most complex, requiring a specialist reciter. Seasonal agricultural songs, birth songs, the Bhagoria courtship songs, and funeral dirges each have distinct melodic and linguistic registers. The instruments that accompany Bhili song — the tadpatra (bamboo flute) and the mandar (drum) — have specific musical modes associated with specific narrative types.

The community has largely resisted writing the language down — elders argue that writing kills the living quality of oral tradition, embedding it in a fixed form that cannot breathe and adapt. This principled orality is itself a philosophical position.`,
    distinctFeatures: [
      "Extensive use of retroflex sounds — more retroflex phonemes than standard Hindi",
      "Verb agreement includes evidentiality — different verb forms for things seen vs. things heard vs. things inferred",
      "No standard written form — the community's choice, not a limitation",
      "Colour vocabulary encoded with ritual significance — colour names in Bhili have spiritual associations not present in Hindi",
      "Bhagoria courtship language has a distinct register — specific vocabulary used only during the festival period",
    ],
    phrases: [
      { phrase: "Ayo, amara gaon!", romanised: "Ayo, amara gaon!", meaning: "Come, our village! — a welcoming phrase, 'ayo' (come) vs Hindi 'aao'" },
      { phrase: "Toda pani piya?", romanised: "Toda pani piya?", meaning: "Have you drunk water yet? — the Bhili greeting that mirrors Malwi food-greeting custom" },
      { phrase: "Johar, bhai.", romanised: "Johar, bhai.", meaning: "Shared greeting with Gondi — 'Johar' is used across several Central Indian tribal communities" },
      { phrase: "Bhil bhoomi hamari.", romanised: "Bhil bhoomi hamari.", meaning: "Bhil land is ours — land-identity statement that anchors the community's political consciousness" },
    ],
    images: [
      { url: "https://www.omniglot.com/images/writing/bhili_dev.gif", caption: "Bhil community, Jhabua — one of India's oldest tribal groups, whose ancestors painted Bhimbetka" },
      { url: "https://www.omniglot.com/images/writing/bhili_dev.gif", caption: "Bhimbetka rock shelters — 30,000-year-old paintings attributed to Bhil ancestors, UNESCO World Heritage Site" },
      { url: "https://www.omniglot.com/images/writing/bhili_dev.gif", caption: "Bhagoria festival, Jhabua — conducted entirely in Bhili, the language's cultural heartbeat" },
    ],
    keyFigures: "Ekalavya (mythological Bhil archer — the community's foundational narrative), Shabari (another mythological Bhil figure from the Ramayana — offered Ram berries she had pre-tasted), Govind Giri (19th-century Bhil religious leader who led the Bhil tribal uprising)",
    whereSpoken: ["Jhabua", "Alirajpur", "Dhar", "Khargone", "Barwani", "Western Nimar region"],
    funFact: "The Bhimbetka rock shelters — 30,000-year-old cave paintings in MP, 45 km from Bhopal — are attributed to ancestors of the Bhil community. If this lineage is continuous, the Bhil people's ancestors have been creating art in Madhya Pradesh for longer than any other community in the world.",
    era: "Bhil community presence: 30,000+ years (Bhimbetka attribution). Bhili as distinct Indo-Aryan variety: estimated 1,500–2,000 years. First documented: British colonial linguistic surveys, 1860s.",
    relatedLangs: ["Wagdi (Rajasthan)", "Gamit (Gujarat)", "Tadvi Bhili (Gujarat)", "Nahali (possibly language isolate — spoken near Bhili areas)"],
    threatLevel: "Stable in rural western MP; moderate in urban areas. Language school education in Hindi creates language shift. Community elders maintain Bhili as identity language.",
    writingSystem: "No traditional script. Uses Devanagari when written. Community has actively resisted standardisation and writing, considering orality culturally superior.",
  },

  // ─── 7. BAGHELI ───────────────────────────────────────────────────────────
  {
    id: "bagheli",
    name: "Bagheli",
    nativeName: "बघेली",
    family: "Indo-European",
    branch: "Indo-Aryan → Eastern Hindi → Awadhi group",
    script: "Devanagari",
    speakers: "~5–6 million",
    speakersInMP: "4–5 million (eastern MP)",
    region: "Rewa · Satna · Sidhi · Shahdol · Umaria · Anuppur",
    status: "Regional",
    vitality: "Stable",
    colors: ["#06D6A0", "#118AB2", "#73D2DE"],
    gradient: "linear-gradient(135deg,#00080A,#023047,#126E82,#06D6A0)",
    icon: "🌄",
    mood: "Gentle · Flowing · Poetic",
    desc: "The language of the Vindhya-Baghelkhand highlands — gentle, Awadhi-influenced, and home to the Alha epic's eastern tradition and the tiger forests of Bandhavgarh.",
    history: `Bagheli is spoken in the Baghelkhand region of eastern MP — the plateau between the Vindhya Range and the Son river valley. Named for the Baghel Rajputs who ruled from Rewa, the language evolved from Awadhi (the literary language of Tulsidas's Ramcharitmanas) and remains closer to Awadhi than the other MP dialects. The Rewa state — whose rulers were the Baghel Rajputs — maintained a sophisticated court culture; the white tigers of Rewa (the genetic lineage that produced all white tigers in captivity worldwide) were discovered in the Baghelkhand forests in 1951 by Maharaja Martand Singh.

The Vindhya plateau in Bagheli-speaking territory contains some of India's most important tiger habitat — Bandhavgarh and Sanjay-Dubri reserves are in the Bagheli heartland. The language therefore carries an ecological vocabulary — for forest, animal behaviour, seasonal change, and tribal-forest relationships — that is extraordinarily rich.

Bagheli's gentler phonology compared to Bundeli reflects the eastern MP landscape: less rocky and drought-prone, more forested and river-cut. The language has an unhurried quality that matches the Son river valley's slower pace.`,
    literature: `Bagheli folk literature includes the eastern branch of the Alha-Udal tradition and a distinct tradition of nature poetry encoding the Vindhya forest ecology. The Bagheli Sohar (birth songs) and Banna-Banni (wedding songs) are among the most melodically complex in MP. The Birha song — a genre of longing sung by women when husbands migrate for work — has an eastern MP variant with a distinct Bagheli melodic line that musicologists consider among the most emotionally complex folk song forms in North India.`,
    distinctFeatures: [
      "Closer to Awadhi than any other MP dialect — the verb 'to be' is 'rahe' not 'hai' in habitual contexts",
      "Softer retroflex sounds than Bundeli — the language has a gentler phonological profile",
      "Rich forest and wildlife vocabulary — ecological knowledge encoded in specific terminology with no Hindi equivalents",
      "Tiger and hunting vocabulary uniquely developed — specific words for tiger movement patterns, footprint types, territorial behaviour",
    ],
    phrases: [
      { phrase: "का हाल बा?", romanised: "Ka haal ba?", meaning: "How are you? — 'ba' for 'hai' is characteristic Bagheli" },
      { phrase: "बाघ आइल रहा रात।", romanised: "Baagh aail raha raat.", meaning: "The tiger came last night — tiger proximity is a normal Bagheli conversational topic" },
      { phrase: "जंगल महान बा।", romanised: "Jangal mahaan ba.", meaning: "The forest is great — the nature-reverence encoded in everyday Bagheli speech" },
      { phrase: "धीरे धीरे चलो, जल्दी पहुँचोगे।", romanised: "Dheere dheere chalo, jaldi pahunchoge.", meaning: "Walk slowly, you'll arrive quickly — a Bagheli proverb about patience" },
    ],
    images: [
      { url: "", caption: "Bandhavgarh tiger reserve — in the heart of Bagheli-speaking territory" },
      { url: "", caption: "Rewa — capital of the Baghel Rajputs, whose name defines the Baghelkhand language region" },
      { url: "", caption: "Vindhya plateau — the landscape that shaped Bagheli's gentle, forest-inflected character" },
    ],
    keyFigures: "Maharaja Martand Singh Ju Deo (last Maharaja of Rewa, discovered white tigers), Kedar Nath Mishra 'Prabhat' (Bagheli poet), Chandrashekhar Dubey (folk music scholar)",
    whereSpoken: ["Rewa", "Satna", "Sidhi", "Shahdol", "Umaria", "Anuppur", "Eastern Vindhya region"],
    funFact: "The white tigers of Rewa — discovered by Maharaja Martand Singh in 1951 — are all descended from a single Bagheli-territory tiger cub named Mohan. Every white tiger in every zoo in the world today is a descendant of this one tiger from eastern MP's Bagheli heartland.",
    era: "Evolved from Awadhi: 14th–16th century CE. Baghel Rajput kingdom: 14th century CE.",
    relatedLangs: ["Awadhi", "Chhattisgarhi", "Bundeli", "Standard Hindi"],
    threatLevel: "Stable — less urban pressure than Malwi or Bundeli. Forest community transmission strong. Digital presence minimal.",
    writingSystem: "Devanagari. No distinct script. Historically recorded in Kaithi in British administrative documents.",
  },
];

// ─── LANGUAGE STATS ───────────────────────────────────────────────────────────

export const LANG_STATS = [
  { value: "50+", label: "Languages & Dialects", sub: "Spoken across MP's 55 districts", icon: "🗣️" },
  { value: "46", label: "Tribal Communities", sub: "Each with distinct linguistic identity in MP", icon: "🏹" },
  { value: "Dravidian", label: "Gondi's Family", sub: "A Dravidian language in the heart of the Hindi belt", icon: "🌿" },
  { value: "30,000", label: "Years of Bhili", sub: "Bhil ancestors painted Bhimbetka cave shelters", icon: "🖼️" },
  { value: "2019", label: "Gondi Unicode", sub: "Gunjala Gondi script added to Unicode — newest in the world", icon: "💻" },
  { value: "250,000+", label: "Alha Lines", sub: "Bundeli oral epic — longer than the Mahabharata's main text", icon: "📜" },
];

// ─── LANGUAGE FAMILY TREE ─────────────────────────────────────────────────────

export const LANG_FAMILIES = [
  {
    family: "Indo-European · Indo-Aryan",
    color: "#FF7043",
    langs: ["Hindi", "Malwi", "Bundeli", "Bagheli", "Urdu", "Bhili"],
  },
  {
    family: "Dravidian",
    color: "#52B788",
    langs: ["Gondi", "Kolami (minor)", "Koya (eastern MP)"],
  },
  {
    family: "Austro-Asiatic · Munda",
    color: "#C77DFF",
    langs: ["Korku", "Sauria Paharia (eastern MP)"],
  },
];

// ─── PHRASE COMPARISON (same meaning across languages) ────────────────────────

export const CROSS_PHRASES = [
  {
    meaning: "Welcome / Greeting",
    english: "Welcome / Hello",
    variants: [
      { lang: "Hindi", text: "नमस्ते", romanised: "Namaste", color: "#FF7043" },
      { lang: "Malwi", text: "राम राम", romanised: "Ram Ram", color: "#F4A261" },
      { lang: "Bundeli", text: "जुहार", romanised: "Juhaar", color: "#C77DFF" },
      { lang: "Gondi", text: "जोहार", romanised: "Johar", color: "#52B788" },
      { lang: "Bhili", text: "जोहार", romanised: "Johar", color: "#E9C46A" },
      { lang: "Urdu", text: "آداب", romanised: "Aadaab", color: "#4A90D9" },
    ],
  },
  {
    meaning: "The forest / jungle",
    english: "Forest",
    variants: [
      { lang: "Hindi", text: "जंगल", romanised: "Jangal", color: "#FF7043" },
      { lang: "Malwi", text: "जंगल / बन", romanised: "Jangal / Ban", color: "#F4A261" },
      { lang: "Gondi", text: "dand", romanised: "dand", color: "#52B788" },
      { lang: "Bhili", text: "वन / जंगल", romanised: "Van / Jangal", color: "#E9C46A" },
      { lang: "Bagheli", text: "जंगल / बन", romanised: "Jangal / Ban", color: "#06D6A0" },
    ],
  },
  {
    meaning: "River / water body",
    english: "River",
    variants: [
      { lang: "Hindi", text: "नदी", romanised: "Nadi", color: "#FF7043" },
      { lang: "Malwi", text: "नदिया", romanised: "Nadiya", color: "#F4A261" },
      { lang: "Bundeli", text: "नदी / नर", romanised: "Nadi / Nar", color: "#C77DFF" },
      { lang: "Gondi", text: "vāgu", romanised: "vaagu", color: "#52B788" },
      { lang: "Urdu", text: "دریا", romanised: "Darya", color: "#4A90D9" },
    ],
  },
];