"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, FileDown, Sun, Moon } from "lucide-react";

// ✅ TypeScript type for skills
type Skill = {
  name: string;
  logo: string;
  highlight?: boolean; // optional property
};

export default function Home() {
  // ===== Dark/Light mode state =====
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const projects = [
    {
      title: "AI Skin Cancer Detection",
      description:
        "CNN-based melanoma/BCC/SCC classifier with Grad-CAM explainability.",
      link: "https://github.com/vignesh-p3007/skin-cancer-detection.git",
    },
    {
      title: "Courier Management System",
      description:
        "PHP + MySQL courier system for managing parcels, tracking deliveries, branches, and staff.",
      link: "https://github.com/g-saikumar21/courier-management-system",
    },
    {
      title: "Online Examination System",
      description:
        "Web-based platform for conducting exams digitally with instant results.",
      link: "https://github.com/g-saikumar21",
    },
  ];

  // ✅ Skills with highlight property (TypeScript-safe)
  const skills: Record<string, Skill[]> = {
    technical: [
      { name: "C", logo: "https://img.icons8.com/color/48/c-programming.png" },
      { name: "C++", logo: "https://img.icons8.com/color/48/c-plus-plus-logo.png" },
      { name: "Python", logo: "https://img.icons8.com/color/48/python.png" },
      { name: "Java", logo: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
      { name: "HTML", logo: "https://img.icons8.com/color/48/html-5.png" },
      { name: "CSS", logo: "https://img.icons8.com/color/48/css3.png" },
      { name: "SQL (MySQL)", logo: "https://img.icons8.com/color/48/mysql-logo.png" },
    ],
    tools: [
      { name: "Git", logo: "https://img.icons8.com/color/48/git.png" },
      { name: "GitHub", logo: "https://img.icons8.com/color/48/github.png", highlight: true },
      { name: "Vercel", logo: "https://img.icons8.com/color/48/vercel.png", highlight: true },
      { name: "VS Code", logo: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
      { name: "MySQL Workbench", logo: "https://img.icons8.com/color/48/mysql-logo.png" },
    ],
    concepts: [
      { name: "Machine Learning", logo: "https://img.icons8.com/color/48/artificial-intelligence.png", highlight: true },
      { name: "Data Structures & Algorithms", logo: "https://img.icons8.com/color/48/data-configuration.png", highlight: true },
    ],
    soft: [
      { name: "Leadership", logo: "https://img.icons8.com/color/48/leadership.png", highlight: true },
      { name: "Teamwork", logo: "https://img.icons8.com/color/48/conference.png", highlight: true },
      { name: "Problem Solving", logo: "https://img.icons8.com/?size=60&id=GsbULMQg5TS8&format=png", highlight: true },
    ],
  };

  // ✅ Certifications (Prompt Engineering updated to UpGrad)
  const certifications = [
    {
      name: "Prompt Engineering – UpGrad (2025)",
      file: "/certificates/Prompt_Engineering.pdf",
    },
    {
      name: "Microsoft Certifications – Azure, AI, and Security Fundamentals (2025)",
      file: "/certificates/Microsoft Azure Learning/Microsoft_Certifications.pdf",
    },
    { name: "Basics of Python – Infosys Springboard (Feb 2024)", file: "/certificates/Basics of Python.pdf" },
    { name: "Python Fundamentals – Infosys Springboard (Jun–Jul 2024)", file: "/certificates/Python Fundamentals.pdf" },
    { name: "VLSI Digital Design – Infosys Springboard (Mar–Apr 2025)", file: "/certificates/VLSI Digital Design - Chip Design and Verilog Programming.pdf" },
    { name: "Explore Machine Learning Using Python – Infosys Springboard (May 2025)", file: "/certificates/Explore Machine Learning using Python.pdf" },
    { name: "TypeScript – Infosys Springboard (2025)", file: "/certificates/TypeScript.pdf" },
    { name: "Time Management – Infosys Springboard (2025)", file: "/certificates/Time Management.pdf" },
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
    <main className={`${darkMode ? "dark" : ""} min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100`}>
      {/* NAV */}
      <header className="sticky top-0 bg-gray-950/80 dark:bg-gray-100/80 backdrop-blur-md border-b border-gray-800 dark:border-gray-300 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-white dark:text-black">
            G Saikumar
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="#about" className="hover:text-blue-400 dark:hover:text-blue-600">About</Link>
            <Link href="#projects" className="hover:text-blue-400 dark:hover:text-blue-600">Projects</Link>
            <Link href="#skills" className="hover:text-blue-400 dark:hover:text-blue-600">Skills</Link>
            <Link href="#education" className="hover:text-blue-400 dark:hover:text-blue-600">Education</Link>
            <Link href="#certifications" className="hover:text-blue-400 dark:hover:text-blue-600">Certifications</Link>
            <Link href="#contact" className="hover:text-blue-400 dark:hover:text-blue-600">Contact</Link>
          </nav>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 rounded-full bg-gray-700 dark:bg-gray-200 text-white dark:text-black hover:bg-gray-600 dark:hover:bg-gray-300 transition">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="text-blue-400">G Saikumar</span>
        </motion.h1>
        <p className="mt-4 text-xl text-gray-300 dark:text-gray-700">
          Aspiring Full-Stack Developer | AI/ML Enthusiast
        </p>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-400 dark:text-gray-600">
          Highly motivated Computer Science and Engineering student with a passion for coding,
          problem-solving, and emerging technologies. Strong foundation in programming and
          eager to contribute to impactful projects.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link href="#projects" className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600">
            View Projects
          </Link>
          <Link href="/resume.pdf" className="px-6 py-3 flex items-center gap-2 rounded-xl border border-gray-600 dark:border-gray-400 hover:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-black">
            <FileDown size={18}/> Resume
          </Link>
          <a href="https://www.linkedin.com/in/g-saikumar21/" target="_blank" className="px-6 py-3 flex items-center gap-2 rounded-xl border border-gray-600 dark:border-gray-400 hover:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-black">
            <Linkedin size={18}/> LinkedIn
          </a>
          <a href="https://github.com/g-saikumar21" target="_blank" className="px-6 py-3 flex items-center gap-2 rounded-xl border border-gray-600 dark:border-gray-400 hover:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-black">
            <Github size={18}/> GitHub
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">About Me</h2>
        <p className="mt-6 text-lg text-gray-300 dark:text-gray-700 leading-relaxed">
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
              className="block rounded-xl p-6 border border-gray-700 bg-gray-900 dark:bg-gray-100 dark:border-gray-300 hover:shadow-xl hover:shadow-blue-500/20 transition">
              <h3 className="text-xl font-semibold text-white dark:text-black">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-400 dark:text-gray-700">{p.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-white dark:text-black mb-4">
                {category === "technical" ? "Technical Skills" :
                 category === "tools" ? "Tools" :
                 category === "concepts" ? "Concepts" : "Soft Skills"}
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {list.map(s => (
                  <motion.li whileHover={{ scale: 1.05 }} key={s.name}
                    className="flex items-center gap-3 px-4 py-2 border border-gray-700 dark:border-gray-300 rounded-lg bg-gray-900 dark:bg-gray-100 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white dark:hover:text-black transition">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full p-1 bg-gray-800 dark:bg-gray-200 ${s.highlight ? "border-2 border-white dark:border-black" : ""}`}>
                      <img src={s.logo} alt={s.name} className="w-7 h-7 object-contain" />
                    </div>
                    <span className="text-white dark:text-black">{s.name}</span>
                  </motion.li>
                ))}
              </ul>
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
              className="bg-gray-900 dark:bg-gray-100 rounded-xl shadow-md p-6 border border-gray-700 dark:border-gray-300 hover:shadow-lg hover:shadow-blue-500/20 transition">
              <h3 className="text-xl font-semibold text-white dark:text-black">{e.degree}</h3>
              <p className="text-gray-300 dark:text-gray-700">{e.school}</p>
              <p className="text-sm text-gray-400 dark:text-gray-600">
                {e.period} | {e.details}
              </p>
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
              className="block rounded-xl p-5 border border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-100 hover:shadow-xl hover:shadow-blue-500/20 transition">
              <h3 className="text-lg font-semibold text-white dark:text-black">{c.name}</h3>
              <p className="text-sm text-gray-400 dark:text-gray-700 mt-2">View Certificate</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2">Contact</h2>
        <div className="mt-6 flex flex-col gap-3 text-lg text-gray-300 dark:text-gray-700 items-center">
          <p className="flex items-center gap-2"><Phone size={18}/> +91 8867328175</p>
          <p className="flex items-center gap-2"><Mail size={18}/> 
            <a href="mailto:saikumar70598@gmail.com" className="underline text-blue-400 dark:text-blue-600">saikumar70598@gmail.com</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 dark:bg-gray-100 border-t border-gray-800 dark:border-gray-300 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 dark:text-gray-700">
          <p>© {new Date().getFullYear()} G Saikumar. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/g-saikumar21/" target="_blank" className="hover:text-blue-400 dark:hover:text-blue-600"><Linkedin size={18}/></a>
            <a href="https://github.com/g-saikumar21" target="_blank" className="hover:text-blue-400 dark:hover:text-blue-600"><Github size={18}/></a>
            <a href="mailto:saikumar70598@gmail.com" target="_blank" className="hover:text-blue-400 dark:hover:text-blue-600"><Mail size={18}/></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
