import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

function Projects({ limit }) {
  // 1. État pour le filtre (par défaut 'Tous')
  const [activeFilter, setActiveFilter] = useState('Tous');

  if (!projects) return null;

  // 2. Définir les catégories disponibles (statiques ou extraites de tes datas)
  // On prend les technos principales qui reviennent souvent
  const categories = ['Tous','HTML', 'React', 'Python', 'JavaScript', 'API'];

  // 3. Logique de tri et de filtrage
  let displayedProjects = [...projects].sort((a, b) => b.id - a.id);

  // On applique le filtre seulement si on n'est pas sur la vue limitée (accueil)
  if (!limit && activeFilter !== 'Tous') {
    displayedProjects = displayedProjects.filter(project => 
      project.tech.includes(activeFilter) || 
      (activeFilter === 'API' && project.tech.some(t => t.toLowerCase().includes('api')))
    );
  }

  // 4. On applique la limite après le tri (pour l'accueil)
  if (limit) {
    displayedProjects = displayedProjects.slice(0, limit);
  }

  return (
    <section id="projets" className="projects-section">
      <h2 className="section-title">
        {limit ? "Projets récents" : "Tous mes projets"}
      </h2>
      <p className="SkillsPara">
        {limit ? "" : "Explorez mes réalisations par technologie."}
      </p>

      {/* 5. Affichage des filtres uniquement sur la page "Tous les projets" */}
      {!limit && (
        <div className="filter-container">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
      
      <div className="projects-grid">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1/-1', padding: '2rem' }}>
            Aucun projet ne correspond à ce filtre.
          </p>
        )}
      </div>

      {limit && (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/projets" className="btn-view-all">
            Voir tous les projets
          </Link>
        </div>
      )}
    </section>
  );
}

export default Projects;