import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import blogThumb from "/images/blog-thumb1.png";
import blogThumb2 from "/images/blog-thumb2.png";
import blogThumb3 from "/images/blog-thumb3.png";
import blogPostIcon from "/images/blog-autor1.png";
import blogPostIcon2 from "/images/blog-autor2.png";
import blogPostIcon3 from "/images/blog-autor3.png";
import { IoMdLogIn } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
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

const BlogNoSideBar = () => {
  // Box Reveal

  BoxReveal();

  // Text Reveal

  TextReveal();

  // Image Reveal

  ImageReveal();

  return (
    <>
      <HelmetChanger title={"Blog No Sidebar Inner Page"} />
      <BreadCrumb2
        breadCrumbTitle={"Blog No Sidebar Sidebar"}
        url={"/blog"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={"Blog"}
        breadCrumbContent={"Blog List Right Sidebar"}
      />
      <section className="pt-16 md:pt-20 lg:pt-[120px] pb-16 md:pb-20 lg:pb-[120px]">
        <div className="Container">
          <div>
            <div className="box-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
      </section>
    </>
  );
};

export default BlogNoSideBar;
