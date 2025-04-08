/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ServiceCard = ({
  serviceIcon,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  serviceBtnText,
  serviceBtnIcon,
}) => {
  return (
    <div className='group bg-white rounded-[10px] px-4 sm:px-8 lg:px-4 xl:px-6 2xl:px-8 lg:pt-4 xl:pt-7 2xl:pt-11 pt-5 sm:pt-10 lg:pb-4 xl:pb-6 2xl:pb-8 pb-5 sm:pb-8'>
      <div className=''>
        <img
          src={serviceIcon}
          draggable='false'
          className='transition-all duration-500 group-hover:animate-wobble_vertical'
        />
      </div>
      <h4 className='font-Outfit font-semibold text-xl sm:text-2xl md:text-[22px] lg:text-2xl xl:text-2xl 2xl:text-[28px] text-HeadingColor-0 transition-all duration-500  mt-9 mb-6 max-w-[220px] w-full'>
        {serviceTitle}
      </h4>
      <p className='font-OpenSans text-TextColor2-0 transition-all duration-500 max-w-[318px] w-full'>
        {serviceDesc}
      </p>
      <div className='mt-[34px]'>
        <Link
          to={serviceUrl}
          className='flex items-center justify-between rounded-full border border-HeadingColor-0 border-opacity-10 text-HeadingColor-0 group-hover:text-white pl-[34px]  font-Outfit transition-all duration-500  font-semibold text-base uppercase py-[8px] pr-[10px] overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-gradient-to-r before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:-z-10 before:transition-all before:duration-500 before:rounded-full group-hover:before:w-full group-hover:before:left-0'
        >
          {serviceBtnText}
          <span className='size-[38px] rounded-full flex items-center justify-center bg-gradient-to-r to-PrimaryColor2-0 from-PrimaryColor3-0 text-white -rotate-45 transition-all duration-500 group-hover:text-PrimaryColor-0 overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-z-10 before:transition-all before:duration-500 before:scale-0 before:rounded-full group-hover:before:scale-100'>
            {serviceBtnIcon}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
