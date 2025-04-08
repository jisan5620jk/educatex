import featureIcon from '/images/service-icon4.webp';
import featureIcon2 from '/images/service-icon1.webp';
import featureIcon3 from '/images/service-icon2.webp';
import featureIcon4 from '/images/service-icon3.webp';
import featureIcon5 from '/images/icon.webp';
import featureIcon6 from '/images/service-icon5.webp';
import titleShape from '/images/sub-title-shape.png';
import FeatureCard from './FeatureCard';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import './feature.css';

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: 'Custom Softwares Development',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service_details',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: 'Website Design and Development',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service_details',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: 'Cloud Computing and Hosting Service',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service_details',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 4,
    featureIcon: featureIcon4,
    featureTitle: 'Ai & Machine Learning Integrations',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service_details',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 5,
    featureIcon: featureIcon5,
    featureTitle: 'Androind and IOS Apps Development',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service_details',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 6,
    featureIcon: featureIcon6,
    featureTitle: '3D Graphics & Vector Designing',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service_details',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
];

const Feature = () => {
  return (
    <section className='bg-white py-16 md:py-20 lg:py-28'>
      <div className='Container '>
        <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:items-center'>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              WAHT WE PROVIDE
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Provide High Quality Software’s
              <br />
              Service for All Industry
            </h1>
          </div>
          <div className=''>
            <Link
              to={'/service_details'}
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
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10 mt-11'>
          {processData.map(
            ({
              id,
              featureIcon,
              featureTitle,
              featureDesc,
              featureUrl,
              featureBtnText,
              featureBtnIcon,
            }) => {
              return (
                <div
                  key={id}
                  className='feature-box3'
                >
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                    featureBtnText={featureBtnText}
                    featureBtnIcon={featureBtnIcon}
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

export default Feature;
