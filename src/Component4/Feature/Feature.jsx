import featureIcon from '/images/course-icon7.png';
import featureIcon2 from '/images/course-icon8.png';
import featureIcon3 from '/images/course-icon9.png';
import featureShape from '/images/hero-dot85.png';
import featureShape2 from '/images/hero-dot86.png';
import FeatureCard from './FeatureCard';

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: '3020 Online Courses',
    featureUrl: '/service',
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: '7,050 Runing Student',
    featureUrl: '/service',
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: 'Online Certifications',
    featureUrl: '/service',
  },
];

const Feature = () => {
  return (
    <section className='bg-SecondaryColor-0 pt-10 md:pt-[50px] relative z-10 -mb-1'>
      <div className='absolute top-1/2 -translate-y-1/2 left-32 animate-dance hidden 2xl:block'>
        <img
          src={featureShape}
          draggable='false'
          alt='Shape'
        />
      </div>
      <div className='absolute top-1/2 -translate-y-1/2 right-32 animate-dance hidden 2xl:block'>
        <img
          src={featureShape2}
          draggable='false'
          alt='Shape'
        />
      </div>
      <div className='Container'>
        <div className='box-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-7 relative z-10'>
          {processData.map(({ id, featureIcon, featureTitle, featureUrl }) => {
            return (
              <div key={id} className='box'>
                <FeatureCard
                  featureIcon={featureIcon}
                  featureTitle={featureTitle}
                  featureUrl={featureUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
