import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#06060E" }}>
      <div className="text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
          className="text-8xl mb-8">🗺️</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display font-semibold text-white mb-4" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
          Page Not Found
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="font-sans text-[15px] text-white/40 mb-10 max-w-xs mx-auto leading-[1.7]">
          Even the most experienced explorer takes a wrong turn sometimes.
        </motion.p>
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mx-auto px-8 py-3.5 rounded-full font-sans font-semibold text-sm cursor-pointer"
          style={{ background: "linear-gradient(135deg,#8B6914,#C9A84C)", border: "none", color: "#06060E" }}>
          <ArrowLeft size={15} /> Return Home
        </motion.button>
      </div>
    </div>
  );
};

export default NotFoundPage;