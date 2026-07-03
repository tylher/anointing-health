import Image from "next/image";
import { FaStar } from "react-icons/fa";

import { cqcStandards } from "@/data/about";
import CQCStandardItem from "./CQCStandardItem";

export default function CQCComplianceSection() {
  return (
    <section className="bg-surface py-[80px]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="fade-up w-full ">
            <div className="relative aspect-5/5 overflow-hidden rounded-[20px] shadow-lg h-125 w-full">
              <Image
                src="/images/about-verified.jpg"
                alt="Care worker holding clinical care plan"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="mt-6 font-['EB_Garamond'] text-[36px] font-medium leading-tight text-[#181c20]">
              Regulated care you can trust
            </h2>

            <p className="mt-4 font-['Nunito_Sans'] text-[16px] text-[#3f4941]">
              We fully comply with the Care Quality Commission Fundamental
              Standards. Our service is regularly inspected and held to the
              highest standards of safety and quality.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex w-full flex-col rounded-[24px] bg-white shadow-xl">
            <div className="rounded-t-[24px] bg-[#036135] py-4 text-center">
              <h3 className="font-['DM_Sans'] text-lg font-bold text-white">
                CQC Regulated Service
              </h3>
            </div>

            <div className="flex flex-col p-8">
              <div className="flex flex-col">
                {cqcStandards.map((item) => (
                  <CQCStandardItem
                    key={item.title}
                    title={item.title}
                    color={item.color}
                    delay={item.delay}
                  />
                ))}
              </div>

              <div
                className="cascade-item mt-8 flex flex-col items-center gap-2"
                style={{ transitionDelay: "500ms" }}
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="h-6 w-6 text-[#C9961A]" />
                  ))}
                </div>

                <span className="font-['DM_Sans'] text-lg font-bold text-[#181c20]">
                  CQC Rating: Outstanding
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
