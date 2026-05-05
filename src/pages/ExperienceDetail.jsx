import { useParams, Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

function ExperienceDetail() {
  const { id } = useParams();
  const exp = experiences.find(e => e.id === parseInt(id));

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!exp) return <div className="container">Stage non trouvé</div>;

  return (
    <div className="detail-page-wrapper">
      <div className="container">
        <Link to="/experiences" className="btn-back">
          <Icon icon="mdi:arrow-left" /> Retour aux stages
        </Link>

        <header className="detail-header">
          <h1>{exp.company}</h1>
          <p className="subtitle">{exp.type}</p>
        </header>

        {/* INTRODUCTION */}
        <section className="detail-card intro-section">
          <p>{exp.intro}</p>
        </section>

        {/* GRILLE D'INFOS GÉNÉRALES */}
        <div className="stage-info-grid">
          <div className="info-card">
            <h3>Entreprise</h3>
            {exp.logo && <img src={exp.logo} alt="Logo" className="company-logo-detail" />}
            <p><strong>{exp.company}</strong><br />{exp.location}</p>
          </div>
          <div className="info-card">
            <h3>Période</h3>
            <p>{exp.displayDate || `Du ${exp.startDate} au ${exp.endDate}`}</p>
          </div>
          <div className="info-card">
            <h3>Missions Clés</h3>
            <ul >
              {exp.missions.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        </div>

        {/* MISSIONS DÉTAILLÉES (Boucle dynamique) */}
        {exp.detailedMissions && exp.detailedMissions.length > 0 && (
        <section className="detailed-content">
          <h2>Missions détaillées</h2>
          {exp.detailedMissions?.map((item, index) => (
            <div key={index} className="mission-block">
              <h3>{item.title}</h3>
              <p style={{ 'white-space': 'pre-line' }}>{item.content}</p>
              {item.subList && (
                <ul className="sub-list">
                  {item.subList.map((sub, i) => <li key={i}>{sub}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>
        )}
      </div>
    </div>
  );
}

export default ExperienceDetail;