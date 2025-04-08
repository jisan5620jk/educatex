import serviceIcon2 from '/images/service-icon1.webp';
import serviceIcon3 from '/images/service-icon2.webp';
import serviceIcon4 from '/images/service-icon3.webp';
import serviceIcon5 from '/images/icon.webp';
import serviceIcon6 from '/images/service-icon5.webp';
import titleShape from '/images/sub-title-shape.png';
import ServiceCard from './ServiceCard';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import './service.css';

const serviceData = [
  {
    id: 1,
    serviceIcon: serviceIcon2,
    serviceTitle: 'Website Design and Development',
    serviceDesc:
      'Competently leverage existing top-line maximize cost effective done',
    serviceUrl: '/service',
    serviceBtnText: 'Learn More',
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon3,
    serviceTitle: 'Cloud Computing and Hosting Service',
    serviceDesc:
      'Competently leverage existing top-line maximize cost effective done',
    serviceUrl: '/service',
    serviceBtnText: 'Learn More',
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon4,
    serviceTitle: 'Ai & Machine Learning Integrations',
    serviceDesc:
      'Competently leverage existing top-line maximize cost effective done',
    serviceUrl: '/service',
    serviceBtnText: 'Learn More',
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon5,
    serviceTitle: 'Custom Softwares Development3D',
    serviceDesc:
      'Competently leverage existing top-line maximize cost effective done',
    serviceUrl: '/service',
    serviceBtnText: 'Learn More',
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    id: 5,
    serviceIcon: serviceIcon6,
    serviceTitle: 'Graphics & Vector Designing',
    serviceDesc:
      'Competently leverage existing top-line maximize cost effective done',
    serviceUrl: '/service',
    serviceBtnText: 'Learn More',
    serviceBtnIcon: <GoArrowRight />,
  },
];

const Service = () => {
  return (
    <section className='bg-BodyBgDark3-0 py-16 md:py-20 lg:py-28 relative z-10'>
      <div className='Container '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10'>
          <div>
            <div>
              <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-white uppercase'>
                <img
                  src={titleShape}
                  draggable={false}
                  alt='Shape'
                  className='brightness-0 invert-[1]'
                />{' '}
                WAHT WE PROVIDE
              </h5>
              <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
                Provide High Quality
                <br /> Data-Driven Service
                <br /> for IT Industry
              </h1>
            </div>
            <Link
              to={'/service'}
              className='inline-block'
            >
              <button className='primary-btn'>
                {`All Service`}
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
                <div
                  key={id}
                  className='service-dark-box3'
                >
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
