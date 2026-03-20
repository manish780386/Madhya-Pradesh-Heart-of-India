import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart, Trash2, ArrowRight, Sun, Plane, Hotel,
  Camera, Wallet, MessageCircle, MapPin, Clock,
  ChevronDown, ChevronUp, Star, Zap,
} from "lucide-react";
import { CITIES } from "../cities/data/cities";
import { useWishlist } from "../../hooks";
import { PageHero, SectionHeader } from "../../components/ui/index.tsx";

// ─── DATA (same as original) ──────────────────────────────────────────────────

const ITINERARIES = [
  {
    days: "3 Days",
    title: "Golden Triangle",
    cities: ["Bhopal", "Sanchi", "Bhojpur"],
    color: "#C9A84C",
    icon: "🏛️",
    theme: "History & Heritage",
    desc: "The short, perfect loop — Buddhist stupa, ancient temple, and a lake city in 72 hours.",
    budget: "₹8,000–15,000",
    highlight: "Sanchi Stupa sunrise",
  },
  {
    days: "5 Days",
    title: "Royal Heartland",
    cities: ["Gwalior", "Orchha", "Khajuraho", "Panna"],
    color: "#E63946",
    icon: "🏰",
    theme: "Forts & Temples",
    desc: "Forts, medieval Bundela architecture, UNESCO temples, and a tiger reserve with a comeback story.",
    budget: "₹18,000–32,000",
    highlight: "Orchha chhatris at sunset",
  },
  {
    days: "7 Days",
    title: "Wild & Sacred",
    cities: ["Ujjain", "Bhopal", "Pachmarhi", "Kanha", "Bandhavgarh"],
    color: "#52B788",
    icon: "🐯",
    theme: "Wildlife & Spirituality",
    desc: "Holy river, hill station forests, and two of India's most tiger-dense reserves back to back.",
    budget: "₹28,000–55,000",
    highlight: "Bandhavgarh tiger dawn safari",
  },
  {
    days: "10 Days",
    title: "Complete MP",
    cities: ["Indore", "Ujjain", "Bhopal", "Pachmarhi", "Kanha", "Bandhavgarh", "Khajuraho", "Gwalior"],
    color: "#C77DFF",
    icon: "✨",
    theme: "Everything",
    desc: "The full arc — street food capital to temples to forests to forts. MP without compromise.",
    budget: "₹55,000–1,00,000",
    highlight: "Everything. All of it.",
  },
];

