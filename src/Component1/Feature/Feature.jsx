import featureIcon from '/images/goggle.png';
import featureIcon2 from '/images/facebook.png';
import featureIcon3 from '/images/feature-icon23.png';
import featureIcon4 from '/images/feature-icon24.png';
import featureShape from '/images/feature-animate.png';
import titleShape from '/images/sub-title-shape.png';
import FeatureCard from './FeatureCard';
import { GoArrowRight } from 'react-icons/go';
import './feature.css';

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: 'Google Analytics',
    featureDesc:
      'Clients-focused data are centric energistically communicate into installed done.',
    featureUrl: '/service',
    featureBtnText: 'Details',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: 'Facebook Adds',
    featureDesc:
      'Clients-focused data are centric energistically communicate into installed done.',
    featureUrl: '/service',
    featureBtnText: 'Details',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: 'Content Research',
    featureDesc:
      'Clients-focused data are centric energistically communicate into installed done.',
    featureUrl: '/service',
    featureBtnText: 'Details',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 4,
    featureIcon: featureIcon4,
    featureTitle: 'Competitor Analysis',
    featureDesc:
      'Clients-focused data are centric energistically communicate into installed done.',
    featureUrl: '/service',
    featureBtnText: 'Details',
    featureBtnIcon: <GoArrowRight />,
  },
];

const Feature = () => {
  return (
    <section className='bg-[url("/images/servicer-bg.jpg")] bg-cover bg-center bg-no-repeat pt-28 sm:pt-32 lg:pt-[152px] pb-16 lg:pb-28 -mt-12 lg:-mt-9'>
      <div className='Container '>
        <div className='relative text-center'>
          <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-white uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='brightness-0 invert-[1]'
            />{' '}
            Features{' '}
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='rotate-180 brightness-0 invert-[1]'
            />
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
            Grow Your Business in a short Time
          </h1>
          <div className='absolute top-0 right-0 2xl:-right-12 animate-bounce hidden lg:block'>
            <img
              src={featureShape}
              draggable='false'
              alt='Shape'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-7 relative z-10 mt-11'>
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
                  className='feature-box1'
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
