import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { MdOutlineStarHalf, MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";
import testiImg from "/images/testi-autor1.png";
import testiImg2 from "/images/testi-autor3.png";
import testiImg3 from "/images/testi-autor4.png";
import testiQuate from "/images/testi-quote.png";
import testiThumb from "/images/testi-thumb.png";
import testiShape from "/images/testi-map.png";
import testiShape2 from "/images/hero-dot.png";
import TestiNavigation from "./TestiNavigation";

const testiData = [
  {
    id: 1,
    testiTitle: "Impresive Leasson!",
    testiQuate: testiQuate,
    testiDesc: `Educate the ultimate destination for knowledge seekers and educators we are committed to transforming special education impact global channels  without standards compliant systems attractive learning opinions.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiRatingIcon2: <MdOutlineStarHalf />,
    testiName: "Anjelina Watson",
    testiImg: testiImg,
    testiDesignation: "Student",
  },
  {
    id: 2,
    testiTitle: "Awesome Trainer!",
    testiQuate: testiQuate,
    testiDesc: `Educate the ultimate destination for knowledge seekers and educators we are committed to transforming special education impact global channels  without standards compliant systems attractive learning opinions.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiRatingIcon2: <MdOutlineStarHalf />,
    testiName: "Jhon D. Alexon",
    testiImg: testiImg2,
    testiDesignation: "Student",
  },
  {
    id: 3,
    testiTitle: "Best Lecture!",
    testiQuate: testiQuate,
    testiDesc: `Educate the ultimate destination for knowledge seekers and educators we are committed to transforming special education impact global channels  without standards compliant systems attractive learning opinions.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiRatingIcon2: <MdOutlineStarHalf />,
    testiName: "Murad Junaid",
    testiImg: testiImg3,
    testiDesignation: "Student",
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBulletClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  const paginationImages = [testiImg, testiImg2, testiImg3];

  const settings = {
    modules: [Autoplay, Pagination],
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    onSwiper: (swiper) => (swiperRef.current = swiper),
    onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
  };

  return (
    <section className="testimonial pt-16 pb-28 lg:pb-20 xl:pb-0 md:pt-20 lg:pt-[120px] bg-BodyBg-0 relative z-20 overflow-hidden">
      <div className="absolute -z-10 top-[22%] left-[13%] inline-block">
        <img
          src={testiShape}
          alt="Shape"
          draggable={false}
          className="animate-rotational"
        />
      </div>
      <div className="absolute -z-10 top-[56%] left-[12%] inline-block">
        <img
          src={testiShape2}
          alt="Shape"
          draggable={false}
          className="animate-wiggle"
        />
      </div>
      <div className="Container">
        <div className="relative grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border-b border-SecondaryColor-0 border-opacity-15 pb-6 lg:py-6">
            <h5 className="zoom-in font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]">
              TESTIMONIALS
            </h5>
          </div>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0">
            Real Experiences From Our<br /> Dedicated Learners
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start mt-12">
          <div className="lg:-mt-2 flex items-center justify-center lg:ml-12 relative">
            <img src={testiThumb} alt="Testimonial" draggable={false} />
          </div>
          <div className="box-row lg:ml-4 relative">
            <Swiper {...settings}>
              {testiData.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="box">
                  <div className="pb-24 sm:pb-0">
                    <TestimonialCard {...testimonial} />
                  </div>
                </SwiperSlide>
              ))}

              <TestiNavigation />
            </Swiper>

            {/* Custom Pagination */}
            <div className="absolute top-14 left-[-100%] -translate-x-[2%] flex flex-col justify-start items-start gap-[68px] z-10">
              {paginationImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => handleBulletClick(i)}
                  className={`relative size-[74px] transition-all duration-500 ${
                    activeIndex === i ? "!size-[60px]" : ""
                  } ${i === 1 ? "ml-[450px]" : ""}`}
                >
                  <span
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat rounded-full transition-all duration-500"
                    style={{ backgroundImage: `url(${img})` }}
                  ></span>
                  {activeIndex === i && (
                    <span className="absolute -top-[7px] -left-[7px] size-[74px] border border-[#0084ff] rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
