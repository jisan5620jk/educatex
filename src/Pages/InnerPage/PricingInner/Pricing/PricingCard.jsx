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
  buttonTextColor,
  hoverColor,
  buttonLabel,
  buttonIcon, 
}) => {
  return (
    <div className={`rounded-xl p-8 shadow-md ${bgColor}`}>
      <div className='flex items-center gap-4 mb-6'>
        <div className={`text-3xl p-3 rounded-full ${iconColor}`}>{icon}</div>
        <div>
          <h2 className={`text-xl font-semibold ${textColor}`}>{planName}</h2>
          <p className='text-sm text-gray-500'>{targetUser}</p>
        </div>
      </div>

      <ul className='space-y-3 mb-8 text-sm'>
        {features.map((feature, idx) => (
          <li
            key={idx}
            className='flex items-center gap-2'
          >
            <span className={` ${iconColor}`}>
              {featureIcon}{' '}
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className='mb-6 text-2xl font-bold'>
        <span className={textColor}>${price}</span>
        <span className='text-sm text-gray-500'> / {billingCycle}</span>
      </div>

      <button
        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${buttonColor} ${buttonTextColor} hover:${hoverColor}`}
      >
        {buttonLabel} {buttonIcon && buttonIcon}
      </button>
    </div>
  );
};

export default PricingCard;
