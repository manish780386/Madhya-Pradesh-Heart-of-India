import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { ArrowRight, Clock,  Search } from "lucide-react";
import { CITIES } from "./data/cities";

// Inject CSS once
const PAGE_CSS = `
  @keyframes ringExpand {
    0%   { transform: translate(-50%,-50%) scale(0.8); opacity: 0.8; }
    100% { transform: translate(-50%,-50%) scale(2);   opacity: 0; }
  }
  .ring-expand {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    animation: ringExpand 1.6s ease-out infinite;
  }
  .city-card-img {
    transition: transform 0.7s cubic-bezier(0.4,0,0.2,1);
  }
  .city-card:hover .city-card-img {
    transform: scale(1.08);
  }
  .city-card-overlay {
    background: linear-gradient(to top, rgba(5,5,10,0.95) 0%, rgba(5,5,10,0.4) 60%, transparent 100%);
    transition: background 0.4s;
  }
  .city-card:hover .city-card-overlay {
    background: linear-gradient(to top, rgba(5,5,10,0.98) 0%, rgba(5,5,10,0.55) 70%, rgba(5,5,10,0.1) 100%);
  }
  .map-dot-label {
    transition: all 0.25s ease;
    text-shadow: 0 1px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7);
    pointer-events: none;
  }

  /* ── Media Queries ── */
  @media (max-width: 480px) {
    .cities-grid  { grid-template-columns: 1fr !important; }
    .city-card    { height: 220px !important; }
    .page-title   { font-size: 32px !important; }
    .map-wrap     { height: 260px !important; }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .cities-grid  { grid-template-columns: repeat(2,1fr) !important; }
    .city-card    { height: 240px !important; }
    .page-title   { font-size: 42px !important; }
    .map-wrap     { height: 320px !important; }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .cities-grid  { grid-template-columns: repeat(2,1fr) !important; }
    .map-wrap     { height: 380px !important; }
  }
  @media (min-width: 1025px) {
    .cities-grid  { grid-template-columns: repeat(3,1fr) !important; }
  }
`;

