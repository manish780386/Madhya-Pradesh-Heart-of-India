import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CHIEF_MINISTER, DEPUTY_CMS, CABINET_MINISTERS,
  GOVERNOR, ASSEMBLY_SPEAKER,
  DIVISIONS, DISTRICTS,
  KEY_STATS, STATE_SYMBOLS,
  MAJOR_PROJECTS, ACHIEVEMENTS,
  ECONOMY_SECTORS, TOURISM_STATS,
} from "./data/current-data.ts";
import { PageHero, SectionHeader } from "../../components/ui";

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const hex2rgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

const INJECT_CSS = `
  .curr-grid-3 { display: grid; gap: 12px; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }
  .curr-grid-2 { display: grid; gap: 12px; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
  .curr-grid-4 { display: grid; gap: 10px; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); }
  @media (max-width: 600px) {
    .curr-grid-3, .curr-grid-2, .curr-grid-4 { grid-template-columns: 1fr; }
    .minister-card-inner { flex-direction: column !important; }
  }
`;

// ─── TABS ─────────────────────────────────────────────────────────────────────

const TABS = [
  { id: "overview",    label: "Overview",     icon: "📊" },
  { id: "government",  label: "Government",   icon: "🏛️" },
  { id: "districts",   label: "Districts",    icon: "📍" },
  { id: "symbols",     label: "Symbols",      icon: "🦌" },
  { id: "projects",    label: "Projects",     icon: "🚀" },
  { id: "records",     label: "Records",      icon: "🏆" },
] as const;

type TabId = typeof TABS[number]["id"];

// ─── MINISTER CARD ────────────────────────────────────────────────────────────

