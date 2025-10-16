import { motion } from "framer-motion";

// Defines all the inputs (props) the button can accept.
interface BtnProps {
  children: React.ReactNode; 
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: string;
  hoverEffect?: boolean; // new optional prop to enable/disable hover animation
}

function Button({
  children,
  href = "#",
  className = "",
  style,
  icon,
  hoverEffect = false,}: BtnProps) {
  return (
    <motion.a
      href={href}
      className={`text-sm font-semibold px-5 py-1 rounded-3xl flex items-center justify-center border border-white ${className}`}
      style={style} // Styles passed as props

      // Only apply hover or tap animations if hoverEffect is true
      whileHover={hoverEffect ? { scale: 1.08, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.6)" } : undefined}
      whileTap={hoverEffect ? { scale: 0.95 } : undefined}

      // transition can stay the same; it will only be applied if whileHover/whileTap exist
      transition={{ type: "tween", stiffness: 300 }}
    >
      {icon && <img src={icon} alt="" className="w-5 h-5 mr-2" />}
      {children}
    </motion.a>
  );
}

export default Button;
