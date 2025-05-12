/* eslint-disable react/prop-types */

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const TeamCard = ({
  image,
  name,
  title,
  profileLink = '#',
  bgColor = 'bg-white',
  buttonColor = 'bg-white',
  buttonTextColor = 'text-black',
}) => {
  return (
    <div className='flex flex-col items-center bg-white rounded-2xl p-3 w-72 space-y-4 relative z-10'>
      <div className='relative z-10 py-9 w-full flex justify-center items-center'>
        <span
          className={`absolute -z-10 top-0 left-0 h-1/2 w-full rounded-2xl ${bgColor}`}
        ></span>
        <img
          src={image}
          alt={name}
        />
      </div>

      <div className='text-center'>
        <a href={profileLink}>
          <h3 className='text-xl font-semibold hover:underline'>{name}</h3>
        </a>
        <a href={profileLink}>
          <p className='text-green-600 font-medium uppercase text-sm hover:underline'>
            {title}
          </p>
        </a>
      </div>

      <a
        href={profileLink}
        className={`rounded-full px-6 py-2 font-medium border ${buttonColor} ${buttonTextColor} border-gray-300 hover:shadow transition`}
      >
        View Portfolio
      </a>

      <div className='flex space-x-4 text-gray-500'>
        <a href='#'>
          <FaFacebookF className='hover:text-green-500' />
        </a>
        <a href='#'>
          <FaTwitter className='hover:text-green-500' />
        </a>
        <a href='#'>
          <FaLinkedinIn className='hover:text-green-500' />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
