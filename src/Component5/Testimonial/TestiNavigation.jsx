import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { useSwiper } from 'swiper/react';

const TestiNavigation = () => {
  const swiper = useSwiper();

  return (
      <div className='w-full flex justify-center lg:justify-start absolute bottom-3 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-[13.8%] max-w-[1320px]'>
        <div className='rounded-full flex justify-center gap-5'>
          <button
            className='size-[46px] rounded-full overflow-hidden relative bg-BodyBg6-0 text-HeadingColor-0 flex items-center text-2xl hover:text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
            onClick={() => swiper.slideNext()}
          >
            <GoArrowLeft />
          </button>
          <button
            className='size-[46px] rounded-full overflow-hidden relative bg-BodyBg6-0 text-HeadingColor-0 flex items-center text-2xl hover:text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
            onClick={() => swiper.slidePrev()}
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
  );
};

export default TestiNavigation;
