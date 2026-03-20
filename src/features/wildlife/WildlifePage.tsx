import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  WILDLIFE_SPECIES,
  NATIONAL_PARKS,
  SEASONAL_GUIDE,
  CONSERVATION_STATS,
  JUNGLE_RULES,
  DAILY_RHYTHM,
  SAFARI_TIPS,
} from "./data/wildlife.ts";
import { PageHero, SectionHeader, Badge, GoldDivider } from "../../components/ui";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const PHASES = [
  {
    label: "Enter the Forest",
    icon: "🌲",
    desc: "The sal trees close above you. Sunlight fractures through canopy in gold shards. The forest doesn't care that you've arrived.",
    sub: "Altitude 440 m · Tala Zone, Bandhavgarh · 5:47 AM",
  },
  {
    label: "Hear the Silence",
    icon: "🎋",
    desc: "Then — a twig snaps. A spotted deer freezes 40 metres ahead. You hold your breath. The entire jungle holds its breath with you.",
    sub: "Alarm call detected · Chital (Axis axis) · Wind: north-northeast",
  },
  {
    label: "Spot the Tiger",
    icon: "🐯",
    desc: "Amber. Black stripes. Eyes like lit coals fixed on you. You are not the predator here. You have never been less afraid of anything.",
    sub: "Adult male · Est. 220 kg · Territory: 80 sq km · Distance: 18 m",
  },
  {
    label: "Exit Changed",
    icon: "🌅",
    desc: "You leave the jungle different. A fundamental recalibration has happened. Something old has looked at you and you'll never fully explain it.",
    sub: "08:34 AM · 4.2 km covered · 1 large cat sighted · 0 words sufficient",
  },
];

const RARITY: Record<string, string> = {
  Common: "#52B788",
  Uncommon: "#F4A261",
  Rare: "#E63946",
  "Critically Rare": "#FF0040",
};

const VERDICT_STYLE = {
  best:  { color: "#52B788", label: "BEST TIME",    bg: "rgba(82,183,136,0.1)",  border: "rgba(82,183,136,0.25)"  },
  good:  { color: "#F4A261", label: "GOOD TIME",    bg: "rgba(244,162,97,0.1)",  border: "rgba(244,162,97,0.25)"  },
  avoid: { color: "#E63946", label: "PARKS CLOSED", bg: "rgba(230,57,70,0.08)",  border: "rgba(230,57,70,0.2)"    },
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

const DataPill: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col gap-0.5 px-3 py-2 rounded-xl"
    style={{ background: "rgba(82,183,136,0.06)", border: "1px solid rgba(82,183,136,0.12)" }}>
    <span className="font-sans text-[9px] uppercase tracking-widest" style={{ color: "rgba(82,183,136,0.5)" }}>{label}</span>
    <span className="font-mono-mp text-[11px] text-white/70">{value}</span>
  </div>
);

const StatCard: React.FC<{ stat: typeof CONSERVATION_STATS[0]; index: number }> = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="p-6 rounded-2xl flex flex-col gap-3"
    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(82,183,136,0.1)" }}
  >
    <span className="text-3xl">{stat.icon}</span>
    <div className="font-display text-4xl font-bold" style={{ color: "#52B788" }}>{stat.value}</div>
    <div className="font-sans text-sm text-white/80 font-semibold">{stat.label}</div>
    <div className="font-sans text-[11px] text-white/35 leading-[1.6]">{stat.context}</div>
  </motion.div>
);

const SeasonCard: React.FC<{ s: typeof SEASONAL_GUIDE[0]; index: number }> = ({ s, index }) => {
  const style = VERDICT_STYLE[s.verdict];
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="p-5 rounded-2xl"
      style={{ background: style.bg, border: `1px solid ${style.border}` }}
    >
      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
        <div>
          <div className="font-display text-base text-white font-semibold">{s.season}</div>
          <div className="font-mono-mp text-[10px]" style={{ color: style.color }}>{s.months}</div>
        </div>
        <span className="font-sans text-[9px] px-2 py-0.5 rounded-full font-bold tracking-widest"
          style={{ background: style.bg, color: style.color, border: `1px solid ${style.border}` }}>
          {style.label}
        </span>
      </div>
      <p className="font-sans text-[11px] text-white/50 mb-2 leading-[1.6]">{s.condition}</p>
      <p className="font-sans text-[11px] leading-[1.6]" style={{ color: style.color }}>✦ {s.tip}</p>
    </motion.div>
  );
};

