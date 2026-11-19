function About() {
return ( <section id="about" className="bg-white px-6 py-20 sm:px-10"> <div className="mx-auto max-w-5xl">
{/* Section Label */} <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
About Me </p>


    {/* Heading */}
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      Passionate About Technology, Driven by Innovation
    </h2>

    {/* About Content */}
    <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-slate-600">
      <p>
        I'm an aspiring Software Engineer with a strong passion for
        technology and software development. I enjoy building modern,
        responsive, and user-friendly web applications that transform
        ideas into meaningful digital experiences. My technical foundation
        includes HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS,
        and Sass.
      </p>

      <p>
        One of my key projects is a fully functional e-commerce
        application featuring product browsing, wishlist functionality,
        cart management, order processing, and an admin dashboard for
        product and user management. Building this project has helped me
        strengthen my practical development skills and understand how
        different application features work together.
      </p>

      <p>
        Beyond technical skills, I bring strong communication and
        problem-solving abilities, a collaborative mindset, and a
        willingness to learn. I enjoy tackling challenges, exploring new
        technologies, and continuously improving through hands-on
        projects.
      </p>

      <p>
        My long-term ambition is to become a skilled Software Engineer,
        contribute to innovative projects in the IT industry, and
        eventually establish my own business as an entrepreneur. I'm
        committed to growing both technically and professionally while
        creating useful and impactful digital solutions.
      </p>
    </div>
  </div>
</section>


);
}

export default About;
