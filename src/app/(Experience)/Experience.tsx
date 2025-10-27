"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "CelebralZip Private Limited",
    period: "Feb 2024 - July 2024",
    description: `Contributed to the core frontend using React, TypeScript, Material UI, and Redux, focusing on scalable architecture and performance. Implemented lazy loading, real-time upload tracking with WebSockets, and robust form validation. Refactored large production codebases, improved state management, and enhanced overall UI consistency and maintainability.
`,
    color: "bg-primary",
  },
  {
    title: "Full Stack Developer(AI)",
    company: "EpiphanyAI",
    period: "May 2024 - Jan 2025",
    description: `Collaborated with a Silicon Valley founder to build and scale VeerOne search (265k+ users), leading initiatives across backend, frontend, and DevOps. Transitioned web search infrastructure in-house, improved site performance, and developed interactive, reusable UI components. Enhanced search visibility through large-scale sitemap generation and optimized Next.js features for faster, more reliable user experiences.`,
    color: "bg-primary",
  },
  {
    title: "Full Stack Developer(AI)",
    company:"Induced AI",
    period: "Jan 2025 - Present",
    description: `Developed and deployed AI voice agents and web applications, contributing across multiple codebases and leading several client projects from prototype to production. Worked on internal tools for improving web search and lead extraction, optimized databases and APIs for performance, and implemented modular, event-driven architectures to enhance system scalability and automation. `,
    color: "bg-secondary",
  },
];

const ExperienceCard = ({ title, company, period, description, index, color }: { title: string; company: string; period: string; description: string; index: number; color: string }) => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
      scale: 0.9,
      rotateY: -10,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.2 } }}
      className={`${color} shadow-xl  rounded-lg p-6 mb-8 w-5/6 ${
        index % 2 === 0 ? "ml-auto" : "mr-auto"
      } relative z-10 cursor-pointer overflow-hidden`}
    >
      <motion.div
        className="absolute inset-0 bg-white opacity-90 z-0"
        whileHover={{ opacity: 0.95, transition: { duration: 0.2 } }}
      />
      <motion.div className="relative z-10">
        <motion.h3
          variants={contentVariants}
          className="text-2xl font-bold text-gray-800 mb-2"
        >
          {title}
        </motion.h3>
        <motion.h4
          variants={contentVariants}
          className="text-xl font-semibold text-gray-700 mb-1"
        >
          {company}
        </motion.h4>
        <motion.p
          variants={contentVariants}
          className="text-md text-gray-600 mb-3"
        >
          {period}
        </motion.p>
        <motion.p variants={contentVariants} className="text-gray-700">
          <ReactMarkdown>{description}</ReactMarkdown>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const TimelineDot = ({ index }: { index: number }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full z-20 shadow-lg"
  >
    <motion.div
      className="w-full h-full rounded-full bg-white"
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
    />
  </motion.div>
);

const AnimatedTimeline = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleY }}
      className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary origin-top z-0"
    />
  );
};

const AnimatedExperiencePortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#f8fafc] dark:bg-[#0f172a] py-16">
      <div className="max-w-4xl mx-auto px-8 pb-4">
        <motion.div
          id="career"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 0, opacity: 0 }}
          transition={{ type: "tween", duration: 3 }}
          viewport={{ once: true }}
          className="text-xl text-center "
        >
          My Career Journey
        </motion.div>
        <div className="text-center space-y-1 pb-6">
          <h1 className="text-center text-4xl md:text-5xl sm:text-5xl font-semibold capitalize  md:mt-0 ">
            Staying with the problems long enough
          </h1>
          <p className="text-gray-500">
            not intelligent , just persistent
          </p>
        </div>

        <div className="relative">
          <AnimatedTimeline />
          {experiences.map((exp, index) => (
            <React.Fragment key={index}>
              <ExperienceCard {...exp} index={index} />
              <TimelineDot index={index} />
            </React.Fragment>
          ))}
        </div>

        {/* More on this section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="https://dhrish-resume.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
          >
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-300">
              More on this
            </span>
            <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedExperiencePortfolio;
