/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogListCard = ({
  blogListImg,
  thumbContent,
  blogListTitle,
  postBy,
  postDateIcon,
  postDate,
  postFrom,
  postFromIcon,
  blogListDesc,
  blogListUrl,
  blogListBtnText,
  blogListBtnIcon,
}) => {
  return (
    <div className='group'>
      <div className='relative overflow-hidden rounded-t-md'>
        <img
          src={blogListImg}
          className='w-full transition-all duration-500 group-hover:scale-105'
        />
        <div className='absolute top-7 -left-20 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:left-7'>
          <h6 className='font-Rajdhani font-medium text-white text-lg px-5 py-1 rounded-md overflow-hidden bg-PrimaryColor-0 relative z-10'>
            {thumbContent}
          </h6>
        </div>
      </div>
      <div className='bg-white rounded-b-md border-x border-b border-HeadingColor-0 border-opacity-10 relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:left-auto before:w-0 before:h-full before:bg-gradient-to-r before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:transition-all before:duration-700 before:-z-10 group-hover:before:left-0 group-hover:before:right-auto group-hover:before:w-full'>
        <div className='px-4 md:px-10 pt-4 md:pt-8'>
          <div className='flex flex-wrap sm:items-center gap-2 sm:gap-7 mb-[18px] relative'>
            <h6 className='font-Nunito text-TextColor2-0 font-medium transition-all duration-500 group-hover:text-white group-hover:text-opacity-70 relative z-10 pl-9 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:bg-white'>
              {postBy}
            </h6>
            <h6 className='flex items-center gap-2 transition-all duration-500 group-hover:text-white group-hover:text-opacity-70 font-Nunito text-TextColor2-0 font-medium'>
              <span className='text-PrimaryColor-0 relative bottom-[1px] transition-all duration-500 group-hover:text-white'>{postDateIcon}</span>
              {postDate}
            </h6>
            <h6 className='flex items-center gap-2 transition-all duration-500 group-hover:text-white group-hover:text-opacity-70 font-Nunito text-TextColor2-0 font-medium'>
              <span className='text-PrimaryColor-0 relative bottom-[1px] transition-all duration-500 group-hover:text-white'>{postFromIcon}</span>
              {postFrom}
            </h6>
          </div>
          <Link to={blogListUrl}>
            <button className='font-Rajdhani font-bold text-left text-xl sm:text-2xl md:text-3` text-HeadingColor-0 transition-all duration-500 group-hover:text-white'>
              {blogListTitle}
            </button>
          </Link>
          <p className='font-Nunito text-TextColor2-0 transition-all duration-500 max-w-[752px] w-full group-hover:text-white group-hover:text-opacity-70 mt-4 pb-5 md:pb-8'>
            {blogListDesc}
          </p>
        </div>
        <div className='px-4 md:px-10 py-3 md:py-6 border-t border-HeadingColor-0 transition-all duration-500 ease-linear group-hover:border-white border-opacity-10 group-hover:border-opacity-20'>
          <Link
            to={blogListUrl}
            className='inline-block'
          >
            <button className='flex items-center gap-2 font-Rajdhani text-lg text-HeadingColor-0 transition-all duration-500 group-hover:text-white font-semibold relative z-10 before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0'>
              {blogListBtnText}
              {blogListBtnIcon}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogListCard;
