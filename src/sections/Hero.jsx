import { useNavigate } from "react-router-dom";
import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaArrowRight,
FaDownload,
} from "react-icons/fa";

function Hero() {
const navigate = useNavigate();

return ( <section id="home" className="relative overflow-hidden bg-white"> <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-16 lg:py-20">


    {/* Left Content */}
    <div className="order-2 md:order-1">
      {/* Introduction Badge */}
      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
        <span className="h-2 w-2 rounded-full bg-indigo-500" />
        Hello, I'm
      </span>

      {/* Name */}
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
        Muhammed
        <span className="mt-1 block bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
          Shamil
        </span>
      </h1>

      {/* Professional Title */}
      <h2 className="mt-5 max-w-xl text-lg font-semibold leading-8 text-slate-700 sm:text-xl">
        Aspiring Software Engineer
        <span className="mx-2 text-indigo-500">|</span>
        Front-End Developer
      </h2>

      {/* Introduction */}
      <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
        I build modern, responsive, and user-friendly web applications
        with a focus on clean code and practical solutions. Passionate
        about software engineering, problem-solving, and transforming
        ideas into impactful digital experiences.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => navigate("/projects")}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-1 hover:bg-indigo-700"
        >
          Explore My Projects
          <FaArrowRight className="text-sm" />
        </button>

        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition duration-300 hover:border-indigo-500 hover:text-indigo-600"
        >
          Download Resume
          <FaDownload className="text-sm" />
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href="https://github.com/shamil8458-tech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
        >
          <FaGithub size={19} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/muhammed-shamil-m/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
        >
          <FaLinkedin size={19} />
          LinkedIn
        </a>

        <a
          href="mailto:shamil8458@gmail.com"
          aria-label="Send me an email"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
        >
          <FaEnvelope size={18} />
          Email
        </a>
      </div>
    </div>

    {/* Right Profile Image */}
    <div className="relative order-1 flex items-center justify-center px-4 pb-5 md:order-2 md:px-0">
      {/* Background Glow */}
      <div className="absolute h-64 w-64 rounded-full bg-indigo-100 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

      {/* Decorative Circle */}
      <div className="absolute h-64 w-64 rounded-full border border-indigo-100 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

      {/* Profile Image */}
      <div className="relative h-72 w-64 overflow-hidden rounded-[2rem] border border-slate-100 bg-gradient-to-br from-indigo-100 to-violet-200 shadow-2xl shadow-indigo-100 sm:h-96 sm:w-80">
        <img
          src={`${import.meta.env.BASE_URL}images/gemini.png`}
          alt="Muhammed Shamil, aspiring Software Engineer and Front-End Developer"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Featured Project Badge */}
      <div className="absolute -bottom-1 left-0 max-w-[220px] rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:left-2 sm:max-w-none">
        <p className="text-xs font-medium text-slate-500">
          Featured Project
        </p>

        <p className="mt-1 text-sm font-bold text-slate-900">
          E-commerce Application
        </p>

        <p className="mt-1 text-xs text-indigo-600">
          React · Redux · Tailwind CSS
        </p>
      </div>
    </div>
  </div>
</section>


);
}

export default Hero;
