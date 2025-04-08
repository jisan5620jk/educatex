/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  socialIcon4,
  teamTitle,
  teamDesc,
}) => {
  return (
    <div className='group relative bg-BodyBg7-0 rounded-[10px]'>
      <div className='relative overflow-hidden'>
        <img
          src={teamThumb}
          className='w-full'
        />
        <div className='absolute z-20 -bottom-10 left-[29%] transition-all duration-300 group-hover:bottom-8'>
          <Link to={'/'}>
            <button className='size-10 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              {socialIcon}
            </button>
          </Link>
        </div>
        <div className='absolute z-20 -bottom-10 left-[41%] transition-all duration-500 group-hover:bottom-8'>
          <Link to={'/'}>
            <button className='size-10 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              {socialIcon2}
            </button>
          </Link>
        </div>
        <div className='absolute z-20 -bottom-10 left-[53%] transition-all duration-700 group-hover:bottom-8'>
          <Link to={'/'}>
            <button className='size-10 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              {socialIcon3}
            </button>
          </Link>
        </div>
        <div className='absolute z-20 -bottom-10 left-[65%] transition-all duration-[900ms] group-hover:bottom-8'>
          <Link to={'/'}>
            <button className='size-10 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              {socialIcon4}
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-transparent relative transition-all duration-500 rounded-md text-center pt-3 sm:pt-7 pb-3 sm:pb-7 rounded-b-md'>
        <h5 className='font-Outfit font-semibold text-2xl sm:text-3xl text-HeadingColor-0 transition-all duration-500'>
          {teamTitle}
        </h5>
        <p className='font-OpenSans text-TextColor2-0 transition-all duration-500 mt-1'>
          {teamDesc}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
