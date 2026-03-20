import type { FoodItem } from "../../../types";

// ─── EXTENDED TYPE ────────────────────────────────────────────────────────────

export interface FoodItemDetail {
  id: string;
  name: string;
  nameDev: string;
  region: string;
  category: "Street" | "Main Course" | "Sweet" | "Snack" | "Beverage";
  desc: string;
  longDesc: string;
  tasteProfile: string;
  icon: string;
  color: string;
  isVeg: boolean;
  mustTry: boolean;
  spiceLevel: 0 | 1 | 2 | 3 | 4; // 0=none, 4=fiery
  images: { url: string; caption: string }[];
  // Deep content
  ingredients: string[];
  whereToEat: string;
  bestTime: string;
  story: string;        // cultural/historical context
  pairWith: string;     // what to eat alongside
  price: string;        // approx street price
  funFact: string;
}

export const FOOD_ITEMS: FoodItemDetail[] = [
  // ─── 1. POHA JALEBI ─────────────────────────────────────────────────────────
  {
    id: "poha-jalebi",
    name: "Poha – Jalebi",
    nameDev: "पोहा जलेबी",
    region: "Indore (Malwa Plateau)",
    category: "Street",
    desc: "Flattened rice sautéed with onions, mustard, and green chilli alongside freshly-fried spirals soaked in saffron syrup. Indore's sacred morning ritual.",
    longDesc: "No combination better defines Indore than this. Indori Poha is a distinct species from its cousins elsewhere — flatter, lighter, cooked with fineness: fine-grained sev on top, pomegranate seeds, raw onion, lemon, and a drizzle of hot oil. The jalebi beside it is not an afterthought — it is the structural counterpoint. Crispy, hot, soaked in thick chashni. The contrast of the savoury-sour poha with the syrupy jalebi is intentional and perfect. Indore has been eating this combination since the Holkar era — the city's breakfast identity is inseparable from it. The best version is eaten standing at a stall at 7 AM, served on a sal leaf, with a plastic cup of tea.",
    tasteProfile: "Light · Crispy · Syrupy · Tangy",
    icon: "🥘",
    color: "#F4A261",
    isVeg: true,
    mustTry: true,
    spiceLevel: 1,
    images: [
      {
        url: "https://th.bing.com/th/id/OIP.8iW99sec2AUzjHmuBjZBbAHaFc?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Indori Poha with sev, pomegranate, and fresh jalebi — the classic combination",
      },
      {
        url: "https://th.bing.com/th/id/OIP.9EV80IrZvciRptb6QP_aVAHaEK?w=303&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Guru Sagar Sweets, Indore — ₹12 poha-jalebi since 1962",
      },
      {
        url: "https://th.bing.com/th/id/OIP.bpRE63hfMJZZr1JbQLkzHgHaFj?w=262&h=197&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        caption: "Freshly fried jalebis draining into chashni — the morning ritual",
      },
    ],
    ingredients: [
      "Thin-beaten rice (Indori poha variety — thinner than standard)",
      "Mustard seeds, curry leaves, green chilli",
      "Raw onion, coriander, pomegranate seeds",
      "Fine sev (mandatory — not optional garnish)",
      "Jalebi batter: maida, curd, baking soda fermented overnight",
      "Thick sugar syrup with saffron and cardamom",
    ],
    whereToEat: "Vijay Chaat House (Sarafa), Johny Hot Dog near Rajwada, Guru Sagar Sweets — all open from 6:30 AM",
    bestTime: "6:30 AM – 9:30 AM — after 10 AM the jalebi goes cold and the magic dies",
    story: "The combination evolved in Indore during the Holkar dynasty period as an affordable, filling breakfast for working people. The sev on poha is a distinctly Indori invention — no other city adds it as standard. The pairing with jalebi (instead of something savoury) reflects Malwa's sweet-first food culture.",
    pairWith: "Masala chai, nothing else. The three together is the complete Indore morning.",
    price: "₹15–25 at street stalls; ₹60–80 at restaurants",
    funFact: "Indore has been ranked India's cleanest city 7 consecutive years — and its street food scene is central to how the city approaches civic pride. The poha stall at 7 AM is cleaner than most restaurant kitchens.",
  },

  // ─── 2. DAL BAATI CHURMA ─────────────────────────────────────────────────────
  {
    id: "dal-baati-churma",
    name: "Dal Baati Churma",
    nameDev: "दाल बाटी चूरमा",
    region: "Central MP · Bhopal · Gwalior",
    category: "Main Course",
    desc: "Sun-baked wheat balls served with five-lentil broth and crushed sweet churma with clarified butter. The holy trinity of Rajasthani-MP cuisine.",
    longDesc: "This is not one dish — it is three distinct preparations that only reach their full meaning together. The baati: dense wheat dough balls traditionally baked in hot coals or a clay oven, then cracked open and drowned in ghee. The dal: a slow-cooked combination of five lentils — chana, toor, moong, urad, and masoor — tempered with ghee, asafoetida, red chilli, and dried mango powder. The churma: coarse wheat bread broken, fried or baked, mixed with ghee, jaggery, and cardamom into a sweet crumble. You eat them together or separately or in any proportion you choose. The meal has been eaten by warriors, farmers, and pilgrims for hundreds of years because it requires no refrigeration, sustains hard labour, and satisfies completely.",
    tasteProfile: "Earthy · Rich · Sweet-Savoury · Ghee-Forward",
    icon: "🍲",
    color: "#C8965A",
    isVeg: true,
    mustTry: true,
    spiceLevel: 2,
    images: [
      {
        url: "https://thumbs.dreamstime.com/z/traditional-rajasthani-meal-dal-bati-churma-meal-fit-kings-brass-plate-following-items-served-lentil-stuffed-wheat-158606477.jpg",
        caption: "Dal Baati Churma served in traditional brass thali — the complete meal",
      },
      {
        url: "https://tse3.mm.bing.net/th/id/OIP.bonRpfz0mfo61NPT3BzvXgHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Baati cracked open and soaked in ghee — the critical preparation step",
      },
      {
        url: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-dal-baati-churma.jpg",
        caption: "Five-lentil dal with ghee tempering — the heart of the dish",
      },
    ],
    ingredients: [
      "Baati: whole wheat flour, semolina, ghee, ajwain, baked in coal or oven",
      "Five-lentil dal: chana, toor, moong, urad, masoor cooked together",
      "Churma: coarse atta, ghee, jaggery, cardamom, mixed dry",
      "Pure ghee — not butter, not oil. Ghee is non-negotiable.",
      "Tempering: cumin, mustard, asafoetida, dried red chilli, amchur",
    ],
    whereToEat: "Chokhi Dhani (Bhopal), Manohar Dairy (Gwalior), any dhaba on the NH46 between Bhopal and Gwalior",
    bestTime: "Lunch (12:30–2:30 PM) — this is a full meal, not a snack. Never on a rushed stomach.",
    story: "Dal Baati originated as a Rajput warrior food — baati baked in hot desert sand during campaigns, dal carried in clay pots, churma made from leftover bread. It crossed into MP with the Rajput clans who settled in Gwalior and Chambal. Today it is central MP's defining thali meal.",
    pairWith: "Chaas (spiced buttermilk) to cut the richness. Never water — it disrupts the ghee.",
    price: "₹120–180 thali at dhabas; ₹280–380 at restaurants",
    funFact: "A traditional dal baati uses enough ghee to alarm a cardiologist. A proper serving drizzles 4–5 tablespoons of ghee over a single baati. This is not excess — it is engineering. The ghee prevents the wheat from becoming too dense in the stomach.",
  },

  // ─── 3. BHUTTE KA KEES ──────────────────────────────────────────────────────
  {
    id: "bhutte-ka-kees",
    name: "Bhutte Ka Kees",
    nameDev: "भुट्टे का कीस",
    region: "Indore · Ujjain · Bhopal",
    category: "Street",
    desc: "Grated raw corn slow-cooked in milk, seasoned with green chilli, coriander, and lime juice. Finished with grated coconut. Street food poetry in a clay pot.",
    longDesc: "Bhutte Ka Kees is uniquely, unambiguously from the Malwa plateau — no other region of India makes anything quite like it. Raw corn is grated (not ground, not pureed — grated, retaining texture) and cooked slowly in milk with ghee until it thickens into a semi-solid consistency. Green chilli provides the heat. Fresh coriander, a squeeze of lime, and grated coconut on top. The result is simultaneously creamy and textured, mildly sweet from the corn and milk, spiced from the chilli. It is eaten in a small steel bowl or on a leaf. The entire process takes 20 minutes per batch and cannot be rushed — which is why the best kees comes from stalls that have been making it for decades and have optimised their timing.",
    tasteProfile: "Creamy · Spiced · Corn-Sweet · Fresh",
    icon: "🌽",
    color: "#E9C46A",
    isVeg: true,
    mustTry: true,
    spiceLevel: 2,
    images: [
      {
        url: "https://th.bing.com/th/id/R.83dc01ae708266565b2a316a2c79416a?rik=M1RNtPR%2bfeWgHg&riu=http%3a%2f%2fwww.blog.sagmart.com%2fwp-content%2fuploads%2f2015%2f08%2fBhutte-Ka-Kees.jpg&ehk=oReOnWNqX3z7hFEx0Se5F%2b9s%2b%2b2DI7GVzY%2fC%2bHvdND4%3d&risl=&pid=ImgRaw&r=0",
        caption: "Bhutte Ka Kees — grated corn in milk with coconut and coriander",
      },
      {
        url: "https://x9s2d6a3.rocketcdn.me/wp-content/uploads/2021/04/Bhutte-ka-kees-_1200x1200.jpg",
        caption: "Street stall preparation — the corn must be grated fresh, not processed",
      },
      {
        url: "https://i.ytimg.com/vi/RRqsqLJ4VSA/maxresdefault.jpg",
        caption: "Final plating with lime squeeze and fresh coconut shaving",
      },
    ],
    ingredients: [
      "Fresh raw corn — not sweet corn, not canned. Fresh corn only.",
      "Whole milk (not water, not condensed milk)",
      "Green chilli, ginger paste",
      "Fresh coriander, lime juice",
      "Freshly grated coconut on top",
      "Mustard seeds, curry leaves for tempering",
    ],
    whereToEat: "Sarafa Bazaar (Indore) after 8 PM, Chappan Dukan area, Madhav Nagar market in Ujjain",
    bestTime: "Evening snack time (5 PM – 9 PM) — corn grated fresh at peak of day is best in evening preparation",
    story: "Bhutte Ka Kees evolved as a monsoon food when fresh corn floods the Malwa market from June–September. It was originally a home preparation, moved to streets when Indore's street food culture exploded in the late 20th century. It remains one of the only MP street foods with no analogue anywhere else in India.",
    pairWith: "Eaten alone as a snack. Some vendors add a small shot of hot chai alongside — unusual but it works.",
    price: "₹30–50 per portion at street stalls",
    funFact: "The dish requires raw corn — not ripe, not sweet corn. The starch in semi-raw corn is what makes the milk-corn mixture thicken correctly. Ripe corn produces a different, inferior texture.",
  },

  // ─── 4. BHOPAL SEEKH KEBAB ───────────────────────────────────────────────────
  {
    id: "seekh-kebab",
    name: "Bhopal Seekh Kebab",
    nameDev: "भोपाली सीख कबाब",
    region: "Bhopal Old City (Chowk Bazaar)",
    category: "Street",
    desc: "Minced mutton mixed with 12 spices, shaped onto iron skewers and charcoal-grilled until crusted outside and meltingly soft within. Mughal perfection.",
    longDesc: "Bhopal's Nawabi food culture produced some of the finest kebab traditions in Central India, distinct from the Lucknowi and Hyderabadi schools. The Bhopali Seekh Kebab is leaner, more intensely spiced, and cooked over real charcoal — not gas, not electric. The minced mutton is mixed by hand with onion paste, fresh ginger-garlic, raw papaya (for tenderising), and a masala of 12 ingredients including phool makhana, dried rose petals, and kewra water. This is Mughal cooking: aromatic, restrained in heat but deep in flavour. The outside chars. The inside stays soft. Eaten wrapped in roomali roti with mint chutney and raw onion rings, standing outside the old city shops where the smoke hangs in the alley at midnight.",
    tasteProfile: "Smoky · Aromatic · Tender · Charcoal-Crusted",
    icon: "🍢",
    color: "#8B4513",
    isVeg: false,
    mustTry: true,
    spiceLevel: 3,
    images: [
      {
        url: "https://c.ndtvimg.com/2018-09/aqjo7v4_kebab_625x300_12_September_18.jpg",
        caption: "Seekh kebab over live charcoal — the smoke is part of the flavour",
      },
      {
        url: "https://img-global.cpcdn.com/recipes/d921b630bdd45d30/1200x630cq80/photo.jpg",
        caption: "Bhopali Seekh Kebab — mixed mutton with 12-spice masala on iron skewer",
      },
      {
        url: "https://i.ytimg.com/vi/5cu-6FeUmsE/maxresdefault.jpg",
        caption: "Served with roomali roti, mint chutney, and raw onion — the complete setup",
      },
    ],
    ingredients: [
      "Minced mutton (shoulder + leg mix, 70/30 fat ratio)",
      "Raw papaya paste — natural meat tenderiser",
      "12-spice masala: clove, cardamom, mace, nutmeg, dried rose petals, kewra...",
      "Onion paste, fresh ginger-garlic",
      "Charcoal for grilling — coal smoke is the 13th ingredient",
      "Roomali roti for wrapping (paper-thin, large)",
    ],
    whereToEat: "Chowk Bazaar Old Bhopal, Itwara area, Babu Lal's stall near Taj-ul-Masajid — open from 7 PM until midnight",
    bestTime: "Night only — 8 PM to midnight. The old city kebab culture is nocturnal.",
    story: "Bhopal's kebab tradition developed under the Nawabs of Bhopal (18th–20th century) who maintained one of the most sophisticated courts in Central India. Four Begums ruled Bhopal consecutively and all were known patrons of food and arts — the Nawabi kitchen tradition they maintained produced the distinctive Bhopali kebab school that survives in the old city today.",
    pairWith: "Roomali roti, fresh mint chutney, sliced raw onion. Sheermal for a richer pairing.",
    price: "₹60–100 for 4 seekh kebabs at old-city stalls; ₹200–350 at restaurants",
    funFact: "The original Nawabi recipe included phool makhana (fox nuts) in the minced mix — they absorb moisture during grilling, preventing the kebab from drying out. This 200-year-old trick is still used by the best Bhopal vendors.",
  },

  // ─── 5. MAWA BATI ────────────────────────────────────────────────────────────
  {
    id: "mawa-bati",
    name: "Mawa Bati",
    nameDev: "माव बाटी",
    region: "Ujjain · Bhopal · Indore",
    category: "Sweet",
    desc: "Deep-fried spheres of concentrated milk solids stuffed with dry fruits, soaked overnight in rose-cardamom-saffron syrup. Temples offer these to gods for good reason.",
    longDesc: "Mawa Bati is the jewel of MP's mithai tradition — more complex than a gulab jamun, richer than a ladoo, and far less commonly found outside the state. The mawa (khoya — milk reduced by long slow cooking until nearly solid) is mixed with a small amount of maida, stuffed with a mixture of pistachios, cashews, and raisins, formed into balls, and deep fried in ghee until dark golden. These are then submerged overnight in a thin syrup perfumed with rose water, green cardamom, and saffron. The result by morning: the exterior has absorbed the syrup and softened, the inside remains denser, the dry fruits are warm pockets of richness in the middle. Ujjain's sweet shops have been making these for over 200 years as prasad for the Mahakaleshwar temple.",
    tasteProfile: "Rich · Floral · Intensely Sweet · Layered",
    icon: "🍮",
    color: "#D4956A",
    isVeg: true,
    mustTry: true,
    spiceLevel: 0,
    images: [
      {
        url: "https://i.ytimg.com/vi/077aoqXD4fc/maxresdefault.jpg",
        caption: "Mawa Bati soaking in rose-saffron syrup overnight — this wait is mandatory",
      },
      {
        url: "https://img-global.cpcdn.com/recipes/1fd433588ce24347/1200x630cq80/photo.jpg",
        caption: "Mawa Bati cross-section — dry fruit stuffing inside the milk-solid sphere",
      },
      {
        url: "https://tse1.mm.bing.net/th/id/OIP.I1fuaBCKjd1dbz63u5A19AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Freshly made mithai at an Ujjain sweet shop near Mahakaleshwar",
      },
    ],
    ingredients: [
      "Mawa (khoya): full-fat milk reduced to 1/4 volume — takes 2 hours minimum",
      "Stuffing: cashews, pistachios, raisins, sometimes dried coconut",
      "Pure ghee for deep frying (not oil — the flavour difference is absolute)",
      "Sugar syrup: thin, one-string consistency",
      "Rose water, green cardamom powder, saffron strands",
      "Small amount of maida to bind the mawa",
    ],
    whereToEat: "Mishrilal Sweets (Ujjain, established 1878), Ram Halwai near Rajwada (Indore), Brijwasi near Itwara (Bhopal)",
    bestTime: "Morning hours — fresh-made in the early hours, soaked overnight from the previous evening",
    story: "Mawa Bati's origins are temple-adjacent — the dish was developed as a prasad (sacred offering) for Ujjain's Mahakaleshwar temple that would survive a full day of temple rituals. The overnight syrup soak was originally a preservation technique that became the defining culinary feature.",
    pairWith: "Eaten alone. Possibly with a glass of cold milk to balance the sweetness.",
    price: "₹30–50 per piece at traditional sweet shops; available in boxes of 6–12",
    funFact: "The best Mawa Bati in Ujjain is made by shops that have been in business for 100+ years — the mawa is still reduced in traditional copper vessels (tambdi) because stainless steel changes the caramelisation profile.",
  },

  // ─── 6. GARADU ───────────────────────────────────────────────────────────────
  {
    id: "garadu",
    name: "Garadu",
    nameDev: "गराडू",
    region: "Indore",
    category: "Street",
    desc: "Purple yam deep-fried and tossed with black salt, chaat masala, and lime. Indore's winter obsession, available only October–February.",
    longDesc: "Garadu is Indore's seasonal obsession — the purple yam (Dioscorea alata, called garadu in Malwi) appears in Indore's markets from October and disappears by February. During these five months, the city's streets smell of frying garadu at every corner. The yam is cut into chunks, deep-fried in oil until the outside is dark and crispy while the inside remains dense and floury, then immediately tossed with the masala: black salt, red chilli, roasted cumin, amchur, and a squeeze of lime. The texture — crispy crust, dense floury interior — is unlike any other fried root vegetable. The black salt and amchur give it a sour-salty finish that makes it impossible to eat just one portion. When it runs out for the season in February, Indoris genuinely mourn.",
    tasteProfile: "Crispy · Tangy · Earthy · Sour-Salty",
    icon: "🥔",
    color: "#6A1E55",
    isVeg: true,
    mustTry: true,
    spiceLevel: 2,
    images: [
      {
        url: "https://images.news18.com/ibnkhabar/uploads/2023/12/3791321_HYP_0_FEATURE1701670591642.jpg",
        caption: "Garadu — fried purple yam chunks with chaat masala, Indore winter staple",
      },
      {
        url: "https://i.ytimg.com/vi/uhQf-2OJY7Y/maxresdefault.jpg",
        caption: "Street vendor seasoning hot garadu with black salt and chilli — Sarafa Bazaar",
      },
      {
        url: "https://ruchisvegkitchen.com/wp-content/uploads/2021/05/20210519165311_img_5916_wm_wm6036177511254486884.jpg",
        caption: "Purple yam cross-section — the distinctive colour that fades slightly when fried",
      },
    ],
    ingredients: [
      "Purple yam (Dioscorea alata) — locally called garadu in Malwi dialect",
      "Oil for deep frying (must be very hot for the crust to form)",
      "Black salt (kala namak) — the dominant seasoning",
      "Roasted cumin powder, red chilli powder",
      "Amchur (dried mango powder) for sourness",
      "Fresh lime squeezed immediately before eating",
    ],
    whereToEat: "Sarafa Bazaar (Indore) after 8 PM, Chappan Dukan — any good street cart from October to February",
    bestTime: "October to February only. Peak garadu season is December–January when the yam is at full flavour.",
    story: "Garadu is one of the last truly seasonal street foods in Indian cities — it cannot be made with stored or processed yam, and the fresh tuber is only available in specific winter months. Indore's street food culture is defined by seasonality in a way few modern cities maintain. Garadu is the proof.",
    pairWith: "Eaten alone — it is a complete snack. Masala chai alongside in cold weather.",
    price: "₹30–50 per plate at street stalls",
    funFact: "Garadu vendors in Indore can identify the best quality yam by sound — a good garadu has a distinctive hollow knock when tapped, indicating the correct starch density for frying.",
  },

  // ─── 7. SHAHI SHEERMAL ───────────────────────────────────────────────────────
  {
    id: "shahi-sheermal",
    name: "Shahi Sheermal",
    nameDev: "शाही शीरमाल",
    region: "Bhopal (Nawabi Quarter)",
    category: "Main Course",
    desc: "Saffron-infused flatbread baked in tandoor, enriched with milk and clarified butter. A Nawabi bread that has been eaten by royalty and commoners alike for 200 years.",
    longDesc: "Sheermal is Persian in origin — the name means 'bread rubbed with milk' — and came to Bhopal with the Nawabi court culture that had deep connections to the Mughal culinary tradition of Lucknow. Bhopal's version is distinctive: baked in a tandoor until the exterior is a deep amber, painted with saffron milk immediately on removal so it absorbs the colour and perfume while still hot. The inside is soft and layered. It is eaten alongside Bhopali Rogan Josh, Korma, or the seekh kebab — the bread's mild sweetness from the milk and saffron provides the balance the spiced meat dishes need. Old Bhopal's Itwara and Chowk area still has bakeries running on century-old recipes.",
    tasteProfile: "Saffron-Fragrant · Buttery · Milky-Sweet · Soft",
    icon: "🫓",
    color: "#D4A017",
    isVeg: true,
    mustTry: false,
    spiceLevel: 0,
    images: [
      {
        url: "https://i.ytimg.com/vi/wN6nJKTozzE/hqdefault.jpg",
        caption: "Shahi Sheermal — saffron-painted flatbread, just out of the tandoor",
      },
      {
        url: "https://zaykarecipes.com/wp-content/uploads/2023/03/shahi-sheermal.jpg",
        caption: "Sheermal texture — soft layers, amber crust, saffron threads visible",
      },
      {
        url: "https://tse3.mm.bing.net/th/id/OIP.oxhNRoWsy9T04LxPUf4GuQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Nawabi bread basket — sheermal with seekh kebab at old Bhopal restaurant",
      },
    ],
    ingredients: [
      "Maida (refined flour) — whole wheat is not used traditionally",
      "Full-fat milk (warm) replaces water entirely",
      "Pure ghee worked into the dough",
      "Saffron dissolved in warm milk — applied twice: in dough and as final glaze",
      "Kewra water (screwpine flower extract) for perfume",
      "Sugar — small amount, provides the mild sweetness",
    ],
    whereToEat: "Bapu Ki Kutia (Bhopal Old City), Haji Shaqoor Bhai near Taj-ul-Masajid, Itwara bakeries open from noon",
    bestTime: "Lunch and dinner only — sheermal is a meal bread, not a snack or breakfast item",
    story: "Sheermal was court bread in the Mughal-Nawabi tradition. Bhopal's version arrived via Lucknow through the cultural connections of the Nawabs of Bhopal who maintained close ties to Awadhi cuisine. The four Nawab Begums of Bhopal (1819–1926) are credited with institutionalising the dish in the city's food culture.",
    pairWith: "Bhopali Gosht Korma, Nihari, or Seekh Kebab — the saffron bread needs spiced meat",
    price: "₹20–40 per sheermal at bakeries; ₹80–120 at restaurants",
    funFact: "Traditional Bhopali sheermal uses a small amount of misri (rock sugar) dissolved in the milk dough — not regular granulated sugar. The different crystal structure of misri changes how the bread caramelises in the tandoor.",
  },

  // ─── 8. MAHUA LADOO ──────────────────────────────────────────────────────────
  {
    id: "mahua-ladoo",
    name: "Mahua Ladoo",
    nameDev: "महुआ लड्डू",
    region: "Pachmarhi · Jhabua · Tribal Belts",
    category: "Sweet",
    desc: "Sweet balls from the sacred Mahua tree flower — used in tribal festivals, medicine, and spiritual rituals for thousands of years. A taste of the forest.",
    longDesc: "Madhuca longifolia — the Mahua tree — is one of the most important trees in Central Indian tribal culture. Every part is used: flowers for sweetness and distillation, seeds for oil, bark for medicine. The Mahua Ladoo uses dried mahua flowers — which fall naturally from trees at night and are collected at dawn — mixed with wheat flour, ghee, and sometimes sesame seeds or jaggery. The flowers have a naturally high sugar content and a complex, slightly fermented floral flavour unlike anything else in Indian cuisine. This is not a sophisticated confection — it is ancient forest food. Eating Mahua Ladoo in Pachmarhi or Jhabua is eating something the forest provides, made by people who have lived alongside these trees for generations.",
    tasteProfile: "Floral · Earthy · Mildly Fermented · Forest-Sweet",
    icon: "🌸",
    color: "#A8763E",
    isVeg: true,
    mustTry: false,
    spiceLevel: 0,
    images: [
      {
        url: "https://i.ytimg.com/vi/wUEweeheAm4/maxresdefault.jpg",
        caption: "Mahua Ladoo — made from dried Mahua tree flowers, forest food",
      },
      {
        url: "https://tse1.mm.bing.net/th/id/OIP.QLnEoS6878OpSgGQBnPdXgHaG-?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Dried Mahua flowers — the natural sweetener of tribal Central India",
      },
      {
        url: "https://www.deshdigital.in/wp-content/uploads/2021/09/mahuaa-laddu.1-750x430.jpg",
        caption: "Tribal market in Pachmarhi — mahua products sold alongside fresh forest produce",
      },
    ],
    ingredients: [
      "Dried Mahua flowers (Madhuca longifolia) — collected at dawn from forest floor",
      "Whole wheat flour or coarse atta",
      "Pure ghee or sometimes mahua seed oil",
      "Jaggery (optional — flowers are naturally sweet)",
      "Sesame seeds, sometimes dried coconut",
    ],
    whereToEat: "Tribal haats in Jhabua (Friday market), Pachmarhi forest market, Balaghat market during Lokrang festival",
    bestTime: "Mahua season is March–April when flowers fall naturally; dried flower products available year-round",
    story: "The Mahua tree is the beating heart of Gond, Bhil, Baiga, and Korku tribal life. Marriages are conducted under Mahua trees. Festivals begin with Mahua. The flowers are offered to ancestors. Mahua Ladoo is not food in the ordinary sense — it is the forest translated into a form you can hold in your hand.",
    pairWith: "Eaten alone as ritual or festival food. Sometimes alongside rice flatbreads (dhebra) in tribal cooking.",
    price: "₹15–30 for ladoos at tribal haats; specialty shops in Bhopal sell boxed versions for ₹200–400",
    funFact: "Mahua spirit (distilled from fermented flowers) was banned during the colonial era — the British were alarmed by tribal communities having access to their own alcohol economy. The ban criminalised a 5,000-year-old practice and was only partially lifted post-Independence.",
  },

  // ─── 9. GAJAK ────────────────────────────────────────────────────────────────
  {
    id: "gajak",
    name: "Gajak",
    nameDev: "गजक",
    region: "Gwalior · Morena · Shivpuri",
    category: "Sweet",
    desc: "Sesame seeds and jaggery pressed into brittle slabs and left to harden in winter air. Gwalior's answer to winter — crunchy, nutty, and impossibly addictive.",
    longDesc: "Gwalior and the Chambal region produce what is widely considered the finest Gajak in India — and Gwalior's sweet makers have been refining this recipe since the Scindia dynasty era. The process is deceptively simple: sesame seeds are roasted, mixed with melted jaggery at precise temperature, then pulled and folded repeatedly (like taffy) until the mass becomes glossy and consistent, then pressed into slabs or rolled into cylinders and left to cool and harden in winter air. The cold is essential — Gajak cannot be made in summer because the jaggery won't set. Morena district's Gajak uses the black sesame variety for a nuttier, more intense flavour. Shivpuri makes a thicker variety with groundnuts added. Each is distinct. All are addictive.",
    tasteProfile: "Nutty · Brittle · Caramel-Jaggery · Sesame-Rich",
    icon: "🍬",
    color: "#B5834A",
    isVeg: true,
    mustTry: false,
    spiceLevel: 0,
    images: [
      {
        url: "https://images.slurrp.com/webstories/wp-content/uploads/2023/01/13123810/cropped-shutterstock_765926866.jpg",
        caption: "Gwalior Gajak — sesame brittle from Danaram, the city's oldest sweet shop",
      },
      {
        url: "https://images.herzindagi.info/image/2022/Dec/where-is-gajak-from.jpg",
        caption: "Gajak varieties — round patties, slabs, and cylindrical rolls",
      },
      {
        url: "https://tse2.mm.bing.net/th/id/OIP.MxsJYzSn8ST6IHYAjR6mEAHaE2?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Sesame and jaggery — the two-ingredient formula that produces Gwalior's finest sweet",
      },
    ],
    ingredients: [
      "Til (sesame) — white or black variety, dry-roasted until golden",
      "Jaggery (gud) — must be from sugarcane, not date palm",
      "Ghee — small amount to prevent sticking during pulling",
      "Cold winter air — not an ingredient but an essential condition",
    ],
    whereToEat: "Danaram Sweets (Gwalior, est. 1947), Morena Gajak vendors at Gwalior Railway Station platform, Halwai Gali in Gwalior old city",
    bestTime: "October to February only — Gajak is a winter product and genuinely unavailable in summer",
    story: "Gajak's association with Gwalior and Chambal goes back to the Scindia royal court, which patronised the sweet makers of the region. The Maharajas of Gwalior were known to send boxes of Gajak as diplomatic gifts. The Morena variant using black til is considered the more traditional form — Gwalior's white-til version developed later.",
    pairWith: "With chai in the morning — the bitterness of the jaggery and the sesame are perfect with a slightly sweet tea.",
    price: "₹300–600 per kg at Gwalior sweet shops; widely available at Gwalior Railway Station",
    funFact: "A skilled Gajak maker can pull the jaggery-sesame mass 40–60 times before it sets — this pulling process is what creates the layered, almost flaky internal structure that distinguishes good Gajak from inferior pressed sesame bars.",
  },

  // ─── 10. SABUDANA KHICHDI ────────────────────────────────────────────────────
  {
    id: "sabudana-khichdi",
    name: "Sabudana Khichdi",
    nameDev: "साबूदाना खिचड़ी",
    region: "Western MP · Indore · Ujjain",
    category: "Street",
    desc: "Tapioca pearls sautéed with cumin, green chilli, peanuts, and coconut. A beloved fasting food eaten daily by half of Western MP for breakfast.",
    longDesc: "Sabudana Khichdi exists in a peculiar category: it is technically a fasting food (consumed on Hindu fast days when grain is prohibited) that has become so popular it is eaten daily as a breakfast regardless of religious observance. The tapioca pearls (sabudana) must be soaked overnight to soften — the ratio of soaking water to pearl is the first test of a good khichdi maker. Dry, grainy sabudana means insufficient soaking. The peanuts — roasted, coarsely crushed — are the structural counterpart to the soft pearls. Green chilli provides heat. Lemon juice adds brightness. Fresh coconut or desiccated coconut gives sweetness. In Western MP, this is the most common breakfast item outside of Poha — found at every home kitchen, dharamshala, and street stall.",
    tasteProfile: "Chewy · Mild · Nutty · Bright",
    icon: "🫙",
    color: "#E8E8D0",
    isVeg: true,
    mustTry: false,
    spiceLevel: 1,
    images: [
      {
        url: "https://images.news18.com/ibnkhabar/uploads/2025/09/WhatsApp-Image-2025-09-21-at-13.24.07-2025-09-877726dcfc69a3faa547e8779ce719f6.jpeg?impolicy=website&width=1200&height=900",
        caption: "Sabudana Khichdi — properly soaked pearls with peanuts and curry leaves",
      },
      {
        url: "https://rskfood.com/wp-content/uploads/2023/07/1-15-1024x1024.png",
        caption: "The correct texture — each pearl separate, not mushy or clumped",
      },
      {
        url: "https://img.haribhoomi.com/uploadimage/library/16_9/16_9_5/IMAGE_1727415965.jpg",
        caption: "Morning breakfast spread at a Ujjain dharamshala — sabudana khichdi with chai",
      },
    ],
    ingredients: [
      "Sabudana (tapioca pearls) — soaked overnight in minimal water",
      "Roasted peanuts — coarsely crushed, not ground",
      "Ghee or oil for sautéing (ghee preferred)",
      "Cumin seeds, green chilli",
      "Fresh coriander, lemon juice",
      "Fresh or desiccated coconut for garnish",
      "Rock salt (sendha namak) — regular salt not used on fast days",
    ],
    whereToEat: "Any home kitchen in Western MP; temple towns (Ujjain, Omkareshwar) for the fasting-food version; Indore street stalls near temple precincts",
    bestTime: "Breakfast (7–10 AM) — it is genuinely a morning food",
    story: "Sabudana Khichdi became widespread in MP through the temple town culture of Ujjain, Omkareshwar, and Maheshwar, where large numbers of pilgrims needed filling fasting food. Its simplicity — few ingredients, quick preparation — made it ideal. From temple towns it spread to home kitchens and then to streets.",
    pairWith: "Yoghurt (dahi) on the side to cool the palate; masala chai to accompany",
    price: "₹40–70 at street stalls; home preparation is very inexpensive",
    funFact: "The perfect Sabudana Khichdi has every tapioca pearl separate and slightly translucent — never mushy or sticking together. This requires exactly the right soaking time (6–8 hours) and immediate high-heat cooking. There is no saving oversoaked sabudana.",
  },

  // ─── 11. BHOPALI ROGAN JOSH (KORMA) ─────────────────────────────────────────
  {
    id: "bhopali-korma",
    name: "Bhopali Gosht Korma",
    nameDev: "भोपाली गोश्त कोरमा",
    region: "Bhopal Old City",
    category: "Main Course",
    desc: "Slow-braised mutton in a yoghurt-onion-cream sauce, fragrant with whole spices and a restrained heat that builds slowly. The crown of Nawabi cooking.",
    longDesc: "Bhopali Korma is the flagship of Bhopal's Nawabi cuisine — a slow-braised preparation that takes a minimum of 3 hours and produces a sauce of extraordinary depth. Unlike its Lucknowi cousin which tends toward lighter, more delicate flavours, Bhopali Korma has a deeper colour and richer body from the fried onion paste (browned to the precise amber that distinguishes expertise from amateur cooking). The mutton is slow-cooked in the onion-yoghurt base with whole spices — not ground, whole: cinnamon sticks, black cardamom, star anise, stone flower (pathar phool). The heat is present but never dominant. What you taste primarily is the slow-developed sweetness of onion, the tang of yoghurt, and the perfume of whole spices. Eaten with sheermal, it is one of India's great compound pleasures.",
    tasteProfile: "Deep · Aromatic · Slow-Built Richness · Warmly Spiced",
    icon: "🍖",
    color: "#8B2500",
    isVeg: false,
    mustTry: true,
    spiceLevel: 2,
    images: [
      {
        url: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2018/11/25/318546-bhopali.jpg?im=FitAndFill=(600,315)",
        caption: "Bhopali Gosht Korma — slow-braised mutton in Nawabi yoghurt sauce",
      },
      {
        url: "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?ixid=MnwyNTE2NnwwfDF8c2VhcmNofDF8fE11dHRvbiUyMHJlY2lwZXxlbnwwfHx8fDE2NzYzNDkxODI&ixlib=rb-4.0.3&q=85&w=2160",
        caption: "Korma served with roomali roti at a Bhopal old-city restaurant",
      },
      {
        url: "https://tse4.mm.bing.net/th/id/OIP.XIHceRUvICBa1COBt4aKbQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Whole spices — the structural aromatics of Nawabi cuisine",
      },
    ],
    ingredients: [
      "Bone-in mutton (shoulder or ribs) — bone adds richness to the sauce",
      "3 large onions — slow-fried 45 minutes to deep amber, then blended",
      "Full-fat yoghurt (whisked, room temperature — cold yoghurt splits the sauce)",
      "Whole spices: cinnamon, black cardamom, star anise, stone flower, mace",
      "Ginger-garlic paste, fresh cream for finishing",
      "Kewra water or rose water — final fragrance addition",
    ],
    whereToEat: "Bapu Ki Kutia (Bhopal), Under The Mango Tree restaurant, old city restaurants near Taj-ul-Masajid — lunch service only for best korma",
    bestTime: "Lunch (12:30–3 PM) — korma is best when fresh and the restaurant has been cooking since morning",
    story: "Bhopali Korma developed under the patronage of the Nawabs of Bhopal who maintained a sophisticated household cuisine influenced by Mughal, Awadhi, and local Malwi traditions. The dish represents the synthesis: Mughal slow-cooking technique, Awadhi spice restraint, and local Malwi richness. The four Begums of Bhopal who ruled consecutively were known for their interest in the arts and food — the korma tradition they maintained is still alive in the old city.",
    pairWith: "Shahi Sheermal (mandatory pairing), followed by Mawa Bati as dessert — this is the complete Nawabi meal arc",
    price: "₹280–420 per portion at restaurants; authentic old-city preparation at ₹150–250",
    funFact: "The difference between Lucknowi and Bhopali korma is the onion. Lucknow uses lightly golden onion paste. Bhopal uses deeply browned, almost caramelised onion — darker colour, deeper flavour, different sweetness register entirely.",
  },

  // ─── 12. CHAKKI KI SHAAK ─────────────────────────────────────────────────────
  {
    id: "chakki-ki-shaak",
    name: "Chakki Ki Shaak",
    nameDev: "चक्की की शाक",
    region: "Gwalior · Chambal Region",
    category: "Main Course",
    desc: "Wheat gluten slow-cooked in a tomato-onion curry. The vegetarian answer to mutton — same texture, same satisfaction, zero compromise.",
    longDesc: "Chakki Ki Shaak is one of the most unusual vegetarian preparations in Central India — and it confuses first-timers completely. 'Chakki' is wheat gluten (seitan), separated from flour by washing the starch away. What remains is a dense, chewy protein mass that, when slow-cooked in the curry, takes on the exact texture of braised meat. The flavour is entirely from the sauce: tomato, onion, whole spices, ginger-garlic. But the experience of eating it — the chew, the way the sauce penetrates the interior, the dense satisfaction — is genuinely unlike any other vegetarian curry. Gwalior's farming communities developed this dish as a high-protein vegetarian alternative during lean months. It is now considered a regional speciality and is difficult to find outside the Gwalior-Chambal belt.",
    tasteProfile: "Meaty-Textured · Spiced · Tomato-Rich · Deeply Savoury",
    icon: "🥘",
    color: "#C0392B",
    isVeg: true,
    mustTry: false,
    spiceLevel: 3,
    images: [
      {
        url: "https://static.langimg.com/thumb/msid-86993240,width-680,resizemode-3/-chakki-ki-shaak-86993240.jpg",
        caption: "Chakki Ki Shaak — wheat gluten in Gwalior-style spiced tomato curry",
      },
      {
        url: "https://media.istockphoto.com/id/968489008/photo/indian-food-or-indian-curry-in-a-copper-brass-serving-bowl-with-bread-or-roti.jpg?s=170667a&w=0&k=20&c=tBzTKToVQSDs0KCha_QQIxRVqjhn-WyaTijo3a8-QzI=",
        caption: "The texture of cooked chakki — fibrous, dense, and almost meat-like",
      },
      {
        url: "https://thumbs.dreamstime.com/b/indian-food-indian-curry-copper-brass-serving-bowl-bread-roti-indian-food-indian-curry-copper-brass-182362481.jpg",
        caption: "Served with roti at a Gwalior dhaba — the Chambal region's vegetarian pride",
      },
    ],
    ingredients: [
      "Wheat gluten (chakki) — extracted from atta by repeated kneading and washing",
      "Tomato (large quantity — the sauce base)",
      "Onion paste — fried to golden",
      "Whole spices: bay leaf, cloves, black cardamom, cinnamon",
      "Red chilli powder, coriander powder, garam masala",
      "Fresh coriander, green chilli for finishing",
    ],
    whereToEat: "Gwalior's old city dhabas, home-cooking in Chambal region — rarely available at restaurants outside the area",
    bestTime: "Lunch only — chakki ki shaak is a slow-cook preparation, started in the morning",
    story: "Chakki Ki Shaak emerged from the farming communities of the Chambal region who needed high-protein vegetarian food but could not afford to slaughter livestock regularly. Wheat gluten — a byproduct of making chakki (the ground flour) — was the available protein source. The dish represents the ingenuity of constraint.",
    pairWith: "Thick whole wheat roti (not chapati — roti with more atta, slightly thicker)",
    price: "₹80–130 at Gwalior dhabas",
    funFact: "Chakki Ki Shaak predates the global 'seitan' trend by centuries — Gwalior farming communities were using wheat gluten as a meat substitute long before it became a western health food trend.",
  },

  // ─── 13. INDORI NAMKEEN ───────────────────────────────────────────────────────
  {
    id: "indori-namkeen",
    name: "Indori Namkeen Mix",
    nameDev: "इंदोरी नमकीन",
    region: "Indore",
    category: "Snack",
    desc: "Ratlami sev, poha chivda, baked dal, and masala peanuts mixed into Indore's signature snack blend. The city exports this crunch to the world.",
    longDesc: "Indore is to namkeen what Agra is to marble — it produces the finest in the country and everyone knows it. The Indori Namkeen tradition centres on Ratlami Sev: a sev made from besan (chickpea flour) and flavoured with black pepper, carom seeds, cloves, and pepper oil to create a firmer, spicier, more complex product than the sev found elsewhere. The Namkeen mix typically combines Ratlami Sev with Indori Poha Chivda (flattened rice tossed with spices and curry leaves), baked masala dal, roasted peanuts, and sometimes dried coconut chips. The result is a blend of textures — fine crunch of sev, chewy chivda, dense dal — and of flavours that never exhaust the palate. Every Indori family has a preferred ratio. The city's namkeen shops pack and ship these across India and internationally.",
    tasteProfile: "Crunchy · Spiced · Complex · Intensely Savoury",
    icon: "🥜",
    color: "#D4830A",
    isVeg: true,
    mustTry: true,
    spiceLevel: 2,
    images: [
      {
        url: "https://image.shutterstock.com/image-photo/indian-food-namkeen-isolated-on-260nw-1162750138.jpg",
        caption: "Indori Namkeen — Ratlami sev with poha chivda and masala peanuts",
      },
      {
        url: "https://www.shutterstock.com/image-photo/indian-food-namkeen-isolated-on-260nw-1162750021.jpg",
        caption: "Ratlami Sev — the spicier, denser foundation of Indori snack culture",
      },
      {
        url: "https://tse4.mm.bing.net/th/id/OIP.2-HvPvTkjURFGQezCNUVlQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Namkeen shop display, Indore — hundreds of varieties, each shop with its own signature blend",
      },
    ],
    ingredients: [
      "Ratlami Sev: besan, black pepper, carom seeds, cloves, pepper oil",
      "Poha Chivda: flattened rice, curry leaves, mustard, dried chilli",
      "Baked masala dal (chana dal)",
      "Roasted peanuts with kala namak",
      "Sometimes: sev mamra, coconut chips, dried mango",
    ],
    whereToEat: "Vijay Namkeen (Indore), any of the 200+ namkeen shops in Indore's Palasia and Rajwada areas — namkeen is sold by weight",
    bestTime: "Anytime — this is a snack, not a meal. Perfect accompaniment to chai at any hour.",
    story: "Indore's namkeen industry employs thousands and produces products consumed across India. The GI (Geographical Indication) tag for Ratlami Sev protects Indore's claim — the city has been formally recognised as the home of this product. The namkeen tradition grew from Indore's position as a trading crossroads where diverse communities brought their snack-making traditions.",
    pairWith: "Masala chai, always. The tannic tea balances the oily richness of the namkeen.",
    price: "₹200–400 per kg at namkeen shops; small packs from ₹20",
    funFact: "Ratlami Sev has a GI (Geographical Indication) tag — legally, only sev made in the Ratlam district using the specific recipe can be called Ratlami Sev. Indore's shops source from Ratlam (70 km away) for authentic product.",
  },

  // ─── 14. SHAHI TUKDA / DOUBLE KA MEETHA ─────────────────────────────────────
  {
    id: "shahi-tukda",
    name: "Bhopali Shahi Tukda",
    nameDev: "भोपाली शाही टुकड़ा",
    region: "Bhopal (Nawabi Tradition)",
    category: "Sweet",
    desc: "Fried bread slices soaked in saffron-rose milk, topped with thickened rabri and crushed pistachios. Mughal court dessert, alive in Bhopal's old city.",
    longDesc: "Shahi Tukda — 'royal pieces' — is a Mughal-era dessert that survived in its most authentic form in Bhopal's Nawabi culinary tradition. The preparation has three distinct stages, each requiring separate expertise. First, sheermal or white bread slices are fried in ghee until deep golden. Second, they are briefly soaked in a thin saffron-rose-sugar syrup so they absorb flavour without becoming soggy. Third, they are topped with rabri — milk slow-reduced for hours with cardamom and sugar until thick enough to stand — and finished with a scattering of chopped pistachios, a thread of saffron, and a drop of kewra. The result is simultaneously crisp and soft, sweet and fragrant, rich and light. This is dessert as architecture. Bhopal's Nawabi tradition maintained it as a feast-ending dish — you eat it after Korma and Sheermal, and it resolves the meal completely.",
    tasteProfile: "Rich · Saffron-Floral · Crisp-Soft · Rose-Scented",
    icon: "🍯",
    color: "#DAA520",
    isVeg: true,
    mustTry: false,
    spiceLevel: 0,
    images: [
      {
        url: "https://i.ytimg.com/vi/yTs3J1sJqHY/maxresdefault.jpg",
        caption: "Shahi Tukda — fried bread with rabri and saffron, Nawabi dessert",
      },
      {
        url: "https://www.crazymasalafood.com/wp-content/images/2022/04/Shahi-Tukda-696x522.jpg",
        caption: "Rabri preparation — milk reduced for hours, cardamom and rose water added",
      },
      {
        url: "https://blog.swiggy.com/wp-content/uploads/2024/02/Shahi-Tukda.jpg",
        caption: "Bhopali sweet shop at night — Nawabi desserts served from 8 PM",
      },
    ],
    ingredients: [
      "Sheermal or white bread — sliced thick",
      "Ghee for frying (not oil — the flavour is different)",
      "Thin sugar syrup: saffron, rose water, cardamom",
      "Rabri: full-fat milk reduced 4–5 hours with sugar and cardamom",
      "Pistachios (unsalted) — crushed coarse, not fine",
      "Kewra water: one drop only — fragrance, not flavour",
    ],
    whereToEat: "Bapu Ki Kutia (Bhopal), Manohar Dairy, old city Nawabi restaurants — available at dinner service",
    bestTime: "After a full Nawabi meal — this is a meal-ender, not a standalone snack",
    story: "Shahi Tukda arrived in the Indian subcontinent via Persian and Central Asian trading routes. The Mughal court standardised its preparation, and the Nawabs of Bhopal maintained the recipe as part of their court cuisine. Unlike many Mughal dishes that disappeared with the courts, Shahi Tukda survived in Bhopal because the old city still has a continuous living Nawabi food culture.",
    pairWith: "A small glass of kesar doodh (saffron milk) — or simply nothing, eaten in complete silence",
    price: "₹120–200 per serving at Bhopal restaurants; ₹60–100 at old-city sweet shops",
    funFact: "The word 'Shahi' (royal) in the name is not hyperbole — this was literally a court dish. Many Mughal recipes with 'Shahi' in the name were eaten in court but not available to commoners. Bhopal's democratisation of Nawabi food over the last century is one of the more interesting food history stories in India.",
  },
];

