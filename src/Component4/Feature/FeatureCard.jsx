/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureUrl,
}) => {
  return (
    <div className='group px-4 sm:px-7 lg:px-4 xl:px-8 py-5 sm:py-7 lg:py-4 xl:py-7 flex items-center gap-6 transition-all duration-500 rounded-[20px] border border-PrimaryColor-0 border-opacity-20 relative z-10 overflow-hidden'>
      <div className='size-[100px] bg-white bg-opacity-5 flex justify-center items-center rounded-[20px]'>
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
