import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import brandImg from '/images/AI-2-1.png';
import brandImg2 from '/images/1.png';
import brandImg3 from '/images/3.png';
import brandImg5 from '/images/4.png';

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className="bg-[url('/images/brand-bg.jpg')] pt-[120px] pb-28 mt-[120px]">
      <div className='Container relative z-10'>
        <Swiper {...settings}>
          <SwiperSlide>
            <div>
              <img
                src={brandImg}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandImg2}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandImg3}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandImg}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandImg5}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandImg}
                draggable='false'
                className='m-auto'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
