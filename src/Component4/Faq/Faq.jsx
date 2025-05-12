import faqThumb from '/images/faq-thumb2.png';
import React, { useState, useRef } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import shape from '/images/faq-shape83.png';
import shape2 from '/images/faq-shape84.png';
import shape3 from '/images/faq-shape82.png';
import shape4 from '/images/faq-shape81.png';

const faqs = [
  {
    question: 'What are the five pillars of Islam?',
    answer:
      'You can start by finding reputable online platforms structured Quranic studies, or Islamic lectures. Many platforms offer courses beginners as well as advanced learners.',
  },
  {
    question: 'Can I learn Islam online?',
    answer:
      'Yes, there are many online resources including classes, courses, and mentors available to help you learn Islam at your own pace.',
  },
  {
    question: 'How can I start learning Islam online?',
    answer:
      'Start by choosing a trusted platform, set learning goals, and begin with beginner-friendly courses or materials.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className='py-16 md:py-20 lg:py-28 bg-[url("/images/faq-bg2.png")] bg-cover bg-center bg-no-repeat relative z-10 overflow-hidden'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-end'>
          <div>
            <h5 className='font-OpenSans font-medium text-sm text-SecondaryColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor2-0 before:rounded-full before:size-[9px]'>
              Free Consultation
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-4 mb-8 md:mb-[62px]'>
              10+ Years of Excellence in
              <br />
              Distance <span className='text-PrimaryColor-0'>Learnings</span>
            </h1>
            <div>
              <img
                src={faqThumb}
                draggable={false}
                alt='Faq Image'
              />
            </div>
          </div>
          <div className='max-w-[602px] w-full lg:ml-auto'>
            <p className='font-OpenSans text-TextColor-0 text-[17px] w-full max-w-[575px] mt-7 lg:mt-0 mb-9'>
              Memorizing the Quran (Hifz) brings immense spiritual rewards,
              strengs memory, and increases closeness to
            </p>
            <div className='mt-10 space-y-[30px]'>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const ref = (contentRefs.current[index] ||= React.createRef());

                return (
                  <div
                    key={index}
                    className={`rounded-xl transition-all duration-500 border border-SecondaryColor-0 border-opacity-20 ${
                      isOpen ? 'bg-white border-transparent' : 'bg-transparent'
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`w-full flex items-center justify-between fotn-Outfit text-xl sm:text-[22px] text-left pl-3 sm:pl-[30px] pr-3.5 py-2.5 rounded-t-xl transition-colors duration-500 ${
                        isOpen
                          ? 'bg-PrimaryColor-0 text-white font-semibold'
                          : 'text-HeadingColor-0 font-semibold'
                      }`}
                    >
                      <span className='flex-1'>{faq.question}</span>

                      {isOpen ? (
                        <div className='size-7 sm:size-10 rounded-full bg-white flex items-center justify-center'>
                          <FiMinus className='text-SecondaryColor-0 text-lg sm:text-[22px]' />
                        </div>
                      ) : (
                        <div className='size-7 sm:size-10 rounded-full border border-SecondaryColor-0 border-opacity-20 flex items-center justify-center'>
                          <FiPlus className='text-SecondaryColor-0 text-lg sm:text-[22px]' />
                        </div>
                      )}
                    </button>

                    {/* Collapsible content with auto height */}
                    <div
                      ref={ref}
                      style={{
                        maxHeight: isOpen
                          ? `${ref.current?.scrollHeight}px`
                          : '0px',
                      }}
                      className='overflow-hidden transition-all duration-500 ease-in-out'
                    >
                      <div className='font-OpenSans text-TextColor-0 text-[17px] px-3 sm:px-6 py-4 sm:py-7'>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-32 right-[38%] hidden lg:block'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
          className='animate-dance'
        />
      </div>
      <div className='absolute bottom-28 left-28 hidden lg:block'>
        <img
          src={shape2}
          draggable={false}
          alt='Shape'
          className='animate-flip'
        />
      </div>
      <div className='absolute top-28 right-24 hidden lg:block'>
        <img
          src={shape3}
          draggable={false}
          alt='Shape'
          className='animate-flip'
        />
      </div>
      <div className='absolute -z-10 -top-[32%] -right-6 hidden lg:block'>
        <img
          src={shape4}
          draggable={false}
          alt='Shape'
          className='animate-dance'
        />
      </div>
    </section>
  );
};

export default Faq;
