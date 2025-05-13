/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const CourseCard = ({
  image,
  category,
  categoryColor,
  title,
  price,
  author,
  authorIcon,
  lessons,
  lessonIcon,
  duration,
  durationIcon,
  courseLink,
  bgColor,
  hoverBgColor,
  hoverTextColor,
  textColor,
}) => {
  return (
    <div className={`group rounded-xl overflow-hidden ${bgColor} p-4`}>
      <div className='relative rounded-xl overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full rounded-lg'
        />
        <span
          className={`absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 z-10 ${hoverBgColor} group-hover:opacity-0 group-hover:w-[25%] group-hover:left-0`}
        ></span>
        <span
          className={`absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 z-10 ${hoverBgColor} group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[25%]`}
        ></span>
        <span
          className={`absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 z-10 ${hoverBgColor} group-hover:opacity-0 group-hover:w-[25%] group-hover:left-1/2`}
        ></span>
        <span
          className={`absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 z-10 ${hoverBgColor} group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[75%]`}
        ></span>
      </div>

      <div className='px-3'>
        <div className='flex justify-between items-center mt-9 mb-6'>
          <span
            className={`font-OpenSans text-[15px] px-5 py-[5px] rounded-3xl inline-block uppercase border ${categoryColor}`}
          >
            {category}
          </span>
          <span className='font-Outfit font-medium text-HeadingColor-0'>
            {price}
          </span>
        </div>

        <Link
          to={courseLink}
          className={`mt-3 font-Outfit text-lg font-semibold text-HeadingColor-0 transition-all duration-500 uppercase ${hoverTextColor}`}
        >
          {title}
        </Link>
        <hr className='bg-SecondaryColor-0 bg-opacity-15 mt-4' />
        <div className='flex items-center gap-2 mt-5'>
          <span
            className={`size-9 rounded-full flex items-center justify-center text-white ${hoverBgColor}`}
          >
            {authorIcon}
          </span>
          <span className='font-Outfit text-TextColor-0 text-lg'>{author}</span>
        </div>

        <div className='flex items-center gap-8 font-OpenSans text-gray-500 mt-7 mb-4'>
          <div className='flex items-center gap-2'>
            <span className={`text-xl ${textColor}`}>{lessonIcon}</span>{' '}
            {lessons}
          </div>
          <div className='flex items-center gap-2'>
            <span className={`text-[17px] ${textColor}`}>{durationIcon}</span>{' '}
            {duration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
