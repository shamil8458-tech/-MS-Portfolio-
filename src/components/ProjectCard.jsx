
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">

      {/* Project Image */}
      <Link
        to={`/projects/${project.id}`}
        className="block overflow-hidden bg-slate-100"
        aria-label={`View ${project.title} details`}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
        />
      </Link>

      {/* Project Details */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Link */}
        <div className="mt-5 border-t border-slate-100 pt-4">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:gap-3"
          >
            View Project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

