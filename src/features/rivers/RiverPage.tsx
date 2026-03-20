import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RIVERS, RIVER_STATS, RIVER_EXPERIENCES } from "./data/rivers_data.ts";
import type { RiverDetail } from "./data/rivers_data.ts";
import { PageHero, SectionHeader } from "../../components/ui";

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const hex2rgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

const SACRED_RANK_COLOR: Record<string, string> = {
  "National Sacred River": "#F4A261",
  "State Sacred River":    "#FECA57",
  "Ecologically Critical": "#52B788",
  "Living Heritage":       "#C77DFF",
};

// ─── RIVER SVG ICON (animated flow) ──────────────────────────────────────────

const RiverFlowSVG: React.FC<{ colors: [string,string,string]; size?: number }> = ({ colors, size = 120 }) => {
  const [c0, c1, c2] = colors;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
      <defs>
        <radialGradient id={`rg-${c0.replace("#","")}`} cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor={c0} stopOpacity="0.25" />
          <stop offset="100%" stopColor={c2} stopOpacity="0.04" />
        </radialGradient>
      </defs>
      <rect width={size} height={size} fill={`url(#rg-${c0.replace("#","")})`} />
      {/* Flowing wave lines */}
      {[0,1,2,3,4].map(i => (
        <path key={i}
          d={`M0,${20+i*16} Q${size*0.25},${12+i*16} ${size*0.5},${20+i*16} Q${size*0.75},${28+i*16} ${size},${20+i*16}`}
          stroke={[c0,c1,c2][i%3]} strokeWidth={i===2?"2.5":"1.2"}
          fill="none" opacity={0.15+i*0.1}
          strokeDasharray={i%2===0?"6,3":"4,5"}
        />
      ))}
      {/* Ripple circles */}
      {[0,1,2].map(i => (
        <circle key={i} cx={size*(0.25+i*0.25)} cy={size*0.55}
          r={8+i*4} fill="none"
          stroke={[c0,c1,c2][i]} strokeWidth="1"
          opacity={0.25-i*0.06} />
      ))}
      {/* Fish silhouettes */}
      <ellipse cx={size*0.3} cy={size*0.72} rx="9" ry="4" fill={c0} opacity="0.3" transform={`rotate(-10,${size*0.3},${size*0.72})`} />
      <ellipse cx={size*0.7} cy={size*0.78} rx="6" ry="2.5" fill={c1} opacity="0.25" transform={`rotate(8,${size*0.7},${size*0.78})`} />
    </svg>
  );
};

// ─── IMAGE GALLERY ────────────────────────────────────────────────────────────

