import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, ChevronLeft, ChevronDown } from "lucide-react";
import { useScrolled, useWishlist } from "../../hooks/index.ts";
import { NAV_ITEMS } from "../../router/index.ts";

// ─── Per-route accent colors ──────────────────────────────────────────────────
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

// ─── Group nav items: primary (always visible) + secondary (in "More" dropdown)
// Primary = 6 most important, Secondary = rest (Rivers, Languages, etc.)
const PRIMARY_PATHS = ["/", "/cities", "/wildlife", "/festivals", "/food", "/plan"];
const PRIMARY_ITEMS = NAV_ITEMS.filter(i => PRIMARY_PATHS.includes(i.path));
const MORE_ITEMS    = NAV_ITEMS.filter(i => !PRIMARY_PATHS.includes(i.path));

// ─── Routes where ← Back replaces logo
const BACK_ROUTES = ["/rivers", "/languages"];

// ─── Helper: hex → "r,g,b"
const toRGB = (hex: string) =>
  hex.replace("#","").match(/.{2}/g)!.map(h => parseInt(h,16)).join(",");

// ─── Nav Link shared component ────────────────────────────────────────────────
const NavItem: React.FC<{
  path: string;
  label: string;
  onClick?: () => void;
  size?: "sm" | "xs";
}> = ({ path, label, onClick, size = "sm" }) => {
  const accent = ROUTE_ACCENT[path] ?? "#C9A84C";
  const rgb    = toRGB(accent);

  return (
    <NavLink
      to={path}
      end={path === "/"}
      onClick={onClick}
      className={`relative ${size === "xs" ? "px-3 py-1.5 text-[11px]" : "px-3.5 py-1.5 text-[11.5px]"} rounded-full transition-all duration-250 group whitespace-nowrap`}
      style={({ isActive }) => ({
        color:      isActive ? accent : "rgba(255,255,255,0.5)",
        background: isActive ? `rgba(${rgb},0.11)` : "transparent",
        border:     isActive ? `1px solid rgba(${rgb},0.25)` : "1px solid transparent",
        fontWeight: isActive ? 600 : 400,
      })}
    >
      {label}
      {/* hover glow */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: "rgba(255,255,255,0.04)" }} />
      {/* hover underline */}
      <span className="absolute bottom-0.5 left-1/2 h-[1.5px] w-0 rounded-full transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2"
        style={{ background: accent }} />
    </NavLink>
  );
};

