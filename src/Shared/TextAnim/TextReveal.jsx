"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  useEffect(() => {
    const animateLetters = () => {
      const headings = document.querySelectorAll("h1");

      const wrapTextNodes = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          node.textContent.split("").forEach((char) => {
            const span = document.createElement("span");
            span.className = "inline-block";
            span.textContent = char === " " ? "\u00A0" : char;
            frag.appendChild(span);
          });
          return frag;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.nodeName === "BR") {
            // Preserve <br> tags with all attributes
            const clonedBR = document.createElement("br");
            for (const attr of node.attributes) {
              clonedBR.setAttribute(attr.name, attr.value);
            }
            return clonedBR;
          }

          const cloned = node.cloneNode(false);
          node.childNodes.forEach((child) => {
            cloned.appendChild(wrapTextNodes(child));
          });
          return cloned;
        }

        // Return empty fragment for unknown node types
        return document.createDocumentFragment();
      };

      headings.forEach((heading) => {
        if (heading.dataset.gsapAnimated) return;

        heading.dataset.gsapAnimated = "true";

        const originalNodes = Array.from(heading.childNodes);
        heading.innerHTML = ""; // Clear the heading
        heading.classList.add("overflow-hidden");

        originalNodes.forEach((node) => {
          heading.appendChild(wrapTextNodes(node));
        });

        const letters = heading.querySelectorAll("span");

        gsap.set(letters, { opacity: 0, scale: 0.8, y: 50 });

        gsap.to(letters, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.15,
          ease: "power3.out",
          stagger: 0.015,
          scrollTrigger: {
            trigger: heading,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      });

      ScrollTrigger.refresh();
    };

    const timeout = setTimeout(animateLetters, 50);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null; // This component runs effect only
};

export default TextReveal;