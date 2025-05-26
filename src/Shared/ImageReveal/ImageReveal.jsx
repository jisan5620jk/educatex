import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = () => {
  useEffect(() => {
    const animateImages = () => {
      const images = document.querySelectorAll('img');

      gsap.utils.toArray(images).forEach((img) => {
        if (!img.dataset.gsapAnimated) {
          img.dataset.gsapAnimated = 'true';

          gsap.fromTo(
            img,
            {
              opacity: 0,
              scale: 0.9,
              y: 50,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: img,
                start: 'top 90%',
                toggleActions: 'play none none none',
                // markers: true, // uncomment for debugging
              },
            }
          );
        }
      });

      ScrollTrigger.refresh(); // force ScrollTrigger to re-check layout
    };

    // slight delay to ensure all images have mounted
    const timeout = setTimeout(animateImages, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};

export default ImageReveal;
