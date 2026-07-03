"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { outreachCards, outreachStickyPhoto } from "@/data/mental-health-data";

export default function CommunityOutreach() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[2%]">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-[40%] lg:sticky lg:top-[120px] lg:self-start"
          >
            <span className="block font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-tertiary mb-3">
              Community Outreach
            </span>
            <h2 className="font-serif font-semibold text-[38px] text-[#181c20] mb-4">
              Proactive support in your community
            </h2>
            <p className="font-body text-base text-[#3f4941] max-w-[360px] mb-8">
              We don&apos;t wait for people to reach us. Our outreach teams
              travel across the UK — visiting homes, navigating crises, and
              walking alongside people through their recovery.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-[24px] overflow-hidden aspect-[3/4] w-full"
            >
              <Image
                src={outreachStickyPhoto}
                alt="An outreach worker greeting someone warmly at their front door"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="relative -mt-4 ml-4 bg-white rounded-[10px] px-[14px] py-[10px] shadow-md inline-block max-w-[280px]">
              <p className="font-sans text-xs italic text-[#6f7a70]">
                Home visits available 7 days a week across Cumbria and wider
                UK.
              </p>
            </div>
          </motion.div>

          <div className="w-full lg:w-[58%] flex flex-col gap-6">
            {outreachCards.map((card, i) => (
              <ServiceCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
