/* eslint-disable react/prop-types */

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const TeamCard = ({
  image,
  name,
  title,
  profileLink = '#',
  bgColor = 'bg-white',
}) => {
  return (
    <div className='flex flex-col items-center bg-white rounded-2xl p-3 relative z-10'>
      <div className='relative z-10 py-9 w-full flex justify-center items-center'>
        <span
          className={`absolute -z-10 top-0 left-0 h-1/2 w-full rounded-2xl ${bgColor}`}
        ></span>
        <img
          src={image}
          alt={name}
        />
      </div>

      <div className='text-center mt-1'>
        <Link to={profileLink}>
          <h3 className='font-Outfit text-[26px] text-HeadingColor-0 font-medium'>
            {name}
          </h3>
        </Link>
        <p className='font-OpenSans text-PrimaryColor-0 uppercase text-[15px] mt-1 mb-6'>
          {title}
        </p>
      </div>

      <Link
        to={profileLink}
        className={`font-Outfit rounded-full px-7 py-3 font-medium border border-SecondaryColor-0 border-opacity-10 uppercase transition-all duration-500 hover:text-white hover:border-PrimaryColor-0 relative z-10 overflow-hidden before:absolute before:right-0 before:top-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0`}
      >
        View Portfolio
      </Link>

      <ul className='flex gap-4 items-center mt-8 mb-7'>
        <li>
          <Link
            to='#'
            className='size-[38px] rounded-full flex items-center justify-center text-TextColor-0 border border-SecondaryColor-0 border-opacity-10 transition-all duration-500 hover:text-white hover:border-PrimaryColor-0 relative z-10 overflow-hidden before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 before:rotate-180 hover:before:scale-100 hover:before:rotate-0'
          >
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='size-[38px] rounded-full flex items-center justify-center text-TextColor-0 border border-SecondaryColor-0 border-opacity-10 transition-all duration-500 hover:text-white hover:border-PrimaryColor-0 relative z-10 overflow-hidden before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 before:rotate-180 hover:before:scale-100 hover:before:rotate-0'
          >
            <FaXTwitter />
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='size-[38px] rounded-full flex items-center justify-center text-TextColor-0 border border-SecondaryColor-0 border-opacity-10 transition-all duration-500 hover:text-white hover:border-PrimaryColor-0 relative z-10 overflow-hidden before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 before:rotate-180 hover:before:scale-100 hover:before:rotate-0'
          >
            <FaLinkedinIn />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
