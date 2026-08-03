// @flow strict

import { skillCategories } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import GlowCard from "../../helper/glow-card";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-12">
        {skillCategories.map((group) => (
          <GlowCard key={group.category} identifier={`skill-${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
            <div className="p-6">
              <p className="text-[#16f2b3] text-sm sm:text-base font-semibold uppercase tracking-wider mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => {
                  const icon = skillsImage(skill);
                  return (
                    <span
                      key={skill}
                      className="flex items-center gap-2 rounded-full border border-[#26294a] bg-[#0d1224] px-3 py-1.5 text-xs sm:text-sm text-gray-200 transition-all duration-300 hover:scale-105 hover:border-violet-500 hover:text-white"
                    >
                      {icon ? (
                        <Image
                          src={icon.src}
                          alt={skill}
                          width={16}
                          height={16}
                          className="h-4 w-4"
                        />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
