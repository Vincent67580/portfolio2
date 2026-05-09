import { Link } from 'react-router-dom';
import { veilleData } from '../data/veille';
import { Icon } from '@iconify/react';

function VeilleTeaser() {
  return (
    <section className="veille-teaser">
      <div className="container">
         <h2 className="section-title">Veille Technologique</h2>
        <div className="teaser-content">
          <div className="teaser-text">
            <h3>{veilleData.subject}</h3>
            <p>{veilleData.introduction.substring(0, 150)}...</p>
          </div>
          <div className="teaser-icon">
            <Icon icon="lucide:bot" width="100" className="floating-icon" />
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/veille" className="btn-view-all">
                En savoir plus <Icon icon="mdi:arrow-right" />
            </Link>
        </div>
      </div>
    </section>
  );
}

export default VeilleTeaser;