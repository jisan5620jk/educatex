import { Outlet } from 'react-router-dom';
import Navbar10 from '../Shared/Navbar/Navbar10';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Footer8 from '../Shared/Footer/Footer8';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main10 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <Navbar10 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer8 />
    </>
  );
};
export default Main10;
