// ─── MP CURRENT STATUS DATA ────────────────────────────────────────────────
// Last updated: March 2026 | Sources: Wikipedia, IBEF, MP Govt, Census

// ─── TYPES ────────────────────────────────────────────────────────────────────

export interface Minister {
  name: string;
  nameHindi: string;
  role: "Chief Minister" | "Deputy CM" | "Cabinet Minister" | "Minister of State";
  portfolio: string[];
  constituency: string;
  party: string;
  since: string;
  icon: string;
}

export interface District {
  name: string;
  nameHindi: string;
  division: string;
  hq: string;
  area: number;         // km²
  population: number;   // 2011 census
  tehsils: number;
  famous: string;       // known for
  icon: string;
}

export interface Division {
  name: string;
  hq: string;
  districts: string[];
  color: string;
  icon: string;
  region: string;
}

export interface StatSymbol {
  category: string;
  name: string;
  nameHindi: string;
  scientific?: string;
  description: string;
  icon: string;
  status?: string;
}

export interface KeyStat {
  label: string;
  value: string;
  unit: string;
  icon: string;
  color: string;
  context: string;
  rank?: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: string;
  category: "award" | "economy" | "infrastructure" | "social" | "environment";
}

export interface MajorProject {
  name: string;
  description: string;
  investment: string;
  status: string;
  district: string;
  icon: string;
  sector: string;
}

// ─── GOVERNMENT ───────────────────────────────────────────────────────────────

export const CHIEF_MINISTER: Minister = {
  name: "Dr. Mohan Yadav",
  nameHindi: "डॉ. मोहन यादव",
  role: "Chief Minister",
  portfolio: [
    "Home & Jail",
    "General Administration",
    "Industrial Policy & Investment Promotion",
    "Public Relations",
    "Narmada Valley Development",
    "Aviation",
    "Mineral Resources",
    "Public Service Management",
  ],
  constituency: "Ujjain South",
  party: "BJP (Bharatiya Janata Party)",
  since: "13 December 2023",
  icon: "👤",
};

export const DEPUTY_CMS: Minister[] = [
  {
    name: "Rajendra Shukla",
    nameHindi: "राजेन्द्र शुक्ल",
    role: "Deputy CM",
    portfolio: ["Public Health & Family Welfare", "Medical Education"],
    constituency: "Rewa",
    party: "BJP",
    since: "13 December 2023",
    icon: "👤",
  },
  {
    name: "Jagdish Devda",
    nameHindi: "जगदीश देवड़ा",
    role: "Deputy CM",
    portfolio: ["Finance", "Commercial Taxes", "Planning", "Economics & Statistics"],
    constituency: "Mandsaur",
    party: "BJP",
    since: "13 December 2023",
    icon: "👤",
  },
];

