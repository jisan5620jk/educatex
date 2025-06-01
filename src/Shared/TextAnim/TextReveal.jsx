import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  useEffect(() => {
    const animateLetters = () => {
      const headings = document.querySelectorAll("h1");

      headings.forEach((heading) => {
        if (heading.dataset.gsapAnimated) return;

        heading.dataset.gsapAnimated = "true";

        const originalNodes = Array.from(heading.childNodes);
        heading.innerHTML = ""; // Clear the heading

        heading.classList.add("overflow-hidden");

        originalNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            // Handle text content
            const text = node.textContent;

            text.split("").forEach((char) => {
              const span = document.createElement("span");
              span.className = "inline-block";
              span.textContent = char === " " ? "\u00A0" : char;
              heading.appendChild(span);
            });
          } else if (
            node.nodeType === Node.ELEMENT_NODE &&
            node.nodeName === "BR"
          ) {
            // Clone the <br> element with all its attributes
            const clonedBR = document.createElement("br");
            for (const attr of node.attributes) {
              clonedBR.setAttribute(attr.name, attr.value);
            }
            heading.appendChild(clonedBR);
          }
        });

        const letters = heading.querySelectorAll("span");

        gsap.set(letters, { opacity: 0, scale: 0.8, y: 50 });

        gsap.to(letters, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: heading,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      });

      ScrollTrigger.refresh();
    };

    const timeout = setTimeout(animateLetters, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null; // This effect-only component doesn't render anything itself
};

export default TextReveal;
