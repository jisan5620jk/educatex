/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureDesc,
  featureUrl,
}) => {
  return (
    <div className='group px-4 sm:px-8 lg:px-4 xl:px-6 2xl:px-9 py-5 sm:py-12 lg:py-4 xl:py-7 2xl:py-12 transition-all duration-500 rounded-[20px] relative z-10 overflow-hidden'>
      <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
      <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
      <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
      <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
      <div className='mb-6'>
        <img
          src={featureIcon}
          draggable='false'
          className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1] group-hover:animate-wobble_vertical'
        />
      </div>
      <Link
        to={featureUrl}
        className='font-Outfit font-medium text-2xl sm:text-2xl lg:text-xl xl:text-[22px] 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-7 mb-3'
      >
        {featureTitle}
      </Link>
      <p className='font-OpenSans text-TextColor2-0 transition-all duration-500 w-full max-w-[325px] mt-3 group-hover:text-white group-hover:text-opacity-80'>
        {featureDesc}
      </p>
    </div>
  );
};

export default FeatureCard;
