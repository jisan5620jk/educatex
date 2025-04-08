/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import shape from '/images/border.webp';

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureDesc,
  featureDotIcon,
  featureUrl,
  featureBtnIcon,
}) => {
  return (
    <div className='group px-4 sm:px-8 lg:px-4 xl:px-6 2xl:px-10 lg:py-4 xl:py-7 2xl:pt-12 2xl:pb-7 py-5 sm:py-10 bg-white bg-opacity-15 transition-all duration-500 rounded-[15px] overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:opacity-0 before:h-full before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:before:opacity-100 hover:-translate-y-5'>
      <div className='pb-1'>
        <img
          src={featureIcon}
          draggable='false'
          className='group-hover:animate-wobble_vertical'
        />
      </div>
      <h4 className='font-Outfit font-semibold text-2xl sm:text-[26px] lg:text-2xl xl:text-[28px] 2xl:text-[32px] 2xl:leading-9 text-white mt-10 sm:mt-16 mb-3 mr-20'>
        {featureTitle}
      </h4>
      <span className='w-full h-[1px] bg-white bg-opacity-20 inline-block mt-5'></span>
      <p className='font-OpenSans text-white transition-all duration-500 pt-5 mb-5 max-w-[300px] w-full'>
        {featureDesc}
      </p>
      <div className='inline-block text-[40px] text-white text-opacity-40 transition-all duration-500 group-hover:text-opacity-100'>
        {featureDotIcon}
      </div>
      <div className='inline-block absolute bottom-0 right-0'>
        <Link
          to={featureUrl}
          className='size-[55px] flex items-center justify-center text-2xl bg-white bg-opacity-15 rounded-[10px] text-white overflow-hidden transition-all duration-500 relative z-10 group-hover:rounded-[30px] before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-full before:h-full before:rounded-full before:scale-0 before:transition-all before:duration-300 before:-z-10 before:ease-linear group-hover:before:scale-100'
        >
          <span className='-rotate-45'>{featureBtnIcon}</span>
        </Link>
      </div>
      <img
        src={shape}
        draggable={false}
        alt='Shape'
        className='absolute bottom-0 right-0'
      />
    </div>
  );
};

export default FeatureCard;
