import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0d0d0f] dark:text-gray-100 transition-colors duration-300">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;