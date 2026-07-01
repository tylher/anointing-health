"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FORM_ROLE_OPTIONS } from "../../data/contact-data";
import { ITEM } from "./UseReveal";

// Shared field styles — centralised so a design-token update touches one place
const fieldClass =
  "w-full bg-on-primary border border-outline-variant rounded-lg px-4 py-2 transition-all outline-none focus:ring-2 focus:ring-primary focus:border-primary font-sans text-on-background";

function Field({ label, children }) {
  return (
    <motion.div variants={ITEM}>
      <label className="block font-ui font-medium text-on-surface-variant mb-1">
        {label}
      </label>
      {children}
    </motion.div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: FORM_ROLE_OPTIONS[0],
    message: "",
  });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    // Wire up to your API / form handler here
    console.log("Contact form submitted:", form);
  };

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl border border-primary/10 shadow-[0_4px_20px_rgba(3,97,53,0.05)]">
      <motion.h2
        variants={ITEM}
        className="font-serif font-bold text-xl md:text-3xl  text-primary mb-6"
      >
        Send a Message
      </motion.h2>

      <div className="space-y-6">
        <Field label="Name">
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            className={fieldClass}
          />
        </Field>

        <motion.div
          variants={ITEM}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block font-ui font-medium text-on-surface-variant mb-1">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={set("email")}
              className={fieldClass}
            />
          </div>
          <div>
            <label className="block font-ui font-medium text-on-surface-variant mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              className={fieldClass}
            />
          </div>
        </motion.div>

        <Field label="I am a:">
          <select
            value={form.role}
            onChange={set("role")}
            className={fieldClass}
          >
            {FORM_ROLE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message">
          <textarea
            rows={4}
            value={form.message}
            onChange={set("message")}
            className={`${fieldClass} resize-none`}
          />
        </Field>

        <motion.div variants={ITEM}>
          <motion.button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-primary text-on-primary font-ui text-sm font-medium py-3 rounded-lg"
            whileHover={{ backgroundColor: "#2a7a4b" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Send Message
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
