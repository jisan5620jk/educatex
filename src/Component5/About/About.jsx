import aboutThumb from '/images/about-thumb71.png';
import aboutThumb2 from '/images/about-thumb72.png';
import shape from '/images/about-shape72.png';
import user from '/images/autor-ins8.png';
import shape3 from '/images/about-shape71.png';
import icon from '/images/about-icon7.png';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
import { FaCircle } from 'react-icons/fa';
import Category from '../Category/Category';

const About = () => {
  return (
    <section className='bg-PrimaryColor-0 pt-16 md:pt-20 lg:pt-28 relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-[80%] before:bg-[url("/images/about-bg7.png")] before:bg-no-repeat before:bg-cover before:bg-center'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-[92px] lg:gap-10 items-center'>
          <div className='col-span-1 lg:col-span-7 relative z-10 inline-block'>
            <div className='flex gap-6 h-auto sm:h-[600px] w-full'>
              <img
                src={aboutThumb}
                draggable='false'
                className='w-full md:max-w-[inherit] lg:w-[48%] 2xl:!w-auto lg:max-w-full 2xl:max-w-[inherit] mb-auto'
              />
              <img
                src={aboutThumb2}
                draggable='false'
                className='w-full md:max-w-[inherit] lg:w-[48%] 2xl:!w-auto lg:max-w-full 2xl:max-w-[inherit] mt-auto'
              />
            </div>
            <img
              src={shape}
              draggable={false}
              alt='Shape'
              className='absolute -z-10 bottom-2 lg:left-16 animate-wiggle hidden sm:block'
            />
            <div className='hidden absolute top-2 lg:top-5 right-10 lg:right-0 xl:right-5 2xl:right-24 bg-BodyBg3-0 border-2 border-white rounded-se-[30px] rounded-bl-[30px] px-6 py-5 md:inline-flex gap-4 items-start'>
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
                <h5 className='font-OpenSans text-HeadingColor-0 -mt-1'>
                  Expert Instructor
                </h5>
              </div>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-5 relative'>
            <h5 className='font-OpenSans bg-white bg-opacity-20 pl-4 pr-5 py-[7px] rounded-r-full border border-PrimaryColor-0 border-opacity-20 text-HeadingColor-0 text-sm inline-flex items-center gap-2 uppercase'>
              <span className='text-PrimaryColor2-0'>
                <FaCircle size={10} />
              </span>
              about our educate
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[45px] 2xl:leading-[55px] text-HeadingColor-0 mt-2 sm:mt-[18px] mb-4'>
              Tools and Techniques for
              <br />
              Online <span className='text-PrimaryColor-0'>Teaching</span>
            </h1>
            <p className='font-OpenSans text-TextColor-0 text-[17px] w-full max-w-[500px] mb-9'>
              Experience future of learning our education-focused to main
              backgroud courses pro designed to and empower learners courses
              combine teaching tools.
            </p>
            <h5 className='font-Outfit font-medium text-SecondaryColor-0 text-xl flex items-end gap-5'>
              <img
                src={icon}
                draggable={false}
                alt='Icon'
              />
              Flexible Shedule Classes
            </h5>
            <p className='font-OpenSans text-TextColor-0 text-[17px] w-full max-w-[500px] mt-8 mb-12'>
              Backgroud courses pro designed to and empower learners courses
              combine teaching tools.
            </p>
            <div>
              <Link
                to={'/about'}
                className='primary-btn2'
              >
                Start Trial
                <HiArrowNarrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[51%] left-24 z-10 hidden 2xl:block'>
        <img
          src={shape3}
          draggable={false}
          alt='Shape'
          className='animate-dance2'
        />
      </div>
      <Category />
    </section>
  );
};

export default About;
