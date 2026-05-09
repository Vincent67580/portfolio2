import { skills } from "../data/skills";
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

function SkillsDetail() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="skills-detail-page" style={{ paddingTop: '70px', paddingBottom: '50px' }}>
            <div className="container">
                <h2 className="section-title">Mes Compétences</h2>
                <p style={{ textAlign: 'center', marginBottom: '40px', color: '#64748b' }}>
                    Aperçu détaillé de mes domaines d'expertise technique et outils maîtrisés.
                </p>
                
                <div className="skills-grid-container">
                    {skills.map((skill) => (
                        <section key={skill.id} className="skill-card">
                            <div className="skill-card-header">
                                <Icon icon={skill.icon} width="35" />
                                <h3>{skill.title}</h3>
                            </div>
                            
                            <div className="skill-card-body">
                                <p className="skill-description">
                                    {skill.detailText}
                                </p>

                                <div className="tech-tags">
                                    {skill.technos.map((tech, i) => (
                                        <div key={i} className="tech-tag-item">
                                            <Icon 
                                                icon={tech.icon} 
                                                style={{ color: tech.color || 'inherit' }} 
                                                width="20"
                                            />
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default SkillsDetail;