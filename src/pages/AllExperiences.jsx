
import Experiences from '../components/Experiences';

function AllExperiences() {


  return (
    <div className="all-experiences-page">
      <main>
        <div className="container">
          <Experiences /> {/* Sans l'attribut limit, il affiche TOUT */}
        </div>
      </main>
    </div>
  );
}

export default AllExperiences;