/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BreadCrumb = ({ breadCrumbTitle, breadCrumbIcon, breadCrumbLink }) => {
  return (
    <div className="bg-[url('/images/breadcrumb-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start pt-[250px] pb-[150px]">
      <div className='Container'>
        <h1 className='font-Outfit font-semibold text-4xl sm:text-[40px] md:text-[50px] text-HeadingColor-0 capitalize'>
          {breadCrumbTitle}
        </h1>
        <ul className='flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center justify-start mt-6'>
          <li>
            <Link to={'/'}>
              <button className='font-Outfit font-medium text-PrimaryColor-0 flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0'>
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
            <button className='font-Outfit font-medium capitalize text-HeadingColor-0'>
              {breadCrumbLink}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
