/* eslint-disable react/prop-types */
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CategoryBox = ({
  Icon,
  title,
  subtitle,
  categoryUrl,
  bgColor = 'bg-white',
}) => {
  return (
    <div
      className={`w-[218px] 2xl:w-[200px] 3xl:w-[218px] flex flex-col items-center justify-between px-6 py-10 rounded-2xl ${bgColor} transition`}
    >
      <div>
        <img
          src={Icon}
          draggable={false}
          alt='Icon'
        />
      </div>
      <div className='text-center mt-11 mb-[38px]'>
        <h4 className='foont-Outfit text-lg 2xl:text-base 3xl:text-lg text-HeadingColor-0 font-semibold'>
          {title}
        </h4>
        <p className='foont-Outfit text-lg 2xl:text-base 3xl:text-lg text-HeadingColor-0 font-semibold'>
          {subtitle}
        </p>
      </div>
      <Link
        to={categoryUrl}
        className='bg-white rounded-full size-11 text-PrimaryColor-0 transition-all duration-500 hover:text-white flex justify-center items-center relative z-10 overflow-hidden before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:rotate-180 before:scale-0 hover:before:scale-100 hover:before:rotate-0'
      >
        <FiArrowRight size={22} />
      </Link>
    </div>
  );
};

export default CategoryBox;
