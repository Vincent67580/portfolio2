import { Icon } from '@iconify/react';
import { contactLinks } from '../data/contact'; 

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Me contacter</h2>
        <p className="contact-subtitle">
          Une opportunité d'alternances ou une question ? N'hésitez pas à me joindre.
        </p>
        
        <div className="contact-grid">
          {contactLinks.map((contact) => (
            <a 
              key={contact.id} 
              href={contact.url} 
              target={contact.name !== "Email" ? "_blank" : "_self"} 
              rel="noreferrer" 
              className={`contact-card ${contact.name.toLowerCase()}`}
            >
              <div className="icon-wrapper">
                <Icon icon={contact.icon} width="40" />
              </div>
              <span>{contact.label}</span>
              <small>{contact.subLabel}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;