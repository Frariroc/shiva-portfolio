const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#0d0d0f]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a
          href="#home"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Shiva<span className="text-purple-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition">
            home
          </a>

          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition">
            About
          </a>

          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition">
            Skills
          </a>

          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition">
            Projects
          </a>

          <a href="#education" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition">
            Education
          </a>
           <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          
          <a
            href="/resume.pdf"
            className="hidden sm:block px-5 py-2.5 rounded-full bg-purple-600 text-white hover:bg-purple-500 transition"
          >
            Resume
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;