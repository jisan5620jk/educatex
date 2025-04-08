import { Link } from 'react-router-dom';
import bannerImg from '/images/hero-thumb-1.png';
import bannerShape from '/images/hero-shape2.png';
import bannerShape2 from '/images/hero-shape1.png';
import subTilteShape from '/images/hero-title-shape1.png';
import provideShape from '/images/hand-img.png';

const Banner = () => {
  return (
    <section className="bg-[url('/images/hero_bg.png')] bg-cover bg-center bg-no-repeat pt-32 md:pt-36 lg:pt-40 xl:pt-[228px] pb-20 md:pb-24 lg:pb-28 xl:pb-[212px] flex items-center relative z-10 overflow-hidden">
      <div className='Container'>
        <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0'>
          <div className='relative'>
            <h5 className='font-Rajdhani text-white text-lg sm:text-xl font-semibold flex items-center gap-2 mb-4 md:mb-7 uppercase'>
              <img
                src={subTilteShape}
                alt='Shape'
                draggable='false'
                className='animate-swing'
              />
              The Best Software Agency
            </h5>
            <h1 className='font-Rajdhani font-bold uppercase text-white -tracking-[2px] text-[30px] leading-[36px] sm:text-[46px] sm:leading-[56px] md:text-[68x] lg:text-[46px] xl:text-[54px] xl:leading-[64px] 2xl:text-[69.8px] 2xl:leading-[70px]'>
              providing software
              <br /> solutions for your
              <br /> any business
            </h1>
            <p className='font-Nunito sm:text-xl lg:text-lg xl:text-xl text-white opacity-70 mb-9 mt-3'>
              Continually formulate B2C partnerships orthogonal
              <br className='hidden lg:block xl:hidden' /> software
              <br className='hidden md:block lg:hidden 2xl:block' />{' '}
              maintainable quality through low budgets
            </p>
            <div>
              <Link
                to={'/about3'}
                className='inline-block'
              >
                <button className='primary-btn'>
                  {`Discover More`}
                  <span className='icon-style'>
                    <svg
                      className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
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
              </Link>
            </div>
          </div>
          <div className='flex justify-center lg:justify-end relative'>
            <img
              src={bannerImg}
              draggable='false'
              className='2xl:w-[inherit] 2xl:max-w-[inherit] relative 2xl:-right-[84px]'
            />
            <img
              src={bannerShape2}
              draggable={false}
              className='absolute top-0 left-[27%] lg:left-[25%] xl:left-[30%] lg:-top-7 xl:top-0 2xl:left-[35%] animate-rotational hidden md:block'
            />
            <img
              src={bannerShape}
              draggable={false}
              className='absolute top-14 -right-0 lg:-right-24 animate-wiggle hidden md:block lg:hidden 2xl:block'
            />
          </div>
        </div>
      </div>
      <div className='absolute bottom-20 left-0 animate-wiggle hidden 3xl:block'>
        <img
          src={provideShape}
          draggable={false}
          alt='Shape'
        />
      </div>
    </section>
  );
};

export default Banner;
