/* eslint-disable react/prop-types */
const PricingCard = ({
  icon,
  planName,
  targetUser,
  features,
  featureIcon,
  price,
  billingCycle,
  bgColor,
  iconColor,
  textColor,
  buttonColor,
  buttonLabel,
  buttonIcon, 
}) => {
  return (
    <div
      className={`rounded-xl px-7 sm:px-10 lg:px-7 xl:px-10 pt-8 sm:pt-[52px] pb-8 sm:pb-[50px] group ${bgColor}`}
    >
      <div className='flex items-center gap-5'>
        <div
          className={`size-[76px] lg:size-[72px] xl:size-[76px] flex items-center justify-center border border-opacity-30 rounded-full relative z-10 overflow-hidden before:absolute before:right-0 before:top-0 before:w-full before:h-full before:scale-0 before:rounded-full before:transition-all before:duration-500 before:-z-10 group-hover:before:scale-100 ${iconColor}`}
        >
          <img
            src={icon}
            draggable={false}
            alt='Icon'
            className='transition-all duration-500 group-hover:invert group-hover:brightness-0 group-hover:animate-wobble_vertical'
          />
        </div>
        <div>
          <h2
            className={`font-Outfit text-2xl font-medium text-HeadingColor-0`}
          >
            {planName}
          </h2>
          <p className='font-OpenSans text-TextColor-0 pt-[2px]'>
            {targetUser}
          </p>
        </div>
      </div>

      <ul className='space-y-3 mb-2.5 mt-9'>
        {features.map((feature, idx) => (
          <li
            key={idx}
            className={`flex items-center gap-2 font-OpenSans text-TextColor-0 border-b border-dashed border-SecondaryColor-0 border-opacity-15 pb-2.5 ${
              idx === features.length - 1 ? 'border-none' : ''
            }`}
          >
            <span className={`text-lg ${textColor}`}>{featureIcon}</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className='mb-6'>
        <span className={` font-Outfit font-semibold text-[46px] ${textColor}`}>
          ${price}
        </span>
        <span className={`font-Outfit text-HeadingColor-0`}>
          {' '}
          / {billingCycle}
        </span>
      </div>

      <button
        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-opacity-10 border border-opacity-25 transition-all duration-500 ${buttonColor} relative z-10 overflow-hidden group-hover:text-white before:absolute before:right-0 before:top-0 before:w-0 before:h-full before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:left-0`}
      >
        {buttonLabel} {buttonIcon && buttonIcon}
      </button>
    </div>
  );
};

export default PricingCard;
