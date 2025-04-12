/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  teamTitle,
  teamUrl,
  teamDesc,
  ratingFill,
  ratingHalf,
  ratingContant,
}) => {
  return (
    <div className='group relative bg-BodyBg7-0 rounded-[20px] p-5'>
      <div className='team-thumb overflow-hidden rounded-[14px] relative z-10 before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:transition-all before:duration-500 group-hover:before:h-full'>
        <img
          src={teamThumb}
          alt='Team Image'
          className='w-full'
        />
        <div className='absolute z-20 -bottom-10 left-[25%] transition-all duration-300 group-hover:bottom-5'>
          <Link to={'/'}>
            <button className='size-9 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-30 border border-white transition-all duration-500 hover:text-PrimaryColor-0 text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              {socialIcon}
            </button>
          </Link>
        </div>
        <div className='absolute z-20 -bottom-10 left-[43%] transition-all duration-500 group-hover:bottom-5'>
          <Link to={'/'}>
            <button className='size-9 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-30 border border-white transition-all duration-500 hover:text-PrimaryColor-0 text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              {socialIcon2}
            </button>
          </Link>
        </div>
        <div className='absolute z-20 -bottom-10 left-[61%] transition-all duration-700 group-hover:bottom-5'>
          <Link to={'/'}>
            <button className='size-9 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-30 border border-white transition-all duration-500 hover:text-PrimaryColor-0 text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              {socialIcon3}
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-transparent relative transition-all duration-500 rounded-md text-center pt-3 sm:pt-7 pb-1 rounded-b-md'>
        <div>
          <Link
            to={teamUrl}
            className='font-Outfit font-medium text-2xl text-HeadingColor-0 transition-all duration-500'
          >
            {teamTitle}
          </Link>
        </div>
        <p className='team-desc bg-PrimaryColor-0 bg-opacity-10 border border-PrimaryColor-0 border-opacity-30 font-Outfit text-sm text-PrimaryColor-0 px-5 py-[5px] rounded-3xl font-medium mt-3 inline-block'>
          {teamDesc}
        </p>
        <div className='flex items-center justify-center gap-1 text-ReviewText-0 text-[15px] mt-[19px]'>
          {ratingFill}
          {ratingFill}
          {ratingFill}
          {ratingFill}
          {ratingHalf}
          <span className='font-Outfit ml-1 text-HeadingColor-0 text-base'>
            {ratingContant}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
