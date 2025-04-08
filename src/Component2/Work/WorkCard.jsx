import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const WorkCard = ({
  workImg,
  workVideoIcon,
  workBoxLink,
  workTitle,
  workTag,
  workTag2,
}) => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className='overflow-hidden'>
      <div className='relative group before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-gradient-to-b before:from-transparent before:to-SecondaryColor-0 before:transition-all before:duration-500 hover:before:h-2/4'>
        <img
          src={workImg}
          draggable={false}
          alt='Image'
          className='w-full'
        />
        <button
          className='absolute z-10 -top-12 right-8 transition-all duration-500 group-hover:top-8 size-[46px] rounded-full flex items-center justify-center text-white bg-gradient-to-t to-PrimaryColor2-0 from-PrimaryColor3-0 text-xl'
          onClick={() => setToggler(!toggler)}
        >
          {workVideoIcon}
        </button>
        <div className='absolute z-10 w-5/6 md:w-[70%] 3xl:w-[55%] bottom-[78px] left-full opacity-0 transition-all duration-500 group-hover:left-8 group-hover:opacity-100'>
          <Link
            to={workBoxLink}
            className='font-Rajdhani font-bold text-2xl md:text-[26px] xl:text-2xl 2xl:text-[26px] leading-8 text-white'
          >
            {workTitle}
          </Link>
        </div>
        <div className='absolute bottom-[30px] -left-20 opacity-0 transition-all duration-500 group-hover:left-8 group-hover:opacity-100 z-10'>
          <ul className='flex items-center gap-3'>
            <li className='rounded font-Rajdhani px-4 py-[5px] uppercase overflow-hidden text-sm font-medium bg-white bg-opacity-20 transition-all duration-500 text-HeadingColor-0 group-hover:text-white relative z-10 before:bg-gradient-to-r before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:transition-all before:duration-500 before:scale-0 before:rounded before:-z-10 hover:before:scale-100'>
              {workTag}
            </li>
            <li className='rounded font-Rajdhani px-4 py-[5px] uppercase overflow-hidden text-sm font-medium bg-white bg-opacity-20 transition-all duration-500 text-HeadingColor-0 group-hover:text-white relative z-10 before:bg-gradient-to-r before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:transition-all before:duration-500 before:scale-0 before:rounded before:-z-10 hover:before:scale-100'>
              {workTag2}
            </li>
          </ul>
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={['https://youtu.be/NKJ-6zCSk2E?si=XQUpq01QZ8hNXLdc']}
      />
    </div>
  );
};

export default WorkCard;
