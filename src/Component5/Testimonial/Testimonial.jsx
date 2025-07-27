import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import testiImg from '/images/testi-thumb7.png';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import testiProfile from '/images/testi-autor7.png';
import TestiNavigation from './TestiNavigation';

const testiData = [
  {
    id: 1,
    testiImg,
    testiTitle: 'Explore Genuine Feedback',
    testiSubTitle: 'Clients Feedback',
    testiDesc: `Enrolling in the Advanced digital marketing learning course was transfors pro lessons and personalized feedback enabled me to master marketing techniques I've already noticed a significant boost camp toun recommend this course to digital marketing skills!`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile,
    testiName: 'Emily Jhonson',
    testiDesignation: 'Teacher',
  },
  {
    id: 2,
    testiImg,
    testiTitle: 'Explore Genuine Feedback',
    testiSubTitle: 'Clients Feedback',
    testiDesc: `Enrolling in the Advanced digital marketing learning course was transfors pro lessons and personalized feedback enabled me to master marketing techniques I've already noticed a significant boost camp toun recommend this course to digital marketing skills!`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile,
    testiName: 'Mariya Watson',
    testiDesignation: 'Instructor',
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1500,
    modules: [Autoplay,EffectFade],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
    onSwiper: (swiper) => setActiveIndex(swiper.realIndex),
  };

  return (
    <section className='px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] mt-16 md:mt-20 lg:mt-28'>
      <div className='bg-white rounded-xl sm:rounded-2xl md:rounded-[30px] relative z-10 pb-16 md:pb-20 lg:pb-28 overflow-hidden'>
        <div className='box-row Container'>
          <Swiper
            {...settings}
          >
            {testiData.map((data, index) => (
              <SwiperSlide key={index} className='box'>
                <TestimonialCard
                  {...data}
                  isActive={activeIndex === index}
                />
              </SwiperSlide>
            ))}
            <TestiNavigation />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
