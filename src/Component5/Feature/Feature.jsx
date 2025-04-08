import featureIcon from '/images/feature-icon1.webp';
import featureIcon2 from '/images/feature-icon2.webp';
import featureIcon3 from '/images/feature-icon3.webp';
import shape from '/images/animation-shap2e.webp';
import FeatureCard from './FeatureCard';
import { HiDotsHorizontal } from 'react-icons/hi';
import { TbArrowRight } from 'react-icons/tb';

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: '3D Illustrations Designing',
    featureDesc:
      'Distinctively reconceptualize mission tech positioning materials after',
    featureDotIcon: <HiDotsHorizontal />,
    featureUrl: '/service',
    featureBtnIcon: <TbArrowRight />,
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: 'Website Developments',
    featureDesc:
      'Distinctively reconceptualize mission tech positioning materials after',
    featureDotIcon: <HiDotsHorizontal />,
    featureUrl: '/service',
    featureBtnIcon: <TbArrowRight />,
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: 'Network Managements',
    featureDesc:
      'Distinctively reconceptualize mission tech positioning materials after',
    featureDotIcon: <HiDotsHorizontal />,
    featureUrl: '/service',
    featureBtnIcon: <TbArrowRight />,
  },
];

const Feature = () => {
  return (
    <section className='bg-BodyBgDark4-0 py-16 md:pt-0 md:pb-20 lg:py-28 rounded-b-lg md:rounded-b-xl lg:rounded-b-[30px] relative z-20'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-7 relative z-10'>
          {processData.map(
            ({
              id,
              featureIcon,
              featureTitle,
              featureDesc,
              featureDotIcon,
              featureUrl,
              featureBtnIcon,
            }) => {
              return (
                <div key={id}>
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureDotIcon={featureDotIcon}
                    featureUrl={featureUrl}
                    featureBtnIcon={featureBtnIcon}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
      <img
        src={shape}
        draggable={false}
        alt='Shape'
        className='absolute -bottom-24 right-24 animate-dance2 hidden 3xl:block'
      />
    </section>
  );
};

export default Feature;
