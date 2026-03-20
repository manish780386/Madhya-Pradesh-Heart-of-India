import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LANGUAGES, LANG_STATS, LANG_FAMILIES, CROSS_PHRASES,
} from "./data/languages_data.ts";
import type { LanguageDetail } from "./data/languages_data.ts";
import { PageHero, SectionHeader } from "../../components/ui";

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const hex2rgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

const STATUS_COLOR: Record<string, string> = {
  Official:   "#F4A261",
  Regional:   "#52B788",
  Tribal:     "#C77DFF",
  Endangered: "#E63946",
  Classical:  "#FECA57",
};

const VITALITY_COLOR: Record<string, string> = {
  Thriving:   "#52B788",
  Stable:     "#06D6A0",
  Declining:  "#F4A261",
  Endangered: "#E63946",
  Critical:   "#FF0040",
};

// ─── SCRIPT DISPLAY ───────────────────────────────────────────────────────────

const ScriptDisplay: React.FC<{ lang: LanguageDetail }> = ({ lang }) => {
  const [c0] = lang.colors;
  const rgb = hex2rgb(c0);
  const isRTL = lang.id === "urdu";

  return (
    <div className="h-40 flex items-center justify-center relative overflow-hidden rounded-2xl"
      style={{ background: lang.gradient }}>
      {/* Ambient glow */}
      <div className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 50%, rgba(${rgb},0.3) 0%, transparent 70%)` }} />
      {/* Native name — big */}
      <div className="relative z-10 text-center px-4">
        <div className={`font-bold text-white leading-none mb-2 ${isRTL ? "dir-rtl" : ""}`}
          style={{
            fontSize: "clamp(36px,6vw,60px)",
            textShadow: `0 0 40px rgba(${rgb},0.8)`,
            direction: isRTL ? "rtl" : "ltr",
            fontFamily: isRTL ? "Noto Nastaliq Urdu, serif" : "inherit",
            filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.5))",
          }}>
          {lang.nativeName}
        </div>
        <div className="font-sans text-white/40 text-[10px] tracking-widest uppercase">{lang.script}</div>
      </div>
      {/* Length/speaker stat */}
      <div className="absolute bottom-3 right-3 text-right">
        <div className="font-sans text-[9px] text-white/30 uppercase tracking-widest">speakers in MP</div>
        <div className="font-mono-mp text-[10px]" style={{ color: `rgba(${rgb},0.8)` }}>
          {lang.speakersInMP.split("(")[0].trim()}
        </div>
      </div>
      {/* Status badge */}
      <div className="absolute top-3 left-3">
        <span className="font-sans text-[8px] px-2 py-0.5 rounded-full tracking-widest uppercase"
          style={{
            background: `rgba(${hex2rgb(STATUS_COLOR[lang.status])},0.2)`,
            color: STATUS_COLOR[lang.status],
            border: `1px solid rgba(${hex2rgb(STATUS_COLOR[lang.status])},0.35)`,
          }}>
          {lang.status}
        </span>
      </div>
    </div>
  );
};

// ─── IMAGE GALLERY ────────────────────────────────────────────────────────────

const LangGallery: React.FC<{ images: LanguageDetail["images"]; color: string }> = ({ images, color }) => {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(images.map(() => false));
  const [errored, setErrored] = useState<boolean[]>(images.map(() => false));
  const rgb = hex2rgb(color);

  const onLoad = (i: number) => setLoaded(p => { const n = [...p]; n[i] = true; return n; });
  const onErr  = (i: number) => setErrored(p => { const n = [...p]; n[i] = true; return n; });

  return (
    <div className="flex flex-col gap-2">
      <div className="relative overflow-hidden rounded-xl" style={{ height: "200px" }}>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }} className="absolute inset-0">
            {!errored[active] && (
              <img src={images[active].url} alt={images[active].caption}
                onLoad={() => onLoad(active)} onError={() => onErr(active)}
                className="w-full h-full object-cover"
                style={{ display: loaded[active] ? "block" : "none" }} />
            )}
            {(!loaded[active] || errored[active]) && (
              <div className="w-full h-full flex items-center justify-center"
                style={{ background: `radial-gradient(circle,rgba(${rgb},0.2),rgba(${rgb},0.04))` }}>
                <span className="font-sans text-[11px] text-white/25">Loading…</span>
              </div>
            )}
            {loaded[active] && !errored[active] && (
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5"
                style={{ background: "linear-gradient(to top,rgba(0,0,0,0.85),transparent)" }}>
                <p className="font-sans text-[10px] text-white/60 leading-[1.5]">{images[active].caption}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        {images.length > 1 && (
          <>
            <button onClick={() => setActive((active - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center border-none cursor-pointer text-white text-xs"
              style={{ background: "rgba(0,0,0,0.55)" }}>‹</button>
            <button onClick={() => setActive((active + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center border-none cursor-pointer text-white text-xs"
              style={{ background: "rgba(0,0,0,0.55)" }}>›</button>
            <div className="absolute top-2 right-2 font-sans text-[8px] px-1.5 py-0.5 rounded-full"
              style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.6)" }}>
              {active + 1}/{images.length}
            </div>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-1.5">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="flex-1 overflow-hidden rounded-lg border-none cursor-pointer"
              style={{ height: "44px", opacity: i === active ? 1 : 0.35, outline: i === active ? `2px solid ${color}` : "none", outlineOffset: "1px" }}>
              {!errored[i] && (
                <img src={img.url} alt="" onLoad={() => onLoad(i)} onError={() => onErr(i)}
                  className="w-full h-full object-cover" style={{ display: loaded[i] ? "block" : "none" }} />
              )}
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

// ─── PHRASE CARD ──────────────────────────────────────────────────────────────

const PhraseCard: React.FC<{ p: LanguageDetail["phrases"][0]; color: string; i: number }> = ({ p, color, i }) => {
  const rgb = hex2rgb(color);
  const isRTL = p.script === "اردو";
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
      className="p-4 rounded-xl"
      style={{ background: `rgba(${rgb},0.05)`, border: `1px solid rgba(${rgb},0.12)` }}>
      <div className={`font-bold text-white mb-1.5`}
        style={{
          fontSize: "clamp(15px,2vw,19px)",
          direction: isRTL ? "rtl" : "ltr",
          textAlign: isRTL ? "right" : "left",
          fontFamily: isRTL ? "Noto Nastaliq Urdu, serif" : "inherit",
        }}>
        {p.phrase}
      </div>
      <div className="font-mono-mp text-[10px] mb-1" style={{ color: `rgba(${rgb},0.7)` }}>{p.romanised}</div>
      <div className="font-sans text-[11px] text-white/45 italic leading-[1.6]">{p.meaning}</div>
    </motion.div>
  );
};

// ─── VITALITY BAR ─────────────────────────────────────────────────────────────

const VitalityBar: React.FC<{ vitality: LanguageDetail["vitality"] }> = ({ vitality }) => {
  const levels = ["Critical", "Endangered", "Declining", "Stable", "Thriving"];
  const idx = levels.indexOf(vitality);
  const color = VITALITY_COLOR[vitality];
  return (
    <div className="flex items-center gap-2">
      <span className="font-sans text-[9px] uppercase tracking-widest text-white/30">Vitality</span>
      <div className="flex gap-1">
        {levels.map((_, i) => (
          <div key={i} className="w-5 h-1.5 rounded-full transition-all duration-300"
            style={{ background: i <= idx ? color : "rgba(255,255,255,0.08)" }} />
        ))}
      </div>
      <span className="font-sans text-[9px]" style={{ color }}>{vitality}</span>
    </div>
  );
};

// ─── LANGUAGE CARD ────────────────────────────────────────────────────────────

const LangCard: React.FC<{
  lang: LanguageDetail;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}> = ({ lang, index, isSelected, onClick }) => {
  const [c0] = lang.colors;
  const rgb = hex2rgb(c0);
  const [tab, setTab] = useState<"history" | "phrases" | "features" | "visit">("history");

  useEffect(() => { if (!isSelected) setTab("history"); }, [isSelected]);

  return (
    <motion.div layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onClick={onClick}
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-350"
      style={{
        background: isSelected ? `rgba(${rgb},0.06)` : "rgba(255,255,255,0.025)",
        border: `1px solid ${isSelected ? `rgba(${rgb},0.35)` : "rgba(255,255,255,0.07)"}`,
        transform: isSelected ? "translateY(-5px)" : "none",
        boxShadow: isSelected ? `0 28px 64px rgba(${rgb},0.18)` : "none",
      }}>

      {/* Script visual — collapsed */}
      {!isSelected && <ScriptDisplay lang={lang} />}

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          {isSelected && (
            <span className="text-3xl flex-shrink-0">{lang.icon}</span>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              {isSelected && (
                <div className={`font-bold mr-1`}
                  style={{ color: c0, fontSize: "22px", direction: lang.id === "urdu" ? "rtl" : "ltr" }}>
                  {lang.nativeName}
                </div>
              )}
              <span className="font-display text-lg text-white font-bold">{lang.name}</span>
              <span className="font-sans text-[8px] px-1.5 py-0.5 rounded-full"
                style={{ background: `rgba(${hex2rgb(STATUS_COLOR[lang.status])},0.15)`, color: STATUS_COLOR[lang.status], border: `1px solid rgba(${hex2rgb(STATUS_COLOR[lang.status])},0.3)` }}>
                {lang.status}
              </span>
            </div>
            <div className="font-sans text-[10px] text-white/30 mb-1">{lang.family} · {lang.branch}</div>
            <div className="font-sans text-[10px]" style={{ color: c0 }}>{lang.mood}</div>
          </div>
        </div>

        {/* Collapsed */}
        {!isSelected && (
          <>
            <p className="font-sans text-[12px] text-white/50 leading-[1.7] mb-3">{lang.desc}</p>
            <VitalityBar vitality={lang.vitality} />
            <div className="flex gap-2 flex-wrap mt-3">
              <div className="font-sans text-[10px] text-white/30">👥 {lang.speakersInMP}</div>
            </div>
            <div className="font-sans text-[10px] text-white/20 mt-2">Tap to read full story →</div>
          </>
        )}

        {/* Expanded */}
        <AnimatePresence>
          {isSelected && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} onClick={e => e.stopPropagation()}>

              <p className="font-display italic text-[13px] text-white/55 leading-[1.85] mb-4"
                style={{ borderLeft: `3px solid rgba(${rgb},0.35)`, paddingLeft: "16px" }}>
                {lang.desc}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { label: "Script", value: lang.script.split(" (")[0] },
                  { label: "Family", value: lang.family },
                  { label: "Global Speakers", value: lang.speakers },
                  { label: "MP Speakers", value: lang.speakersInMP.split("(")[0].trim() },
                ].map(s => (
                  <div key={s.label} className="flex flex-col gap-0.5 p-2.5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="font-sans text-[8px] uppercase tracking-widest" style={{ color: `${c0}88` }}>{s.label}</span>
                    <span className="font-sans text-[11px] text-white/60">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Vitality */}
              <div className="mb-4">
                <VitalityBar vitality={lang.vitality} />
              </div>

              {/* Images */}
              <div className="mb-4">
                <LangGallery images={lang.images} color={c0} />
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mb-4 p-1 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                {(["history", "phrases", "features", "visit"] as const).map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className="flex-1 py-1.5 rounded-lg font-sans text-[9px] tracking-wide uppercase cursor-pointer border-none transition-all duration-200"
                    style={{
                      background: tab === t ? `rgba(${rgb},0.18)` : "transparent",
                      color: tab === t ? c0 : "rgba(255,255,255,0.28)",
                    }}>
                    {t === "history" ? "📜 History" : t === "phrases" ? "💬 Phrases" : t === "features" ? "🔤 Features" : "📍 Where"}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {tab === "history" && (
                  <motion.div key="history" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {lang.history.split("\n\n").map((para, i) => (
                      <p key={i} className="font-sans text-[12.5px] text-white/55 leading-[1.95] mb-3">{para.trim()}</p>
                    ))}
                    <div className="mt-3 p-3 rounded-xl"
                      style={{ background: `rgba(${rgb},0.05)`, border: `1px solid rgba(${rgb},0.12)` }}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5" style={{ color: `rgba(${rgb},0.55)` }}>📚 Literature</div>
                      <p className="font-sans text-[11.5px] text-white/50 leading-[1.7]">{lang.literature}</p>
                    </div>
                    <div className="mt-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5 text-white/28">💡 Did You Know</div>
                      <p className="font-sans text-[11px] italic text-white/42 leading-[1.7]">{lang.funFact}</p>
                    </div>
                    <div className="mt-3">
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5" style={{ color: `rgba(${rgb},0.45)` }}>Key Figures</div>
                      <p className="font-sans text-[11px] text-white/40 leading-[1.6]">{lang.keyFigures}</p>
                    </div>
                  </motion.div>
                )}

                {tab === "phrases" && (
                  <motion.div key="phrases" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="font-sans text-[10px] text-white/30 mb-3 italic">Sample phrases in {lang.name} — with romanisation and meaning</div>
                    <div className="flex flex-col gap-3">
                      {lang.phrases.map((p, i) => (
                        <PhraseCard key={i} p={p} color={c0} i={i} />
                      ))}
                    </div>
                    <div className="mt-4 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1 text-white/25">Writing System</div>
                      <p className="font-sans text-[11px] text-white/40 leading-[1.6]">{lang.writingSystem}</p>
                    </div>
                  </motion.div>
                )}

                {tab === "features" && (
                  <motion.div key="features" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="font-sans text-[9px] uppercase tracking-widest mb-3" style={{ color: `rgba(${rgb},0.5)` }}>
                      What Makes {lang.name} Linguistically Distinct
                    </div>
                    {lang.distinctFeatures.map((feat, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-start gap-2.5 p-3 rounded-xl mb-2"
                        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <span className="text-[10px] mt-0.5 flex-shrink-0" style={{ color: c0 }}>◆</span>
                        <span className="font-sans text-[11.5px] text-white/55 leading-[1.6]">{feat}</span>
                      </motion.div>
                    ))}
                    <div className="mt-3 p-3 rounded-xl" style={{ background: `rgba(${rgb},0.04)`, border: `1px solid rgba(${rgb},0.1)` }}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5" style={{ color: `rgba(${rgb},0.5)` }}>Era</div>
                      <p className="font-sans text-[11px] text-white/40 leading-[1.6]">{lang.era}</p>
                    </div>
                    {lang.relatedLangs.length > 0 && (
                      <div className="mt-3">
                        <div className="font-sans text-[9px] uppercase tracking-widest mb-2 text-white/28">Related Languages</div>
                        <div className="flex gap-1.5 flex-wrap">
                          {lang.relatedLangs.map(r => (
                            <span key={r} className="font-sans text-[10px] px-2 py-0.5 rounded-full"
                              style={{ background: `rgba(${rgb},0.1)`, color: c0, border: `1px solid rgba(${rgb},0.2)` }}>{r}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {tab === "visit" && (
                  <motion.div key="visit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="font-sans text-[9px] uppercase tracking-widest mb-3" style={{ color: `rgba(${rgb},0.5)` }}>
                      Where You'll Hear {lang.name}
                    </div>
                    {lang.whereSpoken.map((place, i) => (
                      <div key={i} className="flex items-center gap-2 mb-2">
                        <span className="text-[10px]" style={{ color: c0 }}>▸</span>
                        <span className="font-sans text-[11.5px] text-white/55">{place}</span>
                      </div>
                    ))}
                    <div className="mt-4 p-3 rounded-xl"
                      style={{ background: "rgba(230,57,70,0.05)", border: "1px solid rgba(230,57,70,0.15)" }}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5" style={{ color: "rgba(230,57,70,0.6)" }}>⚠ Threat Status</div>
                      <p className="font-sans text-[11px] text-white/45 leading-[1.65]">{lang.threatLevel}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button onClick={e => { e.stopPropagation(); onClick(); }}
                className="w-full mt-5 py-2 rounded-xl flex items-center justify-center gap-1.5 font-sans text-[10px] border-none cursor-pointer"
                style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.25)" }}>
                ↑ Collapse
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── CROSS PHRASE TABLE ───────────────────────────────────────────────────────

const CrossPhraseRow: React.FC<{ item: typeof CROSS_PHRASES[0]; index: number }> = ({ item, index }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.4 }}
    className="p-5 rounded-2xl mb-4"
    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="flex items-center gap-3 mb-4">
      <span className="font-sans text-[9px] uppercase tracking-widest text-white/30">{item.meaning}</span>
      <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
      <span className="font-sans text-[10px] text-white/20 italic">"{item.english}"</span>
    </div>
    <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))" }}>
      {item.variants.map(v => (
        <div key={v.lang} className="p-3 rounded-xl text-center"
          style={{ background: `rgba(${hex2rgb(v.color)},0.07)`, border: `1px solid rgba(${hex2rgb(v.color)},0.15)` }}>
          <div className="font-sans text-[8px] uppercase tracking-widest mb-1" style={{ color: `${v.color}88` }}>{v.lang}</div>
          <div className="font-bold text-white text-[16px] mb-0.5" style={{ textShadow: `0 0 20px rgba(${hex2rgb(v.color)},0.5)` }}>{v.text}</div>
          <div className="font-mono-mp text-[9px]" style={{ color: v.color }}>{v.romanised}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const LanguagesPage: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [familyFilter, setFamilyFilter] = useState<string | null>(null);

  const filtered = familyFilter
    ? LANGUAGES.filter(l =>
        LANG_FAMILIES.find(f => f.family === familyFilter)?.langs
          .some(n => l.name.includes(n) || n.includes(l.name))
      )
    : LANGUAGES;

  return (
    <div style={{ background: "#060410" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap');
      `}</style>

      <PageHero
        badge="7 Languages · 50+ Dialects · 30,000 Years of Voice"
        title="Languages of MP"
        subtitle="From a Dravidian tongue surviving in the Hindi heartland to a tribal script that entered Unicode in 2019 — Madhya Pradesh's linguistic landscape is one of the most extraordinary on earth."
        gradient="linear-gradient(135deg,#060410 0%,#160836 45%,#2D0A5C 100%)"
        accent="#C77DFF"
      />

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ─── STATS ─────────────────────────────────────────────── */}
        <div className="grid gap-3 mb-16" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))" }}>
          {LANG_STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="p-4 rounded-2xl text-center"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(199,125,255,0.1)" }}>
              <div className="text-xl mb-2">{s.icon}</div>
              <div className="font-display text-2xl font-bold mb-1" style={{ color: "#C77DFF" }}>{s.value}</div>
              <div className="font-sans text-[11px] text-white/70 font-semibold mb-0.5">{s.label}</div>
              <div className="font-sans text-[9px] text-white/26 leading-[1.5]">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* ─── FAMILY FILTER ─────────────────────────────────────── */}
        <div className="flex gap-2 flex-wrap mb-8 items-center">
          <button onClick={() => setFamilyFilter(null)}
            className="px-4 py-2 rounded-full font-sans text-[11px] cursor-pointer border-none transition-all duration-200"
            style={{
              background: !familyFilter ? "rgba(199,125,255,0.15)" : "rgba(255,255,255,0.04)",
              color: !familyFilter ? "#C77DFF" : "rgba(255,255,255,0.35)",
              border: `1px solid ${!familyFilter ? "rgba(199,125,255,0.35)" : "rgba(255,255,255,0.07)"}`,
            }}>All Languages</button>
          {LANG_FAMILIES.map(f => (
            <button key={f.family} onClick={() => setFamilyFilter(f.family === familyFilter ? null : f.family)}
              className="px-4 py-2 rounded-full font-sans text-[11px] cursor-pointer border-none transition-all duration-200"
              style={{
                background: familyFilter === f.family ? `rgba(${hex2rgb(f.color)},0.15)` : "rgba(255,255,255,0.04)",
                color: familyFilter === f.family ? f.color : "rgba(255,255,255,0.35)",
                border: `1px solid ${familyFilter === f.family ? `rgba(${hex2rgb(f.color)},0.35)` : "rgba(255,255,255,0.07)"}`,
              }}>
              <span className="w-2 h-2 rounded-full inline-block mr-1.5" style={{ background: f.color }} />
              {f.family.split(" · ")[0]}
            </button>
          ))}
        </div>

        {/* ─── LANGUAGE GRID ─────────────────────────────────────── */}
        <SectionHeader badge="7 Languages" title="The Voices of" titleAccent="Madhya Pradesh" />
        <p className="font-sans text-[13px] text-white/38 mb-8 leading-[1.8] max-w-2xl">
          From the official tongue of 72 million to a tribal script that entered Unicode in 2019. Each language is a complete world — tap any to read its history, hear its phrases, and understand what makes it irreplaceable.
        </p>

        <div className="grid gap-5 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(310px,1fr))" }}>
          <AnimatePresence>
            {filtered.map((lang, i) => (
              <LangCard key={lang.id} lang={lang} index={i}
                isSelected={selected === lang.id}
                onClick={() => setSelected(selected === lang.id ? null : lang.id)} />
            ))}
          </AnimatePresence>
        </div>

        {/* ─── CROSS-LANGUAGE PHRASE TABLE ───────────────────────── */}
        <SectionHeader badge="Comparative" title="Same Word," titleAccent="Different World" />
        <p className="font-sans text-[13px] text-white/38 mb-8 leading-[1.8] max-w-2xl">
          Three words — greeting, forest, river — shown across every MP language. The same meaning, carried in completely different sounds, scripts, and histories.
        </p>
        {CROSS_PHRASES.map((item, i) => (
          <CrossPhraseRow key={item.meaning} item={item} index={i} />
        ))}

        {/* ─── LANGUAGE FAMILY TREE ─────────────────────────────── */}
        <div className="mt-16 mb-16">
          <SectionHeader badge="Linguistic Map" title="Family" titleAccent="Trees" />
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))" }}>
            {LANG_FAMILIES.map((f, i) => (
              <motion.div key={f.family}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl"
                style={{ background: `rgba(${hex2rgb(f.color)},0.05)`, border: `1px solid rgba(${hex2rgb(f.color)},0.15)` }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: f.color }} />
                  <div className="font-sans text-[10px] font-semibold" style={{ color: f.color }}>{f.family}</div>
                </div>
                <div className="flex flex-col gap-2">
                  {f.langs.map(l => (
                    <div key={l} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: `${f.color}66` }} />
                      <span className="font-sans text-[11px] text-white/50">{l}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── GONDWANA NOTE ─────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl mb-16"
          style={{ background: "linear-gradient(135deg,rgba(82,183,136,0.06),rgba(199,125,255,0.04))", border: "1px solid rgba(82,183,136,0.14)" }}>
          <div className="font-sans text-[9px] uppercase tracking-widest mb-3" style={{ color: "rgba(82,183,136,0.55)" }}>
            🌿 The Deepest Linguistic Fact in MP
          </div>
          <h3 className="font-display text-xl text-white font-bold mb-3">A Dravidian Language in the Hindi Belt</h3>
          <p className="font-sans text-[13px] text-white/52 leading-[1.95] mb-3">
            Gondi — spoken by the Gond tribe across Mandla, Dindori, and Balaghat — is a Dravidian language, not an Indo-Aryan one. In a state where every other major language descends from Sanskrit, Gondi descends from the same proto-Dravidian root as Telugu, Tamil, and Kannada. Its presence deep in the Hindi heartland is a linguistic survival from the pre-Vedic period, when Dravidian languages may have been spoken across a much larger portion of the subcontinent.
          </p>
          <p className="font-sans text-[12px] text-white/35 leading-[1.85]">
            Gondi uses verb-final sentence structure (Subject-Object-Verb), has no grammatical gender, and marks evidentiality — features that are completely foreign to Hindi. A Gondi speaker and a Hindi speaker are not merely separated by vocabulary: they are separated by a fundamentally different way of organising thought into language.
          </p>
        </motion.div>

        {/* ─── CLOSING QUOTE ─────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="w-10 h-px mx-auto mb-8" style={{ background: "rgba(199,125,255,0.3)" }} />
          <p className="font-display italic leading-[1.9] text-white/20 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(16px,2vw,24px)" }}>
            "A language is not a communication tool. It is an entire civilisation compressed into sound — every word carries the weight of everyone who has spoken it before."
          </p>
          <div className="font-mono-mp text-[10px] mt-4" style={{ color: "rgba(199,125,255,0.3)" }}>
            — Madhya Pradesh · Where 50 Worlds Speak Simultaneously
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default LanguagesPage;