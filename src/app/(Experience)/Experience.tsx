"use client";
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ReactMarkdown from "react-markdown";

const experiences = [
  {
    title: "AI Full Stack Engineer",
    company: "Induced",
    period: "Jan 2025 - Present",
    description: `Working as a founding engineer at Induced, developing cutting-edge AI solutions and voice agents. \n\n -Developed voice agents with multiple providers, incorporating call and web application options, resulting in estimated savings of over $10,000 \n\n -Designed scalable REST APIs in Node.js/Express and integrated them seamlessly with MongoDB, supporting high-volume data access for multiple client software \n\n -Created three client demos, managing the end-to-end development process \n\n -Optimized SQL and MongoDB queries to enhance API call performance by 10x \n\n -Effectively transitioned between five different codebases to contribute to various services \n\n -Collaborated on an internal web search tool to replace web search APIs for web context in LLMs, improving the accuracy of web results \n\n -Designed an event-driven, object-oriented architecture to ensure modular code development \n\n -Created 3+ packages, including notification, event bus, etc, improving modularity of the code in the monorepo`,
    color: "bg-primary",
  },
  {
    title: "Founding AI Fullstack Engineer",
    company: "VeerOne (EpiphanyAI)",
    period: "May 2024 - Jan 2025",
    description: `A founding engineer who contributed heavily to building VeerOne search (now sunset with 265k+ lifetime users). \n\n -Collaborated with a seasoned Silicon Valley founder (over $400M in acquisitions) for building VeerOne search \n\n -Created the vercel ai sdk tooling functionality manually to use non supported llms like llama70b,qwen,etc for inference providers like groq,fireworks(reduced cost by 80%) \n\n -Migrated from Tavily to SearX for sourcing media and news, cutting costs by 90%+ \n\n -Generated sitemaps for 200K+ queries, enhancing search visibility \n\n -Resolved TTL DevOps errors, frontend exceptions, and emergency production issues \n\n -Developed underhood agent functionality in Vercel AI SDK to support widgets \n\n -Created finance, weather and other widgets to enhance user engagement \n\n -Designed AI evaluation frameworks to assess responses for privacy, security, and content moderation (e.g., violence)`,
    color: "bg-primary",
  },
  {
    title: "Software Developer Internship",
    company: "CerebralZip Technologies Pvt. Ltd.",
    period: "Feb 2024 - Jul 2024",
    description: `Worked on the core frontend of the website using React.js, Material UI, TypeScript, and React Redux. \n\n -Developed a mechanism to lazy load a react component for optimization \n\n -Developed a robust file upload system capable of handling large files efficiently using web sockets \n\n -Contributed to restructuring and improving the maintainability of a large-scale production application \n\n -Worked on debugging and fixing production issues, ensuring system reliability \n\n -Fixed React re-rendering issues to increase the user experience \n\n -Implemented global state management using Redux and useContext, ensuring efficient state handling across the application \n\n -Implemented form validation and enhanced the app's UI/UX for better user interaction`,
    color: "bg-primary",
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
      </div>
    </div>
  );
};

export default AnimatedExperiencePortfolio;