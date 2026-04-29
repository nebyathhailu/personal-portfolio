import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import GlobalBackgroundLoader from '@/components/three/GlobalBackgroundLoader';

export default function Home() {
  return (
    <main className="relative bg-background">
      {/* Three.js canvas fixed behind the entire page */}
      <GlobalBackgroundLoader />

      {/* All sections sit above via z-index */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
