"use client";
import { motion } from "framer-motion";

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] h-125 w-125 rounded-full bg-[#1fe96c]/20 blur-[120px]"
      />
      
      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[40%] -right-[10%] h-100 w-100 rounded-full bg-[#1fe96c]/10 blur-[100px]"
      />
    </div>
  );
};

export default AmbientBackground;