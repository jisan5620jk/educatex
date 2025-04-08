/* eslint-disable react/prop-types */
const TestimonialCard = ({
  paginationShape,
  testQuote,
  testiShape,
  testiRatingIcon,
  testRatingText,
  testiName,
  testiProfile,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='relative px-4 sm:px-9 lg:px-[50px] pt-8 lg:pt-[66px] pb-5 sm:pb-10 lg:pb-[60px] bg-BoxBg4-0 rounded-[10px]'>
      <div className='absolute top-0 right-0 z-20'>
        <img
          src={paginationShape}
          draggable={false}
          alt='Shape'
          className="w-36"
        />
      </div>
      <div className='flex gap-1 items-center mb-6'>
        <img
          src={testQuote}
          draggable={false}
          alt='Testi Quote'
        />
      </div>
      <div className='flex items-center gap-2 mb-4'>
        <ul className='flex items-center'>
          <li className='text-orange-400 text-[22px]'>{testiRatingIcon}</li>
          <li className='text-orange-400 text-[22px]'>{testiRatingIcon}</li>
          <li className='text-orange-400 text-[22px]'>{testiRatingIcon}</li>
          <li className='text-orange-400 text-[22px]'>{testiRatingIcon}</li>
          <li className='text-orange-400 text-[22px]'>{testiRatingIcon}</li>
        </ul>
        <h5 className='font-Rajdhani font-semibold text-xl text-HeadingColor-0'>
          {testRatingText}
        </h5>
      </div>
      <p className='font-Nunito text-HeadingColor-0 text-[17px] sm:text-xl md:text-[22px]'>{testiDesc}</p>

      <div className='flex justify-between flex-wrap items-center mt-5 sm:mt-10 md:mt-[60px]'>
        <div className='flex items-center gap-5'>
          <div>
            <img
              src={testiProfile}
              draggable={false}
              alt='User Image'
            />
          </div>
          <div>
            <h5 className='font-Rajdhani font-semibold inline-block text-HeadingColor-0 text-2xl relative'>
              {testiName}
            </h5>
            <p className='font-Nunito text-TextColor2-0 mt-[2px]'>{testiDesignation}</p>
          </div>
        </div>
        <div className="hidden sm:block">
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
