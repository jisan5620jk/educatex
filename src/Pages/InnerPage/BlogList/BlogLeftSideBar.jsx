import { Link } from "react-router-dom";
import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import blogThumb from "/images/blog-thumb1.png";
import blogThumb2 from "/images/blog-thumb2.png";
import blogThumb3 from "/images/blog-thumb3.png";
import blogPostIcon from "/images/blog-autor1.png";
import blogPostIcon2 from "/images/blog-autor2.png";
import blogPostIcon3 from "/images/blog-autor3.png";
import { IoMdLogIn } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import BlogListCard from "./BlogListCard";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";

import BoxReveal from "../../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const blogListData = [
  {
    id: 1,
    blogThumb,
    blogDate: "04 Feb",
    blogPostIcon,
    blogPost: "By - Jhon D. Alexon",
    blogUrl: "/blog_details2",
    blogTitle: "10 Proven Strategies to excel Online Learning",
    blogBtnText: "Continue Reading",
    blogBtnIcon: <IoMdLogIn />,
    bgColor: "bg-PrimaryColor3-0 bg-opacity-[7%]",
    spanBg: "bg-PrimaryColor3-0",
    dateBg: "bg-PrimaryColor3-0",
    titleHover: "hover:text-PrimaryColor3-0",
    borderColor: "border-PrimaryColor3-0 border-opacity-30",
    buttonBg: "bg-PrimaryColor3-0 bg-opacity-10",
    buttonText: "text-PrimaryColor3-0",
    buttonBefore: "before:bg-PrimaryColor3-0",
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDate: "14 Mar",
    blogPostIcon: blogPostIcon2,
    blogPost: "By - Samira Khan",
    blogUrl: "/blog_details2",
    blogTitle: "Trends that are shaping the Learning experience",
    blogBtnText: "Continue Reading",
    blogBtnIcon: <IoMdLogIn />,
    bgColor: "bg-PrimaryColor-0 bg-opacity-[7%]",
    spanBg: "bg-PrimaryColor-0",
    dateBg: "bg-PrimaryColor-0",
    titleHover: "hover:text-PrimaryColor-0",
    borderColor: "border-PrimaryColor-0 border-opacity-30",
    buttonBg: "bg-PrimaryColor-0 bg-opacity-10",
    buttonText: "text-PrimaryColor-0",
    buttonBefore: "before:bg-PrimaryColor-0",
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDate: "24 Nov",
    blogPostIcon: blogPostIcon3,
    blogPost: "By - Anjelina Watson",
    blogUrl: "/blog_details2",
    blogTitle: "Learning is the Key soft skills and Professional",
    blogBtnText: "Continue Reading",
    blogBtnIcon: <IoMdLogIn />,
    bgColor: "bg-PrimaryColor2-0 bg-opacity-[7%]",
    spanBg: "bg-PrimaryColor2-0",
    dateBg: "bg-PrimaryColor2-0",
    titleHover: "hover:text-PrimaryColor2-0",
    borderColor: "border-PrimaryColor2-0 border-opacity-30",
    buttonBg: "bg-PrimaryColor2-0 bg-opacity-10",
    buttonText: "text-PrimaryColor2-0",
    buttonBefore: "before:bg-PrimaryColor2-0",
  },
  {
    id: 4,
    blogThumb: blogThumb,
    blogDate: "08 Jun",
    blogPostIcon: blogPostIcon,
    blogPost: "By - Michael R. Jordan",
    blogUrl: "/blog_details2",
    blogTitle: "How Microlearning Is Reshaping Education in 2025",
    blogBtnText: "Continue Reading",
    blogBtnIcon: <IoMdLogIn />,
    bgColor: "bg-PrimaryColor4-0 bg-opacity-[7%]",
    spanBg: "bg-PrimaryColor4-0",
    dateBg: "bg-PrimaryColor4-0",
    titleHover: "hover:text-PrimaryColor4-0",
    borderColor: "border-PrimaryColor4-0 border-opacity-30",
    buttonBg: "bg-PrimaryColor4-0 bg-opacity-10",
    buttonText: "text-PrimaryColor4-0",
    buttonBefore: "before:bg-PrimaryColor4-0",
  },
  {
    id: 5,
    blogThumb: blogThumb2,
    blogDate: "19 Jul",
    blogPostIcon: blogPostIcon2,
    blogPost: "By - Liana C. Gomes",
    blogUrl: "/blog_details2",
    blogTitle: "Gamification in eLearning: Tools and Benefits",
    blogBtnText: "Continue Reading",
    blogBtnIcon: <IoMdLogIn />,
    bgColor: "bg-PrimaryColor-0 bg-opacity-[7%]",
    spanBg: "bg-PrimaryColor-0",
    dateBg: "bg-PrimaryColor-0",
    titleHover: "hover:text-PrimaryColor-0",
    borderColor: "border-PrimaryColor-0 border-opacity-30",
    buttonBg: "bg-PrimaryColor-0 bg-opacity-10",
    buttonText: "text-PrimaryColor-0",
    buttonBefore: "before:bg-PrimaryColor-0",
  },
  {
    id: 6,
    blogThumb: blogThumb3,
    blogDate: "02 Aug",
    blogPostIcon: blogPostIcon3,
    blogPost: "By - Henry L. Foster",
    blogUrl: "/blog_details2",
    blogTitle: "The Role of AI in Personalized Learning Paths",
    blogBtnText: "Continue Reading",
    blogBtnIcon: <IoMdLogIn />,
    bgColor: "bg-PrimaryColor2-0 bg-opacity-[7%]",
    spanBg: "bg-PrimaryColor2-0",
    dateBg: "bg-PrimaryColor2-0",
    titleHover: "hover:text-PrimaryColor2-0",
    borderColor: "border-PrimaryColor2-0 border-opacity-30",
    buttonBg: "bg-PrimaryColor2-0 bg-opacity-10",
    buttonText: "text-PrimaryColor2-0",
    buttonBefore: "before:bg-PrimaryColor2-0",
  },
];

