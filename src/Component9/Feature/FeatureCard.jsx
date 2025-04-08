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
    <div className='group px-4 sm:px-8 lg:px-4 xl:px-6 2xl:px-8 lg:py-4 xl:py-7 2xl:py-10 py-5 sm:py-10 bg-white bg-opacity-20 transition-all duration-500 hover:border-opacity-0 rounded-[10px] border-white border-2 overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:opacity-0 before:h-full before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:before:opacity-100'>
      <div className='size-[72px] rounded-lg bg-BodyBg-0 relative z-10 flex items-center justify-center overflow-hidden before:absolute before:top-0 before:left-0 before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-full before:h-full before:scale-0 before:rotate-180 before:transition-all before:rounded-md before:duration-300 before:-z-10 before:ease-linear group-hover:before:scale-100 group-hover:before:rotate-0'>
        <img
          src={featureIcon}
          draggable='false'
          className='group-hover:animate-wobble_vertical'
        />
      </div>
      <h4 className='font-Outfit font-semibold text-2xl sm:text-[26px] lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-7 mb-3'>
        {featureTitle}
      </h4>
      <p className='font-OpenSans text-TextColor2-0 transition-all duration-500 group-hover:text-white group-hover:text-opacity-70'>
        {featureDesc}
      </p>
      <div className='inline-block mt-[30px]'>
        <Link
          to={featureUrl}
          className='flex items-center gap-2 bg-BodyBg-0 px-8 py-[7px] rounded-3xl text-HeadingColor-0 font-Outfit overflow-hidden transition-all duration-500 group-hover:text-white font-semibold text-lg relative z-10 before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-full before:h-0 before:transition-all before:rounded-md before:duration-300 before:-z-10 before:ease-linear group-hover:before:h-full group-hover:before:top-0'
        >
          {featureBtnText}
          {featureBtnIcon}
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
