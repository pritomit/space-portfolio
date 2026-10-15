import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
  TECHNICAL_SKILLS_CATEGORIES,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {/* Skill icons */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-[1000px]">
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={`data-${skill.skill_name}`}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-[1000px]">
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={`fe-${skill.skill_name}`}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-[1000px]">
        {BACKEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={`be-${skill.skill_name}`}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-[1000px]">
        {FULLSTACK_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={`fs-${skill.skill_name}`}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-[1000px]">
        {OTHER_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={`other-${skill.skill_name}`}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Detailed Technical Skills Grid */}
      <div className="w-full max-w-[1100px] mt-12 px-6 z-20">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
          Detailed Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-xl border border-[#2A0E61] bg-[#030014aa] backdrop-blur-md shadow-lg"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-3 border-b border-[#7042f844] pb-2">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-[#1a0b36] border border-[#7042f866] text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
