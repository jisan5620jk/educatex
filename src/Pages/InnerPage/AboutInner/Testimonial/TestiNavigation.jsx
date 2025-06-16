/* eslint-disable react/prop-types */
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const TestiNavigation = ({ swiperRef }) => {
  return (
    <div className='flex justify-start w-full absolute z-10 bottom-0 lg:bottom-[19%] left-0'>
      <div className='flex justify-center items-center gap-3'>
        <button
          className='size-[52px] xl:size-11 2xl:size-[52px] rounded-full overflow-hidden relative bg-transparent backdrop-filter backdrop-blur-[6px] border border-SecondaryColor-0 border-opacity-10 text-HeadingColor-0 flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 hover:border-opacity-100 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
          onClick={() => swiperRef.current?.slidePrev()} //
        >
          <GoArrowLeft />
        </button>
        <button
          className='size-[52px] xl:size-11 2xl:size-[52px] rounded-full overflow-hidden relative bg-transparent backdrop-filter backdrop-blur-[6px] border border-SecondaryColor-0 border-opacity-10 text-HeadingColor-0 flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 hover:border-opacity-100 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
          onClick={() => swiperRef.current?.slideNext()} //
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestiNavigation;
