"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { PERSONAL_INFO } from "@/constants";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      id="about-me"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 mt-28 md:mt-36 w-full z-[20] gap-10"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] flex items-center max-w-max rounded-full"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-gray-200">
            {PERSONAL_INFO.role}
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-2 text-4xl md:text-6xl font-bold text-white max-w-[650px] w-auto h-auto leading-tight"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {PERSONAL_INFO.name}
            </span>
          </span>
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-300 my-2 max-w-[650px] leading-relaxed"
        >
          {PERSONAL_INFO.summary}
        </motion.p>

        {/* Upwork & Location highlights */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex flex-wrap gap-3 my-2 text-sm text-gray-300"
        >
          <span className="bg-[#1a0b36] border border-[#7042f88b] px-3 py-1 rounded-full text-purple-300">
            📍 {PERSONAL_INFO.location}
          </span>
          <span className="bg-[#1a0b36] border border-[#7042f88b] px-3 py-1 rounded-full text-yellow-300">
            ⭐ {PERSONAL_INFO.upwork.status} ({PERSONAL_INFO.upwork.jobSuccess} Success)
          </span>
          <span className="bg-[#1a0b36] border border-[#7042f88b] px-3 py-1 rounded-full text-cyan-300">
            💼 {PERSONAL_INFO.upwork.rate} | {PERSONAL_INFO.upwork.clients}
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 mt-2"
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="py-3 px-6 border border-[#7042f88b] text-center text-gray-200 cursor-pointer rounded-lg text-sm font-semibold hover:bg-[#7042f822] transition-colors"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>

      {/* Hero Logo / Graphic */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px]">
          <Image
            src="/logo.png"
            alt="PRITOMX Logo"
            fill
            priority
            draggable={false}
            className="select-none object-contain drop-shadow-[0_0_35px_rgba(112,66,248,0.5)]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
