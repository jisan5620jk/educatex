/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const CourseCard = ({
  courseImg,
  coursePrice,
  courseCategory,
  courseTitle,
  courseRating,
  courseRatingIcon,
  courseRatingIcon2,
  courseRatingContent,
  courseUrl,
  enrollBtn,
  enrollBtnIcon,
}) => {
  return (
    <div className='course-item2 bg-white p-4 xl:p-[30px] rounded-[20px] group relative z-10 overflow-hidden'>
      <div className='relative rounded-2xl overflow-hidden'>
        <div className='hover-bg'>
          <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-0'></span>
          <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
          <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-1/2'></span>
          <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
        </div>
        <img
          src={courseImg}
          alt='Course'
          draggable={false}
          className='w-full'
        />
      </div>

      <div className='sm:px-3 pt-7 text-left'>
        <span className='course-category font-Outfit text-sm px-5 py-[5px] rounded-3xl font-medium mb-3 inline-block uppercase'>
          {courseCategory}
        </span>
        <h3 className='course-title font-Outfit text-xl sm:text-2xl lg:text-[22px] xl:text-2xl font-medium text-HeadingColor-0 transition-all duration-500 2xl:mr-12'>
          {courseTitle}
        </h3>

        <div className='flex items-center gap-1 text-ReviewText-0 text-sm mt-3 mb-4'>
          {[...Array(Math.floor(courseRating))].map((_, i) => (
            <span
              key={i}
              className='text-base'
            >
              {courseRatingIcon}
            </span>
          ))}
          {courseRating % 1 !== 0 && (
            <span className='text-base'>{courseRatingIcon2}</span>
          )}
          <span className='font-Outfit ml-1 text-HeadingColor-0 text-base'>
            ({courseRating}
            {courseRatingContent})
          </span>
        </div>
        <div className='course-price text-2xl rounded-full font-Outfit font-medium mb-6'>
          {coursePrice}
        </div>
        <Link to={courseUrl}>
          <button className='course-button font-Outfit inline-flex items-center gap-2 uppercase text-sm justify-between px-7 py-[12px] border overflow-hidden rounded-full transition-all duration-500 relative z-10 before:absolute before:right-0 before:top-0 before:w-0 before:h-full before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:left-0'>
            {enrollBtn}
            <span className='text-xl'>{enrollBtnIcon}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