const CitiesPage: React.FC = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const id = "cities-page-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = PAGE_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  const filtered = CITIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.region.toLowerCase().includes(search.toLowerCase()) ||
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#05050A", color: "#fff", minHeight: "100vh" }}>

      {/* ── HERO HEADER ─────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg,#0A0818 0%,#1A1040 40%,#2A1A60 100%)",
          padding: "120px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(155,114,207,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          style={{
            display: "inline-block", marginBottom: 20,
            fontFamily: "monospace", fontSize: 10, letterSpacing: "0.3em",
            textTransform: "uppercase", padding: "5px 18px", borderRadius: 999,
            background: "rgba(155,114,207,0.12)", border: "1px solid rgba(155,114,207,0.25)",
            color: "rgba(155,114,207,0.8)",
          }}
        >
          10 Destinations
        </motion.div>

        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          style={{
            fontFamily: "'Georgia', serif", fontWeight: 700,
            fontSize: "clamp(36px,6vw,72px)", lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Cities of <span style={{ color: "#9B72CF" }}>Madhya Pradesh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={{ color: "rgba(255,255,255,0.45)", maxWidth: 520, margin: "0 auto 40px", fontSize: 15, lineHeight: 1.8 }}
        >
          Each city is a universe. Click to begin its story — from dawn rituals to midnight streets.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{
            display: "flex", alignItems: "center", gap: 12,
            maxWidth: 400, margin: "0 auto",
            background: "rgba(255,255,255,0.06)", borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.1)", padding: "10px 20px",
          }}
        >
          <Search size={15} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search cities, regions..."
            style={{
              background: "transparent", border: "none", outline: "none",
              color: "#fff", fontSize: 13, width: "100%",
            }}
          />
        </motion.div>
      </div>

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "60px 24px" }}>

        {/* ── INTERACTIVE MAP ──────────────────────── */}
        <div style={{ marginBottom: 16 }}>
          <div style={{
            fontFamily: "monospace", fontSize: 9, letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
            border: "1px solid rgba(201,168,76,0.2)", display: "inline-block",
            padding: "5px 14px", borderRadius: 999, marginBottom: 14,
          }}>
            Interactive Map
          </div>
          <h2 style={{ fontFamily: "'Georgia',serif", fontSize: "clamp(22px,3vw,36px)", marginBottom: 24 }}>
            Explore by <span style={{ color: "#C9A84C" }}>Location</span>
          </h2>
        </div>

        <div
          className="map-wrap"
          style={{
            position: "relative", height: 400, borderRadius: 24, overflow: "hidden",
            background: "rgba(255,255,255,0.018)", border: "1px solid rgba(255,255,255,0.06)",
            marginBottom: 64,
          }}
        >
          <svg viewBox="0 0 100 80" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
            {/* MP Silhouette */}
            <path
              d="M14,9 Q22,4 36,7 Q52,3 67,9 Q82,7 90,19 Q94,32 87,47 Q81,60 70,67 Q54,77 38,74 Q22,71 13,61 Q4,50 7,34 Q9,19 14,9 Z"
              fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.3)" strokeWidth="0.35"
            />
            {/* Grid lines */}
            <line x1="14" y1="40" x2="90" y2="40" stroke="rgba(255,255,255,0.04)" strokeWidth="0.25" strokeDasharray="2,3" />
            <line x1="50" y1="7"  x2="50" y2="74" stroke="rgba(255,255,255,0.04)" strokeWidth="0.25" strokeDasharray="2,3" />
            {/* Region labels */}
            <text x="25" y="30" style={{ fontSize: "3.5px", fill: "rgba(255,255,255,0.12)", fontFamily: "monospace" }}>WEST</text>
            <text x="55" y="30" style={{ fontSize: "3.5px", fill: "rgba(255,255,255,0.12)", fontFamily: "monospace" }}>EAST</text>
            <text x="35" y="72" style={{ fontSize: "3.5px", fill: "rgba(255,255,255,0.12)", fontFamily: "monospace" }}>SOUTH</text>
          </svg>

          {/* City dots */}
          {CITIES.map(city => (
            <button
              key={city.id}
              onClick={() => navigate(`/cities/${city.id}`)}
              onMouseEnter={() => setHovered(city.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "absolute",
                left: `${city.coords.x}%`, top: `${city.coords.y}%`,
                transform: "translate(-50%,-50%)",
                background: "transparent", border: "none", cursor: "pointer",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                zIndex: 10, padding: 8,
              }}
            >
              {/* Pulse rings */}
              {hovered === city.id && (
                <>
                  <div className="ring-expand" style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${city.accent}60` }} />
                  <div className="ring-expand" style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${city.accent}30`, animationDelay: "0.5s" }} />
                </>
              )}
              {/* Dot */}
              <div style={{
                width: hovered === city.id ? 20 : 11,
                height: hovered === city.id ? 20 : 11,
                borderRadius: "50%",
                background: city.accent,
                boxShadow: hovered === city.id
                  ? `0 0 24px ${city.accent}, 0 0 48px ${city.accent}60`
                  : `0 0 8px ${city.accent}80`,
                transition: "all 0.3s ease",
              }} />
              {/* Label */}
              <span className="map-dot-label" style={{
                fontFamily: "monospace", fontSize: hovered === city.id ? 10 : 8.5,
                color: hovered === city.id ? city.accent : "rgba(255,255,255,0.4)",
                fontWeight: hovered === city.id ? 700 : 400,
                whiteSpace: "nowrap",
              }}>
                {city.emoji} {city.name}
              </span>
            </button>
          ))}
        </div>

        {/* ── CITY CARDS ───────────────────────────── */}
        <div style={{ marginBottom: 16 }}>
          <div style={{
            fontFamily: "monospace", fontSize: 9, letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
            border: "1px solid rgba(201,168,76,0.2)", display: "inline-block",
            padding: "5px 14px", borderRadius: 999, marginBottom: 14,
          }}>
            {filtered.length} {filtered.length === 1 ? "City" : "Cities"}
          </div>
          <h2 style={{ fontFamily: "'Georgia',serif", fontSize: "clamp(22px,3vw,36px)", marginBottom: 32 }}>
            Choose Your <span style={{ color: "#C9A84C" }}>Destination</span>
          </h2>
        </div>

        <div
          className="cities-grid"
          style={{ display: "grid", gap: 20 }}
        >
          {filtered.map((city, i) => (
            <motion.div
              key={city.id}
              className="city-card"
              onClick={() => navigate(`/cities/${city.id}`)}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              style={{
                position: "relative", height: 280, borderRadius: 20, overflow: "hidden",
                cursor: "pointer", border: `1px solid ${city.accent}18`,
              }}
            >
              {/* Image */}
              <img
                src={city.coverImage}
                alt={city.name}
                loading="lazy"
                className="city-card-img"
                style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center",
                }}
                onError={e => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent) parent.style.background = city.heroGradient;
                }}
              />

              {/* Gradient overlay */}
              <div className="city-card-overlay" style={{ position: "absolute", inset: 0, zIndex: 1 }} />

              {/* Accent corner */}
              <div style={{
                position: "absolute", top: 16, right: 16, zIndex: 3,
                fontFamily: "monospace", fontSize: 9, letterSpacing: "0.2em",
                textTransform: "uppercase", padding: "4px 10px", borderRadius: 999,
                background: `${city.accent}20`, border: `1px solid ${city.accent}40`,
                color: city.accent,
              }}>
                {city.region}
              </div>

              {/* Content */}
              <div style={{
                position: "absolute", inset: 0, zIndex: 2,
                padding: "18px 20px", display: "flex", flexDirection: "column", justifyContent: "flex-end",
              }}>
                <div style={{ fontSize: 28, marginBottom: 6, lineHeight: 1 }}>{city.emoji}</div>

                <div style={{
                  fontFamily: "monospace", fontSize: 9, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: city.accent, marginBottom: 4,
                }}>
                  {city.nameDev}
                </div>

                <h3 style={{
                  fontFamily: "'Georgia',serif", fontSize: 22, fontWeight: 700,
                  margin: 0, marginBottom: 2, lineHeight: 1.2,
                }}>
                  {city.name}
                </h3>

                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontStyle: "italic", marginBottom: 10 }}>
                  {city.title}
                </div>

                {/* Highlights pills */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                  {city.highlights.slice(0, 2).map(h => (
                    <span key={h.label} style={{
                      fontSize: 10, padding: "3px 8px", borderRadius: 999,
                      background: `${city.accent}18`, color: city.accent,
                      border: `1px solid ${city.accent}25`,
                    }}>
                      {h.icon} {h.label}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
                    <Clock size={10} style={{ color: city.accent }} />
                    {city.bestTime}
                  </div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 5, fontSize: 11,
                    color: city.accent, fontWeight: 600,
                  }}>
                    Explore <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 24px", color: "rgba(255,255,255,0.35)" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🗺️</div>
            <p style={{ fontSize: 15 }}>No cities found for "{search}"</p>
            <button
              onClick={() => setSearch("")}
              style={{
                marginTop: 16, padding: "10px 24px", borderRadius: 999,
                background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)",
                color: "#C9A84C", cursor: "pointer", fontSize: 13,
              }}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CitiesPage;