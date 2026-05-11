import { Icon } from '@iconify/react';

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
              Je m’appelle <strong>Vincent Bonnet</strong>, étudiant en <strong>BTS SIO</strong> (Services Informatiques aux Organisations),
              option <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers) au lycée René Cassin à Strasbourg.  
              Passionné par le <em>développement web</em> et la <em>programmation</em>, j’aime créer des logiciels utiles et efficaces.
            </p>
          </section>

          <section className="detail-card">
            <h2>Mon parcours</h2>
            <p>
              Après avoir découvert la programmation au lycée, dans le cadre d’un <strong>BAC Professionnel SN (Systèmes Numériques)</strong>, 
              j’ai choisi de poursuivre en <strong>BTS SIO</strong> afin d’approfondir mes connaissances en développement et en gestion de projets.  
              Ce cursus m’a permis d’apprendre à concevoir, coder et maintenir des applications tout en répondant aux besoins des utilisateurs.
            </p>
          </section>

          <section className="competences-full">
            <h2>Mes points forts</h2>
            <div className="competence-grid">
              <div className="competence-card">
                <Icon icon="flat-color-icons:search" width="45" />
                <h3>Curiosité</h3>
                <p>J’aime apprendre de nouvelles technologies et comprendre comment les choses fonctionnent.</p>
              </div>
              <div className="competence-card">
                <Icon icon="streamline-freehand-color:business-management-teamwork-clap" width="45" />
                <h3>Travail d’équipe</h3>
                <p>Je m’adapte facilement et j’aime collaborer sur des projets de groupe.</p>
              </div>
              <div className="competence-card">
                <Icon icon="noto:brain" width="45" />
                <h3>Logique</h3>
                <p>Je suis rigoureux dans ma manière de penser et de résoudre les problèmes techniques.</p>
              </div>
            </div>
          </section>

          <section className="detail-card">
            <h2>Mes centres d’intérêt</h2>
            <p>
              En dehors du développement, je m’intéresse à la <strong>veille technologique</strong> et à l’<strong>intelligence artificielle</strong>.
              J’aime aussi le sport, les jeux vidéo et la musique, qui me permettent de garder un bon équilibre.
            </p>
          </section>

          <section className="cv-section">
            <h2>Mon CV</h2>
            <p>Vous pouvez consulter ou télécharger mon CV pour en savoir plus sur mon parcours et mes compétences.</p>
            <div className="cv-buttons">
              <a href="CV_BONNET_Vincent2.pdf" className="btn-cv" target="_blank">
                <Icon icon="mdi:file-pdf-box" width="24" /> Voir mon CV
              </a>
              <a href="CV_BONNET_Vincent2.pdf" className="btn-cv download" download>
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