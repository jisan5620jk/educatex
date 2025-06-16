/* eslint-disable react/prop-types */
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BreadCrumb3 = ({
  breadCrumbTitle,
  breadCrumbIcon,
  breadCrumbLink,
  url,
  breadCrumbIcon2,
  breadCrumbText,
  instructorImg,
}) => {
  return (
    <div className="bg-[url('/images/breadcrumb-bg2.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start pt-[196px] pb-[100px] relative z-10">
      <div className='Container relative'>
        <div className='absolute -bottom-32 -right-10'><img src="/images/bread-dot.png" draggable={false} alt="shape" className='animate-dance' /></div>
        <h1 className='font-Outfit font-semibold text-4xl sm:text-[40px] md:text-[50px] text-HeadingColor-0 capitalize'>
          {breadCrumbTitle}
        </h1>
        <ul className='flex flex-col sm:flex-row gap-2 sm:gap-3 sm:items-center mt-6'>
          <li>
            <Link to={'/'}>
              <button className='font-Outfit font-medium uppercase text-PrimaryColor-0 flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor2-0'>
                Home
              </button>
            </Link>
          </li>
          <li>
            <div className='text-PrimaryColor-0 text-2xl rotate-45 hidden sm:block'>
              {breadCrumbIcon}
            </div>
          </li>
          <li>
            <Link to={url}>
              <button className='font-Outfit font-medium uppercase text-PrimaryColor-0 transition-all duration-500 hover:text-PrimaryColor2-0'>
                {breadCrumbLink}
              </button>
            </Link>
          </li>
          <li>
            <div className='text-PrimaryColor-0 text-2xl rotate-45 hidden sm:block'>
              {breadCrumbIcon2}
            </div>
          </li>
          <li>
            <button className='font-Outfit font-medium uppercase text-HeadingColor-0'>
              {breadCrumbText}
            </button>
          </li>
        </ul>
        <div className='flex items-center flex-wrap gap-7 mt-14'>
          <div className='flex items-center gap-5'>
            {/* Profile Image */}
            <img
              className='size-14 rounded-full object-cover'
              src={instructorImg}
              alt='Instructor Image'
            />

            {/* Info Section */}
            <div>
              <p className='font-Outfit text-lg font-medium text-HeadingColor-0'>
                John D. Alexon
              </p>
              <p className='font-OpenSans text-TextColor-0 text-sm'>
                Instructor
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className='border-r border-SecondaryColor-0 border-opacity-20 h-12'></div>

          {/* Course Category */}
          <div className='flex flex-col justify-center'>
            <p className='font-OpenSans text-TextColor-0 text-sm'>
              Course Category
            </p>
            <p className='font-Outfit text-lg font-medium text-HeadingColor-0'>
              Business
            </p>
          </div>

          {/* Divider */}
          <div className='border-r border-SecondaryColor-0 border-opacity-20 h-12'></div>

          {/* Ratings */}
          <div className='flex flex-col justify-center'>
            <p className='font-OpenSans text-TextColor-0 text-sm'>3 Ratings</p>
            <div className='flex items-center'>
              {/* Stars */}
              {[...Array(5)].map((_, i) => {
                const starClass =
                  i < 4
                    ? 'text-ReviewText-0'
                    : 'text-ReviewText-0 text-opacity-50';
                return (
                  <div
                    key={i}
                    className={`text-[22px] ${starClass}`}
                  >
                    <IoMdStar />
                  </div>
                );
              })}
              <span className='ml-1 font-Outfit font-medium text-HeadingColor-0'>
                (4.5)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb3;



