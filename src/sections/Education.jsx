import {
FaGraduationCap,
FaLaptopCode,
FaArrowRight,
} from "react-icons/fa";

function Education() {
const education = [
{
number: "01",
category: "ACADEMIC EDUCATION",
title: "Higher Secondary — Bio Science",
institution: "Higher Secondary Education",
period: "2023 – 2025",
description:
"Completed higher secondary education in the Bio Science stream, developing a foundation for continued learning and professional growth.",
icon: FaGraduationCap,
status: "Completed",
},
{
number: "02",
category: "PROFESSIONAL TRAINING",
title: "Front-End Development",
institution: "Bridgeon Solutions",
period: "Currently Learning",
description:
"Developing practical skills in front-end development, including React, responsive UI design, state management, and building functional web applications through hands-on projects.",
icon: FaLaptopCode,
status: "In Progress",
},
];

return ( <section
   id="education"
   className="relative overflow-hidden bg-slate-50 px-6 py-20 sm:px-10 lg:py-24"
 > <div className="mx-auto max-w-6xl">
{/* Section Heading */} <div className="max-w-2xl"> <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
My Journey </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        Education & Training
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        My academic background and ongoing journey toward becoming a
        skilled software engineer.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative mt-12 space-y-6 sm:mt-14 sm:space-y-8">
      {/* Timeline Line — desktop */}
      <div className="absolute bottom-20 left-[35px] top-20 hidden w-px bg-indigo-200 sm:block" />

      {education.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.number}
            className="group relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 sm:p-8 lg:p-9"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-7">
              {/* Icon */}
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                <Icon className="text-2xl" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                {/* Category and Period */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs font-bold tracking-[0.12em] text-indigo-600">
                    {item.category}
                  </span>

                  <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                    {item.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-indigo-700 sm:text-2xl">
                  {item.title}
                </h3>

                {/* Institution */}
                <p className="mt-2 text-sm font-semibold text-slate-700 sm:text-base">
                  {item.institution}
                </p>

                {/* Description */}
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </p>

                {/* Status */}
                <div className="mt-5">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                      item.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-indigo-50 text-indigo-700"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        item.status === "Completed"
                          ? "bg-emerald-500"
                          : "bg-indigo-500"
                      }`}
                    />
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>

    {/* Bottom Message */}
    <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div>
        <h3 className="font-bold text-slate-900">
          Always learning. Always building.
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          Focused on growing my technical skills through practical
          experience and continuous learning.
        </p>
      </div>

      <a
        href="#projects"
        className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-indigo-600 transition hover:gap-3"
      >
        Explore My Projects
        <FaArrowRight className="text-xs" />
      </a>
    </div>
  </div>
</section>


);
}

export default Education;
