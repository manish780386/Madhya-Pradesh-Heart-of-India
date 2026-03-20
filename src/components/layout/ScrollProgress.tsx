import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] origin-left"
      style={{
        height: 2,
        scaleX,
        background: "linear-gradient(90deg,#8B6914,#C9A84C,#E8C96A,#C9A84C,#8B6914)",
        boxShadow: "0 0 12px rgba(201,168,76,0.6)",
      }}
    />
  );
};

export default ScrollProgress;



