// @flow strict

import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import { BsPatchCheckFill } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Certifications() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <GlowCard key={cert.id} identifier={`certification-${cert.id}`}>
              <div className="flex items-start gap-4 p-6">
                <BsPatchCheckFill className="text-[#16f2b3] shrink-0 mt-1" size={28} />
                <div>
                  <p className="text-sm sm:text-base font-medium text-white">
                    {cert.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
