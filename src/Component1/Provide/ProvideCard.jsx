import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const ProvideCard = ({
  provideBoxIcon,
  provideBoxTitle,
  provideBoxDesc,
  provideBoxBtnUrl,
  provideBoxBtnText,
  provideBoxBtnIcon,
}) => {
  return (
    <div className='group bg-BodyBg-0 rounded-lg py-5 sm:py-9 md:py-5 xl:py-9 px-4 md:px-[30px] lg:px-4 xl:px-[30px] relative z-10 overflow-hidden transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:right-0 before:bg-[#fdf6f0] before:w-0 before:h-full before:transition-all before:duration-300 before:ease-linear before:-z-10 hover:before:w-full hover:before:left-0'>
      <div className='flex gap-4 sm:gap-7 lg:gap-4 xl:gap-7 items-center'>
        <div className='size-[60px] sm:size-[72px] lg:size-[60px] xl:s rounded-lg bg-BodyBg2-0 relative z-10 flex items-center justify-center overflow-hidden before:absolute before:top-0 before:left-0 before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-full before:h-full before:scale-0 before:rotate-180 before:transition-all before:rounded-md before:duration-300 before:-z-10 before:ease-linear group-hover:before:scale-100 group-hover:before:rotate-0'>
          <img
            src={provideBoxIcon}
            draggable={false}
            alt='Icon'
            className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1] group-hover:animate-wobble_vertical'
          />
        </div>
        <h4 className='flex-1 font-Rajdhani leading-6 sm:leading-7 font-semibold text-SecondaryColor-0 text-lg sm:text-2xl md:text-xl lg:text-[19px] 2xl:text-2xl'>
          {provideBoxTitle}
        </h4>
      </div>
      <p className='font-Nunito text-TextColor2-0 mt-5 mb-8'>
        {provideBoxDesc}
      </p>
      <div className='inline-block'>
        <Link
          to={provideBoxBtnUrl}
          className='bg-BodyBg2-0 px-8 py-[9px] text-lg rounded-full flex items-center gap-2 font-Rajdhani font-semibold relative z-10 overflow-hidden transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:right-0 before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-300 before:ease-linear before:-z-10 group-hover:before:w-full group-hover:before:left-0'
        >
          {provideBoxBtnText}
          {provideBoxBtnIcon}
        </Link>
      </div>
    </div>
  );
};

export default ProvideCard;
