import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import './banner.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import SliderNavigation from './SliderNavigation';
import bannerShape from '/images/hero-dot.png';
import bannerShape2 from '/images/hero-shape31.png';
import bannerShape3 from '/images/hero-shape33.png';

const Banner = () => {
  const settings = {
    loop: true,
    speed: 2000,
    modules: [Autoplay],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade', // Fade effect for smooth transitions
    fadeEffect: {
      crossFade: true,
    },
  };
  return (
    <div className='relative'>
      <Swiper
        {...settings}
        modules={[EffectFade]}
      >
        <SwiperSlide>
          <section className="bg-[url('/images/banner-slider.jpg')] bg-cover bg-left lg:bg-center bg-no-repeat h-[650px] sm:h-[700px] md:h-[700px] lg:h-[760px] xl:h-[850px] flex items-center">
            <div className='Container'>
              <div className='pt-[70px] lg:pt-[120px] pb-20 md:pb-0'>
                <div className='relative banner-content'>
                  <div className='inline-block mb-4'>
                    <h5 className='font-Outfit bg-white bg-opacity-5 px-5 py-[6px] rounded border border-white border-opacity-20 text-white text-sm flex items-center gap-3 uppercase'>
                      <span className='text-PrimaryColor-0'>
                        <FaCheck size={15} />
                      </span>
                      100% Satisfaction Gaurantee
                    </h5>
                  </div>
                  <h1 className='font-Outfit font-semibold text-white text-[26px] leading-[32px] sm:text-[44px] sm:leading-[54px] md:text-[56px] md:leading-[62px] lg:text-[50px] lg:leading-[60px] xl:text-[58px] xl:leading-[68px] 2xl:text-[66px] 2xl:leading-[76px]'>
                    Grow Your Learning
                  </h1>
                  <h1 className='font-Outfit font-semibold text-white text-[26px] leading-[32px] sm:text-[44px] sm:leading-[54px] md:text-[56px] md:leading-[62px] lg:text-[50px] lg:leading-[60px] xl:text-[58px] xl:leading-[68px] 2xl:text-[66px] 2xl:leading-[76px]'>
                    Educate{' '}
                    <span className='text-PrimaryColor-0'>University</span>
                  </h1>
                  <p className='font-OpenSans text-white text-opacity-70 mb-8 mt-5'>
                    <span className='text-white'>Educate</span> the ultimate
                    destination for knowledge seekers and educators
                    <br className='hidden lg:block xl:hidden' /> alike.
                    <br className='hidden md:block lg:hidden xl:block' /> We are
                    committed to transforming education
                  </p>
                  <div className='flex flex-wrap items-center gap-y-5 gap-x-8'>
                    <div>
                      <Link
                        to={'/about'}
                        className='primary-btn'
                      >
                        Get Started
                        <HiArrowNarrowRight size={20} />
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={'/about'}
                        className='font-Outfit text-base text-white transition-all duration-500 inline-flex gap-2 uppercase font-medium relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:bg-opacity-50 before:transition-all before:duration-500 hover:before:bg-PrimaryColor-0 hover:text-PrimaryColor-0'
                      >
                        Find Course
                        <span className='relative top-[2px]'>
                          <HiArrowNarrowRight size={20} />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <img
                    src={bannerShape}
                    draggable={false}
                    className='absolute -top-20 left-[36%] animate-wiggle hidden xl:block'
                  />
                  <img
                    src={bannerShape2}
                    draggable={false}
                    className='absolute bottom-12 left-[54%] animate-swing hidden xl:block'
                  />
                  <img
                    src={bannerShape3}
                    draggable={false}
                    className='absolute -bottom-32 3xl:-bottom-24 left-0 3xl:-left-[16%] animate-dance2 hidden xl:block'
                  />
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/images/banner-slider2.jpg')] bg-cover bg-left lg:bg-center bg-no-repeat h-[650px] sm:h-[700px] md:h-[700px] lg:h-[760px] xl:h-[850px] flex items-center">
            <div className='Container'>
              <div className='pt-[70px] lg:pt-[120px] pb-20 md:pb-0'>
                <div className='relative banner-content'>
                  <div className='inline-block mb-4'>
                    <h5 className='font-Outfit bg-white bg-opacity-5 px-5 py-[6px] rounded border border-white border-opacity-20 text-white text-sm flex items-center gap-3 uppercase'>
                      <span className='text-PrimaryColor-0'>
                        <FaCheck size={15} />
                      </span>
                      100% Satisfaction Gaurantee
                    </h5>
                  </div>
                  <h1 className='font-Outfit font-semibold text-white text-[26px] leading-[32px] sm:text-[44px] sm:leading-[54px] md:text-[56px] md:leading-[62px] lg:text-[50px] lg:leading-[60px] xl:text-[58px] xl:leading-[68px] 2xl:text-[66px] 2xl:leading-[76px]'>
                    Grow Your Learning
                  </h1>
                  <h1 className='font-Outfit font-semibold text-white text-[26px] leading-[32px] sm:text-[44px] sm:leading-[54px] md:text-[56px] md:leading-[62px] lg:text-[50px] lg:leading-[60px] xl:text-[58px] xl:leading-[68px] 2xl:text-[66px] 2xl:leading-[76px]'>
                    Educate{' '}
                    <span className='text-PrimaryColor-0'>University</span>
                  </h1>
                  <p className='font-OpenSans text-white text-opacity-70 mb-8 mt-5'>
                    <span className='text-white'>Educate</span> the ultimate
                    destination for knowledge seekers and educators
                    <br className='hidden lg:block xl:hidden' /> alike.
                    <br className='hidden md:block lg:hidden xl:block' /> We are
                    committed to transforming education
                  </p>
                  <div className='flex flex-wrap items-center gap-y-5 gap-x-8'>
                    <div>
                      <Link
                        to={'/about'}
                        className='primary-btn'
                      >
                        Get Started
                        <HiArrowNarrowRight size={20} />
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={'/about'}
                        className='font-Outfit text-base text-white transition-all duration-500 inline-flex gap-2 uppercase font-medium relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:bg-opacity-50 before:transition-all before:duration-500 hover:before:bg-PrimaryColor-0 hover:text-PrimaryColor-0'
                      >
                        Find Course
                        <span className='relative top-[2px]'>
                          <HiArrowNarrowRight size={20} />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <img
                    src={bannerShape}
                    draggable={false}
                    className='absolute -top-20 left-[36%] animate-wiggle hidden xl:block'
                  />
                  <img
                    src={bannerShape2}
                    draggable={false}
                    className='absolute bottom-12 left-[54%] animate-swing hidden xl:block'
                  />
                  <img
                    src={bannerShape3}
                    draggable={false}
                    className='absolute -bottom-32 3xl:-bottom-24 left-0 3xl:-left-[16%] animate-dance2 hidden xl:block'
                  />
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SliderNavigation />
      </Swiper>
    </div>
  );
};

export default Banner;
