import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { MdOutlineStarHalf, MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import testiImg from '/images/testi-autor51.png';
import testiImg2 from '/images/testi-autor52.png';
import shape from '/images/testi-shape55.png';
import { useRef, useState } from 'react';
import TextReveal from '../../Shared/TextAnim/TextReveal';

const testiData = [
  {
    id: 1,
    testiDesc: `Educate the ultimate destination for knowledge seekers educators we are committed to transforing special education attractive ompliant systems learning opinions.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiRatingIcon2: <MdOutlineStarHalf />,
    testiName: 'Anjelina Watson',
    testiImg: testiImg,
    testiDesignation: 'Student',
  },
  {
    id: 2,
    testiDesc: `Educate the ultimate destination for knowledge seekers educators we are committed to transforing special education attractive ompliant systems learning opinions.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiRatingIcon2: <MdOutlineStarHalf />,
    testiName: 'Jhon D. Alexon',
    testiImg: testiImg2,
    testiDesignation: 'Student',
  },
  {
    id: 3,
    testiDesc: `Educate the ultimate destination for knowledge seekers educators we are committed to transforing special education attractive ompliant systems learning opinions.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiRatingIcon2: <MdOutlineStarHalf />,
    testiName: 'Anjelina Jholi',
    testiImg: testiImg,
    testiDesignation: 'Student',
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBulletClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  const settings = {
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Pagination],
    onSwiper: (swiper) => (swiperRef.current = swiper),
    onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <section className='relative z-10 overflow-hidden bg-white'>
      <div className='absolute -z-20 bottom-[14%] left-0 hidden lg:block animate-wiggle'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
        />
      </div>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 inline-block relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
            Testimonial
          </h5>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4'>
            <TextReveal text='What Our Students Think'/>
          </h1>
        </div>

        <div className='mt-[46px] relative z-10 pb-7'>
          <Swiper {...settings}>
            {testiData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className='lg:p-4'>
                  <TestimonialCard {...testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Simple Dot Pagination */}
          <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3 z-10'>
            {testiData.map((_, i) => (
              <button
                key={i}
                onClick={() => handleBulletClick(i)}
                className={`rounded-full size-3 relative z-10 before:absolute before:-left-[5px] before:-top-[5px] before:size-5 before:border before:border-PrimaryColor-0 before:transition-all before:duration-500 before:rounded-full before:scale-0 ${
                  activeIndex === i
                    ? 'bg-PrimaryColor-0 size-[10px] before:scale-100'
                    : 'bg-PrimaryColor-0 bg-opacity-25'
                } transition-all duration-500`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute -z-10 bottom-0 left-0 w-full h-[24%] inline-block bg-BodyBg-0'></div>
    </section>
  );
};

export default Testimonial;
