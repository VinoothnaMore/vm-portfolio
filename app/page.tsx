"use client"; 
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink, Code2, Cpu, Briefcase, GraduationCap, FileBadge } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-black text-white px-8 pt-10 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-10 w-full max-w-7xl gap-6 items-stretch">
        
        {/* LEFT BOX: Introduction */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 bg-[#0d1117] border border-gray-800 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-start gap-10"
        >
          {/* Photo Alignment */}
          <div className="relative w-32 h-32 md:w-30 md:h-30 flex-shrink-0 overflow-hidden rounded-full">
            <Image 
              src="/GeminiProfilePicture.png" 
              alt="Vinoothna More" 
              fill 
              className="object-cover" 
            />
          </div>
          
          <div className="text-left">
            <h1 className="text-3xl font-bold mb-4">Vinoothna More</h1>
            <div className="space-y-3 text-gray-400">
              <p className="text-base leading-relaxed">
                I’m a Stevens Computer Science grad with a focus on building technology that solves real problems. 
                I’ve spent my time learning how to bridge the gap between software development and data engineering 
                because I believe the best solutions happen where they meet. Whether I’m architecting a backend system 
                or digging into data driven insights, I focus on creating tools that are clean and efficient. 
              </p>
              <p className="text-base leading-relaxed">
                I’m now looking for my next role and would love to connect with teams that are solving interesting problems.
              </p>
            </div>
          </div>
        </motion.section>

        {/* RIGHT BOX: Connect */}
        <motion.aside 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:col-span-3 bg-[#0d1117] border border-gray-800 rounded-2xl p-8 shadow-xl flex flex-col gap-4"
        >
          <h3 className="text-sm uppercase tracking-widest text-indigo-400 font-semibold mb-2">
            Connect
          </h3>
          
          {/* LinkedIn Link */}
          <a 
            href="https://www.linkedin.com/in/vinoothna-more-5845561b8/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500 transition-all"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">LinkedIn</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
          </a>

          {/* GitHub Link */}
          <a 
            href="https://github.com/VinoothnaMore" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500 transition-all"
          >
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">GitHub</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
          </a>

          {/* Contact Form */}
          <form 
            action="https://formspree.io/f/xgowezvz"
            method="POST"
            className="flex items-center gap-2 p-2 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500 transition-all">
              <Mail className="w-5 h-5 text-red-500 ml-1 flex-shrink-0" />
              <input 
                type="text" 
                name="message"
                placeholder="Type a message..." 
                className="bg-transparent border-none outline-none text-sm w-full py-1 text-gray-200 placeholder:text-gray-500"/>
          <button 
            type="submit"
              className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white p-2 rounded-lg transition-all">
            Send
          </button>
          </form>
        </motion.aside>

        {/* LEFT BOX: EXPERIENCE */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="md:col-span-5 bg-[#0d1117] border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-6 text-indigo-400">
            <Briefcase size={20} />
            <h2 className="text-xl font-bold text-white">Experience</h2>
          </div>
          
            <div className="flex flex-col gap-3"> {/* Vertical gap between cards */}

  {/* EXPERIENCE 1 */}
  <div className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-400 transition-all shadow-sm">
    <div className="flex flex-col gap-0">
      <h4 className="text-lg font-semibold text-white">Data Analyst</h4>
      <p className="text-gray-400 text-sm font-medium">Stevens Institute of Technology</p>
      
      <div className="flex flex-wrap gap-x-2 text-xs text-gray-500">
        <span>Aug 2024 - May 2025</span>
        <span>•</span>
        <span>10 months</span>
        <span>•</span>
        <span>Hoboken, New Jersey</span>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mt-2">
        Responsible for leading data driven transformations by optimizing budget controls and automating financial reporting.
        Translated complex trends into strategic growth and reengineered cross-functional workflows to maximize operational efficiency.
      </p>

      <div className="flex flex-wrap gap-1 mt-1">
        {["SQL", "Python", "Tableau", "Excel (VBA)", "Pandas", "Data Analysis", "Data Visualization"].map((tech) => (
          <span key={tech} className="px-2 py-1 text-[12px] bg-gray-800 text-gray-300 rounded-md border border-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* EXPERIENCE 2 */}
  <div className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-400 transition-all shadow-sm">
    <div className="flex flex-col gap-0">
      <h4 className="text-lg font-semibold text-white">Associate Software Engineer</h4>
      <p className="text-gray-400 text-sm font-medium">Accenture</p>
      
      <div className="flex flex-wrap gap-x-2 text-xs text-gray-500">
        <span>Aug 2022 - Jul 2023</span>
        <span>•</span>
        <span>1 year</span>
        <span>•</span>
        <span>Hyderabad</span>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mt-2">
        Improved application performance, automated data workflows, streamlined deployments, and modernized user interfaces, 
        delivering faster, more reliable systems and smoother user experiences across client-facing platforms.
      </p>

      <div className="flex flex-wrap gap-1 mt-1">
        {["Java", "React", "Angular", "Django", "Git", "REST APIs", "JavaScript", "Linux"].map((tech) => (
          <span key={tech} className="px-2 py-1 text-[12px] bg-gray-800 text-gray-300 rounded-md border border-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>

        {/* EXPERIENCE 3 */}
  <div className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-400 transition-all shadow-sm">
    <div className="flex flex-col gap-0">
      <h4 className="text-lg font-semibold text-white">Software Development Intern</h4>
      <p className="text-gray-400 text-sm font-medium">Tessrac Innovations</p>
      
      <div className="flex flex-wrap gap-x-2 text-xs text-gray-500">
        <span>May 2022 - Jul 2022</span>
        <span>•</span>
        <span>3 months</span>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mt-2">
        Built and deployed full-stack features, improved application performance, streamlined backend workflows, and delivered 
        reliable, production-ready code through testing, debugging, and close collaboration in an Agile team.
      </p>

      <div className="flex flex-wrap gap-1 mt-1">
        {["Python", "JavaScript", "SQL", "Agile", "Git", "Unit Testing", "CI/CD"].map((tech) => (
          <span key={tech} className="px-2 py-1 text-[12px] bg-gray-800 text-gray-300 rounded-md border border-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
  </div>
        </motion.section>

        {/* RIGHT BOX: EDUCATION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="md:col-span-5 bg-[#0d1117] border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-6 text-indigo-400">
            <GraduationCap size={20} />
            <h2 className="text-xl font-bold text-white">Education</h2>
          </div>
          <div className="flex flex-col gap-3"> {/* Vertical gap between cards */}

  {/* EDUCATION 1 */}
  <div className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-400 transition-all shadow-sm">
    <div className="flex flex-col gap-0">
      <h4 className="text-lg font-semibold text-white">Master of Science in Computer Science</h4>
      <p className="text-gray-400 text-sm font-medium">Stevens Institute of Technology</p>
      
      <div className="flex flex-wrap gap-x-2 text-sm text-gray-400">
        <span>Sep 2023 - May 2025</span>
        <span>•</span>
        <span>GPA: 3.85/4.0</span>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mt-2">
        Completed advanced studies in computer science, focused on software development, data analysis, algorithms, and 
        system design, and prepared for impactful roles in technology and data-driven fields.
      </p>

      <div className="flex flex-wrap gap-1 mt-1">
        {["Database Management Systems", "Advanced Algorithms & Design Implementation", "Foundations of Machine Learning", "Agile Methods for Software Development", "Data Analytics & Machine Learning", "Advanced Excel for Finance & Accounting"].map((tech) => (
          <span key={tech} className="px-2 py-1 text-[12px] bg-gray-800 text-gray-300 rounded-md border border-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>

        {/* EDUCATION 2 */}
  <div className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-400 transition-all shadow-sm">
    <div className="flex flex-col gap-0">
      <h4 className="text-lg font-semibold text-white">Bachelor of Technology in Computer Science & Engineering</h4>
      <p className="text-gray-400 text-sm font-medium">GITAM Deemed University</p>
      
      <div className="flex flex-wrap gap-x-2 text-sm text-gray-400">
        <span>Jul 2019 - Apr 2023</span>
        <span>•</span>
        <span>GPA: 3.7/4.0</span>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mt-2">
        Developed a comprehensive engineering background centered on problem-solving and system design. I prioritized 
        understanding core infrastructures like operating systems and networks while exploring advanced optimization and AI methodologies.
      </p>

      <div className="flex flex-wrap gap-1 mt-1">
        {["Engineering Mathematics", "Problem Solving & Programming", "Operating Systems", "Computer Networks", "Software Testing Methodologies", "Compiler Design Testing", "Cloud Computing", "Optimization Techniques", "Artificial Intelligence"].map((tech) => (
          <span key={tech} className="px-2 py-1 text-[12px] bg-gray-800 text-gray-300 rounded-md border border-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
  </div>

        </motion.section>


        {/* LEFT BOX: PROJECTS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
          className="md:col-span-6 bg-[#0d1117] border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-6 text-indigo-400">
            <Code2 size={20} />
            <h2 className="text-xl font-bold text-white">Projects</h2>
          </div>
          
            <div className="flex flex-col gap-3"> {/* Vertical gap between cards */}

  {/* PROJECT 1 */}
  <div className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-400 transition-all shadow-sm">
    <div className="flex flex-col gap-0">
      <h4 className="text-lg font-semibold text-white">AI Powered Personal Portfolio</h4>

      <p className="text-sm text-gray-400 leading-relaxed mt-2">
        A clean digital space to show my work and experience. It features an easy-to-use dashboard layout and a direct message bar to get in touch with me.
      </p>

      <div className="flex flex-wrap gap-1 mt-1">
        {["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"].map((tech) => (
          <span key={tech} className="px-2 py-1 text-[12px] bg-gray-800 text-gray-300 rounded-md border border-gray-700">
            {tech}
          </span>
        ))}
      </div>
        <div className="mt-3 border-gray-800 flex items-center justify-between">
      
      <a 
        href="https://github.com/VinoothnaMore/vm-portfolio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-indigo-400 transition-all transform hover:scale-110"
        title="View GitHub Repository"
      >
        <Github size={20} />
      </a>
    </div>
    </div>
  </div>

         {/* PROJECT 2 */}
  <div className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-400 transition-all shadow-sm">
    <div className="flex flex-col gap-0">
      <h4 className="text-lg font-semibold text-white">AI Powered Cervical Cancer Risk Assessment</h4>

      <p className="text-sm text-gray-400 leading-relaxed mt-2">
        Implemented a specialized deep learning architecture based on established research to predict cancer risk from 
        diagnostic image data. By optimizing data cleaning processes and refining the classification algorithms, the project 
        focused on enhancing the original model’s reliability and achieving higher precision in medical risk assessment.
      </p>

      <div className="flex flex-wrap gap-1 mt-1">
        {["Jupyter Notebook", "TensorFlow", "PyTorch", "NumPy", "Pandas", "Matplotlib"].map((tech) => (
          <span key={tech} className="px-2 py-1 text-[12px] bg-gray-800 text-gray-300 rounded-md border border-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </div>
    </div>
  </div>
        </motion.section>


        {/* RIGHT BOX: TECH STACK */}
        <motion.aside 
  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.1 }}
  className="md:col-span-4 flex flex-col gap-6">
  <div className="bg-[#0d1117] border border-gray-800 rounded-2xl p-6">

  <div className="flex items-center gap-2 mb-6 text-indigo-500">
    <Cpu size={20} />
    <h2 className="text-lg font-bold text-white">Technologies</h2>
  </div>

  {/* THE GRID CONTAINER */}
  <div className="grid grid-cols-5 gap-2"> 
    {[
      { name: "JavaScript", icon: <img src="https://skillicons.dev/icons?i=js" alt="JS" /> },
      { name: "TypeScript", icon: <img src="https://skillicons.dev/icons?i=ts" alt="TS" /> },
      { name: "React", icon: <img src="https://skillicons.dev/icons?i=react" alt="React" /> },
      { name: "Next.js", icon: <img src="https://skillicons.dev/icons?i=nextjs" alt="Next" /> },
      { name: "Tailwind", icon: <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" /> },
      { name: "Python", icon: <img src="https://skillicons.dev/icons?i=py" alt="Python" /> },
      { name: "GitHub", icon: <img src="https://skillicons.dev/icons?i=github" alt="GitHub" /> },
      { name: "Java", icon: <img src="https://skillicons.dev/icons?i=java" alt="Java" /> },
      { name: "Django", icon: <img src="https://skillicons.dev/icons?i=django" alt="Django" /> },
      { name: "SQL", icon: <img src="https://skillicons.dev/icons?i=mysql" alt="SQL" /> },
      { name: "Linux", icon: <img src="https://skillicons.dev/icons?i=linux" alt="Linux" /> },
      { name: "TensorFlow", icon: <img src="https://skillicons.dev/icons?i=tensorflow" alt="TensorFlow" /> },
      { name: "PyTorch", icon: <img src="https://skillicons.dev/icons?i=pytorch" alt="PyTorch" /> },
      { name: "Node.js", icon: <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" /> },
      { name: "Angular", icon: <img src="https://skillicons.dev/icons?i=angular" alt="Angular" /> },
      { name: "HTML", icon: <img src="https://skillicons.dev/icons?i=html" alt="HTML" /> },
      { name: "CSS", icon: <img src="https://skillicons.dev/icons?i=css" alt="CSS" /> },
      { name: "Azure", icon: <img src="https://skillicons.dev/icons?i=azure" alt="Microsoft Azure" /> },
      { name: "Notion", icon: <img src="https://skillicons.dev/icons?i=notion" alt="Notion" /> },
    ].map((tech) => (
      <div 
        key={tech.name} 
        className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-900/40 border border-gray-800 hover:border-indigo-500/50 transition-all aspect-square"
      >
        <div className="w-8 h-8 mb-2 flex items-center justify-center">
          {tech.icon}
        </div>
        <span className="text-[12px] text-gray-300 font-medium text-center leading-tight">
          {tech.name}
        </span>
      </div>
    ))}
  </div>
      </div>

      {/* BOTTOM CARD: Certifications */}
  <div className="bg-[#0d1117] border border-gray-800 rounded-2xl p-6 shadow-xl">
      
      <div className="flex items-center gap-2 mb-6 text-indigo-500">
    <FileBadge size={20} />
    <h2 className="text-lg font-bold text-white">Certification</h2>
  </div>
    
    <div className="space-y-4">
      {/* Certification - 1 */}
        <div>
          <h4 className="text-sm font-bold text-white">Oracle Certified Generative AI Professional</h4>
          <p className="text-[12px] text-gray-500">Issued Jan 2025</p>
      </div>
    </div>
  </div>
</motion.aside>

      </div>
    </main>
  );
}