import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

function ThemeToggle() {
  // On vérifie s'il y a déjà un choix dans le localStorage, sinon thème clair
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button 
      className="theme-toggle" 
      onClick={() => setIsDark(!isDark)}
      aria-label="Changer de thème"
    >
      <Icon icon={isDark ? "solar:sun-bold-duotone" : "solar:moon-bold-duotone"} width="24" />
    </button>
  );
}

export default ThemeToggle;