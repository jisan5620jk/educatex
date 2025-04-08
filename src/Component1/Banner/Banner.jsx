import bannerImg from '/images/single-seo.png';
import bannerShape from '/images/banner-arrow.png';
import bannerShape2 from '/images/shape-3.png';
import subTilteShape from '/images/hero-title-shape1.png';
import titleShape from '/images/horen.png';
import bannerReview from '/images/google.png';
import { GoGlobe } from 'react-icons/go';

const Banner = () => {
  return (
    <section className="bg-[url('/images/about-bg-1-1.png')] bg-cover bg-center bg-no-repeat h-[700px] sm:h-[1350px] md:h-[1450px] lg:h-[750px] xl:h-[952px] flex items-center relative z-10 overflow-hidden">
      <div className='Container'>
        <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0'>
          <div className='relative'>
            <h5 className='font-Rajdhani bg-gradient-to-r to-PrimaryColor3-0 to-50% from-PrimaryColor2-0 bg-clip-text text-transparent text-lg sm:text-xl font-semibold flex items-center gap-2 mb-5 uppercase'>
              <img
                src={subTilteShape}
                alt='Shape'
                draggable='false'
                className='animate-swing'
              />
              Best agency based in usa
            </h5>
            <h1 className='font-Rajdhani font-extrabold tracking-tight text-SecondaryColor-0 text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[64px] md:leading-[74px] lg:text-[50px] xl:text-[66px] xl:leading-[76px] 2xl:text-[80px] 2xl:leading-[80px]'>
              <div className='flex items-center gap-2 md:gap-6'>
                Dominate
                <img
                  draggable='false'
                  src={titleShape}
                  alt='Shape'
                  className='animate-swing w-10 md:w-[inherit]'
                />
                Search
              </div>
              Results and Expand <br />
              Your Reach
            </h1>
            <p className='font-Nunito sm:text-xl text-TextColor2-0 mb-8 mt-3'>
              Continually formulate B2C partnerships orthogonal software
              <br className='hidden 2xl:block' /> maintainable quality through
              low budgets
            </p>
            <div className='relative max-w-[580px]'>
              <div className='relative'>
                <input
                  type='text'
                  id='search'
                  name='search'
                  placeholder='Your Website URL'
                  required
                  className='w-full h-[50px] sm:h-[62px] py-3 px-12 rounded-full border font-Nunito border-PrimaryColor-0 border-opacity-30 bg-transparent outline-none'
                />
                <span className='absolute top-1/2 -translate-y-1/2 left-7 text-PrimaryColor3-0'>
                  <GoGlobe />
                </span>
              </div>
              <button
                type='submit'
                className='absolute top-1/2 right-0 -translate-y-1/2 banner-btn flex items-center gap-2 px-4 sm:px-9 py-[13px] sm:py-[17px] font-Rajdhani text-base sm:text-lg uppercase font-medium rounded-r-full text-white bg-gradient-to-r to-PrimaryColor2-0 from-PrimaryColor3-0 transition-all duration-500'
              >
                Analyze Now
                <span className='icon-style'>
                  <svg
                    className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-3 w-auto transition-all duration-500'
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
            </div>
            <div className='mt-10'>
              <img
                draggable='false'
                src={bannerReview}
                alt='Image'
                className='w-[75%] sm:w-[inherit]'
              />
            </div>
            <img
              src={bannerShape}
              draggable={false}
              className='absolute bottom-28 right-0 lg:-right-24 xl:right-0 2xl:-right-[60px] animate-dance3 hidden md:block lg:hidden 2xl:block'
            />
          </div>
          <div className='sm:flex justify-center lg:justify-end relative 2xl:-right-[60px] hidden'>
            <img
              src={bannerImg}
              draggable='false'
              className='2xl:w-[inherit]'
            />
            <img
              src={bannerShape2}
              draggable={false}
              className='absolute bottom-[60px] right-0 md:right-20 lg:right-0 xl:right-0 2xl:-right-[90px] animate-wiggle lg:w-[38%] hidden md:block'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
