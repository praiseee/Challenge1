function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="logo">
        <img src="/path-to-logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#services" className="hover:text-blue-500">Services</a></li>
        <li><a href="#plans" className="hover:text-blue-500">Plans</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        <a href="/login" className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">Log In</a>
        <a href="/signup" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Sign Up</a>
      </div>
    </nav>
  );
}

export default NavBar;
