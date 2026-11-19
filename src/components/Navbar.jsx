
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold">
          <span className="text-indigo-600">MS.</span> Portfolio
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {/* <Link to="/" className="text-sm text-slate-600 hover:text-indigo-600">
            Home
          </Link> */}

          <a href={`${import.meta.env.BASE_URL}#home`} className="text-sm text-slate-600 hover:text-indigo-600">
            Home
          </a>

          <a href={`${import.meta.env.BASE_URL}#about`} className="text-sm text-slate-600 hover:text-indigo-600">
            About
          </a>

          <Link to="/projects" className="text-sm text-slate-600 hover:text-indigo-600">
            Projects
          </Link>

          <a href={`${import.meta.env.BASE_URL}#skills`} className="text-sm text-slate-600 hover:text-indigo-600">
            Skills
          </a>

          <a href={`${import.meta.env.BASE_URL}#contact`} className="text-sm text-slate-600 hover:text-indigo-600">
            Contact
          </a>
        </div>

        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download
          className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Download CV ↓
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
