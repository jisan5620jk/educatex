import aboutThumb from "/images/about-thumb1.png";
import itemIcon from "/images/about-icon.png";
import shape from "/images/about-shape2.png";
import shape2 from "/images/about-shape1.png";
import shape3 from "/images/about-shape3.png";
import shape4 from "/images/about-shape5.png";
import shape5 from "/images/about-shape4.png";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import OnScrollCounter from "../../Shared/Counter/OnScrollCounter";

const About = () => {
  return (
    <section className="bg-[url(/images/about-bg11.png)] pt-16 md:pt-20 lg:pt-28 bg-no-repeat bg-center bg-cover relative">
      <img
        src={shape4}
        draggable={false}
        alt="Shape"
        className="absolute top-[16%] right-[7%] animate-rotational hidden 3xl:block"
      />
      <img
        src={shape5}
        draggable={false}
        alt="Shape"
        className="absolute bottom-[10%] right-[4%] animate-dance3 hidden 3xl:block"
      />
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 items-end">
          <div className="relative z-10">
            <img
              src={aboutThumb}
              draggable="false"
              className="w-full lg:w-[inherit] max-w-[inherit] lg:-ml-[350px] xl:-ml-[250px] 2xl:-ml-[224px]"
            />
            <img
              src={shape}
              draggable={false}
              alt="Shape"
              className="absolute -z-10 -top-[3%] right-0 lg:right-[12%] animate-rotational"
            />
            <img
              src={shape2}
              draggable={false}
              alt="Shape"
              className="absolute -z-10 -top-4 lg:top-[2%] left-5 lg:-left-[6%] animate-swing"
            />
            <img
              src={shape3}
              draggable={false}
              alt="Shape"
              className="absolute top-[30%] left-[24%] animate-wiggle hidden xl:block"
            />
          </div>
          <div className="relative pb-16 md:pb-20 lg:pb-28">
            <h5 className="zoom-in font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]">
              ABOUT US
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4">
              Who We Are – Introduction to
              <br />
              Educate Online Platform
            </h1>
            <p className="fade-up font-OpenSans text-TextColor-0 max-w-[570px] w-full">
              Educate the ultimate destination for knowledge seekers and
              educators alike. We are committed to transforming special
              education impact global channels without standards compliant
              systems
            </p>
            <ul className="box-row grid items-center grid-cols-1 sm:grid-cols-2 gap-y-4 my-7">
              <li className="box flex items-center gap-[10px]">
                <div>
                  <img src={itemIcon} draggable={false} alt="Icon" />
                </div>
                <h5 className="flex-1 font-Outfit font-medium text-lg sm:text-base md:text-lg lg:text-base 2xl:text-lg text-HeadingColor-0">
                  Innovative Learning System
                </h5>
              </li>
              <li className="box flex items-center gap-[10px]">
                <div>
                  <img src={itemIcon} draggable={false} alt="Icon" />
                </div>
                <h5 className="flex-1 font-Outfit font-medium text-lg sm:text-base md:text-lg lg:text-base 2xl:text-lg text-HeadingColor-0">
                  Worldwide Intelligent Learner
                </h5>
              </li>
            </ul>
            <div className="box-row grid grid-cols-1 items-center sm:grid-cols-2 border-y border-SecondaryColor-0 border-opacity-15 py-5 mb-12">
              <div className="box flex gap-10">
                <div className="text-2xl md:text-[56px] lg:text-[40px] leading-[56px] tracking-wide font-semibold font-Outfit text-PrimaryColor-0 relative">
                  <OnScrollCounter start={0} end={30} duration={2000} />
                  <h2 className="absolute -top-0 -right-5 font-Outfit text-3xl">
                    +
                  </h2>
                </div>
                <div className="flex-1">
                  <p className="font-OpenSans text-TextColor-0 mt-2">
                    Expert and Professional
                    <br /> all Instructor
                  </p>
                </div>
              </div>
              <div className="box flex gap-10">
                <div className="text-2xl md:text-[56px] lg:text-[40px] leading-[56px] tracking-wide font-semibold font-Outfit text-PrimaryColor-0 relative flex items-center">
                  <OnScrollCounter start={0} end={6} duration={1000} />
                  <h2 className="font-Outfit">K</h2>
                  <h2 className="absolute -top-0 -right-5 font-Outfit text-3xl">
                    +
                  </h2>
                </div>
                <div className="flex-1">
                  <p className="font-OpenSans text-TextColor-0 mt-2">
                    Enrolled Students all
                    <br /> Over the World
                  </p>
                </div>
              </div>
            </div>
            <div className="fade-up">
              <Link to={"/about"} className="primary-btn2">
                More About
                <HiArrowNarrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
