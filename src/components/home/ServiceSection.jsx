"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { servicesData } from "@/data/services-data";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
  hover: { y: -8, transition: { duration: 0.2 } },
};

export default function ServicesSection() {
  return (
    <section className="py-12 px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk) bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-[40px] font-semibold text-on-background mb-3">
            How We Support You
          </h2>
          <p className="font-sans text-[18px] text-on-surface-variant">
            Flexible, community-based services that come to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {servicesData.map((service, index) => {
            const isFeatured = service.isFeatured;
            return (
              <motion.div
                key={service.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                whileHover="hover"
                className={`${isFeatured ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <Link
                  href={service.href}
                  className="service-card group block bg-surface rounded-xl overflow-hidden border border-outline-variant/30 flex flex-col h-full transition-shadow hover:shadow-xl"
                >
                  <div
                    className={`card-img-container w-full shrink-0 ${isFeatured ? "h-[280px]" : "h-[200px]"}`}
                  >
                    <img
                      alt={service.title}
                      className="card-img w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={service.imageUrl}
                    />
                  </div>
                  <div
                    className={`flex-1 flex flex-col ${isFeatured ? "p-8" : "p-6"}`}
                  >
                    {service.badge && (
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded bg-secondary-container/20 text-secondary-container font-ui text-xs font-bold uppercase tracking-wider">
                          {service.badge}
                        </span>
                      </div>
                    )}
                    <h3
                      className={`font-serif font-medium text-on-background mb-2 group-hover:text-primary transition-colors ${isFeatured ? "text-[28px]" : "text-[15px] font-bold font-button-text"}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`font-sans text-on-surface-variant flex-1 ${isFeatured ? "text-[16px]" : "text-[14px]"}`}
                    >
                      {service.description}
                    </p>
                    {isFeatured && (
                      <div className="mt-6 flex items-center gap-2 font-button-text text-primary">
                        Find out more{" "}
                        <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-button-text text-button-text text-primary hover:text-primary-container transition-colors"
          >
            View All Services <FiArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
