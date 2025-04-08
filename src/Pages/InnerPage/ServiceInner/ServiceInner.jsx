import { FaArrowRightLong } from 'react-icons/fa6';
import serviceIcon from '/images/service3-icon1.png';
import serviceIcon2 from '/images/service3-icon2.png';
import serviceIcon3 from '/images/service3-icon3.png';
import serviceIcon4 from '/images/service3-icon4.png';
import serviceIcon5 from '/images/service3-icon5.png';
import serviceIcon6 from '/images/service3-icon6.png';
import ServiceCard from './ServiceCard';
import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import titleShape from '/images/sub-title-shape.png';

const serviceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: 'Cloud Services',
    serviceDesc:
      'Monotonectal grants to business visualize provid solution services business provid done',
    serviceUrl: '/service_details',
    serviceButton2: 'Learn More',
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: 'IT Management',
    serviceDesc:
      'Monotonectal grants to business visualize provid solution services business provid done',
    serviceUrl: '/service_details',
    serviceButton2: 'Learn More',
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon4,
    serviceTitle: 'Software Renew',
    serviceDesc:
      'Monotonectal grants to business visualize provid solution services business provid done',
    serviceUrl: '/service_details',
    serviceButton2: 'Learn More',
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon3,
    serviceTitle: 'Machine Learning',
    serviceDesc:
      'Monotonectal grants to business visualize provid solution services business provid done',
    serviceUrl: '/service_details',
    serviceButton2: 'Learn More',
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 5,
    serviceIcon: serviceIcon5,
    serviceTitle: 'Digital Marketing',
    serviceDesc:
      'Monotonectal grants to business visualize provid solution services business provid done',
    serviceUrl: '/service_details',
    serviceButton2: 'Learn More',
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 6,
    serviceIcon: serviceIcon6,
    serviceTitle: 'Web Development',
    serviceDesc:
      'Monotonectal grants to business visualize provid solution services business provid done',
    serviceUrl: '/service_details',
    serviceButton2: 'Learn More',
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 7,
    serviceIcon: serviceIcon6,
    serviceTitle: 'Cyber Security',
    serviceDesc:
      'Monotonectal grants to business visualize provid solution services business provid done',
    serviceUrl: '/service_details',
    serviceButton2: 'Learn More',
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 8,
    serviceIcon: serviceIcon6,
    serviceTitle: 'Data Analytic',
    serviceDesc:
      'Monotonectal grants to business visualize provid solution services business provid done',
    serviceUrl: '/service_details',
    serviceButton2: 'Learn More',
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
];

const ServiceInner = () => {
  return (
    <>
      <HelmetChanger title={'Service Inner Page'} />
      <BreadCrumb2
        breadCrumbTitle={'Our Services'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Our Services'}
      />
      <section className='py-16 md:py-0 lg:py-28 relative z-10 bg-BodyBg-0'>
        <div className='Container'>
          <div className='text-center'>
            <h5 className='flex items-center justify-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              IT Support For Business{' '}
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Ensuring Your Success Trusted <br />
              IT Services Source
            </h1>
          </div>
          <div className='mt-[88px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[68px]'>
              {serviceData.map(
                ({
                  id,
                  serviceImg,
                  serviceIcon,
                  serviceUrl,
                  serviceButton,
                  serviceButton2,
                  serviceTitle,
                  serviceDesc,
                  serviceShape,
                }) => {
                  return (
                    <>
                      <div key={id}>
                        <ServiceCard
                          serviceImg={serviceImg}
                          serviceIcon={serviceIcon}
                          serviceUrl={serviceUrl}
                          serviceButton={serviceButton}
                          serviceButton2={serviceButton2}
                          serviceTitle={serviceTitle}
                          serviceDesc={serviceDesc}
                          serviceShape={serviceShape}
                        />
                      </div>
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceInner;
