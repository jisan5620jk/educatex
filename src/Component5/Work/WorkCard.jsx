import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const WorkCard = ({ workImg, workBoxLink, workSubTitle, workTitle }) => {
  return (
    <div className='overflow-hidden'>
      <div className='relative group rounded-[10px] overflow-hidden before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-full before:bg-gradient-to-b before:from-transparent before:to-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:opacity-0'>
        <img
          src={workImg}
          draggable={false}
          alt='Image'
          className='w-full'
        />
        <div className='absolute z-10 w-full left-0 sm:left-[60px] md:left-0 lg:left-16 xl:left-20 2xl:left-24 3xl:left-[118px] px-2 sm:px-0 md:px-4 2xl:pl-10 2xl:pr-0 3xl:px-0 -bottom-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100'>
          <div className='bg-gradient-to-r to-BodyBg-0 via-white from-BodyBg-0 rounded-t-[10px] pt-4 sm:pt-8 pb-3 sm:pb-[26px] px-4 md:px-10 relative'>
            <h5 className='font-Rajdhani font-semibold text-lg uppercase text-PrimaryColor-0 inline-block border border-SecondaryColor-0 border-opacity-20 rounded-full px-[22px] py-[2px] mb-[10px]'>
              {workSubTitle}
            </h5>
            <Link
              to={workBoxLink}
              className='font-Rajdhani block font-semibold text-xl sm:text-2xl md:text-[24px] xl:text-2xl 2xl:text-[26px] leading-8 text-HeadingColor-0'
            >
              {workTitle}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
