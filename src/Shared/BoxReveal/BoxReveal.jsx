import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BoxReveal = () => {
  useEffect(() => {
    const animateBoxes = () => {
      const animationClasses = [
        { className: "fade-up", fromVars: { y: 150, opacity: 0 } },
        { className: "fade-left", fromVars: { x: -150, opacity: 0 } },
        { className: "fade-right", fromVars: { x: 150, opacity: 0 } },
        { className: "zoom-in", fromVars: { scale: 0.8, y: 100, opacity: 0 } },
      ];

      // Animate predefined animation classes
      animationClasses.forEach(({ className, fromVars }) => {
        const elements = Array.from(document.querySelectorAll(`.${className}`)).filter(
          (el) => !el.dataset.gsapAnimated
        );

        if (elements.length === 0) return;

        elements.forEach((el) => (el.dataset.gsapAnimated = "true"));

        gsap.fromTo(
          elements,
          fromVars,
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: elements[0],
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Staggered .box animation per line
      const rows = document.querySelectorAll(".box-row");

      rows.forEach((row) => {
        const boxes = Array.from(row.querySelectorAll(".box")).filter(
          (el) => !el.dataset.gsapAnimated
        );

        boxes.forEach((el, index) => {
          el.dataset.gsapAnimated = "true";

          gsap.fromTo(
            el,
            { y: 150, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              delay: index * 0.2,
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });

      ScrollTrigger.refresh();
    };

    const timeout = setTimeout(animateBoxes, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
};

export default BoxReveal;