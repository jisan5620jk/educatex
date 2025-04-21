/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureDesc,
  featureUrl,
}) => {
  return (
    <div className='group flex items-start gap-6 transition-all duration-500 relative z-10'>
      <div className='mb-6'>
        <img
          src={featureIcon}
          draggable='false'
          className='transition-all duration-500 group-hover:animate-wobble_vertical'
        />
      </div>
      <div className='flex-1 -mt-[6px]'>
        <Link
          to={featureUrl}
          className='font-Outfit font-medium text-xl sm:text-2xl lg:text-xl xl:text-[22px] 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 mt-7 mb-3'
        >
          {featureTitle}
        </Link>
        <p className='font-OpenSans text-TextColor2-0 transition-all duration-500 w-full max-w-[270px] mt-3'>
          {featureDesc}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
