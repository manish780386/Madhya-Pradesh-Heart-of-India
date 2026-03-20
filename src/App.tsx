import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/layout/Navbar.tsx";
import Footer from "./components/layout/Footer.tsx";
import ScrollProgress from "./components/layout/ScrollProgress.tsx";
import { routes } from "./router";

const NotFoundPage = lazy(() => import("./features/home/NotFoundPage.tsx"));

/* ── Page transition wrapper ─────────────────────────────────────────────── */
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/* ── Scroll to top on navigation ─────────────────────────────────────────── */
const ScrollReset: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

/* ── Page loader ─────────────────────────────────────────────────────────── */
const Loader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center" style={{ background: "#06060E" }}>
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-10 h-10 rounded-full border-2 animate-spin"
        style={{ borderColor: "rgba(201,168,76,0.2)", borderTopColor: "#C9A84C" }}
      />
      <span
        className="font-mono-mp text-[10px] text-white/25 tracking-[0.3em] uppercase"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Loading
      </span>
    </div>
  </div>
);

/* ── Animated routes ─────────────────────────────────────────────────────── */
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <PageTransition>
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              </PageTransition>
            }
          />
        ))}
        <Route
          path="*"
          element={
            <PageTransition>
              <Suspense fallback={<Loader />}>
                <NotFoundPage />
              </Suspense>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

/* ── Root App ────────────────────────────────────────────────────────────── */
const App: React.FC = () => {
  // darkMode state kept for future use — NOT passed to Navbar (it doesn't accept it)
  const [_darkMode] = useState(true);

  return (
    <div className="dark">
      <div style={{ background: "#06060E", minHeight: "100vh" }}>
        <BrowserRouter>
          <ScrollReset />
          <ScrollProgress />
          {/* Navbar takes NO props — it manages its own state internally */}
          <Navbar />
          <div className="pt-[72px]">
            <AnimatedRoutes />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;