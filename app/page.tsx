"use client"; // Required for Framer Motion animations
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-black text-white px-8">
      <div className="grid grid-cols-1 md:grid-cols-10 w-full max-w-6xl gap-12 items-center">
        
        {/* Animated Introduction (70%) */}
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="relative w-48 h-48 md:w-24 md:h-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image src="/GeminiProfilePicture.png" alt="Vinoothna More" fill className="object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-4">Vinoothna More</h1>
            <p className="text-1lg text-gray-400">Hello, I’m Vinoothna. I am a Computer Science graduate from 
              Stevens Institute of Technology  with a genuine drive for building things that work. My experience 
              spans the entire lifecycle of a project, from writing clean, efficient code for comple software to 
              designing the data pipelines that power them. I enjoy the challenge of taking a complex problem and 
              turning it into a streamlined, functional solution.</p>

            <p className="text-1lg text-gray-400">Whether I’m working on software architecture, backend systems, or data-driven insights, I focus on creating technology that is both reliable and scalable. I am currently looking for my next professional chapter and am excited to bring my curiosity and technical background to a collaborative team.
            </p>
          </div>
        </motion.section>

        {/* Animated Social Links (30%) */}
        <motion.aside 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-3 flex flex-col gap-4 border-l border-gray-800 pl-12"
        >
          {/* ... your Social Link code from before ... */}
        </motion.aside>

      </div>
    </main>
  );
}