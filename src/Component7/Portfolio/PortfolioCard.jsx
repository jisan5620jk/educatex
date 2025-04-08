/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const PortfolioCard = ({
  portfolioThumb,
  portfolioIcon,
  portfolioTitle,
  portfolioDesc,
  portfolioUrl,
  portfolioBtn,
}) => {
  return (
    <div>
      <div className='relative z-10 overflow-hidden group'>
        <div className='rounded-lg relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:h-full group-hover:before:top-0 before:z-10 group-hover:before:opacity-0'>
          <img
            src={portfolioThumb}
            draggable={false}
            className='w-full'
          />
        </div>
        <div className='relative z-10 ml-4 sm:ml-[60px] lg:ml-7 xl:ml-[60px] pt-7 -mt-[136px] bg-white rounded-b-[10px] rounded-l-[10px] pl-4 sm:pl-8 border-PrimaryColor-0 transition-all duration-500 group-hover:pb-16 group-hover:-mt-[222px] shadow-shade overflow-hidden before:absolute before:bottom-0 before:-right-full before:w-[198px] before:h-[190px] before:bg-no-repeat before:bg-right-bottom before:bg-[url("/images/port-content-shape.png")] before:transition-all before:duration-500 group-hover:before:right-0'>
          <div className='mb-4'>
            <img
              src={portfolioIcon}
              draggable={false}
              alt='Icon'
              className='group-hover:animate-wobble_vertical'
            />
          </div>
          <Link to={portfolioUrl}>
            <button className='font-Outfit font-bold text-xl sm:text-[26px] lg:text-2xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0 text-left max-w-[220px] w-full transition-all duration-500 group-hover:text-PrimaryColor-0'>
              {portfolioTitle}
            </button>
          </Link>
          <p className='font-OpenSans text-TextColor2-0 mt-2 pb-5 max-w-[260px] w-full transition-all duration-500 group-hover:pb-10'>
            {portfolioDesc}
          </p>
          <Link
            to={portfolioUrl}
            className='-rotate-90 xl:rotate-0 transition-all duration-500 absolute -bottom-7 opacity-0 left-8 group-hover:bottom-8 group-hover:opacity-100'
          >
            <button className='size-[42px] rounded-full text-xl flex items-center justify-center text-white bg-gradient-to-b to-PrimaryColor2-0 from-PrimaryColor3-0'>
              {portfolioBtn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
