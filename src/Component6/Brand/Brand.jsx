import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import brandThumb from "/images/brand-img3.png";
import brandThumb2 from "/images/brand-img1.png";
import brandThumb3 from "/images/brand-img2.png";
import shape from "/images/brand-star.png";
import shape2 from "/images/brand-arrow.png";

const Brand = () => {
  const settings = {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 26,
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
      992: { slidesPerView: 3 },
      1400: { slidesPerView: 3 },
    },
  };

  return (
    <section className="bg-BodyBg-0 pt-16 md:pt-20 lg:pt-[110px] pb-[78px] rounded-b-lg lg:rounded-b-2xl relative z-10">
      <div className="absolute top-24 left-[40%] animate-rotational hidden lg:block xl:hidden 2xl:block">
        <img src={shape} draggable={false} alt="Shape" />
      </div>
      <div className="absolute top-28 left-48 animate-dance3 hidden 2xl:block">
        <img src={shape2} draggable={false} alt="Shape" />
      </div>
      <div className="Container">
        <div className="flex items-center justify-between flex-wrap gap-y-7">
          <div>
            <h5 className="zoom-in font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]">
              our partners
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2">
              Our Trusted Partners
            </h1>
          </div>
          <div className="fade-right relative z-10 max-w-[710px] w-full">
            <Swiper {...settings}>
              <SwiperSlide>
                <div>
                  <img src={brandThumb} draggable="false" className="m-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={brandThumb2} draggable="false" className="m-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={brandThumb3} draggable="false" className="m-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={brandThumb2} draggable="false" className="m-auto" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
