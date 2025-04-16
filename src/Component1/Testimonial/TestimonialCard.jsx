/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiTitle,
  testiRatingIcon,
  testiRatingIcon2,
  testiQuate,
  testiName,
  testiImg,
  testiDesc,
  testiDesignation,
}) => {
  return (
    <div>
      <div className='relative text-left bg-white px-5 sm:px-10 py-4 sm:py-12 mb-8 rounded-[20px]'>
        <div className='flex items-center gap-4 mb-4 sm:mb-10'>
          <div>
            <img
              src={testiQuate}
              draggable='false'
              alt='Icon'
            />
          </div>
          <div>
            <h5 className='font-Outfit text-xl sm:text-2xl md:text-[26px] text-HeadingColor-0 font-medium'>
              {testiTitle}
            </h5>
          </div>
        </div>
        <p className='font-OpenSans text-base sm:text-lg text-TextColor-0'>{testiDesc}</p>
        <ul className='flex items-center mt-[22px]'>
          <li className='text-ReviewText-0 text-2xl'>{testiRatingIcon}</li>
          <li className='text-ReviewText-0 text-2xl'>{testiRatingIcon}</li>
          <li className='text-ReviewText-0 text-2xl'>{testiRatingIcon}</li>
          <li className='text-ReviewText-0 text-2xl'>{testiRatingIcon}</li>
          <li className='text-ReviewText-0 text-2xl'>{testiRatingIcon2}</li>
        </ul>
      </div>
      <div className='flex items-center gap-3'>
        <div>
          <img
            src={testiImg}
            draggable={false}
            alt='Image'
          />
        </div>
        <div>
          <h5 className='font-Outfit font-semibold inline-block text-HeadingColor-0 text-xl relative'>
            {testiName}
          </h5>
          <p className='font-OpenSans text-TextColor-0'>{testiDesignation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
