import { Outlet } from 'react-router-dom';
import Navbar5 from '../Shared/Navbar/Navbar5';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Footer5 from '../Shared/Footer/Footer5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main5 = () => {
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
      <HelmetChanger title={'Start Up Technology'} />
      <Navbar5 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer5 />
    </>
  );
};
export default Main5;
