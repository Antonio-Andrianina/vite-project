import Header from './components/header';
import Carousel from './components/Carousel';
import AboutSection from './components/AboutSection';
import TeamCarousel from './components/TeamCarousel';
import CareerOpportunities from './components/CarreerOpportunities';
import TechnologiesSection from './components/TechnologiesSection';
import DomainsSection from './components/DomainsSection';
import AdmissionSection from './components/AdmissionSection';
import ProgramSection from './components/ProgramSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header />
      <Carousel />
      <AboutSection />
      <TeamCarousel />
      <CareerOpportunities />
      <DomainsSection />
      <AdmissionSection />
      <ProgramSection />
      <TechnologiesSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default App
