import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Ticket, MapPin, ChevronDown, X, ChevronLeft, ChevronRight, Star, Compass } from "lucide-react";
import { TEMPLES } from "./data/temples";

const PAGE_CSS = `
  @keyframes floatGlow {
    0%,100% { transform: translateY(0px); opacity: 0.07; }
    50%      { transform: translateY(-18px); opacity: 0.12; }
  }
  @keyframes tipIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .temple-card { transition: box-shadow 0.3s, border-color 0.3s; }
  .tab-pill { cursor: pointer; transition: all 0.2s; border: none; }
  .gallery-thumb { transition: transform 0.4s cubic-bezier(0.4,0,0.2,1); cursor: pointer; }
  .gallery-thumb:hover { transform: scale(1.07); opacity: 0.85; }
  .tip-item { animation: tipIn 0.35s ease both; }

  @media (max-width: 480px) {
    .page-hero-title  { font-size: 32px !important; }
    .temple-header    { flex-wrap: wrap !important; }
    .stats-hero       { gap: 20px !important; }
    .tab-strip        { overflow-x: auto; padding-bottom: 4px; }
    .gallery-grid-t   { grid-template-columns: repeat(2,1fr) !important; }
    .tips-grid-t      { grid-template-columns: 1fr !important; }
    .nearby-grid-t    { grid-template-columns: 1fr !important; }
    .meta-chips       { flex-direction: column !important; gap: 8px !important; }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .page-hero-title  { font-size: 44px !important; }
    .gallery-grid-t   { grid-template-columns: repeat(2,1fr) !important; }
    .tips-grid-t      { grid-template-columns: repeat(2,1fr) !important; }
  }
  @media (min-width: 769px) {
    .gallery-grid-t   { grid-template-columns: repeat(4,1fr) !important; }
    .tips-grid-t      { grid-template-columns: repeat(2,1fr) !important; }
    .nearby-grid-t    { grid-template-columns: repeat(2,1fr) !important; }
  }
`;

type InnerTab = "about" | "history" | "architecture" | "legend";
const INNER_TABS: { key: InnerTab; icon: string; label: string }[] = [
  { key: "about",        icon: "📖", label: "About"        },
  { key: "history",      icon: "🏺", label: "History"      },
  { key: "architecture", icon: "🏛️", label: "Architecture" },
  { key: "legend",       icon: "✨", label: "Legend"       },
];

