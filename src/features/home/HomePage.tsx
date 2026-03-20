import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useInterval(cb: () => void, delay: number) {
  const saved = useRef(cb);
  useEffect(() => { saved.current = cb; }, [cb]);
  useEffect(() => {
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return pos;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SCENES = [
  {
    label: "Ancient Temples",
    gradient: "linear-gradient(135deg,#0D0200 0%,#3D1200 40%,#8B4513 70%,#C9A84C 100%)",
    image: "https://travelsnwrite.com/wp-content/uploads/2022/11/Mahakal10-768x1024.jpg",
  },
  {
    label: "Wild Forests",
    gradient: "linear-gradient(135deg,#010801 0%,#071B0D 40%,#1B4332 70%,#52B788 100%)",
    image: "https://th.bing.com/th/id/OIP.I8Q908140A2ul63u5WFrKwHaEK",
  },
  {
    label: "Vibrant Culture",
    gradient: "linear-gradient(135deg,#020814 0%,#0A1F40 40%,#1A3A6B 70%,#4A90D9 100%)",
    image: "https://tse2.mm.bing.net/th/id/OIP.p_V2zhzlJMYzqFOFSwR4RwHaEK",
  },
  {
    label: "Vibrant Cities",
    gradient: "linear-gradient(135deg,#1A0028 0%,#4A0060 40%,#8B00CC 70%,#C77DFF 100%)",
    image: "https://www.tripsavvy.com/thmb/SNf5gPo4ggN_trvFdtI0lmvSD_o=/2880x1920/filters:fill(auto,1)/GettyImages-119793001-5a02ace422fa3a0037422646.jpg",
  },
  {
    label: "Vibrant Festivals",
    gradient: "linear-gradient(135deg,#1A0028 0%,#4A0060 40%,#8B00CC 70%,#C77DFF 100%)",
    image: "https://artredis.com/wp-content/uploads/2022/07/kf-1.jpg",
  },
];

const MARQUEE_ITEMS = [
  "Khajuraho", "Bandhavgarh Tigers", "Holi in Indore", "Mahakaleshwar",
  "Kanha Jungle", "Orchha Temples", "Bhopal Lakes", "Gond Art",
  "Narmada River", "Pachmarhi Hills", "Tansen Music", "Dal Baati Churma", "Ujjain Kumbh",
];

const EXPLORE_CARDS = [
  { path: "/cities",    icon: "🏙️", label: "Cities",    desc: "6 iconic destinations",   img: "https://tse4.mm.bing.net/th/id/OIP.4rs-uyklXQ7ThBmWvCnQOAHaFW" },
  { path: "/wildlife",  icon: "🐯", label: "Wildlife",  desc: "6 national parks",         img: "https://th.bing.com/th/id/OIP.1qSuCoCAz53XKHKh9S_YEAHaEU" },
  { path: "/temples",   icon: "⛩️", label: "Temples",   desc: "Ancient sacred sites",     img: "https://gandhisagarforestretreat.com/wp-content/uploads/2024/07/BLOG-July-Blog-1_B-1024x512.jpg" },
  { path: "/festivals", icon: "🎨", label: "Festivals", desc: "Color, music & devotion",  img: "https://th.bing.com/th/id/OIP.sYh-NJag403hmI8QEtUpywAAAA" },
  { path: "/food",      icon: "🍲", label: "Cuisine",   desc: "Street to sacred sweets",  img: "https://www.easeindiatrip.com/blog/wp-content/uploads/2025/08/Madhya-Pradesh-Famous-Food.jpg" },
  { path: "/art",       icon: "🏺", label: "Art",       desc: "Tribal & folk traditions", img: "https://th.bing.com/th/id/OIP.HHB5lsvJuOmo5hVoSf8uQwHaEK" },
   { path: "/rivers",    icon: "💧", label: "Rivers",    desc: "Flowing through heritage", img: "https://tse4.mm.bing.net/th/id/OIP.LOwcU_8e5PDuphgtkIhJogHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
   { path: "/languages", icon: "🗣️", label: "Languages", desc: "Diverse linguistic heritage", img: "https://i.ytimg.com/vi/B8724lHyQDY/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCtw4UoAvDmIbTtQK2nuGL4Ow2VIQ" },
];

const STATS = [
  { n: "52",    l: "Districts"    },
  { n: "3000+", l: "Yrs History" },
  { n: "12",    l: "Natl Parks"  },
  { n: "25M+",  l: "Visitors/yr" },
];

// ─── Keyframes injected once ──────────────────────────────────────────────────

const GLOBAL_CSS = `
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes floatA {
    0%,100% { transform: translateY(0px)   translateX(0px); }
    33%      { transform: translateY(-22px) translateX(12px); }
    66%      { transform: translateY(14px)  translateX(-8px); }
  }
  @keyframes floatB {
    0%,100% { transform: translateY(0px)   translateX(0px); }
    50%      { transform: translateY(-18px) translateX(18px); }
  }
  @keyframes floatC {
    0%,100% { transform: translateY(0px)  translateX(0px); }
    40%      { transform: translateY(20px) translateX(-14px); }
  }
  @keyframes glowPulse {
    0%,100% { opacity: 0.4; }
    50%      { opacity: 1; }
  }
  .marquee-track {
    display: flex;
    white-space: nowrap;
    animation: marquee 32s linear infinite;
    will-change: transform;
  }
  .marquee-track:hover { animation-play-state: paused; }

  /* Scroll-cue */
  .scroll-cue { animation: glowPulse 2.5s ease-in-out infinite; }

  /* Card hover image zoom */
  .explore-card img { transition: transform 0.7s cubic-bezier(0.4,0,0.2,1); }
  .explore-card:hover img { transform: scale(1.1); }

  /* ── Media Queries ───────────────────────────────────── */

  /* Mobile: ≤ 480px */
  @media (max-width: 480px) {
    .hero-title    { font-size: 38px !important; }
    .hero-sub      { font-size: 13px !important; }
    .hero-btns     { flex-direction: column; align-items: center; }
    .hero-btns button { width: 100%; justify-content: center; }
    .stats-row     { gap: 20px !important; }
    .explore-grid  { grid-template-columns: 1fr !important; }
    .explore-card  { height: 200px !important; }
    .pull-quote    { font-size: 18px !important; }
    .section-title { font-size: 26px !important; }
  }

  /* Tablet: 481px – 768px */
  @media (min-width: 481px) and (max-width: 768px) {
    .hero-title    { font-size: 52px !important; }
    .explore-grid  { grid-template-columns: repeat(2, 1fr) !important; }
    .explore-card  { height: 220px !important; }
  }

  /* Small desktop: 769px – 1024px */
  @media (min-width: 769px) and (max-width: 1024px) {
    .explore-grid  { grid-template-columns: repeat(3, 1fr) !important; }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [sceneIdx, setSceneIdx] = useState(0);
  const mouse = useMouseParallax();

  useInterval(() => setSceneIdx(i => (i + 1) % SCENES.length), 4500);
  const scene = SCENES[sceneIdx];

  // Inject global CSS once
  useEffect(() => {
    const id = "mp-global-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = GLOBAL_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <div style={{ background: "#05050A", color: "#fff", overflowX: "hidden" }}>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ height: "100svh", minHeight: 560 }}>

        {/* Background Image (cross-fade) */}
        <AnimatePresence mode="sync">
          <motion.div
            key={sceneIdx}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1,  scale: 1    }}
            exit={{    opacity: 0              }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${scene.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              willChange: "transform, opacity",
            }}
          />
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: "rgba(5,5,10,0.72)" }} />

        {/* Gradient colour overlay (blended) */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: scene.gradient,
            mixBlendMode: "overlay",
            opacity: 0.45,
            transition: "background 2.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        />

        {/* Parallax orbs */}
        {[
          { w: 600, h: 600, bg: "rgba(201,168,76,0.07)",  top: "-10%", left: "62%", anim: "floatA 14s ease-in-out infinite", factor: 1 },
          { w: 450, h: 450, bg: "rgba(82,183,136,0.06)",  top: "58%",  left: "-8%", anim: "floatB 10s ease-in-out infinite", factor: 2 },
          { w: 350, h: 350, bg: "rgba(212,82,42,0.05)",   top: "18%",  left: "78%", anim: "floatC 17s ease-in-out infinite", factor: 3 },
        ].map((o, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none z-[1]"
            style={{
              width: o.w, height: o.h,
              background: o.bg,
              top: o.top, left: o.left,
              filter: "blur(90px)",
              animation: o.anim,
              transform: `translate(${mouse.x * o.factor * 0.3}px, ${mouse.y * o.factor * 0.3}px)`,
              transition: "transform 0.9s ease",
            }}
          />
        ))}

        {/* Bottom fade to page bg */}
        <div className="absolute bottom-0 left-0 right-0 z-[2]" style={{ height: 160, background: "linear-gradient(to top, #05050A, transparent)" }} />

        {/* Noise grain */}
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            opacity: 0.035,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* ── Hero Content ── */}
        <div
          className="relative z-[3] flex flex-col items-center justify-center text-center px-5"
          style={{ height: "100%", paddingTop: 60 }}
        >
          {/* Scene badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${sceneIdx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-block",
                marginBottom: 28,
                fontFamily: "monospace",
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                padding: "5px 18px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {scene.label}
            </motion.div>
          </AnimatePresence>

          {/* Headline */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Georgia', serif",
              fontWeight: 700,
              fontSize: "clamp(42px, 7.5vw, 96px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 20,
              textShadow: "0 0 60px rgba(201,168,76,0.25)",
            }}
          >
            Experience the<br />
            <span style={{ color: "#F0C040" }}>Heart of India</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: "clamp(13px, 1.4vw, 17px)",
              color: "rgba(255,255,255,0.52)",
              maxWidth: 460,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            A cinematic journey through temples, jungles, and living traditions — no passport required.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
          >
            <button
              onClick={() => navigate("/cities")}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "14px 32px", borderRadius: 999,
                background: "linear-gradient(135deg,#8B6914,#C9A84C,#E8C96A)",
                border: "none", color: "#05050A", fontWeight: 700, fontSize: 14,
                cursor: "pointer", boxShadow: "0 4px 28px rgba(201,168,76,0.4)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              Begin Journey <ArrowRight size={15} />
            </button>

            <button
              onClick={() => navigate("/wildlife")}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "14px 32px", borderRadius: 999,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.75)", fontSize: 14,
                cursor: "pointer", backdropFilter: "blur(8px)",
                transition: "background 0.25s, color 0.25s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.13)";
                el.style.color = "#fff";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.07)";
                el.style.color = "rgba(255,255,255,0.75)";
              }}
            >
              <Play size={13} /> Watch Safari
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="stats-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap", marginTop: 40 }}
          >
            {STATS.map(({ n, l }) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ color: "#C9A84C", fontSize: 28, fontWeight: 700, fontFamily: "'Georgia',serif" }}>{n}</div>
                <div style={{ color: "rgba(255,255,255,0.33)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div
          className="scroll-cue absolute left-1/2 z-[3] mt-0"
          style={{
            bottom: 32,
            transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          }}
        >
          <div style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(255,255,255,0.22)", letterSpacing: "0.3em" }}>SCROLL</div>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)" }} />
        </div>
      </div>

      {/* ── MARQUEE ──────────────────────────────────────────────── */}
      <div
        style={{
          padding: "14px 0",
          overflow: "hidden",
          background: "rgba(201,168,76,0.035)",
          borderTop: "1px solid rgba(201,168,76,0.08)",
          borderBottom: "1px solid rgba(201,168,76,0.08)",
          
        }}
      >
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "monospace",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "0 32px",
                color: i % 2 === 0 ? "rgba(201,168,76,0.65)" : "rgba(255,255,255,0.22)",
                userSelect: "none",
              }}
            >
              {item} {i % 2 === 0 ? "◆" : "·"}
            </span>
          ))}
        </div>
      </div>

      {/* ── EXPLORE GRID ─────────────────────────────────────────── */}
      <div style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{
              display: "inline-block",
              fontFamily: "monospace",
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.6)",
              border: "1px solid rgba(201,168,76,0.2)",
              padding: "5px 16px",
              borderRadius: 999,
              marginBottom: 18,
            }}>
              Choose Your Experience
            </div>
            <h2
              className="section-title"
              style={{
                fontFamily: "'Georgia',serif",
                fontWeight: 600,
                fontSize: "clamp(26px, 3.5vw, 46px)",
                margin: 0,
              }}
            >
              Where do you want to go?
            </h2>
          </div>

          {/* Grid */}
          <div
            className="explore-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
          >
            {EXPLORE_CARDS.map((card, i) => (
              <motion.div
                key={card.path}
                className="explore-card"
                onClick={() => navigate(card.path)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  position: "relative",
                  height: 260,
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Image */}
                <img
                  src={card.img}
                  alt={card.label}
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  onError={e => {
                    // Fallback gradient if image fails
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(5,5,10,0.88) 0%, rgba(5,5,10,0.3) 55%, transparent 100%)",
                    transition: "background 0.4s",
                    zIndex: 1,
                  }}
                />

                {/* Text content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    padding: "20px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 8, lineHeight: 1 }}>{card.icon}</div>
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, fontFamily: "'Georgia',serif" }}>{card.label}</h3>
                  <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{card.desc}</p>
                </div>

                {/* Arrow */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    zIndex: 2,
                    color: "rgba(255,255,255,0.3)",
                    transition: "color 0.3s, transform 0.3s",
                  }}
                  className="card-arrow"
                >
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PULL QUOTE ───────────────────────────────────────────── */}
      <div
        style={{
          padding: "72px 24px",
          borderTop: "1px solid rgba(201,168,76,0.06)",
          background: "rgba(201,168,76,0.025)",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "monospace",
            fontSize: 9,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)",
            marginBottom: 24,
          }}>
            A traveller once wrote
          </div>
          <blockquote
            className="pull-quote"
            style={{
              margin: 0,
              fontFamily: "'Georgia',serif",
              fontStyle: "italic",
              fontSize: "clamp(18px, 2.4vw, 30px)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.52)",
            }}
          >
            "If India is a body, Madhya Pradesh is the heartbeat — ancient, steady, and completely unhurried."
          </blockquote>
        </div>
      </div>

    </div>
  );
};

export default HomePage;