// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="group relative animate-float">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-pink-500 via-violet-600 to-[#16f2b3] opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60"></div>
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-[#16f2b3] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70 animate-spin-slow"></div>
            <div className="relative rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-[#16f2b3] p-[3px] transition-transform duration-500 group-hover:scale-105">
              <Image
                src={personalData.profile}
                width={280}
                height={280}
                alt="Gaurang Tyagi"
                className="rounded-2xl cursor-pointer bg-[#0d1224] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
