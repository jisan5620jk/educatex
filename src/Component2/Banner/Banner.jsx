import { Link } from 'react-router-dom';
import bannerImg from '/images/AI.png';
import bannerShape from '/images/AI-1.png';
import bannerShape2 from '/images/AI-2.png';
import bannerShape3 from '/images/triangle.png';
import subTilteShape from '/images/hero-title-shape1.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Banner = () => {
  return (
    <section className="bg-[url('/images/ai-home.jpg')] bg-cover bg-center bg-no-repeat h-[960px] sm:h-[1200px] md:h-[1400px] lg:h-[760px] xl:h-[850px] 2xl:h-[950px] flex items-center relative z-10 overflow-hidden">
      <div className='Container'>
        <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0'>
          <div className='relative'>
            <h5 className='font-Rajdhani text-transparent bg-clip-text bg-gradient-to-r to-PrimaryColor2-0 from-PrimaryColor3-0 text-xl font-semibold flex items-center gap-2 mb-4 md:mb-7 uppercase'>
              <img
                src={subTilteShape}
                alt='Shape'
                draggable='false'
                className='animate-swing'
              />
              Making Your Life Easier
            </h5>
            <h1 className='font-Rajdhani font-bold uppercase text-HeadingColor-0 -tracking-[2px] text-[30px] leading-[36px] sm:text-[46px] sm:leading-[56px] md:text-[68x] lg:text-[46px] xl:text-[54px] xl:leading-[64px] 2xl:text-[65px] 2xl:leading-[68px]'>
              Empowering the Future
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-PrimaryColor2-0 from-PrimaryColor3-0'>
                robotics
              </span>{' '}
              solutions for
              <br />
              top Challenges
            </h1>
            <p className='font-Nunito sm:text-lg text-TextColor2-0 mb-9 mt-3'>
              Continually formulate B2C partnerships orthogonal software
              solutions
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
            <img
              src={bannerShape}
              draggable={false}
              className='absolute -bottom-44 -right-10 animate-wiggle hidden sm:block'
            />
          </div>
          <div className='flex justify-center lg:justify-end relative'>
            <img
              src={bannerImg}
              draggable='false'
              className='2xl:w-[inherit] 2xl:max-w-[inherit] relative 2xl:-right-[128px]'
            />
            <img
              src={bannerShape2}
              draggable={false}
              className='absolute top-0 left-10 animate-rotational hidden sm:block'
            />
            <img
              src={bannerShape3}
              draggable={false}
              className='absolute top-14 -right-16 animate-dance2 hidden sm:block'
            />
          </div>
        </div>
      </div>
      <div className='absolute top-1/2 -left-24 hidden 3xl:block'>
        <div className='rotate-90 flex items-center gap-5'>
          <h5 className='font-Rajdhani font-semibold text-xl text-HeadingColor-0 uppercase relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[60px] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:from-70%'>
            Follow Us
          </h5>
          <ul className='flex items-center gap-3'>
            <li>
              <button className='size-[38px] rounded-full flex items-center justify-center bg-white border-PrimaryColor-0 border border-opacity-20 overflow-hidden transition-all duration-500 hover:text-white text-PrimaryColor-0 -rotate-90 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 before:rotate-180 hover:before:rotate-0 hover:before:scale-100'>
                <FaFacebookF />
              </button>
            </li>
            <li>
              <button className='size-[38px] rounded-full flex items-center justify-center bg-white border-PrimaryColor-0 border border-opacity-20 overflow-hidden transition-all duration-500 hover:text-white text-PrimaryColor-0 -rotate-90 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 before:rotate-180 hover:before:rotate-0 hover:before:scale-100'>
                <FaXTwitter />
              </button>
            </li>
            <li>
              <button className='size-[38px] rounded-full flex items-center justify-center bg-white border-PrimaryColor-0 border border-opacity-20 overflow-hidden transition-all duration-500 hover:text-white text-PrimaryColor-0 -rotate-90 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 before:rotate-180 hover:before:rotate-0 hover:before:scale-100'>
                <FaLinkedinIn />
              </button>
            </li>
            <li>
              <button className='size-[38px] rounded-full flex items-center justify-center bg-white border-PrimaryColor-0 border border-opacity-20 overflow-hidden transition-all duration-500 hover:text-white text-PrimaryColor-0 -rotate-90 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 before:rotate-180 hover:before:rotate-0 hover:before:scale-100'>
                <FaInstagram />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
