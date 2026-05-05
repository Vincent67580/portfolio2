
import Projects from '../components/Projects';
import { useEffect } from 'react';

function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="all-projects-page">
      <main style={{ paddingTop: '30px' }}>
        <div className="container">
          <Projects /> {/* Affiche tout sans limite */}
        </div>
      </main>
    </div>
  );
}

export default AllProjects;