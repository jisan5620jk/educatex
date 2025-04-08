/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiTitle,
  testiRatingIcon,
  testiQuate,
  testiName,
  testiImg,
  testiDesc,
}) => {
  return (
    <div>
      <div className='relative text-left bg-BodyBgDark-0 px-5 sm:px-9 py-4 sm:py-8 mb-5 rounded-lg'>
        <div className='flex items-center justify-between mb-7'>
          <div>
            <h5 className='font-Outfit text-2xl text-white font-semibold'>
              {testiTitle}
            </h5>
            <ul className='flex items-center mt-[6px]'>
              <li className='text-ReviewText-0 text-xl'>{testiRatingIcon}</li>
              <li className='text-ReviewText-0 text-xl'>{testiRatingIcon}</li>
              <li className='text-ReviewText-0 text-xl'>{testiRatingIcon}</li>
              <li className='text-ReviewText-0 text-xl'>{testiRatingIcon}</li>
              <li className='text-ReviewText-0 text-xl'>{testiRatingIcon}</li>
            </ul>
          </div>
          <div>
            <img
              src={testiQuate}
              draggable='false'
              alt='Icon'
            />
          </div>
        </div>
        <p className='font-OpenSans text-TextColor-0'>{testiDesc}</p>
      </div>
      <div className='flex items-center gap-3'>
        <div>
          <img
            src={testiImg}
            draggable={false}
            alt='Image'
          />
        </div>
        <h5 className='font-Outfit font-semibold inline-block text-white text-xl relative'>
          {testiName}
        </h5>
      </div>
    </div>
  );
};

export default TestimonialCard;
