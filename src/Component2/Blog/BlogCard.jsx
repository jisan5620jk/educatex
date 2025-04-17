/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogCard = ({
  blogThumb,
  blogDate,
  blogPostIcon,
  blogPost,
  blogUrl,
  blogTitle,
  blogBtnText,
  blogBtnIcon,
}) => {
  return (
    <div className='group transition-all duration-500 rounded-[20px] p-3 sm:p-6'>
      <div className='blog-thumb relative rounded-[10px] overflow-hidden'>
        <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-0'></span>
        <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
        <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-1/2'></span>
        <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
        <img
          src={blogThumb}
          className='w-full'
        />
        <p className='absolute z-10 bottom-5 left-5 px-4 py-[2px] rounded-full font-Outfit text-white text-sm sm:text-base flex gap-2 items-center leading-[15px]'>
          {blogDate}
        </p>
      </div>
      <div className='relative z-20 rounded-lg transition-all duration-500 px-3 pb-3'>
          <p className='font-Outfit font-medium text-HeadingColor-0 flex gap-3 items-center mt-7 mb-4'>
            <img
              src={blogPostIcon}
              draggable={false}
              alt='UserIcon'
            />
            {blogPost}
          </p>
          <Link to={blogUrl}>
            <button className='blog-title font-Outfit text-left font-medium text-lg sm:text-[22px] md:text-xl lg:text-2xl xl:text-[21px] 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0 mb-7'>
              {blogTitle}
            </button>
          </Link>
          <Link to={blogUrl}>
            <button className='blog-button font-Outfit flex items-center justify-between w-full pl-8 pr-6 py-[13px] border relative z-10 overflow-hidden rounded-full transition-all duration-500 group-hover:!text-white before:absolute before:left-0 before:top-0 before:w-full before:h-full before:transition-all before:duration-500 before:-z-10'>
              {blogBtnText}
              <span className='text-2xl'>{blogBtnIcon}</span>
            </button>
          </Link>
      </div>
    </div>
  );
};

export default BlogCard;
