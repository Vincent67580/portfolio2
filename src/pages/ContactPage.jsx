import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';
import { contactLinks } from '../data/contact'; 

function ContactPage() {    
  const emailData = contactLinks.find(link => link.name === "Email");
  const linkedinData = contactLinks.find(link => link.name === "LinkedIn");
  const otherLinks = contactLinks.filter(link => link.name !== "Email" && link.name !== "LinkedIn");

  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [honeypot, setHoneypot] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Détection Bot via Honeypot
    if (honeypot !== '') {
      console.warn("Bot détecté via honeypot !");
      setStatusMessage({
        type: 'success',
        text: 'Message envoyé avec succès !',
      });
      formRef.current.reset();
      return;
    }

    // Rate Limiting (1 message toutes les x minutes)
    const COOLDOWN_TIME = 5 * 60 * 1000; // minutes en millisecondes
    const lastSentTime = localStorage.getItem('last_email_sent_time');
    const now = Date.now();

    if (lastSentTime && now - parseInt(lastSentTime, 10) < COOLDOWN_TIME) {
      const remainingSeconds = Math.ceil((COOLDOWN_TIME - (now - parseInt(lastSentTime, 10))) / 1000);
      setStatusMessage({
        type: 'error',
        text: `Veuillez patienter ${remainingSeconds} seconde(s) avant d'envoyer un nouveau message.`,
      });
      return;
    }

    setIsSending(true);
    setStatusMessage(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setIsSending(false);
          // Sauvegarde de l'heure d'envoi dans le navigateur
          localStorage.setItem('last_email_sent_time', Date.now().toString());
          setStatusMessage({
            type: 'success',
            text: 'Message envoyé avec succès ! Je vous répondrai rapidement.',
          });
          formRef.current.reset();
        },
        (error) => {
          setIsSending(false);
          console.error('Erreur EmailJS:', error);
          setStatusMessage({
            type: 'error',
            text: "Erreur lors de l'envoi. Veuillez réessayer ou utiliser mailto.",
          });
        }
      );
  };

  return (
    <section className="contact-page-simple">
      <div className="container">
        <header className="contact-header">
          <h2 className="section-title">On travaille ensemble ?</h2>
          <p className="contact-intro">
            Je suis actuellement à la recherche d'une opportunité en alternance. 
            Laissez-moi un message directement ici ou rejoignez-moi sur LinkedIn.
          </p>
        </header>

        <div className="contact-options-grid">
          
          <div className="contact-main-card form-card">
            <div className="icon-circle">
              <Icon icon={emailData?.icon || "fluent-emoji-flat:e-mail"} width="45" />
            </div>
            <h3>Envoyer un e-mail</h3>
            <p>Remplissez le formulaire ci-dessous pour m'écrire directement.</p>

            <form ref={formRef} onSubmit={sendEmail} className="direct-email-form">
              {/* Champ piège Honeypot */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  name="website_url"
                  tabIndex="-1"
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="form-input-group">
                <input 
                  type="text" 
                  name="from_name" 
                  placeholder="Votre nom / entreprise" 
                  required 
                />
              </div>

              <div className="form-input-group">
                <input 
                  type="email" 
                  name="from_email" 
                  placeholder="Votre e-mail" 
                  required 
                />
              </div>

              <div className="form-input-group">
                <textarea 
                  name="message" 
                  rows="4" 
                  placeholder="Votre message..." 
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-contact-action btn-submit" disabled={isSending}>
                {isSending ? (
                  <>
                    <Icon icon="line-md:loading-loop" /> Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message <Icon icon="mdi:send" width="18" />
                  </>
                )}
              </button>

              {statusMessage && (
                <div className={`form-feedback ${statusMessage.type}`}>
                  <Icon icon={statusMessage.type === 'success' ? "mdi:check-circle" : "mdi:alert-circle"} />
                  <span>{statusMessage.text}</span>
                </div>
              )}
            </form>
          </div>

          {linkedinData && (
            <div className="contact-main-card linkedin-card">
              <div className="icon-circle">
                <Icon icon={linkedinData.icon} width="45" />
              </div>
              <h3>{linkedinData.name}</h3>
              <p>Pour échanger de manière plus directe sur mon profil professionnel.</p>
              <a href={linkedinData.url} target="_blank" rel="noreferrer" className="btn-contact-action">
                {linkedinData.label}
              </a>
            </div>
          )}
        </div>

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