function ProjectCard({ title, description, tech , image}) {
  return (
    <div className="project-card">
      <div className="project-image">
            <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {tech.map((item, index) => (
          <span key={index} className="tech-badge">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;