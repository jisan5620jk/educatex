/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testQuote,
  testiTitle,
  testiRatingIcon,
  testiName,
  testiProfile,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='relative group px-4 sm:px-9 lg:px-4 xl:px-9 2xl:px-10 pt-4 sm:pt-8 lg:pt-4 xl:pt-12 pb-5 sm:pb-10 lg:pb-5 xl:pb-10 bg-white rounded-[20px] ease-linear transition-all duration-500 hover:border-PrimaryColor-0'>
      <div className='flex gap-4 items-center'>
        <div className=''>
          <img
            src={testQuote}
            draggable={false}
            alt='Quote'
          />
        </div>
        <h5 className='font-Outlet text-xl sm:text-2xl lg:text-xl xl:text-[22px] text-HeadingColor-0 font-medium'>
          {testiTitle}
        </h5>
      </div>
      <p className='font-OpenSans sm:text-[17px] lg:text-base xl:text-[17px] text-TextColor-0 mt-8 mb-7'>
        {testiDesc}
      </p>
      <ul className='flex items-center mb-8'>
        <li className='text-ReviewText-0 text-[22px]'>{testiRatingIcon}</li>
        <li className='text-ReviewText-0 text-[22px]'>{testiRatingIcon}</li>
        <li className='text-ReviewText-0 text-[22px]'>{testiRatingIcon}</li>
        <li className='text-ReviewText-0 text-[22px]'>{testiRatingIcon}</li>
        <li className='text-ReviewText-0 text-[22px]'>{testiRatingIcon}</li>
      </ul>
      <div className='flex items-center gap-4 border-t border-SecondaryColor-0 border-opacity-10 transition-all duration-300 ease-linear group-hover:border-PrimaryColor-0 group-hover:border-opacity-100 pt-[34px]'>
        <div>
          <img
            src={testiProfile}
            draggable={false}
            alt='User Image'
          />
        </div>
        <div>
          <h5 className='font-Outlet font-medium inline-block text-HeadingColor-0 text-xl sm:text-[22px] lg:text-xl xl:text-[22px] relative'>
            {testiName}
          </h5>
          <p className='font-OpenSans text-[15px] text-TextColor-0 mt-[6px]'>
            {testiDesignation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
