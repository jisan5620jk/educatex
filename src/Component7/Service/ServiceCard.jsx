/* eslint-disable react/prop-types */

const ServiceCard = ({ serviceIcon, serviceTitle, serviceDesc }) => {
  return (
    <div className='group flex gap-4 sm:gap-7 md:gap-4 lg:gap-7 px-4 sm:px-[34px] md:px-4 lg:px-7 2xl:px-[34px] pt-4 sm:pt-7 md:pt-4 lg:pt-7 pb-4 sm:pb-8 md:pb-4 lg:pb-8 '>
      <div className=''>
        <img
          src={serviceIcon}
          draggable='false'
          className='group-hover:animate-wobble_vertical'
        />
      </div>
      <div className='flex-1'>
        <h5 className='font-Rajdhani font-semibold text-xl sm:text-2xl xl:text-[22px] 2xl:text-2xl pb-[10px] text-HeadingColor-0'>
          {serviceTitle}
        </h5>
        <p className='font-Nunito text-TextColor2-0 -mt-[6px]'>
          {serviceDesc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
