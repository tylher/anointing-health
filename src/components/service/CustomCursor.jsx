// components/CustomCursor.tsx
"use client";

import { useEffect, useState, useCallback } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const hoverables = document.querySelectorAll(
      'a, button, [role="button"], .cursor-hoverable, input, select, textarea'
    );

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    const observer = new MutationObserver(() => {
      const updated = document.querySelectorAll(
        'a, button, [role="button"], .cursor-hoverable, input, select, textarea'
      );
      updated.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [handleMouseEnter, handleMouseLeave]);

  if (!isVisible) return null;

  return (
    <div
      className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-9999"
      style={{
        width: isHovering ? "28px" : "12px",
        height: isHovering ? "28px" : "12px",
        backgroundColor: isHovering
          ? "rgba(3, 97, 53, 0.6)"
          : "rgba(3, 97, 53, 0.4)",
        transform: `translate(${position.x - (isHovering ? 14 : 6)}px, ${position.y - (isHovering ? 14 : 6)}px)`,
        transition: "width 0.2s, height 0.2s, background-color 0.2s",
      }}
    />
  );
}