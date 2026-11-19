
// import projects from "../data/projects";
// import ProjectCard from "../components/ProjectCard";

// function Projects() {
//   return (
//     <section
//       id="projects"
//       className="bg-slate-50 px-6 py-16 sm:px-10"
//     >
//       <div className="mx-auto max-w-7xl">

//         {/* Section Heading */}
//         <p className="text-sm font-semibold text-indigo-600">
//           My Recent Projects
//         </p>

//         <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
//           Some of My Featured Work
//         </h2>

//         <p className="mt-3 max-w-xl leading-7 text-slate-600">
//           Here are some projects I have built to improve my skills
//           and gain practical experience.
//         </p>

//         {/* Project Cards */}
//         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.slice(0, 3).map((project) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Projects;




import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
return ( <section
   id="projects"
   className="bg-slate-50 px-6 py-16 sm:px-10"
 > <div className="mx-auto max-w-7xl">
{/* Section Heading */} <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"> <div> <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
My Recent Projects </p>


        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Some of My Featured Work
        </h2>

        <p className="mt-3 max-w-xl leading-7 text-slate-600">
          Here are some projects I have built to improve my skills
          and gain practical experience.
        </p>
      </div>

      {/* Laptop View All Button */}
      <Link
        to="/projects"
        className="hidden shrink-0 items-center gap-2 self-start rounded-xl border border-indigo-200 bg-white px-5 py-3 text-sm font-semibold text-indigo-600 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white lg:inline-flex"
      >
        View All Projects
        <span aria-hidden="true">→</span>
      </Link>
    </div>

    {/* Desktop: First 3 Projects */}
    <div className="mt-8 hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
      {projects.slice(0, 3).map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>

    {/* Mobile: All Projects */}
    <div className="mt-8 grid grid-cols-1 gap-6 sm:hidden">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  </div>
</section>


);
}

export default Projects;
