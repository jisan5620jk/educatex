import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import courseImg1 from "/images/case-thumb1.jpg";
import courseImg2 from "/images/case-thumb2.jpg";
import courseImg3 from "/images/case-thumb3.jpg";
import courseImg4 from "/images/course-thumb3.png";
import courseImg5 from "/images/course-thumb6.png";
import courseImg6 from "/images/course-thumb5.png";
import instructorImg from "/images/case-autor.png";
import instructorImg2 from "/images/case-autor2.png";
import instructorImg3 from "/images/case-autor3.png";
import InstructorInfo from "./InstructorInfo";
import CourseCard from "./CourseCard";

import BoxReveal from "../../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

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
  {
    id: 4,
    img: courseImg4,
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
    id: 5,
    img: courseImg5,
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
    id: 6,
    img: courseImg6,
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

const InstructorDetails = () => {
  // Box Reveal

  BoxReveal();

  // Text Reveal

  TextReveal();

  // Image Reveal

  ImageReveal();

  return (
    <>
      <HelmetChanger title={"Instructor Details Page"} />
      <BreadCrumb2
        breadCrumbTitle={"Instructor Details"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={"Instructor Details"}
      />
      <InstructorInfo />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="Container">
          <h1 className="font-Outfit text-HeadingColor-0 text-2xl sm:text-3xl md:text-[42px] font-semibold mb-[52px] text-center">
            Browse My all Course
          </h1>
          <div className="box-row grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
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

export default InstructorDetails;
