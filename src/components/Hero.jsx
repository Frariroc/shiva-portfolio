import backgroundImage from "./ChatGPT Image Sep 9, 2026, 10_32_11 AM.png";

const Hero = () => {

  return (

    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-200 dark:border-white/10 bg-purple-50 dark:bg-white/5 mb-6">

              <span className="text-purple-600 dark:text-purple-400 text-sm">
                Hello, I'm
              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Shiva<span className="text-purple-500">.</span>
            </h1>

            <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-purple-400">
              BCA Student & Aspiring Software Engineer
            </h2>

            <p className="mt-6 max-w-xl text-gray-300 text-lg leading-8">
              I’m a BCA student and aspiring software engineer passionate
              about building modern, scalable, and user-focused web
              applications while continuously turning ideas into practical
              digital solutions.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">

              <a
                href="/resume.pdf"
                className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                View Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-3 rounded-lg border border-white/20 text-white hover:border-purple-500 transition"
              >
                View Projects
              </a>

            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-sm font-medium">

              <img src="css.png" alt="JavaScript" className="w-10 h-10" />
               <img src="js.png" alt="JavaScript" className="w-10 h-10" />
              <img src="java.png" alt="CSS" className="w-10 h-10" />
              <img src="react.png" alt="React" className="w-10 h-10" />
              <img src="SQL.png" alt="SQL" className="w-10 h-10" />
            </div>

          </div>

          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl scale-110"></div>

              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-purple-500/30 bg-gray-100 dark:bg-[#17171c] group">

                <img
                  src="src/components/WhatsApp_Image_2026-09-08_at_11.13.37-removebg-preview.png"
                  alt="Shiva"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 group-hover:opacity-0"
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                  <img
                    src="src/components/WhatsApp Image 2025-09-19 at 07.14.05_677b24ee.jpg"
                    alt="Shiva"
                    className="w-full h-full object-cover object-top animate-pulse"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;