export const CABINET_MINISTERS: Minister[] = [
  {
    name: "Kailash Vijayvargiya",
    nameHindi: "कैलाश विजयवर्गीय",
    role: "Cabinet Minister",
    portfolio: ["Urban Development & Housing", "Parliamentary Affairs"],
    constituency: "Indore-1",
    party: "BJP",
    since: "25 December 2023",
    icon: "🏙️",
  },
  {
    name: "Prahlad Singh Patel",
    nameHindi: "प्रह्लाद सिंह पटेल",
    role: "Cabinet Minister",
    portfolio: ["Panchayat & Rural Development", "Labour"],
    constituency: "Narsinghpur",
    party: "BJP",
    since: "25 December 2023",
    icon: "🌾",
  },
  {
    name: "Vijay Shah",
    nameHindi: "विजय शाह",
    role: "Cabinet Minister",
    portfolio: ["Tribal Affairs", "Bhopal Gas Tragedy Relief & Rehabilitation", "Public Assets Management"],
    constituency: "Harsud",
    party: "BJP",
    since: "25 December 2023",
    icon: "🏹",
  },
  {
    name: "Rakesh Singh",
    nameHindi: "राकेश सिंह",
    role: "Cabinet Minister",
    portfolio: ["Public Works Department (PWD)"],
    constituency: "Jabalpur Cantt.",
    party: "BJP",
    since: "25 December 2023",
    icon: "🏗️",
  },
  {
    name: "Rao Uday Pratap Singh",
    nameHindi: "राव उदय प्रताप सिंह",
    role: "Cabinet Minister",
    portfolio: ["Transport", "School Education"],
    constituency: "Huzur",
    party: "BJP",
    since: "25 December 2023",
    icon: "🚌",
  },
  {
    name: "Sampatiya Uikey",
    nameHindi: "संपतिया उइके",
    role: "Cabinet Minister",
    portfolio: ["Public Health Engineering (PHE)"],
    constituency: "Baichha",
    party: "BJP",
    since: "25 December 2023",
    icon: "💧",
  },
  {
    name: "Karan Singh Verma",
    nameHindi: "करण सिंह वर्मा",
    role: "Cabinet Minister",
    portfolio: ["Revenue"],
    constituency: "Ichchhavar",
    party: "BJP",
    since: "25 December 2023",
    icon: "📋",
  },
  {
    name: "Tulsiram Silawat",
    nameHindi: "तुलसीराम सिलावट",
    role: "Cabinet Minister",
    portfolio: ["Water Resources"],
    constituency: "Sanwer",
    party: "BJP",
    since: "25 December 2023",
    icon: "🌊",
  },
  {
    name: "Aidal Singh Kansana",
    nameHindi: "ऐदल सिंह कंसाना",
    role: "Cabinet Minister",
    portfolio: ["Farmers Welfare & Agricultural Development"],
    constituency: "Morena",
    party: "BJP",
    since: "25 December 2023",
    icon: "🌾",
  },
  {
    name: "Nirmala Bhuria",
    nameHindi: "निर्मला भूरिया",
    role: "Cabinet Minister",
    portfolio: ["Women & Child Development"],
    constituency: "Jobat",
    party: "BJP",
    since: "25 December 2023",
    icon: "👩",
  },
  {
    name: "Govind Singh Rajput",
    nameHindi: "गोविंद सिंह राजपूत",
    role: "Cabinet Minister",
    portfolio: ["Food & Civil Supplies"],
    constituency: "Surkhi",
    party: "BJP",
    since: "25 December 2023",
    icon: "🍚",
  },
  {
    name: "Vishwas Sarang",
    nameHindi: "विश्वास सारंग",
    role: "Cabinet Minister",
    portfolio: ["Sports, Youth Affairs & Cooperatives"],
    constituency: "Narela",
    party: "BJP",
    since: "25 December 2023",
    icon: "🏅",
  },
  {
    name: "Narayan Singh Kushwaha",
    nameHindi: "नारायण सिंह कुशवाह",
    role: "Cabinet Minister",
    portfolio: ["Social Justice", "Horticulture", "Food Processing"],
    constituency: "Bhander",
    party: "BJP",
    since: "25 December 2023",
    icon: "🌿",
  },
  {
    name: "Nagar Singh Chouhan",
    nameHindi: "नागर सिंह चौहान",
    role: "Cabinet Minister",
    portfolio: ["Forest", "Environment", "SC Welfare"],
    constituency: "Manawar",
    party: "BJP",
    since: "25 December 2023",
    icon: "🌲",
  },
  {
    name: "Pradyuman Singh Tomar",
    nameHindi: "प्रद्युम्न सिंह तोमर",
    role: "Cabinet Minister",
    portfolio: ["Energy"],
    constituency: "Gwalior",
    party: "BJP",
    since: "25 December 2023",
    icon: "⚡",
  },
  {
    name: "Rakesh Shukla",
    nameHindi: "राकेश शुक्ल",
    role: "Cabinet Minister",
    portfolio: ["Renewable Energy"],
    constituency: "Budhni",
    party: "BJP",
    since: "25 December 2023",
    icon: "☀️",
  },
  {
    name: "Chaitanya Kashyap",
    nameHindi: "चैतन्य काश्यप",
    role: "Cabinet Minister",
    portfolio: ["Micro, Small & Medium Enterprises"],
    constituency: "Ratlam City",
    party: "BJP",
    since: "25 December 2023",
    icon: "🏭",
  },
  {
    name: "Inder Singh Parmar",
    nameHindi: "इन्दर सिंह परमार",
    role: "Cabinet Minister",
    portfolio: ["Higher Education", "Technical Education"],
    constituency: "Sailana",
    party: "BJP",
    since: "25 December 2023",
    icon: "🎓",
  },
  {
    name: "Krishna Gaur",
    nameHindi: "कृष्णा गौर",
    role: "Cabinet Minister",
    portfolio: ["OBC Welfare", "Minority Welfare"],
    constituency: "Govindpura",
    party: "BJP",
    since: "25 December 2023",
    icon: "🤝",
  },
  {
    name: "Dharmendra Lodhi",
    nameHindi: "धर्मेन्द्र लोधी",
    role: "Cabinet Minister",
    portfolio: ["Culture", "Tourism", "Religious Trust & Endowment"],
    constituency: "Damoh",
    party: "BJP",
    since: "25 December 2023",
    icon: "🏛️",
  },
  {
    name: "Dilip Jaiswal",
    nameHindi: "दिलीप जायसवाल",
    role: "Cabinet Minister",
    portfolio: ["Cottage & Village Industries"],
    constituency: "Jabalpur West",
    party: "BJP",
    since: "25 December 2023",
    icon: "🧵",
  },
  {
    name: "Gautam Tetwal",
    nameHindi: "गौतम टेटवाल",
    role: "Cabinet Minister",
    portfolio: ["Skill Development & Employment"],
    constituency: "Badnawar",
    party: "BJP",
    since: "25 December 2023",
    icon: "🛠️",
  },
  {
    name: "Lakhan Singh Patel",
    nameHindi: "लखन सिंह पटेल",
    role: "Cabinet Minister",
    portfolio: ["Animal Husbandry & Dairy"],
    constituency: "Patan",
    party: "BJP",
    since: "25 December 2023",
    icon: "🐄",
  },
  {
    name: "Narayan Singh Pawar",
    nameHindi: "नारायण सिंह पवार",
    role: "Cabinet Minister",
    portfolio: ["Fishermen Welfare", "Fisheries"],
    constituency: "Mhow",
    party: "BJP",
    since: "25 December 2023",
    icon: "🐟",
  },
];

