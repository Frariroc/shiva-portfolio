const Skills = () => {
  const skills = [
    ["/js.png", "HTML", "Advanced"],
    ["/css.png", "CSS", "Advanced"],
    ["/java.png", "JavaScript", "Intermediate"],
    ["/react.png", "React", "Intermediate"],
    ["/SQL.png", "SQL", "Intermediate"],
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-[#0d0d0f] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">
            My Skills
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {skills.map(([image, name, level]) => (
            <div
              key={name}
              className="group p-7 rounded-2xl bg-gray-50 dark:bg-[#18181c] border border-gray-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-5">
                <img
                  src={image}
                  alt={name}
                  className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold">
                {name}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                {level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;