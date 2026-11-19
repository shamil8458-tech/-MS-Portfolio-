// import Navbar from "../components/Navbar";
// import projects from "../data/projects";
// import ProjectCard from "../components/ProjectCard";

// function Projects() {
//   return (
//     <>
    
//     <Navbar/>
//     <section id="projects" className="bg-slate-50 px-6 py-16 sm:px-10">
//       <div className="mx-auto max-w-7xl">

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

//         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.slice(0, 3).map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>

//       </div>
//     </section>
//     </>

//   );
// }

// export default Projects;



import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
return (
<> <Navbar />


  <main className="min-h-screen bg-slate-50 px-6 py-16 sm:px-10">
    <div className="mx-auto max-w-7xl">
      {/* Page Heading */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Explore My Work
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            All Projects
          </h1>

          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            A collection of my projects, experiments, and practical
            experience in front-end development.
          </p>
        </div>

        <span className="inline-flex w-fit items-center rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-indigo-600">
          {projects.length} Projects
        </span>
      </div>

      {/* Back to Portfolio */}
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
      >
        <span aria-hidden="true">←</span>
        Back to Portfolio
      </Link>

      {/* All Projects */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  </main>

  <Footer />
</>


);
}

export default Projects;
