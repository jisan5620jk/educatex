/* eslint-disable react/prop-types */

const PricingCard = ({
  title,
  price,
  features,
  bgColor,
  buttonColor,
  textColor,
}) => {
  return (
    <div className='rounded-2xl p-6 bg-white flex flex-col items-center shadow-shades'>
      <div
        className={`w-full p-6 rounded-xl text-center ${bgColor} ${textColor}`}
      >
        <h3 className='text-lg font-semibold mb-2'>{title}</h3>
        <p className='text-3xl font-bold'>
          ${price}
          <span className='text-base font-normal text-gray-600'> / month</span>
        </p>
      </div>

      <ul className='mt-6 space-y-3 text-sm text-gray-800'>
        {features.map((feature, index) => (
          <li
            key={index}
            className='flex items-center gap-2'
          >
            <span className='text-green-500 text-lg'>✓</span> {feature}
          </li>
        ))}
      </ul>

      <button
        className={`mt-6 w-full rounded-full py-3 font-semibold transition duration-300 ${buttonColor}`}
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
