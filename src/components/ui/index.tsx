import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../../hooks";

// ── SectionHeader ──────────────────────────────────────────────────────────
interface SectionHeaderProps {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge, title, titleAccent, subtitle, center = true,
}) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`mb-16 ${center ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-badge mb-5"
      >
        {badge}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display font-semibold text-white mb-4"
        style={{ fontSize: "clamp(32px,4vw,56px)", lineHeight: 1.1 }}
      >
        {title}{" "}
        {titleAccent && (
          <span className="text-gold-shimmer">{titleAccent}</span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-[15px] text-white/45 leading-[1.8] max-w-xl"
          style={{ margin: center ? "0 auto" : undefined }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

// ── PageHero ───────────────────────────────────────────────────────────────
interface PageHeroProps {
  badge: string;
  title: string;
  subtitle?: string;
  gradient: string;
  accent?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge, title, subtitle, gradient, accent = "#C9A84C", children,
}) => (
  <div
    className="relative flex items-end overflow-hidden"
    style={{ minHeight: "52vh", background: gradient }}
  >
    {/* Noise */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
    {/* Bottom fade */}
    <div className="absolute inset-0 img-overlay" />
    {/* Glow orb */}
    <div className="absolute rounded-full pointer-events-none"
      style={{ width: 600, height: 600, background: `${accent}12`, top: "-30%", right: "-10%", filter: "blur(120px)", animation: "floatA 14s ease-in-out infinite" }} />

    <div className="relative z-[2] px-8 md:px-16 pb-16 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="section-badge mb-4" style={{ borderColor: `${accent}30`, color: accent }}>
        {badge}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display font-semibold text-white mb-4"
        style={{ fontSize: "clamp(42px,6vw,80px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display italic text-xl text-white/55 max-w-xl leading-[1.7]">
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
  </div>
);

// ── Badge ──────────────────────────────────────────────────────────────────
interface BadgeProps {
  label: string;
  color?: string;
  bg?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, color = "#C9A84C", bg }) => (
  <span
    className="inline-flex items-center font-mono-mp text-[9px] tracking-widest uppercase px-2.5 py-[3px] rounded-full border"
    style={{
      color,
      borderColor: `${color}35`,
      background: bg ?? `${color}10`,
    }}
  >
    {label}
  </span>
);

// ── Divider ────────────────────────────────────────────────────────────────
export const GoldDivider: React.FC = () => (
  <div className="flex items-center gap-4 my-16">
    <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
    <div className="w-1.5 h-1.5 rounded-full rotate-45" style={{ background: "rgba(201,168,76,0.4)" }} />
    <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
  </div>
);