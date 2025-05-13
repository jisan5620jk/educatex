import { FaCircle } from 'react-icons/fa';

/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiImg,
  testiSubTitle,
  testiTitle,
  testiRatingIcon,
  testiName,
  testiProfile,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='flex items-end justify-between flex-wrap'>
      <div>
        <img
          src={testiImg}
          draggable={false}
          alt='Testimonial Image'
        />
      </div>
      <div className='group relative max-w-[670px] w-full transition-all duration-500 pb-1'>
        <div className='bg-PrimaryColor-0 bg-opacity-[.07] px-4 sm:px-9 lg:px-4 xl:px-9 2xl:px-10 pt-4 sm:pt-10 lg:pt-4 xl:pt-12 pb-5 sm:pb-10 lg:pb-5 xl:pb-11 rounded-2xl'>
          <h5 className='font-OpenSans bg-white bg-opacity-30 pl-4 pr-5 py-2 rounded-r-full border border-PrimaryColor-0 border-opacity-20 text-HeadingColor-0 text-sm font-medium inline-flex items-center gap-2 uppercase'>
            <span className='text-PrimaryColor2-0'>
              <FaCircle size={10} />
            </span>
            {testiSubTitle}
          </h5>
          <h5 className='font-Outfit text-[22px] sm:text-2xl 2xl:text-2xl 3xl:text-[28px] text-HeadingColor-0 font-semibold mb-2 mt-6'>
            {testiTitle}
          </h5>
          <ul className='flex items-center gap-1 mt-9 mb-6'>
            <li className='text-PrimaryColor-0 text-[22px]'>{testiRatingIcon}</li>
            <li className='text-PrimaryColor-0 text-[22px]'>{testiRatingIcon}</li>
            <li className='text-PrimaryColor-0 text-[22px]'>{testiRatingIcon}</li>
            <li className='text-PrimaryColor-0 text-[22px]'>{testiRatingIcon}</li>
            <li className='text-PrimaryColor-0 text-[22px]'>{testiRatingIcon}</li>
          </ul>
          <p className='font-OpenSans text-TextColor2-0 leading-8 text-[17px]'>
            {testiDesc}
          </p>
        </div>
        <div className='flex items-center justify-between pt-[30px]'>
          <div className='flex items-center gap-2 sm:gap-6'>
            <div>
              <img
                src={testiProfile}
                draggable={false}
                alt='User Image'
              />
            </div>
            <div>
              <h5 className='font-Outfit font-semibold inline-block text-HeadingColor-0 text-[22px] sm:text-2xl relative'>
                {testiName}
              </h5>
              <p className='font-OpenSans text-TextColor2-0 flex items-center gap-3 mt-1'>
                <span className='text-PrimaryColor2-0'>
                  <FaCircle size={8} />
                </span>
                {testiDesignation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
