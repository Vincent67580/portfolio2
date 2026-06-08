import { useEffect, useRef } from 'react';

function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Ajuster la taille du canvas à l'écran
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuration des particules
    const particlesArray = [];
    const numberOfParticles = 60; // Nombre de points sur l'écran

    
    // Récupérer les couleurs dynamiques du thème CSS
    const getThemeColors = () => {
      const styles = getComputedStyle(document.documentElement);
      
      // On récupère tes variables RGB actuelles (ex: "239, 68, 68")
      const primaryRGB = styles.getPropertyValue('--primary-rgb').trim() || '239, 68, 68';
      const secondaryRGB = styles.getPropertyValue('--secondary-rgb').trim() || '37, 99, 235';
      
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      return {
        // Mode Sombre : Les points brillent un peu plus / Mode Clair : Plus discrets
        particleColor: isDark 
          ? `rgba(${primaryRGB}, 0.7)`  /* Rouge néon discret */
          : `rgba(${primaryRGB}, 0.6)`, /* Rouge pastel doux */
          
        lineColor: isDark 
          ? `rgba(${secondaryRGB}, 0.55)` /* Lignes bleues électriques en fond */
          : `rgba(${secondaryRGB}, 0.45)`  /* Lignes bleues très légères */
      };
    };

    let theme = getThemeColors();

    // Écouter les changements de thème (Dark mode toggle)
    const observer = new MutationObserver(() => {
      theme = getThemeColors();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // Classe Particule
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; // Taille des points
        this.speedX = Math.random() * 0.4 - 0.2; // Vitesse X (très lent)
        this.speedY = Math.random() * 0.4 - 0.2; // Vitesse Y
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Rebondir sur les bords
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }

      draw() {
        ctx.fillStyle = theme.particleColor; // <- Modifié ici
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialisation du tableau de particules
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Dessiner les lignes connectrices entre les points proches
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Si deux points sont proches, on trace une ligne
          if (distance < 120) {
            ctx.strokeStyle = theme.lineColor; // <- Déjà correct, mais s'assurer que ça pointe sur theme.lineColor
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Boucle d'animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Nettoyage à la destruction du composant
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, /* Derrière le site */
        background: 'transparent',
        pointerEvents: 'none', /* Laisse passer les clics sur les boutons */
      }}
    />
  );
}

export default CanvasBackground;