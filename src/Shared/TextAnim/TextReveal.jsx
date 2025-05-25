/* eslint-disable react/prop-types */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ text = 'Reveal This Text' }) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
      const letters = wrapperRef.current.querySelectorAll('.letter');

      gsap.set(letters, { y: 100, opacity: 0 });

      gsap.to(letters, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, []);

  return (
    <div className='overflow-hidden'>
      <h2
        ref={wrapperRef}
      >
        {text.split('').map((char, i) => (
          <span
            key={i}
            className={`inline-block letter ${char === ' ' ? 'w-2' : ''}`}
          >
            {char}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default TextReveal;
