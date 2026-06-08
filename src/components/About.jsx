import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="info-perso">
        <h2 className="section-title">À propos de moi</h2>
        <p>
          Je m’appelle <strong>Vincent Bonnet</strong>. Je viens de terminer mon cursus de <strong>BTS SIO</strong> option <strong>SLAM</strong> à Strasbourg et je suis actuellement dans l'attente des résultats des examens.
        </p>
        <p>
          Déterminé à poursuivre mon parcours, je suis activement à la recherche d'une <strong>alternance</strong> afin d'intégrer le <strong>Bachelor CDA (Concepteur Développeur d’Applications)</strong> au <strong>CCI Campus Strasbourg</strong> pour l'année 2026-2027.
        </p>
        <p>
          Issu d'un parcours technique (BAC Pro SN), je combine aujourd'hui logique et créativité pour concevoir des applications logicielles et numériques performantes.
        </p>
        
        <div style={{ marginTop: '20px' }}>
          <Link to="/about" className="btn-view-all">
            En savoir plus sur mon parcours <Icon icon="mdi:arrow-right" inline={true} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;