import serviceIcon from '/images/service-shape1.webp';
import serviceIcon2 from '/images/service-shape2.webp';
import serviceIcon3 from '/images/service-shape3.webp';
import shape from '/images/service_shape.png';
import ServiceCard from './ServiceCard';
import { GoArrowRight } from 'react-icons/go';
import titleShape from '/images/sub-title-shape.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ServiceNavigation from './ServiceNavigation';

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceNumber: '01',
    serviceTitle: 'Best Marketing Software',
    serviceDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital',
    serviceUrl: '/service_details',
    serviceBtnText: 'Learn More',
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceNumber: '02',
    serviceTitle: 'Product Sales Software',
    serviceDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital',
    serviceUrl: '/service_details',
    serviceBtnText: 'Learn More',
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceNumber: '03',
    serviceTitle: 'Best Marketing Software',
    serviceDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital',
    serviceUrl: '/service_details',
    serviceBtnText: 'Learn More',
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon2,
    serviceNumber: '02',
    serviceTitle: 'Product Sales Software',
    serviceDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital',
    serviceUrl: '/service_details',
    serviceBtnText: 'Learn More',
    serviceBtnIcon: <GoArrowRight />,
  },
];

const Service = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    modules: [Autoplay],
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
        slidesPerView: 2,
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
    <div className='bg-BodyBgDark3-0'>
      <section className='mx-2 sm:mx-3 md:mx-5 lg:mx-2 xl:mx-5 2xl:mx-8 3xl:mx-[50px] rounded-md lg:rounded-[20px] py-16 md:py-20 lg:py-[120px] bg-BodyBgDark2-0 relative z-10 overflow-hidden'>
        <div className='absolute -z-10 -top-[85%] -left-[55%] size-[1245px] rounded-full blur-[150px] bg-PrimaryColor2-0 bg-opacity-50'></div>
        <div className='Container'>
          <div className='relative text-center'>
            <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-white uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
                className='brightness-0 invert-[1]'
              />{' '}
              SOFTWARES{' '}
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
                className='rotate-180 brightness-0 invert-[1]'
              />
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
              Driving Change with Innovative
              <br />
              Successful Softwares
            </h1>
            <img
              src={shape}
              draggable={false}
              alt='Shape'
              className='absolute top-2 2xl:right-0 3xl:-right-12 animate-rotational hidden 2xl:block'
            />
          </div>
          <div className='mt-[54px]'>
            <Swiper {...settings}>
              {ServiceData.map(
                ({
                  id,
                  serviceIcon,
                  serviceNumber,
                  serviceTitle,
                  serviceDesc,
                  serviceUrl,
                  serviceBtnText,
                  serviceBtnIcon,
                }) => {
                  return (
                    <>
                      <SwiperSlide key={id}>
                        <div className='pb-[104px]'>
                          <ServiceCard
                            serviceIcon={serviceIcon}
                            serviceNumber={serviceNumber}
                            serviceTitle={serviceTitle}
                            serviceDesc={serviceDesc}
                            serviceUrl={serviceUrl}
                            serviceBtnText={serviceBtnText}
                            serviceBtnIcon={serviceBtnIcon}
                          />
                        </div>
                      </SwiperSlide>
                    </>
                  );
                }
              )}
              <ServiceNavigation />
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
