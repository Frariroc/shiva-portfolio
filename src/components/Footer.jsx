const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#111114] border-t border-gray-200 dark:border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <div>
            <h3 className="text-2xl font-bold">
              Shiva<span className="text-purple-500">.</span>
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              BCA Student & Aspiring Software Engineer
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#home" className="text-gray-500 hover:text-purple-500 transition">
              Home
            </a>

            <a href="#about" className="text-gray-500 hover:text-purple-500 transition">
              About
            </a>

            <a href="#projects" className="text-gray-500 hover:text-purple-500 transition">
              Projects
            </a>
          </div>

        </div>

        <div className="border-t border-gray-200 dark:border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shiva. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;