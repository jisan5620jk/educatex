import campusThumb from '/images/campus-life-thumb.png';
import shape from '/images/campus-shape1.png';
import shape2 from '/images/campus-shape2.png';
import itemIcon from '/images/campus-icon1.png';
import itemIcon2 from '/images/campus-icon2.png';
import itemIcon3 from '/images/campus-icon3.png';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { IoPlaySharp } from 'react-icons/io5';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

const Campus = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className='bg-white py-16 md:py-20 lg:py-28 relative'>
      <img
        src={shape}
        draggable={false}
        alt='Shape'
        className='absolute top-28 right-28 xl:right-20 2xl:right-28 animate-rotational hidden xl:block'
      />
      <img
        src={shape2}
        draggable={false}
        alt='Shape'
        className='absolute right-28 bottom-32 hidden animate-dance2 xl:block'
      />
      <div className='Container lg:px-0'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-14 items-center'>
          <div className='relative z-10'>
            <img
              src={campusThumb}
              draggable='false'
              className='w-full lg:w-[inherit] max-w-[inherit] lg:-ml-[300px] xl:-ml-[200px] 2xl:-ml-[180px]'
            />
            <div className='absolute top-0 right-0 sm:right-8 sm:top-8 md:top-14 md:right-14 lg:top-14 lg:right-14 xl:top-14 xl:right-14 2xl:top-20 2xl:right-20'>
              <button
                className='size-20 bg-PrimaryColor-0 rounded-full text-white text-2xl flex items-center justify-center animate-ripple_white'
                onClick={() => setToggler(!toggler)}
              >
                <IoPlaySharp />
              </button>
            </div>
          </div>
          <div className='relative'>
            <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              campus life
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
            <ul className='flex flex-col sm:flex-row items-center gap-5 my-9'>
              <li className='text-center group w-full bg-PrimaryColor-0 bg-opacity-10 rounded-[20px] px-7 sm:px-3 md:px-7 lg:px-2 xl:px-3 2xl:px-7 pt-10 pb-8 relative z-10 overflow-hidden'>
                <div>
                  <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-0'></span>
                  <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
                  <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-1/2'></span>
                  <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
                </div>
                <div>
                  <img
                    src={itemIcon}
                    draggable={false}
                    alt='Icon'
                    className='mx-auto transition-all duration-500 group-hover:animate-wobble_vertical group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
                <h5 className='font-Outfit font-medium text-xl sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-[52px]'>
                  Student Accomodations
                </h5>
              </li>
              <li className='text-center group w-full bg-PrimaryColor2-0 bg-opacity-10 rounded-[20px] px-7 sm:px-3 md:px-7 lg:px-2 xl:px-3 2xl:px-7 pt-10 pb-8 relative z-10 overflow-hidden'>
                <div>
                  <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor2-0 group-hover:w-[25%] group-hover:left-0'></span>
                  <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor2-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
                  <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor2-0 group-hover:w-[25%] group-hover:left-1/2'></span>
                  <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor2-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
                </div>
                <div>
                  <img
                    src={itemIcon2}
                    draggable={false}
                    alt='Icon'
                    className='mx-auto transition-all duration-500 group-hover:animate-wobble_vertical group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
                <h5 className='font-Outfit font-mediumtext-xl sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-12'>
                  Gym and Sports Facilities
                </h5>
              </li>
              <li className='text-center group w-full bg-PrimaryColor3-0 bg-opacity-10 rounded-[20px] px-7 sm:px-3 md:px-7 lg:px-2 xl:px-3 2xl:px-7 pt-10 pb-8 relative z-10 overflow-hidden'>
                <div>
                  <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor3-0 group-hover:w-[25%] group-hover:left-0'></span>
                  <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor3-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
                  <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor3-0 group-hover:w-[25%] group-hover:left-1/2'></span>
                  <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor3-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
                </div>
                <div>
                  <img
                    src={itemIcon3}
                    draggable={false}
                    alt='Icon'
                    className='mx-auto transition-all duration-500 group-hover:animate-wobble_vertical group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
                <h5 className='font-Outfit font-mediumtext-xl sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-[52px]'>
                  Research and Library
                </h5>
              </li>
            </ul>
            <div>
              <Link
                to={'/campus'}
                className='primary-btn2'
              >
                More campus
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

export default Campus;
