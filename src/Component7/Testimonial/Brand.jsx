import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import brandThumb from '/images/brand1.png';
import brandThumb2 from '/images/brand2.png';
import brandThumb3 from '/images/brand3.png';
import brandThumb4 from '/images/brand4-1.png';
import brandThumb5 from '/images/brand5.png';

const Brand = () => {
  const settings = {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 30,
    speed: 10000,
    grabCursor: true, // Fixed typo: cursorGrab -> grabCursor
    autoplay: {
      delay: 100, // Adjust delay in milliseconds (3 seconds here)
      disableOnInteraction: false, // Keep autoplay running after user interaction
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1400: { slidesPerView: 5 },
    },
  };

  return (
    <div className='mt-16 lg:mt-[120px]'>
      <div className='flex items-center gap-2 sm:gap-4'>
        <h5 className='font-Outfit font-medium text-base sm:text-lg text-white uppercase'>
          See our happy customers
        </h5>{' '}
        <div className='flex-1 w-full h-[1px] bg-white bg-opacity-10'></div>
      </div>
      <div className='relative z-10 py-10 md:py-[52px]'>
        <Swiper {...settings}>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb2}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb3}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb4}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb5}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb3}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='flex items-center gap-2 sm:gap-4'>
        <div className='flex-1 w-full h-[1px] bg-white bg-opacity-10'></div>{' '}
        <h5 className='font-Outfit font-medium text-base sm:text-lg text-white uppercase'>
          About 10k+ customers worldwide
        </h5>
      </div>
    </div>
  );
};

export default Brand;