const RiverGallery: React.FC<{ images: RiverDetail["images"]; color: string }> = ({ images, color }) => {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(images.map(() => false));
  const [errored, setErrored] = useState<boolean[]>(images.map(() => false));
  const rgb = hex2rgb(color);

  const onLoad = (i:number) => setLoaded(p=>{const n=[...p];n[i]=true;return n;});
  const onErr  = (i:number) => setErrored(p=>{const n=[...p];n[i]=true;return n;});

  return (
    <div className="flex flex-col gap-2">
      {/* Main */}
      <div className="relative overflow-hidden rounded-2xl" style={{ height: "230px" }}>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            transition={{duration:0.4}} className="absolute inset-0">
            {!errored[active] && (
              <img src={images[active].url} alt={images[active].caption}
                onLoad={()=>onLoad(active)} onError={()=>onErr(active)}
                className="w-full h-full object-cover"
                style={{display: loaded[active] ? "block" : "none"}} />
            )}
            {(!loaded[active] || errored[active]) && (
              <div className="w-full h-full flex items-center justify-center"
                style={{background:`radial-gradient(circle at 40% 40%,rgba(${rgb},0.22),rgba(${rgb},0.05))`}}>
                <span className="font-sans text-[11px] text-white/25">Loading…</span>
              </div>
            )}
            {loaded[active] && !errored[active] && (
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{background:"linear-gradient(to top,rgba(0,0,0,0.85),transparent)"}}>
                <p className="font-sans text-[10px] text-white/65 leading-[1.5]">{images[active].caption}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        {images.length > 1 && (
          <>
            <button onClick={()=>setActive((active-1+images.length)%images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer text-white text-sm"
              style={{background:"rgba(0,0,0,0.55)"}}>‹</button>
            <button onClick={()=>setActive((active+1)%images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer text-white text-sm"
              style={{background:"rgba(0,0,0,0.55)"}}>›</button>
            <div className="absolute top-2 right-2 font-sans text-[9px] px-1.5 py-0.5 rounded-full"
              style={{background:"rgba(0,0,0,0.55)",color:"rgba(255,255,255,0.65)"}}>
              {active+1}/{images.length}
            </div>
          </>
        )}
      </div>
      {/* Thumbs */}
      {images.length > 1 && (
        <div className="flex gap-1.5">
          {images.map((img,i) => (
            <button key={i} onClick={()=>setActive(i)}
              className="flex-1 overflow-hidden rounded-xl border-none cursor-pointer"
              style={{height:"48px",opacity:i===active?1:0.35,outline:i===active?`2px solid ${color}`:"none",outlineOffset:"1px"}}>
              {!errored[i] && (
                <img src={img.url} alt="" onLoad={()=>onLoad(i)} onError={()=>onErr(i)}
                  className="w-full h-full object-cover" style={{display:loaded[i]?"block":"none"}} />
              )}
              {(!loaded[i]||errored[i]) && (
                <div className="w-full h-full" style={{background:`rgba(${rgb},0.15)`}} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── DATA PILL ────────────────────────────────────────────────────────────────

const DataPill: React.FC<{label:string;value:string;color:string}> = ({label,value,color}) => (
  <div className="flex flex-col gap-0.5 px-3 py-2 rounded-xl"
    style={{background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.07)"}}>
    <span className="font-sans text-[9px] uppercase tracking-widest" style={{color:`${color}88`}}>{label}</span>
    <span className="font-mono-mp text-[11px] text-white/65">{value}</span>
  </div>
);

// ─── TRIBUTARY ROW ────────────────────────────────────────────────────────────

const TributaryRow: React.FC<{t:{name:string;joins:string};color:string;i:number}> = ({t,color,i}) => (
  <motion.div initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:i*0.05}}
    className="flex items-start gap-2 py-1.5">
    <span className="text-[9px] mt-0.5" style={{color}}>◆</span>
    <div>
      <span className="font-sans text-[11px] text-white/65 font-semibold">{t.name}</span>
      <span className="font-sans text-[10px] text-white/30 ml-2">joins at {t.joins}</span>
    </div>
  </motion.div>
);

// ─── RIVER CARD ───────────────────────────────────────────────────────────────

const RiverCard: React.FC<{
  river: RiverDetail;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}> = ({ river, index, isSelected, onClick }) => {
  const [c0] = river.colors;
  const rgb = hex2rgb(c0);
  const rankColor = SACRED_RANK_COLOR[river.sacredRank];
  const [tab, setTab] = useState<"history"|"ecology"|"tributaries"|"visit">("history");

  useEffect(()=>{ if(!isSelected) setTab("history"); },[isSelected]);

  return (
    <motion.div layout
      initial={{opacity:0,y:22}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      transition={{duration:0.5,delay:index*0.07}}
      onClick={onClick}
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-350"
      style={{
        background: isSelected ? `rgba(${rgb},0.06)` : "rgba(255,255,255,0.025)",
        border:`1px solid ${isSelected ? `rgba(${rgb},0.35)` : "rgba(255,255,255,0.07)"}`,
        transform: isSelected ? "translateY(-5px)" : "none",
        boxShadow: isSelected ? `0 28px 64px rgba(${rgb},0.18)` : "none",
      }}>

      {/* Visual header — collapsed only */}
      {!isSelected && (
        <div className="relative h-44 flex items-center justify-center overflow-hidden"
          style={{background:river.gradient}}>
          <div className="w-32 h-32 opacity-80">
            <RiverFlowSVG colors={river.colors} />
          </div>
          {/* Length arc */}
          <div className="absolute bottom-3 right-3 text-right">
            <div className="font-display text-3xl font-bold text-white/80" style={{lineHeight:1}}>{river.length}</div>
            <div className="font-sans text-[9px] text-white/40 tracking-widest">km total</div>
          </div>
          {/* Icon */}
          <div className="absolute top-3 left-3 text-3xl">{river.icon}</div>
          {/* Sacred rank badge */}
          <div className="absolute top-3 right-3 font-sans text-[8px] px-2 py-0.5 rounded-full tracking-widest"
            style={{background:`rgba(${hex2rgb(rankColor)},0.2)`,color:rankColor,border:`1px solid rgba(${hex2rgb(rankColor)},0.3)`}}>
            {river.sacredRank}
          </div>
        </div>
      )}

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start gap-3 mb-3">
          {isSelected && (
            <div className="w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden"
              style={{background:river.gradient}}>
              <RiverFlowSVG colors={river.colors} size={56} />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              {isSelected && <span className="text-xl">{river.icon}</span>}
              <span className="font-display text-xl text-white font-bold">{river.name}</span>
              <span className="font-sans text-[11px] text-white/25">{river.nameDev}</span>
            </div>
            <div className="font-sans text-[10px] italic text-white/30 mb-1">"{river.nameEtymology}"</div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-sans text-[9px] px-2 py-0.5 rounded-full"
                style={{background:`rgba(${hex2rgb(rankColor)},0.12)`,color:rankColor,border:`1px solid rgba(${hex2rgb(rankColor)},0.22)`}}>
                {river.sacredRank}
              </span>
              <span className="font-sans text-[10px]" style={{color:c0}}>{river.mood}</span>
            </div>
          </div>
        </div>

        {/* Collapsed desc */}
        {!isSelected && (
          <>
            <p className="font-sans text-[12px] text-white/50 leading-[1.7] mb-3">{river.desc}</p>
            <div className="flex gap-2 flex-wrap mb-3">
              <DataPill label="Length" value={`${river.length} km`} color={c0} />
              <DataPill label="In MP" value={`${river.lengthInMP} km`} color={c0} />
              <DataPill label="Dams" value={String(river.damsCount)} color={c0} />
            </div>
            <div className="font-sans text-[10px] text-white/20">Tap to read full river story →</div>
          </>
        )}

        {/* Expanded */}
        <AnimatePresence>
          {isSelected && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              transition={{duration:0.3}} onClick={e=>e.stopPropagation()}>

              <p className="font-display italic text-[14px] text-white/55 leading-[1.85] mb-5"
                style={{borderLeft:`3px solid rgba(${rgb},0.35)`,paddingLeft:"16px"}}>
                {river.desc}
              </p>

              {/* Key stats row */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                <DataPill label="Total Length" value={`${river.length} km`} color={c0} />
                <DataPill label="In MP" value={`${river.lengthInMP} km`} color={c0} />
                <DataPill label="Origin" value={river.origin.split(",")[0]} color={c0} />
                <DataPill label="Altitude" value={river.originAlt} color={c0} />
                <DataPill label="Flows Into" value={river.drains} color={c0} />
                <DataPill label="Dams" value={`${river.damsCount} large dam${river.damsCount !== 1 ? "s" : ""}`} color={c0} />
              </div>

              {/* Images */}
              <div className="mb-5">
                <RiverGallery images={river.images} color={c0} />
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mb-4 p-1 rounded-xl"
                style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)"}}>
                {(["history","ecology","tributaries","visit"] as const).map(t => (
                  <button key={t} onClick={()=>setTab(t)}
                    className="flex-1 py-1.5 rounded-lg font-sans text-[9px] tracking-wide uppercase cursor-pointer border-none transition-all duration-200"
                    style={{
                      background: tab===t ? `rgba(${rgb},0.18)` : "transparent",
                      color: tab===t ? c0 : "rgba(255,255,255,0.28)",
                    }}>
                    {t==="history" ? "📜 History" : t==="ecology" ? "🌿 Ecology" : t==="tributaries" ? "🔀 Tributaries" : "🗺️ Visit"}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {tab === "history" && (
                  <motion.div key="history" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                    {/* History — split by double newline into paragraphs */}
                    {river.history.split("\n\n").map((para, i) => (
                      <p key={i} className="font-sans text-[12.5px] text-white/55 leading-[1.95] mb-3">{para.trim()}</p>
                    ))}
                    {/* Mythology */}
                    <div className="mt-4 p-4 rounded-xl"
                      style={{background:`rgba(${rgb},0.05)`,border:`1px solid rgba(${rgb},0.12)`}}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-2" style={{color:`rgba(${rgb},0.55)`}}>
                        🙏 Mythology & Sacred Significance
                      </div>
                      {river.mythology.split("\n\n").map((para,i) => (
                        <p key={i} className="font-sans text-[11.5px] text-white/50 leading-[1.8] mb-2">{para.trim()}</p>
                      ))}
                    </div>
                    {/* Fun fact */}
                    <div className="mt-3 p-3 rounded-xl"
                      style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)"}}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5 text-white/28">💡 Did You Know</div>
                      <p className="font-sans text-[11px] italic text-white/42 leading-[1.7]">{river.funFact}</p>
                    </div>
                  </motion.div>
                )}

                {tab === "ecology" && (
                  <motion.div key="ecology" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                    <div className="mb-4">
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-2" style={{color:`rgba(${rgb},0.55)`}}>
                        🌿 Ecosystem
                      </div>
                      <p className="font-sans text-[12.5px] text-white/55 leading-[1.95]">{river.ecology}</p>
                    </div>
                    <div className="p-4 rounded-xl"
                      style={{background:"rgba(230,57,70,0.05)",border:"1px solid rgba(230,57,70,0.15)"}}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-2" style={{color:"rgba(230,57,70,0.6)"}}>
                        ⚠ Threats
                      </div>
                      <p className="font-sans text-[11.5px] text-white/48 leading-[1.8]">{river.threats}</p>
                    </div>
                    {/* Pilgrimage */}
                    <div className="mt-3 p-3 rounded-xl"
                      style={{background:`rgba(${rgb},0.04)`,border:`1px solid rgba(${rgb},0.1)`}}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5" style={{color:`rgba(${rgb},0.5)`}}>
                        Pilgrimage & Sacred Use
                      </div>
                      <p className="font-sans text-[11px] text-white/45 leading-[1.65]">{river.pilgrimage}</p>
                    </div>
                    {/* Era */}
                    <div className="mt-3 font-sans text-[10px] text-white/25 italic">{river.era}</div>
                  </motion.div>
                )}

                {tab === "tributaries" && (
                  <motion.div key="tributaries" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                    <div className="mb-3">
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-2" style={{color:`rgba(${rgb},0.5)`}}>
                        Major Tributaries
                      </div>
                      <div className="divide-y" style={{borderColor:"rgba(255,255,255,0.05)"}}>
                        {river.tributaries.map((t,i) => (
                          <TributaryRow key={t.name} t={t} color={c0} i={i} />
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-2" style={{color:`rgba(${rgb},0.5)`}}>
                        Basin Details
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        <DataPill label="Basin Area" value={river.basin} color={c0} />
                        <DataPill label="Avg Discharge" value={river.discharge} color={c0} />
                        <DataPill label="States Crossed" value={river.states.join(" · ")} color={c0} />
                      </div>
                    </div>
                  </motion.div>
                )}

                {tab === "visit" && (
                  <motion.div key="visit" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                    <div className="mb-4">
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-3" style={{color:`rgba(${rgb},0.55)`}}>
                        🏛 Key Locations
                      </div>
                      <div className="flex flex-col gap-2">
                        {river.keyLocations.map((loc,i) => (
                          <motion.div key={loc.name} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}}
                            transition={{delay:i*0.05}}
                            className="p-3 rounded-xl"
                            style={{background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.06)"}}>
                            <div className="font-sans text-[11px] text-white/70 font-semibold mb-0.5">
                              <span style={{color:c0}}>▸ </span>{loc.name}
                            </div>
                            <div className="font-sans text-[10.5px] text-white/40 leading-[1.55]">{loc.why}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-3" style={{color:`rgba(${rgb},0.55)`}}>
                        ⭐ Best Experiences
                      </div>
                      {river.bestExperience.map((exp,i) => (
                        <div key={i} className="flex items-start gap-2 mb-2">
                          <span className="text-[10px] mt-0.5 flex-shrink-0" style={{color:c0}}>◆</span>
                          <span className="font-sans text-[11.5px] text-white/50 leading-[1.65]">{exp}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button onClick={e=>{e.stopPropagation();onClick();}}
                className="w-full mt-5 py-2 rounded-xl flex items-center justify-center gap-1.5 font-sans text-[10px] border-none cursor-pointer"
                style={{background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.25)"}}>
                ↑ Collapse
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── EXPERIENCE CARD ─────────────────────────────────────────────────────────

const ExpCard: React.FC<{item:typeof RIVER_EXPERIENCES[0];index:number}> = ({item,index}) => (
  <motion.div
    initial={{opacity:0,y:16}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.4,delay:index*0.07}}
    className="p-5 rounded-2xl"
    style={{background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.07)"}}>
    <div className="flex items-center gap-3 mb-2">
      <span className="text-2xl">{item.icon}</span>
      <div>
        <div className="font-display text-sm text-white font-semibold">{item.title}</div>
        <div className="font-sans text-[10px] text-white/30">{item.river}</div>
      </div>
    </div>
    <p className="font-sans text-[12px] text-white/48 leading-[1.65]">{item.desc}</p>
  </motion.div>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const RiversPage: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ background: "#010C18" }}>
      {/* Subtle water-ripple background */}
      <div className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 80%,rgba(0,180,216,0.04) 0%,transparent 60%),radial-gradient(ellipse at 80% 20%,rgba(82,183,136,0.03) 0%,transparent 60%)",
          zIndex: 0,
        }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <PageHero
          badge="6 Rivers · 150 Million Years · One Ancient Landscape"
          title="Rivers of MP"
          subtitle="Madhya Pradesh is where India's greatest rivers are born, flow sacred, and sustain civilisation. The Narmada is older than the Himalayas. The Chambal is cleaner because it was cursed. The Shipra hosted 75 million people. These are not just rivers — they are living history."
          gradient="linear-gradient(135deg,#010C18 0%,#012A45 45%,#014f86 100%)"
          accent="#00B4D8"
        />

        <div className="max-w-6xl mx-auto px-6 py-16">

          {/* ─── STATS ─────────────────────────────────────────────── */}
          <div className="grid gap-3 mb-16" style={{gridTemplateColumns:"repeat(auto-fill,minmax(175px,1fr))"}}>
            {RIVER_STATS.map((s,i) => (
              <motion.div key={s.label}
                initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}
                transition={{delay:i*0.07,duration:0.4}}
                className="p-4 rounded-2xl text-center"
                style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(0,180,216,0.1)"}}>
                <div className="text-xl mb-2">{s.icon}</div>
                <div className="font-display text-2xl font-bold mb-1" style={{color:"#00B4D8"}}>{s.value}</div>
                <div className="font-sans text-[11px] text-white/70 font-semibold mb-0.5">{s.label}</div>
                <div className="font-sans text-[9px] text-white/26 leading-[1.5]">{s.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* ─── SACRED RANK LEGEND ────────────────────────────────── */}
          <div className="flex gap-3 flex-wrap mb-8">
            {Object.entries(SACRED_RANK_COLOR).map(([rank, color]) => (
              <div key={rank} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{background:color}} />
                <span className="font-sans text-[10px] text-white/35">{rank}</span>
              </div>
            ))}
          </div>

          {/* ─── RIVERS GRID ───────────────────────────────────────── */}
          <SectionHeader badge="6 Rivers" title="The Living" titleAccent="Rivers of MP" />
          <p className="font-sans text-[13px] text-white/38 mb-8 leading-[1.8] max-w-2xl">
            Six rivers, six civilisations, six ecological worlds. Each carries a distinct history, mythology, and ecological character. Tap any river to read its full story — geology, mythology, ecology, threats, and how to experience it.
          </p>

          <div className="grid gap-5 mb-20" style={{gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))"}}>
            {RIVERS.map((river,i) => (
              <RiverCard key={river.id} river={river} index={i}
                isSelected={selected===river.id}
                onClick={()=>setSelected(selected===river.id ? null : river.id)} />
            ))}
          </div>

          {/* ─── RIVER EXPERIENCES ─────────────────────────────────── */}
          <SectionHeader badge="What to Do" title="River" titleAccent="Experiences" />
          <div className="grid gap-4 mb-20" style={{gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))"}}>
            {RIVER_EXPERIENCES.map((item,i) => (
              <ExpCard key={item.title} item={item} index={i} />
            ))}
          </div>

          {/* ─── AMARKANTAK SPECIAL ────────────────────────────────── */}
          <motion.div
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="p-8 rounded-2xl mb-20"
            style={{
              background:"linear-gradient(135deg,rgba(0,180,216,0.04),rgba(82,183,136,0.04))",
              border:"1px solid rgba(0,180,216,0.14)"
            }}>
            <div className="font-sans text-[9px] uppercase tracking-widest mb-3" style={{color:"rgba(0,180,216,0.5)"}}>
              🏔 The Most Extraordinary Place in Indian Geography
            </div>
            <h3 className="font-display text-2xl text-white font-bold mb-4">Amarkantak — Where Two Rivers Say Goodbye</h3>
            <p className="font-sans text-[13px] text-white/55 leading-[1.95] mb-4">
              On the Amarkantak plateau in Anuppur district, at 1,057 metres above sea level, the Narmada and the Son rise within 1 kilometre of each other — both from the same ancient Gondwana rock formation. They are geological siblings born on the same day, 150 million years ago. From the moment they emerge, they move in opposite directions and never meet again: the Narmada flows westward to the Arabian Sea; the Son flows northeastward to the Ganga and eventually the Bay of Bengal. They are siblings who part at birth and are separated by the entire width of the Indian subcontinent.
            </p>
            <p className="font-sans text-[12px] text-white/38 leading-[1.85]">
              Standing at Amarkantak and watching the Narmada's infant stream flow one direction and the Son's first trickle flow the other is one of the most profound geographical experiences in India. The plateau is sacred in both Hindu and tribal tradition — it is called Tirtharaj (King of Sacred Fords) in some Puranic texts, because the two rivers that emerge here together irrigate and sustain more of India's population than any other river pair.
            </p>
          </motion.div>

          {/* ─── CLOSING QUOTE ─────────────────────────────────────── */}
          <motion.div
            initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
            className="text-center py-16"
            style={{borderTop:"1px solid rgba(255,255,255,0.05)"}}>
            <div className="w-10 h-px mx-auto mb-8" style={{background:"rgba(0,180,216,0.3)"}} />
            <p className="font-display italic leading-[1.9] text-white/20 max-w-2xl mx-auto"
              style={{fontSize:"clamp(16px,2vw,24px)"}}>
              "In India, rivers do not carry water. They carry civilisations, gods, the dead, the living, and the prayers of a billion people who have loved them since before memory."
            </p>
            <div className="font-mono-mp text-[10px] mt-4" style={{color:"rgba(0,180,216,0.3)"}}>
              — Madhya Pradesh · Where India's Rivers Begin
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default RiversPage;