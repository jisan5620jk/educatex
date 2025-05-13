import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { FaCheck } from 'react-icons/fa6';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: '/images/banner-slider.jpg',
    },
    {
      image: '/images/banner-slider2.jpg',
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const settings = {
    loop: true,
    speed: 2000,
    modules: [Autoplay, EffectFade],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade', // Fade effect for smooth transitions
    fadeEffect: {
      crossFade: false,
    },
  };

  return (
    <div className='relative'>
      <Swiper
        {...settings}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section
              className={`bg-[url('${slide.image}')] bg-cover bg-left lg:bg-center bg-no-repeat h-[700px] lg:h-[850px] flex items-center`}
            >
              <div className='Container pt-[70px] lg:pt-[120px] pb-20 md:pb-0'>
                <div className='relative'>
                  <h5
                    className={`font-Outfit bg-white/5 px-5 py-[6px] transition-all duration-500 rounded border border-white/20 text-white text-sm inline-flex items-center gap-3 uppercase mb-4 ${
                      activeIndex === index
                        ? 'translate-y-0 opacity-100 delay-[100ms]'
                        : 'translate-y-[100px] opacity-0'
                    }`}
                  >
                    <span className='text-PrimaryColor-0'>
                      <FaCheck size={15} />
                    </span>
                    100% Satisfaction Guarantee
                  </h5>

                  <h1
                    className={`font-Outfit font-semibold text-white text-[26px] leading-[32px] sm:text-[44px] sm:leading-[54px] md:text-[56px] md:leading-[62px] lg:text-[50px] lg:leading-[60px] xl:text-[58px] xl:leading-[68px] 2xl:text-[66px] 2xl:leading-[76px] transition-all duration-500 ${
                      activeIndex === index
                        ? 'translate-y-0 opacity-100 delay-[200ms]'
                        : 'translate-y-[100px] opacity-0'
                    }`}
                  >
                    Grow Your Learning
                  </h1>

                  <h1
                    className={`font-Outfit font-semibold text-white text-[26px] leading-[32px] sm:text-[44px] sm:leading-[54px] md:text-[56px] md:leading-[62px] lg:text-[50px] lg:leading-[60px] xl:text-[58px] xl:leading-[68px] 2xl:text-[66px] 2xl:leading-[76px] transition-all duration-500 ${
                      activeIndex === index
                        ? 'translate-y-0 opacity-100 delay-[300ms]'
                        : 'translate-y-[100px] opacity-0'
                    }`}
                  >
                    Educate{' '}
                    <span className='text-PrimaryColor-0'>University</span>
                  </h1>

                  <p
                    className={`font-OpenSans text-white text-opacity-70 mb-8 mt-5 transition-all duration-500 ${
                      activeIndex === index
                        ? 'translate-y-0 opacity-100 delay-[400ms]'
                        : 'translate-y-[100px] opacity-0'
                    }`}
                  >
                    <span className='text-white'>Educate</span> the ultimate
                    destination for knowledge seekers and educators
                    <br className='hidden lg:block xl:hidden' /> alike.
                    <br className='hidden md:block lg:hidden xl:block' /> We are
                    committed to transforming education
                  </p>

                  <div
                    className={`flex flex-wrap items-center gap-y-5 gap-x-8 transition-all duration-500 ${
                      activeIndex === index
                        ? 'translate-y-0 opacity-100 delay-[500ms]'
                        : 'translate-y-[100px] opacity-0'
                    }`}
                  >
                    <Link
                      to='/about'
                      className='primary-btn'
                    >
                      Get Started
                      <HiArrowNarrowRight size={20} />
                    </Link>
                    <Link
                      to='/about'
                      className='font-Outfit text-base text-white transition-all duration-500 inline-flex gap-2 uppercase font-medium relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:bg-opacity-50 before:transition-all before:duration-500 hover:before:bg-PrimaryColor-0 hover:text-PrimaryColor-0'
                    >
                      Find Course
                      <span className='relative top-[2px]'>
                        <HiArrowNarrowRight size={20} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
