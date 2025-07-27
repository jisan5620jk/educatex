import { FaCircle } from "react-icons/fa6";
import CategoryBox from "./CategoryBox";
import icon from "/images/cate-icon1.png";
import icon2 from "/images/cate-icon2.png";
import icon3 from "/images/cate-icon3.png";
import icon4 from "/images/cate-icon4.png";
import icon5 from "/images/cate-icon5.png";
import icon6 from "/images/cate-icon6.png";

const categories = [
  {
    Icon: icon,
    title: "UI/UX",
    subtitle: "DESIGN SERVICE",
    categoryUrl: "/course",
    bgColor: "bg-green-50",
  },
  {
    Icon: icon2,
    title: "VIDEO",
    subtitle: "PHOTOGRAPHY",
    categoryUrl: "/course",
    bgColor: "bg-orange-50",
  },
  {
    Icon: icon3,
    title: "HIGH",
    subtitle: "TECH COMPANY",
    categoryUrl: "/course",
    bgColor: "bg-blue-50",
  },
  {
    Icon: icon4,
    title: "SOCIAL",
    subtitle: "MEDIA MARKETING",
    categoryUrl: "/course",
    bgColor: "bg-purple-50",
  },
  {
    Icon: icon5,
    title: "3D",
    subtitle: "GAMING STUDIO",
    categoryUrl: "/course",
    bgColor: "bg-pink-50",
  },
  {
    Icon: icon6,
    title: "UI/UX",
    subtitle: "GRAPHIC DESIGN",
    categoryUrl: "/course",
    bgColor: "bg-teal-50",
  },
];

const Category = () => {
  return (
    <section className="px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] mt-16 md:mt-20 lg:mt-28">
      <div className="bg-white rounded-lg sm:rounded-2xl md:rounded-[30px] relative z-10 py-16 md:py-20 lg:py-28">
        <div className="text-center">
          <h5 className="zoom-in font-Outfit text-sm text-HeadingColor-0 uppercase flex items-center gap-3 justify-center relative z-10 before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:w-[44%] md:before:w-[11%] before:h-[.5px] before:bg-gradient-to-r before:to-white before:via-PrimaryColor-0 before:from-white">
            <span className="text-PrimaryColor2-0">
              <FaCircle size={8} />
            </span>
            Top CATEGORIES
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[45px] 2xl:leading-[55px] text-HeadingColor-0 mt-2 sm:mt-[18px] mb-4">
            Educate Popular{" "}
            <span className="text-PrimaryColor-0">Categories</span>
          </h1>
        </div>
        <div className="box-row max-w-[1500px] w-full mx-auto flex flex-wrap justify-center gap-6 mt-[52px]">
          {categories.map((category, index) => (
            <div key={index} className="box">
              <CategoryBox {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