// Governor
export const GOVERNOR = {
  name: "Mangubhai Patel",
  nameHindi: "मंगूभाई पटेल",
  since: "13 July 2021",
  icon: "🏛️",
};

// Assembly Speaker
export const ASSEMBLY_SPEAKER = {
  name: "Narendra Singh Tomar",
  nameHindi: "नरेन्द्र सिंह तोमर",
  since: "December 2023",
  icon: "⚖️",
};

// ─── ADMINISTRATIVE DIVISIONS ─────────────────────────────────────────────────

export const DIVISIONS: Division[] = [
  {
    name: "Bhopal",
    hq: "Bhopal",
    districts: ["Bhopal", "Vidisha", "Raisen", "Rajgarh", "Sehore"],
    color: "#C77DFF",
    icon: "🏛️",
    region: "Central MP",
  },
  {
    name: "Indore",
    hq: "Indore",
    districts: ["Indore", "Dhar", "Jhabua", "Alirajpur", "Barwani", "Burhanpur", "Khandwa", "Khargone"],
    color: "#F4A261",
    icon: "🏙️",
    region: "Western MP (Malwa & Nimar)",
  },
  {
    name: "Ujjain",
    hq: "Ujjain",
    districts: ["Ujjain", "Ratlam", "Mandsaur", "Neemuch", "Shajapur", "Dewas", "Agar-Malwa"],
    color: "#FECA57",
    icon: "🛕",
    region: "Western MP (Malwa)",
  },
  {
    name: "Gwalior",
    hq: "Gwalior",
    districts: ["Gwalior", "Shivpuri", "Guna", "Ashoknagar", "Datia"],
    color: "#E63946",
    icon: "🏰",
    region: "Northern MP (Chambal-Gwalior)",
  },
  {
    name: "Chambal",
    hq: "Morena",
    districts: ["Morena", "Bhind", "Sheopur"],
    color: "#52B788",
    icon: "🐊",
    region: "Northern MP (Chambal Valley)",
  },
  {
    name: "Jabalpur",
    hq: "Jabalpur",
    districts: ["Jabalpur", "Mandla", "Dindori", "Balaghat", "Chhindwara", "Katni", "Narsinghpur", "Seoni"],
    color: "#00B4D8",
    icon: "🌊",
    region: "Central-Eastern MP",
  },
  {
    name: "Narmadapuram",
    hq: "Hoshangabad",
    districts: ["Narmadapuram", "Harda", "Betul"],
    color: "#06D6A0",
    icon: "🌿",
    region: "Central MP (Narmada Valley)",
  },
  {
    name: "Rewa",
    hq: "Rewa",
    districts: ["Rewa", "Satna", "Sidhi", "Singrauli", "Mauganj"],
    color: "#FF6B35",
    icon: "☀️",
    region: "Eastern MP (Vindhya-Baghelkhand)",
  },
  {
    name: "Sagar",
    hq: "Sagar",
    districts: ["Sagar", "Damoh", "Panna", "Chhatarpur", "Tikamgarh", "Niwari"],
    color: "#A78BFA",
    icon: "💎",
    region: "Central-Northern MP (Bundelkhand)",
  },
  {
    name: "Shahdol",
    hq: "Shahdol",
    districts: ["Shahdol", "Anuppur", "Umariya"],
    color: "#F9C74F",
    icon: "🌄",
    region: "Eastern MP (Vindhya highlands)",
  },
];

// ─── ALL 55 DISTRICTS ─────────────────────────────────────────────────────────

