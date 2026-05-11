import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <NavHashLink to="/" onClick={closeMenu}>
            <strong>BONNET Vincent</strong>
          </NavHashLink>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </button>

        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <NavHashLink to="/" onClick={closeMenu}>Accueil</NavHashLink>
          </li>
          {/* Les pages réelles gardent le marquage actif automatique de React Router */}
          <li><NavHashLink to="/about" onClick={closeMenu}>À propos</NavHashLink></li>
          <li><NavHashLink to="/experiences" onClick={closeMenu}>Expériences</NavHashLink></li>
          <li><NavHashLink to="/skills" onClick={closeMenu}>Compétences</NavHashLink></li>
          <li><NavHashLink to="/projets" onClick={closeMenu}>Projets</NavHashLink></li>
          <li><NavHashLink to="/veille" onClick={closeMenu}>Veille</NavHashLink></li>
          <li><NavHashLink to="/contact" onClick={closeMenu}>Contact</NavHashLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;