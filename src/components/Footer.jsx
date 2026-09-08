import { Icon } from '@iconify/react';
import { contactLinks } from '../data/contact';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} - Vincent Bonnet - Portfolio</p>
        
        <div className="footer-contacts">
          {contactLinks.map((contact) => (
            <a 
              key={contact.id} 
              href={contact.url} 
              target={contact.name !== "Email" ? "_blank" : "_self"} 
              rel="noreferrer"
              aria-label={contact.name}
            >
              <Icon icon={contact.icon} width="20" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;