export const DISTRICTS: District[] = [
  // BHOPAL DIVISION
  { name: "Bhopal", nameHindi: "भोपाल", division: "Bhopal", hq: "Bhopal", area: 2772, population: 2368145, tehsils: 7, famous: "State capital, lakes, Nawabi heritage, Bharat Bhavan", icon: "🏛️" },
  { name: "Vidisha", nameHindi: "विदिशा", division: "Bhopal", hq: "Vidisha", area: 7371, population: 1458875, tehsils: 7, famous: "Sanchi Stupa, Heliodorus Column, Udayagiri Caves", icon: "🏺" },
  { name: "Raisen", nameHindi: "रायसेन", division: "Bhopal", hq: "Raisen", area: 8466, population: 1331597, tehsils: 8, famous: "Bhimbetka Rock Shelters (UNESCO), Raisen Fort", icon: "🗿" },
  { name: "Rajgarh", nameHindi: "राजगढ़", division: "Bhopal", hq: "Rajgarh", area: 6154, population: 1545814, tehsils: 6, famous: "Soybean capital of MP, Narsinghgarh wildlife", icon: "🌱" },
  { name: "Sehore", nameHindi: "सीहोर", division: "Bhopal", hq: "Sehore", area: 6578, population: 1311332, tehsils: 5, famous: "Gateway to Bhopal, agricultural hub", icon: "🌾" },
  // INDORE DIVISION
  { name: "Indore", nameHindi: "इंदौर", division: "Indore", hq: "Indore", area: 3898, population: 3272335, tehsils: 5, famous: "Cleanest city India 7× years, street food capital, IIM, IIT", icon: "🏙️" },
  { name: "Dhar", nameHindi: "धार", division: "Indore", hq: "Dhar", area: 8153, population: 2185793, tehsils: 13, famous: "Bagh Print (GI tag), Mandu fort, Bhil tribal heartland", icon: "🎨" },
  { name: "Jhabua", nameHindi: "झाबुआ", division: "Indore", hq: "Jhabua", area: 3782, population: 1025048, tehsils: 6, famous: "Bhagoria festival, Bhil tribal community, adivasi art", icon: "🏹" },
  { name: "Alirajpur", nameHindi: "अलीराजपुर", division: "Indore", hq: "Alirajpur", area: 3182, population: 728677, tehsils: 5, famous: "Tribal district, Narmada riverbed, dense forest", icon: "🌿" },
  { name: "Barwani", nameHindi: "बड़वानी", division: "Indore", hq: "Barwani", area: 5422, population: 1385659, tehsils: 6, famous: "Narmada river, Sardar Sarovar Dam upstream", icon: "🌊" },
  { name: "Burhanpur", nameHindi: "बुरहानपुर", division: "Indore", hq: "Burhanpur", area: 3427, population: 757591, tehsils: 3, famous: "Mughal city, Mumtaz Mahal's death place, Tapti river", icon: "🕌" },
  { name: "Khandwa", nameHindi: "खंडवा", division: "Indore", hq: "Khandwa", area: 6208, population: 1310061, tehsils: 5, famous: "Omkareshwar Jyotirlinga, Indira Sagar Dam", icon: "🛕" },
  { name: "Khargone", nameHindi: "खरगोन", division: "Indore", hq: "Khargone", area: 8030, population: 1872413, tehsils: 12, famous: "Maheshwar (Ahilyabai fort), Narmada ghats", icon: "🪔" },
  // UJJAIN DIVISION
  { name: "Ujjain", nameHindi: "उज्जैन", division: "Ujjain", hq: "Ujjain", area: 6091, population: 1986864, tehsils: 7, famous: "Mahakaleshwar Jyotirlinga, Kumbh Mela, Shipra river", icon: "🛕" },
  { name: "Ratlam", nameHindi: "रतलाम", division: "Ujjain", hq: "Ratlam", area: 4861, population: 1455069, tehsils: 6, famous: "Ratlami Sev (GI tag), jewellery craft, Sailana Wildlife", icon: "🥜" },
  { name: "Mandsaur", nameHindi: "मंदसौर", division: "Ujjain", hq: "Mandsaur", area: 5530, population: 1340688, tehsils: 7, famous: "Pashupatinath temple, opium production (legal)", icon: "🌺" },
  { name: "Neemuch", nameHindi: "नीमच", division: "Ujjain", hq: "Neemuch", area: 4256, population: 826067, tehsils: 4, famous: "Neemuch Cantonment, opium factory, limestone", icon: "🏗️" },
  { name: "Shajapur", nameHindi: "शाजापुर", division: "Ujjain", hq: "Shajapur", area: 6196, population: 1512353, tehsils: 6, famous: "Agar-Malwa separation, agri land", icon: "🌾" },
  { name: "Dewas", nameHindi: "देवास", division: "Ujjain", hq: "Dewas", area: 7020, population: 1563715, tehsils: 8, famous: "Industrial hub, Dewas peak temple, soybean", icon: "🏭" },
  { name: "Agar-Malwa", nameHindi: "आगर-मालवा", division: "Ujjain", hq: "Agar", area: 2785, population: 506892, tehsils: 3, famous: "Newest district (2013), lavender & rose cultivation", icon: "💐" },
  // GWALIOR DIVISION
  { name: "Gwalior", nameHindi: "ग्वालियर", division: "Gwalior", hq: "Gwalior", area: 5465, population: 2032036, tehsils: 6, famous: "Gwalior Fort, Scindia dynasty, Tansen music, Gajak", icon: "🏰" },
  { name: "Shivpuri", nameHindi: "शिवपुरी", division: "Gwalior", hq: "Shivpuri", area: 10278, population: 1726068, tehsils: 9, famous: "Madhav National Park, Sakhya Sagar lake", icon: "🌿" },
  { name: "Guna", nameHindi: "गुना", division: "Gwalior", hq: "Guna", area: 6485, population: 1241519, tehsils: 5, famous: "Chanderi (handloom GI), railway junction", icon: "🧵" },
  { name: "Ashoknagar", nameHindi: "अशोकनगर", division: "Gwalior", hq: "Ashoknagar", area: 4674, population: 845071, tehsils: 5, famous: "Chanderi town, Betwa river, historic trade route", icon: "🏺" },
  { name: "Datia", nameHindi: "दतिया", division: "Gwalior", hq: "Datia", area: 2902, population: 786754, tehsils: 4, famous: "Pitambara Peeth temple, Datia Palace (Bundela)", icon: "🛕" },
  // CHAMBAL DIVISION
  { name: "Morena", nameHindi: "मुरैना", division: "Chambal", hq: "Morena", area: 4989, population: 1965970, tehsils: 7, famous: "Gajak (sesame sweet), Chambal ravines, Mitawali temples", icon: "🍬" },
  { name: "Bhind", nameHindi: "भिण्ड", division: "Chambal", hq: "Bhind", area: 4459, population: 1703005, tehsils: 7, famous: "Chambal ravines, dacoit history, Ater Fort", icon: "🌾" },
  { name: "Sheopur", nameHindi: "श्योपुर", division: "Chambal", hq: "Sheopur", area: 6606, population: 687746, tehsils: 4, famous: "Kuno National Park (cheetah reintroduction), wildlife", icon: "🐆" },
  // JABALPUR DIVISION
  { name: "Jabalpur", nameHindi: "जबलपुर", division: "Jabalpur", hq: "Jabalpur", area: 5210, population: 2460714, tehsils: 8, famous: "Bhedaghat marble rocks, Dhuandhar falls, Narmada", icon: "🌊" },
  { name: "Mandla", nameHindi: "मंडला", division: "Jabalpur", hq: "Mandla", area: 8771, population: 1054905, tehsils: 7, famous: "Kanha National Park, Gond heartland, Narmada source", icon: "🐯" },
  { name: "Dindori", nameHindi: "डिण्डोरी", division: "Jabalpur", hq: "Dindori", area: 7470, population: 704524, tehsils: 7, famous: "Gond art (Jangarh Singh Shyam's birthplace), forests", icon: "🎨" },
  { name: "Balaghat", nameHindi: "बालाघाट", division: "Jabalpur", hq: "Balaghat", area: 9229, population: 1701698, tehsils: 10, famous: "Kanha buffer, rice bowl of MP, Dhokra metal craft", icon: "🌾" },
  { name: "Chhindwara", nameHindi: "छिन्दवाड़ा", division: "Jabalpur", hq: "Chhindwara", area: 11815, population: 2090922, tehsils: 12, famous: "Largest district, Pench NP, Patalkot valley", icon: "🌲" },
  { name: "Katni", nameHindi: "कटनी", division: "Jabalpur", hq: "Katni", area: 4950, population: 1292042, tehsils: 5, famous: "Limestone capital of India, railway junction", icon: "🏗️" },
  { name: "Narsinghpur", nameHindi: "नरसिंहपुर", division: "Jabalpur", hq: "Narsinghpur", area: 5133, population: 1091854, tehsils: 6, famous: "Wheat & sugarcane production, Narmada banks", icon: "🌾" },
  { name: "Seoni", nameHindi: "सिवनी", division: "Jabalpur", hq: "Seoni", area: 8758, population: 1379131, tehsils: 8, famous: "Pench National Park (Jungle Book inspiration)", icon: "🐺" },
  // NARMADAPURAM DIVISION
  { name: "Narmadapuram", nameHindi: "नर्मदापुरम", division: "Narmadapuram", hq: "Hoshangabad", area: 6707, population: 1241350, tehsils: 8, famous: "Satpura NP, Narmada river, Bori sanctuary", icon: "🌿" },
  { name: "Harda", nameHindi: "हरदा", division: "Narmadapuram", hq: "Harda", area: 3330, population: 570465, tehsils: 4, famous: "Smallest district by population, Tawa reservoir", icon: "🌊" },
  { name: "Betul", nameHindi: "बैतूल", division: "Narmadapuram", hq: "Betul", area: 10043, population: 1575362, tehsils: 11, famous: "Muktainagar temple, tribal community, Satpura plateau", icon: "🌄" },
  // REWA DIVISION
  { name: "Rewa", nameHindi: "रीवा", division: "Rewa", hq: "Rewa", area: 6314, population: 2365106, tehsils: 10, famous: "White tigers origin, Rewa Ultra Mega Solar Park, Baghel Rajputs", icon: "🐯" },
  { name: "Satna", nameHindi: "सतना", division: "Rewa", hq: "Satna", area: 7502, population: 2228619, tehsils: 8, famous: "Chitrakoot dharm, cement industry, Ken river", icon: "🛕" },
  { name: "Sidhi", nameHindi: "सीधी", division: "Rewa", hq: "Sidhi", area: 10526, population: 1126515, tehsils: 6, famous: "Sanjay-Dubri Tiger Reserve, Son river, tribal forests", icon: "🌲" },
  { name: "Singrauli", nameHindi: "सिंगरौली", division: "Rewa", hq: "Singrauli", area: 5672, population: 1178273, tehsils: 5, famous: "India's energy capital, coal mines, NTPC power plants", icon: "⚡" },
  { name: "Mauganj", nameHindi: "मऊगंज", division: "Rewa", hq: "Mauganj", area: 1700, population: 320000, tehsils: 3, famous: "Newest district (2023), separated from Rewa", icon: "🆕" },
  // SAGAR DIVISION
  { name: "Sagar", nameHindi: "सागर", division: "Sagar", hq: "Sagar", area: 10252, population: 2378458, tehsils: 9, famous: "Sagar Lake, Dr. Harisingh Gour University, Bundela heritage", icon: "🏊" },
  { name: "Damoh", nameHindi: "दमोह", division: "Sagar", hq: "Damoh", area: 7306, population: 1264219, tehsils: 5, famous: "Nohta Devi temple, limestone, forest", icon: "🌲" },
  { name: "Panna", nameHindi: "पन्ना", division: "Sagar", hq: "Panna", area: 7135, population: 1016028, tehsils: 5, famous: "Diamond mines, Panna Tiger Reserve (comeback story), Ken river", icon: "💎" },
  { name: "Chhatarpur", nameHindi: "छतरपुर", division: "Sagar", hq: "Chhatarpur", area: 8687, population: 1762375, tehsils: 10, famous: "Khajuraho UNESCO temples, Chandela dynasty heritage", icon: "🏛️" },
  { name: "Tikamgarh", nameHindi: "टीकमगढ़", division: "Sagar", hq: "Tikamgarh", area: 5048, population: 1445166, tehsils: 7, famous: "Orchha (shared), Betwa river, Bundela architecture", icon: "🏰" },
  { name: "Niwari", nameHindi: "निवाड़ी", division: "Sagar", hq: "Niwari", area: 1318, population: 404007, tehsils: 3, famous: "Orchha town, smallest district (area), Betwa river", icon: "🏯" },
  // SHAHDOL DIVISION
  { name: "Shahdol", nameHindi: "शहडोल", division: "Shahdol", hq: "Shahdol", area: 6205, population: 1066063, tehsils: 6, famous: "Son river, Baiga tribal community, coal mines", icon: "🏔️" },
  { name: "Anuppur", nameHindi: "अनूपपुर", division: "Shahdol", hq: "Anuppur", area: 3747, population: 749237, tehsils: 5, famous: "Amarkantak (Narmada source), dense Vindhya forests", icon: "🌊" },
  { name: "Umariya", nameHindi: "उमरिया", division: "Shahdol", hq: "Umariya", area: 4548, population: 643579, tehsils: 4, famous: "Bandhavgarh National Park (highest tiger density in Asia)", icon: "🐯" },
  // NEW DISTRICTS (2023)
  { name: "Maihar", nameHindi: "मैहर", division: "Sagar", hq: "Maihar", area: 1900, population: 380000, tehsils: 3, famous: "Maa Sharda Devi temple, Tansen's guru Haridas ashram", icon: "🛕" },
  { name: "Pandhurna", nameHindi: "पांढुर्णा", division: "Jabalpur", hq: "Pandhurna", area: 1800, population: 350000, tehsils: 2, famous: "Chhindwara separation, agri-industrial zone", icon: "🌾" },
];

