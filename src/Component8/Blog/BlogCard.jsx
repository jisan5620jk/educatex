/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogCard = ({
  blogThumb,
  blogPostIcon,
  blogPost,
  blogUrl,
  blogBtnText,
  blogTitle,
}) => {
  return (
    <div className='group transition-all duration-500 rounded-md overflow-hidden'>
      <div className='relative rounded-[10px] overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0'>
        <img
          src={blogThumb}
          className='transition-all duration-500 scale-100 group-hover:scale-110 w-full'
        />
        <div className='absolute z-20 left-1/2 -translate-x-1/2 bottom-0 w-[calc(100%-20px)] sm:w-[calc(100%-40px)] mx-auto flex justify-center bg-BodyBg8-0 rounded-t-lg transition-all duration-500 px-3 md:px-5 lg:px-[30px] 2xl:px-[30px] pt-3 sm:pt-5 md:pt-7 xl:-mb-2 group-hover:pb-10'>
          <div className='mx-auto relative w-full'>
            <p className='font-Outfit font-semibold text-HeadingColor-0 sm:text-lg flex gap-2 items-center leading-[15px]'>
              <img
                src={blogPostIcon}
                draggable={false}
                alt='UserIcon'
              />
              {blogPost}
            </p>
            <Link to={blogUrl}>
              <button className='font-Outfit text-left font-semibold text-lg leading-6 sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-5 sm:mr-14 md:mr-0'>
                {blogTitle}
              </button>
            </Link>
            <div className='absolute -bottom-16 left-0 opacity-0 transition-all duration-500 group-hover:-bottom-10 group-hover:opacity-100 flex items-center justify-between'>
              <Link
                to={blogUrl}
                className='inline-block'
              >
                <button className='blog-button font-Outfit font-semibold text-lg uppercase fle items-center gap-2'>
                  {blogBtnText}
                  <span className='icon-style relative left-2 -top-[1px]'>
                    <svg
                      className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-3 w-auto transition-all duration-500 text-HeadingColor-0'
                      xmlns='http://www.w3.org/2000/svg'
                      stroke='CurrentColor'
                      width='14.2'
                      height='14.2'
                      viewBox='0 0 14.2 14.2'
                    >
                      <g>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      </g>
                      <g>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
