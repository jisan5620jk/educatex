/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const CourseCard = ({
  hoverBg,
  img,
  categoryColor,
  category,
  title,
  rating,
  RatingIcon,
  RatingIcon2,
  ratingContent,
  textColor,
  price,
  Url,
  btnColor,
  enrollBtn,
  enrollBtnIcon,
}) => {
  return (
    <div className='course-item2 bg-white p-4 xl:p-[30px] rounded-[20px] group relative z-10 overflow-hidden'>
      <div className='relative rounded-2xl overflow-hidden'>
        <span
          className={`absolute left-[12.5%] top-0 h-full w-0 ${hoverBg} transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-0`}
        ></span>
        <span
          className={`absolute left-[37.5%] top-0 h-full w-0 ${hoverBg} transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[25%]`}
        ></span>
        <span
          className={`absolute left-[62.5%] top-0 h-full w-0 ${hoverBg} transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-1/2`}
        ></span>
        <span
          className={`absolute left-[87.5%] top-0 h-full w-0 ${hoverBg} transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[75%]`}
        ></span>
        <img
          src={img}
          alt='Course'
          draggable={false}
          className='w-full'
        />
      </div>

      <div className='sm:px-3 lg:px-0 xl:px-3 pt-7 text-left'>
        <span
          className={`${categoryColor} font-Outfit text-sm px-5 py-[5px] rounded-3xl font-medium mb-3 inline-block border uppercase`}
        >
          {category}
        </span>
        <h3
          className='font-Outfit text-xl sm:text-2xl md:text-[22px] lg:text-xl 2xl:text-[22px] 3xl:text-2xl font-medium text-HeadingColor-0 transition-all duration-500 2xl:mr-12'
        >
          {title}
        </h3>

        <div className='flex items-center gap-1 text-ReviewText-0 text-sm mt-3 mb-4'>
          {[...Array(Math.floor(Number(rating) || 0))].map((_, i) => (
            <span
              key={i}
              className='text-base'
            >
              {RatingIcon}
            </span>
          ))}

          {rating % 1 !== 0 && (
            <span className='text-base'>{RatingIcon2}</span>
          )}

          <span className='font-Outfit ml-1 text-HeadingColor-0 text-base'>
            ({rating}
            {ratingContent})
          </span>
        </div>

        <div
          className={`${textColor} text-2xl rounded-full font-Outfit font-medium mb-6`}
        >
          {price}
        </div>
        <Link to={Url}>
          <button
            className={`${btnColor} font-Outfit inline-flex items-center gap-2 uppercase text-sm justify-between px-7 py-[12px] border overflow-hidden rounded-full transition-all duration-500 relative z-10 before:absolute before:right-0 before:top-0 before:w-0 before:h-full before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:left-0 group-hover:text-white`}
          >
            {enrollBtn}
            <span className='text-xl'>{enrollBtnIcon}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
