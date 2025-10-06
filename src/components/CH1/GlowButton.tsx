import { motion } from "framer-motion";
import React from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  hoverEffect?: boolean;
}

export default function GlowButton({
  children,
  href = "#",
  className = "",
  style,
  hoverEffect = false,
}: GlowButtonProps) {
  return (
    <div className="py-25 px-175 justify-center items center">
      <motion.a
        href={href}
        className={`relative inline-flex items-center justify-center px-6 py-2 rounded-full bg-black text-white border border-transparent overflow-hidden ${className}`}
        style={style}
        whileHover={hoverEffect? { scale: 1.05, boxShadow: "0 0 15px rgba(86,219,172,0.6)" }: undefined}
        whileTap={hoverEffect ? { scale: 0.95 } : undefined}
        transition={{ type: "tween", stiffness: 300 }}
        >

        {/* Glow traveling along perimeter */}
        <motion.div
          className="absolute w-20 h-6 rounded-full pointer-events-none"
          style={{
            background: "rgba(86,219,172,0.8)",
            filter: "blur(5px)",
            top: "20%",
            left: "0%",
            zIndex: 0,
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />

        {/* Mask to cover the center of the glow */}
        <div className="absolute inset-0.5 rounded-full bg-black y-10 pointer-events-none"/>

        {/* Button content */}
        <span className="relative z-20 flex items-center justify-center">
          {children}
        </span>

      </motion.a>
    </div>

  );
}
