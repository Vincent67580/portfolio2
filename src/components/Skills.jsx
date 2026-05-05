import { Icon } from '@iconify/react';
import { skills } from '../data/skills';
import { Link } from 'react-router-dom';

function Skills() {
  const skillsData = skills

  return (
    <section id="skills" className="skills-section">
      <h2  className="section-title">Mes compétences principales</h2>
      <div className="competence-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="competence-card">
            <Icon icon={skill.icon} width="40" />
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/skills" className="btn-view-all">
            Voir en détails mes compétences
          </Link>
        </div>
    </section>
  );
}

export default Skills;