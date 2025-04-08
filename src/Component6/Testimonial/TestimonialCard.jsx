/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiShape,
  testiTitle,
  testiRatingIcon,
  testiName,
  testiProfile,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='group px-4 sm:px-9 lg:px-4 xl:px-9 2xl:px-8 3xl:px-9 pt-4 sm:pt-10 lg:pt-4 xl:pt-10 pb-5 sm:pb-10 lg:pb-5 xl:pb-10 transition-all duration-500 hover:bg-opacity-100 rounded-[10px] bg-gradient-to-t to-BoxBg-0 from-BoxBg2-0 overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:opacity-0 before:h-full before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-BoxBg3-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:before:opacity-100'>
      <div className='flex gap-1 items-center mb-2'>
        <h5 className='font-Outfit text-[22px] sm:text-2xl 2xl:text-2xl 3xl:text-[28px] text-white font-semibold'>
          {testiTitle}
        </h5>
      </div>
      <ul className='flex items-center mb-[22px]'>
        <li className='text-[#ffae14] text-[22px]'>{testiRatingIcon}</li>
        <li className='text-[#ffae14] text-[22px]'>{testiRatingIcon}</li>
        <li className='text-[#ffae14] text-[22px]'>{testiRatingIcon}</li>
        <li className='text-[#ffae14] text-[22px]'>{testiRatingIcon}</li>
        <li className='text-[#ffae14] text-[22px]'>{testiRatingIcon}</li>
      </ul>
      <p className='font-OpenSans text-white text-opacity-80 text-lg'>
        {testiDesc}
      </p>
      <div className='flex items-center justify-between border-t border-HeadingColor-0 border-opacity-10 transition-all duration-300 ease-linear group-hover:border-PrimaryColor-0 group-hover:border-opacity-100 pt-[26px] mt-[26px]'>
        <div className='flex items-center gap-2 sm:gap-4'>
          <div>
            <img
              src={testiProfile}
              draggable={false}
              alt='User Image'
            />
          </div>
          <div>
            <h5 className='font-Outfit font-semibold inline-block text-white text-[22px] sm:text-2xl relative'>
              {testiName}
            </h5>
            <p className='font-OpenSans text-white text-opacity-80'>
              {testiDesignation}
            </p>
          </div>
        </div>
        <div className='hidden 3xl:block'>
          <img
            src={testiShape}
            draggable={false}
            alt='Shape'
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