// ─── KEY STATISTICS ───────────────────────────────────────────────────────────

export const KEY_STATS: KeyStat[] = [
  {
    label: "Total Area",
    value: "3,08,252",
    unit: "km²",
    icon: "🗺️",
    color: "#C9A84C",
    context: "2nd largest state in India by area",
    rank: "2nd in India",
  },
  {
    label: "Population (2026 est.)",
    value: "9.0 Crore",
    unit: "people",
    icon: "👥",
    color: "#F4A261",
    context: "5th most populous state in India",
    rank: "5th in India",
  },
  {
    label: "GSDP 2024–25",
    value: "₹15.03 Lakh Crore",
    unit: "",
    icon: "💰",
    color: "#52B788",
    context: "11.05% growth over previous year",
    rank: "10th largest economy",
  },
  {
    label: "Districts",
    value: "55",
    unit: "districts",
    icon: "📍",
    color: "#C77DFF",
    context: "10 divisions, 428 tehsils, 23,043 gram panchayats",
    rank: "",
  },
  {
    label: "Gram Panchayats",
    value: "23,043",
    unit: "",
    icon: "🏘️",
    color: "#06D6A0",
    context: "313 janpad panchayats (blocks), 55 zila panchayats",
    rank: "",
  },
  {
    label: "Forest Cover",
    value: "25.14%",
    unit: "of area",
    icon: "🌲",
    color: "#40916C",
    context: "3rd largest forest area in India",
    rank: "3rd in India",
  },
  {
    label: "Wild Tigers",
    value: "785+",
    unit: "tigers",
    icon: "🐯",
    color: "#F4A261",
    context: "~23% of India's total tiger population",
    rank: "Most tigers in India",
  },
  {
    label: "Literacy Rate",
    value: "69.32%",
    unit: "",
    icon: "📚",
    color: "#4A90D9",
    context: "2011 Census; improved significantly since 2001",
    rank: "",
  },
  {
    label: "Assembly Seats",
    value: "230",
    unit: "seats",
    icon: "🏛️",
    color: "#E63946",
    context: "BJP: 163 seats (2023 election), Congress: 66 seats",
    rank: "",
  },
  {
    label: "Lok Sabha Seats",
    value: "29",
    unit: "seats",
    icon: "🗳️",
    color: "#9B72CF",
    context: "All 29 won by BJP in 2024 General Election",
    rank: "",
  },
  {
    label: "National Parks",
    value: "11",
    unit: "parks",
    icon: "🌿",
    color: "#52B788",
    context: "6 Tiger Reserves, 25+ Wildlife Sanctuaries",
    rank: "",
  },
  {
    label: "Power Generation",
    value: "27,108",
    unit: "MW",
    icon: "⚡",
    color: "#FECA57",
    context: "97% household electricity access. Rewa Solar: 750 MW",
    rank: "",
  },
];

