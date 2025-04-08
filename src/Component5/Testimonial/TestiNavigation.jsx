import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { useSwiper } from 'swiper/react';

const TestiNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className='mx-auto flex items-center justify-center'>
      <div className='w-full flex justify-center md:justify-end absolute top-0 max-w-[1320px]'>
        <div className='border rounded-full px-[16px] py-[8px] bg-BodyBg6-0 flex justify-center gap-3 '>
          <button
            className='size-[38px] rounded-full overflow-hidden relative bg-BodyBg6-0 border text-HeadingColor-0 flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:to-PrimaryColor2-0 after:from-PrimaryColor3-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
            onClick={() => swiper.slideNext()}
          >
            <GoArrowLeft />
          </button>
          <button
            className='size-[38px] rounded-full overflow-hidden relative bg-BodyBg6-0 border text-HeadingColor-0 flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:to-PrimaryColor2-0 after:from-PrimaryColor3-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
            onClick={() => swiper.slidePrev()}
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestiNavigation;
