import BreadCrumb3 from "../../../Shared/BreadCrumb/BreadCrumb3";
import instructorImage from "/images/breadcumb-autor.png";
import instructorThumb from "/images/instructor-details-thumb.png";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import {
  FaChevronDown,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegEye,
} from "react-icons/fa";
import { MdPlayCircle } from "react-icons/md";
import { IoIosStar, IoMdPlay, IoMdStar } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { CiDollar } from "react-icons/ci";
import courseImg1 from "/images/case-thumb1.jpg";
import courseImg2 from "/images/case-thumb2.jpg";
import courseImg3 from "/images/case-thumb3.jpg";
import instructorImg from "/images/case-autor.png";
import instructorImg2 from "/images/case-autor2.png";
import instructorImg3 from "/images/case-autor3.png";
import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    img: courseImg1,
    category: "Business",
    title: "Business Innovation And Development",
    price: "$30",
    rating: 4.5,
    ratingContent: "/3 Ratings",
    lessons: 12,
    students: 1200,
    instructor: "John D. Alexon",
    instructorImg: instructorImg,
    bgColor: "bg-PrimaryColor3-0 bg-opacity-[7%]",
    hoverSpan: "bg-PrimaryColor3-0",
    priceBg: "bg-PrimaryColor3-0",
    categoryColor: "text-PrimaryColor3-0",
    categoryBg:
      "bg-PrimaryColor3-0 bg-opacity-10 border border-PrimaryColor3-0 border-opacity-30",
    hoverTitle: "group-hover:text-PrimaryColor3-0",
    iconColor: "text-PrimaryColor3-0",
    buttonBg: "bg-PrimaryColor3-0",
  },
  {
    id: 2,
    img: courseImg2,
    category: "Design",
    title: "Fundamentals of Network And Domains",
    price: "$40",
    rating: 4.7,
    ratingContent: "/7 Ratings",
    lessons: 15,
    students: 1500,
    instructor: "Jane Smith",
    instructorImg: instructorImg2,
    bgColor: "bg-PrimaryColor2-0 bg-opacity-[7%]",
    hoverSpan: "bg-PrimaryColor2-0",
    priceBg: "bg-PrimaryColor2-0",
    categoryColor: "text-PrimaryColor2-0",
    categoryBg:
      "bg-PrimaryColor2-0 bg-opacity-10 border border-PrimaryColor2-0 border-opacity-30",
    hoverTitle: "group-hover:text-PrimaryColor2-0",
    iconColor: "text-PrimaryColor2-0",
    buttonBg: "bg-PrimaryColor2-0",
  },
  {
    id: 3,
    img: courseImg3,
    category: "Finance",
    title: "Creative Graphic Design with Adobe Suite",
    price: "$50",
    rating: 4.8,
    ratingContent: "/5 Ratings",
    lessons: 11,
    students: 2001,
    instructor: "Michael B. Jordan",
    instructorImg: instructorImg3,
    bgColor: "bg-PrimaryColor-0 bg-opacity-[7%]",
    hoverSpan: "bg-PrimaryColor-0",
    priceBg: "bg-PrimaryColor-0",
    categoryColor: "text-PrimaryColor-0",
    categoryBg:
      "bg-PrimaryColor-0 bg-opacity-10 border border-PrimaryColor-0 border-opacity-30",
    hoverTitle: "group-hover:text-PrimaryColor-0",
    iconColor: "text-PrimaryColor-0",
    buttonBg: "bg-PrimaryColor-0",
  },
];

const sections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction to Business Innovation", duration: "01:00:12" },
      {
        title: "Types of innovation (product, process, business model, etc.)",
        duration: "01:10:12",
      },
      {
        title: "Case studies of successful business innovations",
        duration: "48:20:12",
      },
      { title: "Brainstorming and ideation techniques", duration: "29:35:12" },
      { title: "Conducting market analysis and trend", duration: "01:24:12" },
    ],
  },
  {
    title: "Market Research & Identifying",
    items: [
      { title: "Understanding market trends", duration: "00:45:30" },
      { title: "Customer segmentation methods", duration: "00:50:22" },
      { title: "Competitor analysis tools", duration: "00:40:15" },
    ],
  },
  {
    title: "Business Model Innovation",
    items: [
      { title: "Innovative business modeling", duration: "01:10:05" },
      { title: "Value proposition design", duration: "00:55:10" },
      { title: "Revenue models & strategies", duration: "01:05:45" },
    ],
  },
  {
    title: "Digital Transformation & Emerging",
    items: [
      { title: "Tech trends in business", duration: "00:59:00" },
      { title: "Adopting digital tools", duration: "01:15:00" },
      { title: "Automation & AI basics", duration: "00:48:30" },
    ],
  },
  {
    title: "Funding & Scaling Innovation",
    items: [
      { title: "Types of funding sources", duration: "01:20:20" },
      { title: "Scaling strategies", duration: "01:02:35" },
      { title: "Investor pitch preparation", duration: "00:50:50" },
    ],
  },
];

