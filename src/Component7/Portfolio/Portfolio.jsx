import portfolioThumb from '/images/img1.webp';
import portfolioThumb2 from '/images/2-1.webp';
import portfolioThumb3 from '/images/3.webp';
import portfolioIcon from '/images/plane.webp';
import portfolioIcon2 from '/images/mike-1.webp';
import portfolioIcon3 from '/images/code.webp';
import titleShape from '/images/sub-title-shape.png';
import bgShape from '/images/blog-bg.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import PortfolioCard from './PortfolioCard';
import { FiArrowUpRight } from 'react-icons/fi';

const PortfolioData = [
  {
    id: 1,
    portfolioThumb: portfolioThumb,
    portfolioIcon: portfolioIcon,
    portfolioTitle: 'New IT Business Innovation',
    portfolioDesc:
      'Energistically customize just in time performance based quality',
    portfolioUrl: '/project_details',
    portfolioBtn: <FiArrowUpRight />,
  },
  {
    id: 2,
    portfolioThumb: portfolioThumb2,
    portfolioIcon: portfolioIcon2,
    portfolioTitle: 'SEO & Social Media Innovation',
    portfolioDesc:
      'Energistically customize just in time performance based quality',
    portfolioUrl: '/project_details',
    portfolioBtn: <FiArrowUpRight />,
  },
  {
    id: 3,
    portfolioThumb: portfolioThumb3,
    portfolioIcon: portfolioIcon3,
    portfolioTitle: 'Website Design and Development',
    portfolioDesc:
      'Energistically customize just in time performance based quality',
    portfolioUrl: '/project_details',
    portfolioBtn: <FiArrowUpRight />,
  },
];

const Portfolio = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    modules: [Autoplay],
    speed: 2000,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="portfolio relative z-10 pt-16 md:pt-20 lg:pt-28 pb-9 md:pb-14 lg:pb-[90px] bg-white">
      <div className='mx-auto'><img src={bgShape} draggable={false} alt="Bg Shape" className='w-full absolute -top-[28%] -z-10' /></div>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
            />{' '}
            WAHT WE PROVIDE{' '}
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='rotate-180'
            />
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-2'>
            We Provide Business Solutions
          </h1>
          <p className='font-Nunito text-TextColor2-0 max-w-[675px] w-full mx-auto'>
            Energistically customize just in time synergy and dynamic
            information. Synergistically network performance based quality
            vectors whereas client-based ROI.
          </p>
        </div>
        <div className='mt-[56px]'>
          <Swiper {...settings}>
            <div>
              {PortfolioData.map(
                ({
                  id,
                  portfolioThumb,
                  portfolioIcon,
                  portfolioTitle,
                  portfolioDesc,
                  portfolioUrl,
                  portfolioBtn,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className='pb-7'>
                        <PortfolioCard
                          portfolioThumb={portfolioThumb}
                          portfolioIcon={portfolioIcon}
                          portfolioUrl={portfolioUrl}
                          portfolioTitle={portfolioTitle}
                          portfolioDesc={portfolioDesc}
                          portfolioBtn={portfolioBtn}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
