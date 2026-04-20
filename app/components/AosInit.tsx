"use client";

import { useEffect } from "react";

/**
 * Drop this once into the root layout.
 * It watches every [data-aos] element and adds .aos-visible when it enters
 * the viewport — triggering the CSS transitions defined in globals.css.
 */
export function AosInit() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-aos]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-visible");
            observer.unobserve(entry.target); // animate once only
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