// ─── FOOD STATS ───────────────────────────────────────────────────────────────

export const FOOD_STATS = [
  { value: "14", label: "Iconic Dishes", sub: "From tribal forests to Nawabi courts", icon: "🍽️" },
  { value: "200+", label: "Namkeen Shops", sub: "Indore alone — the snack capital of India", icon: "🥜" },
  { value: "1878", label: "Oldest Sweet Shop", sub: "Mishrilal Sweets, Ujjain — still operating", icon: "🍮" },
  { value: "GI Tagged", label: "Ratlami Sev", sub: "Legally protected origin — only from Ratlam district", icon: "⭐" },
  { value: "₹15", label: "Best Breakfast", sub: "Poha-Jalebi at Guru Sagar Sweets, Indore 1962", icon: "🥘" },
  { value: "5 Months", label: "Garadu Season", sub: "October–February only — the city mourns its end", icon: "🥔" },
];

// ─── WHERE TO EAT GUIDE ───────────────────────────────────────────────────────

export const WHERE_TO_EAT = [
  {
    city: "Indore",
    icon: "🏙️",
    color: "#F4A261",
    headline: "India's Food Capital",
    desc: "Consistently ranked India's best street food city. The Sarafa Bazaar jewellery market converts to a massive food market every night from 8 PM to 2 AM — the only night street food market in India operating inside a daytime gold market.",
    mustVisit: ["Sarafa Bazaar (night)", "Chappan Dukan (56 shops)", "Rajwada area breakfast stalls"],
    speciality: "Poha-Jalebi · Garadu · Bhutte Ka Kees · Ratlami Sev · Namkeen",
  },
  {
    city: "Bhopal",
    icon: "🕌",
    color: "#8B4513",
    headline: "The Nawabi Kitchen",
    desc: "Old Bhopal's Chowk Bazaar and Itwara area preserve a Nawabi food culture that Lucknow has partially lost. The best kebab, korma, and sheermal in Central India is found in these lanes after 7 PM.",
    mustVisit: ["Chowk Bazaar (Old City)", "Itwara lanes", "Taj-ul-Masajid surroundings at night"],
    speciality: "Seekh Kebab · Gosht Korma · Shahi Sheermal · Shahi Tukda",
  },
  {
    city: "Gwalior",
    icon: "🏰",
    color: "#B5834A",
    headline: "Sweets & Chambal Cuisine",
    desc: "Gwalior's contribution to Indian food is dual: the finest Gajak in India, and the unusual Chambal-region food culture that includes Chakki Ki Shaak and a robust non-vegetarian tradition from the valley.",
    mustVisit: ["Danaram Sweets (Gwalior est. 1947)", "Halwai Gali old city", "Gwalior Station platform vendors"],
    speciality: "Gajak · Chakki Ki Shaak · Dal Baati · Chambal fish curry",
  },
  {
    city: "Ujjain",
    icon: "🛕",
    color: "#D4956A",
    headline: "Temple Town Flavours",
    desc: "Ujjain's food culture is inseparable from its sacred geography. The ghats and temple precincts produce distinctive sattvic cooking alongside the mithai tradition of Mawa Bati and the Kalidas-era sweet-making lineage.",
    mustVisit: ["Mishrilal Sweets (est. 1878)", "Ram Ghat prasad stalls", "Freeganj market area"],
    speciality: "Mawa Bati · Sabudana Khichdi · Shahi Sheermal · Temple Prasad",
  },
];