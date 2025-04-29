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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Custom smooth scroll to top
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10); 
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 right-8 size-14 rounded-full flex items-center justify-center font-bold text-white cursor-pointer transition-all duration-500 shadow-xl ${
        isVisible ? 'opacity-100 bottom-8' : 'opacity-0 -bottom-24'
      }`}
      style={{
        background: `conic-gradient(#17c0f9 ${scrollPercent}%, #1e1e1e29 ${scrollPercent}%)`,
      }}
      aria-label='Back to Top'
    >
      <div className='absolute size-12 bg-PrimaryColor2-0 rounded-full font-Outfit font-normal flex items-center justify-center'>
        {scrollPercent}%
      </div>
    </button>
  );
};

export default BackToTop;