// ─── STATE SYMBOLS ────────────────────────────────────────────────────────────

export const STATE_SYMBOLS: StatSymbol[] = [
  {
    category: "State Animal",
    name: "Barasingha (Swamp Deer)",
    nameHindi: "बारहसिंगा",
    scientific: "Rucervus duvaucelii",
    description: "Saved from near-extinction at Kanha — from 66 individuals in 1970 to 750+ today. One of India's greatest conservation successes.",
    icon: "🦌",
    status: "Vulnerable",
  },
  {
    category: "State Bird",
    name: "Indian Paradise Flycatcher",
    nameHindi: "दूधराज",
    scientific: "Terpsiphone paradisi",
    description: "Also called 'Dudhraj' in Malwi. The male has a spectacular long white tail twice its body length. Found across MP's forests and gardens.",
    icon: "🦅",
    status: "Least Concern",
  },
  {
    category: "State Tree",
    name: "Banyan Tree",
    nameHindi: "बरगद",
    scientific: "Ficus benghalensis",
    description: "The immortal tree — each aerial root becomes a new trunk. Symbol of permanence, shelter, and the village community gathering place.",
    icon: "🌳",
  },
  {
    category: "State Flower",
    name: "White Lily (Madhuca)",
    nameHindi: "सफेद लिली / पारिजात",
    scientific: "Nyctanthes arbor-tristis",
    description: "The Night Jasmine — flowers fall from the tree at night and dawn, covering the ground in white. Sacred in Hindu tradition.",
    icon: "🌸",
  },
  {
    category: "State Fish",
    name: "Mahseer",
    nameHindi: "महासेर",
    scientific: "Tor tor",
    description: "The 'Tiger of Indian Rivers' — can reach 2 metres in length. Critically threatened by dams and overfishing. A prized fish of the Narmada.",
    icon: "🐟",
    status: "Endangered",
  },
  {
    category: "State Dance",
    name: "Rai",
    nameHindi: "राई",
    description: "Performed by Bediya women of Bundelkhand — a whirling, acrobatic dance of extraordinary energy. Performed at festivals and weddings.",
    icon: "💃",
  },
  {
    category: "State Game",
    name: "Malkhamb",
    nameHindi: "मल्लखंब",
    description: "Ancient gymnastic discipline performed on a vertical wooden pole or rope. Originated in the wrestling traditions of the Malwa region. MP is its national home.",
    icon: "🤸",
  },
  {
    category: "State River",
    name: "Narmada",
    nameHindi: "नर्मदा",
    description: "150 million years old — older than the Himalayas. Called 'Rewa' in ancient texts and 'Giver of Grace' in Sanskrit. Holiest river of the Deccan.",
    icon: "🌊",
  },
  {
    category: "State Mineral",
    name: "Diamond",
    nameHindi: "हीरा",
    description: "MP is the only diamond-producing state in India. Panna district holds India's largest diamond reserves. The Koh-i-Noor is traditionally linked to this region.",
    icon: "💎",
  },
  {
    category: "Capital City",
    name: "Bhopal",
    nameHindi: "भोपाल",
    description: "Named after Raja Bhoj (1010–1055 CE) who built the great Bhoj Tal (Upper Lake). Now a city of 2.4 million, home to Nawabi heritage and 5 UNESCO-associated sites.",
    icon: "🏛️",
  },
];

