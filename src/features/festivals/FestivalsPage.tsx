import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FESTIVAL_DETAILS, FESTIVAL_STATS } from "./data/festivals_enhanced.ts";
import { PageHero, SectionHeader } from "../../components/ui";

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const hex2rgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

// ─── IMAGE GALLERY ────────────────────────────────────────────────────────────

const ImageGallery: React.FC<{
  images: { url: string; caption: string }[];
  accentColor: string;
}> = ({ images, accentColor }) => {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(images.map(() => false));
  const [errored, setErrored] = useState<boolean[]>(images.map(() => false));

  const handleLoad = (i: number) => setLoaded(prev => { const n = [...prev]; n[i] = true; return n; });
  const handleErr = (i: number) => setErrored(prev => { const n = [...prev]; n[i] = true; return n; });

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-2xl" style={{ height: "240px" }}>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }} className="absolute inset-0">
            {!errored[active] ? (
              <img
                src={images[active].url}
                alt={images[active].caption}
                onLoad={() => handleLoad(active)}
                onError={() => handleErr(active)}
                className="w-full h-full object-cover"
                style={{ display: loaded[active] ? "block" : "none" }}
              />
            ) : null}
            {/* Fallback gradient when image fails or is loading */}
            {(!loaded[active] || errored[active]) && (
              <div className="w-full h-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, rgba(${hex2rgb(accentColor)},0.15) 0%, rgba(${hex2rgb(accentColor)},0.05) 100%)`,
                  border: `1px solid rgba(${hex2rgb(accentColor)},0.15)`,
                }}>
                <span className="text-5xl opacity-40">🏛️</span>
              </div>
            )}
            {/* Caption overlay */}
            {(loaded[active] && !errored[active]) && (
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)" }}>
                <p className="font-sans text-[10px] text-white/65">{images[active].caption}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button onClick={() => setActive((active - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-xs border-none cursor-pointer transition-all duration-200"
              style={{ background: "rgba(0,0,0,0.5)", color: "white" }}>‹</button>
            <button onClick={() => setActive((active + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-xs border-none cursor-pointer transition-all duration-200"
              style={{ background: "rgba(0,0,0,0.5)", color: "white" }}>›</button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="flex-1 rounded-xl overflow-hidden border-none cursor-pointer transition-all duration-200"
              style={{
                height: "52px",
                opacity: i === active ? 1 : 0.4,
                border: i === active ? `2px solid ${accentColor}` : "2px solid transparent",
              }}>
              {!errored[i] ? (
                <img src={img.url} alt="" onLoad={() => handleLoad(i)} onError={() => handleErr(i)}
                  className="w-full h-full object-cover"
                  style={{ display: loaded[i] ? "block" : "none" }} />
              ) : null}
              {(!loaded[i] || errored[i]) && (
                <div className="w-full h-full"
                  style={{ background: `rgba(${hex2rgb(accentColor)},0.1)` }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── HIGHLIGHT ROW ────────────────────────────────────────────────────────────

const HighlightRow: React.FC<{ text: string; color: string; i: number }> = ({ text, color, i }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: i * 0.05 + 0.2, duration: 0.3 }}
    className="flex items-start gap-2.5 py-1.5"
  >
    <span className="text-[10px] mt-0.5 flex-shrink-0" style={{ color }}>◆</span>
    <span className="font-sans text-[12px] text-white/60 leading-[1.6]">{text}</span>
  </motion.div>
);

// ─── INFO PILL ────────────────────────────────────────────────────────────────

const InfoPill: React.FC<{ icon: string; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
  <div className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl"
    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
    <span className="font-sans text-[9px] uppercase tracking-widest" style={{ color: `${color}88` }}>
      {icon} {label}
    </span>
    <span className="font-sans text-[11px] text-white/65">{value}</span>
  </div>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const FestivalsPage: React.FC = () => {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<"story" | "visit" | "highlights">("story");
  const fest = FESTIVAL_DETAILS[active];
  const mainColor = fest.colors[0];
  const rgb = hex2rgb(mainColor);

  // Reset tab when festival changes
  useEffect(() => { setTab("story"); }, [active]);

  return (
    <div style={{ background: "#08040F" }}>
      {/* Ambient glow that follows the active festival */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "800px", height: "400px",
          background: `radial-gradient(ellipse at 50% 0%, rgba(${rgb},0.08) 0%, transparent 70%)`,
          transition: "background 0.8s ease",
          zIndex: 0,
        }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <PageHero
          badge="8 Celebrations · 2,500+ Years of Tradition"
          title="Festivals of MP"
          subtitle="Where devotion, colour, and culture collide in the most spectacular ways on earth. From 75 million pilgrims on the Shipra to a single raga echoing from a 400-year-old tomb."
          gradient="linear-gradient(135deg,#0D0020 0%,#2D0050 45%,#5C0090 100%)"
          accent="#C77DFF"
        />

        <div className="max-w-6xl mx-auto px-6 py-16">

          {/* ─── STATS BAR ──────────────────────────────────────────── */}
          <div className="grid gap-3 mb-16" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))" }}>
            {FESTIVAL_STATS.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="p-4 rounded-2xl text-center"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(199,125,255,0.12)" }}>
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-display text-3xl font-bold mb-1" style={{ color: "#C77DFF" }}>{s.value}</div>
                <div className="font-sans text-[11px] text-white/70 font-semibold mb-0.5">{s.label}</div>
                <div className="font-sans text-[9px] text-white/30 leading-[1.5]">{s.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* ─── FESTIVAL SELECTOR ──────────────────────────────────── */}
          <div className="mb-10">
            <div className="font-sans text-[9px] uppercase tracking-widest mb-4 text-center" style={{ color: "rgba(199,125,255,0.4)" }}>
              Select a Festival
            </div>
            <div className="flex gap-2 justify-center flex-wrap">
              {FESTIVAL_DETAILS.map((f, i) => (
                <button key={f.id} onClick={() => setActive(i)}
                  className="px-4 py-2.5 rounded-full font-sans text-[11px] cursor-pointer transition-all duration-300 border"
                  style={{
                    background: active === i ? `rgba(${hex2rgb(f.colors[0])},0.14)` : "rgba(255,255,255,0.035)",
                    borderColor: active === i ? `${f.colors[0]}55` : "rgba(255,255,255,0.08)",
                    color: active === i ? f.colors[0] : "rgba(255,255,255,0.4)",
                    boxShadow: active === i ? `0 0 24px rgba(${hex2rgb(f.colors[0])},0.2)` : "none",
                    transform: active === i ? "translateY(-2px)" : "none",
                  }}>
                  {f.icon} {f.name}
                </button>
              ))}
            </div>
          </div>

          {/* ─── MAIN FESTIVAL PANEL ────────────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden mb-20"
              style={{
                background: `linear-gradient(135deg, rgba(${rgb},0.07) 0%, rgba(${hex2rgb(fest.colors[1] || fest.colors[0])},0.04) 50%, rgba(0,0,0,0) 100%)`,
                border: `1px solid rgba(${rgb},0.18)`,
              }}>

              <div className="p-8 md:p-12">
                {/* ── Header ── */}
                <div className="flex items-start gap-5 mb-8 flex-wrap">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-6xl flex-shrink-0"
                  >
                    {fest.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="font-sans text-[9px] px-2.5 py-1 rounded-full tracking-widest uppercase"
                        style={{ background: `rgba(${rgb},0.12)`, color: mainColor, border: `1px solid rgba(${rgb},0.25)` }}>
                        {fest.mood}
                      </span>
                      <span className="font-sans text-[9px] px-2.5 py-1 rounded-full tracking-widest uppercase text-white/30"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        {fest.season} · {fest.duration}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-white mb-1" style={{ fontSize: "clamp(24px,3.5vw,44px)" }}>
                      {fest.name}
                    </h2>
                    <div className="font-sans text-[13px] text-white/35 mb-1">{fest.nameDev}</div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-sans text-[11px]" style={{ color: mainColor }}>📍 {fest.city}</span>
                      <span className="text-white/20">·</span>
                      <span className="font-sans text-[11px] text-white/35">{fest.month}</span>
                      <span className="text-white/20">·</span>
                      <span className="font-sans text-[11px] text-white/35">{fest.era}</span>
                    </div>
                  </div>
                  {/* Colour swatches */}
                  <div className="flex gap-2 flex-shrink-0 self-end">
                    {fest.colors.map((c, i) => (
                      <div key={i} className="w-3 h-3 rounded-full"
                        style={{ background: c, boxShadow: `0 0 12px ${c}88` }} />
                    ))}
                  </div>
                </div>

                {/* ── Short desc ── */}
                <p className="font-display italic text-lg text-white/60 leading-[1.9] mb-6 max-w-2xl"
                  style={{ borderLeft: `3px solid rgba(${rgb},0.3)`, paddingLeft: "20px" }}>
                  {fest.desc}
                </p>

                {/* ── Two column layout: Images + Tabs ── */}
                <div className="grid gap-8 mb-6" style={{ gridTemplateColumns: "var(--fest-cols, 1fr)" }}>
                  {/* Left: Image Gallery */}
                  <div>
                    <ImageGallery images={fest.images} accentColor={mainColor} />
                    {/* Scale badge */}
                    <div className="mt-3 p-3 rounded-xl text-center"
                      style={{ background: `rgba(${rgb},0.06)`, border: `1px solid rgba(${rgb},0.12)` }}>
                      <span className="font-sans text-[9px] uppercase tracking-widest text-white/30 block mb-1">Scale</span>
                      <span className="font-sans text-[11px]" style={{ color: mainColor }}>{fest.scale}</span>
                    </div>
                  </div>

                  {/* Right: Content Tabs */}
                  <div>
                    {/* Tab switcher */}
                    <div className="flex gap-1 mb-5 p-1 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      {(["story", "highlights", "visit"] as const).map(t => (
                        <button key={t} onClick={() => setTab(t)}
                          className="flex-1 py-2 rounded-lg font-sans text-[10px] tracking-wide uppercase cursor-pointer border-none transition-all duration-200"
                          style={{
                            background: tab === t ? `rgba(${rgb},0.15)` : "transparent",
                            color: tab === t ? mainColor : "rgba(255,255,255,0.3)",
                            fontWeight: tab === t ? "700" : "400",
                          }}>
                          {t === "story" ? "📖 Story" : t === "highlights" ? "⭐ Highlights" : "🗺️ Visit"}
                        </button>
                      ))}
                    </div>

                    {/* Tab content */}
                    <AnimatePresence mode="wait">
                      {tab === "story" && (
                        <motion.div key="story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <p className="font-sans text-[13px] text-white/55 leading-[1.95]">{fest.longDesc}</p>
                          {/* Trivia */}
                          <div className="mt-4 p-3 rounded-xl"
                            style={{ background: `rgba(${rgb},0.05)`, border: `1px solid rgba(${rgb},0.1)` }}>
                            <span className="font-sans text-[9px] uppercase tracking-widest block mb-1" style={{ color: `rgba(${rgb},0.6)` }}>
                              Did You Know
                            </span>
                            <p className="font-sans text-[11px] italic text-white/45 leading-[1.6]">"{fest.trivia}"</p>
                          </div>
                        </motion.div>
                      )}

                      {tab === "highlights" && (
                        <motion.div key="highlights" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            {fest.highlights.map((h, i) => (
                              <HighlightRow key={i} text={h} color={mainColor} i={i} />
                            ))}
                          </div>
                          <div className="mt-4 p-3 rounded-xl"
                            style={{ background: `rgba(${rgb},0.05)`, border: `1px solid rgba(${rgb},0.1)` }}>
                            <span className="font-sans text-[9px] uppercase tracking-widest block mb-1" style={{ color: `rgba(${rgb},0.6)` }}>
                              Best For
                            </span>
                            <p className="font-sans text-[11px] text-white/50 leading-[1.6]">{fest.bestFor}</p>
                          </div>
                        </motion.div>
                      )}

                      {tab === "visit" && (
                        <motion.div key="visit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          className="flex flex-col gap-3">
                          <InfoPill icon="✈️" label="How to Reach" value={fest.howToReach} color={mainColor} />
                          <InfoPill icon="💡" label="Insider Tip" value={fest.tip} color={mainColor} />
                          <InfoPill icon="🏛️" label="Organised By" value={fest.organizedBy} color={mainColor} />
                          <InfoPill icon="📅" label="Duration" value={fest.duration} color={mainColor} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ─── ALL FESTIVALS GRID ──────────────────────────────────── */}
          <SectionHeader badge="Complete Calendar" title="All Festivals" titleAccent="at a Glance" />

          <div className="grid gap-3 mb-16" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))" }}>
            {FESTIVAL_DETAILS.map((f, i) => {
              const isActive = active === i;
              const frgb = hex2rgb(f.colors[0]);
              return (
                <motion.div key={f.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  onClick={() => { setActive(i); window.scrollTo({ top: 380, behavior: "smooth" }); }}
                  className="p-5 rounded-2xl cursor-pointer transition-all duration-300"
                  style={{
                    background: isActive ? `rgba(${frgb},0.1)` : "rgba(255,255,255,0.025)",
                    border: `1px solid ${isActive ? `rgba(${frgb},0.35)` : "rgba(255,255,255,0.06)"}`,
                    transform: isActive ? "translateY(-3px)" : "none",
                    boxShadow: isActive ? `0 16px 40px rgba(${frgb},0.15)` : "none",
                  }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <div className="font-display text-sm text-white font-semibold">{f.name}</div>
                      <div className="font-sans text-[9px] text-white/30">{f.nameDev}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-sans text-[9px] px-2 py-0.5 rounded-full"
                      style={{ background: `rgba(${frgb},0.12)`, color: f.colors[0] }}>
                      {f.city}
                    </span>
                    <span className="font-sans text-[9px] text-white/25">{f.month}</span>
                  </div>
                  <div className="font-sans text-[10px] text-white/30 mb-1">{f.mood}</div>
                  <div className="font-sans text-[10px] text-white/20">{f.era}</div>

                  {/* Colour bar */}
                  <div className="flex gap-1 mt-3">
                    {f.colors.slice(0, 4).map((c, ci) => (
                      <div key={ci} className="flex-1 h-0.5 rounded-full" style={{ background: c, opacity: 0.6 }} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ─── YEAR CALENDAR ────────────────────────────────────────── */}
          <SectionHeader badge="When to Visit" title="Festival" titleAccent="Calendar" />

          <div className="rounded-2xl overflow-hidden mb-16"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="px-5 py-3 font-mono-mp text-[10px] text-white/25 tracking-widest uppercase"
              style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              MP Festival Year — Click a month for details
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(12,1fr)", background: "rgba(255,255,255,0.01)" }}>
              {[
                { m: "Jan", fest: "Lokrang", color: "#F77F00", icon: "🥁" },
                { m: "Feb", fest: "Khajuraho", color: "#C77DFF", icon: "💃" },
                { m: "Mar", fest: "Rang Panchami · Bhagoria", color: "#FF6B9D", icon: "🎨" },
                { m: "Apr", fest: "Simhastha*", color: "#FF6B35", icon: "🌊" },
                { m: "May", fest: "Simhastha*", color: "#FF6B35", icon: "🌊" },
                { m: "Jun", fest: "—", color: null, icon: "" },
                { m: "Jul", fest: "—", color: null, icon: "" },
                { m: "Aug", fest: "—", color: null, icon: "" },
                { m: "Sep", fest: "—", color: null, icon: "" },
                { m: "Oct", fest: "Diwali · Kalidas", color: "#FFD700", icon: "🪔" },
                { m: "Nov", fest: "Tansen", color: "#4A90D9", icon: "🎵" },
                { m: "Dec", fest: "Tansen", color: "#4A90D9", icon: "🎵" },
              ].map(({ m, fest: f, color, icon }, i) => (
                <div key={i} className="py-4 px-1 text-center transition-all duration-200"
                  style={{
                    borderRight: i < 11 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    background: color ? `rgba(${hex2rgb(color)},0.07)` : "transparent",
                  }}>
                  <div className="font-mono-mp text-[9px] mb-1.5"
                    style={{ color: color ? color : "rgba(255,255,255,0.2)" }}>
                    {m}
                  </div>
                  {icon && <div className="text-base mb-1">{icon}</div>}
                  {f !== "—" && (
                    <div className="font-sans text-[8px] leading-[1.3] px-0.5"
                      style={{ color: color ? `${color}aa` : "rgba(255,255,255,0.15)" }}>
                      {f}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="px-5 py-3 font-sans text-[10px] text-white/20"
              style={{ background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              * Simhastha Kumbh Mela occurs every 12 years — next: 2028
            </div>
          </div>

          {/* ─── CLOSING QUOTE ────────────────────────────────────────── */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center py-12">
            <div className="w-10 h-px mx-auto mb-8" style={{ background: "rgba(199,125,255,0.3)" }} />
            <p className="font-display italic text-xl text-white/20 max-w-xl mx-auto leading-[1.9]">
              "India has no single culture — it has thousands of them, each with their own calendar of celebrations, each on fire in their own season."
            </p>
            <div className="font-mono-mp text-[10px] mt-4" style={{ color: "rgba(199,125,255,0.3)" }}>
              — Madhya Pradesh · Heart of Incredible India
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default FestivalsPage;