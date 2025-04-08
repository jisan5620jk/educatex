import featureIcon from '/images/feature-icon1.png';
import featureIcon2 from '/images/feature-icon2.png';
import featureBtnIcon from '/images/feature-button-icon.png';
import FeatureCard from './FeatureCard';

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: 'Business Collaborations',
    featureUrl: '/service_details',
    featureBtnIcon: featureBtnIcon,
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: 'Top Revenue Generation',
    featureUrl: '/service_details',
    featureBtnIcon: featureBtnIcon,
  },
];

const Feature = () => {
  return (
    <section className='bg-BodyBg-0'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 relative z-30 mt-10 sm:-mt-[50px] lg:-mb-[114px]'>
          {processData.map(
            ({ id, featureIcon, featureTitle, featureUrl, featureBtnIcon }) => {
              return (
                <div key={id}>
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureUrl={featureUrl}
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
