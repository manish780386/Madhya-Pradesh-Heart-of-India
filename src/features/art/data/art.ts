// ─── EXTENDED TYPES ───────────────────────────────────────────────────────────

export interface ArtImage {
  url: string;
  caption: string;
}

export interface ArtDetail {
  id: string;
  name: string;
  tribe: string;
  region: string;
  colors: [string, string, string];
  desc: string;
  history: string;
  pattern: "dots" | "horses" | "floral" | "bronze" | "geometric" | "tattoo" | "weave" | "textile";
  // New deep fields
  images: ArtImage[];
  medium: string;           // what materials are used
  whoMakes: string;         // gender, caste, community roles
  ritual: string;           // sacred or secular context
  whereToSee: string;       // where to buy / witness live
  modernStatus: string;     // how the art is doing today
  keyArtist: string;        // a named master to know
  technique: string;        // the specific method
  funFact: string;
  era: string;              // how old
  giTagged: boolean;        // GI protection status
  price: string;            // approximate cost for a piece
}

export const TRIBAL_ARTS: ArtDetail[] = [

  // ─── 1. GOND ART ──────────────────────────────────────────────────────────
  {
    id: "gond",
    name: "Gond Art",
    tribe: "Gond Tribe (Pardhan Gond sub-community)",
    region: "Mandla · Dindori · Seoni · Balaghat",
    colors: ["#FF6B6B", "#FECA57", "#48DBFB"],
    desc: "Living cosmology painted in dots, lines, and patterns — animals, gods, and the entire natural world woven into a visual prayer that transforms every surface it touches.",
    history: "Gond art originated not as decoration but as ritual practice — paintings on walls, floors, and doors to invite good fortune and connect the home with the spirit world. The Pardhan Gond sub-community were hereditary genealogists who recorded clan histories through oral poetry and painting. Every line, dot, and colour carries cosmological meaning: the fish-scale pattern represents the earth's surface; the dot-and-dash linear fills are the breathing of animals and the flow of rivers. Master artist Jangarh Singh Shyam (1960–2001) was discovered by artist Swaminathan in Bhopal in 1981 and became the first Gond artist to transfer the tradition from wall to canvas and paper. His work entered museums across Europe and the USA. After his death, artists like Bhajju Shyam, Durgabai Vyam, and Ram Singh Urveti have carried the tradition to international recognition. Today Gond paintings sell at Christie's and are taught in art schools in Germany, while the village walls of Mandla still host the original form.",
    pattern: "dots",
    images: [
      {
        url: "https://i.etsystatic.com/16482586/r/il/27c80c/1473486527/il_1588xN.1473486527_p0xt.jpg",
        caption: "Gondi goddess by Jangarh Singh Shyam — the artist who brought Gond art to the world",
      },
      {
        url: "https://www.memeraki.com/cdn/shop/files/Harmony-in-Diversity-Gond-Art-Expressions-by-Kailash-Pradhan-2_1024x.jpg?v=1726336820",
        caption: "Classic Gond dot-and-line pattern — fish, tree, and cosmic geometry",
      },
      {
        url: "https://tse2.mm.bing.net/th/id/OIP.vx1EXebKqrYeRGt86bsGNAHaNK?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Bhajju Shyam at work — contemporary Gond master, international exhibitions",
      },
    ],
    medium: "Natural pigments on paper or canvas; traditionally mineral colours on mud walls and floors",
    whoMakes: "Primarily Pardhan Gond men and women — the community is matrilineal in artistic transmission",
    ritual: "Originally ritual — painted during birth, marriage, harvest festivals to invite deities. Now also secular and commercial.",
    whereToSee: "Bhopal State Tribal Museum · Madhya Pradesh Tribal Research Institute (Bhopal) · Dindori district villages (authentic wall paintings) · Tuli Ama, Dindori (artist collective)",
    modernStatus: "Thriving — international auction market, gallery representation in Delhi, Berlin, New York. Village practice also maintained.",
    keyArtist: "Jangarh Singh Shyam (1960–2001) — discovered in Mandla, exhibited at Pompidou Centre, Paris",
    technique: "Fine brush tip creates interlocking dots and lines — no sketching, the pattern is held entirely in the artist's memory",
    funFact: "Bhajju Shyam (nephew of Jangarh) was commissioned to paint the walls of an Indian restaurant in Birmingham, UK in 2001 — he had never left Madhya Pradesh before. His book 'The London Jungle Book' documents his experience seeing London through Gond visual language.",
    era: "2,000+ years as wall ritual; canvas tradition from 1981",
    giTagged: true,
    price: "₹800–2,000 for small prints · ₹15,000–5,00,000+ for original paintings by known artists",
  },

  // ─── 2. BHIL PITHORA ──────────────────────────────────────────────────────
  {
    id: "bhil-pithora",
    name: "Bhil Pithora Painting",
    tribe: "Bhil & Bhilala Tribes",
    region: "Jhabua · Alirajpur · Dhar · Khargone",
    colors: ["#FF9FF3", "#FECA57", "#54A0FF"],
    desc: "Sacred murals that are cosmic maps — horses, gods, and ancestors painted across an entire wall as a ritual invocation commissioned only in times of need.",
    history: "Pithora paintings are not art in the conventional sense — they are a medical and spiritual procedure. A Pithora is commissioned when a family suffers repeated illness, failed crops, or unresolved conflict. The family consults a traditional healer (Badwa) who determines that the ancestral deity Pithora (represented as a divine horse) requires a dwelling in the home. A team of male painters (Lakhara) prepares the paint from natural materials: white from khadiya stone, black from charcoal, red from geru (iron oxide). The Badwa chants throughout the painting process, which spans three days and cannot be interrupted. The composition is fixed: Pithora the horse in the centre, his consort Pithori to his right, secondary deities, animals, humans, the sun and moon — each in a prescribed position. The completed painting cannot be moved, altered, or photographed without the family's ritual permission. When the family moves house, the old Pithora must be formally released before a new one is commissioned.",
    pattern: "horses",
    images: [
      {
        url: "https://indianfolkart.org/wp-content/uploads/2022/12/Bhil-painting-Anand-Bariya-09.jpg",
        caption: "Bhil Pithora — the divine horses Pithora and Pithori with secondary deities",
      },
      {
        url: "https://indianfolkart.org/wp-content/uploads/2022/12/Bhil-painting-Anand-Bariya-11.jpg",
        caption: "Horse and birds — Pithora composition, Jhabua district",
      },
      {
        url: "https://tse4.mm.bing.net/th/id/OIP.OIE4rrXI0ig1MSD2kGEz4wHaKn?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Full wall Pithora mural — three-day ritual painting, household shrine",
      },
    ],
    medium: "Mineral pigments (geru, khadiya, charcoal) on mud-plastered walls; newer versions on paper and canvas",
    whoMakes: "Men only — the Lakhara community of painters. Women are present but do not paint. The Badwa (healer) chants throughout.",
    ritual: "Strictly ritual — commissioned only for healing or blessing. Not created for aesthetic purposes in traditional context.",
    whereToSee: "Jhabua district villages (authentic commissions visible with permission) · Bhuri Singh Museum, Chamba (archived examples) · Bhagoria Haat festival market, Jhabua (contemporary Pithora on paper)",
    modernStatus: "Dual existence — authentic ritual use continues in villages; contemporary Pithora art on paper now sold at craft fairs and online",
    keyArtist: "Nankusiya Shyam (Jhabua) — one of the last practitioners of the authentic three-day ritual Pithora; exhibited internationally",
    technique: "No grid or underdrawing. The Lakhara memorises the canonical composition entirely. Colours applied with fingers and cloth, not brushes.",
    funFact: "A Pithora mural contains over 40 prescribed figures — the Lakhara must include every element or the ritual is considered incomplete. Missing a figure, according to tradition, means the healing will not take effect.",
    era: "Estimated 1,000+ years in current ritual form; origins in pre-agricultural Bhil spiritual practice",
    giTagged: false,
    price: "Contemporary Pithora paintings: ₹2,000–25,000 depending on size and artist",
  },

  // ─── 3. BAGH BLOCK PRINT ──────────────────────────────────────────────────
  {
    id: "bagh-print",
    name: "Bagh Hand Block Print",
    tribe: "Khatri Community Craftsmen",
    region: "Bagh Village · Dhar District",
    colors: ["#D63031", "#6C5CE7", "#00B894"],
    desc: "Hand-block printed fabric using only natural dyes on hand-woven cotton — geometric and floral patterns that have survived 600 years of unbroken craft tradition.",
    history: "The craft of Bagh printing arrived in the village of Bagh, on the banks of the Baghini river in Dhar district, when Muslim block printers from Sindh (now Pakistan) migrated south in the 14th century. They chose Bagh for a specific and irreplaceable reason: the chemistry of the Baghini river water, high in alkaline minerals, is essential to the natural dye-fixing process. No other river water produces the same result. The complete process takes three weeks. Raw fabric is soaked in a solution of camel or cow dung, washed, dried, and treated with myrobalan (a natural mordant). Hand-carved teakwood blocks — some inherited across 15 generations — are pressed by hand with natural dye paste. After printing, the fabric is washed in the Baghini river, which fixes the colour permanently through a chemical reaction between the mordant and the alkaline water. The red comes from alizarin extracted from madder root. The black from iron rust. No synthetic dyes are used — ever. The GI-tagged Bagh Print is under threat from cheap imitations printed by screen with synthetic dyes and sold as 'Bagh Print' across India.",
    pattern: "floral",
    images: [
      {
        url: "https://tse1.mm.bing.net/th/id/OIP.Gese_Eb-h7XJPMz5_k8NsQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Bagh Hand Block Print — natural red from madder root on hand-woven cotton",
      },
      {
        url: "https://tse1.mm.bing.net/th/id/OIP.dgL10t-QARG8fbGkXAhNFgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Artisan applying hand-carved teakwood block — Bagh Village, Dhar",
      },
      {
        url: "https://tse3.mm.bing.net/th/id/OIP.22vTsCjQG7KKXYXuqvSkOwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Block-printed fabric after Baghini river wash — the chemistry of the river fixes the dye",
      },
    ],
    medium: "Hand-woven cotton cloth; natural dyes from madder root (red), iron rust (black), myrobalan (mordant); teakwood printing blocks",
    whoMakes: "Khatri Muslim community — craft passed father to son. Block carvers are a separate specialist community. The Baghini river is a passive but essential participant.",
    ritual: "Secular trade craft — but the opening of a new block (carved by a specialist) involves a small ritual acknowledgment",
    whereToSee: "Bagh village itself (Dhar district, 3 hrs from Indore) · Ismail Sulemanji's workshop (master craftsman, will demonstrate) · Crafts Museum, New Delhi · Dilli Haat, Delhi",
    modernStatus: "Endangered — fewer than 20 families still practice authentic Bagh printing. GI tag exists but enforcement is weak.",
    keyArtist: "Mohammed Yusuf Khatri — National Award winner, 5th generation Bagh printer, one of the last guardians of authentic process",
    technique: "Three-week process: dung treatment → mordanting → hand block printing → sun drying → Baghini river wash. Each step irreplaceable.",
    funFact: "The teakwood printing blocks used today in Bagh include some that are over 200 years old — passed through 10+ generations. A damaged block cannot be simply replaced; a specialist block carver must replicate it exactly, which takes months.",
    era: "600+ years — established 14th century CE by Sindhi Muslim migrants",
    giTagged: true,
    price: "₹800–3,500 for a saree/dupatta · ₹400–1,200 for fabric by the metre",
  },

  // ─── 4. DHOKRA ────────────────────────────────────────────────────────────
  {
    id: "dhokra",
    name: "Dhokra Metal Casting",
    tribe: "Ojha/Lohar Craftsmen",
    region: "Balaghat · Chhindwara · Betul",
    colors: ["#FDCB6E", "#E17055", "#636E72"],
    desc: "Lost-wax bronze casting — an unbroken 4,500-year-old tradition that produces figures of goddess, peacock, and tribal life in timeless, unrepeatable metal.",
    history: "Dhokra is the oldest known non-ferrous metal casting tradition in continuous practice anywhere in the world. The Dancing Girl of Mohenjo-daro — cast in 2500 BCE and now in the National Museum, Delhi — was made using exactly the same cire perdue (lost-wax) technique that Dhokra craftsmen in Balaghat and Chhindwara still use today. The process produces no two identical pieces — the mold is destroyed to release the casting, making every Dhokra object unique. The craftsman builds a clay core, covers it with beeswax, sculpts the design in wax, covers the wax with fine clay, bakes it (the wax melts out — hence 'lost wax'), and pours molten brass or bronze through a channel. When the outer clay is broken, the casting emerges. The process takes 2–3 days per piece. In MP's Balaghat and Betul districts, Ojha craftsmen maintain family workshops with clay furnaces that have been rebuilt in the same location for generations. The figures they produce — dancing girls, horses, oil lamps, elephants, tribal deities — carry the visual vocabulary of a civilisation that predates history's written record.",
    pattern: "bronze",
    images: [
      {
        url: "https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2022/12/dhokra.jpg",
        caption: "Dhokra lost-wax cast warrior figure — Bastar style, brass, completely hand-made",
      },
      {
        url: "https://static.wixstatic.com/media/9dd462_3aaaf70758974cb69131c26efb783e06~mv2.jpg/v1/fill/w_711,h_483,al_c,q_80,enc_avif,quality_auto/9dd462_3aaaf70758974cb69131c26efb783e06~mv2.jpg",
        caption: "Dhokra jewellery box — tribal figures in bas-relief, same technique as 2500 BCE",
      },
      {
        url: "https://images.squarespace-cdn.com/content/v1/61cc66f9e8f1cb7928c32c66/037439f8-3d74-45d8-b71d-e7137f6cb20d/dhokra%2Bart%2B2.jpeg",
        caption: "The Dancing Girl of Mohenjo-daro (2500 BCE) — made with the identical lost-wax technique",
      },
    ],
    medium: "Beeswax (model), fine clay (mold), scrap brass or bronze (casting) — all sourced locally",
    whoMakes: "Ojha and Lohar communities — men do the casting, women sometimes do the wax modelling for smaller decorative elements",
    ritual: "The first casting of the day involves a brief prayer to Vishwakarma (deity of craftsmen). The destruction of the mold is never done carelessly — it is treated as a release, not destruction.",
    whereToSee: "Balaghat district craft workshops (direct from artisan) · Crafts Museum, New Delhi · Madhya Pradesh Hastashilp Vikas Nigam, Bhopal · Surajkund Crafts Mela (February, Haryana)",
    modernStatus: "Vulnerable — youth are leaving the craft due to low wages. NGO interventions and government craft fairs provide some income. International collectors drive premium pricing.",
    keyArtist: "Sonadhar Viswakarma (Kondagaon, nearby Bastar) — National Award, exhibited at Smithsonian Institution",
    technique: "1: Build clay core. 2: Apply beeswax over clay, sculpt in detail. 3: Coat in fine clay. 4: Fire (wax melts out). 5: Pour molten metal. 6: Break clay. 7: One unique piece.",
    funFact: "Every Dhokra piece has a small deliberate imperfection introduced by the craftsman — in the tradition, perfection belongs only to the divine. The flaw makes the piece human.",
    era: "4,500 years continuous — same technique as Mohenjo-daro Dancing Girl (2500 BCE)",
    giTagged: false,
    price: "₹500–2,000 for small figures · ₹5,000–50,000 for large ceremonial pieces",
  },

  // ─── 5. KORKU PAINTING ────────────────────────────────────────────────────
  {
    id: "korku-painting",
    name: "Korku Tribal Painting",
    tribe: "Korku Tribe",
    region: "Betul · Harda · Khandwa · Satpura Hills",
    colors: ["#A29BFE", "#FD79A8", "#00CEC9"],
    desc: "Geometric patterns encoding seasonal knowledge — planting cycles, migration routes, and ancestral stories compressed into repeated angular forms made only by women.",
    history: "The Korku tribe of the Satpura-Vindhya highlands developed a distinct visual language that has no parallel in Indian art: their paintings encode practical ecological knowledge in geometric form. The angular, repeating patterns are derived directly from their basket-weaving patterns — the same hand movement that weaves a functional container also creates a painting. Unlike Gond (narrative and representational) or Bhil Pithora (cosmic and symbolic), Korku painting is fundamentally informational: it records planting times, monsoon cycles, animal migration routes, the locations of water sources, and the outcomes of historical events. Each pattern element is a mnemonic — women who create these paintings can 'read' them back as stories. The paintings are created exclusively by women, during life-passage festivals: at birth, first menstruation, marriage, and death. They are never sold — only given within the community. The shift of some Korku paintings to commercial paper formats is recent and contested within the community.",
    pattern: "geometric",
    images: [
      {
        url: "https://www.artzula.com/cdn/shop/products/2173-z4twh51DflM0cIaYDzJD0h7xhdHOes2q1rktata0_1445x.png?v=1646683284",
        caption: "Korku geometric painting — angular patterns encoding seasonal agricultural knowledge",
      },
      {
        url: "https://img-s1.onedio.com/id-56e95dbc2b0278ec04abeab3/rev-0/w-600/h-357/f-jpg/s-64197d930c63c1e2c526baa26c9a0551324ffb25.jpg",
        caption: "Korku woman creating festival painting — Satpura hills, Betul district",
      },
      {
        url: "https://tse2.mm.bing.net/th/id/OIP.IhP0J6NXuaHau-rQLfg3vwHaKu?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Geometric pattern detail — each angular element is a specific ecological record",
      },
    ],
    medium: "Natural earth pigments on mud walls; some transition to paper with natural dyes from turmeric, indigo, and charcoal",
    whoMakes: "Women only — one of the few Indian art traditions that categorically excludes men from creation",
    ritual: "Life-passage ritual only — birth, puberty, marriage, death. Also created before first monsoon sowing as agricultural blessing.",
    whereToSee: "Satpura National Park buffer villages (Betul district) · Lokrang Festival Bhopal (January) · Tribal Research Institute, Bhopal",
    modernStatus: "At risk — fewer than 200 practitioners in active practice. No GI tag. Documentation underway by anthropologists.",
    keyArtist: "Phoolbai Korku (Betul) — documented by the MP Tribal Research Institute as a primary knowledge holder",
    technique: "The hand movement is identical to basket weaving — the same wrist rotation that creates a woven pattern creates an angular geometric motif on a flat surface",
    funFact: "A single Korku geometric painting can contain the planting calendar for an entire year — which crops in which season, which fields to fallow, when rain arrives. It is a functional agricultural document disguised as decoration.",
    era: "Unknown — predates written records; the geometric tradition is estimated 1,500+ years based on archaeological comparison",
    giTagged: false,
    price: "Not commercially available in traditional form. Contemporary paper versions: ₹500–3,000 from Lokrang or craft fairs.",
  },

  // ─── 6. BAIGA GODNA (TATTOO ART) ─────────────────────────────────────────
  {
    id: "baiga-godna",
    name: "Baiga Godna (Tattoo Art)",
    tribe: "Baiga Tribe",
    region: "Dindori · Mandla · Balaghat · Umaria",
    colors: ["#2D3436", "#6C5CE7", "#00B894"],
    desc: "The original permanent art — Baiga women cover their bodies with tattoos that are their only clothing before marriage, their spiritual identity, and their passport to the afterlife.",
    history: "Baiga Godna is one of the most extraordinary art traditions in India — and one of the least known. Baiga women have traditionally covered their bodies with intricate tattoos from neck to ankle, in a tradition that serves simultaneously as clothing, spiritual protection, identity, and eschatology. In Baiga belief, the body's tattoos are the only possessions that accompany the soul after death — gold and silk can be removed, but Godna cannot. Young Baiga girls begin receiving tattoos from the age of 8, and the full body covering is completed by marriage. The tattooist (Godharini) is a specialist woman of the Agaria or Ojha community. She uses thorns or needles, soot mixed with oil as ink, and works in specific sessions tied to agricultural calendars. The designs are not random — each motif (peacock, sun, moon, leaf, geometric) carries specific meaning related to clan identity, marital status, and spiritual protection. Today, younger Baiga women increasingly choose not to continue the tradition under social pressure from mainstream society. The last generation of fully tattooed Baiga women are elderly — their bodies carry an art tradition that is disappearing in real time.",
    pattern: "tattoo",
    images: [
      {
        url: "https://www.savaari.com/blog/wp-content/uploads/2024/09/Baiga.webp",
        caption: "Baiga Godna tattoo study — intricate body-covering geometric and naturalistic motifs",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0fc78d78175043.5c9ce61c732e2.jpg",
        caption: "Elderly Baiga woman — full traditional Godna body tattoo, Mandla district",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/40951e78175043.5c9ce61c728e1.jpg",
        caption: "Peacock motif detail — one of the primary Godna design elements",
      },
    ],
    medium: "Soot mixed with mustard oil, applied via thorns or metal needles under the skin — permanent",
    whoMakes: "Received by Baiga women. Applied by Godharini — specialist women tattooists of the Agaria community. A dying profession.",
    ritual: "Deeply ritualistic — specific motifs must be applied in a specific order tied to life stages. The first tattoo is given with ceremony. Each tattoo session is preceded by fasting.",
    whereToSee: "Kanha National Park buffer villages (Mandla, Dindori) — elderly women with full Godna visible · Lokrang Festival, Bhopal (January) occasionally features Baiga artists · Indira Gandhi Rashtriya Manav Sangrahalaya (IGRMS), Bhopal — comprehensive documentation",
    modernStatus: "Critically endangered — the last generation of fully tattooed women are in their 60s–80s. The practice has nearly stopped among women under 40.",
    keyArtist: "No individual artists — the tradition is communal. Anthropologist Verrier Elwin documented Baiga Godna extensively in the 1930s–1940s. His photographs in the IGRMS archive are the most comprehensive record.",
    technique: "Needles or thorns are used to puncture the skin in the design pattern. Soot-oil mixture is rubbed in. The wound heals dark. One session produces a 10×10 cm area and takes hours.",
    funFact: "In Baiga cosmology, a woman who dies without Godna cannot enter the afterlife and becomes a wandering spirit. The tattoos are not aesthetic — they are eschatological documents. This belief is what drove the tradition's centuries-long persistence despite the pain and infection risk.",
    era: "Pre-modern — origin unknown, practice documented by colonial ethnographers from 1860s onward",
    giTagged: false,
    price: "Not a commercial art. Contemporary artists inspired by Godna create prints and textiles: ₹500–5,000",
  },

  // ─── 7. CHANDERI WEAVING ──────────────────────────────────────────────────
  {
    id: "chanderi-weaving",
    name: "Chanderi Handloom",
    tribe: "Koshthi Weaver Community",
    region: "Chanderi · Ashoknagar District",
    colors: ["#F9CA24", "#F0932B", "#6AB04C"],
    desc: "Silk-cotton fabric woven with gold zari — so translucent it is called 'woven air'. 2,500 years of weaving tradition from a single small town.",
    history: "The town of Chanderi in Ashoknagar district has been producing textiles since the time of the Maurya Empire (322–185 BCE). Chanderi fabric is produced by the Koshthi weaver community who have maintained the craft across 2,500 years without discontinuation. The distinguishing feature of Chanderi cloth is its translucency — silk-cotton blends woven so finely that the fabric is nearly see-through while remaining structurally strong. The gold and silver zari (metallic thread) brocade motifs — lotus, dancing figures, geometric borders — are woven directly into the cloth on handlooms, not embroidered afterward. Chanderi cloth features in Mughal records (Ain-i-Akbari mentions it as an imperial fabric), in the courts of Gwalior's Scindia dynasty, and in Mahatma Gandhi's advocacy for handloom during the independence movement. Today, approximately 3,800 handlooms operate in Chanderi — the largest concentration of working handlooms in any single Indian town. The GI tag protects it, but power-loom imitations sold as 'Chanderi' are widespread.",
    pattern: "weave",
    images: [
      {
        url: "https://d35l77wxi0xou3.cloudfront.net/collab/craft1582796227Chanderi-Banner.jpg",
        caption: "Chanderi handloom silk — gold zari lotus motif on translucent silk-cotton weave",
      },
      {
        url: "https://assets.vogue.in/photos/5d42b2f4abccd50008931349/master/w_1600%2Cc_limit/Chanderi%252520by%252520Raw%252520Mango%252520two.JPG",
        caption: "Chanderi loom — the zari brocade is woven directly, not embroidered",
      },
      {
        url: "https://d35l77wxi0xou3.cloudfront.net/collab/craft1575527718Chanderi%20Showcase%202.jpg",
        caption: "Chanderi saree detail — 'woven air' translucency that has defined the fabric for 2,500 years",
      },
    ],
    medium: "Silk and cotton warp/weft; real gold and silver zari; natural dyes (increasingly synthetic dyes in commercial production)",
    whoMakes: "Koshthi weaver community — both men and women. Men typically operate the loom; women wind the bobbins and prepare thread.",
    ritual: "The first weave of the year after Diwali involves a loom puja. New looms are consecrated before first use.",
    whereToSee: "Chanderi town itself (3.5 hrs from Bhopal) — hundreds of working looms visible in homes · MP Emporium, Bhopal · Chanderi Handloom Co-operative showroom on the main road",
    modernStatus: "Active but economically stressed — 3,800 handlooms working but income per weaver is low. GI tag helps premium buyers. Power-loom competition severe.",
    keyArtist: "No individual — collective Koshthi community tradition. Master weavers acknowledged locally but not nationally named.",
    technique: "Hand-thrown shuttle on pit loom. Zari brocade created by extra-weft technique — additional metallic thread passed over the main weft at specific intervals using a separate shuttle.",
    funFact: "A single Chanderi saree can take 3–7 days to weave depending on the density of zari brocade. The most complex 'butti' (spotted) designs with thousands of brocade dots across the body take a full week. At ₹3,000 for a week's work, the economics are brutal.",
    era: "2,500 years — Maurya period records mention Chanderi fabric",
    giTagged: true,
    price: "₹1,500–8,000 for sarees · ₹600–2,500 for dupattas · Avoid sarees priced below ₹1,200 — they are power-loom copies",
  },

  // ─── 8. MAHESHWAR WEAVING ─────────────────────────────────────────────────
  {
    id: "maheshwar-weaving",
    name: "Maheshwar Handloom",
    tribe: "Maheshwari Weaver Community",
    region: "Maheshwar · Khargone District · Narmada Riverbank",
    colors: ["#C0392B", "#8E44AD", "#16A085"],
    desc: "Temple-town cloth woven on the banks of the Narmada — reversible borders, rich silk, and a design vocabulary maintained by Rani Ahilyabai Holkar 250 years ago.",
    history: "The Maheshwar handloom tradition is inseparable from one of India's most remarkable rulers: Rani Ahilyabai Holkar (1725–1795), who ruled the Holkar kingdom from Maheshwar on the Narmada river after her husband's death. Ahilyabai was a military strategist, urban planner, and patron of crafts who invited master weavers from across India to settle in Maheshwar and revitalise its weaving tradition. She established the design vocabulary that Maheshwari sarees still follow: reversible borders (the border looks the same from both sides of the fabric), silk warp with cotton weft, and a specific set of border patterns named after the temples she built. The sarees she patronised were woven for the women of her court and as gifts to temples across India. The Maheshwari saree is distinct for its reversible border, its muted silk colours, and its temple-inspired geometric borders. Today, the Rehwa Society — a social enterprise on the banks of the Narmada in Maheshwar — employs 120 weavers and has kept the authentic tradition alive while most of India has shifted to power looms.",
    pattern: "textile",
    images: [
      {
        url: "https://tse1.explicit.bing.net/th/id/OIP.CcIP_H07LAq7Yhv9q37l3QHaJ8?rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Maheshwari saree — reversible border in silk, Narmada riverbank tradition",
      },
      {
        url: "https://live.staticflickr.com/5532/31108352952_f7557b7854_b.jpg",
        caption: "Weaver at Rehwa Society, Maheshwar — the social enterprise keeping the tradition alive",
      },
      {
        url: "https://c8.alamy.com/comp/2B3M5Y6/handloom-weaving-maheshwar-madhya-pradesh-india-asia-2B3M5Y6.jpg",
        caption: "Maheshwar Ghat — the Narmada river where the town's weaving tradition was born",
      },
    ],
    medium: "Silk warp with cotton weft; natural dyes including pomegranate rind, indigo, turmeric (Rehwa Society); real silver zari for border",
    whoMakes: "Maheshwari weaver community — male weavers on the loom; women in thread preparation and finishing. Rehwa Society employs both communities.",
    ritual: "Weaving in Maheshwar is tied to the town's sacred geography — the Narmada river, visible from the weaving sheds, is considered the spiritual patron of the craft.",
    whereToSee: "Rehwa Society showroom, Maheshwar fort complex (on the Narmada) · MP Emporium, Bhopal and Indore · The town itself — 90 km from Indore, accessible by road",
    modernStatus: "Niche but stable — Rehwa Society has created a sustainable premium market. Artisan income higher than Chanderi equivalents. International buyers.",
    keyArtist: "Rani Ahilyabai Holkar (1725–1795) — patron and design architect. Sally Holkar (American-born weaver who married into the Holkar family) revived the tradition through Rehwa Society in the 1970s.",
    technique: "Pit loom with fly shuttle. The reversible border is achieved through a specific interlocking of the border weft that creates the same visual pattern on both faces of the cloth.",
    funFact: "The Maheshwari saree border has exactly 9 prescribed patterns — named after the 9 primary temples Rani Ahilyabai built across India. Weavers who know all 9 patterns are considered masters of the tradition.",
    era: "250+ years in current form (Ahilyabai era); weaving in Maheshwar documented from 500+ years prior",
    giTagged: true,
    price: "₹2,500–15,000 for authentic handloom sarees at Rehwa Society · Cheaper options elsewhere are likely mill-made",
  },
];

