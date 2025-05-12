/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureUrl,
}) => {
  return (
    <div className='group flex items-center gap-6 relative z-10 overflow-hidden'>
      <div className=''>
        <img
          src={featureIcon}
          draggable='false'
          className='transition-all duration-500 group-hover:animate-wobble_vertical'
        />
      </div>
      <div className='flex-1'>
        <Link
          to={featureUrl}
          className='font-Outfit font-medium text-xl text-white transition-all duration-500 group-hover:text-PrimaryColor-0'
        >
          {featureTitle}
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
