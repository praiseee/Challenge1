import Button from './Button.tsx';

function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 text-white flex items-center justify-between px-4 md:px-20 py-6 bg-black/80 backdrop-blur-md">
      
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="/"><img src="images/Logo.png" alt="Logo" className="h-6" /></a>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-8 text-m">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-5">
        <Button href="/signUp" className="bg-white text-black border border-black">Sign Up</Button>
      </div>

    </nav>
  );
}

export default NavBar;
