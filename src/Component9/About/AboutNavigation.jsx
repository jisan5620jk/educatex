import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { useSwiper } from 'swiper/react';

const AboutNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className='w-full mx-auto flex gap-3 justify-start absolute z-30 left-0 sm:left-7 bottom-0'>
      <button
        className='size-9 xsm:size-[50px] rounded-full overflow-hidden relative bg-transparent border lg:border-white lg:border-opacity-30 text-HeadingColor-0 lg:text-white flex items-center text-2xl hover:text-white hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:to-PrimaryColor2-0 after:from-PrimaryColor3-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
        onClick={() => swiper.slideNext()}
      >
        <GoArrowLeft />
      </button>
      <button
        className='size-9 xsm:size-[50px] rounded-full overflow-hidden relative bg-transparent border lg:border-white lg:border-opacity-30 text-HeadingColor-0 lg:text-white flex items-center text-2xl hover:text-white hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:to-PrimaryColor2-0 after:from-PrimaryColor3-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
        onClick={() => swiper.slidePrev()}
      >
        <GoArrowRight />
      </button>
    </div>
  );
};

export default AboutNavigation;
