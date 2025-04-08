import featureIcon from '/images/feature-icon11.png';
import featureIcon2 from '/images/feature-icon22.png';
import featureIcon3 from '/images/feature-icon3.png';
import featureshape from '/images/feature-shape-1.png';
import featureshape2 from '/images/feature-shape-2.png';
import FeatureCard from './FeatureCard';

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureshape: featureshape,
    featureshape2: featureshape2,
    featureTitle: '22+ Year Experience',
    featureDesc:
      'Monotonically synergize grants to business visualize strategic infomediaries',
    featureUrl: '/service',
    featureBtn: 'Read More',
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureshape: featureshape,
    featureshape2: featureshape2,
    featureTitle: 'Dedicated Members',
    featureDesc:
      'Monotonically synergize grants to business visualize strategic infomediaries',
    featureUrl: '/service',
    featureBtn: 'Read More',
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureshape: featureshape,
    featureshape2: featureshape2,
    featureTitle: 'Valuable Supports',
    featureDesc:
      'Monotonically synergize grants to business visualize strategic infomediaries',
    featureUrl: '/service',
    featureBtn: 'Read More',
  },
];

const Feature = () => {
  return (
    <section className='bg-BodyBg-0 pb-16 md:pb-20 lg:pb-[120px]'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10'>
          {processData.map(
            ({
              id,
              featureIcon,
              featureshape,
              featureshape2,
              featureTitle,
              featureDesc,
              featureUrl,
              featureBtn,
            }) => {
              return (
                <div key={id}>
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureshape={featureshape}
                    featureshape2={featureshape2}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                    featureBtn={featureBtn}
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
