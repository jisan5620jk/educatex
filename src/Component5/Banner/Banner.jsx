import { Link } from 'react-router-dom';
import bannerImg from '/images/technology-thumb.png';
import subTilteShape from '/images/hero-title-shape1.png';
import shape from '/images/animation-shape.webp';
import { FaArrowRightLong, FaDollarSign } from 'react-icons/fa6';
import { HiMiniArrowUpRight } from 'react-icons/hi2';

const Banner = () => {
  return (
    <div className='bg-BodyBgDark4-0 px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px]'>
      <section className="rounded-md lg:rounded-[20px] bg-[url('/images/hero-bg2.webp')] bg-cover bg-bottom bg-no-repeat h-[600px] sm:h-[780px] md:h-[1560px] lg:h-[700px] xl:h-[900px] flex items-center relative z-20 overflow-hidden">
        <div className='Container'>
          <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0 pt-[70px] md:pt-0 lg:pt-10'>
            <div className='relative'>
              <h5 className='font-Outfit text-PrimaryColor-0 text-xl font-semibold flex items-center gap-2 mb-4 uppercase'>
                <img
                  src={subTilteShape}
                  alt='Shape'
                  draggable='false'
                  className='animate-swing'
                />
                Best software agency
              </h5>
              <h1 className='font-Outfit font-extrabold text-HeadingColor-0 text-[27px] leading-[30px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[58px] xl:leading-[68px] 2xl:text-[70px] 2xl:leading-[68px]'>
                Driving Innovation for
                <br />
                Delivering Excellence
                <br />
                Best IT Startup
              </h1>
              <p className='font-OpenSans sm:text-xl text-TextColor2-0 mb-10 mt-6'>
                Continually formulate B2C partnerships orthogonal software
                <br className='hidden 2xl:block' /> maintainable quality through
                low budgets
              </p>
              <div className='mb-9'>
                <Link to={'/about3'}>
                  <button className='primary-btn'>
                    {`Learn More`}
                    <FaArrowRightLong size={'18'} />
                  </button>
                </Link>
              </div>
            </div>
            <div className='md:flex justify-center lg:justify-end relative 3xl:-right-[90px] hidden md:pb-28'>
              <img
                src={bannerImg}
                draggable='false'
                className='3xl:w-[inherit]'
              />
              <div className='absolute top-0 right-0 md:right-20 lg:right-0 xl:right-[90px] size-[65px] rounded-full bg-[#c12dff] flex items-center justify-center animate-rotateX text-white'>
                <FaDollarSign size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute left-20 top-[180px] animate-dance2 hidden 3xl:block'>
          <img
            src={shape}
            draggable={false}
            alt='Shape'
          />
        </div>
        <div className='absolute z-10 bottom-5 md:bottom-24 lg:bottom-0 xl:bottom-5 left-1/2 -translate-x-1/2 size-[74px] sm:size-[142px] lg:size-[170px] bg-white rounded-full flex items-center justify-center border border-PrimaryColor-0 border-opacity-20'>
          <div className='size-14 sm:size-24 lg:size-28 xl:size-[100px] animate-rotational'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 250.5 250.5'
              className='overflow-visible'
            >
              <path
                d='M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125'
                id='e-path-35ee1b2'
                className='fill-transparent'
              ></path>
              <text className='font-Outfit text-[41px] font-medium uppercase'>
                <textPath
                  id='e-text-path-35ee1b2'
                  href='#e-path-35ee1b2'
                  startOffset='0%'
                  className='fill-HeadingColor-0'
                >
                  ● STARTUP ● AWARD WINNING ● BEST AGENCY
                </textPath>
              </text>
            </svg>
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 sm:size-[50px] rounded-full flex items-center justify-center text-white bg-gradient-to-r to-PrimaryColor2-0 from-PrimaryColor3-0'>
            <HiMiniArrowUpRight size={24} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
