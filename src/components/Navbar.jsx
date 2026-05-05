import { NavHashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <NavHashLink to="/"><strong>BONNET Vincent</strong></NavHashLink>
        </div>
        <ul>
          {/* Remonte tout en haut de la Home */}
          <li>
            <NavHashLink smooth to="/#top">Accueil</NavHashLink>
          </li>
          <li><NavHashLink to="/about">À propos</NavHashLink></li>
          
          {/* Descend à la section Compétences sur la Home */}
          <li>
            <NavHashLink  to="/skills">Compétences</NavHashLink>
          </li>
          
          <li><NavHashLink to="/projets">Projets</NavHashLink></li>
          <li><NavHashLink to="/experiences">Expériences</NavHashLink></li>
          <li><NavHashLink smooth to="/#contact">Contact</NavHashLink></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar