import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import brandThumb from '/images/brand-1.webp';
import brandThumb2 from '/images/brand-2.webp';
import brandThumb3 from '/images/brand-3.webp';
import brandThumb4 from '/images/brand-4.webp';

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
    <section className="mx-2 sm:mx-3 md:mx-5 lg:mx-2 xl:mx-5 2xl:mx-8 3xl:mx-[50px] bg-[url('/images/brand-bg.webp')] bg-cover bg-center bg-no-repeat pt-[100px] pb-[92px] rounded-b-lg lg:rounded-b-2xl -mt-5">
      <div className='Container'>
        <div className='flex items-center gap-2 sm:gap-4'>
          <h5 className='font-Outfit font-semibold text-base sm:text-lg text-HeadingColor-0 uppercase'>
            See our happy customers
          </h5>{' '}
          <div className='flex-1 w-full h-[1px] bg-HeadingColor-0 bg-opacity-10'></div>
        </div>
        <div className='relative z-10 py-[52px]'>
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
                  src={brandThumb}
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
          <div className='flex-1 w-full h-[1px] bg-HeadingColor-0 bg-opacity-10'></div>{' '}
          <h5 className='font-Outfit font-semibold text-base sm:text-lg text-HeadingColor-0 uppercase'>
            About <span className='text-PrimaryColor-0'>10k+</span> customers
            worldwide
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Brand;
