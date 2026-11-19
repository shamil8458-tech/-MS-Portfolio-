
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => item.id === Number(projectId)
  );

  // Project kandethaan kazhinjillenkil
  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Project Not Found
          </h1>

          <p className="mt-3 text-slate-600">
            Sorry, the project you are looking for does not exist.
          </p>

          <Link
            to="/projects"
            className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">

        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:gap-3"
        >
          <span aria-hidden="true">←</span>
          Back to Projects
        </Link>

        {/* Project Information */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">

          {/* Project Title */}
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Project Details
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {project.title}
          </h1>

          {/* Description */}
          <p className="mt-5 text-base leading-8 text-slate-600">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-900">
              Technologies Used
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="mt-8 flex flex-wrap gap-4">

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProjectDetails;
