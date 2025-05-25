import aboutThumb from '/images/about-thumb5.png';
import shape from '/images/about-shape51.png';
import shape2 from '/images/about-shape53.png';
import shape3 from '/images/about-line5.png';
import shape4 from '/images/about-shape52.png';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import TextReveal from '../../Shared/TextAnim/TextReveal';

const About = () => {
  return (
    <section
      className='bg-white pt-32 md:pt-40 xl:pt-[202px] pb-16 md:pb-20 lg:pb-28 relative overflow-hidden'
      id='about'
    >
      <img
        src={shape}
        draggable={false}
        alt='Shape'
        className='absolute top-0 right-0 animate-wiggle hidden 3xl:block'
      />
      <img
        src={shape2}
        draggable={false}
        alt='Shape'
        className='absolute right-28 bottom-32 hidden animate-dance 3xl:block'
      />
      <img
        src={shape3}
        draggable={false}
        alt='Shape'
        className='absolute z-10 left-52 top-32 hidden animate-dance 3xl:block'
      />
      <img
        src={shape4}
        draggable={false}
        alt='Shape'
        className='absolute left-60 top-40 hidden animate-dance 3xl:block'
        style={{ animationDelay: '1.5s' }}
      />
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 2xl:gap-20 items-center'>
          <div className='relative'>
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full xl:w-[inherit] max-w-[inherit]'
            />
            <div className='absolute bottom-0 sm:bottom-7 right-0 sm:right-7 xl:right-0 flex gap-6 sm:gap-10 lg:gap-6 xl:gap-10'>
              <div className='flex items-center gap-5 pl-7 pt-7 pb-10 pr-8 bg-white rounded-2xl shadow-shadows'>
                <div className='rounded-full size-[64px] bg-PrimaryColor-0 bg-opacity-20 text-PrimaryColor-0 text-xl relative z-10 flex items-center justify-center border border-white border-opacity-30 before:absolute before:-left-[5px] before:-top-[5px] before:size-[72px] before:border before:border-PrimaryColor-0 before:border-dashed before:transition-all before:duration-500 before:rounded-full before:animate-rotational'>
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className='font-OpenSans text-[15px] text-TextColor-0'>
                    Call Us:
                  </p>
                  <a
                    href='tel:+6803290570'
                    title='+(680) 3290 570'
                    className='font-Outfit text-lg font-medium text-HeadingColor-0'
                  >
                    +(680) 3290 570
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <h5 className='font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              About Our Platform
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4'>
              <TextReveal text='An Affordable Education' />
              <TextReveal text='Training Center' />
            </h1>
            <p className='font-OpenSans text-TextColor2-0 max-w-[520px] w-full'>
              Combining a rich history cutting-edge technology this fostering
              academic and personal Conveniently architect meta-services through
              whiteboard world-class
            </p>
            <ul className='space-y-4 my-7'>
              <li className='flex items-center gap-[10px]'>
                <div className='size-6 rounded-full flex items-center justify-center bg-PrimaryColor-0 text-white'>
                  <GiCheckMark />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-lg sm:text-base md:text-lg lg:text-base 2xl:text-lg text-HeadingColor-0'>
                  Expert Teacher
                </h5>
              </li>
              <li className='flex items-center gap-[10px]'>
                <div className='size-6 rounded-full flex items-center justify-center bg-PrimaryColor-0 text-white'>
                  <GiCheckMark />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-lg sm:text-base md:text-lg lg:text-base 2xl:text-lg text-HeadingColor-0'>
                  Educational Psychology
                </h5>
              </li>
              <li className='flex items-center gap-[10px]'>
                <div className='size-6 rounded-full flex items-center justify-center bg-PrimaryColor-0 text-white'>
                  <GiCheckMark />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-lg sm:text-base md:text-lg lg:text-base 2xl:text-lg text-HeadingColor-0'>
                  Lifelong Learning
                </h5>
              </li>
            </ul>
            <div className='mt-8 sm:mt-0'>
              <Link
                to={'/about'}
                className='primary-btn2'
              >
                Get Started
                <HiArrowNarrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
