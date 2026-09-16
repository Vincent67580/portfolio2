import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function ProjectCard({ id, title, description, image, link, downloadLink, details, features }) {
  // État pour savoir si la modale d'image est ouverte
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="project-card">
        {/* Image avec clic pour agrandir */}
        <div className="project-image" onClick={() => setIsModalOpen(true)}>
          <img src={image} alt={title} style={{ cursor: 'pointer' }} />
          <div className="image-overlay">
            <Icon icon="mdi:magnify-plus-outline" width="30" />
          </div>
        </div>

        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>

          {/* Technologies */}
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

          {/* Points clés */}
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
            <Link to={`/projet/${id}`} className="btn-action primary">
              <Icon icon="mdi:information-outline" width="18" /> Détails
            </Link>

            {link && link !== "#" && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="btn-action secondary">
                {link.endsWith('.txt') ? (
                  <>
                    <Icon icon="mdi:code-tags" width="18" /> Code
                  </>
                ) : (
                  <>
                    <Icon icon="mdi:eye" width="18" /> Démo
                  </>
                )}
              </a>
            )}
            
            {downloadLink && (
              <a href={downloadLink} download className="btn-action secondary">
                <Icon icon="mdi:download" width="18" /> .ZIP
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modale d'agrandissement de l'image */}
      {isModalOpen && (
        <div className="image-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="btn-close-modal" 
              onClick={() => setIsModalOpen(false)}
              aria-label="Fermer"
            >
              <Icon icon="mdi:close" width="24" />
            </button>
            <img src={image} alt={title} />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;