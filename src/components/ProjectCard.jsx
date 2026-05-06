import { Icon } from '@iconify/react';

function ProjectCard({ title, description,  image, link, downloadLink, details, features }) {
  return (
    <div className="project-card">
      {/* Image avec lien si disponible */}
      <div className="project-image">
        <a href={link || "#"} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {/* Affichage des Technologies avec icônes (si details existe) */}
        {details && (
          <div className="tech-icons-container">
            <h4>Technologies :</h4>
            <div className="tech-icons-grid">
              {details.map((item, index) => (
                <div key={index} className="tech-icon-item" title={item.name}>
                  <Icon icon={item.icon} style={{ color: item.color }} width="25" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Affichage des Fonctionnalités (si features existe) */}
        {features && (
          <div className="features-container">
            <h4>Points clés :</h4>
            <ul className="features-list">
              {features.map((f, index) => (
                <li key={index}>
                  <Icon icon={f.icon} style={{ color: f.color }} width="20" />
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Boutons d'action */}
        <div className="project-actions">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn-action primary">
              <Icon icon="mdi:eye" width="18" /> Voir
            </a>
          )}
          {downloadLink && (
            <a href={downloadLink} download className="btn-action secondary">
              <Icon icon="mdi:download" width="18" /> Télécharger
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;