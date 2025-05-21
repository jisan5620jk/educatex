/* eslint-disable react/prop-types */

import { GiCheckMark } from "react-icons/gi";

const PricingCard = ({
  title,
  price,
  pricingPlan,
  features,
  bgColor,
  buttonColor,
  textColor,
}) => {
  return (
    <div className='group rounded-2xl p-7 bg-white flex flex-col items-center shadow-shades'>
      <div className={`w-full pt-12 pb-10 rounded-xl text-center ${bgColor}`}>
        <h3 className='font-Outfit text-xl font-medium mb-2'>{title}</h3>
        <p className='font-Outfit text-[45px] font-semibold'>
          <span className={`${textColor} transition-all duration-500`}>
            ${price}
          </span>
          <span className='font-OpenSans text-[17px] text-HeadingColor-0 font-normal'>
            / {pricingPlan}
          </span>
        </p>
      </div>

      <ul className='mt-[50px] mb-[60px] space-y-[22px] text-sm text-gray-800'>
        {features.map((feature, index) => (
          <li
            key={index}
            className='flex items-center gap-2 font-OpenSans text-[17px] font-medium'
          >
            <span className='text-PrimaryColor-0'>
              <GiCheckMark />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`mb-3 w-full rounded-full py-3 font-Outfit font-medium text-[17px] transition-all duration-500 group-hover:text-white overflow-hidden relative z-10 before:absolute before:right-0 before:top-0 before:w-0 before:h-full before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:left-0 ${buttonColor}`}
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
