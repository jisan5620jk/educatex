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
    <div className='group relative px-4 sm:px-9 lg:px-4 xl:px-9 2xl:px-8 3xl:px-9 pt-4 sm:pt-10 lg:pt-4 xl:pt-10 pb-5 sm:pb-10 lg:pb-5 xl:pb-10 transition-all duration-500 bg-white bg-opacity-45 hover:bg-opacity-100 rounded-[10px]'>
      <div className='flex gap-1 items-center mb-2'>
        <h5 className='font-Rajdhani text-[22px] sm:text-2xl 2xl:text-2xl 3xl:text-[28px] text-HeadingColor-0 font-semibold'>
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
      <p className='font-Nunito text-TextColor2-0 text-lg xl:text-base 2xl:text-lg'>{testiDesc}</p>
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
            <h5 className='font-Rajdhani font-semibold inline-block text-HeadingColor-0 text-[22px] sm:text-2xl relative'>
              {testiName}
            </h5>
            <p className='font-Nunito text-TextColor2-0'>{testiDesignation}</p>
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