// ─── MAJOR ONGOING PROJECTS ───────────────────────────────────────────────────

export const MAJOR_PROJECTS: MajorProject[] = [
  {
    name: "Simhastha Kumbh Mela 2028 Preparation",
    description: "₹2,000 crore allocated for infrastructure upgrades in Ujjain for the 2028 Kumbh Mela. Shipra river rejuvenation, ghat development, road widening.",
    investment: "₹2,000 crore",
    status: "Ongoing (2024–2028)",
    district: "Ujjain",
    icon: "🌊",
    sector: "Religious Tourism",
  },
  {
    name: "Rewa Ultra Mega Solar Power Park",
    description: "750 MW solar power project — one of the largest in Asia. Supplies electricity to Delhi Metro and MP grid. Part of India's renewable energy push.",
    investment: "₹3,000+ crore",
    status: "Operational",
    district: "Rewa",
    icon: "☀️",
    sector: "Renewable Energy",
  },
  {
    name: "Global Investment Summit 2025",
    description: "MP attracted over ₹22 lakh crore in investment proposals at the Global Investors Summit (GIS 2025) held in Bhopal in February 2025.",
    investment: "₹22 lakh crore (proposals)",
    status: "Implementation phase",
    district: "Bhopal",
    icon: "💼",
    sector: "Industrial Investment",
  },
  {
    name: "Narmada Expressway (Narmada Pragati Path)",
    description: "900 km expressway along the Narmada river corridor. Part of the state's 6-expressway network to be built by 2030.",
    investment: "₹45,000+ crore",
    status: "Planning/DPR stage",
    district: "Multiple (Narmada corridor)",
    icon: "🛣️",
    sector: "Infrastructure",
  },
  {
    name: "Kuno National Park — Cheetah Reintroduction",
    description: "The world's first intercontinental cheetah reintroduction. 20 cheetahs from Namibia and South Africa released at Kuno NP, Sheopur in 2022–23.",
    investment: "₹300+ crore",
    status: "Active — monitoring phase",
    district: "Sheopur",
    icon: "🐆",
    sector: "Wildlife Conservation",
  },
  {
    name: "Ken-Betwa River Interlinking",
    description: "India's first river interlinking project — transferring Ken river water to Betwa for Bundelkhand irrigation. Controversial: submerges 10% of Panna Tiger Reserve.",
    investment: "₹44,605 crore",
    status: "Under construction",
    district: "Panna / Chhatarpur / Jhansi",
    icon: "🌊",
    sector: "Water Infrastructure",
  },
  {
    name: "AIIMS Bhopal Expansion",
    description: "All India Institute of Medical Sciences, Bhopal — expanding capacity to become a comprehensive medical hub for Central India.",
    investment: "₹1,200+ crore",
    status: "Ongoing expansion",
    district: "Bhopal",
    icon: "🏥",
    sector: "Healthcare",
  },
  {
    name: "Rewa Airport Inauguration",
    description: "The 6th airport in MP — Rewa Airport received DGCA operating approval in 2025, connecting Baghelkhand to commercial air network for the first time.",
    investment: "₹250 crore",
    status: "Operational (2025)",
    district: "Rewa",
    icon: "✈️",
    sector: "Aviation",
  },
];

