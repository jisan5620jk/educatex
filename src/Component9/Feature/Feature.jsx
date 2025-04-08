import featureIcon from '/images/ai1.png';
import featureIcon2 from '/images/AI-7.png';
import featureIcon3 from '/images/AI-8.png';
import featureIcon4 from '/images/AI-9.png';
import featureShape from '/images/AI-5.png';
import featureShape2 from '/images/AI-4.png';
import titleShape from '/images/sub-title-shape.png';
import FeatureCard from './FeatureCard';
import { GoArrowRight } from 'react-icons/go';
import About from '../About/About';
import Work from '../Work/Work';

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: 'Robotic Automation',
    featureDesc:
      'Clients-focused data are centric energistically communicate into installed done.',
    featureUrl: '/service',
    featureBtnText: 'Details',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: 'Machine Learning',
    featureDesc:
      'Clients-focused data are centric energistically communicate into installed done.',
    featureUrl: '/service',
    featureBtnText: 'Details',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: 'AI System Design',
    featureDesc:
      'Clients-focused data are centric energistically communicate into installed done.',
    featureUrl: '/service',
    featureBtnText: 'Details',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 4,
    featureIcon: featureIcon4,
    featureTitle: 'AI Integrations',
    featureDesc:
      'Clients-focused data are centric energistically communicate into installed done.',
    featureUrl: '/service',
    featureBtnText: 'Details',
    featureBtnIcon: <GoArrowRight />,
  },
];

const Feature = () => {
  return (
    <section className='bg-[url("/images/long-bg.jpg")] bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-28'>
      <div className='Container '>
        <div className='relative text-center'>
          <h5 className='flex items-center justify-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
            />{' '}
            WHAT WE PROVIDE{' '}
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='rotate-180'
            />
          </h5>
          <h1 className='font-Outfit font-bold text-lg leading-6 sm:text-[30px] sm:leading-[40px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
            AI-Driven Robotics Solutions Elevating
            <br />
            Performance in Every Industry
          </h1>
          <div className='absolute top-10 left-28 animate-wiggle hidden lg:block'>
            <img
              src={featureShape}
              draggable='false'
              alt='Shape'
            />
          </div>
          <div className='absolute top-10 right-20 animate-dance2 hidden lg:block'>
            <img
              src={featureShape2}
              draggable='false'
              alt='Shape'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10 mt-11'>
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
                  className='feature-box'
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
      <About />
      <Work />
    </section>
  );
};

export default Feature;
