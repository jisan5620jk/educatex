import { FaChevronDown, FaRegEnvelope, FaRegUser } from 'react-icons/fa6';
import faqIcon from '/images/AI-2-2.png';
import faqIcon2 from '/images/AI-2-1-1.png';
import faqIcon3 from '/images/AI-2-2-1.png';
import Shape from '/images/AI-2-3.png';
import Shape2 from '/images/AI-5.png';
import { useState, useRef, useEffect } from 'react';
import titleShape from '/images/sub-title-shape.png';
import { RiSendPlaneFill } from 'react-icons/ri';

const faqs = [
  {
    id: 1,
    question: 'How does your robot working?',
    answer:
      'Competently leverage existing top line client centric supply enthusiastically maximi effective technologies',
    icon: faqIcon,
  },
  {
    id: 2,
    question: 'How are Robot’s Power?',
    answer:
      'Competently leverage existing top line client centric supply enthusiastically maximi effective technologies',
    icon: faqIcon2,
  },
  {
    id: 3,
    question: 'Can Robot works safely?',
    answer:
      'Competently leverage existing top line client centric supply enthusiastically maximi effective technologies',
    icon: faqIcon3,
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item as default active
  const contentRefs = useRef([]);

  useEffect(() => {
    if (activeIndex !== null) {
      contentRefs.current[
        activeIndex
      ].style.maxHeight = `${contentRefs.current[activeIndex].scrollHeight}px`;
    }
    contentRefs.current.forEach((ref, index) => {
      if (index !== activeIndex) {
        ref.style.maxHeight = '0';
      }
    });
  }, [activeIndex]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='pt-20 md:pt-28 lg:pt-[145px] relative'>
      <img
        src={Shape}
        draggable='false'
        alt='Shape'
        className='absolute bottom-6 right-20 animate-wiggle hidden 3xl:block'
      />
      <div className='absolute top-32 right-20 animate-dance3 hidden md:block'>
        <img
          src={Shape2}
          draggable='false'
          alt='Shape'
        />
      </div>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-8 xl:gap-0 lg:grid-cols-2 items-center'>
          <div className='bg-[url("/images/AI-2-13.png")] bg-cover bg-center rounded-[20px] overflow-hidden px-4 sm:px-8 md:px-[50px] pt-4 sm:pt-8 md:pt-[50px] pb-5 sm:pb-9 md:pb-[64px] max-w-[520px] w-full text-center'>
            <h3 className='font-Outfit font-bold text-2xl sm:text-3xl md:text-[40px] text-white'>
              Send A Message
            </h3>
            <p className='font-OpenSans text-TextColor-0 mb-9 mt-2 md:-mt-[2px]'>
              Write Us Something sending a message
            </p>
            <form
              action='https://formspree.io/f/xayrekgy'
              method='post'
              className='space-y-5'
            >
              <div className='relative'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Your Name'
                  required
                  className='h-[60px] w-full rounded-md pl-[80px] text-white font-OpenSans bg-white bg-opacity-5 outline-none border-2 border-transparent transition-all duration-500 ease-linear hover:border-PrimaryColor-0 focus:border-PrimaryColor-0'
                />
                <span className='absolute top-0 left-0 size-[60px] flex items-center justify-center text-white text-opacity-40 border-r border-white border-opacity-10'>
                  <FaRegUser />
                </span>
              </div>
              <div className='relative'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Your E-Mail'
                  required
                  className='h-[60px] w-full rounded-md pl-[80px] text-white font-OpenSans bg-white bg-opacity-5 outline-none border-2 border-transparent transition-all duration-500 ease-linear hover:border-PrimaryColor-0 focus:border-PrimaryColor-0'
                />
                <span className='absolute top-0 left-0 size-[60px] flex items-center justify-center text-white text-opacity-40 border-r border-white border-opacity-10'>
                  <FaRegEnvelope />
                </span>
              </div>
              <div className='relative'>
                <select
                  className='h-[60px] w-full cursor-pointer rounded-md pl-[80px] text-white font-OpenSans bg-white bg-opacity-5 outline-none border-2 border-transparent transition-all duration-500 ease-linear hover:border-PrimaryColor-0 focus:border-PrimaryColor-0'
                  defaultValue=''
                >
                  <option
                    value=''
                    disabled
                  >
                    Select Subject
                  </option>
                  <option
                    value='math'
                    className='bg-HeadingColor-0'
                  >
                    Mathematics
                  </option>
                  <option
                    value='science'
                    className='bg-HeadingColor-0'
                  >
                    Science
                  </option>
                  <option
                    value='history'
                    className='bg-HeadingColor-0'
                  >
                    History
                  </option>
                  <option
                    value='literature'
                    className='bg-HeadingColor-0'
                  >
                    Literature
                  </option>
                </select>

                <span className='absolute top-0 left-0 size-[60px] flex items-center justify-center text-white text-opacity-40 border-r border-white border-opacity-10'>
                  <RiSendPlaneFill size={20} />
                </span>
              </div>
              <div className='relative'>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Write Message...'
                  className='min-h-[150px] w-full rounded-md px-7 py-3 resize-none text-white font-OpenSans bg-white bg-opacity-5 outline-none border-2 border-transparent transition-all duration-500 ease-linear hover:border-PrimaryColor-0 focus:border-PrimaryColor-0'
                ></textarea>
              </div>
              <button
                type='submit'
                className='primary-btn !rounded-md !w-full'
              >
                {`Send Message`}
                <span className='icon-style'>
                  <svg
                    className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='CurrentColor'
                    width='14.2'
                    height='14.2'
                    viewBox='0 0 14.2 14.2'
                  >
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                  </svg>
                </span>
              </button>
            </form>
          </div>
          <div>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              ASKED QUESTION
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Frequently Asked Question for
              <br />
              Robotics Industry
            </h1>
            <ul className='space-y-[26px] mt-7'>
              {faqs.map((faq, index) => (
                <li key={index}>
                  <div className='flex gap-2 sm:gap-5 group px-4 sm:px-8 py-3 sm:py-7 bg-white bg-opacity-45 border-2 border-white rounded-[10px] shadow-cases'>
                    <div>
                      <img
                        src={faq.icon}
                        draggable={false}
                        alt='Icon'
                        className='transition-all duration-500 group-hover:animate-wobble_vertical'
                      />
                    </div>
                    <div className='flex-1'>
                      <div
                        className={`faq-expand-btn cursor-pointer flex items-center justify-between  ${
                          activeIndex === index ? 'active' : ''
                        }`}
                        onClick={() => handleToggle(index)}
                      >
                        <h5 className='font-Outfit font-semibold text-xl sm:text-2xl text-HeadingColor-0'>
                          {faq.question}
                        </h5>
                        <span
                          className={`transition-transform duration-300 ${
                            activeIndex === index ? 'rotate-0' : '-rotate-90'
                          }`}
                        >
                          <FaChevronDown />
                        </span>
                      </div>
                      <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        className='max-h-0 overflow-hidden transition-all duration-500'
                      >
                        <p className='font-OpenSans text-TextColor2-0 w-[90%] pt-2'>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
