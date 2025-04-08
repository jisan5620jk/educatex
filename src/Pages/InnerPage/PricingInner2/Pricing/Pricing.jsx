import titleShape from '/images/sub-title-shape.png';
import './pricing-box.css';
import OnScrollCounter from './OnScrollCounter';
import { Link } from 'react-router-dom';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const Pricing = () => {
  let isMonthly = true;

  function togglePlans() {
    isMonthly = !isMonthly;

    // Toggle the content
    document.getElementById('monthly').classList.toggle('active', isMonthly);
    document.getElementById('yearly').classList.toggle('active', !isMonthly);

    // Move the toggle circle
    const toggleCircle = document.getElementById('toggleCircle');
    toggleCircle.style.transform = isMonthly
      ? 'translateX(0)'
      : 'translateX(30px)';
  }

  const [toggler, setToggler] = useState(false);

  return (
    <section className="pricing relative overflow-hidden py-16 md:py-20 lg:pt-28 lg:pb-[150px] bg-[#f8f8ff] lg:bg-transparent bg-[url('/images/pricing-bg2.png')] bg-cover bg-no-repeat bg-top lg:bg-center">
      <div className='Container'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className=''>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Pricing Plans
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              The Best value for Your SEO
              <br /> Marketing Plans
            </h1>
          </div>
          <div
            className='toggle-container flex items-center gap-2 py-[15px] px-8 bg-SecondaryColor-0 rounded-full bg-opacity-10'
            onClick={togglePlans}
          >
            <div className='font-Outfit font-semibold text-HeadingColor-0 text-[19px]'>
              Monthly
            </div>
            <div className={`toggle ${isMonthly ? 'active' : ''}`}>
              <div
                id='toggleCircle'
                className='toggle-circle'
                style={{
                  transform: isMonthly ? 'translateX(0)' : 'translateX(30px)',
                }}
              ></div>
            </div>
            <div className='font-Outfit font-semibold text-HeadingColor-0 text-[19px]'>
              Yearly
            </div>
          </div>
        </div>
        <div className='mt-9'>
          <div
            id='monthly'
            className={`tab-content ${isMonthly ? 'active' : ''}`}
          >
            <div className='bg-[url("/images/pricing-inner-image.jpg")] bg-no-repeat bg-cover bg-center p-2 sm:p-5 rounded-xl overflow-hidden relative z-10'>
              <div className='absolute top-1/2 -translate-y-1/2 left-[30%] hidden md:block'>
                <button
                  className='h-14 w-14 sm:h-[100px] sm:w-[100px] rounded-full bg-white bg-opacity-50 font-Outfit font-medium text-lg text-white flex justify-center items-center uppercase'
                  onClick={() => setToggler(!toggler)}
                >
                  Play
                </button>
              </div>
              <div className='ml-auto max-w-[412px] w-full bg-BodyBg6-0 px-5 xl:px-10 py-7 xl:py-12 rounded-lg'>
                <h5 className='font-Outfit font-semibold text-2xl leading-4 text-HeadingColor-0'>
                  Business
                </h5>
                <div className='flex items-center gap-1 my-4 sm:mb-[2px]'>
                  <h6 className='font-Outfit font-semibold text-xl sm:text-2xl xl:text-3xl text-HeadingColor-0 relative -top-1 sm:-top-2'>
                    $
                  </h6>
                  <div className='font-Outfit text-[35px] sm:text-[50px] xl:text-[60px] text-HeadingColor-0 font-semibold'>
                    <OnScrollCounter
                      start={0}
                      end={90}
                      duration={1000}
                    />
                  </div>
                  <p className='font-OpenSans text-TextColor2-0 sm:ml-3'>
                    Competently leverage <br /> maximize done
                  </p>
                </div>
                <Link
                  to={'/pricing2'}
                  className='bg-HeadingColor-0 pricing-btn text-white font-Outfit flex items-center gap-2 justify-center font-semibold text-center w-full uppercase py-3 px-7 rounded-full overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:bg-gradient-to-r before:ease-linear before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-300 before:-z-10 hover:before:w-full hover:before:left-0'
                >
                  Get StartTed Now
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
                </Link>
                <Link
                  to={'/'}
                  className='mt-3 bg-HeadingColor-0 bg-opacity-10 group text-HeadingColor-0 transition-all duration-500 hover:text-white pricing-btn font-Outfit flex items-center gap-2 justify-center font-semibold text-center w-full uppercase py-3 px-7 rounded-full overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:bg-gradient-to-r before:ease-linear before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-300 before:-z-10 hover:before:w-full hover:before:left-0'
                >
                  Download Info
                  <span className='icon-style'>
                    <svg
                      className='qodef-svg--custom-arrow qodef-m-arrow inline-block text-HeadingColor-0 h-[10px] group-hover:text-white w-auto transition-all duration-500'
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
                </Link>
                <h5 className='font-Outfit font-semibold text-xl mt-[22px]'>
                  Features
                </h5>
                <p className='font-OpenSans text-TextColor2-0 text-[15px] mb-[18px]'>
                  Everything in your Business plans
                </p>
                <ul className='space-y-2'>
                  <li className='flex items-center gap-2 font-OpenSans text-TextColor2-0'>
                    <FaRegCircleCheck
                      size={18}
                      className='text-PrimaryColor-0'
                    />
                    Unlimited Campaigns
                  </li>
                  <li className='flex items-center gap-2 font-OpenSans text-TextColor2-0'>
                    <FaRegCircleCheck
                      size={18}
                      className='text-PrimaryColor-0'
                    />
                    Paid SEO Tools Included
                  </li>
                  <li className='flex items-center gap-2 font-OpenSans text-TextColor2-0'>
                    <FaRegCircleCheck
                      size={18}
                      className='text-PrimaryColor-0'
                    />
                    Domain & Hosting
                  </li>
                  <li className='flex items-center gap-2 font-OpenSans text-TextColor2-0'>
                    <FaRegCircleCheck
                      size={18}
                      className='text-PrimaryColor-0'
                    />
                    Marketing Resources
                  </li>
                  <li className='flex items-center gap-2 font-OpenSans text-TextColor2-0'>
                    <FaRegCircleCheck
                      size={18}
                      className='text-PrimaryColor-0'
                    />
                    Unlimited Support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id='yearly'
            className={`tab-content ${isMonthly ? '' : 'active'}`}
          >
            <div className='bg-[url("/images/pricing-inner-image.jpg")] bg-no-repeat bg-cover bg-center p-2 sm:p-5 rounded-xl overflow-hidden relative z-10'>
              <div className='absolute top-1/2 -translate-y-1/2 md:left-[12%] lg:left-[22%] xl:left-[30%] hidden md:block'>
                <button
                  className='h-14 w-14 sm:h-[100px] sm:w-[100px] rounded-full bg-white bg-opacity-50 font-Outfit font-medium text-lg text-white flex justify-center items-center uppercase'
                  onClick={() => setToggler(!toggler)}
                >
                  Play
                </button>
              </div>
              <div className='ml-auto max-w-[412px] w-full bg-BodyBg-0 px-5 xl:px-10 py-7 xl:py-12 rounded-lg'>
                <h5 className='font-Outfit font-semibold text-2xl leading-4 text-HeadingColor-0'>
                  Business
                </h5>
                <div className='flex items-center gap-1 my-4 sm:mb-[2px]'>
                  <h6 className='font-Outfit font-semibold text-xl sm:text-2xl xl:text-3xl text-HeadingColor-0 relative -top-1 sm:-top-2'>
                    $
                  </h6>
                  <div className='font-Outfit text-[35px] sm:text-[50px] xl:text-[60px] text-HeadingColor-0 font-semibold'>
                    <OnScrollCounter
                      start={0}
                      end={999}
                      duration={1000}
                    />
                  </div>
                  <p className='font-OpenSans text-TextColor2-0 sm:ml-3'>
                    Competently leverage <br /> maximize done
                  </p>
                </div>
                <Link
                  to={'/pricing2'}
                  className='bg-HeadingColor-0 pricing-btn text-white font-Outfit flex items-center gap-2 justify-center font-semibold text-center w-full uppercase py-3 px-7 rounded-full overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:bg-gradient-to-r before:ease-linear before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-300 before:-z-10 hover:before:w-full hover:before:left-0'
                >
                  Get StartTed Now
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
                </Link>
                <Link
                  to={'/'}
                  className='mt-3 bg-HeadingColor-0 bg-opacity-10 group text-HeadingColor-0 transition-all duration-500 hover:text-white pricing-btn font-Outfit flex items-center gap-2 justify-center font-semibold text-center w-full uppercase py-3 px-7 rounded-full overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:bg-gradient-to-r before:ease-linear before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-300 before:-z-10 hover:before:w-full hover:before:left-0'
                >
                  Download Info
                  <span className='icon-style'>
                    <svg
                      className='qodef-svg--custom-arrow qodef-m-arrow inline-block text-HeadingColor-0 h-[10px] group-hover:text-white w-auto transition-all duration-500'
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
                </Link>
                <h5 className='font-Outfit font-semibold text-xl mt-[22px]'>
                  Features
                </h5>
                <p className='font-OpenSans text-TextColor2-0 text-[15px] mb-[18px]'>
                  Everything in your Business plans
                </p>
                <ul className='space-y-2'>
                  <li className='flex items-center gap-2 font-OpenSans text-TextColor2-0'>
                    <FaRegCircleCheck
                      size={18}
                      className='text-PrimaryColor-0'
                    />
                    Unlimited Campaigns
                  </li>
                  <li className='flex items-center gap-2 font-OpenSans text-TextColor2-0'>
                    <FaRegCircleCheck
                      size={18}
                      className='text-PrimaryColor-0'
                    />
                    Paid SEO Tools Included
                  </li>
                  <li className='flex items-center gap-2 font-OpenSans text-TextColor2-0'>
                    <FaRegCircleCheck
                      size={18}
                      className='text-PrimaryColor-0'
                    />
                    Domain & Hosting
                  </li>
                  <li className='flex items-center gap-2 font-OpenSans text-TextColor2-0'>
                    <FaRegCircleCheck
                      size={18}
                      className='text-PrimaryColor-0'
                    />
                    Marketing Resources
                  </li>
                  <li className='flex items-center gap-2 font-OpenSans text-TextColor2-0'>
                    <FaRegCircleCheck
                      size={18}
                      className='text-PrimaryColor-0'
                    />
                    Unlimited Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={['https://youtu.be/NKJ-6zCSk2E?si=XQUpq01QZ8hNXLdc']}
      />
    </section>
  );
};

export default Pricing;
