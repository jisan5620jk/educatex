/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiRatingIcon,
  testiRatingIcon2,
  testiName,
  testiImg,
  testiDesc,
  testiDesignation,
}) => {
  return (
    <div className='relative text-left bg-white px-5 sm:px-10 py-4 sm:py-10 mb-8 rounded-[20px] shadow-shades'>
      <div className='flex items-center gap-6'>
        <div>
          <img
            src={testiImg}
            draggable={false}
            alt='Image'
          />
        </div>
        <p className='flex-1 font-OpenSans text-base sm:text-[17px] text-TextColor-0'>
          {testiDesc}
        </p>
      </div>
      <div className='flex items-center gap-3 justify-between flex-wrap border-t border-HeadingColor-0 border-opacity-10 pt-5 mt-7'>
        <div>
          <h5 className='font-Outfit font-medium inline-block text-HeadingColor-0 text-2xl relative'>
            {testiName}
          </h5>
          <p className='font-OpenSans text-TextColor-0 text-[15px] mt-1.5'>
            {testiDesignation}
          </p>
        </div>
        <ul className='flex items-center'>
          <li className='text-ReviewText-0 text-2xl'>{testiRatingIcon}</li>
          <li className='text-ReviewText-0 text-2xl'>{testiRatingIcon}</li>
          <li className='text-ReviewText-0 text-2xl'>{testiRatingIcon}</li>
          <li className='text-ReviewText-0 text-2xl'>{testiRatingIcon}</li>
          <li className='text-ReviewText-0 text-2xl'>{testiRatingIcon2}</li>
        </ul>
      </div>
    </div>
  );
};

export default TestimonialCard;