// ─────────────────────────────────────────────
// Temple Card Component
// ─────────────────────────────────────────────
const TempleCard: React.FC<{
  temple: (typeof TEMPLES)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ temple, index, isOpen, onToggle }) => {
  const [tab, setTab] = useState<InnerTab>("about");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const content: Record<InnerTab, string> = {
    about:        temple.desc,
    history:      temple.history,
    architecture: temple.architecture,
    legend:       temple.legend,
  };

  return (
    <>
      <motion.div
        className="temple-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.055 }}
        style={{
          borderRadius: 20, overflow: "hidden",
          border: `1px solid ${isOpen ? temple.accent + "40" : "rgba(255,255,255,0.07)"}`,
          background: "rgba(255,255,255,0.025)",
          backdropFilter: "blur(14px)",
          boxShadow: isOpen ? `0 12px 48px rgba(0,0,0,0.5), 0 0 0 1px ${temple.accent}20` : "none",
        }}
      >
        {/* ── Header ── */}
        <div
          onClick={onToggle}
          style={{ cursor: "pointer", position: "relative", overflow: "hidden" }}
        >
          {/* Hero image when open */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                style={{ position: "absolute", inset: 0, zIndex: 0 }}
              >
                <img
                  src={temple.coverImage}
                  alt={temple.name}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    objectPosition: "center", transition: "transform 8s ease",
                    transform: isOpen ? "scale(1.06)" : "scale(1)",
                  }}
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const p = (e.currentTarget as HTMLImageElement).parentElement;
                    if (p) p.style.background = temple.gradient;
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to right, rgba(5,5,10,0.96) 0%, rgba(5,5,10,0.72) 55%, rgba(5,5,10,0.25) 100%)",
                }} />
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="temple-header"
            style={{
              display: "flex", alignItems: "center", gap: 18,
              padding: "20px 24px", position: "relative", zIndex: 1,
            }}
          >
            {/* Icon box */}
            <div style={{
              width: 62, height: 62, borderRadius: 14, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 26, background: temple.gradient,
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: isOpen ? `0 0 28px ${temple.accent}55` : "none",
              transition: "all 0.35s",
              transform: isOpen ? "scale(1.12)" : "scale(1)",
            }}>
              {temple.icon}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                <span style={{ fontSize: 17, fontWeight: 700, fontFamily: "'Georgia',serif", color: "#fff" }}>
                  {temple.name}
                </span>
                <span style={{
                  fontSize: 9, padding: "3px 10px", borderRadius: 999,
                  background: `${temple.accent}18`, color: temple.accent,
                  border: `1px solid ${temple.accent}28`,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                }}>
                  {temple.period}
                </span>
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(255,255,255,0.28)", marginBottom: 6 }}>
                {temple.nameDev}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                  <MapPin size={9} style={{ color: temple.accent }} /> {temple.city}
                </span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>· {temple.deity}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.22)" }}>· {temple.dynasty}</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
              <span style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(255,255,255,0.2)", textAlign: "right", maxWidth: 130 }}>
                {temple.built}
              </span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={16} style={{ color: "rgba(255,255,255,0.35)" }} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Expanded Body ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div style={{ padding: "0 24px 28px" }}>

                {/* Tag */}
                <div style={{
                  fontFamily: "monospace", fontSize: 9, letterSpacing: "0.25em",
                  textTransform: "uppercase", color: temple.accent, paddingTop: 20, marginBottom: 14,
                }}>
                  {temple.tag}
                </div>

                {/* Significance box */}
                <div style={{
                  padding: "14px 18px", borderRadius: 14, marginBottom: 20,
                  background: `${temple.accent}0b`, border: `1px solid ${temple.accent}20`,
                }}>
                  <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 8 }}>
                    Why It Matters
                  </div>
                  <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.58)", lineHeight: 1.85 }}>
                    {temple.significance}
                  </p>
                </div>

                {/* Inner tabs */}
                <div className="tab-strip" style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                  {INNER_TABS.map(t => (
                    <button
                      key={t.key}
                      className="tab-pill"
                      onClick={() => setTab(t.key)}
                      style={{
                        padding: "7px 15px", borderRadius: 999, fontSize: 11,
                        background: tab === t.key ? `${temple.accent}20` : "rgba(255,255,255,0.05)",
                        color: tab === t.key ? temple.accent : "rgba(255,255,255,0.38)",
                        border: `1px solid ${tab === t.key ? temple.accent + "40" : "rgba(255,255,255,0.07)"}`,
                        opacity: tab === t.key ? 1 : 0.8,
                      }}
                    >
                      {t.icon} {t.label}
                    </button>
                  ))}
                </div>

                {/* Tab body */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={tab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28 }}
                    style={{ margin: "0 0 24px", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.92 }}
                  >
                    {content[tab]}
                  </motion.p>
                </AnimatePresence>

                {/* Gallery */}
                <div style={{ marginBottom: 22 }}>
                  <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 10 }}>
                    Gallery
                  </div>
                  <div className="gallery-grid-t" style={{ display: "grid", gap: 8 }}>
                    {temple.galleryImages.map((img, i) => (
                      <div key={i}
                        style={{ position: "relative", height: 108, borderRadius: 10, overflow: "hidden", cursor: "pointer" }}
                        onClick={() => setLightbox(i)}
                      >
                        <img
                          src={img} alt={`${temple.name} ${i + 1}`} loading="lazy"
                          className="gallery-thumb"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          onError={e => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                            const p = (e.currentTarget as HTMLImageElement).parentElement;
                            if (p) p.style.background = temple.gradient;
                          }}
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)" }} />
                        <div style={{ position: "absolute", bottom: 5, right: 7, fontSize: 9, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
                          {i + 1}/{temple.galleryImages.length}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visitor Tips */}
                <div style={{ marginBottom: 22 }}>
                  <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 10 }}>
                    Visitor Tips
                  </div>
                  <div className="tips-grid-t" style={{ display: "grid", gap: 8 }}>
                    {temple.visitTips.map((tip, i) => (
                      <div key={i} className="tip-item" style={{
                        display: "flex", gap: 10, alignItems: "flex-start",
                        padding: "11px 14px", borderRadius: 12,
                        background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)",
                        animationDelay: `${i * 0.06}s`,
                      }}>
                        <Star size={10} style={{ color: temple.accent, flexShrink: 0, marginTop: 3 }} fill={temple.accent} />
                        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.58)", lineHeight: 1.65 }}>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nearby */}
                <div style={{ marginBottom: 22 }}>
                  <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 10 }}>
                    Nearby Attractions
                  </div>
                  <div className="nearby-grid-t" style={{ display: "grid", gap: 8 }}>
                    {temple.nearbyAttractions.map((place, i) => (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", gap: 8,
                        padding: "9px 14px", borderRadius: 10,
                        background: `${temple.accent}08`, border: `1px solid ${temple.accent}18`,
                        fontSize: 12, color: "rgba(255,255,255,0.58)",
                      }}>
                        <Compass size={11} style={{ color: temple.accent, flexShrink: 0 }} />
                        {place}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meta */}
                <div className="meta-chips" style={{
                  display: "flex", gap: 16, flexWrap: "wrap",
                  paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.05)",
                }}>
                  {[
                    { icon: <Clock size={12} />,  text: temple.timings   },
                    { icon: <Ticket size={12} />, text: temple.entryFee  },
                    { icon: <MapPin size={12} />, text: temple.distance  },
                  ].map((chip, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,0.38)" }}>
                      <span style={{ color: temple.accent }}>{chip.icon}</span>
                      {chip.text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 9999,
              background: "rgba(0,0,0,0.94)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
            }}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={temple.galleryImages[lightbox]} alt=""
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: "88vw", maxHeight: "82vh", borderRadius: 14, objectFit: "contain", border: "1px solid rgba(255,255,255,0.06)" }}
            />
            <button onClick={() => setLightbox(null)} style={{
              position: "fixed", top: 18, right: 18,
              background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
              width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff",
            }}><X size={18} /></button>
            {lightbox > 0 && (
              <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{
                position: "fixed", left: 14, top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
                width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#fff",
              }}><ChevronLeft size={22} /></button>
            )}
            {lightbox < temple.galleryImages.length - 1 && (
              <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{
                position: "fixed", right: 14, top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
                width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#fff",
              }}><ChevronRight size={22} /></button>
            )}
            <div style={{
              position: "fixed", bottom: 18, left: "50%", transform: "translateX(-50%)",
              fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "monospace", letterSpacing: "0.2em",
            }}>
              CLICK ANYWHERE TO CLOSE · {lightbox + 1}/{temple.galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────
const TemplesPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "Ancient" | "Medieval">("all");

  useEffect(() => {
    const id = "temples-page-css";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id; tag.textContent = PAGE_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  const filtered = filter === "all" ? TEMPLES : TEMPLES.filter(t => t.period === filter);

  return (
    <div style={{ background: "#07040E", color: "#fff", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div style={{
        position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg,#100008 0%,#2D0020 40%,#5C0840 70%,#8B2252 100%)",
        padding: "120px 24px 90px", textAlign: "center",
      }}>
        {[{ w:500, l:"62%", t:"-20%", d:"0s" }, { w:320, l:"-6%", t:"55%", d:"5s" }].map((o, i) => (
          <div key={i} style={{
            position: "absolute", borderRadius: "50%",
            width: o.w, height: o.w, top: o.t, left: o.l,
            background: "rgba(201,168,76,0.08)", filter: "blur(90px)",
            animation: `floatGlow 14s ease-in-out infinite`, animationDelay: o.d,
            pointerEvents: "none",
          }} />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          style={{
            display: "inline-block", marginBottom: 20, position: "relative",
            fontFamily: "monospace", fontSize: 10, letterSpacing: "0.3em",
            textTransform: "uppercase", padding: "5px 18px", borderRadius: 999,
            background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)",
            color: "rgba(201,168,76,0.8)",
          }}
        >
          10 Sacred Sites
        </motion.div>

        <motion.h1
          className="page-hero-title"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.8 }}
          style={{
            fontFamily: "'Georgia',serif", fontWeight: 700,
            fontSize: "clamp(34px,6vw,70px)", lineHeight: 1.1,
            marginBottom: 16, position: "relative",
          }}
        >
          Temples &amp; Sacred <span style={{ color: "#C9A84C" }}>Monuments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={{ color: "rgba(255,255,255,0.4)", maxWidth: 540, margin: "0 auto 44px", fontSize: 15, lineHeight: 1.85, position: "relative" }}
        >
          From Jyotirlingas to UNESCO wonders — Madhya Pradesh is India's spiritual heartland.
          Click any temple to unfold its full story, architecture, legend, and visit guide.
        </motion.p>

        <motion.div
          className="stats-hero"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          style={{ display: "flex", gap: 44, justifyContent: "center", flexWrap: "wrap", position: "relative" }}
        >
          {[
            { n: "2",     l: "Jyotirlingas"    },
            { n: "2",     l: "UNESCO Sites"     },
            { n: "3000+", l: "Years of History" },
            { n: "10",    l: "Sacred Sites"     },
          ].map(({ n, l }) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ color: "#C9A84C", fontSize: 26, fontWeight: 700, fontFamily: "'Georgia',serif" }}>{n}</div>
              <div style={{ color: "rgba(255,255,255,0.28)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── FILTER BAR ── */}
      <div style={{
        position: "sticky", top: 68, zIndex: 90,
        background: "rgba(7,4,14,0.95)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "12px 24px", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap",
      }}>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.22)", letterSpacing: "0.15em", textTransform: "uppercase", marginRight: 6 }}>
          Filter:
        </span>
        {(["all", "Ancient", "Medieval"] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: "6px 16px", borderRadius: 999, fontSize: 11, cursor: "pointer",
            background: filter === f ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${filter === f ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.07)"}`,
            color: filter === f ? "#C9A84C" : "rgba(255,255,255,0.38)",
            transition: "all 0.2s",
          }}>
            {f === "all" ? "All Sites" : f}
          </button>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 11, color: "rgba(255,255,255,0.22)" }}>
          {filtered.length} {filtered.length === 1 ? "site" : "sites"}
        </span>
      </div>

      {/* ── CARD LIST ── */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {filtered.map((temple, i) => (
            <TempleCard
              key={temple.id}
              temple={temple}
              index={i}
              isOpen={expanded === temple.id}
              onToggle={() => setExpanded(expanded === temple.id ? null : temple.id)}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{
          marginTop: 48, padding: "18px 24px", borderRadius: 14, textAlign: "center",
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)",
        }}>
          <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.28)", lineHeight: 1.7 }}>
            ⚠️ Timings, entry fees, and dress codes may change. Always verify with the official temple trust before visiting.
            Many temples observe stricter protocols during festivals and major religious events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplesPage;