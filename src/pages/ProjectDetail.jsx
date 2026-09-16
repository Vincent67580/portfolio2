import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { projects } from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // État pour la modale d'image
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-error-container">
        <h2>Projet introuvable</h2>
        <p>Le projet demandé n'existe pas ou a été déplacé.</p>
        <Link to="/projets" className="btn-action primary">Retour aux projets</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <button onClick={() => navigate(-1)} className="btn-back" style={{ cursor: 'pointer', border: 'none' }}>
        Retour aux projets
      </button>

      {/* Conteneur principal détaillé */}
      <main className="detail-card">
        
        {/* En-tête du projet */}
        <header className="detail-header-project">
          <h1 className="section-title-project">{project.title}</h1>
          
          <div className="project-links">
            {project.link && project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-action primary">
                {project.link.endsWith('.txt') ? (
                  <>
                    <Icon icon="mdi:code-tags" width="18" /> Voir le script / code
                  </>
                ) : (
                  <>
                    <Icon icon="mdi:open-in-new" width="18" /> Démo / En ligne
                  </>
                )}
              </a>
            )}

            {project.downloadLink && (
              <a href={project.downloadLink} download className="btn-action secondary">
                <Icon icon="mdi:download" width="18" /> Télécharger le .ZIP (Sources)
              </a>
            )}
          </div>
        </header>

        {/* Grille de contenu */}
        <div className="project-detail-grid">
          
          {/* Colonne Gauche : Description & Points clés */}
          <div className="detail-left-col">
            <section className="detail-section">
              <h3>
                <Icon icon="mdi:file-document-outline" /> Présentation générale
              </h3>
              <p>{project.description}</p>
            </section>

            {project.features && (
              <section className="detail-section">
                <h3>
                  <Icon icon="mdi:star-outline" /> Fonctionnalités & Points clés
                </h3>
                <ul className="features-detail-list">
                  {project.features.map((f, index) => (
                    <li key={index} style={{ borderLeftColor: f.color }}>
                      <Icon icon={f.icon} style={{ color: f.color }} width="22" />
                      <span>{f.label}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Colonne Droite : Image & Technos complètes */}
          <div className="detail-right-col">
            <div className="project-sidebar">
              
              {/* Image cliquable avec overlay loupe */}
              <div className="sidebar-img-wrapper" onClick={() => setIsModalOpen(true)}>
                <img src={project.image} alt={project.title} className="sidebar-img" />
                <div className="image-overlay">
                  <Icon icon="mdi:magnify-plus-outline" width="30" />
                </div>
              </div>

              {project.details && (
                <section className="sidebar-tech-section">
                  <h3>
                    <Icon icon="mdi:code-braces" /> Technologies utilisées
                  </h3>
                  <div className="sidebar-tech-grid">
                    {project.details.map((item, index) => (
                      <div key={index} className="sidebar-tech-badge">
                        <Icon icon={item.icon} style={{ color: item.color }} width="20" />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

        </div>
      </main>

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
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;