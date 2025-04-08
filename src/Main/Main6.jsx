import { Outlet } from 'react-router-dom';
import Navbar6 from '../Shared/Navbar/Navbar6';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Footer6 from '../Shared/Footer/Footer6';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main6 = () => {
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
      <HelmetChanger title={'Start Up Technology Dark'} />
      <Navbar6 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer6 />
    </>
  );
};
export default Main6;
