"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "CelebralZip Private Limited",
    period: "Feb 2024 - July 2024",
    description: `Contributed to the core frontend using React, TypeScript, Material UI, and Redux/Zustand, focusing on scalable architecture and performance. Implemented lazy loading, real-time upload tracking with WebSockets, and robust form validation. Refactored large production codebases, improved state management, and enhanced overall UI consistency and maintainability.
`,
    color: "bg-primary",
  },
  {
    title: "Founding Full Stack Developer (AI)",
    company: "EpiphanyAI/VeerOne",
    period: "May 2024 - Jan 2025",
    description: `Founding engineer for VeerOne Search, partnering with a veteran Silicon Valley founder to build the product and scaled it to 265k+ users before it was sunset in 2024. I lead initiatives across backend, frontend, AI infrastructure and sometimes even DevOps. Transitioned web search infrastructure in-house, improved site performance, and developed interactive, reusable UI components. Enhanced search visibility through large-scale sitemap generation and optimized Next.js features for faster, more reliable user experiences.`,
    color: "bg-primary",
  },
  {
    title: "Full Stack Developer(AI)",
    company: "Induced AI",
    period: "Jan 2025 - Present",
    description: `Developed and deployed AI voice agents and web applications, contributing across multiple codebases and leading several client projects from prototype to production. Worked on internal tools for improving web search and lead extraction, optimized databases and APIs for performance, and implemented modular, event-driven architectures to enhance system scalability and automation. `,
    color: "bg-secondary",
  },
];

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  index,
  color,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
  color: string;
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-stretch justify-between md:justify-normal w-full mb-8 ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Spacer for Desktop */}
      <div className="hidden md:block w-5/12" />

      {/* Timeline Dot - Mobile Only */}
      <div className="absolute left-4 transform -translate-x-1/2 top-0 flex items-start justify-center w-8 h-full z-20 md:hidden">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-4 h-4 bg-primary rounded-full shadow-lg relative mt-6"
        >
          <motion.div
            className="absolute -inset-2 rounded-full border border-primary opacity-50"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1.5, opacity: 0.5 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className={`w-[calc(100%-3rem)] md:w-5/12 ml-12 md:ml-0 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900 relative z-10 hover:shadow-2xl transition-shadow duration-300`}
      >
        <div className="absolute top-6 -left-2 md:hidden w-4 h-4 bg-white dark:bg-slate-900 rotate-45 border-l border-b border-gray-100 dark:border-gray-800" />
        
        {/* Desktop Arrows */}
        <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-slate-900 rotate-45 border-gray-100 dark:border-gray-800 ${isEven ? "-right-2 border-r border-t" : "-left-2 border-l border-b"}`} />

        <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
          {title}
        </h3>
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
          {company}
        </h4>
        <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
          {period}
        </span>
        <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </motion.div>
    </div>
  );
};

const AnimatedExperiencePortfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br bg-slate-50 dark:bg-slate-950 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          id="career"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Career Journey</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Professional Experience
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
             Building scalable applications and solving complex problems with code.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Vertical Line - Left on Mobile, Center on Desktop */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />
          
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary z-0"
          />

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} color={exp.color} />
            ))}
          </div>
        </div>

        {/* More on this section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <motion.a
            href="https://dhrish-resume.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer"
          >
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-300">
              View Full Resume
            </span>
            <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedExperiencePortfolio;
