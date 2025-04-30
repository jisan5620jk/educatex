import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar4 from '../Shared/Navbar/Navbar4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HelmetChanger from '../Shared/Helmet/Helmet';
import BackToTop from '../Shared/BackToTop/BackToTop';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main4 = () => {
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
      <HelmetChanger title={'Kinder Garden School'} />
      <Navbar4 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main4;
