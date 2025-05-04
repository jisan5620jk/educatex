/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceIcon,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  serviceBtnText,
  serviceBtnIcon,
}) => {
  return (
    <div className='group p-6 border border-white border-opacity-10 rounded-[20px]'>
      <div className="bg-BodyBg-0 rounded-2xl px-4 sm:px-[34px] md:px-4 lg:px-7 2xl:px-[34px] pt-4 sm:pt-7 md:pt-4 lg:pt-7 pb-4 sm:pb-8 md:pb-4 lg:pb-8">
        <div className=''>
          <img
            src={serviceIcon}
            draggable='false'
            className='group-hover:animate-wobble_vertical'
          />
        </div>
        <h5 className='font-Outfit font-semibold text-xl sm:text-2xl xl:text-[22px] 2xl:text-[26px] pb-[10px] text-HeadingColor-0'>
          {serviceTitle}
        </h5>
        <p className='font-OpenSans text-TextColor2-0 -mt-[6px]'>
          {serviceDesc}
        </p>
        <Link to={serviceUrl}>
          {serviceBtnText}
          {serviceBtnIcon}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
