'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Github, Linkedin, FileDown } from 'lucide-react';

type Skill = { name: string; logo: string; highlight?: boolean };

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const projects = [
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
      { name: "GitHub", logo: "https://img.icons8.com/color/48/github.png" },
      { name: "Vercel", logo: "https://img.icons8.com/color/48/vercel.png" },
      { name: "VS Code", logo: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
      { name: "MySQL Workbench", logo: "https://img.icons8.com/color/48/mysql-logo.png" },
    ],
    concepts: [
      { name: "Machine Learning", logo: "https://img.icons8.com/color/48/artificial-intelligence.png" },
      { name: "Data Structures & Algorithms", logo: "https://img.icons8.com/color/48/data-configuration.png" },
    ],
    soft: [
      { name: "Leadership", logo: "https://img.icons8.com/color/48/leadership.png" },
      { name: "Teamwork", logo: "https://img.icons8.com/color/48/conference.png" },
      { name: "Problem Solving", logo: "https://img.icons8.com/?size=60&id=GsbULMQg5TS8&format=png" },
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

  const lightBg = 'bg-gradient-to-br from-pink-50 via-yellow-50 to-green-50';
  const lightCard = 'bg-white/60 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out';
  const lightText = 'text-gray-900';
  const lightSubText = 'text-gray-700';

  return (
    <main className={`${darkMode ? 'bg-gray-950 text-gray-100' : lightBg + ' ' + lightText} transition-colors duration-500 min-h-screen scroll-smooth`}>

      {/* NAV */}
      <header className={`${darkMode ? 'bg-gray-950/80 border-gray-800' : 'bg-white/60 border-gray-200'} sticky top-0 backdrop-blur-md border-b z-50 transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className={`font-bold text-xl ${darkMode ? 'text-white' : lightText}`}>G Saikumar</h1>
          <div className="flex items-center gap-4">
            <nav className={`flex gap-6 text-sm font-medium ${darkMode ? 'text-gray-100' : lightText}`}>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#certifications" className="hover:text-blue-400 transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </nav>
            <button onClick={toggleDarkMode} className="p-2 rounded-full text-lg">
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="text-blue-400">G Saikumar</span>
        </motion.h1>
        <p className={`mt-4 text-xl ${darkMode ? 'text-gray-300' : lightSubText}`}>Aspiring Full-Stack Developer | AI/ML Enthusiast</p>

        {/* HERO ACTION CARDS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center max-w-4xl mx-auto">
          {[
            { href: "/resume.pdf", icon: <FileDown size={20}/>, text: "Resume" },
            { href: "https://github.com/g-saikumar21", icon: <Github size={20}/>, text: "GitHub" },
            { href: "https://www.linkedin.com/in/g-saikumar21/", icon: <Linkedin size={20}/>, text: "LinkedIn" },
            { href: "mailto:saikumar70598@gmail.com", icon: <Mail size={20}/>, text: "Email" }
          ].map((item) => (
            <a key={item.text} href={item.href} target="_blank"
              className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20' : lightCard + ' ' + lightText} flex items-center justify-center gap-2 py-4 px-5 rounded-lg transition-all duration-300 ease-in-out`}>
              {item.icon}
              <span className="font-medium">{item.text}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <motion.section id="about" className="max-w-5xl mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2 ${darkMode ? 'text-white' : lightText}`}>About Me</h2>
        <p className={`mt-6 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : lightSubText}`}>
          I am a Computer Science student with experience in building projects using
          modern technologies like <span className="text-blue-400">AI/ML, Web Development, and Data Structures</span>.
          I enjoy working on challenging problems and contributing to impactful solutions.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <motion.section id="projects" className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2 ${darkMode ? 'text-white' : lightText}`}>Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {projects.map(p => (
            <motion.a whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 15px rgba(59,130,246,0.4)' : '0 0 15px rgba(249,168,212,0.5)' }} key={p.title} href={p.link} target="_blank"
              className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20' : lightCard + ' ' + lightText} block rounded-xl p-6 border transition-all duration-300 ease-in-out`}>
              <h3 className={`${darkMode ? 'text-white' : lightText} text-xl font-semibold`}>{p.title}</h3>
              <p className={`${darkMode ? 'text-gray-400' : lightSubText} mt-2 text-sm`}>{p.description}</p>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section id="skills" className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2 ${darkMode ? 'text-white' : lightText}`}>Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : lightText}`}>
                {category === "technical" ? "Technical Skills" :
                 category === "tools" ? "Tools" :
                 category === "concepts" ? "Concepts" : "Soft Skills"}
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {list.map(s => (
                  <motion.li whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 10px rgba(59,130,246,0.5)' : '0 0 10px rgba(249,168,212,0.5)' }} key={s.name}
                    className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:bg-blue-900 hover:text-white' : 'flex items-center gap-3 px-4 py-2 rounded-lg border bg-white/60 backdrop-blur-md'} flex items-center gap-3 transition-all duration-300 ease-in-out`}>
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full p-1 ${darkMode ? 'bg-gray-800' : 'bg-white/70'} ${s.highlight ? 'border-2 border-white' : ''}`}>
                      <img src={s.logo} alt={s.name} className="w-7 h-7 object-contain" />
                    </div>
                    <span>{s.name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section id="education" className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2 ${darkMode ? 'text-white' : lightText}`}>Education</h2>
        <div className="mt-6 space-y-6">
          {education.map(e => (
            <motion.div whileHover={{ scale: 1.02, boxShadow: darkMode ? '0 0 15px rgba(59,130,246,0.4)' : '0 0 15px rgba(249,168,212,0.3)' }} key={e.degree}
              className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20' : lightCard + ' ' + lightText} rounded-xl shadow-md p-6 border transition-all duration-300 ease-in-out`}>
              <h3 className={`${darkMode ? 'text-white' : lightText} text-xl font-semibold`}>{e.degree}</h3>
              <p className={`${darkMode ? 'text-gray-300' : lightSubText}`}>{e.school}</p>
              <p className={`${darkMode ? 'text-gray-400' : lightSubText} text-sm`}>
                {e.period} | {e.details}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CERTIFICATIONS */}
      <motion.section id="certifications" className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2 ${darkMode ? 'text-white' : lightText}`}>Certifications</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map(c => (
            <motion.a whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 15px rgba(59,130,246,0.4)' : '0 0 15px rgba(249,168,212,0.3)' }} key={c.name} href={c.file} target="_blank"
              className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20' : lightCard + ' ' + lightText} block rounded-xl p-5 border transition-all duration-300 ease-in-out`}>
              <h3 className={`${darkMode ? 'text-white' : lightText} text-lg font-semibold`}>{c.name}</h3>
              <p className={`${darkMode ? 'text-gray-400' : lightSubText} mt-2 text-sm`}>View Certificate</p>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section id="contact" className="max-w-6xl mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl font-semibold border-b-2 border-blue-500 inline-block pb-2 ${darkMode ? 'text-white' : lightText}`}>Contact</h2>
        <div className="mt-6 flex flex-col gap-3 text-lg items-center">
          <p className="flex items-center gap-2"><Phone size={18}/> +91 8867328175</p>
          <p className="flex items-center gap-2"><Mail size={18}/> 
            <a href="mailto:saikumar70598@gmail.com" className="underline text-blue-400">saikumar70598@gmail.com</a>
          </p>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className={`${darkMode ? 'bg-gray-950 border-gray-800 text-gray-400' : 'bg-white/60 border-gray-200 text-gray-700'} border-t mt-12 transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
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
