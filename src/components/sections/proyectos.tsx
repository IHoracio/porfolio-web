import useTranslations from "../hooks/useTranslations";
import portfolioImage from "../../assets/images/proyects/portfolioScreenshot.png";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiTypescript } from "react-icons/si";

interface Project {
  id: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
}

const projectsData: Project[] = [
  {
    id: "portfolio",
    technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    image: portfolioImage,
    githubUrl: "https://github.com/IHoracio/porfolio-web",
    demoUrl: "https://mariomartinmorilla.es",
  },
];

export default function Proyectos() {
  const t = useTranslations();
  // Traducciones
  const projects = projectsData.map((project) => ({
    ...project,
    title: t.projects[project.id as keyof typeof t.projects].title,
    description: t.projects[project.id as keyof typeof t.projects].description,
  }));

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "React":
        return <FaReact className="text-blue-400" />;
      case "Vite":
        return <SiVite className="text-purple-500" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-cyan-400" />;
      case "TypeScript":
        return <SiTypescript className="text-blue-500" />;
      default:
        return <span className="text-gray-300">{tech}</span>;
    }
  };

  return (
    <section id="proyectos" className="py-12 px-4 md:px-8 lg:px-16">
      <div className="relative">
        <h3
          className="text-3xl font-bold text-center mt-1 md:text-5xl md:mt-7 lg:text-7xl relative"
          style={{
            opacity: 1,
            transform: "scale(1)",
            textShadow: "0 0 10px rgba(180, 210, 255, 0.8)",
          }}
        >
          &lt;{t.proyectsTitle}/&gt;
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15 md:mt-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h4 className="text-xl font-bold text-blue-300 mb-2">
                {project.title}
              </h4>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {getTechIcon(tech)}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                  >
                    <FaGithub /> Código
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors"
                  >
                    Ver Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
