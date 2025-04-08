/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureDesc,
  featureUrl,
  featureBtnText,
  featureBtnIcon,
}) => {
  return (
    <div className='group px-4 sm:px-8 lg:px-4 xl:px-6 2xl:px-8 lg:pt-4 xl:pt-7 2xl:pt-10 pt-5 sm:pt-10 lg:pb-4 xl:pb-6 2xl:pb-8 pb-5 sm:pb-8 bg-transparent transition-all duration-500 rounded-[10px]  overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:opacity-0 before:h-full before:bg-gradient-to-b before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:before:opacity-100'>
      <div className=''>
        <img
          src={featureIcon}
          draggable='false'
          className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1] group-hover:animate-wobble_vertical'
        />
      </div>
      <h4 className='font-Rajdhani font-semibold text-xl sm:text-2xl md:text-[22px] lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-7 mb-3 mr-16'>
        {featureTitle}
      </h4>
      <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white group-hover:text-opacity-70 max-w-[290px] w-full'>
        {featureDesc}
      </p>
      <div className='inline-block mt-[20px]'>
        <Link
          to={featureUrl}
          className='flex items-center gap-1 rounded-3xl text-HeadingColor-0 font-Rajdhani overflow-hidden transition-all duration-500 group-hover:text-white font-semibold text-lg uppercase relative z-10'
        >
          {featureBtnText}
          <span className='-rotate-45 text-xl'>{featureBtnIcon}</span>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
