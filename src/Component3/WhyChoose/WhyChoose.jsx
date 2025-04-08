import titleShape from '/images/sub-title-shape.png';
import whyChooseThumb from '/images/choose-us-thumb-1.webp';
import whyChooseShape from '/images/choose-us-shape.webp';
import itemIcon from '/images/icon1.webp';
import itemIcon2 from '/images/icon2.webp';
import itemIcon3 from '/images/icon3.webp';
import { Link } from 'react-router-dom';
import shape from '/images/shape.webp';

const WhyChoose = () => {
  return (
    <section className='bg-white py-16 md:py-20 lg:py-28 relative z-10'>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2 items-end relative'>
          <div>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Why Choose us?
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-6'>
              Brain Storming, Researcing and
              <br />
              Work Strategist Create
            </h1>
            <div className='space-y-7 border-t border-SecondaryColor-0 border-opacity-10 pt-8'>
              <div className='flex gap-5 group'>
                <div className='size-[62px] rounded-full flex items-center justify-center border border-BorderColor2-0 shadow-shadows relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-t before:from-PrimaryColor2-0 before:to-PrimaryColor3-0 before:rounded-full before:transition-all before:duration-500 before:scale-0 before:-z-10 group-hover:before:scale-100'>
                  <img
                    src={itemIcon}
                    draggable={false}
                    alt='Icon'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1] group-hover:animate-wobble_vertical'
                  />
                </div>
                <div className='flex-1 -mt-1'>
                  <h5 className='font-Outfit font-semibold text-2xl pb-[6px]'>
                    Free Integrations
                  </h5>
                  <p className='font-OpenSans text-TextColor2-0 max-w-[370px] w-full'>
                    Competently leverage existing top-line technology maximize
                    cost effective service done
                  </p>
                </div>
              </div>
              <div className='flex gap-5 group'>
                <div className='size-[62px] rounded-full flex items-center justify-center border border-BorderColor2-0 shadow-shadows relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-t before:from-PrimaryColor2-0 before:to-PrimaryColor3-0 before:rounded-full before:transition-all before:duration-500 before:scale-0 before:-z-10 group-hover:before:scale-100'>
                  <img
                    src={itemIcon2}
                    draggable={false}
                    alt='Icon'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1] group-hover:animate-wobble_vertical'
                  />
                </div>
                <div className='flex-1 -mt-1'>
                  <h5 className='font-Outfit font-semibold text-2xl pb-[6px]'>
                    Premium Resource
                  </h5>
                  <p className='font-OpenSans text-TextColor2-0 max-w-[370px] w-full'>
                    Competently leverage existing top-line technology maximize
                    cost effective service done
                  </p>
                </div>
              </div>
              <div className='flex gap-5 group'>
                <div className='size-[62px] rounded-full flex items-center justify-center border border-BorderColor2-0 shadow-shadows relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-t before:from-PrimaryColor2-0 before:to-PrimaryColor3-0 before:rounded-full before:transition-all before:duration-500 before:scale-0 before:-z-10 group-hover:before:scale-100'>
                  <img
                    src={itemIcon3}
                    draggable={false}
                    alt='Icon'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1] group-hover:animate-wobble_vertical'
                  />
                </div>
                <div className='flex-1 -mt-1'>
                  <h5 className='font-Outfit font-semibold text-2xl pb-[6px]'>
                    Unlimited Supports
                  </h5>
                  <p className='font-OpenSans text-TextColor2-0 max-w-[370px] w-full'>
                    Competently leverage existing top-line technology maximize
                    cost effective service done
                  </p>
                </div>
              </div>
            </div>
            <Link
              to={'/about3'}
              className='inline-block mt-11'
            >
              <button className='primary-btn'>
                {`Learn More`}
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
            </Link>
          </div>
          <div className='relative inline-block'>
            <img
              src={whyChooseThumb}
              draggable={false}
              alt='Why Choose Image'
            />
            <img
              src={whyChooseShape}
              draggable={false}
              alt='Why Choose Shape'
              className='absolute right-44 lg:right-32 xl:right-44 -top-28 animate-dance3 hidden md:block'
            />
          </div>
        </div>
      </div>
      <img
        src={shape}
        draggable={false}
        alt='Shape'
        className='absolute bottom-0 left-24 animate-dance3 hidden 3xl:block'
      />
    </section>
  );
};

export default WhyChoose;
