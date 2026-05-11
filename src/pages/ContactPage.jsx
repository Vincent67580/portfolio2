import { Icon } from '@iconify/react';
import { contactLinks } from '../data/contact'; 

function ContactPage() {    
  // On récupère spécifiquement l'email et linkedin pour les mettre en avant
  const emailData = contactLinks.find(link => link.name === "Email");
  const linkedinData = contactLinks.find(link => link.name === "LinkedIn");
  // On filtre le reste pour la section du bas
  const otherLinks = contactLinks.filter(link => link.name !== "Email" && link.name !== "LinkedIn");

  return (
    <section className="contact-page-simple">
      <div className="container">
        <header className="contact-header">
          <h2 className="section-title">On travaille ensemble ?</h2>
          <p className="contact-intro">
            Je suis actuellement à la recherche d'une opportunité en alternance. 
            Choisissez le canal qui vous convient le mieux pour me joindre.
          </p>
        </header>

        <div className="contact-options-grid">
          {/* Carte Email */}
          {emailData && (
            <div className="contact-main-card">
              <div className="icon-circle">
                <Icon icon={emailData.icon} width="45" />
              </div>
              <h3>{emailData.name}</h3>
              <p>Pour une réponse formelle et rapide, c'est ici.</p>
              <a href={emailData.url} className="btn-contact-action">
                {emailData.label}
              </a>
            </div>
          )}

          {/* Carte LinkedIn */}
          {linkedinData && (
            <div className="contact-main-card linkedin-card">
              <div className="icon-circle">
                <Icon icon={linkedinData.icon} width="45" />
              </div>
              <h3>{linkedinData.name}</h3>
              <p>Pour échanger de manière plus directe sur mon profil.</p>
              <a href={linkedinData.url} target="_blank" rel="noreferrer" className="btn-contact-action">
                {linkedinData.label}
              </a>
            </div>
          )}
        </div>

        {/* Autres liens secondaires */}
        <div className="other-links-section">
          <h4>Retrouvez-moi aussi sur :</h4>
          <div className="mini-links">
            {otherLinks.map((link) => (
              <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="mini-link-item">
                <Icon icon={link.icon} width="20" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;