// ─── ART STATS ────────────────────────────────────────────────────────────────

export const ART_STATS = [
  { value: "8", label: "Living Art Forms", sub: "From 2,500-year-old weaving to disappearing tattoo traditions", icon: "🎨" },
  { value: "4,500", label: "Years of Dhokra", sub: "Same technique as the Mohenjo-daro Dancing Girl", icon: "🏺" },
  { value: "3,800", label: "Active Handlooms", sub: "In Chanderi alone — India's densest handloom town", icon: "🧵" },
  { value: "GI Tagged", label: "3 Art Forms", sub: "Gond Art, Bagh Print, Chanderi & Maheshwar weaving protected", icon: "⭐" },
  { value: "200", label: "Korku Practitioners", sub: "Remaining active practitioners of geometric ecological painting", icon: "🖌️" },
  { value: "1981", label: "Gond Goes Global", sub: "Year Jangarh Singh Shyam was discovered in Mandla village", icon: "🌍" },
];

// ─── WHERE TO BUY / EXPERIENCE ────────────────────────────────────────────────

export const WHERE_TO_EXPERIENCE = [
  {
    city: "Bhopal",
    icon: "🏛️",
    color: "#C77DFF",
    headline: "Museum City for Tribal Art",
    places: [
      "Indira Gandhi Rashtriya Manav Sangrahalaya (IGRMS) — largest tribal museum in Asia",
      "MP Tribal Research Institute — academic archive with live demonstrations",
      "Madhya Pradesh Hastashilp Vikas Nigam — government craft emporium",
      "Lokrang Festival (January) — 5,000 artists including Gond, Bhil, Baiga all present",
    ],
  },
  {
    city: "Mandla / Dindori",
    icon: "🌿",
    color: "#FF6B6B",
    headline: "Gond Art Heartland",
    places: [
      "Tuli Ama Collective (Dindori) — artist-run studio, original Gond paintings",
      "Village wall paintings — visible in Patangarh and surrounding villages",
      "Direct purchase from artists — best prices, most authentic work",
      "Patangarh village — Jangarh Singh Shyam's birthplace",
    ],
  },
  {
    city: "Jhabua",
    icon: "🐴",
    color: "#FECA57",
    headline: "Bhil Pithora Country",
    places: [
      "Bhagoria Haat Festival (March) — Pithora paintings on paper available",
      "Alirajpur district villages — authentic wall murals with community permission",
      "Jhabua town craft market — contemporary Pithora by local artists",
    ],
  },
  {
    city: "Maheshwar + Chanderi",
    icon: "🧵",
    color: "#F9CA24",
    headline: "Living Handloom Towns",
    places: [
      "Rehwa Society, Maheshwar Fort — buy direct, watch weaving",
      "Chanderi town — 3,800 looms, visit any street for working weavers",
      "Chanderi Handloom Co-operative — government-fixed prices, guaranteed authentic",
      "Bagh Village (Dhar) — Mohammed Yusuf Khatri's workshop for Bagh Print",
    ],
  },
];