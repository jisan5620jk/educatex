import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.round((scrollTop / docHeight) * 100);

      setScrollPercent(percent);
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom smooth scroll to top in 1 second
  const scrollToTop = () => {
    const start = performance.now();
    const duration = 1000; // 1 second
    const initialY = window.scrollY;

    const animateScroll = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1); // Clamps between 0-1
      const ease = 1 - Math.pow(1 - progress, 3); // Ease-out cubic effect

      window.scrollTo(0, initialY * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 right-8 bottom-8 size-14 rounded-full flex items-center justify-center 
        font-bold text-white cursor-pointer transition-all duration-500 ease-in-out 
        transform shadow-lg
        ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      style={{
        background: `conic-gradient(#1ec28f ${scrollPercent}%, #1e1e1e39 ${scrollPercent}%)`,
      }}
      aria-label='Back to Top'
    >
      <div
        className='absolute size-12 rounded-full font-Outfit 
        flex items-center justify-center font-normal bg-HeadingColor-0'
      >
        {scrollPercent}%
      </div>
    </button>
  );
};

export default BackToTop;
