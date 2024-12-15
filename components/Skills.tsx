"use client";
import React from "react";
import { skills } from "@/data";

const Skills = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-20 px-4 md:px-8"
      id="skills">
      <h1 className="heading text-center">
        Technologies That i have <span className="text-purple">worked on</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-full">
        {skills.map((icon, index) => (
          <div
            key={index}
            className="border border-white/[.2] rounded-full bg-black 
            lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 
            flex justify-center items-center 
            transform hover:scale-110 transition-transform duration-300">
            <img
              src={icon}
              alt={`skill-icon-${index}`}
              className="p-2 w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
