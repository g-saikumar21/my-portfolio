"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, FileDown } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "AI Skin Cancer Detection",
      description:
        "CNN-based melanoma/BCC/SCC classifier with Grad-CAM explainability.",
      link: "https://github.com/g-saikumar21",
    },
    {
      title: "Courier Management System",
      description:
        "PHP + MySQL system for courier tracking, parcel updates, and branch management.",
      link: "https://github.com/g-saikumar21/courier-management-system",
    },
    {
      title: "Online Examination System",
      description:
        "Web platform for digital exams with admin and student features.",
      link: "https://github.com/g-saikumar21",
    },
  ];

  // ✅ Correct logos set
  const skills = {
    "Technical Skills": [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    "Tools": [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", bordered: true },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "MySQL Workbench", logo: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
    ],
    "Concepts": [
      { name: "Machine Learning", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" }, // ✅ AI/Brain logo
      { name: "Data Structures & Algorithms", logo: "https://cdn-icons-png.flaticon.com/512/2621/2621040.png" },
    ],
    "Soft Skills": [
      { name: "Leadership", logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
      { name: "Teamwork", logo: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png" }, // ✅ group of people
      { name: "Problem Solving", logo: "https://cdn-icons-png.flaticon.com/512/4257/4257483.png", bordered: true }, // ✅ only this one stays bordered
    ],
  };

  const certifications = [
    { name: "Basics of Python – Infosys Springboard (Feb 2024)", file: "/certificates/Basics of Python.pdf" },
    { name: "Python Fundamentals – Infosys Springboard (Jun–Jul 2024)", file: "/certificates/Python Fundamentals.pdf" },
    { name: "VLSI Digital Design – Infosys Springboard (Mar–Apr 2025)", file: "/certificates/VLSI Digital Design - Chip Design and Verilog Programming.pdf" },
    { name: "Explore Machine Learning Using Python – Infosys Springboard (May 2025)", file: "/certificates/Explore Machine Learning using Python.pdf" },
    { name: "TypeScript – Infosys Springboard (2025)", file: "/certificates/TypeScript.pdf" },
    { name: "Time Management – Infosys Springboard (2025)", file: "/certificates/Time Management.pdf" },
    {
      name: "Microsoft Certifications – Azure, AI, and Security Fundamentals (2025)",
      file: "/certificates/Microsoft Azure Learning/Microsoft_Certifications.pdf",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "AJ Institute of Engineering and Technology, Mangalore",
      period: "2022 – 2026",
      details: "CGPA: 7.5 / 10.0",
    },
    {
      degree: "Pre-University Course (PUC)",
      school: "New Sri Chaitanya P.U College, Bellari",
      period: "2020 – 2022",
      details: "Percentage: 82%",
    },
    {
      degree: "SSLC",
      school: "Sri Vellanki Ramakrishna Varma High School, Manvi",
      period: "2020",
      details: "Percentage: 83%",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100">
      {/* NAV */}
      <header className="sticky top-0 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-white">G Saikumar</Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="#about" className="hover:text-blue-400">About</Link>
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
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="text-blue-400">G Saikumar</span>
        </motion.h1>
        <p className="mt-4 text-xl text-gray-300">
          Aspiring Full-Stack Developer | AI/ML Enthusiast
        </p>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-400">
          Highly motivated Computer Science and Engineering student with a passion for coding,
          problem-solving, and emerging technologies. Strong foundation in programming and
          eager to contribute to impactful projects.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link href="#projects" className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600">View Projects</Link>
          <Link href="/resume.pdf" className="px-6 py-3 flex items-center gap-2 rounded-xl border border-gray-600 hover:bg-gray-800">
            <FileDown size={18}/> Resume
          </Link>
          <a href="https://www.linkedin.com/in/g-saikumar21/" target="_blank"
            className="px-6 py-3 flex items-center gap-2 rounded-xl border border-gray-600 hover:bg-gray-800">
            <Linkedin size={18}/> LinkedIn
          </a>
          <a href="https://github.com/g-saikumar21" target="_blank"
            className="px-6 py-3 flex items-center gap-2 rounded-xl border border-gray-600 hover:bg-gray-800">
            <Github size={18}/> GitHub
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">About Me</h2>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          I am a Computer Science student with experience in building projects using
          modern technologies like <span className="text-blue-400">AI/ML, Web Development, and Data Structures</span>.
          I enjoy working on challenging problems and contributing to impactful solutions.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {projects.map(p => (
            <motion.a whileHover={{ scale: 1.05 }} key={p.title} href={p.link} target="_blank"
              className="block rounded-xl p-6 border border-gray-700 bg-gray-900 hover:shadow-xl hover:shadow-blue-500/20 transition">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{p.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-col gap-3">
                {items.map(s => (
                  <motion.div whileHover={{ scale: 1.05 }} key={s.name}
                    className="flex items-center gap-3 px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 hover:bg-blue-500 hover:text-white transition">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${s.bordered ? "bg-white p-1 border" : ""}`}>
                      <img src={s.logo} alt={s.name} className="w-7 h-7 object-contain" />
                    </div>
                    <span>{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Education</h2>
        <div className="mt-6 space-y-6">
          {education.map(e => (
            <motion.div whileHover={{ scale: 1.02 }} key={e.degree}
              className="bg-gray-900 rounded-xl shadow-md p-6 border border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition">
              <h3 className="text-xl font-semibold text-white">{e.degree}</h3>
              <p className="text-gray-300">{e.school}</p>
              <p className="text-sm text-gray-400">{e.period} | {e.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Certifications</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map(c => (
            <motion.a whileHover={{ scale: 1.05 }} key={c.name} href={c.file} target="_blank"
              className="block rounded-xl p-5 border border-gray-700 bg-gray-900 hover:shadow-xl hover:shadow-blue-500/20 transition">
              <h3 className="text-lg font-semibold text-white">{c.name}</h3>
              <p className="text-sm text-gray-400 mt-2">View Certificate</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Contact</h2>
        <div className="mt-6 flex flex-col gap-3 text-lg text-gray-300 items-center">
          <p className="flex items-center gap-2"><Phone size={18}/> +91 8867328175</p>
          <p className="flex items-center gap-2"><Mail size={18}/> 
            <a href="mailto:saikumar70598@gmail.com" className="underline text-blue-400">saikumar70598@gmail.com</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} G Saikumar. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/g-saikumar21/" target="_blank" className="hover:text-blue-400"><Linkedin size={18}/></a>
            <a href="https://github.com/g-saikumar21" target="_blank" className="hover:text-blue-400"><Github size={18}/></a>
            <a href="mailto:saikumar70598@gmail.com" target="_blank" className="hover:text-blue-400"><Mail size={18}/></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
