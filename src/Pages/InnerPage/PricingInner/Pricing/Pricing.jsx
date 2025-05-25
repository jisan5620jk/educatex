import { FaDiamond } from 'react-icons/fa6';
import PricingCard from './PricingCard';
import { FaArrowRight, FaCube, FaGem } from 'react-icons/fa';
import TextReveal from '../../../../Shared/TextAnim/TextReveal';
import { useState } from 'react';
import { BsPatchCheck } from 'react-icons/bs';

const Pricing = () => {
  const [billing, setBilling] = useState('monthly');
  const pricingData = [
    {
      icon: <FaCube />,
      planName: 'Starter Plan',
      targetUser: 'Indivisual',
      features: [
        'Unlimited Websites',
        '10+ Paid Plugin',
        'Woocommerce Support',
        '50+ WP theme',
        'Free Equipments',
      ],
      featureIcon: <BsPatchCheck />,
      price: billing === 'monthly' ? 29 : (29 * 12 * 0.8).toFixed(0),
      billingCycle: billing === 'monthly' ? 'month' : 'year',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500 bg-orange-100',
      textColor: 'text-orange-600',
      buttonColor: 'bg-orange-100',
      buttonTextColor: 'text-orange-600',
      hoverColor: 'bg-orange-200',
      buttonLabel: 'PURCHASE NOW',
      buttonIcon: <FaArrowRight />,
    },
    {
      icon: <FaDiamond />,
      planName: 'Professional',
      targetUser: 'Indivisual',
      features: [
        'Unlimited Websites',
        '10+ Paid Plugin',
        'Woocommerce Support',
        '50+ WP theme',
        'Free Equipments',
      ],
      featureIcon: <BsPatchCheck />,
      price: billing === 'monthly' ? 69 : (69 * 12 * 0.8).toFixed(0),
      billingCycle: billing === 'monthly' ? 'month' : 'year',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500 bg-green-100',
      textColor: 'text-green-600',
      buttonColor: 'bg-green-500',
      buttonTextColor: 'text-white',
      hoverColor: 'bg-green-600',
      buttonLabel: 'PURCHASE NOW',
      buttonIcon: <FaArrowRight />,
    },
    {
      icon: <FaGem />,
      planName: 'Business Plan',
      targetUser: 'Indivisual',
      features: [
        'Unlimited Websites',
        '10+ Paid Plugin',
        'Woocommerce Support',
        '50+ WP theme',
        'Free Equipments',
      ],
      featureIcon: <BsPatchCheck />,
      price: billing === 'monthly' ? 99 : (99 * 12 * 0.8).toFixed(0),
      billingCycle: billing === 'monthly' ? 'month' : 'year',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500 bg-blue-100',
      textColor: 'text-blue-600',
      buttonColor: 'bg-blue-100',
      buttonTextColor: 'text-blue-600',
      hoverColor: 'bg-blue-200',
      buttonLabel: 'PURCHASE NOW',
      buttonIcon: <FaArrowRight />,
    },
  ];

  return (
    <section className='py-16 md:py-20 lg:py-28'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 inline-block relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
            pricing plan
          </h5>
          <h1 className='font-Outfit font-semibold text-lg leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4'>
            <TextReveal text='Comprehensive Course Guide and' />
            <TextReveal text='Best Fee Schedule' />
          </h1>
        </div>
        {/* Toggle Switch */}
        <div className='flex justify-center'>
          <div className='inline-flex items-center justify-center space-x-4 py-2 px-7 rounded-full border border-HeadingColor-0-0 border-opacity-10 mb-16 mt-10'>
            <span
              className={`font-Outfit transition-all duration-500 ${
                billing === 'yearly' ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              Yearly
            </span>
            <button
              onClick={() =>
                setBilling(billing === 'monthly' ? 'yearly' : 'monthly')
              }
              className={`w-[58px] h-7 flex items-center rounded-full border border-PrimaryColor-0 border-opacity-30 transition duration-500 ease-in-out bg-PrimaryColor-0 bg-opacity-10 ${
                billing === 'monthly' ? '' : ''
              }`}
            >
              <div
                className={`bg-PrimaryColor-0 size-7 rounded-full shadow-md transition duration-500 ${
                  billing === 'monthly' ? 'translate-x-7' : ''
                }`}
              />
            </button>
            <span
              className={`font-Outfit transition-all duration-500 ${
                billing === 'monthly' ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              Monthly
            </span>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
