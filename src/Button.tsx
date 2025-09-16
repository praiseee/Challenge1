interface ButtonProps {
  children: React.ReactNode;
  href?: string;
}

function Button({ children, href = "#" }: ButtonProps) {
  return (
    <a
      href={href}
      className="text-sm font-semibold px-5 py-1 text-white rounded-3xl flex items-center justify-center border border-white"
    >
      {children}
    </a>
  );
}

export default Button;
