import { NavHashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          {/* Remonte en haut de la page actuelle ou va à l'accueil */}
          <NavHashLink smooth to="/#top"><strong>BONNET Vincent</strong></NavHashLink>
        </div>
        <ul>
          <li>
            <NavHashLink smooth to="/#top">Accueil</NavHashLink>
          </li>
          <li><NavHashLink to="/about">À propos</NavHashLink></li>
          <li><NavHashLink to="/experiences">Expériences</NavHashLink></li>
          <li><NavHashLink to="/skills">Compétences</NavHashLink></li>
          <li><NavHashLink to="/projets">Projets</NavHashLink></li>
          <li><NavHashLink to="/veille">Veille</NavHashLink></li>
          <li>
            {/* Si la section contact est sur la page d'accueil */}
            <NavHashLink smooth to="/#contact">Contact</NavHashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;