const MinisterCard: React.FC<{ m: typeof CABINET_MINISTERS[0]; accent?: string }> = ({ m, accent = "#C9A84C" }) => {
  const [open, setOpen] = useState(false);
  const rgb = hex2rgb(accent);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      onClick={() => setOpen(!open)}
      style={{
        padding: "14px 16px", borderRadius: "14px", cursor: "pointer",
        background: open ? `rgba(${rgb},0.07)` : "rgba(255,255,255,0.025)",
        border: `1px solid ${open ? `rgba(${rgb},0.28)` : "rgba(255,255,255,0.07)"}`,
        transition: "all 0.25s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
          background: `rgba(${rgb},0.15)`, border: `1px solid rgba(${rgb},0.25)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18,
        }}>
          {m.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "white", marginBottom: 2 }}>{m.name}</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>{m.nameHindi} · {m.constituency}</div>
        </div>
        <span style={{
          fontSize: 9, padding: "2px 7px", borderRadius: 999,
          background: `rgba(${rgb},0.12)`, color: accent, border: `1px solid rgba(${rgb},0.2)`,
          flexShrink: 0,
        }}>
          {m.role === "Cabinet Minister" ? "Cabinet" : m.role === "Deputy CM" ? "Dy. CM" : "MoS"}
        </span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px solid rgba(${rgb},0.12)` }}>
              <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em", color: `rgba(${rgb},0.55)`, marginBottom: 6 }}>
                Portfolio
              </div>
              {m.portfolio.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 4 }}>
                  <span style={{ color: accent, fontSize: 9, marginTop: 2 }}>◆</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
              <div style={{ marginTop: 8, fontSize: 10, color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>
                Since {m.since}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── DISTRICT CARD ────────────────────────────────────────────────────────────

const DistrictCard: React.FC<{ d: typeof DISTRICTS[0] }> = ({ d }) => {
  const [open, setOpen] = useState(false);
  const div = DIVISIONS.find(dv => dv.name === d.division);
  const color = div?.color ?? "#C9A84C";
  const rgb = hex2rgb(color);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      onClick={() => setOpen(!open)}
      style={{
        padding: "12px 14px", borderRadius: "12px", cursor: "pointer",
        background: open ? `rgba(${rgb},0.07)` : "rgba(255,255,255,0.02)",
        border: `1px solid ${open ? `rgba(${rgb},0.28)` : "rgba(255,255,255,0.06)"}`,
        transition: "all 0.2s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 18 }}>{d.icon}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: "white" }}>{d.name}</div>
          <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.3)" }}>{d.nameHindi} · {d.division} Div.</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 9, color: color }}>{d.area.toLocaleString()} km²</div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ marginTop: 8, paddingTop: 8, borderTop: `1px solid rgba(${rgb},0.12)` }}>
              <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 6 }}>
                📍 HQ: {d.hq} · Tehsils: {d.tehsils}
              </div>
              <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 6 }}>
                👥 Pop: {(d.population / 100000).toFixed(1)}L (2011 census)
              </div>
              <div style={{ fontSize: 10.5, color: `rgba(${rgb},0.8)`, lineHeight: 1.6 }}>
                ✦ {d.famous}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const CurrentPage: React.FC = () => {
  const [tab, setTab] = useState<TabId>("overview");
  const [divisionFilter, setDivisionFilter] = useState<string>("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const id = "curr-page-styles";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id; s.textContent = INJECT_CSS;
      document.head.appendChild(s);
    }
  }, []);

  const filteredDistricts = DISTRICTS.filter(d => {
    const matchDiv = divisionFilter === "All" || d.division === divisionFilter;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.famous.toLowerCase().includes(search.toLowerCase());
    return matchDiv && matchSearch;
  });

  return (
    <div style={{ background: "#07060E", minHeight: "100vh" }}>
      <PageHero
        badge="Live State Data · 2025"
        title="MP Today"
        subtitle="Current status of Madhya Pradesh — government, districts, records, and everything happening right now."
        gradient="linear-gradient(135deg,#050312 0%,#120830 45%,#1E1060 100%)"
        accent="#C9A84C"
      />

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* ─── QUICK HEADLINE STRIP ──────────────────────────────── */}
        <div style={{
          margin: "0 0 32px", padding: "14px 20px", borderRadius: 14,
          background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.18)",
          display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
        }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#C9A84C" }}>🔴 Current Status</span>
          {[
            "CM: Dr. Mohan Yadav (BJP, since Dec 2023)",
            "55 Districts · 10 Divisions · 23,043 Gram Panchayats",
            "GSDP: ₹15.03 Lakh Crore (FY25)",
            "785+ Wild Tigers — Most in India",
          ].map((item, i) => (
            <span key={i} style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", padding: "2px 10px", borderRadius: 999, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              {item}
            </span>
          ))}
        </div>

        {/* ─── TABS ──────────────────────────────────────────────── */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32, padding: "6px", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{
                flex: "1 1 auto", minWidth: 80, padding: "10px 8px", borderRadius: 10,
                fontSize: 11.5, cursor: "pointer", border: "none", transition: "all 0.2s",
                background: tab === t.id ? "rgba(201,168,76,0.15)" : "transparent",
                color: tab === t.id ? "#C9A84C" : "rgba(255,255,255,0.38)",
                fontWeight: tab === t.id ? 700 : 400,
              }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>

            {/* ══════════════ OVERVIEW ══════════════ */}
            {tab === "overview" && (
              <div>
                <SectionHeader badge="Key Numbers" title="MP at a" titleAccent="Glance" />
                <div className="curr-grid-3" style={{ marginBottom: 48 }}>
                  {KEY_STATS.map((s, i) => (
                    <motion.div key={s.label}
                      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      style={{ padding: "18px", borderRadius: 16, background: "rgba(255,255,255,0.025)", border: `1px solid rgba(${hex2rgb(s.color)},0.15)` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <span style={{ fontSize: 24 }}>{s.icon}</span>
                        {s.rank && (
                          <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 999, background: `rgba(${hex2rgb(s.color)},0.12)`, color: s.color, border: `1px solid rgba(${hex2rgb(s.color)},0.2)` }}>
                            {s.rank}
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: s.color, marginBottom: 2 }}>{s.value}</div>
                      <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: s.color, marginBottom: 6, opacity: 0.7 }}>{s.unit}</div>
                      <div style={{ fontSize: 12.5, color: "white", fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
                      <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}>{s.context}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Economy sectors */}
                <SectionHeader badge="Economy" title="Sector" titleAccent="Breakdown" />
                <div className="curr-grid-3" style={{ marginBottom: 48 }}>
                  {ECONOMY_SECTORS.map((s, i) => (
                    <motion.div key={s.sector}
                      initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      style={{ padding: 20, borderRadius: 16, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                        <span style={{ fontSize: 32 }}>{s.icon}</span>
                        <div>
                          <div style={{ fontSize: 28, fontWeight: 700, color: "#C9A84C" }}>{s.share}</div>
                          <div style={{ fontSize: 13, color: "white", fontWeight: 600 }}>{s.sector}</div>
                        </div>
                      </div>
                      <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0 }}>{s.highlight}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Tourism stats */}
                <SectionHeader badge="Tourism" title="MP's" titleAccent="Heritage Numbers" />
                <div className="curr-grid-3">
                  {TOURISM_STATS.map((t, i) => (
                    <motion.div key={t.label}
                      initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      style={{ padding: "16px 18px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.1)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <span style={{ fontSize: 22 }}>{t.icon}</span>
                        <div style={{ fontSize: 26, fontWeight: 700, color: "#C9A84C" }}>{t.value}</div>
                      </div>
                      <div style={{ fontSize: 12.5, color: "white", fontWeight: 600, marginBottom: 4 }}>{t.label}</div>
                      <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>{t.sites}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ══════════════ GOVERNMENT ══════════════ */}
            {tab === "government" && (
              <div>
                {/* Governor + Speaker */}
                <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr", marginBottom: 32 }}>
                  {[
                    { title: "Governor", data: GOVERNOR, accent: "#A78BFA" },
                    { title: "Assembly Speaker", data: ASSEMBLY_SPEAKER, accent: "#52B788" },
                  ].map(({ title, data, accent }) => (
                    <div key={title} style={{ padding: "16px 18px", borderRadius: 14, background: `rgba(${hex2rgb(accent)},0.05)`, border: `1px solid rgba(${hex2rgb(accent)},0.15)` }}>
                      <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em", color: `rgba(${hex2rgb(accent)},0.6)`, marginBottom: 6 }}>{title}</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 2 }}>{data.name}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>{data.nameHindi}</div>
                      <div style={{ fontSize: 10.5, color: `rgba(${hex2rgb(accent)},0.7)` }}>Since {data.since}</div>
                    </div>
                  ))}
                </div>

                {/* Chief Minister */}
                <SectionHeader badge="Chief Minister" title="Head of" titleAccent="Government" />
                <div style={{
                  padding: "24px", borderRadius: 20, marginBottom: 32,
                  background: "linear-gradient(135deg,rgba(201,168,76,0.08),rgba(201,168,76,0.02))",
                  border: "1px solid rgba(201,168,76,0.25)",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
                    <div style={{
                      width: 64, height: 64, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(201,168,76,0.15)", border: "2px solid rgba(201,168,76,0.35)",
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30,
                    }}>👤</div>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(201,168,76,0.6)", marginBottom: 6 }}>19th Chief Minister of Madhya Pradesh</div>
                      <div style={{ fontSize: 24, fontWeight: 700, color: "white", marginBottom: 2 }}>{CHIEF_MINISTER.name}</div>
                      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>{CHIEF_MINISTER.nameHindi} · {CHIEF_MINISTER.constituency}</div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                        <span style={{ fontSize: 10, padding: "3px 9px", borderRadius: 999, background: "rgba(201,168,76,0.12)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.25)" }}>
                          {CHIEF_MINISTER.party}
                        </span>
                        <span style={{ fontSize: 10, padding: "3px 9px", borderRadius: 999, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
                          Since {CHIEF_MINISTER.since}
                        </span>
                      </div>
                      <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(201,168,76,0.5)", marginBottom: 8 }}>Portfolios held:</div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {CHIEF_MINISTER.portfolio.map(p => (
                          <span key={p} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 999, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deputy CMs */}
                <SectionHeader badge="Deputy Chief Ministers" title="Two" titleAccent="Deputy CMs" />
                <div className="curr-grid-2" style={{ marginBottom: 32 }}>
                  {DEPUTY_CMS.map(m => <MinisterCard key={m.name} m={m} accent="#F4A261" />)}
                </div>

                {/* Cabinet Ministers */}
                <SectionHeader badge="Cabinet" title="18 Cabinet" titleAccent="Ministers" />
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", marginBottom: 16, lineHeight: 1.7 }}>
                  Sworn in 25 December 2023. Maximum cabinet strength: 35. Tap any minister for portfolio details.
                </p>
                <div className="curr-grid-2">
                  {CABINET_MINISTERS.map(m => <MinisterCard key={m.name} m={m} accent="#C77DFF" />)}
                </div>
              </div>
            )}

            {/* ══════════════ DISTRICTS ══════════════ */}
            {tab === "districts" && (
              <div>
                {/* Division overview */}
                <SectionHeader badge="10 Divisions" title="Administrative" titleAccent="Divisions" />
                <div className="curr-grid-4" style={{ marginBottom: 32 }}>
                  {DIVISIONS.map((div, i) => (
                    <motion.div key={div.name}
                      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => { setDivisionFilter(div.name === divisionFilter ? "All" : div.name); }}
                      style={{
                        padding: "14px", borderRadius: 12, cursor: "pointer", transition: "all 0.2s",
                        background: divisionFilter === div.name ? `rgba(${hex2rgb(div.color)},0.12)` : "rgba(255,255,255,0.02)",
                        border: `1px solid ${divisionFilter === div.name ? `rgba(${hex2rgb(div.color)},0.35)` : "rgba(255,255,255,0.06)"}`,
                        transform: divisionFilter === div.name ? "translateY(-2px)" : "none",
                      }}>
                      <div style={{ fontSize: 22, marginBottom: 6 }}>{div.icon}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "white", marginBottom: 2 }}>{div.name}</div>
                      <div style={{ fontSize: 9, color: div.color, marginBottom: 2 }}>{div.region}</div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>{div.districts.length} districts · HQ: {div.hq}</div>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    onClick={() => setDivisionFilter("All")}
                    style={{
                      padding: "14px", borderRadius: 12, cursor: "pointer", transition: "all 0.2s",
                      background: divisionFilter === "All" ? "rgba(201,168,76,0.1)" : "rgba(255,255,255,0.02)",
                      border: `1px solid ${divisionFilter === "All" ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.06)"}`,
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    }}>
                    <div style={{ fontSize: 22, marginBottom: 6 }}>🗺️</div>
                    <div style={{ fontSize: 12, color: "rgba(201,168,76,0.8)", fontWeight: 600 }}>All Divisions</div>
                  </motion.div>
                </div>

                {/* Search + Districts */}
                <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
                  <SectionHeader badge={`${filteredDistricts.length} Districts`} title="All" titleAccent="Districts" />
                  <div style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 999,
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", flex: "0 1 260px",
                  }}>
                    <span style={{ fontSize: 14 }}>🔍</span>
                    <input value={search} onChange={e => setSearch(e.target.value)}
                      placeholder="Search districts..."
                      style={{ background: "transparent", border: "none", outline: "none", color: "white", fontSize: 12, width: "100%" }} />
                  </div>
                </div>

                <div className="curr-grid-3">
                  {filteredDistricts.map(d => <DistrictCard key={d.name} d={d} />)}
                </div>
              </div>
            )}

            {/* ══════════════ SYMBOLS ══════════════ */}
            {tab === "symbols" && (
              <div>
                <SectionHeader badge="State Identity" title="Symbols of" titleAccent="Madhya Pradesh" />
                <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.38)", marginBottom: 24, lineHeight: 1.75, maxWidth: 560 }}>
                  Every state symbol encodes an identity. MP's symbols — from the endangered barasingha to the diamond — map the ecological, cultural, and geological character of the state.
                </p>
                <div className="curr-grid-2">
                  {STATE_SYMBOLS.map((s, i) => (
                    <motion.div key={s.category}
                      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      style={{ padding: "18px", borderRadius: 16, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                        <span style={{ fontSize: 36 }}>{s.icon}</span>
                        <div>
                          <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(201,168,76,0.55)", marginBottom: 3 }}>{s.category}</div>
                          <div style={{ fontSize: 15, fontWeight: 700, color: "white" }}>{s.name}</div>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{s.nameHindi}</div>
                          {s.scientific && (
                            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", fontStyle: "italic" }}>{s.scientific}</div>
                          )}
                        </div>
                        {s.status && (
                          <span style={{
                            marginLeft: "auto", fontSize: 9, padding: "2px 7px", borderRadius: 999, flexShrink: 0,
                            background: s.status.includes("Endangered") ? "rgba(230,57,70,0.15)" : "rgba(82,183,136,0.15)",
                            color: s.status.includes("Endangered") ? "#E63946" : "#52B788",
                            border: `1px solid ${s.status.includes("Endangered") ? "rgba(230,57,70,0.3)" : "rgba(82,183,136,0.3)"}`,
                          }}>
                            {s.status}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{s.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ══════════════ PROJECTS ══════════════ */}
            {tab === "projects" && (
              <div>
                <SectionHeader badge="2024–2028" title="Major Ongoing" titleAccent="Projects" />
                <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.38)", marginBottom: 24, lineHeight: 1.75, maxWidth: 560 }}>
                  Infrastructure, conservation, energy, and investment — the projects shaping MP's next decade.
                </p>
                <div className="curr-grid-2">
                  {MAJOR_PROJECTS.map((p, i) => (
                    <motion.div key={p.name}
                      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      style={{ padding: "20px", borderRadius: 16, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
                        <span style={{ fontSize: 28, flexShrink: 0 }}>{p.icon}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(201,168,76,0.55)", marginBottom: 4 }}>{p.sector}</div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4, lineHeight: 1.3 }}>{p.name}</div>
                          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                            <span style={{ fontSize: 10, padding: "2px 7px", borderRadius: 999, background: "rgba(82,183,136,0.1)", color: "#52B788", border: "1px solid rgba(82,183,136,0.2)" }}>
                              {p.status}
                            </span>
                            <span style={{ fontSize: 10, padding: "2px 7px", borderRadius: 999, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.08)" }}>
                              📍 {p.district}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: "0 0 10px" }}>{p.description}</p>
                      <div style={{ padding: "8px 12px", borderRadius: 10, background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.12)" }}>
                        <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(201,168,76,0.5)", marginRight: 6 }}>Investment</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#C9A84C" }}>{p.investment}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ══════════════ RECORDS ══════════════ */}
            {tab === "records" && (
              <div>
                <SectionHeader badge="2022–2025" title="Records &" titleAccent="Achievements" />
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {ACHIEVEMENTS.map((a, i) => (
                    <motion.div key={a.title}
                      initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      style={{
                        display: "flex", gap: 16, padding: "18px 20px", borderRadius: 16, alignItems: "flex-start",
                        background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
                      }}>
                      <div style={{ flexShrink: 0, textAlign: "center" }}>
                        <div style={{ fontSize: 28, marginBottom: 4 }}>{a.icon}</div>
                        <div style={{ fontSize: 9, color: "rgba(201,168,76,0.6)", fontWeight: 700 }}>{a.year}</div>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 6 }}>{a.title}</div>
                        <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{a.description}</p>
                      </div>
                      <span style={{
                        flexShrink: 0, fontSize: 9, padding: "3px 8px", borderRadius: 999,
                        background: {
                          award: "rgba(201,168,76,0.12)", economy: "rgba(82,183,136,0.12)",
                          environment: "rgba(0,180,216,0.12)", infrastructure: "rgba(244,162,97,0.12)",
                          social: "rgba(199,125,255,0.12)",
                        }[a.category],
                        color: {
                          award: "#C9A84C", economy: "#52B788",
                          environment: "#00B4D8", infrastructure: "#F4A261",
                          social: "#C77DFF",
                        }[a.category],
                        border: "1px solid rgba(255,255,255,0.08)",
                        textTransform: "capitalize",
                      }}>
                        {a.category}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

        {/* ─── FOOTER NOTE ───────────────────────────────────────── */}
        <div style={{ marginTop: 48, padding: "16px 20px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
          <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.22)", lineHeight: 1.7, margin: 0 }}>
            Data sourced from Wikipedia, IBEF, MP Government, Census of India 2011, and official press releases.
            Population figures are 2026 projections. GSDP data: FY 2024–25. Government composition: as of December 2023.
            Always verify current status from official MP government sources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentPage;