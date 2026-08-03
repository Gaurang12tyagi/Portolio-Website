// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import codeAnimation from '/public/lottie/code.json';
import developmentAnimation from '/public/lottie/development.json';

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start lg:sticky lg:top-24 lg:self-start">
            <div className="w-full flex flex-col gap-6">
              <div className="w-full h-64 sm:h-72">
                <AnimationLottie animationPath={codeAnimation} />
              </div>
              <div className="w-full h-64 sm:h-72">
                <AnimationLottie animationPath={developmentAnimation} />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                            {experience.location ? ` | ${experience.location}` : ""}
                          </p>
                        </div>
                      </div>
                      {experience.descriptions?.length > 0 && (
                        <ul className="relative flex flex-col gap-3 px-3 pb-5 text-sm sm:text-base text-gray-300">
                          {experience.descriptions.map((description, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <IoCheckmarkCircle className="mt-1 shrink-0 text-[#16f2b3]" size={16} />
                              <span>{description}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
