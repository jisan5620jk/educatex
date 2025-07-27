import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import testiProfile from '/images/testi-autor1.png';
import testiProfile3 from '/images/testi-autor3.png';
import testiProfile4 from '/images/testi-autor4.png';
import testiQuote from '/images/testi-quote.png';
import shape from '/images/testi-star.png';
import { useRef, useState } from 'react';

const testiData = [
  {
    id: 1,
    testQuote: testiQuote,
    testiTitle: 'Great 3d Modal',
    testiDesc:
      'Educate ultimate destination knowledge seekers and educators we are committed to transforming special education impact channels without standards compliant-is systems attractive learning',
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile4,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Web Developer',
  },
  {
    id: 2,
    testQuote: testiQuote,
    testiTitle: 'Awesome Design',
    testiDesc:
      'Educate ultimate destination knowledge seekers and educators we are committed to transforming special education impact channels without standards compliant-is systems attractive learning',
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile3,
    testiName: 'Michel Jiyang',
    testiDesignation: 'Web Developer',
  },
  {
    id: 3,
    testQuote: testiQuote,
    testiTitle: 'Great Supports',
    testiDesc:
      'Educate ultimate destination knowledge seekers and educators we are committed to transforming special education impact channels without standards compliant-is systems attractive learning',
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile,
    testiName: 'Anjelina Jholi',
    testiDesignation: 'Web Developer',
  },
  {
    id: 4,
    testQuote: testiQuote,
    testiTitle: 'Smart Development',
    testiDesc:
      'Educate ultimate destination knowledge seekers and educators we are committed to transforming special education impact channels without standards compliant-is systems attractive learning',
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile3,
    testiName: 'Mariya Watson',
    testiDesignation: 'Web Developer',
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
    spaceBetween: 26,
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
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className='relative z-10 overflow-hidden bg-SecondaryColor-0 py-16 md:py-20 lg:py-28'>
      <div className='absolute top-32 left-[37%] hidden lg:block'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
          className='animate-spin-slow'
        />
      </div>
      <div className='Container'>
        <div className='relative grid items-center grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='border-b border-white border-opacity-15 py-6'>
            <h5 className='zoom-in font-Outfit font-medium text-PrimaryColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              TESTIMONIALS
            </h5>
          </div>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white'>
            Real Experiences From Our
            <br />
            Dedicated Learners
          </h1>
        </div>

        <div className='box-row mt-[46px] relative'>
          <Swiper {...settings}>
            {testiData.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className='box'>
                <div className='pb-16'>
                  <TestimonialCard {...testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Simple Dot Pagination */}
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 z-10'>
            {testiData.map((_, i) => (
              <button
                key={i}
                onClick={() => handleBulletClick(i)}
                className={`rounded-full size-3 relative z-10 before:absolute before:-left-[5px] before:-top-[5px] before:size-5 before:border before:border-PrimaryColor-0 before:transition-all before:duration-500 before:rounded-full before:scale-0 ${
                  activeIndex === i
                    ? 'bg-PrimaryColor-0 size-[10px] before:scale-100'
                    : 'bg-white bg-opacity-15'
                } transition-all duration-500`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
