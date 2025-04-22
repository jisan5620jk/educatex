import featureIcon from '/images/feature-icon1.png';
import featureIcon2 from '/images/feature-icon2.png';
import featureIcon3 from '/images/feature-icon3.png';
import featureShape from '/images/feature-shape1.png';
import featureShape2 from '/images/feature-shape2.png';
import FeatureCard from './FeatureCard';
import './feature.css';

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: 'Learning Experiences',
    featureDesc:
      'The ultimate destination for knowledge for We are committed to transforming',
    featureUrl: '/service',
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: 'Professional Instructor',
    featureDesc:
      'The ultimate destination for knowledge for We are committed to transforming',
    featureUrl: '/service',
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: 'Moneyback Gaurantee',
    featureDesc:
      'The ultimate destination for knowledge for We are committed to transforming',
    featureUrl: '/service',
  },
];

const Feature = () => {
  return (
    <section className='bg-white py-16 md:py-20 lg:py-28 relative'>
      <div className='absolute top-14 3xl:top-28 left-32 animate-dance2 hidden lg:block'>
        <img
          src={featureShape}
          draggable='false'
          alt='Shape'
        />
      </div>
      <div
        className='absolute top-14 3xl:top-28 left-32 animate-dance2 hidden lg:block'
        style={{ animationDelay: '1.5s' }}
      >
        <img
          src={featureShape}
          draggable='false'
          alt='Shape'
        />
      </div>
      <div className='absolute top-14 3xl:top-28 right-32 animate-rotational hidden lg:block'>
        <img
          src={featureShape2}
          draggable='false'
          alt='Shape'
        />
      </div>
      <div className='Container '>
        <div className='relative grid items-center grid-cols-1 lg:grid-cols-2 gap-8'>
          <div
            className='border-b border-SecondaryColor-0 border-opacity-15 
pb-6 lg:py-6'
          >
            <h5 className='font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              core features
            </h5>
          </div>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0'>
            Interactive Online Learning
            <br />
            Key Features & Benefits
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-7 relative z-10 mt-[52px]'>
          {processData.map(
            ({ id, featureIcon, featureTitle, featureDesc, featureUrl }) => {
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
