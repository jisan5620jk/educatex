import { Outlet } from 'react-router-dom';
import Navbar8 from '../Shared/Navbar/Navbar8';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Footer8 from '../Shared/Footer/Footer8';
import HelmetChanger from '../Shared/Helmet/Helmet';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main9 = () => {
  useEffect(() => {}, []);

  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <HelmetChanger title={'CCTV Security Dark'} />
      <Navbar8 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer8 />
    </>
  );
};
export default Main9;
