/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import shape from '/images/breadcumb-dot.png';
import shape2 from '/images/breadcumb-ball.png';

const BreadCrumb = ({ breadCrumbTitle, breadCrumbIcon, breadCrumbLink }) => {
  return (
    <div className="bg-[url('/images/breadcrumb-bg.png')] bg-no-repeat bg-cover bg-left lg:bg-center flex items-center justify-start pt-36 md:pt-52 lg:pt-[258px] pb-20 md:pb-32 lg:pb-[154px] relative z-10">
      <div className='Container'>
        <h1 className='font-Outfit font-semibold text-4xl sm:text-[40px] md:text-[50px] text-HeadingColor-0 capitalize'>
          {breadCrumbTitle}
        </h1>
        <ul className='flex flex-col sm:flex-row gap-0.5 sm:gap-2 sm:items-center justify-start mt-4 sm:mt-6'>
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
            <button className='font-Outfit font-medium uppercase text-HeadingColor-0'>
              {breadCrumbLink}
            </button>
          </li>
        </ul>
      </div>
      <div className='absolute left-[40%] top-[35%] animate-wiggle hidden 2xl:block'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
        />
      </div>
      <div className='absolute right-[12%] top-[38%] animate-dance2 hidden 2xl:block'>
        <img
          src={shape2}
          draggable={false}
          alt='Shape'
        />
      </div>
    </div>
  );
};

export default BreadCrumb;
