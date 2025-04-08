import serviceItemThumb from '/images/faqs-thumb.webp';
import serviceThumb from '/images/faqs-right.webp';
import titleShape from '/images/sub-title-shape.png';
import { useEffect, useRef, useState } from 'react';
import { FaCheck, FaMinus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import ProgressBar from 'react-animated-progress-bar';
import './service.css';

const serviceData = [
  {
    id: 1,
    itemTitle: 'Security Consulting',
    itemBoxTitle: 'Key Features',
    thumb: serviceItemThumb,
    btnTitle: 'Details',
    btnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    itemTitle: 'Watchful Eyes CCTV',
    itemBoxTitle: 'Key Features',
    thumb: serviceItemThumb,
    btnTitle: 'Details',
    btnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    itemTitle: 'IntelliView Surveillance',
    itemBoxTitle: 'Key Features',
    thumb: serviceItemThumb,
    btnTitle: 'Details',
    btnIcon: <GoArrowRight />,
  },
  {
    id: 4,
    itemTitle: 'SecureScope Solutions',
    itemBoxTitle: 'Key Features',
    thumb: serviceItemThumb,
    btnTitle: 'Details',
    btnIcon: <GoArrowRight />,
  },
];

const serviceListData = [
  {
    id: 1,
    listIcon: <FaCheck />,
    listTitle: 'Clear and Detailed Footage',
  },
  {
    id: 2,
    listIcon: <FaCheck />,
    listTitle: 'Maintaining Security around Clock',
  },
  {
    id: 3,
    listIcon: <FaCheck />,
    listTitle: 'Install and Setup Softwares',
  },
];

const Service = () => {
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
    <section className='bg-BodyBgDark6-0 py-16 md:py-20 lg:py-28 relative z-10'>
      <div className='Container'>
        <div className='flex flex-col md:flex-row md:items-center justify-between'>
          <div>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
                className='brightness-0 invert-[1]'
              />{' '}
              WHAT WE PROVIDE
            </h5>
            <h1 className='font-Outfit font-bold text-[40px] leading-[42px] sm:text-[50px] sm:leading-[52px] md:text-[60px] md:leading-[72px] lg:text-[60px] lg:leading-[62px] xl:text-[70px] xl:leading-[72px] 2xl:text-[80px] 2xl:leading-[82px] text-white mt-[14px] mb-4'>
              Services we Provide
            </h1>
          </div>
          <div>
            <Link
              to={'/service'}
              className='service-btn group relative z-10 overflow-hidden size-[140px] rounded-full bg-white bg-opacity-10 text-center font-Outfit text-lg leading-6 font-semibold uppercase text-white flex flex-col justify-center items-center'
            >
              All <br />
              Services <br />
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
              <span className='absolute left-4 bottom-0 -z-10 size-7 rounded-full bg-PrimaryColor-0 inline-block ease-in transition-all duration-500 group-hover:size-[180px] group-hover:-left-10 group-hover:-bottom-6'></span>
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 relative z-10 mt-5'>
          <div>
            <ul className=''>
              {serviceData.map((serviceItem, index) => (
                <li
                  key={index}
                  className={`border-white border-opacity-10 ${
                    index === 0 ? 'border-t-none' : 'border-t'
                  }`}
                >
                  <div className=''>
                    <div
                      className={`cursor-pointer flex items-center justify-between py-5 ${
                        activeIndex === index ? 'active' : ''
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <h5 className='font-Outfit font-semibold text-xl sm:text-2xl md:text-3xl text-white'>
                        {serviceItem.itemTitle}
                      </h5>
                      <div className='relative flex items-center'>
                        <span
                          className={`transition-transform duration-300 ${
                            activeIndex === index
                              ? 'translate-x-[10px] text-PrimaryColor2-0 translate-y-[2px]'
                              : 'rotate-90 translate-x-[11px] text-white text-opacity-50'
                          }`}
                        >
                          <FaMinus />
                        </span>
                        <span
                          className={`transition-transform duration-300 ${
                            activeIndex === index
                              ? '-translate-x-[4px] text-PrimaryColor2-0 translate-y-[2px]'
                              : '-translate-x-[5px] -translate-y-0 text-white text-opacity-50'
                          }`}
                        >
                          <FaMinus />
                        </span>
                      </div>
                    </div>
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className='max-h-0 overflow-hidden transition-all duration-500 gap-8'
                    >
                      <div className='flex flex-col sm:flex-row items-center gap-8 border-t border-white border-opacity-10 py-7'>
                        <div>
                          <img
                            src={serviceItem.thumb}
                            draggable={false}
                            alt='thumb'
                            className='transition-all duration-500'
                          />
                        </div>
                        <div>
                          <h4 className='font-Outfit font-semibold text-[28px] text-white'>
                            {serviceItem.itemBoxTitle}
                          </h4>
                          <ul className='space-y-3 mt-[14px] mb-7'>
                            {serviceListData.map((serviceList, index) => (
                              <li
                                key={index}
                                className='font-OpenSans text-white text-opacity-60 flex items-center gap-2'
                              >
                                <span className='text-PrimaryColor2-0'>
                                  {serviceList.listIcon}
                                </span>
                                {serviceList.listTitle}
                              </li>
                            ))}
                          </ul>
                          <div className='inline-block'>
                            <Link
                              to={'/service_details'}
                              className='flex justify-start items-center gap-1 text-sm bg-gradient-to-t to-PrimaryColor2-0 from-PrimaryColor3-0 text-white pl-6 pr-5 py-[6px] uppercase font-Outfit font-medium rounded-full'
                            >
                              {serviceItem.btnTitle}
                              {serviceItem.btnIcon}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='border-t border-white border-opacity-10 max-w-[536px] w-full lg:mt-[76px] lg:ml-auto'>
            <p className='font-OpenSans text-white text-opacity-60 pt-6'>
              Distinctively matrix highly efficient niches rather than
              market-driven core Seamlessly maximize dynamic initiatives rather
              sustainable best practices. negotiate efficient synergy
              multidisciplinary
            </p>
            <div className='my-7'>
              <img
                src={serviceThumb}
                draggable={false}
                alt='Service Image'
              />
            </div>
            <div>
              <h5 className='font-Outfit font-semibold text-xl text-white relative z-20 mb-[9px]'>
                Expert Technician
              </h5>
              <div className='relative z-10 service-progress'>
                <ProgressBar
                  rect
                  width='100%'
                  height='7px'
                  fontColor='#ffffff'
                  fontSize='20px'
                  leading='10px'
                  margin='0px'
                  rectBorderRadius='10px'
                  fontWeight='600'
                  percentage='85'
                  defColor={{
                    excellent: '#eff3ff',
                    good: '#eff3ff',
                    fair: 'green',
                    poor: 'red',
                  }}
                  trackPathColor='#ffffff24'
                  trackBorderColor='transparent'
                  trackPathBorderRadius='6px'
                />
              </div>
            </div>
            <div className='mt-6'>
              <h5 className='font-Outfit font-semibold text-xl text-white relative z-20 mb-[9px]'>
                Client Satisfaction
              </h5>
              <div className='relative z-10 service-progress'>
                <ProgressBar
                  rect
                  width='100%'
                  height='7px'
                  fontColor='#ffffff'
                  fontSize='20px'
                  leading='10px'
                  margin='0px'
                  rectBorderRadius='10px'
                  fontWeight='600'
                  percentage='97'
                  defColor={{
                    excellent: '#eff3ff',
                    good: '#eff3ff',
                    fair: 'green',
                    poor: 'red',
                  }}
                  trackPathColor='#ffffff24'
                  trackBorderColor='transparent'
                  trackPathBorderRadius='6px'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
