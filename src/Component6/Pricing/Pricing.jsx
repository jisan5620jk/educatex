// Pricing.jsx
import { useState } from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
  const [billing, setBilling] = useState('monthly');

  const plans = [
    {
      title: 'SILVER PLAN',
      price: billing === 'monthly' ? 149 : (149 * 12 * 0.8).toFixed(0),
      bgColor: 'bg-[#F3F0E9]',
      textColor: 'text-black',
      buttonColor: 'bg-[#F3F0E9] text-black hover:opacity-90',
    },
    {
      title: 'GOLD PLAN',
      price: billing === 'monthly' ? 159 : (159 * 12 * 0.8).toFixed(0),
      bgColor: 'bg-[#E1F4EF]',
      textColor: 'text-green-600',
      buttonColor: 'bg-green-500 text-white hover:bg-green-600',
    },
    {
      title: 'DIAMOND PLAN',
      price: billing === 'monthly' ? 169 : (169 * 12 * 0.8).toFixed(0),
      bgColor: 'bg-[#EAF4E8]',
      textColor: 'text-black',
      buttonColor: 'bg-[#EAF4E8] text-black hover:opacity-90',
    },
  ];

  const features = [
    'Pricing at a Glance',
    'Course & Fee Overview',
    'Transparent Pricing Hidden Fees',
    'Best Plan for Your Learning',
    'Simple & Clear Pricing',
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 py-16 text-center'>
      {/* Toggle Switch */}
      <div className='flex items-center justify-center space-x-4 mb-10'>
        <span
          className={`text-lg font-medium transition-all duration-500 ${
            billing === 'yearly' ? 'text-gray-900' : 'text-gray-400'
          }`}
        >
          Yearly
        </span>
        <button
          onClick={() =>
            setBilling(billing === 'monthly' ? 'yearly' : 'monthly')
          }
          className={`w-14 h-8 flex items-center rounded-full p-1 transition duration-500 ease-in-out bg-PrimaryColor-0 bg-opacity-10 ${
            billing === 'monthly' ? '' : ''
          }`}
        >
          <div
            className={`bg-PrimaryColor-0 w-6 h-6 rounded-full shadow-md transition duration-500 ${
              billing === 'monthly' ? 'translate-x-6' : ''
            }`}
          />
        </button>
        <span
          className={`text-lg font-medium transition-all duration-500 ${
            billing === 'monthly' ? 'text-gray-900' : 'text-gray-400'
          }`}
        >
          Monthly
        </span>
      </div>

      {/* Pricing Cards */}
      <div className='grid md:grid-cols-3 gap-8'>
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            {...plan}
            features={features}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
