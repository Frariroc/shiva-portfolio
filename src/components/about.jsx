const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-[#111114] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">
            About Me
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Get To Know Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-bold mb-5">
              BCA Student & Aspiring Software Engineer
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-8">
              I’m Shiva, a BCA student and aspiring software engineer
              passionate about building modern, scalable, and user-focused
              web applications.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-8 mt-5">
              I enjoy turning ideas into practical digital solutions and
              continuously improving my development skills by working on
              real-world projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="p-6 rounded-xl bg-white dark:bg-[#18181c] border border-gray-200 dark:border-white/10">
              <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                BCA
              </h4>
              <p className="text-gray-500 mt-2">Degree</p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-[#18181c] border border-gray-200 dark:border-white/10">
              <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                3rd
              </h4>
              <p className="text-gray-500 mt-2">Semester</p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-[#18181c] border border-gray-200 dark:border-white/10">
              <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                5+
              </h4>
              <p className="text-gray-500 mt-2">Projects</p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-[#18181c] border border-gray-200 dark:border-white/10">
              <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                Web
              </h4>
              <p className="text-gray-500 mt-2">Development</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;