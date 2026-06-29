"use client";

import { ELIGIBILITY_STEPS } from "@/data/site";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";

// ─── Step Dots ────────────────────────────────────────────────────────────────

function StepDots({ total, current }) {
  return (
    <div className="flex justify-center gap-2 mb-5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            i < current
              ? "bg-[#036135]"
              : i === current
                ? "bg-[#036135]"
                : "border border-[#036135]"
          }`}
        />
      ))}
    </div>
  );
}

// ─── Binary Step ─────────────────────────────────────────────────────────────

function BinaryStep({ step, onSelect }) {
  return (
    <div className="fade-slide-up">
      <h3
        className="font-bold text-lg text-on-surface mb-5 text-center"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {step.question}
      </h3>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {step.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`font-sans text-sm px-5 py-4 rounded-full hover:-translate-y-0.5 transition-transform flex-1 ${
              opt.value === step.options[0].value
                ? "bg-primary text-on-primary"
                : "bg-surface-container-high text-on-surface-variant"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Multi-select Step ────────────────────────────────────────────────────────

function MultiStep({ step, onContinue }) {
  const [selected, setSelected] = useState([]);

  const toggle = (value) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  return (
    <div className="fade-slide-up">
      <h3
        className="font-bold text-lg text-on-surface mb-5 text-center"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {step.question}
      </h3>

      <div className="flex flex-wrap gap-3 justify-center mb-7">
        {step.options.map((opt) => {
          const isActive = selected.includes(opt.value);
          return (
            <button
              key={opt.value}
              onClick={() => toggle(opt.value)}
              className={`px-3 py-2 rounded-full border text-sm font-ui transition-colors ${
                isActive
                  ? "bg-primary/10 border-primary text-primary"
                  : "border-outline-variant text-on-surface-variant hover:bg-primary/10"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onContinue(selected)}
        disabled={selected.length === 0}
        className="w-full bg-primary text-on-primary font-sans text-sm px-5 py-4 rounded-full hover:-translate-y-0.5 transition-transform disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
}

// ─── Confirmation ─────────────────────────────────────────────────────────────

function ConfirmationStep() {
  return (
    <div className="fade-slide-up text-center">
      <div className="w-16 h-16 rounded-full bg-[#036135]/10 flex items-center justify-center mx-auto mb-7">
        <span
          className="material-symbols-outlined text-[#036135] text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          <MdCheckCircle />
        </span>
      </div>
      <h3
        className="font-bold text-lg text-on-surface mb-2"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        You look like a great fit
      </h3>
      <p className="font-sans text-on-surface-variant mb-5">
        One of our team will be in touch soon. You can also call us directly on{" "}
        <a
          href="tel:+441234567890"
          className="text-primary underline underline-offset-2"
        >
          01234 567 890
        </a>
        .
      </p>
      <a
        href="#contact"
        className="inline-block bg-primary text-on-primary font-button-text text-button-text px-4 py-4 rounded-full hover:-translate-y-0.5 transition-transform"
      >
        Get in touch
      </a>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function EligibilityChecker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [complete, setComplete] = useState(false);

  const step = ELIGIBILITY_STEPS[currentStep];
  const totalSteps = ELIGIBILITY_STEPS.length;

  const handleSelect = (value) => {
    setAnswers((prev) => ({ ...prev, [step.id]: value }));
    if (currentStep + 1 < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setComplete(true);
    }
  };

  const handleMultiContinue = (selected) => {
    setAnswers((prev) => ({ ...prev, [step.id]: selected }));
    if (currentStep + 1 < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setComplete(true);
    }
  };

  return (
    <section id="eligibility" className="py-16 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto ">
        <div className="max-w-[680px] mx-auto bg-surface-container-lowest rounded-[24px] border border-[#036135] p-7 md:p-12 shadow-sm overflow-hidden">
          <StepDots
            total={totalSteps}
            current={complete ? totalSteps : currentStep}
          />

          {complete ? (
            <ConfirmationStep />
          ) : step.type === "binary" ? (
            <BinaryStep step={step} onSelect={handleSelect} />
          ) : (
            <MultiStep step={step} onContinue={handleMultiContinue} />
          )}
        </div>
      </div>
    </section>
  );
}
