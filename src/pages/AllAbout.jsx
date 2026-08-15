import { Icon } from '@iconify/react';
import { aboutSkills } from '../data/aboutSkills';
import { aboutSections, cvConfig } from '../data/aboutData';
import Timeline from '../components/Timeline';

function AboutFull() {
  const infoSection = aboutSections.find(s => s.id === 'info');
  const objectiveSection = aboutSections.find(s => s.id === 'objective');
  const interestsSection = aboutSections.find(s => s.id === 'interests');

  return (
    <div className="about-page-full">
      <main>
        <div className="container">
          <header className="en_tete">
            <h2 className="section-title">Parcours & Informations</h2>
          </header>

          {/* Informations personnelles */}
          <section className={infoSection.className}>
            <h2>{infoSection.title}</h2>
            {infoSection.content}
          </section>

          {/* Objectif */}
          <section className={objectiveSection.className}>
            <h2>{objectiveSection.title}</h2>
            {objectiveSection.content}
          </section>

          {/* Frise Chronologique de ton parcours */}
          <Timeline />

          {/* Mes points forts */}
          <section className="competences-full">
            <h2>Mes points forts</h2>
            <div className="competence-grid">
              {aboutSkills.map((comp, index) => (
                <div key={comp.id || index} className="competence-card">
                  <Icon icon={comp.icon} width="45" />
                  <h3>{comp.title}</h3>
                  <p>{comp.texte}</p>
                </div> 
              ))}
            </div>
          </section>

          {/* Centres d'intérêt */}
          <section className={interestsSection.className}>
            <h2>{interestsSection.title}</h2>
            {interestsSection.content}
          </section>

          {/* Section CV */}
          <section className="cv-section">
            <h2>Mon CV</h2>
            <p>{cvConfig.description}</p>
            <div className="cv-buttons">
              <a href={cvConfig.filePath} className="btn-cv" target="_blank" rel="noreferrer">
                <Icon icon="mdi:file-pdf-box" width="24" /> Voir mon CV
              </a>
              <a href={cvConfig.filePath} className="btn-cv download" download>
                <Icon icon="mdi:download" width="24" /> Télécharger le CV
              </a>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default AboutFull;