/* eslint-disable react/prop-types */

const ProcessCard = ({
  processNumber,
  processIcon,
  processTitle,
  processDesc,
}) => {
  return (
    <div className='group text-center'>
      <h5 className='font-Outfit font-semibold text-HeadingColor-0 text-[22px]'>
        {processNumber}
      </h5>
      <div className='mt-6 xl:mt-14 mb-5'>
        <img
          src={processIcon}
          draggable={false}
          alt='Icon'
          className='mx-auto group-hover:animate-wobble_vertical'
        />
      </div>
      <h4 className='font-Outfit font-semibold text-HeadingColor-0 text-[26px]'>
        {processTitle}
      </h4>
      <p className='font-OpenSans text-TextColor2-0 max-w-[350px] md:max-w-[320px] lg:max-w-[350px] w-full mx-auto mt-1'>
        {processDesc}
      </p>
    </div>
  );
};

export default ProcessCard;
