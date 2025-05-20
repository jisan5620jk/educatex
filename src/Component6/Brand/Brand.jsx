import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import brandThumb from '/images/brand-img3.png';
import brandThumb2 from '/images/brand-img1.png';
import brandThumb3 from '/images/brand-img2.png';
import brandThumb4 from '/images/brand-img4.png';
import brandThumb5 from '/images/brand-img5.png';

const Brand = () => {
  const settings = {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 26,
    speed: 12000,
    grabCursor: true,
    autoplay: {
      delay: 100, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
      1400: { slidesPerView: 5 },
    },
  };

  return (
    <section className='bg-BodyBg-0 py-14 md:py-[70px] relative z-10'>
      <div className='Container'>
        <Swiper {...settings}>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb}
                draggable='false'
                className='mx-auto w-full'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb2}
                draggable='false'
                className='mx-auto w-full'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb3}
                draggable='false'
                className='mx-auto w-full'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb4}
                draggable='false'
                className='mx-auto w-full'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb5}
                draggable='false'
                className='mx-auto w-full'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={brandThumb3}
                draggable='false'
                className='mx-auto w-full'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Brand;
