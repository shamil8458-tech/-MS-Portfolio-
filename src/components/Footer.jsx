import {
FaGithub,
FaLinkedin,
FaInstagram,
FaWhatsapp,
FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const GITHUB_URL = "https://github.com/shamil8458-tech";
const LINKEDIN_URL = "https://www.linkedin.com/in/muhammed-shamil-m/";
const INSTAGRAM_URL =
"https://www.instagram.com/muhammed_5hamiiil?exln=MWMxcXFpcGpwdGxzbA%3D%3D&utm_source=qr";

// Replace with your actual WhatsApp number, including country code.
const WHATSAPP_URL = "https://wa.me/9567318458";

const navigationLinks = [
{ label: "Home", href: "#home" },
{ label: "About", href: "#about" },
{ label: "Skills", href: "#skills" },
{ label: "Projects", href: "#projects" },
{ label: "Contact", href: "#contact" },
];

function Footer() {
function handleNavigation(event, href) {
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
if (window.location.pathname.replace(/\/$/, "") !== base) return;


event.preventDefault();

if (href === "#home") {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return;
}

document
  .getElementById(href.slice(1))
  ?.scrollIntoView({ behavior: "smooth" });


}

function scrollToTop() {
window.scrollTo({ top: 0, behavior: "smooth" });
}

return ( <footer className="bg-slate-950 px-6 py-10 text-white sm:px-10"> <div className="mx-auto max-w-6xl"> <div className="flex flex-col items-center text-center"> <Link
         to="/"
         onClick={scrollToTop}
         className="text-2xl font-bold tracking-tight"
       >
Shamil<span className="text-indigo-400">.</span> </Link>


      <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
        Front-End Developer passionate about building modern and
        user-friendly web experiences.
      </p>

      <nav
        aria-label="Footer navigation"
        className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3"
      >
        {navigationLinks.map((item) => (
          <a
            key={item.label}
            href={`${import.meta.env.BASE_URL}${item.href}`}
            onClick={(event) =>
              handleNavigation(event, item.href)
            }
            className="text-sm text-slate-400 transition hover:text-indigo-400"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-7 flex items-center justify-center gap-3">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
        >
          <FaGithub className="text-lg" />
        </a>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
        >
          <FaLinkedin className="text-lg" />
        </a>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-pink-500 hover:bg-pink-600 hover:text-white"
        >
          <FaInstagram className="text-lg" />
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
        >
          <FaWhatsapp className="text-lg" />
        </a>
      </div>
    </div>

    <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-center sm:flex-row">
      <p className="text-xs text-slate-500">
        © {new Date().getFullYear()} Shamil. All rights reserved.
      </p>

      <button
        type="button"
        onClick={scrollToTop}
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-indigo-400"
      >
        Back to top
        <FaArrowUp />
      </button>
    </div>
  </div>
</footer>


);
}

export default Footer;
