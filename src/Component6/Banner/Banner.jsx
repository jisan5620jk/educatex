import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import bannerShape from '/images/hero-arrow5.png';
import scroolShape from '/images/hero-scrool.png';

const Banner = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBulletClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  const slides = [
    {
      image: '/images/hero-bg52.png',
    },
    {
      image: '/images/hero-bg5.png',
    },
    {
      image: '/images/hero-bg52.png',
    },
  ];

  const settings = {
    loop: true,
    speed: 2000,
    modules: [Autoplay, EffectFade, Pagination],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    onSwiper: (swiper) => (swiperRef.current = swiper),
    onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: (swiper, current, total) => {
        return `<span class="text-white font-Outfit text-sm">${current} / ${total}</span>`;
      },
    },
  };

  return (
    <div className='relative z-10'>
      <Swiper {...settings}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section
              className='bg-cover bg-center bg-no-repeat pt-[188px] pb-[250px] flex items-center relative z-10'
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className='Container'>
                <div className='relative text-center'>
                  <h5
                    className={`font-Outfit bg-white/5 px-5 py-[6px] transition-all duration-500 rounded-full border border-white/20 text-white text-[17px] inline-flex items-center gap-3 uppercase mb-6 ${
                      activeIndex === index
                        ? 'translate-y-0 opacity-100 delay-[100ms]'
                        : 'translate-y-[100px] opacity-0'
                    }`}
                  >
                    Welcome To Educate
                  </h5>

                  <h1
                    className={`font-Outfit font-bold text-white text-[26px] leading-[32px] sm:text-[44px] sm:leading-[54px] md:text-[56px] md:leading-[62px] lg:text-[50px] lg:leading-[60px] xl:text-[58px] xl:leading-[68px] 2xl:text-[70px] 2xl:leading-[80px] transition-all duration-500 ${
                      activeIndex === index
                        ? 'translate-y-0 opacity-100 delay-[200ms]'
                        : 'translate-y-[100px] opacity-0'
                    }`}
                  >
                    Unlock Career
                  </h1>

                  <h1
                    className={`font-Outfit font-bold text-white text-[26px] leading-[32px] sm:text-[44px] sm:leading-[54px] md:text-[56px] md:leading-[62px] lg:text-[50px] lg:leading-[60px] xl:text-[58px] xl:leading-[68px] 2xl:text-[70px] 2xl:leading-[80px] transition-all duration-500 ${
                      activeIndex === index
                        ? 'translate-y-0 opacity-100 delay-[300ms]'
                        : 'translate-y-[100px] opacity-0'
                    }`}
                  >
                    Opportunities with Our
                  </h1>

                  <h1
                    className={`font-Outfit font-bold text-white text-[26px] leading-[32px] sm:text-[44px] sm:leading-[54px] md:text-[56px] md:leading-[62px] lg:text-[50px] lg:leading-[60px] xl:text-[58px] xl:leading-[68px] 2xl:text-[70px] 2xl:leading-[80px] transition-all duration-500 ${
                      activeIndex === index
                        ? 'translate-y-0 opacity-100 delay-[400ms]'
                        : 'translate-y-[100px] opacity-0'
                    }`}
                  >
                    Programs
                  </h1>

                  <div
                    className={`flex flex-wrap items-center justify-center gap-y-5 gap-x-8 transition-all duration-500 mt-12 ${
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
                  <img
                    src={bannerShape}
                    draggable={false}
                    className='absolute bottom-0 left-[74%] animate-swing hidden xl:block'
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Number Pagination */}
      <div className='swiper-pagination absolute bottom-10 left-1/2 -translate-x-1/2 z-10' />

      {/* Scroll Icon Section */}
      <div className='absolute z-10 -bottom-20 left-1/2 -translate-x-1/2 size-[74px] sm:size-[142px] lg:size-[170px] flex items-center justify-center'>
        <div className='relative z-10'>
          <div className='size-14 sm:size-24 lg:size-28 xl:size-[120px] animate-rotational relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 250.5 250.5'
              className='overflow-visible'
            >
              <path
                d='M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125'
                id='textPath'
                className='fill-transparent'
              ></path>
              <text className='font-Outfit text-[33px] uppercase'>
                <textPath
                  href='#textPath'
                  startOffset='0%'
                  className='fill-HeadingColor-0'
                >
                  *** Scroll Down Here *** Scroll Down Here
                </textPath>
              </text>
            </svg>
          </div>
          <a
            href={'#about'}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105px]'
          >
            <img
              src={scroolShape}
              draggable={false}
              alt='Shape'
              className=''
            />
          </a>
        </div>
      </div>

      {/* Custom Bullets (Optional) */}
      <div className='absolute top-1/2 left-14 -translate-y-1/2 flex flex-col gap-5 z-10'>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleBulletClick(i)}
            className={`rounded-full size-[52px] relative z-10 flex items-center justify-center border border-white border-opacity-30 before:absolute before:-left-[7px] before:-top-[7px] before:size-[64px] before:border-2 before:border-PrimaryColor-0 before:border-dashed before:transition-all before:duration-500 before:rounded-full before:scale-0 ${
              activeIndex === i
                ? 'bg-PrimaryColor-0 before:scale-100 border-PrimaryColor-0 before:animate-rotational'
                : 'bg-white bg-opacity-10'
            } transition-all duration-500`}
          >
            <span className='text-white font-Outfit text-lg font-medium'>
              {String(i + 1).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
