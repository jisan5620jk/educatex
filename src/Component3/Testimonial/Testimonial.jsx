import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { MdOutlineStarHalf, MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";
import testiImg from "/images/testi-autor1.png";
import testiImg2 from "/images/testi-autor3.png";
import testiImg3 from "/images/testi-autor4.png";
import testiQuate from "/images/testi-quote.png";
import testiThumb from "/images/testi-thumb41.png";
import testiThumb2 from "/images/testi-thumb42.png";
import testiShape2 from "/images/hero-dot.png";
import testiShape3 from "/images/testi-like.png";
import testiShape4 from "/images/testi-arrow4.png";
import testiShape5 from "/images/testi-book4.png";
import TestiNavigation from "./TestiNavigation";
import subTilteIcon from "/images/sub-title2.png";

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
  const settings = {
    modules: [Autoplay],
    loop: true,
    speed: 2001,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
  };

  return (
    <section className="py-0 md:py-10 lg:pt-28 lg:pb-[70px] xl:py-[120px] bg-white relative z-20 overflow-hidden">
      <div className="absolute right-28 top-16 2xl:top-28 hidden xl:block">
        <img
          src={testiShape5}
          draggable={false}
          alt="Shape"
          className="animate-flip"
        />
      </div>
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-start">
          <div className="relative h-full">
            <img src={testiThumb} draggable={false} alt="Testimonial Image" />
            <img
              src={testiThumb2}
              draggable={false}
              alt="Testimonial Image"
              className="absolute bottom-0 right-0 md:right-[70px] hidden sm:block"
            />
            <div className="absolute -z-10 top-[25%] right-28 md:inline-block rotate-[25deg] hidden">
              <img
                src={testiShape2}
                draggable={false}
                alt="Testimonial Shape"
                className="animate-wiggle"
              />
            </div>
            <div className="absolute -z-10 bottom-16 left-24 md:inline-block hidden">
              <img
                src={testiShape3}
                draggable={false}
                alt="Testimonial Shape"
                className="animate-rotateX"
              />
            </div>
            <div className="absolute -z-10 bottom-28 left-4 md:inline-block hidden">
              <img
                src={testiShape4}
                draggable={false}
                alt="Testimonial Shape"
                className="animate-swing"
              />
            </div>
          </div>
          <div className="lg:ml-4 pt-5 pb-8">
            <div>
              <h5 className="font-Outfit font-medium text-PrimaryColor-0 uppercase flex items-center gap-3">
                <img src={subTilteIcon} draggable={false} alt="Icon" /> PARENTS
                TESTIMONIAL
              </h5>
              <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4">
                Real Experiences From Our
                <br />
                Dedicated Learners
              </h1>
            </div>
            <Swiper {...settings}>
              <div>
                {testiData.map(
                  ({
                    id,
                    testiTitle,
                    testiQuate,
                    testiRatingIcon,
                    testiRatingIcon2,
                    testiName,
                    testiImg,
                    testiDesc,
                    testiDesignation,
                  }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div className="pb-24 sm:pb-0">
                          <TestimonialCard
                            testiTitle={testiTitle}
                            testiQuate={testiQuate}
                            testiRatingIcon={testiRatingIcon}
                            testiRatingIcon2={testiRatingIcon2}
                            testiName={testiName}
                            testiImg={testiImg}
                            testiDesc={testiDesc}
                            testiDesignation={testiDesignation}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  }
                )}
              </div>
              <TestiNavigation />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
