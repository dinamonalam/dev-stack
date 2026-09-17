import { useEffect, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "../types";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold">
        Featured <span className="text-brand-gradient">Projects</span>
      </h2>
      <p className="text-slate-500 mt-2 mb-10">
        A few example projects built using technologies from this stack.
      </p>

      {loading ? (
        <p className="text-slate-500">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors">
                  <FiGithub />
                  GitHub
                </a>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg brand-gradient text-white hover:opacity-90 transition-opacity">
                  <FiExternalLink />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;