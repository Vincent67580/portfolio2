import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './App.css';

// Import des composants de la page d'accueil
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import VeilleTeaser from './components/VeilleTeaser';
import Contact from './components/Contact'; 
import Footer from './components/Footer';

// Import des pages détaillées
import AllProjects from './pages/AllProjects';
import ExperienceDetail from './pages/ExperienceDetail'; 
import AllExperiences from './pages/AllExperiences';
import AllAbout from './pages/AllAbout';
import SkillsDetail from './pages/SkillsDetail';
import Veille from './pages/Veille';

function App() {
  return (
    <Router>
      {/* Point d'ancrage pour remonter en haut de page */}
      <div id="top"></div>
      
      <Navbar />

      <div className="container">
        <Routes>
          {/* ROUTE PRINCIPALE : Page d'accueil avec sections limitées */}
          <Route path="/" element={
            <main style={{ paddingTop: '50px' }}>
              <Hero />
              <About />
              <Skills />
              <Projects limit={2} />
              <Experiences limit={2} />
              <VeilleTeaser />
              <Contact /> 
            </main>
          } />

          {/* ROUTES DÉTAILLÉES */}
          <Route path="/about" element={<AllAbout />} />
          <Route path="/skills" element={<SkillsDetail />} />
          <Route path="/projets" element={<AllProjects />} />
          <Route path="/experiences" element={<AllExperiences />} />
          <Route path="/veille" element={<Veille />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          
          {/* Optionnel : Redirection si la route n'existe pas */}
          <Route path="*" element={<HomeRedirect />} />
        </Routes>

        <Footer /> 
      </div>
    </Router>
  );
}

// Petit composant utilitaire pour rediriger les erreurs 404 vers l'accueil
function HomeRedirect() {
  return (
    <div className="error-container">
      <div className="error-content">
        <Icon icon="tabler:error-404" width="100" className="error-icon" />
        <h2>Oups ! Page non trouvée</h2>
        <p>Il semble que vous vous soyez égaré dans les méandres du code.</p>
        <Link to="/" className="btn-error">
          <Icon icon="mdi:home" width="20" />
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default App;