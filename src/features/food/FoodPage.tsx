import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Flame, ChevronDown, ChevronUp, MapPin, Clock, Banknote, Lightbulb } from "lucide-react";
import { FOOD_ITEMS, FOOD_STATS, WHERE_TO_EAT } from "./data/food.ts";
import { PageHero, SectionHeader, Badge } from "../../components/ui";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Street", "Main Course", "Sweet", "Snack", "Beverage"] as const;

const SPICE_LABELS = ["No Spice", "Mild", "Medium", "Hot", "Fiery 🔥"];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const hex2rgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

// ─── IMAGE GALLERY ────────────────────────────────────────────────────────────

const FoodImageGallery: React.FC<{
  images: { url: string; caption: string }[];
  accentColor: string;
  icon: string;
}> = ({ images, accentColor, icon }) => {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(images.map(() => false));
  const [errored, setErrored] = useState<boolean[]>(images.map(() => false));
  const rgb = hex2rgb(accentColor);

  const handleLoad = (i: number) => setLoaded(p => { const n = [...p]; n[i] = true; return n; });
  const handleErr = (i: number) => setErrored(p => { const n = [...p]; n[i] = true; return n; });

  return (
    <div className="flex flex-col gap-2">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-xl" style={{ height: "200px" }}>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }} className="absolute inset-0">
            {!errored[active] ? (
              <img src={images[active].url} alt={images[active].caption}
                onLoad={() => handleLoad(active)} onError={() => handleErr(active)}
                className="w-full h-full object-cover"
                style={{ display: loaded[active] ? "block" : "none" }} />
            ) : null}
            {/* Fallback */}
            {(!loaded[active] || errored[active]) && (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2"
                style={{ background: `radial-gradient(circle at 40% 40%, rgba(${rgb},0.25), rgba(${rgb},0.06))` }}>
                <span className="text-5xl">{icon}</span>
                <span className="font-sans text-[10px] text-white/25">Loading image…</span>
              </div>
            )}
            {/* Caption */}
            {loaded[active] && !errored[active] && (
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                <p className="font-sans text-[10px] text-white/60">{images[active].caption}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button onClick={() => setActive((active - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center border-none cursor-pointer text-white text-xs"
              style={{ background: "rgba(0,0,0,0.55)" }}>‹</button>
            <button onClick={() => setActive((active + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center border-none cursor-pointer text-white text-xs"
              style={{ background: "rgba(0,0,0,0.55)" }}>›</button>
          </>
        )}
        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 font-sans text-[9px] px-1.5 py-0.5 rounded-full"
            style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.7)" }}>
            {active + 1}/{images.length}
          </div>
        )}
      </div>
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-1.5">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="flex-1 overflow-hidden rounded-lg border-none cursor-pointer transition-all duration-200"
              style={{ height: "44px", opacity: i === active ? 1 : 0.38, outline: i === active ? `2px solid ${accentColor}` : "none", outlineOffset: "1px" }}>
              {!errored[i] ? (
                <img src={img.url} alt="" onLoad={() => handleLoad(i)} onError={() => handleErr(i)}
                  className="w-full h-full object-cover"
                  style={{ display: loaded[i] ? "block" : "none" }} />
              ) : null}
              {(!loaded[i] || errored[i]) && (
                <div className="w-full h-full" style={{ background: `rgba(${rgb},0.15)` }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── SPICE METER ─────────────────────────────────────────────────────────────

const SpiceMeter: React.FC<{ level: number; color: string }> = ({ level, color }) => (
  <div className="flex items-center gap-2">
    <span className="font-sans text-[9px] uppercase tracking-widest text-white/30">Spice</span>
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map(i => (
        <div key={i} className="w-2 h-2 rounded-full transition-all duration-300"
          style={{ background: i <= level ? color : "rgba(255,255,255,0.1)" }} />
      ))}
    </div>
    <span className="font-sans text-[9px]" style={{ color: level > 0 ? color : "rgba(255,255,255,0.2)" }}>
      {SPICE_LABELS[level]}
    </span>
  </div>
);

// ─── FOOD CARD (EXPANDED) ─────────────────────────────────────────────────────

const FoodCard: React.FC<{
  food: typeof FOOD_ITEMS[0];
  index: number;
  isSelected: boolean;
  onClick: () => void;
}> = ({ food, index, isSelected, onClick }) => {
  const rgb = hex2rgb(food.color);
  const [tab, setTab] = useState<"story" | "ingredients" | "visit">("story");

  useEffect(() => { if (!isSelected) setTab("story"); }, [isSelected]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onClick={onClick}
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-350"
      style={{
        background: isSelected ? `rgba(${rgb},0.07)` : "rgba(255,255,255,0.025)",
        border: `1px solid ${isSelected ? `rgba(${rgb},0.35)` : "rgba(255,255,255,0.06)"}`,
        boxShadow: isSelected ? `0 24px 60px rgba(${rgb},0.18)` : "none",
        transform: isSelected ? "translateY(-4px)" : "none",
      }}>

      {/* Visual Header */}
      <div className="relative overflow-hidden flex items-center justify-center"
        style={{
          height: isSelected ? "0px" : "130px",
          background: `radial-gradient(circle at 38% 38%, rgba(${rgb},0.45), rgba(${rgb},0.12))`,
          transition: "height 0.3s ease",
        }}>
        {!isSelected && (
          <>
            <motion.span
              className="text-6xl"
              animate={{ scale: 1 }}
              style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.4))" }}>
              {food.icon}
            </motion.span>
            {/* Steam lines */}
            {[0, 1, 2].map(j => (
              <div key={j} className="absolute w-[3px] rounded-full"
                style={{
                  height: "20px",
                  background: "linear-gradient(to top, rgba(255,255,255,0.3), transparent)",
                  bottom: "52%",
                  left: `${24 + j * 24}%`,
                  animation: `steamRise 2s ease-in-out infinite`,
                  animationDelay: `${j * 0.6}s`,
                  opacity: 0.5,
                }} />
            ))}
            {/* Badges */}
            <div className="absolute top-2.5 right-2.5 flex gap-1.5 flex-wrap justify-end">
              {food.isVeg
                ? <span className="flex items-center gap-1 font-sans text-[9px] px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(82,183,136,0.2)", color: "#52B788", border: "1px solid rgba(82,183,136,0.3)" }}>
                  <Leaf size={8} />Veg</span>
                : <span className="flex items-center gap-1 font-sans text-[9px] px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(230,57,70,0.2)", color: "#E63946", border: "1px solid rgba(230,57,70,0.3)" }}>
                  <Flame size={8} />Non-Veg</span>
              }
              {food.mustTry && <Badge label="Must Try" color="#C9A84C" />}
            </div>
          </>
        )}
      </div>

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start gap-3 mb-3">
          {isSelected && (
            <span className="text-3xl flex-shrink-0" style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))" }}>
              {food.icon}
            </span>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span className="font-display text-base text-white font-bold">{food.name}</span>
              {isSelected && (
                <>
                  {food.isVeg
                    ? <span className="flex items-center gap-1 font-sans text-[9px] px-2 py-0.5 rounded-full" style={{ background: "rgba(82,183,136,0.2)", color: "#52B788", border: "1px solid rgba(82,183,136,0.3)" }}><Leaf size={8} />Veg</span>
                    : <span className="flex items-center gap-1 font-sans text-[9px] px-2 py-0.5 rounded-full" style={{ background: "rgba(230,57,70,0.2)", color: "#E63946", border: "1px solid rgba(230,57,70,0.3)" }}><Flame size={8} />Non-Veg</span>
                  }
                  {food.mustTry && <Badge label="Must Try" color="#C9A84C" />}
                </>
              )}
            </div>
            <div className="font-mono-mp text-[9px] text-white/25 mb-1">{food.nameDev}</div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-sans text-[10px]" style={{ color: food.color }}>
                <MapPin size={9} style={{ display: "inline", marginRight: "3px" }} />{food.region}
              </span>
              <span className="text-white/20 text-[10px]">·</span>
              <span className="font-sans text-[9px] px-1.5 py-0.5 rounded-full"
                style={{ background: `rgba(${rgb},0.1)`, color: food.color }}>
                {food.category}
              </span>
            </div>
          </div>
        </div>

        {/* Short desc (collapsed state) */}
        {!isSelected && (
          <div>
            <p className="font-sans text-[12px] text-white/40 leading-[1.6] mb-3">{food.desc}</p>
            <SpiceMeter level={food.spiceLevel} color={food.color} />
            <div className="mt-3 font-sans text-[10px] text-white/20">Tap to explore →</div>
          </div>
        )}

        {/* Expanded state */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Taste + spice row */}
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <div className="font-mono-mp text-[10px] tracking-wide" style={{ color: food.color }}>
                  {food.tasteProfile}
                </div>
                <SpiceMeter level={food.spiceLevel} color={food.color} />
              </div>

              {/* Price pill */}
              <div className="flex items-center gap-1.5 mb-4">
                <Banknote size={11} style={{ color: `rgba(${rgb},0.6)` }} />
                <span className="font-sans text-[11px] text-white/40">{food.price}</span>
              </div>

              {/* Image Gallery */}
              <div className="mb-4">
                <FoodImageGallery images={food.images} accentColor={food.color} icon={food.icon} />
              </div>

              {/* Content Tabs */}
              <div className="flex gap-1 mb-4 p-1 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                {(["story", "ingredients", "visit"] as const).map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className="flex-1 py-1.5 rounded-lg font-sans text-[10px] tracking-wide uppercase cursor-pointer border-none transition-all duration-200"
                    style={{
                      background: tab === t ? `rgba(${rgb},0.15)` : "transparent",
                      color: tab === t ? food.color : "rgba(255,255,255,0.28)",
                    }}>
                    {t === "story" ? "📖 Story" : t === "ingredients" ? "🧂 Ingredients" : "📍 Visit"}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {tab === "story" && (
                  <motion.div key="story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="font-sans text-[12.5px] text-white/55 leading-[1.9] mb-4">{food.longDesc}</p>
                    {/* Fun fact */}
                    <div className="p-3 rounded-xl mb-3"
                      style={{ background: `rgba(${rgb},0.06)`, border: `1px solid rgba(${rgb},0.12)` }}>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Lightbulb size={10} style={{ color: food.color }} />
                        <span className="font-sans text-[9px] uppercase tracking-widest" style={{ color: `rgba(${rgb},0.6)` }}>
                          Did You Know
                        </span>
                      </div>
                      <p className="font-sans text-[11px] italic text-white/45 leading-[1.65]">{food.funFact}</p>
                    </div>
                    {/* Pair with */}
                    <div className="font-sans text-[11px] text-white/35 leading-[1.6]">
                      <span style={{ color: food.color }}>🍽 Pair with: </span>{food.pairWith}
                    </div>
                  </motion.div>
                )}

                {tab === "ingredients" && (
                  <motion.div key="ingredients" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="font-sans text-[9px] uppercase tracking-widest mb-3" style={{ color: `rgba(${rgb},0.5)` }}>
                      Key Ingredients
                    </div>
                    <div className="flex flex-col gap-2">
                      {food.ingredients.map((ing, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-2.5 p-2.5 rounded-xl"
                          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                          <span className="text-[10px] mt-0.5 flex-shrink-0" style={{ color: food.color }}>◆</span>
                          <span className="font-sans text-[11.5px] text-white/55 leading-[1.55]">{ing}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {tab === "visit" && (
                  <motion.div key="visit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col gap-3">
                    <div className="p-3 rounded-xl"
                      style={{ background: `rgba(${rgb},0.05)`, border: `1px solid rgba(${rgb},0.1)` }}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5 flex items-center gap-1.5" style={{ color: `rgba(${rgb},0.55)` }}>
                        <MapPin size={9} />Where to Eat
                      </div>
                      <p className="font-sans text-[11.5px] text-white/55 leading-[1.65]">{food.whereToEat}</p>
                    </div>
                    <div className="p-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5 flex items-center gap-1.5 text-white/30">
                        <Clock size={9} />Best Time
                      </div>
                      <p className="font-sans text-[11.5px] text-white/50 leading-[1.65]">{food.bestTime}</p>
                    </div>
                    <div className="p-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5 flex items-center gap-1.5 text-white/30">
                        <Banknote size={9} />Price
                      </div>
                      <p className="font-sans text-[11.5px] text-white/50 leading-[1.65]">{food.price}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Collapse button */}
              <button
                onClick={(e) => { e.stopPropagation(); onClick(); }}
                className="w-full mt-4 py-2 rounded-xl flex items-center justify-center gap-1.5 font-sans text-[10px] border-none cursor-pointer transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.3)" }}>
                <ChevronUp size={12} /> Collapse
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── WHERE TO EAT CARD ────────────────────────────────────────────────────────

const WhereCard: React.FC<{ item: typeof WHERE_TO_EAT[0]; index: number }> = ({ item, index }) => {
  const rgb = hex2rgb(item.color);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="p-5 rounded-2xl"
      style={{ background: `rgba(${rgb},0.04)`, border: `1px solid rgba(${rgb},0.14)` }}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{item.icon}</span>
        <div>
          <div className="font-display text-base text-white font-semibold">{item.city}</div>
          <div className="font-sans text-[10px]" style={{ color: item.color }}>{item.headline}</div>
        </div>
      </div>
      <p className="font-sans text-[12px] text-white/50 leading-[1.7] mb-3">{item.desc}</p>
      <div className="mb-2">
        <div className="font-sans text-[9px] uppercase tracking-widest mb-2" style={{ color: `rgba(${rgb},0.5)` }}>
          Must-Visit Spots
        </div>
        {item.mustVisit.map((spot, i) => (
          <div key={i} className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px]" style={{ color: item.color }}>▸</span>
            <span className="font-sans text-[11px] text-white/45">{spot}</span>
          </div>
        ))}
      </div>
      <div className="pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5" style={{ color: `rgba(${rgb},0.5)` }}>
          Signature Dishes
        </div>
        <div className="font-sans text-[11px]" style={{ color: `${item.color}aa` }}>{item.speciality}</div>
      </div>
    </motion.div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const FoodPage: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [cat, setCat] = useState("All");

  const filtered = cat === "All" ? FOOD_ITEMS : FOOD_ITEMS.filter(f => f.category === cat);

  return (
    <div style={{ background: "#0E0805" }}>
      {/* CSS animations */}
      <style>{`
        @keyframes steamRise {
          0%   { transform: translateY(0)   scaleX(1);   opacity: 0.5; }
          50%  { transform: translateY(-14px) scaleX(1.3); opacity: 0.25; }
          100% { transform: translateY(-24px) scaleX(1);   opacity: 0; }
        }
      `}</style>

      <PageHero
        badge="14 Iconic Dishes · 4 Cities · 2,000 Years of Flavour"
        title="Taste Madhya Pradesh"
        subtitle="From tribal forest sweets to Nawabi court cuisine — every bite is a story, every spice a memory carried across a thousand years."
        gradient="linear-gradient(135deg,#1A0500 0%,#4A1500 45%,#8B3A00 100%)"
        accent="#F4A261"
      />

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ─── FOOD STATS ──────────────────────────────────────────── */}
        <div className="grid gap-3 mb-16" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))" }}>
          {FOOD_STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="p-4 rounded-2xl text-center"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(244,162,97,0.1)" }}>
              <div className="text-xl mb-2">{s.icon}</div>
              <div className="font-display text-2xl font-bold mb-1" style={{ color: "#F4A261" }}>{s.value}</div>
              <div className="font-sans text-[11px] text-white/70 font-semibold mb-0.5">{s.label}</div>
              <div className="font-sans text-[9px] text-white/28 leading-[1.5]">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* ─── CATEGORY FILTER ─────────────────────────────────────── */}
        <div className="flex gap-2 justify-center flex-wrap mb-6">
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => { setCat(c); setSelected(null); }}
              className="px-4 py-2 rounded-full font-sans text-[11px] tracking-wide cursor-pointer transition-all duration-250 border"
              style={{
                background: cat === c ? "rgba(244,162,97,0.14)" : "rgba(255,255,255,0.035)",
                borderColor: cat === c ? "rgba(244,162,97,0.4)" : "rgba(255,255,255,0.07)",
                color: cat === c ? "#F4A261" : "rgba(255,255,255,0.38)",
                transform: cat === c ? "translateY(-1px)" : "none",
              }}>
              {c}
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="text-center mb-10">
          <span className="font-sans text-[11px] text-white/20">
            {filtered.length} dish{filtered.length !== 1 ? "es" : ""} {cat !== "All" ? `in ${cat}` : "across all categories"}
          </span>
        </div>

        {/* ─── FOOD GRID ───────────────────────────────────────────── */}
        <div className="grid gap-5 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}>
          <AnimatePresence>
            {filtered.map((food, i) => (
              <FoodCard
                key={food.id}
                food={food}
                index={i}
                isSelected={selected === food.id}
                onClick={() => setSelected(selected === food.id ? null : food.id)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* ─── WHERE TO EAT ────────────────────────────────────────── */}
        <SectionHeader badge="City Guide" title="Where to" titleAccent="Eat in MP" />
        <p className="font-sans text-[13px] text-white/38 mb-8 leading-[1.8] max-w-2xl">
          Each city in MP has a distinct food identity — Indore for street food, Bhopal for Nawabi cuisine, Gwalior for sweets, Ujjain for temple-town cooking. Here is how to navigate them.
        </p>
        <div className="grid gap-4 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}>
          {WHERE_TO_EAT.map((item, i) => (
            <WhereCard key={item.city} item={item} index={i} />
          ))}
        </div>

        {/* ─── CLOSING QUOTE ───────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="w-10 h-px mx-auto mb-8" style={{ background: "rgba(244,162,97,0.3)" }} />
          <p className="font-display italic leading-[1.9] text-white/22 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(17px,2.2vw,26px)" }}>
            "In Madhya Pradesh, food is not eaten — it is experienced.<br />
            Every meal carries the weight of a thousand years."
          </p>
          <div className="font-mono-mp text-[10px] mt-4" style={{ color: "rgba(244,162,97,0.3)" }}>
            — Madhya Pradesh · Heart of Incredible India
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default FoodPage;