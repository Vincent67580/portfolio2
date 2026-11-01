// src/components/Hero.jsx
function Hero() {
  return (
    <div className="hero-wrapper">
      {/* Badge de disponibilité */}
      <div className="availability-badge">
        <span className="pulse-dot"></span>
        <span>Recherche d'emploi en informatique (Disponible immédiatement)</span>
      </div>

      <header className="hero-banner">
        <div className="hero-content">
          <h1>Bienvenue sur mon portfolio</h1> 
          <p className="hero-subtitle">
            BTS SIO SLAM & BAC Pro SN | Passionné par le code, la logique logicielle et le support technique, prêt à relever de nouveaux défis.
          </p>
        </div>
      </header>
    </div>
  );
}

export default Hero;