/* eslint-disable react/prop-types */
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { GoArrowRight } from 'react-icons/go';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { PiUsersThree } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, isList }) => {
  return (
    <div
      className={`p-3 lg:p-5 rounded-[20px] bg-white border border-SecondaryColor-0 border-opacity-10 hover:border-PrimaryColor-0 transition-all duration-500 group relative z-10 overflow-hidden !pb-7 ${
        isList ? 'flex gap-4 !pb-3' : ''
      }`}
    >
      <div
        className={`w-full relative rounded-2xl overflow-hidden ${
          isList ? 'max-w-[520px]' : ''
        }`}
      >
        <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 z-10 bg-PrimaryColor-0 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-0'></span>
        <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 z-10 bg-PrimaryColor-0 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
        <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 z-10 bg-PrimaryColor-0 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-1/2'></span>
        <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 z-10 bg-PrimaryColor-0 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
        <img
          src={course.img}
          alt='Course'
          draggable={false}
          className='w-full'
        />
        <span
          className={`absolute z-20 bottom-5 left-5 font-Outfit text-sm px-5 py-[5px] rounded-3xl inline-block text-white bg-PrimaryColor-0 ${
            isList ? 'hidden' : ''
          }`}
        >
          {course.category}
        </span>
      </div>

      <div className='sm:px-3 pt-6 text-left'>
        <span
          className={`font-Outfit text-sm px-5 py-[5px] rounded-3xl font-medium mb-4 hidden text-PrimaryColor-0 bg-PrimaryColor-0 bg-opacity-10 border border-PrimaryColor-0 border-opacity-30 ${
            isList ? '!inline-block' : ''
          }`}
        >
          {course.category}
        </span>
        <h3 className='font-Outfit text-xl sm:text-2xl lg:text-[22px] xl:text-2xl font-medium text-HeadingColor-0 transition-all duration-500 2xl:mr-12 group-hover:text-PrimaryColor-0'>
          {course.title}
        </h3>

        <div className='flex items-center gap-1 text-ReviewText-0 mt-3 mb-4'>
          {[...Array(Math.floor(course.rating))].map((_, i) => (
            <BsStarFill
              key={i}
              className='text-ReviewText-0'
            />
          ))}
          {course.rating % 1 !== 0 && (
            <BsStarHalf className='text-ReviewText-0' />
          )}
          <span className='font-Outfit ml-1 text-HeadingColor-0 text-base'>
            ({course.rating}
            {course.ratingContent})
          </span>
        </div>
        <div className='text-PrimaryColor-0 text-2xl font-Outfit mb-3'>
          {course.price}
        </div>

        <div className='flex items-center gap-3 mb-5 mt-2'>
          <img
            src={course.instructorImg}
            alt='Instructor'
          />
          <div>
            <h5 className='font-Outfit text-lg font-medium text-HeadingColor-0'>
              {course.instructor}
            </h5>
            <p className='font-OpenSans text-[15px] text-TextColor-0'>
              Instructor
            </p>
          </div>
        </div>

        <div className='relative'>
          <div
            className={`flex items-center gap-10 transition-all duration-500 group-hover:opacity-0 ${
              isList ? 'group-hover:opacity-100' : ''
            }`}
          >
            <div
              className={`font-Outfit text-HeadingColor-0 flex items-center gap-1`}
            >
              <IoDocumentTextOutline
                size={18}
                className='text-PrimaryColor-0'
              />
              {course.lessons} Lessons
            </div>
            <div
              className={`font-Outfit text-HeadingColor-0 flex items-center gap-2`}
            >
              <PiUsersThree
                size={18}
                className='text-PrimaryColor-0'
              />
              {course.students} Students
            </div>
          </div>
          <Link to='/course'>
            <button
              className={`absolute left-0 -bottom-20 font-Outfit inline-flex items-center gap-2 uppercase text-sm justify-between px-7 py-[12px] bg-PrimaryColor-0 border z-10 overflow-hidden rounded-full text-white transition-all duration-500 group-hover:-bottom-4 ${
                isList ? '-bottom-16 group-hover:-bottom-16' : ''
              }`}
            >
              Enroll Now
              <span className='text-xl'>
                <GoArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
