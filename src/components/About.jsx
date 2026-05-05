import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="info-perso">
        <h2 className="section-title">À propos de moi</h2>
        <p>
          Je m’appelle <strong>Vincent Bonnet</strong>, étudiant en <strong>BTS SIO</strong> option <strong>SLAM</strong> à Strasbourg. 
          Passionné par le développement web, j'aime concevoir des solutions numériques innovantes et performantes.
        </p>
        <p>
          Issu d'un parcours technique (BAC Pro SN), je combine aujourd'hui logique et créativité pour mener à bien mes projets informatiques.
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