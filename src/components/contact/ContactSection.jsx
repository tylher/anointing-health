"use client";

import { motion } from "framer-motion";
import ContactForm from "./Contactform";
import { REVEAL } from "./UseReveal";
import ContactDetails from "./Contactdetail";

export default function ContactSection() {
  return (
    <motion.section
      className="max-w-container-max mx-auto px-7 md:px-20 py-12"
      variants={REVEAL}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactDetails />
      </div>
    </motion.section>
  );
}
