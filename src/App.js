
import './App.css';
import Navigato from './Components/NavigationHeader/Navigator';
import Landing from './Components/LandingInfo/Landing';
import IntroQuote from './Components/Quote/IntroQuote';
import Skillset from './Components/skills/Skills';
import About from './Components/about/About';
import ProjectGrid from './Components/ProjectsComponent/Projects';
import Qualifications from './Components/qualification/Qualifications';
import CertificationCarousal from './Components/Certifications/Cerfications';
import Footer from './Components/footer/Footer';
import Contact from './Components/contact/Contact';
function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Navigato />
      <br />
      <br />
      <hr style={{width:'50vw',margin:'auto'}}/>
      <br />
      <Landing />
      <br /><hr style={{ width: '50vw', color: 'gray', margin: '0 auto' }} /><br />
      <IntroQuote />
      <br /><hr style={{ width: '50vw', color: 'gray', margin: '0 auto' }} /><br />
      <About />
      <br /><hr style={{ width: '50vw', color: 'gray', margin: '0 auto' }} /><br />
      <Skillset />
      <br /><hr style={{ width: '50vw', color: 'gray', margin: '0 auto' }} /><br />
      <ProjectGrid />
      <br /><hr style={{ width: '50vw', color: 'gray', margin: '0 auto' }} /><br />
      <Qualifications />
      <br /><hr style={{ width: '50vw', color: 'gray', margin: '0 auto' }} /><br />
      <CertificationCarousal />
      <br /><hr style={{ width: '50vw', color: 'gray', margin: '0 auto' }} /><br />
      <Contact />
      <br /><hr style={{ width: '50vw', color: 'gray', margin: '0 auto' }} /><br />
      <Footer />
    </div>
  );
}

export default App;
