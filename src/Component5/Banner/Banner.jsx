import bannerImg from '/images/hero-thumb7.png';
import bannerShape from '/images/hero-love.png';
import shape from '/images/hero-shape72.png';
import shape2 from '/images/hero-shape71.png';
import shape3 from '/images/hero-arrow7.png';
import user from '/images/hero-student2.png';
import author from '/images/hero-autor3.png';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
import { FaCircle } from 'react-icons/fa';
import FsLightbox from 'fslightbox-react';
import { IoPlaySharp } from 'react-icons/io5';
import { useState } from 'react';
import FeatureCard from './FeatureCard';
import featureIcon from '/images/course-icon7.png';
import featureIcon2 from '/images/course-icon8.png';
import featureIcon3 from '/images/course-icon9.png';
import FsLightboxPortal from '../../Shared/FsLightBox/FsLightBox';

const featureData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: '3020 Online Courses',
    featureUrl: '/service',
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: '7,050 Runing Student',
    featureUrl: '/service',
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: 'Online Certifications',
    featureUrl: '/service',
  },
];

const Banner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className='px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] bg-SecondaryColor-0 overflow-hidden'>
      <section className="bg-BodyBg-0 bg-[url('/images/hero-bg7.png')] bg-cover bg-center bg-no-repeat flex items-center relative z-20 rounded-b-[30px] overflow-hidden py-16 md:py-20 lg:py-[110px]">
        <div className='Container'>
          <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0'>
            <div className='relative'>
              <h5 className='font-OpenSans bg-white bg-opacity-30 pl-2 sm:pl-4 pr-5 py-[7px] rounded-r-full border border-white text-HeadingColor-0 text-sm inline-flex items-center gap-2 uppercase mb-4 md:mb-2'>
                <span className='text-PrimaryColor2-0'>
                  <FaCircle size={10} />
                </span>
                Welcome to Online Education
              </h5>
              <h1 className='font-Outfit font-semibold text-HeadingColor-0 text-3xl sm:text-[50px] sm:leading-[60px] md:text-[60px] md:leading-[70px] lg:text-[42px] lg:leading-[48px] xl:text-[58px] xl:leading-[68px] 2xl:text-[65px] 2xl:leading-[75px]'>
                <span className='flex gap-3 items-center md:-mb-2'>
                  Explore
                  <div className='flex items-center gap-1'>
                    <span className='text-PrimaryColor-0'>
                      <OnScrollCounter
                        start={0}
                        end={2319}
                        duration={2000}
                      />
                    </span>
                    <span className='text-PrimaryColor-0'>+</span>
                  </div>
                </span>
                Best Online Courses
                <br /> from Educate
              </h1>
              <div className='mt-8'>
                <Link
                  to={'/about'}
                  className='primary-btn !bg-SecondaryColor-0'
                >
                  Find Courses
                  <HiArrowNarrowRight size={20} />
                </Link>
              </div>
              <div className='flex items-center gap-8 mt-10'>
                <div>
                  <button
                    className='size-20 bg-PrimaryColor-0 rounded-full text-white backdrop-filter backdrop-blur-md text-2xl md:text-4xl flex items-center justify-center '
                    onClick={() => setToggler(!toggler)}
                  >
                    <IoPlaySharp />
                  </button>
                </div>
                <div className='flex gap-2 sm:gap-5 flex-col sm:flex-row sm:items-center'>
                  <div>
                    <img
                      src={user}
                      draggable={false}
                      alt='User Image'
                    />
                  </div>
                  <div>
                    <div className='!font-Outfit text-PrimaryColor-0 flex gap-1 items-center uppercase'>
                      <OnScrollCounter
                        start={0}
                        end={15}
                        duration={1000}
                      />
                      <span>K Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='sm:flex justify-center lg:justify-end relative'>
              <img
                src={bannerImg}
                draggable='false'
                className='2xl:w-[inherit]'
              />
              <img
                src={bannerShape}
                draggable={false}
                className='absolute -top-10 animate-rotateX left-28 hidden md:block lg:hidden xl:block'
              />
              <div className='absolute top-0 left-0 md:left-[14.4%] lg:left-[0.4%] xl:left-[10%] 2xl:left-[23.3%] rounded-2xl md:rounded-[20px] overflow-hidden bg-PrimaryColor2-0 h-20 sm:h-[138px] lg:h-[130px] xl:h-[138px] w-[34%] md:w-[23.5%] lg:w-[33%] xl:w-[30%] 2xl:w-[25.7%] pt-1 sm:pt-8 pl-2 sm:pl-5'>
                <img
                  src={author}
                  draggable={false}
                  alt='User'
                  className='w-8 sm:w-inherit'
                />
                <h5 className='text-sm sm:text-base font-Outfit text-white uppercase sm:mt-3'>
                  Ui/Ux Designer
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute -z-10 left-5 top-14 hidden md:block'>
          <img
            src={shape}
            draggable={false}
            alt='Shape'
            className='animate-dance2'
          />
        </div>
        <div className='absolute -z-10 right-0 top-6 hidden md:block'>
          <img
            src={shape2}
            draggable={false}
            alt='Shape'
            className='animate-wiggle'
          />
        </div>
        <div className='absolute -z-10 left-[46%] top-[74%] hidden md:block'>
          <img
            src={shape3}
            draggable={false}
            alt='Shape'
            className='animate-wiggle'
          />
        </div>

        <FsLightboxPortal>
          <FsLightbox
            toggler={toggler}
            sources={['https://youtu.be/LlCwHnp3kL4?si=SD5vSCPhr4vc_U5t']}
          />
        </FsLightboxPortal>
      </section>

      {/* Feature */}
      <div className='Container'>
        <div className='flex justify-between items-center flex-wrap gap-6 py-[54px] relative z-10'>
          {featureData.map((feature) => (
            <FeatureCard
              key={feature.id}
              {...feature}
            />
          ))}
          <div className='absolute -left-[11%] -bottom-[40%] size-[550px] rounded-full bg-white bg-opacity-[2%] border-2 border-white border-opacity-10'></div>
          <div className='absolute -right-[11%] -top-[40%] size-[550px] rounded-full bg-white bg-opacity-[2%] border-2 border-white border-opacity-10'></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
