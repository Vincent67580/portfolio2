import { useState } from 'react';
import { experiences } from '../data/experiences';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Experiences({ limit }) {
  if (!experiences) return null;

  // Tri par ID décroissant (du plus récent au plus ancien)
  const sortedExperiences = [...experiences].sort((a, b) => b.id - a.id);
  const displayedExperiences = limit ? sortedExperiences.slice(0, limit) : sortedExperiences;

  const [activeTab, setActiveTab] = useState(0);
  const currentExp = displayedExperiences[activeTab] || displayedExperiences[0];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">
        {limit ? "Expériences récentes" : "Parcours professionnel"}
      </h2>

      <div className="experiences-tabs-wrapper">
        {/* Sidebar des onglets / cartes rétractées */}
        <div className="tabs-sidebar">
          {displayedExperiences.map((exp, index) => (
            <button
              key={exp.id}
              className={`tab-item ${index === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <div className="tab-item-header">
                <span className="tab-company">{exp.company}</span>
                <span className="tab-type">{exp.type}</span>
              </div>
              <span className="tab-date">
                {exp.displayDate ? "Dates multiples" : `${exp.startDate} - ${exp.endDate}`}
              </span>
            </button>
          ))}
        </div>

        {/* Panneau de détail de l'expérience sélectionnée */}
        <div className="tab-content-panel">
          <div className="tab-panel-header">
            <div>
              <span className="exp-type-badge">{currentExp.type}</span>
              <h3>{currentExp.company}</h3>
            </div>
            {currentExp.logo && (
              <img src={currentExp.logo} alt={`Logo ${currentExp.company}`} className="tab-company-logo" />
            )}
          </div>

          <p className="exp-date-info">
            <Icon icon="mdi:calendar-month-outline" />
            <span>
              <strong>Période :</strong> {currentExp.displayDate ? currentExp.displayDate : `Du ${currentExp.startDate} au ${currentExp.endDate}`}
            </span>
          </p>

          <div className="exp-missions-wrapper">
            <h4>Missions principales</h4>
            <ul className="missions-list">
              {currentExp.missions.map((mission, i) => (
                <li key={i}>{mission}</li>
              ))}
            </ul>
          </div>

          <div className="card-footer">
            <a href={currentExp.locationLink} target="_blank" rel="noreferrer" className="exp-location">
              <Icon icon="mdi:location" /> {currentExp.location}
            </a>

            <Link to={`/experience/${currentExp.id}`} className="btn-details">
              Détails complets <Icon icon="mdi:arrow-right" />
            </Link>
          </div>
        </div>
      </div>

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