/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogCard = ({
  blogThumb,
  blogDate,
  blogMonth,
  blogPostIcon,
  blogPost,
  blogUrl,
  blogBtnText,
  blogTitle,
}) => {
  return (
    <div className='group bg-BodyBg-0 transition-all duration-500 rounded-md'>
      <div className='relative rounded-t-[10px] overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0'>
        <img
          src={blogThumb}
          className='transition-all duration-500 scale-100 group-hover:scale-110 w-full'
        />
        <div className='absolute top-5 left-5 px-5 py-[7px] bg-gradient-to-br from-20% to-PrimaryColor2-0 from-PrimaryColor3-0 flex items-center flex-col justify-center rounded-md'>
          <p className='font-Outfit text-[22px] text-white  font-medium'>
            {blogDate}
          </p>
          <p className='font-Outfit text-base uppercase text-white  font-medium -mt-1'>
            {blogMonth}
          </p>
        </div>
      </div>
      <div className='relative z-20 flex justify-center bg-BodyBg-0 rounded-b-[10px] transition-all duration-500 pt-3 sm:pt-5'>
        <div className='mx-auto w-full'>
          <div className='px-7 md:px-7 lg:px-[30px] 2xl:px-[30px] pb-2'>
            <p className='font-Outfit font-semibold text-HeadingColor-0 sm:text-lg flex gap-2 items-center leading-[15px]'>
              <img
                src={blogPostIcon}
                draggable={false}
                alt='UserIcon'
              />
              {blogPost}
            </p>
          </div>
          <div className='px-7 md:px-7 lg:px-[30px] 2xl:px-[30px] mt-3 border-t border-HeadingColor-0 border-opacity-10 transition-all duration-500 ease-linear group-hover:border-PrimaryColor-0 py-3 sm:py-[28px]'>
            <Link to={blogUrl}>
              <button className='font-Outfit text-left font-bold text-xl sm:text-[24px] md:text-2xl lg:text-[26px] xl:text-2xl 2xl:text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0 mb-5 lg:mr-10 xl:mr-0'>
                {blogTitle}
              </button>
            </Link>
            <Link
              to={blogUrl}
              className='inline-block'
            >
              <button className='blog-button bg-white px-7 py-[7px] rounded-full font-Outfit font-semibold text-base uppercase fle items-center gap-2 relative z-10 overflow-hidden transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:right-0 before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-300 before:ease-linear before:-z-10 group-hover:before:w-full group-hover:before:left-0'>
                {blogBtnText}
                <span className='icon-style relative left-2 -top-[1px]'>
                  <svg
                    className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500 text-HeadingColor-0 group-hover:text-white'
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
  );
};

export default BlogCard;
