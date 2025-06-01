import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContentReveal = () => {
  useEffect(() => {
    const animateContent = () => {
      const elements = document.querySelectorAll(
        "h2, h3, h4, h5, h6, p,a, span, li, blockquote, strong, em"
      );

      elements.forEach((el) => {
        // ✅ Skip if already animated
        if (el.dataset.gsapAnimated === "true") return;

        // ✅ Skip if data-no-animate attribute is present
        if (el.hasAttribute("data-no-animate")) return;

        // Mark as animated
        el.dataset.gsapAnimated = "true";

        gsap.fromTo(
          el,
          {
            y: 30,
            opacity: 0,
            scale: 0.90,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    };

    const timeoutId = setTimeout(animateContent, 150);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
};

export default ContentReveal;
