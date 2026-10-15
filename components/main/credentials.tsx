import { SparklesIcon, AcademicCapIcon, BriefcaseIcon, TrophyIcon } from "@heroicons/react/24/solid";
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from "@/constants";

export const Credentials = () => {
  return (
    <section id="credentials" className="w-full flex flex-col items-center justify-center py-20 px-6 md:px-20 z-20">
      <div className="max-w-[1200px] w-full flex flex-col gap-12">
        {/* Professional Experience */}
        <div id="experience">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8 flex items-center gap-3">
            <BriefcaseIcon className="h-8 w-8 text-purple-400" /> Professional Experience
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {EXPERIENCE.map((exp) => (
              <div key={exp.role} className="p-6 rounded-xl border border-[#2A0E61] bg-[#030014aa] backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-[#7042f844] pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-300 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm px-3 py-1 bg-[#1a0b36] border border-[#7042f866] text-cyan-300 rounded-full w-max mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                  {exp.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div id="education">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 flex items-center gap-3">
              <AcademicCapIcon className="h-7 w-7 text-purple-400" /> Education
            </h2>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div key={edu.institution} className="p-5 rounded-xl border border-[#2A0E61] bg-[#030014aa]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
                    <span className="text-xs px-2 py-1 bg-[#1a0b36] text-purple-300 rounded border border-[#7042f844]">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-purple-400 text-sm font-medium">{edu.title}</p>
                  <p className="text-gray-300 text-xs mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div id="certifications">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 flex items-center gap-3">
              <SparklesIcon className="h-7 w-7 text-purple-400" /> Certifications
            </h2>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="p-5 rounded-xl border border-[#2A0E61] bg-[#030014aa]">
                  <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                  {cert.year && <p className="text-cyan-300 text-xs mt-1">Year: {cert.year}</p>}
                  {cert.id && <p className="text-cyan-300 text-xs mt-1">ID: {cert.id}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 flex items-center gap-3">
            <TrophyIcon className="h-7 w-7 text-purple-400" /> Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((ach, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-[#2A0E61] bg-[#030014aa] flex items-center gap-3">
                <span className="text-yellow-400 text-xl">🏆</span>
                <p className="text-gray-200 text-sm font-medium">{ach}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