// ─── "More" dropdown ─────────────────────────────────────────────────────────
const MoreDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Check if current route is inside MORE_ITEMS
  const isMoreActive = MORE_ITEMS.some(i => i.path === location.pathname);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {/* Trigger */}
      <button
        className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[11.5px] transition-all duration-250 border-none cursor-pointer"
        style={{
          color:      isMoreActive ? "#C9A84C" : "rgba(255,255,255,0.5)",
          background: isMoreActive ? "rgba(201,168,76,0.11)" : "transparent",
          border:     isMoreActive ? "1px solid rgba(201,168,76,0.25)" : "1px solid transparent",
          fontWeight: isMoreActive ? 600 : 400,
        }}
      >
        More
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.18 }}>
          <ChevronDown size={11} />
        </motion.span>
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full right-0 mt-2 py-1.5 rounded-2xl overflow-hidden"
            style={{
              background:    "rgba(8,8,22,0.98)",
              border:        "1px solid rgba(255,255,255,0.09)",
              backdropFilter:"blur(32px)",
              boxShadow:     "0 16px 48px rgba(0,0,0,0.55)",
              minWidth:      160,
              zIndex:        1000,
            }}
          >
            {MORE_ITEMS.map(item => {
              const accent = ROUTE_ACCENT[item.path] ?? "#C9A84C";
              const rgb    = toRGB(accent);
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-[12.5px] transition-all duration-200 group"
                  style={({ isActive }) => ({
                    color:      isActive ? accent : "rgba(255,255,255,0.55)",
                    background: isActive ? `rgba(${rgb},0.1)` : "transparent",
                    fontWeight: isActive ? 600 : 400,
                  })}
                >
                  {/* Color dot */}
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-150"
                    style={{ background: accent }} />
                  {item.label}
                </NavLink>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Main Navbar ─────────────────────────────────────────────────────────────
const Navbar: React.FC = () => {
  const scrolled = useScrolled(80);
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { wishlist } = useWishlist();

  const isHome   = location.pathname === "/";
  const showBack = BACK_ROUTES.includes(location.pathname);
  const accent   = ROUTE_ACCENT[location.pathname] ?? "#C9A84C";
  const rgb      = toRGB(accent);

  return (
    <>
      {/* ══════════════════════ DESKTOP NAV ══════════════════════ */}
      <motion.nav
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 inset-x-0 mx-auto z-[900] hidden lg:flex items-center justify-between gap-4 px-4 py-2 rounded-full"
        style={{
          maxWidth: 1080,
          background: scrolled
            ? "rgba(6,6,16,0.97)"
            : isHome
            ? "rgba(6,6,16,0.4)"
            : "rgba(6,6,16,0.92)",
          backdropFilter: "blur(28px) saturate(180%)",
          border:    "1px solid rgba(255,255,255,0.07)",
          boxShadow: scrolled
            ? "0 8px 40px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.04)"
            : "0 4px 24px rgba(0,0,0,0.4)",
          transition: "background 0.4s, box-shadow 0.4s",
        }}
      >
        {/* LEFT — logo / back btn */}
        <div className="flex-shrink-0" style={{ minWidth: 100 }}>
          <AnimatePresence mode="wait">
            {showBack ? (
              <motion.button key="back"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
                onClick={() => navigate(-1)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] border-none cursor-pointer transition-all duration-200 hover:scale-105 flex-shrink-0"
                style={{
                  background: `rgba(${rgb},0.1)`,
                  color:  accent,
                  border: `1px solid rgba(${rgb},0.25)`,
                }}
              >
                <ChevronLeft size={13} strokeWidth={2.5} />
                Back
              </motion.button>
            ) : (
              <motion.button key="logo"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
                onClick={() => navigate("/")}
                className="font-display text-[13px] font-bold tracking-[0.18em] border-none cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0"
                style={{
                  background:  "none",
                  color:       "#C9A84C",
                  textShadow:  "0 0 28px rgba(201,168,76,0.45)",
                }}
              >
                मध्यप्रदेश
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* CENTER — primary nav items + More dropdown */}
        <div className="flex items-center gap-0.5 flex-1 justify-center">
          {PRIMARY_ITEMS.map(item => (
            <NavItem key={item.path} path={item.path} label={item.label} />
          ))}
          {/* "More" dropdown for remaining routes */}
          {MORE_ITEMS.length > 0 && <MoreDropdown />}
        </div>

        {/* RIGHT — wishlist */}
        <div className="flex-shrink-0" style={{ minWidth: 100, display: "flex", justifyContent: "flex-end" }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/plan")}
            className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border-none cursor-pointer transition-all duration-300"
            style={{
              background: wishlist.length > 0 ? "rgba(201,168,76,0.1)" : "rgba(255,255,255,0.04)",
              border:     `1px solid ${wishlist.length > 0 ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.08)"}`,
              color:      wishlist.length > 0 ? "#C9A84C" : "rgba(255,255,255,0.5)",
              boxShadow:  wishlist.length > 0 ? "0 0 20px rgba(201,168,76,0.14)" : "none",
            }}
          >
            <Heart size={13} style={{ fill: wishlist.length > 0 ? "currentColor" : "none" }} />
            <span className="text-[11px] font-medium">
              {wishlist.length > 0 ? wishlist.length : "Plan"}
            </span>
            {wishlist.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] text-[9px] flex items-center justify-center rounded-full font-bold"
                style={{ background: "#C9A84C", color: "#06060E" }}
              >
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                >
                  {wishlist.length}
                </motion.span>
              </motion.span>
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* ══════════════════════ MOBILE BAR ══════════════════════ */}
      <div
        className="fixed top-3 left-3 right-3 z-[900] flex lg:hidden items-center justify-between px-4 py-2.5 rounded-2xl"
        style={{
          background:    "rgba(6,6,16,0.96)",
          backdropFilter:"blur(24px)",
          border:        "1px solid rgba(255,255,255,0.08)",
          boxShadow:     "0 4px 20px rgba(0,0,0,0.5)",
        }}
      >
        {/* Logo / Back */}
        <AnimatePresence mode="wait">
          {showBack ? (
            <motion.button key="mb-back"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-[12px] border-none cursor-pointer"
              style={{ background: "none", color: accent }}
            >
              <ChevronLeft size={15} strokeWidth={2.5} />
              Back
            </motion.button>
          ) : (
            <motion.button key="mb-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => navigate("/")}
              className="font-display text-[13px] font-bold tracking-widest border-none cursor-pointer"
              style={{ background: "none", color: "#C9A84C" }}
            >
              मध्यप्रदेश
            </motion.button>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-3">
          {/* Wishlist */}
          <button
            onClick={() => navigate("/plan")}
            className="relative border-none cursor-pointer"
            style={{
              background: "none",
              color: wishlist.length > 0 ? "#C9A84C" : "rgba(255,255,255,0.6)",
            }}
          >
            <Heart size={17} style={{ fill: wishlist.length > 0 ? "currentColor" : "none" }} />
            {wishlist.length > 0 && (
              <span
                className="absolute -top-1 -right-1 w-4 h-4 text-[9px] flex items-center justify-center rounded-full font-bold animate-pulse"
                style={{ background: "#C9A84C", color: "#06060E" }}
              >
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="border-none cursor-pointer"
            style={{ background: "none", color: "rgba(255,255,255,0.7)" }}
          >
            <Menu size={21} />
          </button>
        </div>
      </div>

      {/* ══════════════════════ MOBILE DRAWER ══════════════════════ */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-[950]"
              style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(8px)" }}
              onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 z-[960] flex flex-col"
              style={{
                width:         272,
                background:    "rgba(6,6,18,0.99)",
                borderLeft:    "1px solid rgba(255,255,255,0.07)",
                backdropFilter:"blur(40px)",
              }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-5 py-5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  className="font-display text-[15px] font-bold tracking-widest"
                  style={{ color: "#C9A84C", textShadow: "0 0 24px rgba(201,168,76,0.4)" }}
                >
                  मध्यप्रदेश
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full border-none cursor-pointer transition-all duration-200 hover:rotate-90"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* All nav links — ALL of them, no "More" needed on mobile */}
              <div className="flex flex-col gap-0.5 px-3 py-4 flex-1 overflow-y-auto">
                {NAV_ITEMS.map((item, i) => {
                  const itemAccent = ROUTE_ACCENT[item.path] ?? "#C9A84C";
                  const itemRgb    = toRGB(itemAccent);
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.035, duration: 0.25 }}
                    >
                      <NavLink
                        to={item.path}
                        end={item.path === "/"}
                        onClick={() => setDrawerOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] transition-all duration-200"
                        style={({ isActive }) => ({
                          color:      isActive ? itemAccent : "rgba(255,255,255,0.52)",
                          background: isActive ? `rgba(${itemRgb},0.1)` : "transparent",
                          borderLeft: isActive ? `2px solid ${itemAccent}` : "2px solid transparent",
                          fontWeight: isActive ? 600 : 400,
                        })}
                      >
                        {/* Colored dot */}
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: itemAccent, opacity: 0.7 }}
                        />
                        {item.label}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer footer CTA */}
              <div
                className="px-4 py-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <button
                  onClick={() => { navigate("/plan"); setDrawerOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-sans text-[13px] font-semibold cursor-pointer border-none transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg,#8B6914,#C9A84C,#E8C96A)",
                    color:      "#06060E",
                    boxShadow:  "0 4px 20px rgba(201,168,76,0.28)",
                  }}
                >
                  <Heart size={13} style={{ fill: "currentColor" }} />
                  Plan My Trip
                  {wishlist.length > 0 && (
                    <span
                      className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                      style={{ background: "rgba(0,0,0,0.25)" }}
                    >
                      {wishlist.length} saved
                    </span>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;