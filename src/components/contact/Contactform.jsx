"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FORM_ROLE_OPTIONS } from "../../data/contact-data";
import { ITEM } from "./UseReveal";

const fieldClass =
  "w-full bg-on-primary border border-outline-variant rounded-lg px-4 py-2 transition-all outline-none focus:ring-2 focus:ring-primary focus:border-primary font-sans text-on-background";

// Point this at wherever contact-handler.php actually lives.
const CONTACT_ENDPOINT = "https://anointinghealthcare.co.uk/contact-handler.php";

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

  // idle | submitting | success | error
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
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
      setForm({
        name: "",
        email: "",
        phone: "",
        role: FORM_ROLE_OPTIONS[0],
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Network error. Please try again.");
    }
  };

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl border border-primary/10 shadow-[0_4px_20px_rgba(3,97,53,0.05)]" id='contact-form'>
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
            required
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
              required
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
            required
          />
        </Field>

        {status === "error" && (
          <p className="text-sm text-red-600 font-ui">{errorMsg}</p>
        )}
        {status === "success" && (
          <p className="text-sm text-primary font-ui">
            Thanks — your message has been sent. We'll be in touch soon.
          </p>
        )}

        <motion.div variants={ITEM}>
          <motion.button
            type="button"
            onClick={handleSubmit}
            disabled={status === "submitting"}
            className="w-full bg-primary text-on-primary font-ui text-sm font-medium py-3 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={{ backgroundColor: "#2a7a4b" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
