// Defines all the inputs (props) the button can accept.
interface BtnProps {
  children: React.ReactNode; 
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: string;
}

function Button({ children, href = "#", className = "", style, icon }: BtnProps) {
  return (
    <a
      href={href}
      className={`text-sm font-semibold px-5 py-1 rounded-3xl flex items-center justify-center border border-white ${className}`}
      style={style} // a prop you pass into the component
    >
      {icon && <img src={icon} alt="" className="w-5 h-5 mr-2" />}
      {children}
    </a>
  );
}

export default Button;
