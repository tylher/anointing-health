"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import {
  FORM_STEPS,
  NOTES_FIELD,
  PROCESS_INTRO,
  PROCESS_STEPS,
} from "../../data/referral";
import FloatingLabelInput from "./FloatinglabelInput";
import ProcessStep from "./Processstep";

const REFERRAL_ENDPOINT =
  "https://anointinghealth.co.uk/api/referral-handler.php";

export default function ReferralForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState(() => {
    // Seed one key per field across every step, plus notes, so
    // FloatingLabelInput always gets a controlled (never undefined) value.
    const initial = {};
    FORM_STEPS.forEach((step) =>
      step.fields.forEach((f) => (initial[f.id] = "")),
    );
    initial[NOTES_FIELD.id] = "";
    return initial;
  });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const currentStep = FORM_STEPS[stepIndex];
  const isLastStep = stepIndex === FORM_STEPS.length - 1;

  const set = (id) => (e) => {
    setForm((f) => ({ ...f, [id]: e.target.value }));
    console.log("Form state updated:", { ...form, [id]: e.target.value });
  };

  // A step is valid when every field it marks `required` is non-empty.
  const stepIsValid = (step) =>
    step.fields
      .filter((f) => f.required)
      .every((f) => form[f.id].trim() !== "");

  const handleContinue = () => {
    if (!stepIsValid(currentStep)) {
      setTouched((t) => ({
        ...t,
        ...Object.fromEntries(currentStep.fields.map((f) => [f.id, true])),
      }));
      return;
    }
    setStepIndex((i) => Math.min(i + 1, FORM_STEPS.length - 1));
  };

  const handleBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const handleSubmit = async () => {
    if (!stepIsValid(currentStep)) {
      setTouched((t) => ({
        ...t,
        ...Object.fromEntries(currentStep.fields.map((f) => [f.id, true])),
      }));
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(REFERRAL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Network error. Please try again.");
    }
  };

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
            {/* Step tabs — reflect real progress now, not a static prop */}
            <div className="flex gap-2 mb-8">
              {FORM_STEPS.map((step, i) => (
                <span
                  key={step.id}
                  className={`px-4 py-1.5 rounded-full font-label-md text-label-md text-sm transition-colors duration-300 ${
                    i === stepIndex
                      ? "bg-primary text-on-primary"
                      : i < stepIndex
                        ? "bg-primary/20 text-primary"
                        : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  {step.label}
                </span>
              ))}
            </div>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center"
              >
                <h3 className="font-display-md text-primary mb-2">
                  Referral Received
                </h3>
                <p className="text-on-surface-variant font-body-lg">
                  Thank you — our care team will be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* AnimatePresence + key={currentStep.id} swaps the field
                    set with a slide/fade whenever stepIndex changes, instead
                    of all steps' fields existing in the DOM at once. */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {currentStep.fields
                        .filter((f) => f.half)
                        .map((field) => (
                          <div key={field.id}>
                            <FloatingLabelInput
                              {...field}
                              value={form[field.id]}
                              handleChange={set(field.id)}
                            />
                            {touched[field.id] &&
                              field.required &&
                              !form[field.id].trim() && (
                                <p className="text-xs text-red-600 mt-1">
                                  {field.label} is required.
                                </p>
                              )}
                          </div>
                        ))}
                    </div>

                    {currentStep.fields
                      .filter((f) => !f.half)
                      .map((field) => (
                        <div key={field.id}>
                          <FloatingLabelInput
                            {...field}
                            value={form[field.id]}
                            handleChange={set(field.id)}
                          />
                          {touched[field.id] &&
                            field.required &&
                            !form[field.id].trim() && (
                              <p className="text-xs text-red-600 mt-1">
                                {field.label} is required.
                              </p>
                            )}
                        </div>
                      ))}

                    {/* Notes field only appears on the final step */}
                    {isLastStep && (
                      <div className="mt-8">
                        <FloatingLabelInput
                          id={NOTES_FIELD.id}
                          label={NOTES_FIELD.label}
                          as="textarea"
                          rows={NOTES_FIELD.rows}
                          value={form[NOTES_FIELD.id]}
                          handleChange={set(NOTES_FIELD.id)}
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {status === "error" && (
                  <p className="text-sm text-red-600 font-ui">{errorMsg}</p>
                )}

                <div className="flex gap-3 mt-8">
                  {stepIndex > 0 && (
                    <motion.button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 border border-primary text-primary py-4 rounded-lg font-button-text text-button-text flex justify-center items-center gap-2"
                      whileTap={{ scale: 0.98 }}
                    >
                      <MdArrowBack />
                      <span>Back</span>
                    </motion.button>
                  )}

                  <motion.button
                    type="button"
                    onClick={isLastStep ? handleSubmit : handleContinue}
                    disabled={status === "submitting"}
                    className="flex-1 bg-primary text-on-primary py-4 rounded-lg font-button-text text-button-text flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>
                      {isLastStep
                        ? status === "submitting"
                          ? "Submitting..."
                          : "Submit Referral"
                        : `Continue to ${FORM_STEPS[stepIndex + 1].label}`}
                    </span>
                    <motion.span
                      className="material-symbols-outlined"
                      variants={{ hover: { x: 4 } }}
                      transition={{ duration: 0.2 }}
                    >
                      <MdArrowForward />
                    </motion.span>
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