// ─── RECORDS & ACHIEVEMENTS ───────────────────────────────────────────────────

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: "2024",
    title: "Indore — Cleanest City, 7th Consecutive Year",
    description: "Indore retained the #1 rank in the Swachh Survekshan 2024 for the 7th year running — the longest streak by any Indian city in the cleanliness survey.",
    icon: "🏆",
    category: "award",
  },
  {
    year: "2025",
    title: "GSDP Reaches ₹15.03 Lakh Crore",
    description: "MP's economy grew 11.05% in 2024–25, making it the 10th largest state economy. The government targets doubling GSDP within 5 years (Viksit MP @2047).",
    icon: "📈",
    category: "economy",
  },
  {
    year: "2023",
    title: "Tiger Census — 785 Tigers",
    description: "MP confirmed 785 tigers in the 2022–23 census — the highest in any Indian state, representing ~23% of India's total wild tiger population.",
    icon: "🐯",
    category: "environment",
  },
  {
    year: "2022",
    title: "Cheetah Returns to India",
    description: "After 70 years of extinction in India, 8 cheetahs were released at Kuno National Park in Sheopur, MP — the world's first intercontinental cheetah reintroduction.",
    icon: "🐆",
    category: "environment",
  },
  {
    year: "2022",
    title: "Rewa Solar Park — Powers Delhi Metro",
    description: "The 750 MW Rewa Ultra Mega Solar Power Park became one of the world's largest single-site solar installations and the first to supply power to Delhi Metro.",
    icon: "☀️",
    category: "infrastructure",
  },
  {
    year: "2023",
    title: "BJP Wins 163/230 Assembly Seats",
    description: "BJP won a landslide with 163 out of 230 seats. Dr. Mohan Yadav was elected as the 19th Chief Minister on 13 December 2023.",
    icon: "🗳️",
    category: "social",
  },
  {
    year: "2024",
    title: "Agricultural Growth — 20%+ Average",
    description: "MP has maintained the highest agricultural growth rate in India, averaging above 20% for 4+ consecutive years. Leads India in pulses, soybean, and garlic production.",
    icon: "🌾",
    category: "economy",
  },
  {
    year: "2025",
    title: "₹22 Lakh Crore Investment at GIS 2025",
    description: "The Global Investors Summit in Bhopal attracted investment proposals worth ₹22 lakh crore — a record for any Indian state investment summit.",
    icon: "💼",
    category: "economy",
  },
];

// ─── ECONOMY SECTORS ─────────────────────────────────────────────────────────

export const ECONOMY_SECTORS = [
  { sector: "Agriculture", share: "28%", icon: "🌾", highlight: "Leads India in soybean, pulse, garlic production. 20%+ growth rate." },
  { sector: "Industry", share: "34%", icon: "🏭", highlight: "Pharma, auto, IT in Indore-Pithampur. Cement in Katni. Energy in Singrauli." },
  { sector: "Services", share: "38%", icon: "💼", highlight: "IT parks in Indore & Bhopal. Tourism growing post-COVID. Banking & finance." },
];

// ─── TOURISM STATS ────────────────────────────────────────────────────────────

export const TOURISM_STATS = [
  { label: "UNESCO World Heritage Sites", value: "3", icon: "🏛️", sites: "Khajuraho, Sanchi, Bhimbetka" },
  { label: "Jyotirlinga Shrines", value: "2", icon: "🛕", sites: "Mahakaleshwar (Ujjain), Omkareshwar (Khandwa)" },
  { label: "National Parks", value: "11", icon: "🌲", sites: "Bandhavgarh, Kanha, Pench, Satpura, Panna, Kuno, + more" },
  { label: "Wildlife Sanctuaries", value: "25+", icon: "🐆", sites: "National Chambal, Ratapani, Sardarpur, Ken Gharial..." },
  { label: "Tiger Reserves", value: "6", icon: "🐯", sites: "Bandhavgarh, Kanha, Pench, Satpura, Panna, Sanjay-Dubri" },
  { label: "Historical Forts", value: "50+", icon: "🏰", sites: "Gwalior Fort, Mandu, Orchha, Chanderi, Raisen, Asirgarh..." },
];