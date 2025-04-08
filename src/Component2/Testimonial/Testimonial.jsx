import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import titleShape from '/images/sub-title-shape.png';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import { RiDoubleQuotesL } from 'react-icons/ri';
import testiProfile from '/images/mans.png';
import testiProfile2 from '/images/mans2.png';
import testiProfile3 from '/images/mans3.png';
import testiProfile4 from '/images/mans4.png';
import testiProfile5 from '/images/mans5.png';

const testiData = [
  {
    id: 1,
    testQuote: <RiDoubleQuotesL />,
    testiTitle: 'Great 3d Modal',
    testiDesc: `Competently leverage existing top line client 
                centric supply chain. Enthusiastically maximi 
                effective technologies actualize alternatives
                materials via high-payoff`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Web Developer',
  },
  {
    id: 2,
    testQuote: <RiDoubleQuotesL />,
    testiTitle: 'Awesome Design',
    testiDesc: `Competently leverage existing top line client 
                centric supply chain. Enthusiastically maximi 
                effective technologies actualize alternatives
                materials via high-payoff`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile2,
    testiName: 'Michel Jiyang',
    testiDesignation: 'Web Developer',
  },
  {
    id: 3,
    testQuote: <RiDoubleQuotesL />,
    testiTitle: 'Great Supports',
    testiDesc: `Competently leverage existing top line client 
                centric supply chain. Enthusiastically maximi 
                effective technologies actualize alternatives
                materials via high-payoff`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile3,
    testiName: 'Anjelina Jholi',
    testiDesignation: 'Web Developer',
  },
  {
    id: 4,
    testQuote: <RiDoubleQuotesL />,
    testiTitle: 'Smart Development',
    testiDesc: `Competently leverage existing top line client 
                centric supply chain. Enthusiastically maximi 
                effective technologies actualize alternatives
                materials via high-payoff`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile4,
    testiName: 'Mariya Watson',
    testiDesignation: 'Web Developer',
  },
  {
    id: 5,
    testQuote: <RiDoubleQuotesL />,
    testiTitle: 'Best Quality',
    testiDesc: `Competently leverage existing top line client 
                centric supply chain. Enthusiastically maximi 
                effective technologies actualize alternatives
                materials via high-payoff`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile5,
    testiName: 'David Hamilton',
    testiDesignation: 'Web Developer',
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1500,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
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
      1400: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section className='relative z-10 overflow-hidden px-4 sm:px-8 lg:px-9 xl:px-16 2xl:px-14 3xl:px-[100px] pt-16 md:pt-20 lg:pt-28'>
      <div className='text-center'>
        <h5 className='flex items-center justify-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
          <img
            src={titleShape}
            draggable={false}
            alt='Shape'
          />{' '}
          Testimonials{' '}
          <img
            src={titleShape}
            draggable={false}
            alt='Shape'
            className='rotate-180'
          />
        </h5>
        <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
          Trusted By Industry Leader for
          <br /> Clients Testimonial
        </h1>
      </div>
      <div className='mt-[46px]'>
        <Swiper {...settings}>
          <div>
            {testiData.map(
              ({
                id,
                testQuote,
                testiTitle,
                testiRatingIcon,
                testiName,
                testiProfile,
                testiDesignation,
                testiDesc,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <TestimonialCard
                      testQuote={testQuote}
                      testiTitle={testiTitle}
                      testiRatingIcon={testiRatingIcon}
                      testiName={testiName}
                      testiProfile={testiProfile}
                      testiDesignation={testiDesignation}
                      testiDesc={testiDesc}
                    />
                  </SwiperSlide>
                );
              }
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
