import { Link } from 'react-router-dom';
import titleShape from '/images/sub-title-shape.png';
import latestWorkCardImg from '/images/project-img1.png';
import latestWorkCardImg2 from '/images/project-img2.png';
import latestWorkCardImg3 from '/images/project-img3.png';
import latestWorkCardImg4 from '/images/project-img4.png';
import latestWorkShape from '/images/arrow.png';
import LatestWorkCard from './LatestWorkCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const latestWorkCard = [
  {
    id: 1,
    latestWorkCardImg: latestWorkCardImg,
    latestWorkSubTitle: 'Marketing',
    latestWorkCardURL: '/project_details',
    latestWorkTitle: 'Comprehensive SEO Audit and Keyword Strategy',
    latestWorkBtnText: 'Read More',
  },
  {
    id: 2,
    latestWorkCardImg: latestWorkCardImg2,
    latestWorkSubTitle: 'Marketing',
    latestWorkCardURL: '/project_details',
    latestWorkTitle: 'The Complete Guide Technical On-Page Optimization',
    latestWorkBtnText: 'Read More',
  },
  {
    id: 3,
    latestWorkCardImg: latestWorkCardImg3,
    latestWorkSubTitle: 'Marketing',
    latestWorkCardURL: '/project_details',
    latestWorkTitle: 'Innovative SEO and Content Marketing Strategies',
    latestWorkBtnText: 'Read More',
  },
  {
    id: 4,
    latestWorkCardImg: latestWorkCardImg4,
    latestWorkSubTitle: 'Marketing',
    latestWorkCardURL: '/project_details',
    latestWorkTitle: 'SEO Optimization Effective Lead Generation',
    latestWorkBtnText: 'Read More',
  },
  {
    id: 5,
    latestWorkCardImg: latestWorkCardImg2,
    latestWorkSubTitle: 'Marketing',
    latestWorkCardURL: '/project_details',
    latestWorkTitle: 'The Complete Guide Technical On-Page Optimization',
    latestWorkBtnText: 'Read More',
  },
];

const LatestWork = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    initialSlide: 1,
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
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className='bg-HeadingColor-0 py-16 md:py-20 lg:py-28'>
      <div className='Container'>
        <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center relative'>
          <div>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Latest Works
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[38px] md:leading-[48px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
              {`We've`} finished over 3k+ SEO
              <br />
              Marketing Projects
            </h1>
          </div>
          <div className='flex md:items-center md:justify-end'>
            <Link
              to={'/about3'}
              className='inline-block'
            >
              <button className='primary-btn'>
                {`All Projects`}
                <span className='icon-style'>
                  <svg
                    className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='CurrentColor'
                    width='14.2'
                    height='14.2'
                    viewBox='0 0 14.2 14.2'
                  >
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
          <img
            src={latestWorkShape}
            draggable={false}
            alt='Shape'
            className='absolute top-0 right-60 animate-swing hidden lg:block'
          />
        </div>
      </div>
      <div className='max-w-[1758px] w-full px-3 sm:px-5 mx-auto mt-[36px]'>
        <Swiper
          {...settings}
          pagination={pagination}
          modules={[Pagination]}
        >
          <div>
            {latestWorkCard.map(
              ({
                id,
                latestWorkCardImg,
                latestWorkSubTitle,
                latestWorkCardURL,
                latestWorkTitle,
                latestWorkBtnText,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className='pb-[105px]'>
                      <LatestWorkCard
                        latestWorkCardImg={latestWorkCardImg}
                        latestWorkSubTitle={latestWorkSubTitle}
                        latestWorkCardURL={latestWorkCardURL}
                        latestWorkTitle={latestWorkTitle}
                        latestWorkBtnText={latestWorkBtnText}
                      />
                    </div>
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

export default LatestWork;
