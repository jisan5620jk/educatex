/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const CourseCard = ({
  image,
  category,
  price,
  title,
  rating,
  ratingCount,
  description,
  readMoreText,
  readMoreUrl,
  readMoreIcon,
  bottomRightIcon,
  starIcon,
}) => {
  return (
    <div className='group rounded-[20px] overflow-hidden flex flex-col md:flex-row'>
      <div className='w-full overflow-hidden relative z-10 before:absolute before:-left-3/4 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r before:to-transparent before:via-white before:from-transparent before:-skew-x-[20deg] before:opacity-50 group-hover:before:animate-shine'>
        <img
          src={image}
          alt={title}
          className='w-full md:w-[inherit] md:max-w-[inherit] h-auto object-cover'
          draggable={false}
        />
      </div>
      <div className='bg-BodyBg2-0 -ml-[76px] rounded-[20px] pl-10 pr-8 flex items-center w-full relative z-10 overflow-hidden'>
        <span className='absolute left-[12.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
        <span className='absolute left-[37.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
        <span className='absolute left-[62.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
        <span className='absolute left-[87.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
        <div>
          <div className='flex justify-between items-center mb-2.5'>
            <span className='font-OpenSans text-[15px] text-PrimaryColor-0 bg-PrimaryColor-0 bg-opacity-10 border border-PrimaryColor-0 border-opacity-30 px-5 py-1 rounded-full uppercase transition-all duration-500 group-hover:bg-white group-hover:bg-opacity-10 group-hover:border-white group-hover:border-opacity-30 group-hover:text-white'>
              {category}
            </span>
            <span className='font-Outfit font-medium text-HeadingColor-0 uppercase transition-all duration-500 group-hover:text-white'>
              {price}
            </span>
          </div>

          <h3 className='font-Outfit text-xl md:text-2xl font-medium text-HeadingColor-0 border-b border-SecondaryColor-0 group-hover:border-white group-hover:border-opacity-20 border-opacity-10 transition-all duration-500 group-hover:text-white pb-4 mb-[2px]'>
            {title}
          </h3>

          <div className='flex items-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white'>
            {[...Array(Math.floor(rating))].map((_, index) => (
              <span
                key={index}
                className='text-PrimaryColor-0 text-xl transition-all duration-500 group-hover:text-white'
              >
                {starIcon}
              </span>
            ))}
            <span className='font-OpenSans text-sm text-HeadingColor-0 transition-all duration-500 group-hover:text-white ml-2'>
              ({ratingCount})
            </span>
          </div>

          <p className='font-OpenSans text-TextColor-0 transition-all duration-500 group-hover:text-white'>
            {description}
          </p>
          <div className='flex items-center justify-between'>
            <div className='inline-block overflow-hidden'>
              <Link
                to={readMoreUrl}
                className='inline-flex gap-2 items-center font-Outfit text-HeadingColor-0 uppercase transition-all duration-500 -ml-[100px] group-hover:ml-0 group-hover:text-white'
              >
                {readMoreText} <span className='text-xl'>{readMoreIcon}</span>
              </Link>
            </div>
            <div className=''>
              <img
                src={bottomRightIcon}
                draggable={false}
                alt='Shape'
                className='animate-flip transition-all duration-500 group-hover:brightness-0 group-hover:invert'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
