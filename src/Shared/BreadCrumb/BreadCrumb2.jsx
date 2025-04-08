/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BreadCrumb2 = ({
  breadCrumbTitle,
  breadCrumbIcon,
  url,
  breadCrumbLink,
}) => {
  return (
    <div className="bg-[url('/images/breatcumbs.webp')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[400px] sm:h-[500px] pt-[70px] lg:pt-[86px]">
      <div className='Container'>
        <div className='text-center'>
          <h1 className='font-Outfit font-bold text-4xl sm:text-[44px] md:text-[55px] text-HeadingColor-0 capitalize'>
            {breadCrumbTitle}
          </h1>
          <ul className='flex flex-col sm:flex-row sm:gap-4 sm:items-center justify-center mt-3 md:mt-6'>
            <li>
              <Link to={'/'}>
                <button className='font-Outfit font-semibold text-lg text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0'>
                  Home
                </button>
              </Link>
            </li>
            <li>
              <div className='text-PrimaryColor-0 hidden sm:block'>
                {breadCrumbIcon}
              </div>
            </li>
            <li>
              <Link to={url}>
                <button className='font-Outfit font-semibold text-lg capitalize text-PrimaryColor-0'>
                  {breadCrumbLink}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb2;
