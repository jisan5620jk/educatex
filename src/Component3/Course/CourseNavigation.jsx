/* eslint-disable react/prop-types */
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const CourseNavigation = ({ swiperRef }) => {
  return (
    <div className='flex justify-center w-full absolute z-10 top-1/2 -translate-y-1/2 left-0'>
      <div className='flex justify-between gap-3 w-full'>
        <button
          className='size-[52px] rounded-full overflow-hidden relative bg-transparent backdrop-filter backdrop-blur-[6px] border border-SecondaryColor-0 border-opacity-10 text-HeadingColor-0 flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 hover:border-opacity-100 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
          onClick={() => swiperRef.current?.slidePrev()} // ✅ Fix: Use swiperRef
        >
          <GoArrowLeft />
        </button>
        <button
          className='size-[52px] rounded-full overflow-hidden relative bg-transparent backdrop-filter backdrop-blur-[6px] border border-SecondaryColor-0 border-opacity-10 text-HeadingColor-0 flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 hover:border-opacity-100 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
          onClick={() => swiperRef.current?.slideNext()} // ✅ Fix: Use swiperRef
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CourseNavigation;
