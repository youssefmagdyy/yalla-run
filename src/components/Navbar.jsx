const Navbar = () => {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

    return (
      <header className="nav">
        <div className="nav-left">
          <img src="/yallaLogo.jpg" alt="YALLA logo" className="nav-logo" />
        </div>
        <span onClick={() => scrollToSection("community")} className="nav-cta">Join</span>
      </header>
    )
}

export default Navbar;