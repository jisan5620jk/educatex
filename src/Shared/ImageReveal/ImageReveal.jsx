import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = () => {
  useEffect(() => {
    const animateImages = () => {
      const images = document.querySelectorAll("img");

      gsap.utils.toArray(images).forEach((img) => {
        // Check if image width is at least 300px
        if (
          !img.dataset.gsapAnimated &&
          img.getBoundingClientRect().width >= 300
        ) {
          img.dataset.gsapAnimated = "true";

          gsap.fromTo(
            img,
            {
              clipPath: "inset(0% 100% 0% 0%)",
              opacity: 0,
              scale: 1.4,
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    };

    const timeout = setTimeout(animateImages, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};

export default ImageReveal;