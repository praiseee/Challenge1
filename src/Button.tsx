//Defines a TypeScript interface describing the props the Button component accepts.
interface BtnProps {
  children: React.ReactNode; //anything React can render
  href?: string; //optional prop
  className?: string; //allow extra styles
  style?: React.CSSProperties;
}

// declares a React function component called Button
// children > required content
// default value if no href is provided #
// classname default empty string if no extra styles are passed

function Button({ children, href = "#", className = "", style }: BtnProps) {
  return (
    <a
      href={href}
      className={`text-sm font-semibold px-5 py-1 rounded-3xl flex items-center justify-center border border-white ${className}`}
      style={style} // style
    >
      {children}
    </a>
  );
}

export default Button;


