import { experiences } from '../data/experiences';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Experiences({ limit }) {
  if (!experiences) return null;
  // 1. On crée une copie et on trie par ID décroissant (du plus grand au plus petit)
    const sortedExperiences = [...experiences].sort((a, b) => b.id - a.id);
  
    // 2. On applique la limite sur les expériences
    const displayedExperiences = limit ? sortedExperiences.slice(0, limit) : sortedExperiences;
  

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">
        {limit ? "Expériences récentes" : "Parcours professionnel"}
      </h2>
      
      <div className="experience-list-container">
        {displayedExperiences.map((exp) => (
          <div key={exp.id} className="experience-entry">
            <div className="experience-card">
              <span className="exp-type">{exp.type}</span>
              <h3>{exp.company}</h3>
              
              <p className="exp-date">
                <strong>Date :</strong> {exp.displayDate ? exp.displayDate : `Du ${exp.startDate} au ${exp.endDate}`}
              </p>

              <ul className="missions-list">
                {exp.missions.map((mission, i) => (
                  <li key={i}>{mission}</li>
                ))}
              </ul>

              <div className="card-footer">
                <a href={exp.locationLink} target="_blank" rel="noreferrer" className="exp-location">
                  <Icon icon="mdi:location" /> {exp.location}
                </a>

                <Link to={`/experience/${exp.id}`} className="btn-details">
                  Détails <Icon icon="mdi:arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Si on est sur l'accueil (limit présent), on affiche le bouton pour tout voir */}
      {limit && (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/experiences" className="btn-view-all">
            Voir toutes les expériences
          </Link>
        </div>
      )}
    </section>
  );
}

export default Experiences;