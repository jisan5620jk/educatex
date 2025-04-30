import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { useSwiper } from 'swiper/react';

const TestiNavigation = () => {
  const swiper = useSwiper();

  return (
      <div className='w-full flex justify-center sm:justify-end absolute bottom-3'>
        <div className='flex justify-center gap-3 '>
          <button
            className='size-[50px] rounded-full overflow-hidden relative bg-white border text-HeadingColor-0 flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
            onClick={() => swiper.slideNext()}
          >
            <GoArrowLeft />
          </button>
          <button
            className='size-[50px] rounded-full overflow-hidden relative bg-white border text-HeadingColor-0 flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
            onClick={() => swiper.slidePrev()}
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
  );
};

export default TestiNavigation;
