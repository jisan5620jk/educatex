/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const ProgramsCard = ({
  img,
  category,
  title,
  programsUrl,
  programsDesc,
  categoryColor,
  hoverText,
}) => {
  return (
    <div className='bg-white p-4 xl:p-[30px] rounded-[20px] group relative z-10 overflow-hidden'>
      <div className='relative overflow-hidden before:absolute before:-left-3/4 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r before:to-transparent before:via-white before:from-transparent before:-skew-x-[20deg] before:opacity-50 group-hover:before:animate-shine'>
        <img
          src={img}
          alt='programs'
          draggable={false}
          className='w-full'
        />
      </div>

      <div className='pt-7 pb-2 text-center'>
        <h6
          className={`${categoryColor} font-Outfit text-sm px-5 py-[5px] rounded-3xl font-medium mb-4 inline-block uppercase`}
        >
          {category}
        </h6>

        <Link
          to={programsUrl}
          className={`${hoverText} font-Outfit text-xl sm:text-2xl md:text-[22px] lg:text-xl 2xl:text-[22px] 3xl:text-2xl block font-medium text-HeadingColor-0 transition-all duration-500`}
        >
          {title}
        </Link>
        <p className='font-OpenSans text-TextColor-0 max-w-[326px] w-full mx-auto mt-4'>
          {programsDesc}
        </p>
      </div>
    </div>
  );
};

export default ProgramsCard;
