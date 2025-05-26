import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import testiProfile from '/images/testi-autor1.png';
import testiProfile3 from '/images/testi-autor3.png';
import testiProfile4 from '/images/testi-autor4.png';
import testiQuote from '/images/testi-quote.png';
import shape from '/images/hero-arrow.png';
import subTilteIcon from '/images/sub-title2.png';
import TestiNavigation from './TestiNavigation';
import { useRef } from 'react';
import user from '/images/hero-autor.png';
import OnScrollCounter from '../../../../Shared/Counter/OnScrollCounter';
import TextReveal from '../../../../Shared/TextAnim/TextReveal';

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

  const settings = {
    loop: true,
    spaceBetween: 26,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
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
    },
  };

  return (
    <section className='relative z-10 overflow-hidden bg-BodyBg-0 py-16 md:py-20 lg:py-28'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7 2xl:gap-10 relative z-10'>
          <div className='lg:col-span-1'>
            <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase flex items-center gap-3'>
              <img
                src={subTilteIcon}
                draggable={false}
                alt='Icon'
              />{' '}
              ABOUT US
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4'>
              <TextReveal text='All Real Experiences' />
              <TextReveal text='From Our Dedicated' />
              <TextReveal text='Learners' />
            </h1>
            <div className='mt-10 border-b border-SecondaryColor-0 border-opacity-10 pb-6'>
              <div>
                <img
                  src={user}
                  draggable={false}
                  alt='User Image'
                />
              </div>
              <div className='flex items-center gap-5'>
                <div className='!font-Outfit font-semibold text-[26px] text-HeadingColor-0 flex gap-1 items-center'>
                  <OnScrollCounter
                    start={0}
                    end={130}
                    duration={3000}
                  />
                  <span>+</span>
                </div>
                <h5 className='font-OpenSans text-HeadingColor-0'>
                  Reviews
                </h5>
              </div>
            </div>
          </div>
          <div className='lg:col-span-2 relative'>
            <Swiper
              {...settings}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {testiData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className='pb-16'>
                    <TestimonialCard {...testimonial} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <TestiNavigation swiperRef={swiperRef} />

          <div className='absolute -z-10 bottom-[44%] left-44 animate-dance hidden lg:block'>
            <img
              src={shape}
              draggable={false}
              alt='Shape'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