const CourseDetails = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Start with first expanded
  const contentRefs = useRef([]);

  useEffect(() => {
    if (expandedIndex !== null && contentRefs.current[expandedIndex]) {
      const el = contentRefs.current[expandedIndex];
      el.style.maxHeight = el.scrollHeight + "px";
    }

    // Collapse others
    contentRefs.current.forEach((el, idx) => {
      if (el && idx !== expandedIndex) {
        el.style.maxHeight = "0px";
      }
    });
  }, [expandedIndex]);

  //Ratings

  const ratingsCount = 16;
  const averageRating = 5.0;

  // Your distribution data
  const ratingsDistribution = [
    { stars: 5, count: 19 },
    { stars: 4, count: 9 },
    { stars: 3, count: 6 },
    { stars: 2, count: 3 },
    { stars: 1, count: 1 },
  ];

  // Helper to get proportion percentage
  const getPercentage = (count) => (count / ratingsCount) * 100;

  return (
    <>
      <HelmetChanger title={"Project Details Page"} />
      <BreadCrumb3
        breadCrumbTitle={"Course Details"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbIcon2={<BsArrowUpRight />}
        url={"/course"}
        breadCrumbLink={"Course"}
        breadCrumbText={"Business innovation and development"}
        instructorImg={instructorImage}
      />
      <section>
        <div className="Container">
          <div className="grid grid-cols-3 gap-7">
            <div className="col-span-3 lg:col-span-2 mt-16 md:mt-20 lg:mt-28">
              <h2 className="fade-up font-Outfit font-semibold text-2xl sm:text-[32px] text-HeadingColor-0">
                Course Overview
              </h2>
              <p className="fade-up font-OpenSans text-TextColor2-0 mt-6">
                Educate the ultimate destination for knowledge seekers and
                educators alike distinctively restore installed We are committed
                to transforming special education impact global channels base
                information with user without standards compliant systems base
                information with
              </p>
              <p className="fade-up font-OpenSans text-TextColor2-0 mt-7 mb-9">
                Quickly deploy performance based architectures vis-a-vis
                business bandwidth. Professionally disseminate best-of-breed
                customer service and virtual catalysts for change. Proactively
                visualize professional paradigms for robust imperatives.
                Seamlessly matrix robust infrastructures for premium innovation
              </p>
              <h2 className="fade-up font-Outfit font-medium text-2xl sm:text-3xl text-HeadingColor-0 mt-[52px] mb-6">
                What you’ll Learn?
              </h2>

              <ul className="box-row space-y-2">
                <li className="box flex items-center gap-2 font-OpenSans text-TextColor-0">
                  <span className="text-PrimaryColor-0">
                    <GiCheckMark />
                  </span>
                  Covering essential topics like entrepreneurship, marketing
                </li>
                <li className="box flex items-center gap-2 font-OpenSans text-TextColor-0">
                  <span className="text-PrimaryColor-0">
                    <GiCheckMark />
                  </span>
                  Regular live sessions with industry professionals for
                  real-time learning.
                </li>
                <li className="box flex items-center gap-2 font-OpenSans text-TextColor-0">
                  <span className="text-PrimaryColor-0">
                    <GiCheckMark />
                  </span>
                  Interactive tests to reinforce knowledge and track progress.
                </li>
                <li className="box flex items-center gap-2 font-OpenSans text-TextColor-0">
                  <span className="text-PrimaryColor-0">
                    <GiCheckMark />
                  </span>
                  Learning from successful business models and failures.
                </li>
                <li className="box flex items-center gap-2 font-OpenSans text-TextColor-0">
                  <span className="text-PrimaryColor-0">
                    <GiCheckMark />
                  </span>
                  A recognized certificate to boost credibility.
                </li>
              </ul>
              <p className="fade-up font-OpenSans text-TextColor-0 mt-7">
                Educate the ultimate destination for knowledge seekers and
                educators alike distinctively restore installed We are committed
                to transforming special education impact global
              </p>
              <div className="box-row my-10">
                {sections.map(({ title, items }, idx) => {
                  const isOpen = expandedIndex === idx;

                  return (
                    <section
                      key={title}
                      className="box mb-4 rounded-lg border overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedIndex(isOpen ? null : idx)}
                        className={`flex items-center justify-between border-b border-SecondaryColor-0 border-opacity-10 last:border-none w-full px-4 sm:px-[30px] py-3 sm:py-5 bg-BodyBg-0 font-Outfit text-HeadingColor-0 text-base sm:text-xl text-left transition-all duration-500 overflow-hidden ${
                          isOpen ? "bg-PrimaryColor-0 text-white" : ""
                        }`}
                        aria-expanded={isOpen}
                        aria-controls={`section-content-${idx}`}
                        id={`section-header-${idx}`}
                      >
                        <span>{title}</span>
                        <span
                          className={`text-sm transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <FaChevronDown />
                        </span>
                      </button>

                      <div
                        id={`section-content-${idx}`}
                        role="region"
                        aria-labelledby={`section-header-${idx}`}
                        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                        ref={(el) => (contentRefs.current[idx] = el)}
                      >
                        {items.length > 0 && (
                          <ul className="">
                            {items.map(({ title: itemTitle, duration }) => (
                              <li
                                key={itemTitle}
                                className="flex justify-between items-center px-3 sm:px-[30px] py-3 sm:py-5 border-b last:border-b-0 font-Outfit text-sm sm:text-base text-HeadingColor-0  cursor-pointer transition-all duration-500 hover:bg-BodyBg-0"
                              >
                                <div className="flex items-center space-x-1 sm:space-x-3">
                                  <button
                                    className={`flex items-center justify-center text-xl sm:text-2xl text-PrimaryColor-0 hover:text-PrimaryColor2-0 transition-all duration-500`}
                                    aria-label={`Play ${itemTitle}`}
                                  >
                                    <MdPlayCircle />
                                  </button>
                                  <span>{itemTitle}</span>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-5 text-sm text-TextColor-0">
                                  <span>{duration}</span>
                                  <FaRegEye />
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </section>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-7 p-5 rounded-2xl bg-white shadow-shades">
                <div>
                  <img
                    src={instructorThumb}
                    draggable={false}
                    alt="Instructor Thumb"
                  />
                </div>
                <div className="box-row flex-1">
                  <h5 className="box font-Outfit text-lg text-PrimaryColor-0">
                    Instructor
                  </h5>
                  <h3 className="box font-Outfit text-[28px] text-HeadingColor-0 font-semibold">
                    Anjelina Jholi
                  </h3>
                  <div className="box flex items-center py-3">
                    {/* Stars */}
                    {[...Array(5)].map((_, i) => {
                      const starClass =
                        i < 4
                          ? "text-ReviewText-0"
                          : "text-ReviewText-0 text-opacity-50";
                      return (
                        <div key={i} className={`text-[22px] ${starClass}`}>
                          <IoMdStar />
                        </div>
                      );
                    })}
                    <span className="ml-1 font-Outfit font-medium text-HeadingColor-0">
                      (4.5)
                    </span>
                  </div>
                  <h6 className="box font-Outfit text-sm text-PrimaryColor-0 inline-block px-5 py-1.5 bg-PrimaryColor-0 bg-opacity-10 border border-PrimaryColor-0 border-opacity-30 rounded-3xl mb-7">
                    UI/UX Designer
                  </h6>
                  <ul className="box flex gap-3">
                    <li>
                      <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                        <FaFacebookF />
                      </button>
                    </li>
                    <li>
                      <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                        <FaXTwitter />
                      </button>
                    </li>
                    <li>
                      <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                        <FaLinkedinIn />
                      </button>
                    </li>
                    <li>
                      <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                        <FaPinterestP />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="box-row flex flex-col sm:flex-row sm:items-center gap-5 w-full sm:h-[225px] mt-10">
                {/* Average Rating Section */}
                <div className="box max-w-[312px] w-full h-full bg-PrimaryColor-0 bg-opacity-[7%] py-7 sm:py-0 rounded-2xl flex flex-col items-center justify-center text-center">
                  <div className="text-5xl font-bold text-HeadingColor-0">
                    {averageRating.toFixed(2)}
                  </div>
                  <div className="text-gray-500 mt-1">{`${ratingsCount} Ratings`}</div>
                  <div className="flex items-center space-x-1 mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-ReviewText-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.282 3.936a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.282 3.936c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.839-.196-1.54-1.118l1.282-3.936a1 1 0 00-.364-1.118L2.095 9.363c-.783-.57-.38-1.81.588-1.81h4.177a1 1 0 00.95-.69l1.282-3.936z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Distribution bars with refined styling */}
                <div className="box w-full h-[225px] space-y-4 bg-PrimaryColor2-0 bg-opacity-[7%] rounded-2xl flex flex-col items-center justify-center">
                  {ratingsDistribution.map(({ stars, count }) => (
                    <div
                      key={stars}
                      className="flex items-center w-full px-3 sm:px-7 space-x-2"
                    >
                      {/* Star Label */}
                      <div className="w-12 text-sm font-medium text-gray-700">
                        {stars} Star
                      </div>

                      {/* Progress Bar Container */}
                      <div className="flex-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner relative">
                        {/* Bar fill with transition */}
                        <div
                          className="h-full bg-ReviewText-0 rounded-full transition-all duration-300 ease-in-out shadow-md"
                          style={{ width: `${getPercentage(count)}%` }}
                        ></div>
                      </div>

                      {/* Count Display */}
                      <div className="w-10 text-sm text-gray-500 text-center">{`(${count
                        .toString()
                        .padStart(2, "0")})`}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white mt-10">
                <h2 className="fade-up font-Outfit text-3xl font-medium mb-7">
                  Student’s Reviews
                </h2>

                {/* Review 1 */}
                <div className="fade-up mb-6 border-b border-HeadingColor-0 border-opacity-10 pb-8">
                  <div className="flex items-center gap-5 mb-6">
                    {/* Avatar/Initials */}
                    <div className="flex-shrink-0 size-14 bg-PrimaryColor-0 bg-opacity-70 text-white flex items-center justify-center rounded-full font-Outfit font-medium uppercase text-lg">
                      JA
                    </div>
                    {/* Review Content */}
                    <div className="w-full">
                      <h3 className="font-Outfit font-medium text-HeadingColor-0">
                        John D. Alexon
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          {/* Star Ratings */}
                          {Array.from({ length: 5 }).map((_, index) => (
                            <div
                              key={index}
                              className="text-ReviewText-0 text-lg"
                            >
                              <IoIosStar />
                            </div>
                          ))}
                        </div>
                        {/* Time Ago */}
                        <p className="font-OpenSans text-HeadingColor-0 text-sm mt-1">
                          16 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Review Text */}
                  <p className="font-OpenSans text-TextColor-0 max-w-[725px] w-full">
                    Educate the ultimate destination for knowledge seekers and
                    educators alike distinctively restore. We are committed to
                    transforming special education.
                  </p>
                </div>

                {/* Review 2 */}
                <div className="fade-up">
                  <div className="flex items-center gap-5 mb-6">
                    {/* Avatar/Initials */}
                    <div className="flex-shrink-0 size-14 bg-PrimaryColor2-0 bg-opacity-70 text-white flex items-center justify-center rounded-full font-Outfit font-medium uppercase text-lg">
                      AJ
                    </div>
                    {/* Review Content */}
                    <div className="w-full">
                      <h3 className="font-Outfit font-medium text-HeadingColor-0">
                        Anjelina Jholi
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          {/* Star Ratings */}
                          {Array.from({ length: 5 }).map((_, index) => (
                            <div
                              key={index}
                              className="text-ReviewText-0 text-lg"
                            >
                              <IoIosStar />
                            </div>
                          ))}
                        </div>
                        {/* Time Ago */}
                        <p className="font-OpenSans text-HeadingColor-0 text-sm mt-1">
                          6 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Review Text */}
                  <p className="font-OpenSans text-TextColor-0 max-w-[725px] w-full">
                    Dramatically implement just in time e-commerce via timely
                    architectures. Objectively formulate bleeding-edge quality
                    vectors and cost effective growth
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 mt-6 lg:-mt-[50px] relative z-10">
              <div className="border-t-[5px] border-PrimaryColor-0 bg-white rounded-lg shadow-shades overflow-hidden p-4 sm:p-7 lg:p-4 xl:p-7">
                {/* Image with Play Button */}
                <div className="fade-up relative">
                  <img
                    className="w-full h-60 object-cover rounded-lg"
                    src="/images/course-thumb1.png"
                    alt="Course"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-5 rounded-lg">
                    <div className="bg-white text-PrimaryColor-0 size-[60px] rounded-full text-2xl flex justify-center items-center cursor-pointer animate-ripple_white">
                      {/* Play Icon */}
                      <IoMdPlay />
                    </div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="fade-up mt-4 px-2 mb-2">
                  <h2 className="font-Outfit text-xl font-medium text-HeadingColor-0 mt-6 mb-2.5">
                    Course Includes :
                  </h2>

                  <div className="font-Outfit text-TextColor-0">
                    {/* Price */}
                    <div className="flex items-center justify-between border-b border-SecondaryColor-0 border-opacity-10 py-4">
                      <span className="flex items-center gap-2">
                        <CiDollar className="text-xl" />
                        Cost
                      </span>
                      <span className="text-HeadingColor-0">$60</span>
                    </div>
                    {/* Instructor */}
                    <div className="flex items-center justify-between border-b border-SecondaryColor-0 border-opacity-10 py-4">
                      <span className="flex items-center gap-2">
                        <CiDollar className="text-xl" />
                        Instructor
                      </span>
                      <span className="text-HeadingColor-0">
                        John D. Alexon
                      </span>
                    </div>
                    {/* Lessons */}
                    <div className="flex items-center justify-between border-b border-SecondaryColor-0 border-opacity-10 py-4">
                      <span className="flex items-center gap-2">
                        <CiDollar className="text-xl" />
                        Lessons
                      </span>
                      <span className="text-HeadingColor-0">10 Lessons</span>
                    </div>
                    {/* Enrolled */}
                    <div className="flex items-center justify-between border-b border-SecondaryColor-0 border-opacity-10 py-4">
                      <span className="flex items-center gap-2">
                        <CiDollar className="text-xl" />
                        Enrolled
                      </span>
                      <span className="text-HeadingColor-0">120 Students</span>
                    </div>
                    {/* Certifications */}
                    <div className="flex items-center justify-between border-b border-SecondaryColor-0 border-opacity-10 py-4">
                      <span className="flex items-center gap-2">
                        <CiDollar className="text-xl" />
                        Certifications
                      </span>
                      <span className="text-HeadingColor-0">Yes</span>
                    </div>
                    {/* Language */}
                    <div className="flex items-center justify-between border-b border-SecondaryColor-0 border-opacity-10 last:border-none">
                      <span className="flex items-center gap-2">
                        <CiDollar className="text-xl" />
                        Language
                      </span>
                      <span className="text-HeadingColor-0">English (US)</span>
                    </div>
                  </div>
                  <div className="mt-14">
                    <Link
                      to={"/about"}
                      className="primary-btn2 w-full justify-center"
                    >
                      Enroll Now
                      <HiArrowNarrowRight size={20} />
                    </Link>
                  </div>
                  <h4 className="font-Outfit text-HeadingColor-0 text-2xl mt-12 mb-5">
                    Share Now
                  </h4>
                  <ul className="flex gap-3">
                    <li>
                      <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                        <FaFacebookF />
                      </button>
                    </li>
                    <li>
                      <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                        <FaXTwitter />
                      </button>
                    </li>
                    <li>
                      <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                        <FaLinkedinIn />
                      </button>
                    </li>
                    <li>
                      <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                        <FaPinterestP />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="Container">
          <h1 className="font-Outfit text-HeadingColor-0 text-2xl sm:text-3xl md:text-[42px] font-semibold mb-[52px] text-center">
            Similiar Course You Like
          </h1>
          <div className="box-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {courses.map((course) => (
              <div key={course.id} className="box">
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
