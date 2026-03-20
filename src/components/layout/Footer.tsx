import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail, Instagram, Youtube, Waves, Languages, ArrowUpRight } from "lucide-react";


// ─── Footer stats ─────────────────────────────────────────────────────────────
const STATS = [
  { value: "52",  label: "Districts",          icon: "◈" },
  { value: "12",  label: "National Parks",     icon: "◈" },
  { value: "6",   label: "Jyotirlinga Shrines",icon: "◈" },
  { value: "3",   label: "UNESCO Sites",       icon: "◈" },
  { value: "6",   label: "Major Rivers",       icon: "◈" },
  { value: "46",  label: "Tribal Communities", icon: "◈" },
];

// Per-route accent (matches Navbar) 
const ROUTE_ACCENT: Record<string, string> = {
  "/":          "#C9A84C",
  "/cities":    "#F4A261",
  "/wildlife":  "#52B788",
  "/temples":   "#C77DFF",
  "/festivals": "#FF6B9D",
  "/food":      "#F4A261",
  "/art":       "#A78BFA",
  "/rivers":    "#00B4D8",
  "/languages": "#E879A0",
  "/plan":      "#C9A84C",
};

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
const SOCIALS = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube,   href: "#", label: "YouTube"   },
  { Icon: Mail,      href: "#", label: "Email"     },
];

// ─── QUICK LINKS (split into two columns) ────────────────────────────────────
const QUICK_LINKS = [
  { label: "Home",       path: "/"          },
  { label: "Cities",     path: "/cities"    },
  { label: "Wildlife",   path: "/wildlife"  },
  { label: "Temples",    path: "/temples"   },
  { label: "Festivals",  path: "/festivals" },
  { label: "Food",       path: "/food"      },
  { label: "Art",        path: "/art"       },
  { label: "Rivers",     path: "/rivers"    },
  { label: "Languages",  path: "/languages" },
  { label: "Plan Trip",  path: "/plan"      },
];

const Footer: React.FC = () => (
  <footer style={{ background: "#03030A", borderTop: "1px solid rgba(201,168,76,0.08)" }}>

    {/* ── STATS BAR ──────────────────────────────────────────────── */}
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 md:grid-cols-6 gap-4">
        {STATS.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="text-center group"
          >
            <div className="font-display text-3xl font-bold mb-1 transition-transform duration-300 group-hover:scale-110"
              style={{ color: "#C9A84C", textShadow: "0 0 24px rgba(201,168,76,0.3)" }}>
              {s.value}
            </div>
            <div className="font-sans text-[10px] text-white/30 tracking-widest uppercase leading-[1.5]">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ── MAIN FOOTER BODY ────────────────────────────────────────── */}
    <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">

      {/* BRAND — col 1–4 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:col-span-4"
      >
        <Link to="/" className="inline-block mb-3">
          <div className="font-display text-4xl font-bold transition-all duration-300 hover:scale-105"
            style={{ color: "#C9A84C", textShadow: "0 0 32px rgba(201,168,76,0.35)" }}>
            मध्यप्रदेश
          </div>
        </Link>

        <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-white/25 mb-5">
          Madhya Pradesh · Heart of India
        </div>

        <p className="font-sans text-[13px] text-white/38 leading-[1.85] mb-6 max-w-xs">
          A cinematic digital journey through the soul of Central India — temples, tigers, rivers, and a thousand years of living culture.
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 mb-6 text-white/25">
          <MapPin size={12} />
          <span className="font-sans text-[11px]">Bhopal, Madhya Pradesh, India</span>
        </div>

        {/* Socials */}
        <div className="flex gap-2.5">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.38)",
              }}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* EXPLORE LINKS — col 5–8 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="md:col-span-4"
      >
        <div className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/25 mb-5">
          Explore
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
          {QUICK_LINKS.map((item, i) => {
            const accent = ROUTE_ACCENT[item.path] ?? "#C9A84C";
            return (
              <motion.div key={item.path}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <Link to={item.path}
                  className="relative flex items-center gap-1.5 py-1.5 font-sans text-[12.5px] text-white/40 transition-all duration-200 group hover:text-white/80"
                >
                  {/* Dot indicator */}
                  <span className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200 group-hover:scale-150"
                    style={{ background: `${accent}60` }} />
                  {item.label}
                  {/* Underline */}
                  <span className="absolute left-4 bottom-0.5 h-px w-0 rounded-full transition-all duration-300 group-hover:w-[calc(100%-1rem)]"
                    style={{ background: accent }} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* QUOTE + NEW SECTIONS CTA — col 9–12 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.16 }}
        className="md:col-span-4"
      >
        <div className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/25 mb-5">
          A Note
        </div>

        <blockquote className="font-display italic text-[16px] text-white/45 leading-[1.85] mb-8"
          style={{ borderLeft: "2px solid rgba(201,168,76,0.25)", paddingLeft: 16 }}>
          "Madhya Pradesh is not a destination.<br />It is an interior journey."
        </blockquote>

        {/* Highlight cards for new sections */}
        <div className="flex flex-col gap-2.5">
          <Link to="/rivers"
            className="flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-250 group hover:-translate-y-0.5"
            style={{
              background: "rgba(0,180,216,0.06)",
              border: "1px solid rgba(0,180,216,0.15)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <Waves size={14} style={{ color: "#00B4D8" }} />
              <div>
                <div className="font-sans text-[12px] text-white/65 font-semibold">Rivers</div>
                <div className="font-sans text-[10px] text-white/28">6 rivers · 150M year history</div>
              </div>
            </div>
            <ArrowUpRight size={13} style={{ color: "rgba(0,180,216,0.5)" }}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link to="/languages"
            className="flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-250 group hover:-translate-y-0.5"
            style={{
              background: "rgba(232,121,160,0.06)",
              border: "1px solid rgba(232,121,160,0.15)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <Languages size={14} style={{ color: "#E879A0" }} />
              <div>
                <div className="font-sans text-[12px] text-white/65 font-semibold">Languages</div>
                <div className="font-sans text-[10px] text-white/28">7 languages · 50+ dialects</div>
              </div>
            </div>
            <ArrowUpRight size={13} style={{ color: "rgba(232,121,160,0.5)" }}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>
    </div>

    {/* ── DIVIDER ─────────────────────────────────────────────────── */}
    <div className="max-w-6xl mx-auto px-6">
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.12),transparent)" }} />
    </div>

    {/* ── BOTTOM BAR ──────────────────────────────────────────────── */}
    <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="font-sans text-[11px] text-white/18">
        © {new Date().getFullYear()} MP Explorer · Built with React · TypeScript · Tailwind · Framer Motion
      </p>
      <div className="flex gap-5">
        {["Privacy", "Terms", "Credits"].map(l => (
          <span key={l}
            className="font-sans text-[11px] text-white/18 cursor-pointer hover:text-white/45 transition-colors duration-200">
            {l}
          </span>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;