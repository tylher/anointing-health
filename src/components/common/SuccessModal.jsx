"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { LuCircleCheckBig, LuX } from "react-icons/lu";

/**
 * Reusable success modal for form submissions.
 * Usage:
 *   const [showSuccess, setShowSuccess] = useState(false);
 *   ...on success: setShowSuccess(true)
 *   <SuccessModal
 *     isOpen={showSuccess}
 *     onClose={() => setShowSuccess(false)}
 *     title="Message Sent"
 *     message="Thanks — we've received your message and will be in touch soon."
 *   />
 */
export default function SuccessModal({
  isOpen,
  onClose,
  title = "Success",
  message = "Your submission has been received.",
}) {
  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 h-screen"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-on-background/60 backdrop-blur-sm"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            className="relative w-full max-w-sm rounded-xl border border-primary/10 bg-surface-container-lowest p-8 text-center shadow-[0_12px_40px_rgba(3,97,53,0.15)]"
            variants={{
              hidden: { opacity: 0, y: 24, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 text-on-surface-variant transition-colors hover:text-on-background"
            >
              <LuX size={20} />
            </button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.15,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10"
            >
              <LuCircleCheckBig
                className="text-primary"
                size={30}
                strokeWidth={2}
              />
            </motion.div>

            <h3
              id="success-modal-title"
              className="mb-2 font-serif text-xl font-bold text-primary"
            >
              {title}
            </h3>

            <p className="mb-6 font-ui text-sm text-on-surface-variant">
              {message}
            </p>

            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-lg bg-primary py-3 font-ui text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
