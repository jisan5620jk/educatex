import bannerImg from '/images/hero-thumb1.png';
import bannerShape from '/images/hero-arrow.png';
import bannerShape2 from '/images/hero-shape1.png';
import bannerShape3 from '/images/hero-shape3.png';
import bannerShape4 from '/images/hero-dot.png';
import icon from '/images/star-icon.png';
import user from '/images/hero-autor.png';
import { FaCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { RxStarFilled } from 'react-icons/rx';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
import './banner.css';

const Banner = () => {
  return (
    <section className="bg-[url('/images/hero1-bg.png')] bg-cover bg-center bg-no-repeat h-[700px] sm:h-[1350px] md:h-[1450px] lg:h-[750px] xl:h-[870px] flex items-center relative z-10 overflow-hidden">
      <div className='Container'>
        <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0 mt-[70px] lg:mt-[90px]'>
          <div className='relative'>
            <div className='inline-block mb-4'>
              <h5 className='font-Outfit bg-PrimaryColor-0 bg-opacity-10 px-5 py-[6px] rounded border border-PrimaryColor-0 border-opacity-30 text-HeadingColor-0 text-sm flex items-center gap-3 uppercase'>
                <span className='text-PrimaryColor-0'>
                  <FaCheck size={15} />
                </span>
                100% Satisfaction Gaurantee
              </h5>
            </div>
            <h1 className='font-Outfit font-semibold text-HeadingColor-0 text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[64px] md:leading-[74px] lg:text-[50px] xl:text-[66px] xl:leading-[76px] 2xl:text-[60px] 2xl:leading-[70px]'>
              Growup Your Learning <br />
              Skills with Educate
            </h1>
            <p className='font-OpenSans text-TextColor2-0 mb-8 mt-5'>
              <span className='text-HeadingColor-0'>Educate</span> the ultimate
              destination for knowledge seekers and educators alike.
              <br className='hidden 2xl:block' /> We are committed to
              transforming education
            </p>
            <div className='flex items-center gap-8'>
              <div>
                <Link
                  to={'/about'}
                  className='primary-btn'
                >
                  Get Started
                  <HiArrowNarrowRight size={20} />
                </Link>
              </div>
              <div>
                <Link
                  to={'/about'}
                  className='font-Outfit text-base text-HeadingColor-0 transition-all duration-500 inline-flex gap-2 uppercase font-medium relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-HeadingColor-0 before:bg-opacity-50 before:transition-all before:duration-500 hover:before:bg-PrimaryColor-0 hover:text-PrimaryColor-0'
                >
                  Find Course
                  <span className='relative top-[2px]'>
                    <HiArrowNarrowRight size={20} />
                  </span>
                </Link>
              </div>
            </div>
            <div className='flex gap-5 items-start mt-24'>
              <div className='flex items-center -space-x-3'>
                <div>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <div className='size-[57px] rounded-full bg-PrimaryColor-0 border-[3px] border-white flex items-center justify-center'>
                  <h5 className='font-Outfit text-white text-xl font-medium'>
                    1k+
                  </h5>
                </div>
              </div>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <ul className='flex items-center gap-[2px]'>
                    <li className='text-[#ff9d14] text-lg'>
                      <RxStarFilled />
                    </li>
                    <li className='text-[#ff9d14] text-lg'>
                      <RxStarFilled />
                    </li>
                    <li className='text-[#ff9d14] text-lg'>
                      <RxStarFilled />
                    </li>
                    <li className='text-[#ff9d14] text-lg'>
                      <RxStarFilled />
                    </li>
                    <li className='text-[#ff9d14] text-lg'>
                      <RxStarFilled />
                    </li>
                  </ul>
                  <div>
                    <h6 className='font-Outfit text-HeadingColor-0'>
                      (4.9 Ratings)
                    </h6>
                  </div>
                </div>
                <p className='font-OpenSans text-TextColor-0'>
                  Students learn daily with
                  <br /> educate platform
                </p>
              </div>
            </div>
          </div>
          <div className='sm:flex justify-center lg:justify-end relative 2xl:-right-[60px] hidden'>
            <img
              src={bannerImg}
              draggable='false'
              className='2xl:w-[inherit]'
            />
            <img
              src={bannerShape}
              draggable={false}
              className='absolute bottom-72 animate-dance3 left-12 hidden md:block'
            />
            <img
              src={bannerShape2}
              draggable={false}
              className='absolute top-8 -left-8 animate-rotational hidden md:block lg:hidden 2xl:block'
            />
            <img
              src={bannerShape3}
              draggable={false}
              className='absolute top-0 right-44 animate-swing hidden md:block lg:hidden 2xl:block'
            />
            <img
              src={bannerShape4}
              draggable={false}
              className='absolute top-36 right-0 animate-wiggle hidden md:block lg:hidden 2xl:block'
            />
            <div className='absolute bottom-32 -left-16 bg-white bg-opacity-40 backdrop-filter backdrop-blur-md border-2 border-white rounded-[20px] px-7 py-7 inline-flex gap-5 items-start'>
              <div>
                <img
                  src={user}
                  draggable={false}
                  alt='User Image'
                />
              </div>
              <div>
                <div className='!font-Outfit font-semibold text-[26px] text-HeadingColor-0 flex gap-1 items-center'>
                  <OnScrollCounter
                    start={0}
                    end={130}
                    duration={3000}
                  />
                  <span>+</span>
                </div>
                <h5 className='font-OpenSans text-HeadingColor-0'>
                  Expert Instructor
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
