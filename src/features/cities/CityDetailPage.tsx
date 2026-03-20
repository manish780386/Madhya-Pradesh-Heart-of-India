import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock, MapPin, Utensils, Star, Users, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { CITIES } from "./data/cities";

type Tab = "story" | "highlights" | "food" | "gallery";

const DETAIL_CSS = `
  @keyframes floatA {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-20px); }
  }
  .tab-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.25s;
    white-space: nowrap;
  }
  .tab-btn:hover { color: #fff !important; }

  .story-card {
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .story-card:hover {
    transform: translateX(6px);
  }

  .gallery-img {
    transition: transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
    cursor: pointer;
  }
  .gallery-img:hover { transform: scale(1.04); opacity: 0.9; }

  .other-city-btn {
    transition: all 0.25s;
    cursor: pointer;
    border: none;
  }
  .other-city-btn:hover { transform: translateY(-3px); }

  /* ── Media Queries ── */
  @media (max-width: 480px) {
    .detail-hero    { min-height: 55vh !important; padding: 90px 16px 40px !important; }
    .detail-title   { font-size: 36px !important; }
    .detail-tagline { font-size: 14px !important; }
    .tab-strip      { gap: 0 !important; overflow-x: auto; }
    .tab-btn        { padding: 12px 14px !important; font-size: 11px !important; }
    .highlights-grid{ grid-template-columns: 1fr !important; }
    .gallery-grid   { grid-template-columns: 1fr !important; }
    .others-wrap    { gap: 8px !important; }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .detail-title   { font-size: 48px !important; }
    .highlights-grid{ grid-template-columns: repeat(2,1fr) !important; }
    .gallery-grid   { grid-template-columns: repeat(2,1fr) !important; }
  }
  @media (min-width: 769px) {
    .highlights-grid{ grid-template-columns: repeat(3,1fr) !important; }
    .gallery-grid   { grid-template-columns: repeat(2,1fr) !important; }
  }
`;

const CityDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("story");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const styleId = "detail-page-styles";
    if (!document.getElementById(styleId)) {
      const tag = document.createElement("style");
      tag.id = styleId;
      tag.textContent = DETAIL_CSS;
      document.head.appendChild(tag);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const city = CITIES.find(c => c.id === id);
  const others = CITIES.filter(c => c.id !== id).slice(0, 6);

  if (!city) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#05050A" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🗺️</div>
        <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 28, color: "#fff", marginBottom: 16 }}>City not found</h2>
        <button
          onClick={() => navigate("/cities")}
          style={{
            padding: "10px 24px", borderRadius: 999, cursor: "pointer",
            background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)",
            color: "#C9A84C", fontSize: 13,
          }}
        >
          ← All Cities
        </button>
      </div>
    </div>
  );

  const tabs: { key: Tab; label: string }[] = [
    { key: "story",      label: "🌅 Day Story"  },
    { key: "highlights", label: "📍 Highlights"  },
    { key: "food",       label: "🍽️ Cuisine"     },
    { key: "gallery",    label: "🖼️ Gallery"     },
  ];

  return (
    <div style={{ background: "#05050A", color: "#fff", minHeight: "100vh" }}>

      {/* ── HERO ──────────────────────────────────── */}
      <div
        className="detail-hero"
        style={{
          position: "relative", minHeight: "70vh",
          display: "flex", alignItems: "flex-end",
          overflow: "hidden", padding: "120px 32px 56px",
        }}
      >
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src={city.coverImage}
            alt={city.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            onError={e => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
              const parent = el.parentElement;
              if (parent) parent.style.background = city.heroGradient;
            }}
          />
        </div>

        {/* Overlays */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,10,0.65)" }} />
        <div style={{ position: "absolute", inset: 0, background: city.heroGradient, mixBlendMode: "overlay", opacity: 0.4 }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
          background: "linear-gradient(to top, #05050A, transparent)",
        }} />

        {/* Floating glow orb */}
        <div style={{
          position: "absolute", width: 600, height: 600, borderRadius: "50%",
          background: `${city.accent}0a`, top: "-20%", right: "-5%",
          filter: "blur(100px)", animation: "floatA 14s ease-in-out infinite",
          pointerEvents: "none",
        }} />

        {/* Back button */}
        <button
          onClick={() => navigate("/cities")}
          style={{
            position: "absolute", top: 88, left: 24,
            display: "flex", alignItems: "center", gap: 8,
            fontSize: 12, color: "rgba(255,255,255,0.6)",
            background: "rgba(0,0,0,0.35)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "8px 16px", borderRadius: 999, cursor: "pointer",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
        >
          <ArrowLeft size={13} /> All Cities
        </button>

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: "monospace", fontSize: 11, letterSpacing: "0.25em",
              textTransform: "uppercase", color: city.accent, marginBottom: 12,
            }}
          >
            {city.nameDev} · {city.region}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <div style={{ fontSize: 52, marginBottom: 8, lineHeight: 1 }}>{city.emoji}</div>
            <h1
              className="detail-title"
              style={{
                fontFamily: "'Georgia',serif", fontWeight: 700,
                fontSize: "clamp(42px,6.5vw,84px)", lineHeight: 1.0,
                letterSpacing: "-0.02em", margin: 0, marginBottom: 12,
                textShadow: `0 0 60px ${city.accent}30`,
              }}
            >
              {city.name}
            </h1>
            <p
              className="detail-tagline"
              style={{
                fontFamily: "'Georgia',serif", fontStyle: "italic",
                fontSize: "clamp(14px,1.8vw,20px)", color: "rgba(255,255,255,0.5)",
                margin: 0, marginBottom: 20, maxWidth: 540,
              }}
            >
              {city.tagline}
            </p>
          </motion.div>

          {/* Meta chips */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            {[
              { icon: <Clock size={11} />, text: city.bestTime },
              { icon: <MapPin size={11} />, text: city.distance },
              ...(city.population ? [{ icon: <Users size={11} />, text: city.population }] : []),
              ...(city.famousFor ? [{ icon: <Zap size={11} />, text: city.famousFor }] : []),
            ].map((chip, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 12, color: "rgba(255,255,255,0.45)",
              }}>
                <span style={{ color: city.accent }}>{chip.icon}</span>
                {chip.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── TAB STRIP ─────────────────────────────── */}
      <div
        style={{
          position: "sticky", top: 68, zIndex: 100,
          background: "rgba(5,5,10,0.94)", backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="tab-strip"
          style={{
            maxWidth: 1000, margin: "0 auto", padding: "0 24px",
            display: "flex", gap: 0,
          }}
        >
          {tabs.map(t => (
            <button
              key={t.key}
              className="tab-btn"
              onClick={() => setTab(t.key)}
              style={{
                padding: "16px 22px",
                fontSize: 12, letterSpacing: "0.05em",
                color: tab === t.key ? city.accent : "rgba(255,255,255,0.35)",
                borderBottom: `2px solid ${tab === t.key ? city.accent : "transparent"}`,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENT ───────────────────────────────── */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Description */}
        <p style={{
          fontSize: 15, color: "rgba(255,255,255,0.48)", lineHeight: 1.95,
          maxWidth: 720, marginBottom: 48,
        }}>
          {city.description}
        </p>

        <AnimatePresence mode="wait">

          {/* ── STORY TAB ───────────── */}
          {tab === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {city.story.map((s, i) => (
                  <motion.div
                    key={i}
                    className="story-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    style={{
                      display: "flex", gap: 20, padding: "22px 24px", borderRadius: 18,
                      background: "rgba(255,255,255,0.025)",
                      border: `1px solid rgba(255,255,255,0.05)`,
                      borderLeft: `3px solid ${city.accent}40`,
                    }}
                  >
                    <div style={{ fontSize: 36, flexShrink: 0, marginTop: 2, lineHeight: 1 }}>{s.icon}</div>
                    <div>
                      <div style={{
                        fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em",
                        textTransform: "uppercase", color: city.accent, marginBottom: 8,
                      }}>
                        {s.time}
                      </div>
                      <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.85 }}>
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── HIGHLIGHTS TAB ──────── */}
          {tab === "highlights" && (
            <motion.div
              key="highlights"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}
            >
              <div
                className="highlights-grid"
                style={{ display: "grid", gap: 14 }}
              >
                {city.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 14,
                      padding: "18px 20px", borderRadius: 14,
                      background: `${city.accent}08`,
                      border: `1px solid ${city.accent}20`,
                    }}
                  >
                    <span style={{ fontSize: 24, flexShrink: 0 }}>{h.icon}</span>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{h.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── FOOD TAB ────────────── */}
          {tab === "food" && (
            <motion.div
              key="food"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {city.food.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "16px 20px", borderRadius: 14,
                      background: "rgba(212,82,42,0.05)",
                      border: "1px solid rgba(212,82,42,0.12)",
                    }}
                  >
                    <Utensils size={15} style={{ color: "#D4522A", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.78)", flex: 1 }}>{f}</span>
                    {i < 2 && <Star size={11} style={{ color: "#C9A84C" }} fill="#C9A84C" />}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── GALLERY TAB ─────────── */}
          {tab === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}
            >
              <div
                className="gallery-grid"
                style={{ display: "grid", gap: 14 }}
              >
                {city.galleryImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    style={{
                      position: "relative", height: 220, borderRadius: 16, overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    onClick={() => setLightbox(i)}
                  >
                    <img
                      src={img}
                      alt={`${city.name} ${i + 1}`}
                      loading="lazy"
                      className="gallery-img"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                      onError={e => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = "none";
                        const parent = el.parentElement;
                        if (parent) parent.style.background = city.heroGradient;
                      }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(5,5,10,0.5) 0%, transparent 60%)",
                    }} />
                    <div style={{
                      position: "absolute", bottom: 10, right: 12,
                      fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace",
                    }}>
                      {i + 1} / {city.galleryImages.length}
                    </div>
                  </motion.div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 14, textAlign: "center" }}>
                Click any image to enlarge
              </p>
            </motion.div>
          )}

        </AnimatePresence>

        {/* ── OTHER CITIES ──────────────────────────── */}
        <div style={{ marginTop: 72, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.4)", fontFamily: "'Georgia',serif", marginBottom: 20 }}>
            Also Explore
          </div>
          <div className="others-wrap" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {others.map(c => (
              <button
                key={c.id}
                className="other-city-btn"
                onClick={() => { navigate(`/cities/${c.id}`); setTab("story"); }}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "10px 18px", borderRadius: 999, fontSize: 12,
                  background: `${c.accent}10`, border: `1px solid ${c.accent}22`,
                  color: c.accent,
                }}
              >
                {c.emoji} {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ──────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 1000,
              background: "rgba(0,0,0,0.92)", display: "flex",
              alignItems: "center", justifyContent: "center", padding: 24,
            }}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={city.galleryImages[lightbox]}
              alt="Enlarged"
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: "90vw", maxHeight: "85vh", borderRadius: 16,
                objectFit: "contain", border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            {/* Prev/Next */}
            {lightbox > 0 && (
              <button
                onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                style={{
                  position: "fixed", left: 16, top: "50%", transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
                  width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#fff",
                }}
              >
                <ChevronLeft size={22} />
              </button>
            )}
            {lightbox < city.galleryImages.length - 1 && (
              <button
                onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                style={{
                  position: "fixed", right: 16, top: "50%", transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
                  width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#fff",
                }}
              >
                <ChevronRight size={22} />
              </button>
            )}
            {/* Close hint */}
            <div style={{
              position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
              fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "monospace", letterSpacing: "0.2em",
            }}>
              CLICK ANYWHERE TO CLOSE · {lightbox + 1}/{city.galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default CityDetailPage;