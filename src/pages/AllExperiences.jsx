
import Experiences from '../components/Experiences';
import { useEffect } from 'react';

function AllExperiences() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="all-experiences-page">
      <main style={{ paddingTop: '20px' }}> {/* Espace pour la navbar fixe */}
        <div className="container">
          <Experiences /> {/* Sans l'attribut limit, il affiche TOUT */}
        </div>
      </main>
    </div>
  );
}

export default AllExperiences;