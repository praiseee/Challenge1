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
      <div className="flex space-x-4">
        <a 
          href="/login" 
          className="text-sm font-semibold px-5 py-1 text-white rounded-3xl flex items-center justify-center border border-white"
        >
          Log In
        </a>

        <a 
          href="/signup" 
          className="text-sm font-semibold px-5 py-1 text-black rounded-3xl flex items-center justify-center border border-white bg-white"
        >
          Sign Up
        </a>
      </div>

    </nav>
  );
}

export default NavBar;
