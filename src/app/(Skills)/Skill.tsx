"use client";
import { motion } from "framer-motion";
import React from "react";
type SkillsProps = {
  name: string;
  x: string;
  y: string;
};
const Skills = ({ name, x, y }: SkillsProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold md:bg-primary text-primary bg-transparent md:text-secondary py-2 px-3 shadow-primary cursor-pointer absolute lg:py-3 lg:px-6 md:text-sm md:py-1.5 md:px-5  sm:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.9 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skill = () => {
  return (
    <>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0.1 }}
        transition={{ duration: 1 }}
        id="skills"
        className="text-xl text-center mt-10 md:mt-0 "
      >
        Skills
      </motion.div>
      <div className="text-center space-y-1">
        <h1 className="text-center text-5xl md:text-6xl sm:text-6xl font-semibold capitalize  md:mt-0 ">
          In the middle of difficulty lies opportunity
        </h1>
        <p className="text-gray-500">Web of Skills</p>
      </div>
      <div className="w-full md:w-3/4 mx-auto relative flex lg:h-screen md:h-[80vh] h-[50vh] items-center justify-center bg-circularLightsm md:bg-circularLight dark:bg-circularDarksm md:dark:bg-circularDark overflow-hidden">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-transparent text-primary md:bg-primary md:text-secondary shadow-primary cursor-pointer lg:p-8 md:p-5 sm:p-6 sm:text-xs z-10"
          whileHover={{ scale: 1.05 }}
        >
          Tech
        </motion.div>
        
        {/* Ring 1 */}
        <Skills name="HTML5" x="-20vw" y="2vw" />
        <Skills name="Tailwind" x="-5vw" y="-10vw" />
        <Skills name="Typescript" x="20vw" y="6vw" />
        <Skills name="NextJS" x="0vw" y="12vw" />
        
        {/* Ring 2 */}
        <Skills name="Langchain" x="-25vw" y="-10vw" />
        <Skills name="PostgresSQL" x="18vw" y="-12vw" />
        <Skills name="React" x="32vw" y="-5vw" />
        
        {/* Ring 3 */}
        <Skills name="AWS" x="-35vw" y="5vw" />
        <Skills name="NodeJS" x="-15vw" y="20vw" />
        <Skills name="VectorDB" x="15vw" y="22vw" />
        <Skills name="Redis" x="35vw" y="15vw" />
      </div>
    </>
  );
};

export default Skill;
