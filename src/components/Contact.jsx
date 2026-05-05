import { Icon } from '@iconify/react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Me contacter</h2>
      <p>N’hésitez pas à me contacter via les moyens suivants :</p>
      <div className="contact-buttons">
        <a href="mailto:vbonnet.vincent@gmail.com" className="btn-contact">
          <Icon icon="fluent-emoji-flat:e-mail" /> Envoyer un e-mail
        </a>
        <a href="https://www.linkedin.com/in/vincent-bonnet-06-" target="_blank" rel="noreferrer" className="btn-contact">
          <Icon icon="bi:linkedin" /> LinkedIn
        </a>
        <a href="https://github.com/Vincent67580" target="_blank" rel="noreferrer" className="btn-contact">
          <Icon icon="bi:github" /> GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;