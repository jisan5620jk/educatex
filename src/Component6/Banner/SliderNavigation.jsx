import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { useSwiper } from 'swiper/react';

const SliderNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className='w-full flex justify-center md:justify-end absolute z-10 md:right-[50px] top-[84%] md:top-1/2 md:-translate-y-1/2'>
      <div className='flex md:flex-col-reverse justify-center gap-3'>
        <button
          className='size-[52px] rounded-full overflow-hidden relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-[6px] border border-white border-opacity-50 text-white flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 hover:border-opacity-100 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
          onClick={() => swiper.slideNext()}
        >
          <GoArrowLeft />
        </button>
        <button
          className='size-[52px] rounded-full overflow-hidden relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-[6px] border border-white border-opacity-50 text-white flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 hover:border-opacity-100 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
          onClick={() => swiper.slidePrev()}
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SliderNavigation;