const TIPS = [
  {
    Icon: Sun,
    title: "Best Season",
    badge: "Oct → Mar",
    desc: "October to March is ideal — cool nights, clear skies, wildlife active. Safari parks close July–September (monsoon). Pachmarhi stays pleasant year-round.",
    detail: "Peak safari months: Feb–May (animals concentrate at waterholes). Simhastha Kumbh: 2028. Khajuraho Dance Festival: February.",
    color: "#F4A261",
  },
  {
    Icon: Plane,
    title: "Getting There",
    badge: "3 Airports",
    desc: "Bhopal (BHO) and Indore (IXI) are the main airports. Gwalior (GWL) for eastern MP. Khajuraho (HJR) for direct temple access from Delhi.",
    detail: "Central Railway Line (Delhi–Mumbai) passes through Bhopal and Itarsi. Satna and Jabalpur for eastern MP. NH-46 is the highway spine of the state.",
    color: "#48CAE4",
  },
  {
    Icon: Hotel,
    title: "Where to Stay",
    badge: "All Ranges",
    desc: "Heritage havelis in Orchha and Gwalior. Jungle lodges at Kanha (Baghvan, Singinawa). Lake resorts in Bhopal. MP Tourism's motels are reliable mid-range.",
    detail: "Book Bandhavgarh and Kanha lodges 2–3 months ahead. Khajuraho fills in February for the Dance Festival. Ujjain during Kumbh (2028): book 1 year ahead.",
    color: "#C77DFF",
  },
  {
    Icon: Camera,
    title: "Photography",
    badge: "Golden Hours",
    desc: "6–8 AM at Khajuraho temples (side-lit stone, no crowds). Kanha meadows at dawn. Ujjain aarti at dusk. Bhedaghat marble gorge at full moon.",
    detail: "Safari photography: 400mm+ lens, high ISO body. Bring waterproof bag for monsoon season. Drone permits required for most heritage sites.",
    color: "#52B788",
  },
  {
    Icon: Wallet,
    title: "Budget Guide",
    badge: "₹1.5K–12K/day",
    desc: "Budget ₹1,500/day · Mid-range ₹4,000/day · Luxury ₹12,000+/day. Safari jeep permits: ₹3,000–8,000. Museum entries: ₹15–150.",
    detail: "Cheapest: MP Tourism rest houses (₹600–1,200/night). Most expensive: Singinawa Jungle Lodge Kanha (₹18,000+/night all-inclusive). Street food Indore: ₹100–300 for a full meal.",
    color: "#FECA57",
  },
  {
    Icon: MessageCircle,
    title: "Local Language",
    badge: "Hindi + Dialects",
    desc: "Hindi is universal. 'Namaste', 'Dhanyavaad', and 'Bhaiya' will open every door. In tribal areas, a local guide is essential.",
    detail: "Indore speaks Malwi-inflected Hindi. Bundeli in Orchha-Gwalior belt. Gondi in Mandla-Dindori (bring a guide). 'Ram Ram' is the Malwa greeting. 'Johar' in tribal MP.",
    color: "#FF7043",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const hex2rgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

// ─── ITINERARY CARD (upgraded) ────────────────────────────────────────────────

const ItineraryCard: React.FC<{ it: typeof ITINERARIES[0]; index: number }> = ({ it, index }) => {
  const [open, setOpen] = useState(false);
  const rgb = hex2rgb(it.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: open ? `rgba(${rgb},0.08)` : `rgba(${rgb},0.05)`,
        border: `1px solid rgba(${rgb},${open ? "0.35" : "0.18"})`,
        boxShadow: open ? `0 20px 50px rgba(${rgb},0.15)` : "none",
        transform: open ? "translateY(-3px)" : "none",
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="p-5">
        {/* Top row */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{it.icon}</span>
            <div>
              <div className="font-mono-mp text-[9px] tracking-widest uppercase mb-0.5" style={{ color: `rgba(${rgb},0.7)` }}>
                {it.days}
              </div>
              <div className="font-display text-base text-white font-bold">{it.title}</div>
              <div className="font-sans text-[10px] text-white/35 mt-0.5">{it.theme}</div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="font-sans text-[9px] px-2 py-0.5 rounded-full"
              style={{ background: `rgba(${rgb},0.15)`, color: it.color, border: `1px solid rgba(${rgb},0.25)` }}>
              {it.budget}
            </span>
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={14} style={{ color: `rgba(${rgb},0.5)` }} />
            </motion.div>
          </div>
        </div>

        <p className="font-sans text-[12px] text-white/50 leading-[1.65] mb-3">{it.desc}</p>

        {/* City dots */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {it.cities.map((c, ci) => (
            <React.Fragment key={ci}>
              <span className="font-sans text-[10px] text-white/40">{c}</span>
              {ci < it.cities.length - 1 && (
                <ArrowRight size={9} style={{ color: `rgba(${rgb},0.4)`, flexShrink: 0 }} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Expanded */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4"
              style={{ borderTop: `1px solid rgba(${rgb},0.15)` }}
              onClick={e => e.stopPropagation()}
            >
              {/* Day-by-day stops */}
              <div className="flex flex-col gap-2 mb-3">
                {it.cities.map((city, ci) => (
                  <div key={ci} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                      style={{ background: `rgba(${rgb},0.2)`, color: it.color, border: `1px solid rgba(${rgb},0.3)` }}>
                      {ci + 1}
                    </div>
                    <span className="font-sans text-[12px] text-white/65">{city}</span>
                    {ci < it.cities.length - 1 && (
                      <div className="flex-1 h-px" style={{ background: `rgba(${rgb},0.1)` }} />
                    )}
                  </div>
                ))}
              </div>
              {/* Highlight */}
              <div className="flex items-center gap-2 p-3 rounded-xl mt-2"
                style={{ background: `rgba(${rgb},0.07)`, border: `1px solid rgba(${rgb},0.15)` }}>
                <Star size={11} style={{ color: it.color, flexShrink: 0 }} />
                <span className="font-sans text-[11px] italic" style={{ color: it.color }}>
                  Don't miss: {it.highlight}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── TIP CARD (upgraded) ──────────────────────────────────────────────────────

const TipCard: React.FC<{ tip: typeof TIPS[0]; index: number }> = ({ tip, index }) => {
  const [open, setOpen] = useState(false);
  const rgb = hex2rgb(tip.color);
  const { Icon } = tip;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        background: open ? `rgba(${rgb},0.06)` : "rgba(255,255,255,0.025)",
        border: `1px solid ${open ? `rgba(${rgb},0.25)` : "rgba(255,255,255,0.07)"}`,
        boxShadow: open ? `0 12px 36px rgba(${rgb},0.1)` : "none",
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300"
            style={{
              background: open ? `rgba(${rgb},0.2)` : "rgba(255,255,255,0.05)",
              boxShadow: open ? `0 0 20px rgba(${rgb},0.3)` : "none",
            }}>
            <Icon size={17} style={{ color: tip.color }} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="font-display text-sm text-white font-semibold">{tip.title}</div>
              <span className="font-sans text-[8px] px-2 py-0.5 rounded-full flex-shrink-0"
                style={{ background: `rgba(${rgb},0.12)`, color: tip.color, border: `1px solid rgba(${rgb},0.2)` }}>
                {tip.badge}
              </span>
            </div>
            <p className="font-sans text-[12px] text-white/50 leading-[1.65]">{tip.desc}</p>
          </div>
        </div>

        {/* Expanded detail */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 pt-3"
              style={{ borderTop: `1px solid rgba(${rgb},0.12)` }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start gap-2">
                <Zap size={10} style={{ color: tip.color, flexShrink: 0, marginTop: 2 }} />
                <p className="font-sans text-[11.5px] leading-[1.7]" style={{ color: `rgba(${rgb},0.8)` }}>
                  {tip.detail}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── WISHLIST CITY CHIP (upgraded) ────────────────────────────────────────────

const CityChip: React.FC<{
  city: typeof CITIES[0];
  inList: boolean;
  onToggle: () => void;
}> = ({ city, inList, onToggle }) => {
  const rgb = hex2rgb(city.accent);
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className="flex items-center gap-2 px-4 py-2.5 rounded-full font-sans text-[12px] cursor-pointer border transition-all duration-300"
      style={{
        background: inList ? `rgba(${rgb},0.14)` : "rgba(255,255,255,0.03)",
        borderColor: inList ? city.accent : "rgba(255,255,255,0.09)",
        color: inList ? city.accent : "rgba(255,255,255,0.4)",
        boxShadow: inList ? `0 6px 20px rgba(${rgb},0.2), 0 0 0 1px rgba(${rgb},0.1)` : "none",
      }}
    >
      <Heart size={12} style={{ fill: inList ? "currentColor" : "none", transition: "fill 0.2s" }} />
      <span>{city.emoji}</span>
      <span>{city.name}</span>
    </motion.button>
  );
};

// ─── ROUTE VISUALISER ─────────────────────────────────────────────────────────

const RouteVisualiser: React.FC<{ cities: NonNullable<(typeof CITIES)[0]>[]; onClear: () => void }> = ({ cities, onClear }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4 }}
    className="p-6 rounded-2xl mb-20"
    style={{
      background: "linear-gradient(135deg,rgba(201,168,76,0.06),rgba(201,168,76,0.02))",
      border: "1px solid rgba(201,168,76,0.2)",
      backdropFilter: "blur(8px)",
    }}
  >
    {/* Header */}
    <div className="flex items-center justify-between mb-5">
      <div>
        <div className="font-mono-mp text-[9px] tracking-[0.25em] uppercase text-white/25 mb-1">Your Journey Route</div>
        <div className="font-display text-base text-white font-semibold">
          {cities.length} {cities.length === 1 ? "destination" : "destinations"} saved
        </div>
      </div>
      <button
        onClick={onClear}
        className="flex items-center gap-1.5 font-sans text-[11px] px-3 py-1.5 rounded-full cursor-pointer transition-all duration-200 border-none"
        style={{ background: "rgba(230,57,70,0.1)", color: "rgba(230,57,70,0.6)" }}
      >
        <Trash2 size={10} /> Clear all
      </button>
    </div>

    {/* Route chain */}
    <div className="flex items-center flex-wrap gap-2 mb-5">
      {cities.map((city, i) => (
        <React.Fragment key={city.id}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{
              background: `rgba(${hex2rgb(city.accent)},0.12)`,
              border: `1px solid rgba(${hex2rgb(city.accent)},0.25)`,
            }}
          >
            <span className="text-sm">{city.emoji}</span>
            <span className="font-sans text-[12px]" style={{ color: city.accent }}>{city.name}</span>
          </motion.div>
          {i < cities.length - 1 && (
            <ArrowRight size={12} style={{ color: "rgba(201,168,76,0.35)", flexShrink: 0 }} />
          )}
        </React.Fragment>
      ))}
    </div>

    {/* Quick stats */}
    <div className="flex gap-3 flex-wrap">
      <div className="flex items-center gap-1.5">
        <MapPin size={10} style={{ color: "rgba(201,168,76,0.5)" }} />
        <span className="font-sans text-[10px] text-white/30">{cities.length} cities</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Clock size={10} style={{ color: "rgba(201,168,76,0.5)" }} />
        <span className="font-sans text-[10px] text-white/30">~{cities.length * 1.5} days recommended</span>
      </div>
      <span className="font-sans text-[10px] text-white/20">✓ Saved to device</span>
    </div>
  </motion.div>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const PlanPage: React.FC = () => {
  const navigate = useNavigate();
  const { wishlist, toggle } = useWishlist();

  const wishCities = wishlist
    .map(id => CITIES.find(c => c.id === id))
    .filter(Boolean) as NonNullable<(typeof CITIES)[0]>[];

  return (
    <div style={{ background: "#09060F" }}>
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 30% 20%,rgba(201,168,76,0.04) 0%,transparent 60%),radial-gradient(ellipse at 70% 80%,rgba(199,125,255,0.03) 0%,transparent 60%)",
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <PageHero
          badge="Plan Your Visit"
          title="Trip Planner"
          subtitle="Build your wishlist, choose an itinerary, and turn this digital journey into the real thing."
          gradient="linear-gradient(135deg,#06040E 0%,#12083A 45%,#1E1060 100%)"
          accent="#C9A84C"
        />

        <div className="max-w-4xl mx-auto px-6 py-20">

          {/* ─── WISHLIST ───────────────────────────────────────────── */}
          <SectionHeader
            badge="Your Wishlist"
            title="Save Your"
            titleAccent="Favourites"
            subtitle="Heart the cities you want to visit. Saved to your device."
          />

          {/* City chips */}
          <div className="flex gap-2.5 flex-wrap justify-center mb-8">
            {CITIES.map(city => (
              <CityChip
                key={city.id}
                city={city}
                inList={wishlist.includes(city.id)}
                onToggle={() => toggle(city.id)}
              />
            ))}
          </div>

          {/* Route visualiser — same logic, upgraded UI */}
          <AnimatePresence>
            {wishCities.length > 0 && (
              <RouteVisualiser
                cities={wishCities}
                onClear={() => wishlist.forEach(id => toggle(id))}
              />
            )}
          </AnimatePresence>

          {/* ─── ITINERARIES ────────────────────────────────────────── */}
          <SectionHeader
            badge="Ready-Made Plans"
            title="Suggested"
            titleAccent="Itineraries"
          />

          <div className="grid gap-4 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))" }}>
            {ITINERARIES.map((it, i) => (
              <ItineraryCard key={it.days} it={it} index={i} />
            ))}
          </div>

          {/* ─── TIPS ───────────────────────────────────────────────── */}
          <SectionHeader badge="Practical Guide" title="Travel" titleAccent="Tips" />

          <div className="grid gap-3 mb-16" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))" }}>
            {TIPS.map((tip, i) => (
              <TipCard key={tip.title} tip={tip} index={i} />
            ))}
          </div>

          {/* ─── CTA (same logic, upgraded visuals) ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg,rgba(201,168,76,0.08),rgba(212,82,42,0.04))",
              border: "1px solid rgba(201,168,76,0.18)",
            }}
          >
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{ background: "radial-gradient(circle at 80% 20%,rgba(201,168,76,0.08),transparent 70%)" }} />

            <div className="relative z-10">
              <div className="font-mono-mp text-[9px] tracking-widest uppercase mb-2"
                style={{ color: "rgba(201,168,76,0.45)" }}>Ready for the real thing?</div>
              <div className="font-display text-2xl text-white font-semibold mb-2">
                Book Your MP Journey
              </div>
              <p className="font-sans text-[13px] text-white/40 max-w-sm leading-[1.7]">
                MP Tourism offers guided safaris, heritage stays, and curated cultural experiences across all 52 districts.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap flex-shrink-0 relative z-10">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/cities")}
                className="px-6 py-3 rounded-full font-sans text-[13px] cursor-pointer border-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                Explore Cities
              </motion.button>

              <motion.button
                whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(201,168,76,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-[13px] cursor-pointer border-none"
                style={{
                  background: "linear-gradient(135deg,#8B6914,#C9A84C,#E8C96A)",
                  color: "#06060E",
                  boxShadow: "0 4px 24px rgba(201,168,76,0.35)",
                }}
              >
                MP Tourism <ArrowRight size={14} />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PlanPage;