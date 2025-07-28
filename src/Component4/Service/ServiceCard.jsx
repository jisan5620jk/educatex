/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const ServiceCard = ({
  serviceIcon,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  serviceBtnText,
  serviceBtnIcon,
  serviceShape,
  serviceShape2,
}) => {
  return (
    <div className='group p-3 sm:p-6 lg:p-3 xl:p-6 border border-white border-opacity-10 rounded-[20px]'>
      <div className='bg-BodyBg2-0 rounded-2xl px-4 sm:px-[34px] md:px-4 lg:px-5 xl:px-7 2xl:px-10 pt-4 sm:pt-7 md:pt-4 lg:pt-8 xl:pt-[60px] pb-4 sm:pb-8 md:pb-4 lg:pb-7 xl:pb-12 relative z-10 overflow-hidden'>
        <span className='absolute left-[12.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
        <span className='absolute left-[37.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
        <span className='absolute left-[62.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
        <span className='absolute left-[87.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
        <div className=''>
          <img
            src={serviceIcon}
            draggable='false'
            className='group-hover:animate-wobble_vertical transition-all duration-500 group-hover:brightness-0 group-hover:invert'
          />
        </div>
        <h5 className='font-Outfit font-semibold text-xl sm:text-2xl xl:text-[22px] 2xl:text-[26px] pb-[10px] pt-5 sm:pt-8 mt-6 sm:mt-10 mb-1 text-HeadingColor-0 transition-all duration-500 group-hover:text-white border-t border-SecondaryColor-0 border-opacity-10 relative before:absolute before:-left-14 before:-top-[.5px] before:w-20 before:h-[.5px] before:z-20 before:bg-PrimaryColor2-0 before:transition-all before:duration-500 before:animate-dance5 group-hover:before:bg-white overflow-x-hidden overflow-y-visible'>
          {serviceTitle}
        </h5>
        <p className='font-OpenSans text-TextColor2-0 mb-6 sm:mb-10 transition-all duration-500 group-hover:text-white'>
          {serviceDesc}
        </p>
        <div className='inline-block overflow-hidden'>
          <Link
            to={serviceUrl}
            className='inline-flex gap-2 items-center font-Outfit text-HeadingColor-0 uppercase transition-all duration-500 -ml-[100px] group-hover:ml-0 group-hover:text-white'
          >
            {serviceBtnText}
            <span className='text-xl'>{serviceBtnIcon}</span>
          </Link>
        </div>
        <div className='absolute top-0 right-0'>
          <img
            src={serviceShape}
            draggable={false}
            alt='Shape'
          />
        </div>
        <div className='absolute -z-10 -bottom-[37%] -right-[35%] transition-all duration-500 group-hover:opacity-20'>
          <img
            src={serviceShape2}
            draggable={false}
            alt='Shape'
            className='animate-rotational'
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
