/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogListCard = ({
  blogThumb,
  blogDate,
  blogPostIcon,
  blogPost,
  blogUrl,
  blogTitle,
  blogBtnText,
  blogBtnIcon,
  bgColor = 'bg-white',
  spanBg = 'bg-gray-200',
  dateBg = 'bg-gray-300',
  titleHover = 'group-hover:text-black',
  borderColor = 'border-gray-300',
  buttonBg = 'bg-white',
  buttonText = 'text-black',
  buttonBefore = 'before:bg-black',
}) => {
  return (
    <div
      className={`group transition-all duration-500 rounded-[20px] p-3 sm:p-6 lg:p-4 xl:p-6 ${bgColor}`}
    >
      <div className="blog-thumb relative rounded-[10px] overflow-hidden">
        <span
          className={`absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:bg-opacity-0 group-hover:w-[25%] group-hover:left-0 ${spanBg}`}
        ></span>
        <span
          className={`absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:bg-opacity-0 group-hover:w-[25%] group-hover:left-[25%] ${spanBg}`}
        ></span>
        <span
          className={`absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:bg-opacity-0 group-hover:w-[25%] group-hover:left-1/2 ${spanBg}`}
        ></span>
        <span
          className={`absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:bg-opacity-0 group-hover:w-[25%] group-hover:left-[75%] ${spanBg}`}
        ></span>
        <img src={blogThumb} className="w-full" />
        <p
          className={`absolute z-10 bottom-5 left-5 px-4 py-[2px] rounded-full font-Outfit text-white text-sm sm:text-base flex gap-2 items-center leading-[15px] ${dateBg}`}
        >
          {blogDate}
        </p>
      </div>
      <div className="relative z-20 rounded-lg transition-all duration-500 px-3 pb-3 lg:px-0 lg:pb-0 xl:px-3 xl:pb-3">
        <p className="font-Outfit font-medium text-HeadingColor-0 flex gap-3 items-center mt-7 mb-4">
          <img src={blogPostIcon} draggable={false} alt="UserIcon" />
          {blogPost}
        </p>
        <Link to={blogUrl}>
          <button
            className={`blog-title font-Outfit text-left font-medium text-lg sm:text-[22px] md:text-xl xl:text-[22px] 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 mb-7 ${titleHover}`}
          >
            {blogTitle}
          </button>
        </Link>
        <Link to={blogUrl}>
          <button
            className={`blog-button font-Outfit flex items-center justify-between w-full pl-8 pr-6 py-[13px] border relative z-10 overflow-hidden rounded-full transition-all duration-500 group-hover:!text-white 
            ${borderColor} ${buttonBg} ${buttonText} before:absolute before:left-0 before:top-0 before:w-full before:h-full before:[clip-path:polygon(50%_0,_50%_0,_50%_50%,_50%_100%,_50%_100%,_50%_50%)] before:transition-all before:duration-500 before:-z-10 group-hover:before:[clip-path:polygon(_25%_-70%,_75%_-70%,_120%_50%,_75%_170%,_25%_170%,_-20%_50%_)] ${buttonBefore}`}
          >
            {blogBtnText}
            <span className="text-2xl">{blogBtnIcon}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogListCard;
