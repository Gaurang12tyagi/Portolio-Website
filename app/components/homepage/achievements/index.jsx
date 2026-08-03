// @flow strict

import { achievements, highlight } from "@/utils/data/achievements";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import GlowCard from "../../helper/glow-card";

function Achievements() {
  return (
    <div id="achievements" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <GlowCard key={item.id} identifier={`achievement-${item.id}`}>
              <div className="flex flex-col items-center text-center gap-2 p-6">
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                  {item.stat}
                </p>
                <p className="text-sm sm:text-base font-medium text-white uppercase">
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-4 rounded-xl border border-[#1f223c] bg-[#11152c] px-6 py-4">
            <FaAward className="text-amber-400 shrink-0" size={32} />
            <div>
              <p className="text-base sm:text-lg font-semibold text-white">
                {highlight.title}
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                {highlight.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
