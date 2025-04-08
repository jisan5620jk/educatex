import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import testiProfile from '/images/t-author1.webp';
import testiProfile2 from '/images/t-author2.webp';
import testiShape from '/images/google.webp';
import testiQuote from '/images/quote-1.webp';
import paginationShape from '/images/pagination-shape.png';
import Marquee from '../Marquee/Marquee';
import TestiNavigation from './TestiNavigation';

const testiData = [
  {
    id: 1,
    paginationShape: paginationShape,
    testQuote: testiQuote,
    testiShape: testiShape,
    testiDesc: `Distinctively matrix highly efficient niches rather than market
                Seamlessly maximize dynamic initiatives rather sustainables
                negotiate efficient synergy multidisciplinary. Globally actualiz
                through real-time materials`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testRatingText: '(4.7)',
    testiProfile: testiProfile,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Maintanance',
  },
  {
    id: 2,
    paginationShape: paginationShape,
    testQuote: testiQuote,
    testiShape: testiShape,
    testiDesc: `Distinctively matrix highly efficient niches rather than market
                Seamlessly maximize dynamic initiatives rather sustainables
                negotiate efficient synergy multidisciplinary. Globally actualiz
                through real-time materials`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testRatingText: '(4.7)',
    testiProfile: testiProfile2,
    testiName: 'Anjelina Jholi',
    testiDesignation: 'CCTV Expert',
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    modules: [Autoplay],
    spaceBetween: 30,
    speed: 2000,
    autoplay: {
      delay: 5000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
  };
  return (
    <section className='bg-[url("/images/teastimonial-bg.webp")] bg-cover bg-no-repeat bg-center relative z-10 overflow-hidden pt-16 md:pt-20 lg:pt-28 pb-6 md:pb-20 lg:pb-[70px]'>
      <div className='Container'>
        <div className='max-w-[758px] w-full ml-auto relative z-10'>
          <Swiper {...settings}>
            <div>
              {testiData.map(
                ({
                  id,
                  paginationShape,
                  testQuote,
                  testiShape,
                  testiRatingIcon,
                  testRatingText,
                  testiName,
                  testiProfile,
                  testiDesignation,
                  testiDesc,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <TestimonialCard
                        paginationShape={paginationShape}
                        testQuote={testQuote}
                        testiShape={testiShape}
                        testiRatingIcon={testiRatingIcon}
                        testRatingText={testRatingText}
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
            <TestiNavigation />
          </Swiper>
        </div>
      </div>
      <div className='md:pt-[72px]'>
        <Marquee />
      </div>
    </section>
  );
};

export default Testimonial;
