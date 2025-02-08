import StarsCanvas from './canvas/Stars.jsx';
import Contact from './components/ui/Contact.jsx';
import Footer from './components/ui/Footer.jsx';
import HeroSection from './components/ui/Hero.jsx';
import Knowledge from './components/ui/Knowlegde.jsx';
import Projects from './components/ui/Projects.jsx';

//sm: 640px
//md: 768px
//lg: 1024px
//xl: 1280px
//2xl: 1536px
export default function App() {

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 w-screen h-full">
      <HeroSection />
      <Projects />
      <Knowledge />
      <StarsCanvas />
      <Contact />
      <Footer />
    </div>
  )
}
