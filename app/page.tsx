'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Github, Linkedin, FileDown, ArrowUp } from 'lucide-react';

type Skill = { name: string; logo: string; highlight?: boolean };
type Project = { title: string; description: string; link: string; techStack?: string };

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // --- Data (restored) ---
  const projects: Project[] = [
    {
      title: "AI Skin Cancer Detection",
      description: "CNN-based melanoma/BCC/SCC classifier with Grad-CAM explainability.",
      link: "https://github.com/vignesh-p3007/skin-cancer-detection.git",
    },
    {
      title: "Courier Management System",
      description: "PHP + MySQL courier system for managing parcels, tracking deliveries, branches, and staff.",
      link: "https://github.com/g-saikumar21/courier-management-system",
    },
    {
      title: "Online Examination System",
      description: "Web-based platform for conducting exams digitally with instant results.",
      link: "https://github.com/g-saikumar21",
    },
  ];

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

  const certifications = [
    { name: "Prompt Engineering – UpGrad (2025)", file: "/certificates/Prompt_Engineering.pdf" },
    { name: "Microsoft Certifications – Azure, AI, and Security Fundamentals (2025)", file: "/certificates/Microsoft Azure Learning/Microsoft_Certifications.pdf" },
    { name: "Basics of Python – Infosys Springboard (Feb 2024)", file: "/certificates/Basics of Python.pdf" },
    { name: "Python Fundamentals – Infosys Springboard (Jun–Jul 2024)", file: "/certificates/Python Fundamentals.pdf" },
    { name: "VLSI Digital Design – Infosys Springboard (Mar–Apr 2025)", file: "/certificates/VLSI Digital Design - Chip Design and Verilog Programming.pdf" },
    { name: "Explore Machine Learning Using Python – Infosys Springboard (May 2025)", file: "/certificates/Explore Machine Learning using Python.pdf" },
    { name: "TypeScript – Infosys Springboard (2025)", file: "/certificates/TypeScript.pdf" },
    { name: "Time Management – Infosys Springboard (2025)", file: "/certificates/Time Management.pdf" },
  ];

  const education = [
    { degree: "Bachelor of Engineering in Computer Science", school: "AJ Institute of Engineering and Technology, Mangalore", period: "2022 – 2026", details: "CGPA: 7.5 / 10.0" },
    { degree: "Pre-University Course (PUC)", school: "New Sri Chaitanya P.U College, Bellari", period: "2020 – 2022", details: "Percentage: 82%" },
    { degree: "SSLC", school: "Sri Vellanki Ramakrishna Varma High School, Manvi", period: "2020", details: "Percentage: 83%" },
  ];

  // Light mode styles (restored)
  const lightBg = 'bg-gradient-to-br from-pink-50 via-yellow-50 to-green-50';
  const lightCard = 'bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl hover:shadow-pink-300/50 transition-transform';
  const lightText = 'text-gray-900';
  const lightSubText = 'text-gray-700';

  // --- JSX ---
  return (
    <main className={`${darkMode ? 'bg-gray-950 text-gray-100' : lightBg + ' ' + lightText} transition-colors duration-500 min-h-screen`}>

      {/* NAV */}
      <header className={`${darkMode ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-200'} sticky top-0 backdrop-blur-md border-b z-50 transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className={`font-bold text-lg sm:text-xl ${darkMode ? 'text-white' : lightText}`}>G Saikumar</h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className={`hidden sm:flex gap-6 text-sm font-medium ${darkMode ? 'text-gray-100' : lightText}`}>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#certifications" className="hover:text-blue-400 transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </nav>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full text-lg sm:text-xl">
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="text-blue-400">G Saikumar</span>
        </motion.h1>
        <p className={`mt-4 text-base sm:text-lg md:text-xl ${darkMode ? 'text-gray-300' : lightSubText}`}>Aspiring Full-Stack Developer | AI/ML Enthusiast</p>
      </section>

      {/* FOUR HIGHLIGHT BOXES BELOW HERO (CENTERED CONTENT) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Resume */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 15px rgba(59,130,246,0.4)' : '0 0 15px rgba(249,168,212,0.5)' }}
          className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20' : lightCard + ' ' + lightText} flex flex-col items-center justify-center rounded-xl p-5 sm:p-6 border transition-all duration-500`}
        >
          <FileDown size={24} className="text-blue-400 mb-2" />
          <span className={`${darkMode ? 'text-white' : lightText} text-lg font-semibold`}>Resume</span>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/g-saikumar21"
          target="_blank"
          whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 15px rgba(59,130,246,0.4)' : '0 0 15px rgba(249,168,212,0.5)' }}
          className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20' : lightCard + ' ' + lightText} flex flex-col items-center justify-center rounded-xl p-5 sm:p-6 border transition-all duration-500`}
        >
          <Github size={24} className={darkMode ? 'text-white mb-2' : 'text-gray-800 mb-2'} />
          <span className={`${darkMode ? 'text-white' : lightText} text-lg font-semibold`}>GitHub</span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/saikumar"
          target="_blank"
          whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 15px rgba(59,130,246,0.4)' : '0 0 15px rgba(249,168,212,0.5)' }}
          className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20' : lightCard + ' ' + lightText} flex flex-col items-center justify-center rounded-xl p-5 sm:p-6 border transition-all duration-500`}
        >
          <Linkedin size={24} className="text-blue-400 mb-2" />
          <span className={`${darkMode ? 'text-white' : lightText} text-lg font-semibold`}>LinkedIn</span>
        </motion.a>

        {/* Gmail */}
        <motion.a
          href="mailto:gsaikumar2121@gmail.com"
          whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 15px rgba(59,130,246,0.4)' : '0 0 15px rgba(249,168,212,0.5)' }}
          className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20' : lightCard + ' ' + lightText} flex flex-col items-center justify-center rounded-xl p-5 sm:p-6 border transition-all duration-500`}
        >
          <Mail size={24} className="text-red-500 mb-2" />
          <span className={`${darkMode ? 'text-white' : lightText} text-lg font-semibold`}>Gmail</span>
        </motion.a>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className={`text-2xl sm:text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2 ${darkMode ? 'text-white' : lightText}`}>Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map(p => (
            <motion.a whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 15px rgba(59,130,246,0.4)' : '0 0 15px rgba(249,168,212,0.5)' }} key={p.title} href={p.link} target="_blank"
              className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20' : lightCard + ' ' + lightText} block rounded-xl p-5 sm:p-6 border transition-all duration-500`}>
              <h3 className={`${darkMode ? 'text-white' : lightText} text-lg sm:text-xl font-semibold`}>{p.title}</h3>
              <p className={`${darkMode ? 'text-gray-400' : lightSubText} mt-2 text-sm sm:text-base`}>{p.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className={`text-2xl sm:text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2 ${darkMode ? 'text-white' : lightText}`}>Skills</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${darkMode ? 'text-white' : lightText}`}>
                {category === "technical" ? "Technical Skills" :
                 category === "tools" ? "Tools" :
                 category === "concepts" ? "Concepts" : "Soft Skills"}
              </h3>
              <ul className="flex flex-col gap-3 text-sm sm:text-base">
                {list.map(s => (
                  <motion.li whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 10px rgba(59,130,246,0.5)' : '0 0 10px rgba(249,168,212,0.5)' }} key={s.name}
                    className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:bg-blue-900 hover:text-white' : 'flex items-center gap-3 px-3 sm:px-4 py-2 rounded-lg border bg-white/60 backdrop-blur-md'} flex items-center gap-3 transition-all duration-500`}>
                    <div className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full p-1 ${darkMode ? 'bg-gray-800' : 'bg-white/70'} ${s.highlight ? 'border-2 border-white' : ''}`}>
                      <img src={s.logo} alt={s.name} className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                    </div>
                    <span>{s.name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className={`text-2xl sm:text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2 ${darkMode ? 'text-white' : lightText}`}>Education</h2>
        <div className="mt-6 space-y-6">
          {education.map(e => (
            <motion.div whileHover={{ scale: 1.02, boxShadow: darkMode ? '0 0 15px rgba(59,130,246,0.4)' : '0 0 15px rgba(249,168,212,0.3)' }} key={e.degree}
              className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20' : lightCard + ' ' + lightText} rounded-xl shadow-md p-5 sm:p-6 border transition-all duration-500`}>
              <h3 className={`${darkMode ? 'text-white' : lightText} text-lg sm:text-xl font-semibold`}>{e.degree}</h3>
              <p className={`${darkMode ? 'text-gray-300' : lightSubText}`}>{e.school}</p>
              <p className={`${darkMode ? 'text-gray-400' : lightSubText} text-sm`}>
                {e.period} | {e.details}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className={`text-2xl sm:text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2 ${darkMode ? 'text-white' : lightText}`}>Certifications</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map(c => (
            <motion.a whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 15px rgba(59,130,246,0.4)' : '0 0 15px rgba(249,168,212,0.3)' }} key={c.name} href={c.file} target="_blank"
              className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20' : lightCard + ' ' + lightText} block rounded-xl p-4 sm:p-5 border transition-all duration-500`}>
              <h3 className={`${darkMode ? 'text-white' : lightText} text-base sm:text-lg font-semibold`}>{c.name}</h3>
              <p className={`${darkMode ? 'text-gray-400' : lightSubText} mt-2 text-sm`}>View Certificate</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h2 className={`text-2xl sm:text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2 ${darkMode ? 'text-white' : lightText}`}>Contact</h2>
        <div className="mt-6 flex flex-col gap-3 text-base sm:text-lg items-center">
          <p className="flex items-center gap-2"><Phone size={18}/> +91 8867328175</p>
          <p className="flex items-center gap-2"><Mail size={18}/> 
            <a href="mailto:saikumar70598@gmail.com" className="underline text-blue-400 break-all">saikumar70598@gmail.com</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`${darkMode ? 'bg-gray-950 border-gray-800 text-gray-400' : 'bg-white/80 border-gray-200 text-gray-700'} border-t mt-12 transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} G Saikumar. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/g-saikumar21/" target="_blank" className="hover:text-blue-400"><Linkedin size={18}/></a>
            <a href="https://github.com/g-saikumar21" target="_blank" className="hover:text-blue-400"><Github size={18}/></a>
            <a href="mailto:saikumar70598@gmail.com" className="hover:text-blue-400"><Mail size={18}/></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
