import { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

/* eslint-disable react/prop-types */
const PricingAccordion = ({ children, faqIcon, title, id, active = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div className='mb-5 rounded-md overflow-hidden'>
      <h2>
        <button
          className='faq-button2 rounded-md flex items-center justify-between pl-4 pr-2 md:pl-7 md:pr-6 lg:pl-6 lg:pr-4 xl:pl-7 xl:pr-6 py-4 w-full text-left font-semibold font-OpenSans hover:bg-PrimaryColor-0 transition-all duration-500 group bg-white border border-BorderColor2-0'
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span
            className={`text-HeadingColor-0 transition !leading-5 duration-400 group-hover:text-white text-base sm:text-lg flex items-center gap-4 ${
              accordionOpen && '!text-white'
            }`}
          >
            <img
              src={faqIcon}
              draggable='false'
              className='size-[30px] transition-all duration-500'
            />
            <span>{title}</span>
          </span>
          <FaAngleDown
            className={`text-HeadingColor-0 bg-transparent transition duration-400 group-hover:text-white ${
              accordionOpen && ' !text-white rotate-180'
            }`}
          />
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role='region'
        aria-labelledby={`accordion-title-${id}`}
        className={`grid font-OpenSans font-light leading-[26px] text-TextColor2-0 bg-white px-4 md:px-7 lg:px-6 xl:px-7 overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='overflow-hidden'>
          <p className='pb-6 pt-6 text-sm sm:text-base font-OpenSans'>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingAccordion;
