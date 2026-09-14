const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-white dark:bg-[#0d0d0f] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">
            Education
          </p>

          <h2 className="text-4xl font-bold mt-2">
            My Education
          </h2>
        </div>

        <div className="p-8 rounded-xl bg-gray-50 dark:bg-[#18181c] border border-gray-200 dark:border-white/10">

          <p className="text-purple-600 dark:text-purple-400 text-sm">
            Current
          </p>

          <h3 className="text-2xl font-bold mt-3">
            Bachelor of Computer Applications
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            DBRAU, Agra
          </p>

          <p className="text-gray-500 mt-2">
            3rd Semester
          </p>

        </div>
      </div>
    </section>
  );
};

export default Education;