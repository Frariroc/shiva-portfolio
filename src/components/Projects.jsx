const Projects = () => {
  const projects = [
    {
      title: "Shopping Website",
      description:
        "A modern and responsive shopping website with product listings, shopping cart, and a user-friendly interface.",
      tech: "React • Tailwind CSS • JavaScript",
      image: "public/Screenshot 2026-09-11 133925.png",
      link: "https://frariroc.github.io/frari-roc/",
    },
    {
      title: "Todo App",
      description:
        "A task management application for daily tasks.",
      tech: "HTML • CSS • JavaScript",
      image: "/todo.png",
      link: "#",
    },
    {
      title: "Weather App",
      description:
        "A weather application using an external API.",
      tech: "JavaScript • API",
      image: "/weather.png",
      link: "#",
    },
    {
      title: "FRARI_ROC",
      description:
        "A student-focused social and educational platform.",
      tech: "React • Firebase",
      image: "/frari-roc.png",
      link: "https://frariroc.github.io/frari-roc/",
    },
    {
      title: "LifeOS AI",
      description:
        "A personal productivity platform with AI features.",
      tech: "React • Node.js • PostgreSQL",
      image: "/lifeos.png",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-[#111114] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">
            My Work
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Featured Projects
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Some projects I have built while learning and improving my skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl bg-white dark:bg-[#18181c] border border-gray-200 dark:border-white/10 hover:border-purple-400 transition-all duration-300"
            >
              <div className="p-4">
  <div className="h-44 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#111114] p-2 overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
    />
  </div>
</div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-7 mt-4">
                  {project.description}
                </p>

                <p className="text-purple-600 dark:text-purple-400 text-sm mt-5">
                  {project.tech}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-5 py-2.5 rounded-lg border border-gray-300 dark:border-white/10 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;