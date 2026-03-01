import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FeaturedSection } from './components/FeaturedSection';
import { Categories } from './components/Categories';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reviews />
        <FeaturedSection />
        <Services />
        <Categories />
        <WhyChooseUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
