/* eslint-disable react/prop-types */

const WhyChooseCard = ({
  whyChooseBoxIcon,
  whyChooseBoxTitle,
  whyChooseBoxDesc,
}) => {
  return (
    <div className='group max-w-[490px] w-full bg-SecondaryColor-0 bg-opacity-5 rounded-lg py-4 sm:py-[27px] px-4 sm:px-[30px] relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:bg-gradient-to-t before:to-PrimaryColor3-0 before:from-PrimaryColor2-0 before:w-0 before:h-full before:transition-all before:duration-300 before:ease-linear before:-z-10 hover:before:w-full hover:before:left-0'>
      <div className='flex gap-5 items-center'>
        <div className='relative z-10 flex items-center justify-center'>
          <img
            src={whyChooseBoxIcon}
            draggable={false}
            alt='Icon'
            className='w-10 sm:w-[inherit] group-hover:animate-wobble_vertical'
          />
        </div>
        <div className='flex-1'>
          <h4 className='font-Rajdhani why-choose-title leading-7 font-semibold text-HeadingColor-0 text-lg sm:text-xl md:text-2xl transition-all duration-500 group-hover:text-white'>
            {whyChooseBoxTitle}
          </h4>
          <p className='font-Nunito why-choose-desc text-sm sm:text-base text-TextColor2-0 transition-all duration-500 group-hover:text-white mt-1'>
            {whyChooseBoxDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCard;
