
import Projects from '../components/Projects';

function AllProjects() {
  return (
    <div className="all-projects-page">
      <main >
        <div className="container">
          <Projects /> {/* Affiche tout sans limite */}
        </div>
      </main>
    </div>
  );
}

export default AllProjects;