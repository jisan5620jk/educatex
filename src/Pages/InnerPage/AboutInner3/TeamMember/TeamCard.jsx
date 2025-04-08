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
  teamShareIcon,
}) => {
  return (
    <div className='group relative p-2 sm:p-[30px] bg-white rounded-[10px]'>
      <div className='relative overflow-hidden'>
        <img
          src={teamThumb}
          className='w-full'
        />
        <div className='absolute -bottom-[10px] right-5'>
          <div className='relative'>
            <button className=' w-[50px] h-[50px] rounded-t-full transition-all duration-500 overflow-hidden bg-gradient-to-t to-PrimaryColor2-0 from-PrimaryColor3-0 relative z-30 text-white flex justify-center items-center text-lg'>
              {teamShareIcon}
            </button>
            <ul className='flex flex-col gap-4 justify-center mb-[6px] transition-all duration-500'>
              <li className='absolute z-20 bottom-0 right-[5px] transition-all duration-300 group-hover:bottom-[62px]'>
                <Link to={'/'}>
                  <button className='size-10 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    {socialIcon}
                  </button>
                </Link>
              </li>
              <li className='absolute z-20 bottom-0 right-[5px] transition-all duration-500 group-hover:bottom-[109px]'>
                <Link to={'/'}>
                  <button className='size-10 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    {socialIcon2}
                  </button>
                </Link>
              </li>
              <li className='absolute z-20 bottom-0 right-[5px] transition-all duration-700 group-hover:bottom-[156px]'>
                <Link to={'/'}>
                  <button className='size-10 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    {socialIcon3}
                  </button>
                </Link>
              </li>
              <li className='absolute z-20 bottom-0 right-[5px] transition-all duration-700 group-hover:bottom-[202px]'>
                <Link to={'/'}>
                  <button className='size-10 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    {socialIcon4}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-transparent relative transition-all duration-500 rounded-md text-center pt-3 sm:pt-[22px] rounded-b-md">
        <h5 className='font-Rajdhani font-semibold text-2xl sm:text-[28px] text-HeadingColor-0 transition-all duration-500'>
          {teamTitle}
        </h5>
        <p className='font-Nunito text-TextColor2-0 transition-all duration-500 mt-1'>
          {teamDesc}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
