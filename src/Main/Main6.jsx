import { Outlet } from 'react-router-dom';
import Navbar6 from '../Shared/Navbar/Navbar6';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Footer from '../Shared/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import HelmetChanger from '../Shared/Helmet/Helmet';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Main6 = () => {
  const smootherRef = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    smootherRef.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper', // add wrapper ID here
      content: '#smooth-content', // add content ID here
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });

    return () => {
      if (smootherRef.current) smootherRef.current.kill();
    };
  }, []);

  return (
    <>
      <HelmetChanger title={'Online Education'} />
      <BackToTop />
      <Navbar6 />
      <div
        id='smooth-wrapper'
        className='overflow-hidden pt-28 sm:pt-[120px] lg:pt-[150px]'
      >
        <div id='smooth-content'>
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main6;
