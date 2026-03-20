import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TRIBAL_ARTS, ART_STATS, WHERE_TO_EXPERIENCE } from "./data/art.ts";
import type { ArtDetail } from "./data/art.ts";
import { PageHero, SectionHeader } from "../../components/ui";

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const hex2rgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

// ─── GENERATIVE ART PATTERNS ─────────────────────────────────────────────────

const ArtPattern: React.FC<{ art: ArtDetail; size?: number }> = ({ art, size = 100 }) => {
  const [c0, c1, c2] = art.colors;
  const vb = `0 0 ${size} ${size}`;

  if (art.pattern === "dots") return (
    <svg viewBox={vb} className="w-full h-full" style={{ opacity: 0.8 }}>
      <defs>
        <radialGradient id={`bg-${art.id}`} cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor={c0} stopOpacity="0.15" />
          <stop offset="100%" stopColor={c2} stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <rect width={size} height={size} fill={`url(#bg-${art.id})`} />
      {Array.from({ length: 36 }).map((_, j) => (
        <circle key={j} cx={8 + (j % 6) * 17} cy={8 + Math.floor(j / 6) * 17}
          r={2 + (j % 4)} fill={[c0, c1, c2][j % 3]} opacity={0.5 + (j % 3) * 0.15} />
      ))}
      {Array.from({ length: 14 }).map((_, j) => (
        <path key={j}
          d={`M${5 + (j % 4) * 24},${20 + Math.floor(j / 4) * 22} Q${17 + (j % 4) * 24},${10 + Math.floor(j / 4) * 22} ${29 + (j % 4) * 24},${20 + Math.floor(j / 4) * 22}`}
          stroke={[c0, c1, c2][j % 3]} strokeWidth="1.2" fill="none" opacity="0.45" />
      ))}
      {/* Peacock feather dots */}
      {[25, 50, 75].map((cx, j) => (
        <g key={j}>
          <circle cx={cx} cy={size * 0.7} r="5" fill="none" stroke={[c0, c1, c2][j]} strokeWidth="1.2" opacity="0.6" />
          <circle cx={cx} cy={size * 0.7} r="2" fill={[c0, c1, c2][j]} opacity="0.8" />
        </g>
      ))}
    </svg>
  );

  if (art.pattern === "horses") return (
    <svg viewBox="0 0 120 90" className="w-full h-full" style={{ opacity: 0.8 }}>
      <defs>
        <radialGradient id={`bg-h-${art.id}`} cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor={c1} stopOpacity="0.12" />
          <stop offset="100%" stopColor={c0} stopOpacity="0.04" />
        </radialGradient>
      </defs>
      <rect width="120" height="90" fill={`url(#bg-h-${art.id})`} />
      {[0, 1, 2].map(j => (
        <g key={j} transform={`translate(${10 + j * 36}, 8) scale(0.9)`}>
          <ellipse cx="16" cy="28" rx="11" ry="7" fill={[c0, c1, c2][j]} opacity="0.75" />
          <circle cx="26" cy="20" r="8" fill={[c0, c1, c2][j]} opacity="0.75" />
          {[0, 1, 2, 3].map(k => (
            <line key={k} x1={8 + k * 5} y1="35" x2={7 + k * 5} y2="54"
              stroke={[c0, c1, c2][j]} strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
          ))}
          <path d={`M16,12 Q22,4 28,12`} stroke={[c2, c0, c1][j]} strokeWidth="2" fill="none" opacity="0.9" />
          {/* Eye dot */}
          <circle cx="28" cy="18" r="1.5" fill="white" opacity="0.9" />
          {/* Decorative dots */}
          {[0, 1, 2, 3, 4].map(k => (
            <circle key={k} cx={9 + k * 4} cy={60} r="2" fill={[c0, c1, c2][k % 3]} opacity="0.5" />
          ))}
        </g>
      ))}
      <text x="60" y="82" textAnchor="middle" fontSize="7" fill={c1} opacity="0.4" fontFamily="serif">Pithora</text>
    </svg>
  );

  if (art.pattern === "floral") return (
    <svg viewBox={vb} className="w-full h-full" style={{ opacity: 0.8 }}>
      <defs>
        <radialGradient id={`bg-f-${art.id}`}>
          <stop offset="0%" stopColor={c0} stopOpacity="0.1" />
          <stop offset="100%" stopColor={c1} stopOpacity="0.04" />
        </radialGradient>
      </defs>
      <rect width={size} height={size} fill={`url(#bg-f-${art.id})`} />
      {[20, 50, 80].map((cx, j) => (
        <g key={j}>
          <circle cx={cx} cy={size / 2} r="8" fill={[c0, c1, c2][j]} opacity="0.85" />
          {[0, 1, 2, 3, 4, 5].map(k => {
            const a = (k * 60 * Math.PI) / 180;
            const px = cx + Math.cos(a) * 18;
            const py = size / 2 + Math.sin(a) * 18;
            return <ellipse key={k} cx={px} cy={py} rx="8" ry="3.5"
              fill={[c0, c1, c2][(j + k) % 3]} opacity="0.5"
              transform={`rotate(${k * 60 + 30},${px},${py})`} />;
          })}
          {/* Block print cross motif */}
          <line x1={cx - 14} y1={size / 2} x2={cx + 14} y2={size / 2} stroke={[c0, c1, c2][j]} strokeWidth="0.8" opacity="0.3" strokeDasharray="2,2" />
          <line x1={cx} y1={size / 2 - 14} x2={cx} y2={size / 2 + 14} stroke={[c0, c1, c2][j]} strokeWidth="0.8" opacity="0.3" strokeDasharray="2,2" />
        </g>
      ))}
    </svg>
  );

  if (art.pattern === "bronze") return (
    <svg viewBox={vb} className="w-full h-full" style={{ opacity: 0.8 }}>
      <defs>
        <radialGradient id={`bg-b-${art.id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={c0} stopOpacity="0.2" />
          <stop offset="100%" stopColor={c2} stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <rect width={size} height={size} fill={`url(#bg-b-${art.id})`} />
      {/* Dancing figure */}
      <circle cx={size / 2} cy={size * 0.28} r="11" fill={c0} opacity="0.75" />
      <path d={`M${size / 2 - 8},${size * 0.4} L${size / 2},${size * 0.68} L${size / 2 + 8},${size * 0.4}`} fill={c1} opacity="0.65" />
      <path d={`M${size / 2 - 14},${size * 0.45} Q${size / 2 - 4},${size * 0.36} ${size / 2},${size * 0.42}`} stroke={c2} strokeWidth="2.5" fill="none" opacity="0.7" />
      <path d={`M${size / 2 + 14},${size * 0.45} Q${size / 2 + 4},${size * 0.36} ${size / 2},${size * 0.42}`} stroke={c2} strokeWidth="2.5" fill="none" opacity="0.7" />
      <line x1={size / 2 - 6} y1={size * 0.68} x2={size / 2 - 9} y2={size * 0.85} stroke={c0} strokeWidth="3" opacity="0.7" strokeLinecap="round" />
      <line x1={size / 2 + 6} y1={size * 0.68} x2={size / 2 + 9} y2={size * 0.85} stroke={c0} strokeWidth="3" opacity="0.7" strokeLinecap="round" />
      {/* Base decorative row */}
      {[15, 30, 50, 70, 85].map((x, j) => (
        <circle key={j} cx={x} cy={size * 0.93} r="4.5" fill={[c0, c1, c2][j % 3]} opacity="0.5" />
      ))}
      {/* Crown */}
      <path d={`M${size / 2 - 8},${size * 0.18} L${size / 2 - 5},${size * 0.1} L${size / 2},${size * 0.15} L${size / 2 + 5},${size * 0.1} L${size / 2 + 8},${size * 0.18}`}
        stroke={c1} strokeWidth="2" fill="none" opacity="0.7" />
    </svg>
  );

  if (art.pattern === "tattoo") return (
    <svg viewBox={vb} className="w-full h-full" style={{ opacity: 0.8 }}>
      <rect width={size} height={size} fill={`rgba(${hex2rgb(c0)},0.06)`} />
      {/* Body silhouette with tattoo lines */}
      <ellipse cx={size / 2} cy={size * 0.25} rx="10" ry="10" fill="none" stroke={c0} strokeWidth="1.2" opacity="0.6" />
      {/* Geometric tattoo lines */}
      {[0, 1, 2, 3, 4, 5, 6].map(row => (
        <g key={row}>
          {[0, 1, 2, 3, 4].map(col => (
            <rect key={col}
              x={10 + col * 18} y={42 + row * 9}
              width="12" height="6" rx="1"
              fill="none" stroke={[c0, c1, c2][(row + col) % 3]}
              strokeWidth="0.8" opacity="0.45" />
          ))}
        </g>
      ))}
      {/* Peacock dots */}
      {[20, 40, 60, 80].map((x, j) => (
        <g key={j}>
          <circle cx={x} cy={size * 0.88} r="4" fill="none" stroke={[c0, c1, c2][j % 3]} strokeWidth="0.8" opacity="0.5" />
          <circle cx={x} cy={size * 0.88} r="1.5" fill={[c0, c1, c2][j % 3]} opacity="0.6" />
        </g>
      ))}
      <text x={size / 2} y={size - 3} textAnchor="middle" fontSize="6" fill={c1} opacity="0.35" fontFamily="serif">Godna</text>
    </svg>
  );

  if (art.pattern === "weave") return (
    <svg viewBox={vb} className="w-full h-full" style={{ opacity: 0.8 }}>
      <rect width={size} height={size} fill={`rgba(${hex2rgb(c1)},0.06)`} />
      {/* Warp threads */}
      {Array.from({ length: 12 }).map((_, j) => (
        <line key={j} x1={8 + j * 8} y1="0" x2={8 + j * 8} y2={size}
          stroke={j % 2 === 0 ? c0 : c1} strokeWidth="1.8" opacity="0.35" />
      ))}
      {/* Weft threads */}
      {Array.from({ length: 14 }).map((_, j) => (
        <line key={j} x1="0" y1={7 + j * 7} x2={size} y2={7 + j * 7}
          stroke={j % 3 === 0 ? c2 : c0} strokeWidth={j % 4 === 0 ? "2.5" : "0.8"} opacity={j % 4 === 0 ? "0.55" : "0.25"} />
      ))}
      {/* Gold zari motif — lotus */}
      <ellipse cx={size / 2} cy={size / 2} rx="14" ry="9" fill="none" stroke={c0} strokeWidth="1.8" opacity="0.8" />
      {[0, 1, 2, 3, 4].map(k => {
        const a = (k * 72 * Math.PI) / 180;
        return <ellipse key={k} cx={size / 2 + Math.cos(a) * 14} cy={size / 2 + Math.sin(a) * 9}
          rx="5" ry="3" fill={c0} opacity="0.5"
          transform={`rotate(${k * 72},${size / 2 + Math.cos(a) * 14},${size / 2 + Math.sin(a) * 9})`} />;
      })}
      <circle cx={size / 2} cy={size / 2} r="4" fill={c0} opacity="0.7" />
    </svg>
  );

  if (art.pattern === "textile") return (
    <svg viewBox={vb} className="w-full h-full" style={{ opacity: 0.8 }}>
      <rect width={size} height={size} fill={`rgba(${hex2rgb(c0)},0.06)`} />
      {/* Reversible border pattern — Maheshwari signature */}
      <rect x="6" y="6" width={size - 12} height={size - 12} fill="none" stroke={c0} strokeWidth="3" opacity="0.4" />
      <rect x="12" y="12" width={size - 24} height={size - 24} fill="none" stroke={c1} strokeWidth="1" opacity="0.3" />
      {/* Temple geometric border elements */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map(j => (
        <rect key={j}
          x={10 + j * 11} y={8} width="8" height="8"
          fill={j % 2 === 0 ? c0 : c1} opacity="0.55" rx="1" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map(j => (
        <rect key={j}
          x={10 + j * 11} y={size - 16} width="8" height="8"
          fill={j % 2 === 0 ? c2 : c0} opacity="0.55" rx="1" />
      ))}
      {/* Central weave field */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle key={`${row}-${col}`}
            cx={22 + col * 14} cy={28 + row * 10}
            r="2.5" fill={[c0, c1, c2][(row + col) % 3]} opacity="0.35" />
        ))
      )}
    </svg>
  );

  // geometric (Korku)
  return (
    <svg viewBox={vb} className="w-full h-full" style={{ opacity: 0.8 }}>
      <rect width={size} height={size} fill={`rgba(${hex2rgb(c0)},0.06)`} />
      {[0, 1, 2, 3, 4].map(i => (
        <g key={i} transform={`translate(${12 + i * 17}, ${15 + (i % 3) * 20})`}>
          <polygon points="0,-12 10.4,6 -10.4,6" fill={[c0, c1, c2][i % 3]} opacity="0.65" />
          <polygon points="0,12 10.4,-6 -10.4,-6" fill={[c0, c1, c2][(i + 1) % 3]} opacity="0.45" />
        </g>
      ))}
      {[0, 1, 2, 3].map(i => (
        <g key={i} transform={`translate(${20 + i * 20}, 72)`}>
          <polygon points="0,-9 7.8,4.5 -7.8,4.5" fill={[c0, c1, c2][i % 3]} opacity="0.55" />
        </g>
      ))}
      {/* Basket weave reference lines */}
      {[0, 1, 2, 3, 4, 5].map(j => (
        <line key={j} x1={j * 17} y1="90" x2={8 + j * 17} y2="98"
          stroke={[c0, c1, c2][j % 3]} strokeWidth="1.2" opacity="0.25" />
      ))}
    </svg>
  );
};

// ─── IMAGE GALLERY ────────────────────────────────────────────────────────────

const ArtImageGallery: React.FC<{ images: ArtDetail["images"]; color: string }> = ({ images, color }) => {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(images.map(() => false));
  const [errored, setErrored] = useState<boolean[]>(images.map(() => false));
  const rgb = hex2rgb(color);

  const handleLoad = (i: number) => setLoaded(p => { const n = [...p]; n[i] = true; return n; });
  const handleErr = (i: number) => setErrored(p => { const n = [...p]; n[i] = true; return n; });

  return (
    <div className="flex flex-col gap-2">
      <div className="relative overflow-hidden rounded-xl" style={{ height: "210px" }}>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }} className="absolute inset-0">
            {!errored[active] ? (
              <img src={images[active].url} alt={images[active].caption}
                onLoad={() => handleLoad(active)} onError={() => handleErr(active)}
                className="w-full h-full object-cover"
                style={{ display: loaded[active] ? "block" : "none" }} />
            ) : null}
            {(!loaded[active] || errored[active]) && (
              <div className="w-full h-full flex items-center justify-center"
                style={{ background: `radial-gradient(circle at 40% 40%, rgba(${rgb},0.2), rgba(${rgb},0.05))` }}>
                <span className="font-sans text-[11px] text-white/25">Loading image…</span>
              </div>
            )}
            {loaded[active] && !errored[active] && (
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}>
                <p className="font-sans text-[10px] text-white/65 leading-[1.5]">{images[active].caption}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        {images.length > 1 && (
          <>
            <button onClick={() => setActive((active - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer text-white text-sm"
              style={{ background: "rgba(0,0,0,0.55)" }}>‹</button>
            <button onClick={() => setActive((active + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer text-white text-sm"
              style={{ background: "rgba(0,0,0,0.55)" }}>›</button>
            <div className="absolute top-2 right-2 font-sans text-[9px] px-1.5 py-0.5 rounded-full"
              style={{ background: "rgba(0,0,0,0.55)", color: "rgba(255,255,255,0.7)" }}>
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
              style={{ height: "46px", opacity: i === active ? 1 : 0.36, outline: i === active ? `2px solid ${color}` : "none", outlineOffset: "1px" }}>
              {!errored[i] ? (
                <img src={img.url} alt="" onLoad={() => handleLoad(i)} onError={() => handleErr(i)}
                  className="w-full h-full object-cover" style={{ display: loaded[i] ? "block" : "none" }} />
              ) : null}
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

// ─── INFO BLOCK ───────────────────────────────────────────────────────────────

const InfoRow: React.FC<{ icon: string; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
  <div className="flex flex-col gap-1 p-3 rounded-xl"
    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
    <span className="font-sans text-[9px] uppercase tracking-widest" style={{ color: `${color}88` }}>
      {icon} {label}
    </span>
    <span className="font-sans text-[11.5px] text-white/55 leading-[1.6]">{value}</span>
  </div>
);

// ─── ART CARD ─────────────────────────────────────────────────────────────────

const ArtCard: React.FC<{
  art: ArtDetail;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}> = ({ art, index, isSelected, onClick }) => {
  const [c0] = art.colors;
  const rgb = hex2rgb(c0);
  const [tab, setTab] = useState<"story" | "technique" | "visit">("story");

  useEffect(() => { if (!isSelected) setTab("story"); }, [isSelected]);

  return (
    <motion.div
      layout
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
        boxShadow: isSelected ? `0 24px 60px rgba(${rgb},0.18)` : "none",
      }}>

      {/* Pattern canvas — hidden when expanded */}
      {!isSelected && (
        <div className="h-44 flex items-center justify-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg,rgba(${rgb},0.2),rgba(${hex2rgb(art.colors[1])},0.1),rgba(${hex2rgb(art.colors[2])},0.15))` }}>
          <div className="w-36 h-36">
            <ArtPattern art={art} />
          </div>
          {/* GI tag badge */}
          {art.giTagged && (
            <div className="absolute top-3 right-3 font-sans text-[8px] px-2 py-0.5 rounded-full tracking-widest"
              style={{ background: "rgba(201,168,76,0.2)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)" }}>
              GI Tagged
            </div>
          )}
          <div className="absolute bottom-3 left-3 font-sans text-[9px] text-white/25">{art.era}</div>
        </div>
      )}

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          {isSelected && (
            <div className="w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden"
              style={{ background: `linear-gradient(135deg,rgba(${rgb},0.25),rgba(${rgb},0.08))` }}>
              <ArtPattern art={art} size={64} />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span className="font-display text-base text-white font-bold">{art.name}</span>
              {art.giTagged && (
                <span className="font-sans text-[8px] px-1.5 py-0.5 rounded-full"
                  style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.25)" }}>
                  GI
                </span>
              )}
            </div>
            <div className="font-sans text-[9px] tracking-wide mb-1" style={{ color: c0 }}>
              🏺 {art.tribe}
            </div>
            <div className="font-sans text-[10px] text-white/30">📍 {art.region}</div>
          </div>
        </div>

        {/* Collapsed */}
        {!isSelected && (
          <>
            <p className="font-sans text-[12px] text-white/50 leading-[1.7] mb-3">{art.desc}</p>
            <div className="flex gap-1.5 mb-3">
              {art.colors.map((c, j) => (
                <div key={j} className="w-3 h-3 rounded-full" style={{ background: c, boxShadow: `0 0 8px ${c}66` }} />
              ))}
              <span className="font-sans text-[10px] text-white/20 self-center ml-1">{art.era}</span>
            </div>
            <div className="font-sans text-[10px] text-white/20">Tap to read full story →</div>
          </>
        )}

        {/* Expanded */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <p className="font-sans text-[12px] text-white/45 leading-[1.7] mb-4">{art.desc}</p>

              {/* Images */}
              <div className="mb-4">
                <ArtImageGallery images={art.images} color={c0} />
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mb-4 p-1 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                {(["story", "technique", "visit"] as const).map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className="flex-1 py-1.5 rounded-lg font-sans text-[10px] tracking-wide uppercase cursor-pointer border-none transition-all duration-200"
                    style={{
                      background: tab === t ? `rgba(${rgb},0.18)` : "transparent",
                      color: tab === t ? c0 : "rgba(255,255,255,0.28)",
                    }}>
                    {t === "story" ? "📖 History" : t === "technique" ? "🔧 Craft" : "🗺️ Find It"}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {tab === "story" && (
                  <motion.div key="story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="font-sans text-[12.5px] text-white/55 leading-[1.95] mb-4">{art.history}</p>
                    {/* Key artist */}
                    <div className="p-3 rounded-xl mb-3"
                      style={{ background: `rgba(${rgb},0.06)`, border: `1px solid rgba(${rgb},0.12)` }}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5" style={{ color: `rgba(${rgb},0.55)` }}>
                        Key Artist / Figure
                      </div>
                      <p className="font-sans text-[11px] text-white/55 leading-[1.6]">{art.keyArtist}</p>
                    </div>
                    {/* Fun fact */}
                    <div className="p-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="font-sans text-[9px] uppercase tracking-widest mb-1.5 text-white/30">
                        💡 Did You Know
                      </div>
                      <p className="font-sans text-[11px] italic text-white/45 leading-[1.65]">{art.funFact}</p>
                    </div>
                  </motion.div>
                )}

                {tab === "technique" && (
                  <motion.div key="technique" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col gap-3">
                    <InfoRow icon="🎨" label="Medium" value={art.medium} color={c0} />
                    <InfoRow icon="👥" label="Who Makes It" value={art.whoMakes} color={c0} />
                    <InfoRow icon="🔧" label="Technique" value={art.technique} color={c0} />
                    <InfoRow icon="🙏" label="Ritual Context" value={art.ritual} color={c0} />
                    <InfoRow icon="📊" label="Status Today" value={art.modernStatus} color={c0} />
                    <div className="flex items-center gap-2 p-3 rounded-xl"
                      style={{ background: `rgba(${rgb},0.05)`, border: `1px solid rgba(${rgb},0.1)` }}>
                      <span className="font-sans text-[9px] uppercase tracking-widest" style={{ color: `rgba(${rgb},0.55)` }}>💰 Price Range:</span>
                      <span className="font-sans text-[11px] text-white/55">{art.price}</span>
                    </div>
                  </motion.div>
                )}

                {tab === "visit" && (
                  <motion.div key="visit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <InfoRow icon="🗺️" label="Where to See / Buy" value={art.whereToSee} color={c0} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Collapse */}
              <button onClick={e => { e.stopPropagation(); onClick(); }}
                className="w-full mt-4 py-2 rounded-xl flex items-center justify-center gap-1.5 font-sans text-[10px] border-none cursor-pointer"
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

// ─── WHERE TO EXPERIENCE ──────────────────────────────────────────────────────

const ExperienceCard: React.FC<{ item: typeof WHERE_TO_EXPERIENCE[0]; index: number }> = ({ item, index }) => {
  const rgb = hex2rgb(item.color);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="p-5 rounded-2xl"
      style={{ background: `rgba(${rgb},0.04)`, border: `1px solid rgba(${rgb},0.14)` }}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{item.icon}</span>
        <div>
          <div className="font-display text-sm text-white font-semibold">{item.city}</div>
          <div className="font-sans text-[10px]" style={{ color: item.color }}>{item.headline}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {item.places.map((place, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-[10px] mt-0.5 flex-shrink-0" style={{ color: item.color }}>▸</span>
            <span className="font-sans text-[11px] text-white/48 leading-[1.6]">{place}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const ArtPage: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ background: "#06060F" }}>
      <PageHero
        badge="8 Living Art Forms · 4,500 Years of Tradition"
        title="Art & Tribal Culture"
        subtitle="From the oldest metal-casting tradition on earth to tattoos that are passports to the afterlife — Madhya Pradesh's tribal arts are among humanity's greatest living achievements."
        gradient="linear-gradient(135deg,#080018 0%,#1A0040 40%,#3A0070 100%)"
        accent="#C77DFF"
      />

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ─── ART STATS ───────────────────────────────────────────── */}
        <div className="grid gap-3 mb-16" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))" }}>
          {ART_STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="p-4 rounded-2xl text-center"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(199,125,255,0.1)" }}>
              <div className="text-xl mb-2">{s.icon}</div>
              <div className="font-display text-2xl font-bold mb-1" style={{ color: "#C77DFF" }}>{s.value}</div>
              <div className="font-sans text-[11px] text-white/70 font-semibold mb-0.5">{s.label}</div>
              <div className="font-sans text-[9px] text-white/27 leading-[1.5]">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* ─── ART GRID ────────────────────────────────────────────── */}
        <SectionHeader badge="8 Art Forms" title="Tribal Arts of" titleAccent="Madhya Pradesh" />
        <p className="font-sans text-[13px] text-white/38 mb-8 leading-[1.8] max-w-2xl">
          Each art form carries its own cosmology, its own community of makers, and its own urgency. Some are thriving internationally. Some are disappearing in real time. All are irreplaceable. Tap any to read the full story.
        </p>

        <div className="grid gap-5 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))" }}>
          {TRIBAL_ARTS.map((art, i) => (
            <ArtCard
              key={art.id}
              art={art}
              index={i}
              isSelected={selected === art.id}
              onClick={() => setSelected(selected === art.id ? null : art.id)}
            />
          ))}
        </div>

        {/* ─── CONSERVATION NOTE ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl mb-20"
          style={{ background: "rgba(230,57,70,0.04)", border: "1px solid rgba(230,57,70,0.12)" }}>
          <div className="font-sans text-[9px] uppercase tracking-widest mb-3" style={{ color: "rgba(230,57,70,0.6)" }}>
            ⚠ A Note on Urgency
          </div>
          <p className="font-sans text-[13px] text-white/50 leading-[1.85] max-w-3xl mb-4">
            Of the 8 art forms documented here, 4 are classified as endangered or critically endangered by the MP Tribal Research Institute. The last practitioners of Baiga Godna are elderly. Fewer than 20 families practice authentic Bagh printing. Korku geometric painting has under 200 active practitioners. These traditions cannot be recreated once lost — they exist only in living human memory.
          </p>
          <p className="font-sans text-[12px] text-white/35 leading-[1.8]">
            The most meaningful thing a visitor can do: buy directly from artisans, not from middlemen. Visit Bagh village, not a Delhi craft fair. Attend Lokrang in Bhopal, not just a museum exhibition. The economics of direct purchase is the only thing keeping these practices alive.
          </p>
        </motion.div>

        {/* ─── WHERE TO EXPERIENCE ─────────────────────────────────── */}
        <SectionHeader badge="Field Guide" title="Where to" titleAccent="Experience It" />
        <div className="grid gap-4 mb-20" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}>
          {WHERE_TO_EXPERIENCE.map((item, i) => (
            <ExperienceCard key={item.city} item={item} index={i} />
          ))}
        </div>

        {/* ─── CLOSING QUOTE ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="w-10 h-px mx-auto mb-8" style={{ background: "rgba(199,125,255,0.3)" }} />
          <p className="font-display italic leading-[1.9] text-white/20 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(16px,2vw,24px)" }}>
            "The Gond artist does not paint a tree. She paints the tree's breathing — every line is the movement of something alive."
          </p>
          <div className="font-mono-mp text-[10px] mt-4" style={{ color: "rgba(199,125,255,0.3)" }}>
            — Bhajju Shyam, Gond Master · Dindori, Madhya Pradesh
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ArtPage;