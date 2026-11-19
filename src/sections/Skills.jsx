import { useRef, useState, useEffect } from "react";
import {
FaHtml5,
FaCss3Alt,
FaJs,
FaBootstrap,
FaGitAlt,
FaGithub,
FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";

const technologies = [
{ name: "HTML", icon: FaHtml5, color: "text-orange-600" },
{ name: "CSS", icon: FaCss3Alt, color: "text-blue-600" },
{ name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
{ name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
{ name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
{ name: "React", icon: FaReact, color: "text-cyan-500" },
{ name: "Redux", icon: SiRedux, color: "text-purple-600" },
{ name: "GitHub", icon: FaGithub, color: "text-slate-900" },
];

const professionalSkills = [
"Communication",
"Problem Solving",
"Teamwork",
"Adaptability",
];

function Skills() {
const sliderRef = useRef(null);
const [activePage, setActivePage] = useState(0);
const [isLargeScreen, setIsLargeScreen] = useState(false);

const isDragging = useRef(false);
const startX = useRef(0);
const scrollStart = useRef(0);

useEffect(() => {
const mediaQuery = window.matchMedia("(min-width: 1024px)");


function updateScreenSize() {
  setIsLargeScreen(mediaQuery.matches);
}

updateScreenSize();
mediaQuery.addEventListener("change", updateScreenSize);

return () => {
  mediaQuery.removeEventListener("change", updateScreenSize);
};


}, []);

function handleMouseDown(event) {
if (!isLargeScreen || event.button !== 0) return;


isDragging.current = true;
startX.current = event.clientX;
scrollStart.current = sliderRef.current.scrollLeft;


}

function handleMouseMove(event) {
if (!isDragging.current) return;


sliderRef.current.scrollLeft =
  scrollStart.current - (event.clientX - startX.current);


}

function stopDragging() {
isDragging.current = false;
}

function handleScroll() {
if (!sliderRef.current || !isLargeScreen) return;


const slider = sliderRef.current;
const pageWidth = slider.clientWidth;
const currentPage = Math.round(slider.scrollLeft / pageWidth);

setActivePage(currentPage);


}

const totalPages = 3;

return ( <section id="skills" className="bg-white px-6 py-20 sm:px-10"> <div className="mx-auto max-w-6xl"> <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
My Expertise </p>


    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      Skills & Technologies
    </h2>

    <p className="mt-4 max-w-xl leading-7 text-slate-600">
      Technologies I use to build modern, responsive, and user-friendly
      web experiences.
    </p>

    <div
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onScroll={handleScroll}
      onDragStart={(event) => event.preventDefault()}
      className={`mt-10 grid grid-cols-2 gap-4 lg:flex lg:gap-4 lg:overflow-x-auto lg:pb-4 lg:select-none ${
        isDragging.current ? "lg:cursor-grabbing" : "lg:cursor-grab"
      }`}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#c7d2fe transparent",
      }}
    >
      {technologies.map((technology) => {
        const Icon = technology.icon;

        return (
          <div
            key={technology.name}
            className="flex min-h-32 flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-indigo-100/50 lg:min-w-[calc((100%-4rem)/5)] lg:flex-shrink-0"
          >
            <Icon className={`text-3xl sm:text-4xl ${technology.color}`} />

            <span className="text-center text-xs font-semibold text-slate-700 sm:text-sm">
              {technology.name}
            </span>
          </div>
        );
      })}
    </div>

    <div className="mt-5 hidden items-center justify-center gap-2 lg:flex">
      {Array.from({ length: totalPages }).map((_, index) => (
        <span
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            activePage === index
              ? "w-6 bg-indigo-600"
              : "w-2 bg-indigo-200"
          }`}
        />
      ))}
    </div>

    <div className="mt-12">
      <h3 className="text-xl font-bold text-slate-900">
        Professional Skills
      </h3>

      <div className="mt-5 flex flex-wrap gap-3">
        {professionalSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>


);
}

export default Skills;
