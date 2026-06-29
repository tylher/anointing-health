"use client";

import { motion } from "framer-motion";
import ProcessStep from "./Processstep";
import FloatingLabelInput from "./FloatinglabelInput";
import {
  PROCESS_INTRO,
  PROCESS_STEPS,
  FORM_TABS,
  FORM_FIELDS,
  NOTES_FIELD,
} from "../../data/referral";
import { MdArrowForward } from "react-icons/md";

export default function ReferralForm() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left panel: intro + process */}
          <motion.div
            className="relative bg-primary rounded-[32px] p-12 text-on-primary overflow-hidden min-h-[600px] flex flex-col justify-between blob-mask"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-4 text-white">
                {PROCESS_INTRO.heading}
              </h2>
              <p className="font-body-lg text-body-lg text-white/80 max-w-md">
                {PROCESS_INTRO.paragraph}
              </p>
            </div>

            <div className="relative z-10 mt-12 space-y-8">
              {PROCESS_STEPS.map((step, i) => (
                <ProcessStep
                  key={step.number}
                  {...step}
                  isLast={i === PROCESS_STEPS.length - 1}
                />
              ))}
            </div>
          </motion.div>

          {/* Right panel: form */}
          <motion.div
            className="bg-white rounded-tr-md rounded-br-md rounded-tl-4xl rounded-bl-4xl p-10 shadow-lg border border-primary/5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex gap-2 mb-8">
              {FORM_TABS.map((tab) => (
                <span
                  key={tab.label}
                  className={`px-4 py-1.5 rounded-full font-label-md text-label-md text-sm ${
                    tab.active
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  {tab.label}
                </span>
              ))}
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {FORM_FIELDS.filter((f) => f.half).map((field) => (
                  <FloatingLabelInput key={field.id} {...field} />
                ))}
              </div>

              {FORM_FIELDS.filter((f) => !f.half).map((field) => (
                <FloatingLabelInput key={field.id} {...field} />
              ))}

              <div className="mt-8">
                <FloatingLabelInput
                  id={NOTES_FIELD.id}
                  label={NOTES_FIELD.label}
                  as="textarea"
                  rows={NOTES_FIELD.rows}
                />
              </div>

              <motion.button
                type="button"
                className="w-full mt-8 bg-primary text-on-primary py-4 rounded-lg font-button-text text-button-text flex justify-center items-center gap-2"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <span>Continue to Patient Details</span>
                <motion.span
                  className="material-symbols-outlined"
                  variants={{ hover: { x: 4 } }}
                  transition={{ duration: 0.2 }}
                >
                  <MdArrowForward/>
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