const RuleCard: React.FC<{ rule: typeof JUNGLE_RULES[0]; index: number }> = ({ rule, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="p-5 rounded-2xl cursor-pointer transition-all duration-300"
      style={{
        background: open ? "rgba(82,183,136,0.05)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${open ? "rgba(82,183,136,0.2)" : "rgba(255,255,255,0.06)"}`,
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{rule.icon}</span>
          <span className="font-display text-sm text-white font-semibold">{rule.rule}</span>
        </div>
        <span className="text-white/30 text-sm transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="font-sans text-[12px] text-white/50 leading-[1.7] mt-3 pt-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {rule.why}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const RhythmRow: React.FC<{ item: typeof DAILY_RHYTHM[0]; index: number }> = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="flex gap-4 cursor-pointer group"
      onClick={() => setOpen(!open)}
    >
      <div className="flex flex-col items-center flex-shrink-0 w-10">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-base flex-shrink-0 transition-all duration-300"
          style={{
            background: open ? "rgba(82,183,136,0.18)" : "rgba(255,255,255,0.04)",
            border: `2px solid ${open ? "#52B788" : "rgba(255,255,255,0.1)"}`,
          }}>
          {item.icon}
        </div>
        {index < DAILY_RHYTHM.length - 1 && (
          <div className="flex-1 w-px my-1" style={{ background: "rgba(82,183,136,0.12)" }} />
        )}
      </div>
      <div className="flex-1 pb-6">
        <div className="flex items-center gap-3 mb-1">
          <span className="font-mono-mp text-[10px]" style={{ color: "#52B788" }}>{item.time}</span>
          <span className="font-display text-sm text-white font-semibold">{item.label}</span>
        </div>
        <AnimatePresence>
          {open ? (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="font-sans text-[12px] text-white/55 leading-[1.7]"
            >
              {item.what}
            </motion.p>
          ) : (
            <p className="font-sans text-[11px] text-white/30 leading-[1.6] line-clamp-1">
              {item.what.slice(0, 80)}…
            </p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const WildlifePage: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const [activePark, setActivePark] = useState<string | null>(null);
  const [activeSpecies, setActiveSpecies] = useState<string | null>(null);

  return (
    <div style={{ background: "#020D06" }}>
      <PageHero
        badge="6 National Parks · 785+ Tigers · 10,862 km² Protected"
        title="Into the Wild"
        accent="#52B788"
        subtitle="One-quarter of India's wild tigers call Madhya Pradesh home. Six national parks, ancient forests, and animals that have been here since before memory."
        gradient="linear-gradient(135deg,#010801 0%,#071B0D 40%,#1B4332 70%,#1F6B45 100%)"
      />

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* CONSERVATION STATS */}
        <SectionHeader badge="By The Numbers" title="Why MP Is" titleAccent="India's Tiger Country" />
        <div className="grid gap-4 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))" }}>
          {CONSERVATION_STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* SAFARI SIMULATION */}
        <SectionHeader badge="Safari Experience" title="Walk Through" titleAccent="the Jungle" />
        <div className="relative flex mb-10">
          <div className="absolute top-5 h-px"
            style={{ left: "12.5%", right: "12.5%", background: "linear-gradient(90deg,transparent,rgba(82,183,136,0.35),transparent)" }} />
          {PHASES.map((p, i) => (
            <button key={i} onClick={() => setPhase(i)}
              className="flex-1 flex flex-col items-center gap-2 py-5 px-2 border-none bg-transparent cursor-pointer transition-all duration-300"
              style={{ opacity: phase === i ? 1 : 0.38 }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300"
                style={{
                  background: phase === i ? "rgba(82,183,136,0.18)" : "rgba(255,255,255,0.04)",
                  border: `2px solid ${phase === i ? "#52B788" : "rgba(255,255,255,0.1)"}`,
                  boxShadow: phase === i ? "0 0 24px rgba(82,183,136,0.4)" : "none",
                }}>
                {p.icon}
              </div>
              <span className="font-sans text-[10px] text-center tracking-wide"
                style={{ color: phase === i ? "#52B788" : "rgba(255,255,255,0.35)" }}>
                {p.label}
              </span>
            </button>
          ))}
        </div>

        <motion.div key={phase} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-2xl text-center mb-4"
          style={{ background: "rgba(82,183,136,0.04)", border: "1px solid rgba(82,183,136,0.1)" }}>
          <p className="font-display italic text-xl text-white/70 leading-[1.85] max-w-2xl mx-auto mb-4">
            "{PHASES[phase].desc}"
          </p>
          <span className="font-mono-mp text-[10px]" style={{ color: "rgba(82,183,136,0.45)" }}>
            {PHASES[phase].sub}
          </span>
        </motion.div>

        <div className="flex justify-center gap-2 mb-20">
          {PHASES.map((_, i) => (
            <button key={i} onClick={() => setPhase(i)}
              className="rounded-full border-none cursor-pointer transition-all duration-300"
              style={{
                height: "6px",
                width: phase === i ? "28px" : "6px",
                background: phase === i ? "#52B788" : "rgba(255,255,255,0.15)",
              }} />
          ))}
        </div>

        {/* DAILY RHYTHM */}
        <GoldDivider />
        <SectionHeader badge="Field Guide" title="A Day in the" titleAccent="Forest" />
        <div className="mb-20 max-w-2xl">
          <p className="font-sans text-[13px] text-white/40 mb-8 leading-[1.8]">
            Wildlife doesn't follow tourist schedules. Tap each time window to read what the forest is actually doing.
          </p>
          {DAILY_RHYTHM.map((item, i) => (
            <RhythmRow key={item.time} item={item} index={i} />
          ))}
        </div>

        {/* SPECIES */}
        <SectionHeader badge="Wildlife" title="Who You Might" titleAccent="Encounter" />
        <p className="font-sans text-[13px] text-white/40 mb-8 leading-[1.8] max-w-2xl">
          Ten species across six reserves. Tap any species for full field detail.
        </p>

        <div className="grid gap-4 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))" }}>
          {WILDLIFE_SPECIES.map((w, i) => {
            const isActive = activeSpecies === w.id;
            return (
              <motion.div key={w.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setActiveSpecies(isActive ? null : w.id)}
                className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  background: isActive ? "rgba(82,183,136,0.06)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${isActive ? "rgba(82,183,136,0.28)" : "rgba(82,183,136,0.1)"}`,
                  transform: isActive ? "translateY(-3px)" : "none",
                }}>
                <div className="p-5">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl"
                      style={{ background: "rgba(82,183,136,0.08)" }}>
                      {w.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 mb-1 flex-wrap">
                        <span className="font-display text-base text-white font-semibold">{w.name}</span>
                        <Badge label={w.rarity} color={RARITY[w.rarity]} />
                      </div>
                      <div className="font-mono-mp text-[9px] text-white/30 mb-1 italic">{w.scientificName}</div>
                      <div className="font-sans text-[10px] mb-2" style={{ color: "#52B788" }}>📍 {w.park}</div>
                      <p className="font-sans text-[12px] text-white/50 leading-[1.6]">{w.desc}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4"
                        style={{ borderTop: "1px solid rgba(82,183,136,0.12)" }}
                      >
                        {/* Behaviors */}
                        {w.behaviors && w.behaviors.length > 0 && (
                          <div className="mb-3">
                            <div className="font-sans text-[9px] uppercase tracking-widest mb-2"
                              style={{ color: "rgba(82,183,136,0.5)" }}>
                              Observed Behaviours
                            </div>
                            <div className="flex flex-col gap-1.5">
                              {w.behaviors.map((b, j) => (
                                <div key={j} className="flex items-start gap-2">
                                  <span className="text-[10px] mt-0.5" style={{ color: "#52B788" }}>◆</span>
                                  <span className="font-sans text-[11px] text-white/50">{b}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Best spot */}
                        {w.bestSpot && (
                          <div className="p-3 rounded-xl mb-3"
                            style={{ background: "rgba(82,183,136,0.06)", border: "1px solid rgba(82,183,136,0.1)" }}>
                            <div className="font-sans text-[9px] uppercase tracking-widest mb-1"
                              style={{ color: "rgba(82,183,136,0.5)" }}>
                              Best Sighting Spot
                            </div>
                            <div className="font-sans text-[11px] text-white/60">{w.bestSpot}</div>
                          </div>
                        )}

                        {/* Threat */}
                        {w.threatLevel && (
                          <div className="font-sans text-[10px] text-white/30 italic leading-[1.5] mb-3">
                            ⚠ {w.threatLevel}
                          </div>
                        )}

                        {/* Fact */}
                        <div className="mt-3 pt-3 font-sans text-[11px] italic leading-[1.6]"
                          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(244,162,97,0.7)" }}>
                          "{w.fact}"
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        <GoldDivider />

        {/* NATIONAL PARKS */}
        <SectionHeader badge="Protected Areas" title="National Parks" titleAccent="of MP" />
        <div className="grid gap-4 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}>
          {NATIONAL_PARKS.map((park, i) => (
            <motion.div key={park.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              onClick={() => setActivePark(activePark === park.id ? null : park.id)}
              className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background: park.gradient,
                border: activePark === park.id ? "1px solid rgba(82,183,136,0.4)" : "1px solid rgba(255,255,255,0.07)",
                transform: activePark === park.id ? "translateY(-4px)" : "none",
                boxShadow: activePark === park.id ? "0 20px 50px rgba(0,0,0,0.5)" : "none",
              }}>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{park.icon}</span>
                  <div className="flex-1">
                    <div className="font-display text-lg text-white font-semibold">{park.name}</div>
                    <div className="font-sans text-[10px] text-white/40">{park.state}</div>
                  </div>
                  <div className="font-mono-mp text-[10px]" style={{ color: "rgba(82,183,136,0.7)" }}>{park.area}</div>
                </div>

                {/* Quick data pills */}
                <div className="flex gap-2 flex-wrap mb-3">
                  <DataPill label="Est." value={String(park.established)} />
                  {park.peakSeason && <DataPill label="Peak Season" value={park.peakSeason} />}
                  {park.zones && <DataPill label="Zones" value={`${park.zones.length} access zones`} />}
                </div>

                <AnimatePresence>
                  {activePark === park.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-3"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <p className="font-sans text-[12px] text-white/60 mb-4 leading-[1.7]">{park.knownFor}</p>

                      {park.zones && (
                        <div className="mb-4">
                          <div className="font-sans text-[9px] uppercase tracking-widest mb-2"
                            style={{ color: "rgba(82,183,136,0.5)" }}>Safari Zones</div>
                          <div className="flex flex-col gap-1.5">
                            {park.zones.map((z) => (
                              <div key={z} className="flex items-center gap-2">
                                <span className="text-[10px]" style={{ color: "#52B788" }}>▸</span>
                                <span className="font-sans text-[11px] text-white/55">{z}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mb-4">
                        <div className="font-sans text-[9px] uppercase tracking-widest mb-2"
                          style={{ color: "rgba(82,183,136,0.5)" }}>Key Species</div>
                        <div className="flex gap-2 flex-wrap">
                          {park.species.map((s) => (
                            <span key={s} className="font-sans text-[10px] px-2 py-0.5 rounded-full"
                              style={{ background: "rgba(82,183,136,0.12)", color: "#52B788", border: "1px solid rgba(82,183,136,0.2)" }}>
                              {s.split(" (")[0]}
                            </span>
                          ))}
                        </div>
                      </div>

                      {park.safariTip && (
                        <div className="p-3 rounded-xl mb-3"
                          style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.08)" }}>
                          <div className="font-sans text-[9px] uppercase tracking-widest mb-1"
                            style={{ color: "rgba(244,162,97,0.6)" }}>Safari Tip</div>
                          <div className="font-sans text-[11px] text-white/55 leading-[1.6]">{park.safariTip}</div>
                        </div>
                      )}

                      {park.funFact && (
                        <p className="font-sans text-[11px] italic text-white/35 leading-[1.6] mb-3">
                          "{park.funFact}"
                        </p>
                      )}

                      <div className="flex gap-2 mt-3 flex-wrap">
                        {park.altitude && <DataPill label="Altitude" value={park.altitude.split(" (")[0]} />}
                        {park.rivers && <DataPill label="Rivers" value={park.rivers.split(",")[0]} />}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <GoldDivider />

        {/* SEASONAL GUIDE */}
        <SectionHeader badge="When to Go" title="The Seasonal" titleAccent="Field Guide" />
        <p className="font-sans text-[13px] text-white/40 mb-8 leading-[1.8] max-w-2xl">
          Indian wildlife parks are not year-round destinations — the monsoon closure is what makes them work.
        </p>
        <div className="grid gap-4 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}>
          {SEASONAL_GUIDE.map((s, i) => <SeasonCard key={s.season} s={s} index={i} />)}
        </div>

        {/* JUNGLE RULES */}
        <SectionHeader badge="Before You Go" title="Rules of the" titleAccent="Jungle" />
        <p className="font-sans text-[13px] text-white/40 mb-8 leading-[1.8] max-w-2xl">
          Six things naturalists wish every visitor knew. Tap each to understand the reasoning.
        </p>
        <div className="grid gap-3 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}>
          {JUNGLE_RULES.map((rule, i) => <RuleCard key={rule.rule} rule={rule} index={i} />)}
        </div>

        {/* SAFARI TIPS */}
        <SectionHeader badge="Practical Guide" title="Safari" titleAccent="Essentials" />
        <div className="grid gap-4 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}>
          {SAFARI_TIPS.map((tip, i) => (
            <motion.div key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(82,183,136,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{tip.icon}</span>
                <span className="font-display text-sm text-white font-semibold">{tip.title}</span>
              </div>
              <p className="font-sans text-[12px] text-white/50 leading-[1.65]">{tip.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* FOOTER QUOTE */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center py-16">
          <div className="w-12 h-px mx-auto mb-8" style={{ background: "rgba(82,183,136,0.3)" }} />
          <p className="font-display italic text-2xl text-white/25 max-w-2xl mx-auto leading-[1.8]">
            "The tiger can never be tamed. It can only be lived alongside — with enough respect to survive the encounter."
          </p>
          <div className="font-mono-mp text-[10px] mt-4" style={{ color: "rgba(82,183,136,0.3)" }}>
            — Field notes, Bandhavgarh, 1974
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default WildlifePage;