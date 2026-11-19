import {
FaReact,
FaJs,
FaGithub,
FaHtml5,
FaCss3Alt,
FaBriefcase,
FaHeart,
FaGraduationCap,
FaArrowRight,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const technologies = [
{
name: "React",
category: "Library",
icon: FaReact,
color: "text-cyan-500",
badge: "bg-cyan-50 text-cyan-700",
},
{
name: "JavaScript",
category: "Language",
icon: FaJs,
color: "text-yellow-500",
badge: "bg-amber-50 text-amber-700",
},
{
name: "Tailwind CSS",
category: "Framework",
icon: SiTailwindcss,
color: "text-cyan-500",
badge: "bg-sky-50 text-sky-700",
},
{
name: "Redux Toolkit",
category: "State Management",
icon: SiRedux,
color: "text-purple-600",
badge: "bg-purple-50 text-purple-700",
},
{
name: "GitHub",
category: "Version Control",
icon: FaGithub,
color: "text-slate-900",
badge: "bg-slate-100 text-slate-700",
},
{
name: "HTML",
category: "Markup",
icon: FaHtml5,
color: "text-orange-600",
badge: "bg-orange-50 text-orange-700",
},
{
name: "CSS",
category: "Styling",
icon: FaCss3Alt,
color: "text-blue-600",
badge: "bg-blue-50 text-blue-700",
},
];

function TechStack() {
const navigate = useNavigate();

function goToContact() {
navigate("/");


setTimeout(() => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
  });
}, 100);


}

return ( <section id="techstack" className="overflow-hidden bg-white px-6 py-20 sm:px-10"> <div className="mx-auto max-w-7xl">
{/* Section Heading */} <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"> <div> <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
Tech Stack </p>


        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          My Tech Stack
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Technologies I use to build modern, responsive, and
          user-friendly web applications.
        </p>
      </div>

      <p className="hidden text-sm font-medium italic text-indigo-400 sm:block">
        Code · Create · Build
      </p>
    </div>

    {/* Technology Cards */}
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {technologies.map((technology) => {
        const Icon = technology.icon;

        return (
          <div
            key={technology.name}
            className="group flex min-h-44 flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white px-3 py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60"
          >
            <div className="flex h-14 items-center justify-center transition duration-300 group-hover:scale-110">
              <Icon className={`text-4xl ${technology.color}`} />
            </div>

            <h3 className="mt-3 text-sm font-bold text-slate-900">
              {technology.name}
            </h3>

            <span
              className={`mt-3 rounded-full px-3 py-1.5 text-xs font-medium ${technology.badge}`}
            >
              {technology.category}
            </span>
          </div>
        );
      })}
    </div>

    {/* Journey and Statistics */}
    <div className="mt-10 grid grid-cols-1 gap-6 rounded-3xl border border-indigo-50 bg-gradient-to-br from-indigo-50/90 to-violet-50/70 p-6 sm:p-8 lg:grid-cols-4 lg:items-center lg:gap-0">
      <div className="lg:pr-6">
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
          Quick Overview
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
          My Journey So Far
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Building practical experience through projects, continuous
          learning, and a passion for software development.
        </p>
      </div>

      {/* Projects Completed */}
      <div className="flex items-center gap-4 border-t border-indigo-100 py-5 lg:justify-center lg:border-l lg:border-t-0 lg:px-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
          <FaBriefcase className="text-lg" />
        </div>

        <div>
          <h4 className="text-2xl font-bold text-slate-900">3+</h4>
          <p className="mt-1 text-sm font-medium text-slate-600">
            Projects Completed
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Practical experience
          </p>
        </div>
      </div>

      {/* Learning */}
      <div className="flex items-center gap-4 border-t border-indigo-100 py-5 lg:justify-center lg:border-l lg:px-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <FaGraduationCap className="text-xl" />
        </div>

        <div>
          <h4 className="text-2xl font-bold text-slate-900">1+</h4>
          <p className="mt-1 text-sm font-medium text-slate-600">
            Years of Learning
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Growing every day
          </p>
        </div>
      </div>

      {/* Passion */}
      <div className="flex items-center gap-4 border-t border-indigo-100 py-5 lg:justify-center lg:border-l lg:px-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
          <FaHeart className="text-lg" />
        </div>

        <div>
          <h4 className="text-2xl font-bold text-slate-900">100%</h4>
          <p className="mt-1 text-sm font-medium text-slate-600">
            Passion for Coding
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Turning ideas into code
          </p>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 p-6 text-white shadow-lg shadow-indigo-200/60 sm:p-8">
      <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-violet-300/20 blur-2xl" />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl sm:flex">
            ✦
          </div>

          <div>
            <h3 className="text-lg font-bold sm:text-xl">
              Interested in working together?
            </h3>

            <p className="mt-2 text-sm leading-6 text-indigo-100">
              I'm open to learning opportunities, collaborations, and
              exciting projects.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={goToContact}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-indigo-700 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-50"
        >
          Get In Touch
          <FaArrowRight className="text-xs" />
        </button>
      </div>
    </div>
  </div>
</section>


);
}

export default TechStack;
