import aboutThumb from '/images/about-thumb31.png';
import shape from '/images/brand-line.png';
import shape2 from '/images/about-shape31.png';
import shape3 from '/images/about-shape32.png';
import itemIcon from '/images/about-icon.png';
import icon from '/images/learn-icon.png';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import aboutIcon from '/images/about-call.png';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
import { GoCheckCircleFill } from 'react-icons/go';

const About = () => {
  return (
    <section className='bg-white py-16 md:py-20 lg:py-28 relative'>
      <img
        src={shape}
        draggable={false}
        alt='Shape'
        className='absolute -top-16 right-28 animate-wiggle hidden lg:block'
      />
      <img
        src={shape2}
        draggable={false}
        alt='Shape'
        className='absolute right-7 bottom-0 hidden animate-dance 3xl:block'
      />
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 items-center'>
          <div className='relative z-10'>
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full lg:w-[inherit] max-w-[inherit] lg:-ml-[150px] xl:-ml-[100px] 2xl:-ml-[52px]'
            />
            <div className='absolute -left-8 bottom-14'>
              <img
                src={shape3}
                draggable={false}
                alt='Shape'
                className='animate-swing'
              />
            </div>
            <div className='absolute top-0 right-[50px] flex items-center gap-5 px-9 py-8 bg-PrimaryColor-0 rounded-[10px] max-w-[302px] w-full'>
              <div>
                <img
                  src={icon}
                  draggable={false}
                  alt='Icon'
                />
              </div>
              <h5 className='flex-1 font-Outfit font-medium text-lg sm:text-base md:text-[22px] lg:text-xl 2xl:text-[22px] text-white'>
                Learm Online
                <br /> Anywhere
              </h5>
            </div>
            <div className='absolute bottom-7 left-5 flex gap-10'>
              <div className='text-2xl md:text-[56px] lg:text-[60px] leading-[56px] tracking-tight font-semibold font-Outfit text-PrimaryColor-0 relative'>
                <OnScrollCounter
                  start={0}
                  end={16}
                  duration={1000}
                />
                <h2 className='absolute -top-0 -right-5 font-Outfit text-3xl'>
                  +
                </h2>
              </div>
              <div className='flex-1'>
                <p className='font-OpenSans text-TextColor-0 mt-2'>
                  Years of
                  <br /> Experiences
                </p>
              </div>
            </div>
          </div>
          <div className='relative'>
            <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              ABOUT US
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 mb-4'>
              Who We Are – Introduction to
              <br />
              Educate Online Platform
            </h1>
            <p className='font-OpenSans text-TextColor-0 max-w-[570px] w-full'>
              Educate the ultimate destination for knowledge seekers and
              educators alike. We are committed to transforming special
              education impact global channels without standards compliant
              systems
            </p>
            <ul className='space-y-4 my-7'>
              <li className='flex items-center gap-[10px]'>
                <div>
                  <img
                    src={itemIcon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-lg sm:text-base md:text-lg lg:text-base 2xl:text-lg text-HeadingColor-0'>
                  Course Catalog & Program Information
                </h5>
              </li>
              <li className='flex items-center gap-[10px]'>
                <div>
                  <img
                    src={itemIcon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-lg sm:text-base md:text-lg lg:text-base 2xl:text-lg text-HeadingColor-0'>
                  Online Application & Admission Process
                </h5>
              </li>
              <li className='flex items-center gap-[10px]'>
                <div>
                  <img
                    src={itemIcon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-lg sm:text-base md:text-lg lg:text-base 2xl:text-lg text-HeadingColor-0'>
                  Financial Aid and Scholarships
                </h5>
              </li>
            </ul>
            <div className='flex items-center gap-4 pt-1 pb-10'>
              <div>
                <img
                  src={aboutIcon}
                  draggable={false}
                  alt='Icon'
                />
              </div>
              <div>
                <a
                  href='tel:+6803290570'
                  title='+(680) 3290 570'
                  className='font-Outfit text-[22px] font-medium text-HeadingColor-0'
                >
                  +(680) 3290 570
                </a>
              </div>
            </div>
            <div>
              <Link
                to={'/about'}
                className='primary-btn2'
              >
                More About
                <HiArrowNarrowRight size={20} />
              </Link>
            </div>
            <div className='absolute bottom-8 right-0 bg-BodyBg-0 rounded-2xl px-7 pt-8 pb-7'>
              <GoCheckCircleFill
                size={34}
                className='text-PrimaryColor-0'
              />
              <h5 className='font-Outfit text-xl text-HeadingColor-0 font-medium my-4'>Trusted Online<br /> And offline Best<br /> Educations</h5>
              <p className='font-Outfit text-[15px] text-HeadingColor-0 pl-6 relative z-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:h-[2px] before:w-[14px]'>Jhon Doe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
