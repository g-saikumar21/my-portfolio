import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "AI Skin Cancer Detection",
      description: "CNN-based melanoma/BCC/SCC classifier with Grad-CAM explainability.",
      link: "https://github.com/21Saikumar"
    },
    {
      title: "Online Examination System",
      description: "Web-based platform for conducting exams digitally, enabling administrators to manage tests and students to take exams with instant results.",
      link: "https://github.com/21Saikumar"
    }
  ];

  const skills = [
    "C", "C++", "Python", "Java",
    "HTML", "CSS", "SQL (MySQL)",
    "Machine Learning", "Data Structures & Algorithms",
    "Leadership", "Teamwork", "Problem Solving"
  ];

  const certifications = [
    "Basics of Python – Infosys Springboard (Feb 2024)",
    "Python Fundamentals – Infosys Springboard (Jun–Jul 2024)",
    "VLSI Digital Design – Infosys Springboard (Mar–Apr 2025)",
    "Explore Machine Learning Using Python – Infosys Springboard (May 2025)"
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "AJ Institute of Engineering and Technology, Mangalore",
      period: "2022 – 2026",
      details: "CGPA: 7.5 / 10.0"
    },
    {
      degree: "Pre-University Course (PUC)",
      school: "New Sri Chaitanya P.U College, Bellari",
      period: "2020 – 2022",
      details: "Percentage: 82.83%"
    },
    {
      degree: "SSLC",
      school: "Sri Vellanki Ramakrishna Varma High School, Manvi",
      period: "2020",
      details: "Percentage: 83.2%"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* NAV */}
      <header className="sticky top-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-white">G Saikumar</Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="#projects" className="hover:text-blue-400">Projects</Link>
            <Link href="#skills" className="hover:text-blue-400">Skills</Link>
            <Link href="#education" className="hover:text-blue-400">Education</Link>
            <Link href="#certifications" className="hover:text-blue-400">Certifications</Link>
            <Link href="#contact" className="hover:text-blue-400">Contact</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="text-blue-400">G Saikumar</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300">Full-Stack Developer | AI/ML Enthusiast</p>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-400">
          Highly motivated Computer Science and Engineering student with a passion for coding, 
          problem-solving, and emerging technologies. Strong foundation in programming and 
          eager to contribute to impactful projects.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link href="#projects" className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600">
            View Projects
          </Link>
          <Link href="/resume.pdf" className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800">
            Download Resume
          </Link>
          <a
            href="http://www.linkedin.com/in/sai-kumar-b6a3142a6"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/21Saikumar"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {projects.map(p => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              className="block rounded-xl p-6 border border-gray-700 bg-gray-800 hover:shadow-xl hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{p.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Skills</h2>
        <ul className="mt-6 flex flex-wrap gap-3 text-sm">
          {skills.map(s => (
            <li
              key={s}
              className="px-4 py-2 border border-gray-700 rounded-full bg-gray-800 hover:bg-blue-500 hover:text-white transition"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Education</h2>
        <div className="mt-6 space-y-6">
          {education.map(e => (
            <div
              key={e.degree}
              className="bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-white">{e.degree}</h3>
              <p className="text-gray-300">{e.school}</p>
              <p className="text-sm text-gray-400">
                {e.period} | {e.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Certifications</h2>
        <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-gray-300">
          {certifications.map(c => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Contact</h2>
        <div className="mt-4 space-y-2 text-lg text-gray-300">
          <p>📍 Manvi, Raichur, India - 584120</p>
          <p>📞 +91 8867328175</p>
          <p>
            ✉️{" "}
            <a
              className="underline text-blue-400"
              href="mailto:saikumar70598@gmail.com"
            >
              saikumar70598@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 border-t border-gray-700 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} G Saikumar. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="http://www.linkedin.com/in/sai-kumar-b6a3142a6"
              target="_blank"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/21Saikumar"
              target="_blank"
              className="hover:text-blue-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
