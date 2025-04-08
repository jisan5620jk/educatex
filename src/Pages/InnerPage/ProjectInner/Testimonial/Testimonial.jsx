import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import titleShape from '/images/sub-title-shape.png';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import testiShape from '/images/g-logo.webp';
import testiProfile from '/images/t-author1.webp';
import testiProfile2 from '/images/t-author2.webp';
import testiProfile3 from '/images/t-author3.webp';
import testiProfile4 from '/images/t-author2.webp';
import TestiNavigation from './TestiNavigation';

const testiData = [
  {
    id: 1,
    testiShape: testiShape,
    testiTitle: 'Great 3d Modal',
    testiDesc: `Competently leverage existing top-line bandwidth 
client centric supply chains enthusiastically maxim 
cost effective technologies the`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Web Developer',
  },
  {
    id: 2,
    testiShape: testiShape,
    testiTitle: 'Awesome Design',
    testiDesc: `Competently leverage existing top-line bandwidth 
client centric supply chains enthusiastically maxim 
cost effective technologies the`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile2,
    testiName: 'Mariya Watson',
    testiDesignation: 'UI/UX Designer',
  },
  {
    id: 3,
    testiShape: testiShape,
    testiTitle: 'Great Supports',
    testiDesc: `Competently leverage existing top-line bandwidth 
client centric supply chains enthusiastically maxim 
cost effective technologies the`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile3,
    testiName: 'Anjelina Jholi',
    testiDesignation: 'App Developer',
  },
  {
    id: 4,
    testiShape: testiShape,
    testiTitle: 'Smart Development',
    testiDesc: `Competently leverage existing top-line bandwidth 
client centric supply chains enthusiastically maxim 
cost effective technologies the`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile4,
    testiName: 'Mariya Watson',
    testiDesignation: 'Mock-Up Developer',
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
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="bg-[url('/images/teasti-bg-2.webp')] bg-cover bg-center relative z-10 overflow-hidden px-4 sm:px-8 lg:px-2 xl:px-16 2xl:px-14 3xl:px-[100px] py-16 md:py-20 lg:py-[120px] rounded-b-lg lg:rounded-b-2xl">
      <div className='Container md:-mb-[130px]'>
        <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
          <img
            src={titleShape}
            draggable={false}
            alt='Shape'
          />{' '}
          Testimonials
        </h5>
        <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
          Trusted By Industry Leader
          <br /> Clients Testimonial
        </h1>
      </div>
      <div className='mt-[46px]'>
        <Swiper {...settings}>
          {testiData.map(
            ({
              id,
              testiShape,
              testiTitle,
              testiRatingIcon,
              testiName,
              testiProfile,
              testiDesignation,
              testiDesc,
            }) => {
              return (
                <SwiperSlide key={id}>
                  <div className='pt-[100px] md:pt-[138px]'>
                    <TestimonialCard
                      testiShape={testiShape}
                      testiTitle={testiTitle}
                      testiRatingIcon={testiRatingIcon}
                      testiName={testiName}
                      testiProfile={testiProfile}
                      testiDesignation={testiDesignation}
                      testiDesc={testiDesc}
                    />
                  </div>
                </SwiperSlide>
              );
            }
          )}
          <TestiNavigation />
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
