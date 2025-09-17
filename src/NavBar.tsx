import Button from './Button.tsx';

function NavBar() {
  return (
    // NavBar
    <nav className="text-white flex items-center justify-between px-20 py-8">

      {/* Logo Section */}
      <div className="flex items-center">
        <img src="images/Logo.png" alt="Logo" className="h-6"/>
      </div>

      {/* Nav Links */}
      <div className="flex items-center">
        <ul className="flex space-x-8 pl-22 text-m">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#plans">Plans</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-5">
        <Button href="/logIn">Log In</Button>
        <Button href="/signUp" className="bg-white text-black border-black">Sign Up</Button>
      </div>

    </nav>
  );
}

export default NavBar;
