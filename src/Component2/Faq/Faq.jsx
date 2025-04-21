import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import faqThumb from '/images/faq-thumb.png';
import icon from '/images/faq-icon.png';
import { useEffect, useRef, useState } from 'react';
import { FaMinus } from 'react-icons/fa6';
import shape from '/images/faq-circle.png';
import shape2 from '/images/faq-qestion.png';
import shape3 from '/images/faq-dot.png';
import shape4 from '/images/faq-star.png';

const faqData = [
  {
    question: 'How can I Improve my study Skills?',
    answer:
      'Educate the ultimate destination for knowledge seekers educa We are committed transforming special education impact global channel without standards compliant systems',
  },
  {
    question: 'What skills are essential for students?',
    answer:
      'Essential skills for students include critical thinking, time management, collaboration, and digital literacy.',
  },
  {
    question: 'How does technology help in education?',
    answer:
      'Technology enhances learning through interactive tools, access to vast resources, and personalized educational experiences.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item as default active
  const contentRefs = useRef([]);

  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      contentRefs.current[
        activeIndex
      ].style.maxHeight = `${contentRefs.current[activeIndex].scrollHeight}px`;
    }
    contentRefs.current.forEach((ref, index) => {
      if (index !== activeIndex && ref) {
        ref.style.maxHeight = '0';
      }
    });
  }, [activeIndex]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='bg-BodyBg-0 pt-16 md:mt-20 lg:pt-28'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 items-start'>
          <div className='relative z-10 hidden lg:block'>
            <img
              src={faqThumb}
              draggable={false}
              alt='Faq Image'
              className='mx-auto'
            />
            <div className='absolute bottom-32 left-0 px-[30px] py-5 bg-white bg-opacity-40 backdrop-filter backdrop-blur-md border-2 border-white border-opacity-40 rounded-[20px] sm:inline-flex items-center gap-4 w-[270px] animate-wiggle hidden'>
              <div>
                <img
                  src={icon}
                  draggable={false}
                  alt='Icon'
                />
              </div>
              <div>
                <h5 className='font-Outfit font-medium text-HeadingColor-0 text-[22px]'>
                  24 Hrs
                </h5>
                <p className='font-OpenSans text-TextColor-0 text-[15px]'>
                  Ready for Support
                </p>
              </div>
            </div>
            <div className='absolute top-48 right-24 hidden md:block'>
              <img
                src={shape2}
                draggable={false}
                alt='Shape'
                className='animate-rotateX'
              />
            </div>
            <div className='absolute -z-10 top-48 left-0 hidden md:block'>
              <img
                src={shape3}
                draggable={false}
                alt='Shape'
                className='animate-dance'
              />
            </div>
            <div className='absolute -z-10 top-32 left-14 hidden md:block'>
              <img
                src={shape4}
                draggable={false}
                alt='Shape'
                className='animate-rotational'
              />
            </div>
          </div>
          <div className='relative z-10'>
            <div>
              <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
                freequently asked question
              </h5>
              <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 mb-4'>
                What you want to Know About
                <br />
                Educate University?
              </h1>
            </div>
            <ul className='space-y-5 mt-8'>
              {faqData.map((faq, index) => (
                <li
                  key={index}
                  className='rounded-lg bg-white'
                >
                  <div className=''>
                    <div
                      className='cursor-pointer relative z-10'
                      onClick={() => handleToggle(index)}
                    >
                      <h5
                        className={`w-full font-Outfit text-lg sm:text-xl font-medium text-SecondaryColor-0 px-5 sm:px-[30px] py-[19px] relative z-10 before:absolute before:left-0 before:top-0 before:w-[5px] before:h-0 before:transition-all before:duration-500 before:bg-PrimaryColor-0 pr-16 sm:pr-0 ${
                          activeIndex === index
                            ? 'before:h-full rounded-b-none rounded-l-none shadow-cases'
                            : 'rounded-[10px]'
                        }`}
                      >
                        {faq.question}
                      </h5>

                      <div className='absolute top-1/2 -translate-y-1/2 right-7 flex items-center justify-center text-white size-5 rounded-full bg-PrimaryColor-0'>
                        <span
                          className={`transition-transform duration-300 ease-linear ${
                            activeIndex === index
                              ? 'translate-x-2'
                              : 'rotate-90 translate-x-2'
                          }`}
                        >
                          <FaMinus />
                        </span>
                        <span
                          className={`transition-transform duration-300 ease-linear ${
                            activeIndex === index
                              ? '-translate-x-2'
                              : '-translate-x-2 -translate-y-0'
                          }`}
                        >
                          <FaMinus />
                        </span>
                      </div>
                    </div>
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className='transition-all duration-500 overflow-hidden'
                    >
                      <p className='font-OpenSans font-medium text-[15px] sm:text-base text-TextColor2-0 pt-6 px-5 sm:px-[30px] pb-8 mr-5'>
                        <span className='text-HeadingColor-0'>Answer: </span>{' '}
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className='mt-10'>
              <Link
                to={'/about'}
                className='primary-btn2'
              >
                Learn More
                <HiArrowNarrowRight size={20} />
              </Link>
            </div>
            <div className='absolute -z-10 top-24 -right-16 hidden md:block'>
              <img
                src={shape}
                draggable={false}
                alt='shape'
                className='animate-rotational'
              />
            </div>
          </div>
          <div className='relative z-10 lg:hidden'>
            <img
              src={faqThumb}
              draggable={false}
              alt='Faq Image'
              className='mx-auto'
            />
            <div className='absolute bottom-32 left-0 px-[30px] py-5 bg-white bg-opacity-40 backdrop-filter backdrop-blur-md border-2 border-white border-opacity-40 rounded-[20px] sm:inline-flex items-center gap-4 w-[270px] animate-wiggle hidden'>
              <div>
                <img
                  src={icon}
                  draggable={false}
                  alt='Icon'
                />
              </div>
              <div>
                <h5 className='font-Outfit font-medium text-HeadingColor-0 text-[22px]'>
                  24 Hrs
                </h5>
                <p className='font-OpenSans text-TextColor-0 text-[15px]'>
                  Ready for Support
                </p>
              </div>
            </div>
            <div className='absolute top-48 right-24 hidden md:block'>
              <img
                src={shape2}
                draggable={false}
                alt='Shape'
                className='animate-rotateX'
              />
            </div>
            <div className='absolute -z-10 top-48 left-0 hidden md:block'>
              <img
                src={shape3}
                draggable={false}
                alt='Shape'
                className='animate-dance'
              />
            </div>
            <div className='absolute -z-10 top-32 left-14 hidden md:block'>
              <img
                src={shape4}
                draggable={false}
                alt='Shape'
                className='animate-rotational'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
