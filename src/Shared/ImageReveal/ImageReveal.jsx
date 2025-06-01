import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = () => {
  useEffect(() => {
    const animateImages = () => {
      const images = document.querySelectorAll("img");

      gsap.utils.toArray(images).forEach((img) => {
        if (!img.dataset.gsapAnimated) {
          img.dataset.gsapAnimated = "true";

          gsap.fromTo(
            img,
            {
              clipPath: "inset(100% 100% 100% 100%)",
              opacity: 0,
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: img,
                start: "top 95%",
                toggleActions: "play none none none",
                // markers: true, // uncomment for debugging
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
