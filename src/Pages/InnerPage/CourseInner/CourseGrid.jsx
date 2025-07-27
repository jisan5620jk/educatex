import { useState } from "react";
import CourseCard from "./CourseCard";
import courseImg1 from "/images/case-thumb1.jpg";
import courseImg2 from "/images/case-thumb2.jpg";
import courseImg3 from "/images/case-thumb3.jpg";
import courseImg4 from "/images/course-thumb3.png";
import courseImg5 from "/images/course-thumb6.png";
import courseImg6 from "/images/course-thumb5.png";
import instructorImg from "/images/case-autor.png";
import instructorImg2 from "/images/case-autor2.png";
import instructorImg3 from "/images/case-autor3.png";
import { FaList } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

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
    students: 1201,
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
    lessons: 13,
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
const CourseGrid = () => {
  const [isListView, setIsListView] = useState(false);

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="Container">
        {/* Top Bar */}
        <div className="flex items-center justify-between flex-wrap gap-7 mb-10">
          <div className="hidden md:flex items-center gap-5 bg-BodyBg-0 rounded-md px-3 py-2 max-w-[420px] w-full">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsListView(false)}
                className={`size-[38px] flex items-center justify-center text-xl rounded border ${
                  !isListView
                    ? "bg-PrimaryColor-0 text-white"
                    : "bg-transparent"
                }`}
              >
                <LuLayoutGrid />
              </button>
              <button
                onClick={() => setIsListView(true)}
                className={`size-[38px] flex items-center justify-center text-lg rounded border ${
                  isListView ? "bg-PrimaryColor-0 text-white" : "bg-transparent"
                }`}
              >
                <FaList />
              </button>
            </div>
            <span className="font-OpenSans text-HeadingColor-0 text-[15px] font-medium">
              Showing {courses.length} Result(s)
            </span>
          </div>

          <form
            action="#"
            className="flex items-center gap-5 bg-BodyBg-0 rounded-md max-w-[320px] w-full relative z-10"
          >
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              className="w-full h-[56px] border border-SecondaryColor-0 border-opacity-10 rounded-md px-5 py-2"
              required
            />
            <button
              type="submit"
              className="absolute top-1/2 -translate-y-1/2 right-7 text-TextColor-0 text-lg"
            >
              <IoSearch />
            </button>
          </form>
        </div>

        {/* Course Cards */}
        <div
          className={
            isListView
              ? "space-y-4"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} isList={isListView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
