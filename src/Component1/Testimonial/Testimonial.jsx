import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { MdOutlineStarHalf, MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import testiImg from '/images/testi-autor1.png';
import testiImg2 from '/images/testi-autor3.png';
import testiImg3 from '/images/testi-autor4.png';
import testiQuate from '/images/testi-quote.png';
import testiThumb from '/images/testi-thumb.png';
import testiShape from '/images/testi-map.png';
import testiShape2 from '/images/hero-dot.png';
import TestiNavigation from './TestiNavigation';
import './testimonial.css';

const testiData = [
  {
    id: 1,
    testiTitle: 'Design Quality!',
    testiQuate: testiQuate,
    testiDesc: `Educate the ultimate destination for knowledge seekers and educators we are committed to transforming special education impact global channels  without standards compliant systems attractive learning opinions.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiRatingIcon2: <MdOutlineStarHalf />,
    testiName: 'Anjelina Watson',
    testiImg: testiImg,
    testiDesignation: 'Student',
  },
  {
    id: 2,
    testiTitle: 'Awesome Support!',
    testiQuate: testiQuate,
    testiDesc: `Educate the ultimate destination for knowledge seekers and educators we are committed to transforming special education impact global channels  without standards compliant systems attractive learning opinions.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiRatingIcon2: <MdOutlineStarHalf />,
    testiName: 'Jhon D. Alexon',
    testiImg: testiImg2,
    testiDesignation: 'Student',
  },
  {
    id: 3,
    testiTitle: 'Best Development!',
    testiQuate: testiQuate,
    testiDesc: `Educate the ultimate destination for knowledge seekers and educators we are committed to transforming special education impact global channels  without standards compliant systems attractive learning opinions.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiRatingIcon2: <MdOutlineStarHalf />,
    testiName: 'Murad Junaid',
    testiImg: testiImg3,
    testiDesignation: 'Student',
  },
];

const Testimonial = () => {
  const settings = {
    modules: [Autoplay],
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    effect: 'fade', // Fade effect for smooth transitions
    fadeEffect: {
      crossFade: true,
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };

  return (
    <section className='testimonial pt-16 pb-28 md:pt-20 lg:pt-[120px] bg-BodyBg-0 relative z-20 overflow-hidden'>
      <div className='absolute -z-10 top-[22%] left-[13%] inline-block'>
        <img
          src={testiShape}
          draggable={false}
          alt='Testimonial Shape'
          className='animate-rotational'
        />
      </div>
      <div className='absolute -z-10 top-[56%] left-[12%] inline-block'>
        <img
          src={testiShape2}
          draggable={false}
          alt='Testimonial Shape'
          className='animate-wiggle'
        />
      </div>
      <div className='Container'>
        <div className='relative grid items-center grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='border-b border-SecondaryColor-0 border-opacity-15 py-6'>
            <h5 className='font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              TESTIMONIALS
            </h5>
          </div>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0'>
            Real Experiences From Our
            <br />
            Dedicated Learners
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-start mt-12'>
          <div className='lg:-mt-2 flex items-center justify-center lg:ml-12 relative'>
            <img
              src={testiThumb}
              draggable={false}
              alt='Testimonial Image'
            />
          </div>
          <div className='lg:ml-4'>
            <Swiper
              {...settings}
              pagination={pagination}
              modules={[Pagination, EffectFade]}
            >
              <div>
                {testiData.map(
                  ({
                    id,
                    testiTitle,
                    testiQuate,
                    testiRatingIcon,
                    testiRatingIcon2,
                    testiName,
                    testiImg,
                    testiDesc,
                    testiDesignation,
                  }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div className='pb-24 sm:pb-0'>
                          <TestimonialCard
                            testiTitle={testiTitle}
                            testiQuate={testiQuate}
                            testiRatingIcon={testiRatingIcon}
                            testiRatingIcon2={testiRatingIcon2}
                            testiName={testiName}
                            testiImg={testiImg}
                            testiDesc={testiDesc}
                            testiDesignation={testiDesignation}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  }
                )}
              </div>
              <TestiNavigation />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
