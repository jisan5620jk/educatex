import titleShape from '/images/sub-title-shape.png';
import './pricing-box.css';
import OnScrollCounter from './OnScrollCounter';
import { Link } from 'react-router-dom';
import { FaRegCircleCheck } from 'react-icons/fa6';

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

  return (
    <section className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28 pb-28 lg:pb-[150px] bg-[url('/images/pricing-bg2.png')] bg-cover bg-no-repeat bg-center">
      <div className='Container'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:items-center'>
          <div className='w-full mx-auto'>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Pricing Plans
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              The Best value for Your SEO
              <br /> Marketing Plans
            </h1>
          </div>
          <div className='flex'>
            <div
              className='toggle-container flex items-center gap-2 py-[15px] px-8 bg-SecondaryColor-0 rounded-full bg-opacity-10'
              onClick={togglePlans}
            >
              <div className='font-Outfit font-semibold text-HeadingColor-0 text-lg sm:text-[19px]'>
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
              <div className='font-Outfit font-semibold text-HeadingColor-0 text-lg sm:text-[19px]'>
                Yearly
              </div>
            </div>
          </div>
        </div>
        <div className='mt-9'>
          <div
            id='monthly'
            className={`tab-content ${isMonthly ? 'active' : ''}`}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
              <div className='bg-HeadingColor-0 bg-opacity-5 px-5 xl:px-10 py-7 xl:py-12 rounded-lg'>
                <h5 className='font-Outfit font-semibold text-2xl leading-4 text-HeadingColor-0'>
                  Basic Plan
                </h5>
                <div className='flex items-center gap-1 mb-[2px]'>
                  <h6 className='font-Outfit font-semibold text-2xl xl:text-3xl text-HeadingColor-0 relative -top-2'>
                    $
                  </h6>
                  <div className='font-Outfit text-[42px] sm:text-[50px] xl:text-[60px] text-HeadingColor-0 font-semibold'>
                    <OnScrollCounter
                      start={0}
                      end={30}
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
                  Everything in your basic plans
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
              <div className='bg-HeadingColor-0 bg-opacity-5 px-5 xl:px-10 py-7 xl:py-12 rounded-lg'>
                <div className='flex items-center justify-between'>
                  <h5 className='font-Outfit font-semibold text-2xl leading-4 text-HeadingColor-0'>
                    Standard
                  </h5>
                  <h6 className='font-Outfit rounded-full text-sm px-[18px] py-[2px] bg-gradient-to-r to-PrimaryColor2-0 from-PrimaryColor3-0 text-white'>
                    Popular
                  </h6>
                </div>
                <div className='flex items-center gap-1 mb-[2px]'>
                  <h6 className='font-Outfit font-semibold text-2xl xl:text-3xl text-HeadingColor-0 relative -top-2'>
                    $
                  </h6>
                  <div className='font-Outfit text-[42px] sm:text-[50px] xl:text-[60px] text-HeadingColor-0 font-semibold'>
                    <OnScrollCounter
                      start={0}
                      end={60}
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
                  Everything in your Standard plans
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
              <div className='bg-HeadingColor-0 bg-opacity-5 px-5 xl:px-10 py-7 xl:py-12 rounded-lg'>
                <h5 className='font-Outfit font-semibold text-2xl leading-4 text-HeadingColor-0'>
                  Business
                </h5>
                <div className='flex items-center gap-1 mb-[2px]'>
                  <h6 className='font-Outfit font-semibold text-2xl xl:text-3xl text-HeadingColor-0 relative -top-2'>
                    $
                  </h6>
                  <div className='font-Outfit text-[42px] sm:text-[50px] xl:text-[60px] text-HeadingColor-0 font-semibold'>
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
              <div className='bg-HeadingColor-0 bg-opacity-5 px-5 xl:px-10 py-7 xl:py-12 rounded-lg'>
                <h5 className='font-Outfit font-semibold text-2xl leading-4 text-HeadingColor-0'>
                  Basic Plan
                </h5>
                <div className='flex items-center gap-1 mb-[2px]'>
                  <h6 className='font-Outfit font-semibold text-2xl xl:text-3xl text-HeadingColor-0 relative -top-2'>
                    $
                  </h6>
                  <div className='font-Outfit text-[42px] sm:text-[50px] xl:text-[60px] text-HeadingColor-0 font-semibold'>
                    <OnScrollCounter
                      start={0}
                      end={298}
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
                  Get StartTed Now
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
                  Everything in your basic plans
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
              <div className='bg-HeadingColor-0 bg-opacity-5 px-5 xl:px-10 py-7 xl:py-12 rounded-lg'>
                <div className='flex items-center justify-between'>
                  <h5 className='font-Outfit font-semibold text-2xl leading-4 text-HeadingColor-0'>
                    Standard
                  </h5>
                  <h6 className='font-Outfit rounded-full text-sm px-[18px] py-[2px] bg-gradient-to-r to-PrimaryColor2-0 from-PrimaryColor3-0 text-white'>
                    Popular
                  </h6>
                </div>
                <div className='flex items-center gap-1 mb-[2px]'>
                  <h6 className='font-Outfit font-semibold text-2xl xl:text-3xl text-HeadingColor-0 relative -top-2'>
                    $
                  </h6>
                  <div className='font-Outfit text-[42px] sm:text-[50px] xl:text-[60px] text-HeadingColor-0 font-semibold'>
                    <OnScrollCounter
                      start={0}
                      end={689}
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
                  Get StartTed Now
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
                  Everything in your Standard plans
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
              <div className='bg-HeadingColor-0 bg-opacity-5 px-5 xl:px-10 py-7 xl:py-12 rounded-lg'>
                <h5 className='font-Outfit font-semibold text-2xl leading-4 text-HeadingColor-0'>
                  Business
                </h5>
                <div className='flex items-center gap-1 mb-[2px]'>
                  <h6 className='font-Outfit font-semibold text-2xl xl:text-3xl text-HeadingColor-0 relative -top-2'>
                    $
                  </h6>
                  <div className='font-Outfit text-[42px] sm:text-[50px] xl:text-[60px] text-HeadingColor-0 font-semibold'>
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
                  Get StartTed Now
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
    </section>
  );
};

export default Pricing;
