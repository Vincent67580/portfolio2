// src/components/Hero.jsx
function Hero() {
  return (
    <div className="hero-wrapper">
      {/* Badge placé HORS du cadre rouge */}
      <div className="availability-badge">
        <span className="pulse-dot"></span>
        <span>Recheche d'une alternance Bachelor CDA (Sept. 2026)</span>
      </div>

      <header className="hero-banner">
        <div className="hero-content">
          <h1>Bienvenue sur mon portfolio</h1> 
          <p className="hero-subtitle">
            Découvrez mon univers, mes projets et mes compétences en développement.
          </p>
        </div>
      </header>
    </div>
  );
}

export default Hero;