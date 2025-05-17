/* eslint-disable react/prop-types */
import { MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CourseCard = ({
  title,
  category,
  price,
  lessons,
  duration,
  tutor,
  rating,
  courseLink,
  durationIcon,
  lessonIcon,
  textColor,
  bgColor,
  authorIcon,
  image,
  categoryColor,
  hoverTextColor,
  hoverBgColor,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-9 items-center p-5 rounded-2xl ${bgColor}`}
    >
      <div className='relative rounded-xl overflow-hidden'>
        <img
          src={image}
          alt={title}
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
      <div className='flex-1'>
        <div className='flex justify-between items-center mb-6'>
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
          className={`mt-3 font-Outfit text-xl font-semibold text-HeadingColor-0 transition-all duration-500 uppercase ${hoverTextColor}`}
        >
          {title}
        </Link>
        <div className='flex items-center gap-8 font-OpenSans border-t border-HeadingColor-0 border-opacity-20 pt-5 mt-4 mb-7'>
          <div className='flex items-center gap-2 font-OpenSans text-TextColor-0'>
            <span className={`text-xl ${textColor}`}>{lessonIcon}</span>{' '}
            {lessons}
          </div>
          <div className='flex items-center gap-2 font-OpenSans text-TextColor-0'>
            <span className={`text-[17px] ${textColor}`}>{durationIcon}</span>{' '}
            {duration}
          </div>
        </div>
        <div className='flex items-center gap-2 text-sm text-gray-800'>
          <div className='flex items-center gap-4'>
            <span
              className={`size-9 rounded-full flex items-center justify-center text-white ${hoverBgColor}`}
            >
              {authorIcon}
            </span>
            <span className='font-Outfit text-TextColor-0 text-lg'>
              {tutor}
            </span>
          </div>
          <span className={`flex items-center ${textColor} ml-3`}>
            {[...Array(5)].map((_, i) => (
              <MdStar
                key={i}
                className='text-xl'
              />
            ))}
            <span className='text-HeadingColor-0 font-Outfit ml-1'>
              ({rating})
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
