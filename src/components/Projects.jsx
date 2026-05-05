import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

function Projects({ limit }) {
  if (!projects) return null;

  // On limite 
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projets" className="projects-section">
      <h2 className="section-title">
        {limit ? "Projets récents" : "Tous mes projets"}
      </h2>
      
      <div className="projects-grid">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
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