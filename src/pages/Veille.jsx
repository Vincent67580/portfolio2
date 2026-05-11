import { veilleData } from '../data/veille';
import { Icon } from '@iconify/react';

function Veille() {
  return (
    <main>
      <div className="container">
        <header className="veille-intro">
          <h2 className="section-title">{veilleData.title}</h2>
          <div className="subject-box">
            <Icon icon="lucide:search" width="30" />
            <h3>{veilleData.subject}</h3>
          </div>
        </header>

        <section className="veille-section">
          <h3><Icon icon="lucide:info" /> Pourquoi ce sujet ?</h3>
          <p>{veilleData.introduction}</p>
          <div className="questions-grid">
            {veilleData.questions.map((q, i) => (
              <div key={i} className="question-item">
                <Icon icon="lucide:help-circle" />
                <span>{q}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="axes-grid">
          {veilleData.axes.map((axe, i) => (
            <section key={i} className="axe-card">
              <h4>{axe.title}</h4>
              <p>{axe.content}</p>
              <div className="tag-list">
                {axe.tools.map((t, j) => <span key={j} className="tag">{t}</span>)}
              </div>
            </section>
          ))}
        </div>

        <section className="veille-section conclusion">
          <h3><Icon icon="lucide:check-circle" /> Constat principal</h3>
          <p>{veilleData.conclusion}</p>
        </section>

        <section className="startme-section">
          <div className="startme-header">
            <h3>Flux de veille (Start.me)</h3>
            <a href={veilleData.link} target="_blank" rel="noopener noreferrer" className="btn-view-all">
              Ouvrir dans un nouvel onglet <Icon icon="mdi:external-link" />
            </a>
          </div>
          <div className="iframe-wrapper">
            <iframe src={veilleData.link} title="Startme Veille" loading="lazy"></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Veille;