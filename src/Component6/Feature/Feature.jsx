import featureThumb from '/images/about-thumb51.png';
import shape from '/images/about-line54.png';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { GiCheckMark } from 'react-icons/gi';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import TextReveal from '../../Shared/TextAnim/TextReveal';

const Feature = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className='bg-white py-16 md:py-20 lg:py-28 relative overflow-hidden'>
      <img
        src={shape}
        draggable={false}
        alt='Shape'
        className='absolute bottom-[16%] right-[7%] animate-dance hidden 3xl:block'
      />
      <div className='Container lg:px-0'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-7 2xl:gap-0 items-center'>
          <div className='lg:col-span-7 relative'>
            <img
              src={featureThumb}
              draggable='false'
              className='w-full 2xl:w-[inherit] max-w-[inherit]'
            />
            <div className='absolute bottom-0 right-0 xl:bottom-2 2xl:right-[70px]'>
              <button
                className='rounded-full size-12 sm:size-20 md:size-[100px] lg:size-20 xl:size-[100px] bg-[url("/images/play-img.png")] bg-cover bg-no-repeat text-PrimaryColor-0 relative z-10 flex items-center justify-center border border-white border-opacity-30 before:absolute before:-left-[9px] before:-top-[9px] before:size-[63px] sm:before:size-[95px] md:before:size-[115px] lg:before:size-[95px] xl:before:size-[115px] before:border-2 before:border-PrimaryColor-0 before:border-dashed before:transition-all before:duration-500 before:rounded-full before:animate-rotational '
                onClick={() => setToggler(!toggler)}
              >
                <span className='size-9 sm:size-[58px] md:size-[68px] lg:size-[58px] xl:size-[68px] text-xs sm:text-base bg-BodyBg-0 rounded-full flex items-center justify-center font-Outfit uppercase'>
                  Play
                </span>
              </button>
            </div>
          </div>
          <div className='lg:col-span-5 relative 2xl:pl-4'>
            <h5 className='font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              Our Features
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[40px] 2xl:leading-[50px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4'>
              <TextReveal text='Upgrade Your Skills with the'/>
              <TextReveal text='Newest Trends'/>
            </h1>
            <p className='font-OpenSans text-TextColor2-0 max-w-[430px] w-full'>
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
                  Flexible Courses to Match Your Unique Needs
                </h5>
              </li>
              <li className='flex items-center gap-[10px]'>
                <div className='size-6 rounded-full flex items-center justify-center bg-PrimaryColor-0 text-white'>
                  <GiCheckMark />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-lg sm:text-base md:text-lg lg:text-base 2xl:text-lg text-HeadingColor-0'>
                  Learning with Multimedia & Interactivity
                </h5>
              </li>
              <li className='flex items-center gap-[10px]'>
                <div className='size-6 rounded-full flex items-center justify-center bg-PrimaryColor-0 text-white'>
                  <GiCheckMark />
                </div>
                <h5 className='flex-1 font-Outfit font-medium text-lg sm:text-base md:text-lg lg:text-base 2xl:text-lg text-HeadingColor-0'>
                  Performance Tracking Tools
                </h5>
              </li>
            </ul>
            <div className='mt-8 sm:mt-0'>
              <Link
                to={'/feature'}
                className='primary-btn2'
              >
                Get Started
                <HiArrowNarrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={['https://youtu.be/LlCwHnp3kL4?si=SD5vSCPhr4vc_U5t']}
      />
    </section>
  );
};

export default Feature;
