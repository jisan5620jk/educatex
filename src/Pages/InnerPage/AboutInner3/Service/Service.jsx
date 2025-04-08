import serviceIcon2 from '/images/icon1_About-Us.webp';
import serviceIcon3 from '/images/icon2_About-Us.webp';
import serviceIcon4 from '/images/icon3_About-Us.webp';
import titleShape from '/images/sub-title-shape.png';
import ServiceCard from './ServiceCard';
import { GoArrowRight } from 'react-icons/go';

const serviceData = [
  {
    id: 1,
    serviceIcon: serviceIcon2,
    serviceTitle: 'Our Technology Solutions',
    serviceDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital',
    serviceUrl: '/service',
    serviceBtnText: 'View Our All Services',
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon3,
    serviceTitle: 'Why should choose Our Services',
    serviceDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital',
    serviceUrl: '/service',
    serviceBtnText: 'Why Choose Us',
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon4,
    serviceTitle: 'educatex Mission and vision',
    serviceDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital',
    serviceUrl: '/service',
    serviceBtnText: 'Mission & vision',
    serviceBtnIcon: <GoArrowRight />,
  },
];

const Service = () => {
  return (
    <section className='bg-[url("/images/About-Us-service-bg.webp")] bg-no-repeat bg-cover bg-center py-16 md:py-20 lg:py-28 relative z-10'>
      <div className='Container '>
        <div className='text-center'>
          <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
            />{' '}
            More About{' '}
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
            />
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
            Driving Change with Innovative
            <br /> Successful Softwares
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10 mt-12'>
          {serviceData.map(
            ({
              id,
              serviceIcon,
              serviceTitle,
              serviceDesc,
              serviceUrl,
              serviceBtnText,
              serviceBtnIcon,
            }) => {
              return (
                <div key={id}>
                  <ServiceCard
                    serviceIcon={serviceIcon}
                    serviceTitle={serviceTitle}
                    serviceDesc={serviceDesc}
                    serviceUrl={serviceUrl}
                    serviceBtnText={serviceBtnText}
                    serviceBtnIcon={serviceBtnIcon}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