const BlogLeftSideBar = () => {
  // Box Reveal

  BoxReveal();

  // Text Reveal

  TextReveal();

  // Image Reveal

  ImageReveal();

  return (
    <>
      <HelmetChanger title={"Blog Left Sidebar Inner Page"} />
      <BreadCrumb2
        breadCrumbTitle={"Blog Left Sidebar"}
        url={"/blog"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={"Blog"}
        breadCrumbContent={"Blog List Right Sidebar"}
      />
      <section className="pt-16 md:pt-20 lg:pt-[120px] pb-16 md:pb-20 lg:pb-[120px]">
        <div className="Container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[52px] lg:gap-7 2xl:gap-[52px]">
            <div className="col-span-2 lg:col-span-1">
              <div className="bg-white shadow-shades border-t-[6px] border-PrimaryColor-0 rounded-b-md px-4 sm:px-8 lg:px-6 xl:px-10 pt-9 pb-4 mb-7">
                <div className="fade-up relative inline-block w-full">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search here..."
                    required
                    className="w-full h-[56px] p-6 bg-BodyBg-0 rounded font-OpenSans"
                  />
                  <button
                    type="submit"
                    className=" text-xl text-TextColor2-0 rounded h-[56px] transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-7 top-1/2 -translate-y-1/2"
                  >
                    <IoSearch />
                  </button>
                </div>
                <div className="fade-up mt-7">
                  <h4 className="font-Outfit font-medium text-left text-2xl text-HeadingColor-0 pb-1 mb-4 relative">
                    Categories
                  </h4>
                  <ul>
                    <li>
                      <Link to={"/service_details"}>
                        <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded border-b border-HeadingColor-0 border-opacity-10 overflow-hidden z-10 relative">
                          <span className="flex items-center gap-1">
                            Web Development
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/service_details2"}>
                        <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded border-b border-HeadingColor-0 border-opacity-10 overflow-hidden z-10 relative">
                          <span className="flex items-center gap-1">
                            Digital Marketing
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/service_details3"}>
                        <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded border-b border-HeadingColor-0 border-opacity-10 overflow-hidden z-10 relative">
                          <span className="flex items-center gap-1">
                            IT Solution
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/service_details4"}>
                        <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded border-b border-HeadingColor-0 border-opacity-10 overflow-hidden z-10 relative">
                          <span className="flex items-center gap-1">
                            App Development
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/service_details5"}>
                        <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded border-b border-HeadingColor-0 border-opacity-10 overflow-hidden z-10 relative">
                          <span className="flex items-center gap-1">
                            Web Design
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/service_details6"}>
                        <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded overflow-hidden z-10 relative">
                          <span className="flex items-center gap-1">
                            UI/UX Design
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="fade-up pt-12 pb-2">
                  <h4 className="font-Outfit font-medium text-left text-2xl text-HeadingColor-0 pb-1 mb-5 relative">
                    Popular Post
                  </h4>
                  <Link to={"/blog_details"}>
                    <button className="group flex gap-5 mb-6">
                      <div className="size-20 rounded overflow-hidden">
                        <img
                          draggable="false"
                          src={blogThumb}
                          className="h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h6 className="font-Outfit font-medium sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 ease-linear group-hover:underline group-hover:underline-offset-4">
                          Expert Advice for Growing Your Digital Presence
                        </h6>
                        <p className="font-OpenSans text-TextColor2-0 text-sm mt-1">
                          01 Jan, 2025
                        </p>
                      </div>
                    </button>
                  </Link>
                  <Link to={"/blog_details"}>
                    <button className="group flex gap-5 mb-6">
                      <div className="size-20 rounded overflow-hidden">
                        <img
                          draggable="false"
                          src={blogThumb2}
                          className="h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h6 className="font-Outfit font-medium sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 ease-linear group-hover:underline group-hover:underline-offset-4">
                          Data-Driven Strategies and Case Studies Success.
                        </h6>
                        <p className="font-OpenSans text-TextColor2-0 text-sm mt-1">
                          24 May, 2025
                        </p>
                      </div>
                    </button>
                  </Link>
                  <Link to={"/blog_details"}>
                    <button className="group flex gap-5 mb-6">
                      <div className="size-20 rounded overflow-hidden">
                        <img
                          draggable="false"
                          src={blogThumb3}
                          className="h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h6 className="font-Outfit font-medium sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 ease-linear group-hover:underline group-hover:underline-offset-4">
                          The Complete SEO Blog for Digital Success.
                        </h6>
                        <p className="font-OpenSans text-TextColor2-0 text-sm mt-1">
                          30 Mar, 2025
                        </p>
                      </div>
                    </button>
                  </Link>
                </div>
                <div className="fade-up pt-12 pb-2">
                  <h4 className="font-Outfit font-medium text-left text-2xl text-HeadingColor-0 pb-1 mb-4 relative">
                    Cloud Tags
                  </h4>
                  <ul className="inline-block">
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link to={"/"}>
                        <button className="bg-white flex items-center border border-SecondaryColor-0 border-opacity-10 rounded-full justify-center font-OpenSans text-sm overflow-hidden text-TextColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white">
                          Cyber Security
                        </button>
                      </Link>
                    </li>
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link to={"/"}>
                        <button className="bg-white flex items-center border border-SecondaryColor-0 border-opacity-10 rounded-full justify-center font-OpenSans text-sm overflow-hidden text-TextColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white">
                          Learning
                        </button>
                      </Link>
                    </li>
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link to={"/"}>
                        <button className="bg-white flex items-center border border-SecondaryColor-0 border-opacity-10 rounded-full justify-center font-OpenSans text-sm overflow-hidden text-TextColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white">
                          Web Development
                        </button>
                      </Link>
                    </li>
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link to={"/"}>
                        <button className="bg-white flex items-center border border-SecondaryColor-0 border-opacity-10 rounded-full justify-center font-OpenSans text-sm overflow-hidden text-TextColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white">
                          AI
                        </button>
                      </Link>
                    </li>
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link to={"/"}>
                        <button className="bg-white flex items-center border border-SecondaryColor-0 border-opacity-10 rounded-full justify-center font-OpenSans text-sm overflow-hidden text-TextColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white">
                          Marketing
                        </button>
                      </Link>
                    </li>
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link to={"/"}>
                        <button className="bg-white flex items-center border border-SecondaryColor-0 border-opacity-10 rounded-full justify-center font-OpenSans text-sm overflow-hidden text-TextColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white">
                          Technology
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="box-row grid grid-cols-1 md:grid-cols-2 gap-7">
                {blogListData.map((item) => (
                  <div key={item.id} className="box mb-7">
                    <BlogListCard {...item} />
                  </div>
                ))}
              </div>
              <div>
                <ul className="flex items-center gap-2 justify-start pt-[50px]">
                  <li>
                    <button className="h-[50px] w-[50px] font-OpenSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                      01
                    </button>
                  </li>
                  <li>
                    <button className="h-[50px] w-[50px] font-OpenSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                      02
                    </button>
                  </li>
                  <li>
                    <button className="h-[50px] w-[50px] font-OpenSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                      <FaAngleRight />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLeftSideBar;
