import whyChooseThumb from '/images/choose-thumb1.png';
import itemIcon from '/images/choose-icon1.png';
import itemIcon2 from '/images/choose-icon2.png';
import itemIcon3 from '/images/choose-icon3.png';
import itemIcon4 from '/images/choose-icon4.png';
import icon from '/images/top-star.png';
import shape from '/images/choose-star.png';
import shape2 from '/images/choose-dot.png';
import shape3 from '/images/choose-shape1.png';
import shape4 from '/images/choose-circle.png';
import star from '/images/choose-rat-icon.png';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';

const WhyChoose = () => {
  return (
    <section className='bg-[url(/images/choose-bg1.png)] py-16 md:py-20 lg:py-28 bg-no-repeat bg-center bg-cover relative'>
      <img
        src={shape4}
        draggable={false}
        alt='Shape'
        className='absolute -top-14 right-[6%] animate-rotational'
      />
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 items-end'>
          <div className='relative'>
            <h5 className='font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              why choose us?
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 mb-4'>
              Innovative and Effective
              <br />
              Learning Approaches
            </h1>
            <p className='font-OpenSans text-TextColor-0 max-w-[570px] w-full'>
              Educate the ultimate destination for knowledge seekers and
              educators alike. We are committed to transforming special
              education impact global channels without standards compliant
              systems
            </p>
            <ul className='grid items-center grid-cols-1 sm:grid-cols-2 gap-8 mt-9 mb-7'>
              <li className='flex items-center gap-[10px] px-5 py-4 rounded-[10px] bg-BodyBg-0 group relative z-10 overflow-hidden'>
                <div className='choose-icon-hover-bg'>
                  <span className='absolute left-[12.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                  <span className='absolute left-[37.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                  <span className='absolute left-[62.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                  <span className='absolute left-[87.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                </div>
                <div>
                  <img
                    src={itemIcon}
                    draggable={false}
                    alt='Icon'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-[17px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white'>
                  Course Management
                </h5>
              </li>
              <li className='flex items-center gap-[10px] px-5 py-4 rounded-[10px] bg-BodyBg-0 group relative z-10 overflow-hidden'>
                <div className='choose-icon-hover-bg'>
                  <span className='absolute left-[12.5%] top-0 h-full w-0 bg-PrimaryColor2-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                  <span className='absolute left-[37.5%] top-0 h-full w-0 bg-PrimaryColor2-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                  <span className='absolute left-[62.5%] top-0 h-full w-0 bg-PrimaryColor2-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                  <span className='absolute left-[87.5%] top-0 h-full w-0 bg-PrimaryColor2-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                </div>
                <div>
                  <img
                    src={itemIcon2}
                    draggable={false}
                    alt='Icon'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-[17px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white'>
                  Students Progress Tracking
                </h5>
              </li>
              <li className='flex items-center gap-[10px] px-5 py-4 rounded-[10px] bg-BodyBg-0 group relative z-10 overflow-hidden'>
                <div className='choose-icon-hover-bg'>
                  <span className='absolute left-[12.5%] top-0 h-full w-0 bg-PrimaryColor4-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                  <span className='absolute left-[37.5%] top-0 h-full w-0 bg-PrimaryColor4-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                  <span className='absolute left-[62.5%] top-0 h-full w-0 bg-PrimaryColor4-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                  <span className='absolute left-[87.5%] top-0 h-full w-0 bg-PrimaryColor4-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                </div>
                <div>
                  <img
                    src={itemIcon3}
                    draggable={false}
                    alt='Icon'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-[17px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white'>
                  Interactive Live Class
                </h5>
              </li>
              <li className='flex items-center gap-[10px] px-5 py-4 rounded-[10px] bg-BodyBg-0 group relative z-10 overflow-hidden'>
                <div className='choose-icon-hover-bg'>
                  <span className='absolute left-[12.5%] top-0 h-full w-0 bg-PrimaryColor3-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                  <span className='absolute left-[37.5%] top-0 h-full w-0 bg-PrimaryColor3-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                  <span className='absolute left-[62.5%] top-0 h-full w-0 bg-PrimaryColor3-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                  <span className='absolute left-[87.5%] top-0 h-full w-0 bg-PrimaryColor3-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                </div>
                <div>
                  <img
                    src={itemIcon4}
                    draggable={false}
                    alt='Icon'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-[17px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white'>
                  Quiz and Assignments
                </h5>
              </li>
            </ul>
            <div className='flex items-center gap-2 mb-9'>
              <div>
                <img
                  src={icon}
                  draggable={false}
                  alt='Icon'
                />
              </div>
              <div>
                <h5 className='font-Outfit text-HeadingColor-0 '>
                  24/7 Hrs Ready to our support team
                </h5>
              </div>
            </div>
            <div>
              <Link
                to={'/whyChoose'}
                className='primary-btn2'
              >
                Get Started
                <HiArrowNarrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className='relative z-10'>
            <img
              src={whyChooseThumb}
              draggable='false'
              className='w-full md:w-[inherit] lg:w-full xl:w-[inherit] max-w-[inherit] ml-[104px]'
            />
            <img
              src={shape}
              draggable={false}
              alt='Shape'
              className='absolute -z-10 bottom-[28%] left-[13%] animate-rotational'
            />
            <img
              src={shape2}
              draggable={false}
              alt='Shape'
              className='absolute -z-10 -top-[1%] left-[59%] animate-swing'
            />
            <img
              src={shape3}
              draggable={false}
              alt='Shape'
              className='absolute -bottom-[4%] -left-[24%] animate-dance'
            />
            <div className='absolute bottom-16 -right-[70px] bg-white rounded-[10px] px-7 py-6 inline-flex gap-5 items-start w-full max-w-[278px]'>
              <div>
                <img
                  src={star}
                  draggable={false}
                  alt='User Image'
                />
              </div>
              <div className='-mt-1'>
                <div className='!font-Outfit font-semibold text-[26px] leading-7 text-HeadingColor-0 flex gap-1 items-center'>
                  <OnScrollCounter
                    start={0}
                    end={26}
                    duration={1000}
                  />
                  <span>+</span>
                </div>
                <h5 className='font-OpenSans text-TextColor-0 text-sm'>
                  Years of Experiences
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
