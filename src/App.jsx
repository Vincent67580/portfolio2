import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import AllProjects from './pages/AllProjects';
import Projects from './components/Projects';
import Contact from './components/Contact'; 
import Footer from './components/Footer';   

import ExperienceDetail from './pages/ExperienceDetail'; 
import AllExperiences from './pages/AllExperiences';
import AllAbout from './pages/AllAbout';
import SkillsDetail from './pages/SkillsDetail';



function App() {
  return (
    <Router>
      <div id="top"></div>
      <Navbar />
      <div className="container">
        
        
        {/* On utilise Routes pour gérer le changement de page */}
        <Routes>
          
          {/* ROUTE 1 : La page d'accueil (toutes tes sections) */}
          <Route path="/" element={
            <main  style={{ paddingTop: '50px' }}>
              <Hero />

              <About />

              <Experiences limit={2}/>

              <Skills />

              <Projects limit={2} />

              <Contact /> 
            </main>
          } />

          {/* ROUTE  */}
          <Route path="/"  />
          <Route path="/experiences" element={<AllExperiences />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/projets" element={<AllProjects />} />
          <Route path="/about" element={<AllAbout />} />
          <Route path="/skills" element={<SkillsDetail />} />

        </Routes>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;