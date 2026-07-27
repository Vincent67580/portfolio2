import { Icon } from '@iconify/react';
import { aboutSkills } from '../data/aboutSkills';

function AboutFull() {

  return (
    <div className="about-page-full">
      <main>
        <div className="container">
          <header className="en_tete">
            <h2 className="section-title">Parcours & Informations</h2>
          </header>

          <section className="detail-card">
            <h2>Informations personnelles</h2>
            <p>
              Je m’appelle <strong>Vincent Bonnet</strong>. Je suis récemment <strong>diplômé du BTS SIO</strong> (Services Informatiques aux Organisations), option <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers) au lycée René Cassin à Strasbourg.  
              Passionné par le <em>développement web</em> et la <em>programmation</em>, j’aime créer des solutions logicielles utiles, modernes et efficaces.
            </p>
          </section>
<br />
          {/* NOUVELLE SECTION STRATÉGIQUE POUR LES RECRUTEURS */}
          <section className="detail-card objective-card">
            <h2>Mon objectif actuel</h2>
            <p>
              Déterminé à poursuivre et approfondir mes compétences, je recherche activement une <strong>alternance</strong> pour intégrer le <strong>Bachelor CDA (Concepteur Développeur d’Applications)</strong> au <strong>CCI Campus Strasbourg</strong> pour l'année universitaire 2026-2027. Ce rythme me permettra d'allier théorie académique et immersion concrète en entreprise.
            </p>
          </section>
<br />
          <section className="detail-card">
            <h2>Mon parcours</h2>
            <p>
              Après avoir découvert la programmation au lycée, dans le cadre d’un <strong>BAC Professionnel SN (Systèmes Numériques)</strong>, 
              j’ai choisi de poursuivre en <strong>BTS SIO</strong> afin d’approfondir mes connaissances en développement et en gestion de projets.  
              Ce cursus m’a permis d’apprendre à concevoir, coder et maintenir des applications tout en répondant précisément aux besoins des utilisateurs.
            </p>
          </section>
<br /><br />

          <section className="competences-full">
            <h2>Mes points forts</h2>
            <div className="competence-grid">
              {aboutSkills.map((comp) => (
                <div className="competence-card">
                  <Icon icon={comp.icon} width="45" />
                  <h3>{comp.title}</h3>
                  <p>{comp.texte} </p>
                </div>            
              ))}
            </div>
          </section>
          
          <section className="detail-card">
            <h2>Mes centres d’intérêt</h2>
            <p>
              En dehors du développement, je m’intéresse de près à la <strong>veille technologique</strong> et au domaine de la <strong>data science / intelligence artificielle</strong>.
              J’aime aussi le sport, les jeux vidéo et la musique, qui me permettent de garder un bon équilibre au quotidien.
            </p>
          </section>

          <section className="cv-section">
            <h2>Mon CV</h2>
            <p>Vous pouvez consulter ou télécharger mon CV pour en savoir plus sur mon parcours et mes compétences.</p>
            <div className="cv-buttons">
              <a href="CV-BONNET-Vincent.pdf" className="btn-cv" target="_blank" rel="noreferrer">
                <Icon icon="mdi:file-pdf-box" width="24" /> Voir mon CV
              </a>
              <a href="CV-BONNET-Vincent.pdf" className="btn-cv download" download>
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
