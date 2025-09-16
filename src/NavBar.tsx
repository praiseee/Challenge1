function NavBar() {
  return (
    <nav className="NavBar">

      <div className="logo">
        <img src="/path-to-logo.png" alt="Logo" />
      </div>

      <div className="navText">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#plans">Plans</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="navBtn">
        <a href="/login" className="logIn">Log In</a>
        <a href="/signup" className="signUp">Sign Up</a>
      </div>

    </nav>
  );
}

export default NavBar;
