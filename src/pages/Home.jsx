
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import About from "../sections/About";
import TechStack from "../sections/TechStack";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
         <About />
         <TechStack />
         <Education />
         <Skills />
        <Projects />
 
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;

