import { Link } from 'react-router-dom';
import bannerImg from '/images/cctv-banner-image.png';
import border from '/images/border1.png';
import border2 from '/images/border2.png';
import { FaCheck } from 'react-icons/fa6';
const Banner = () => {
  return (
    <section className="bg-[url('/images/cctv-banner-bg.jpg')] bg-cover bg-center bg-no-repeat h-[760px] sm:h-[1000px] md:h-[1300px] lg:h-[760px] xl:h-[850px] 2xl:h-[950px] flex items-center relative z-10 overflow-hidden">
      <div className='Container'>
        <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0 pt-[70px] lg:pt-[100px]'>
          <div className='relative'>
            <h5 className='font-Rajdhani text-white text-xl font-semibold flex items-center gap-2 mb-4 md:mb-4 uppercase'>
              Be Protecting Save Everytime
            </h5>
            <h1 className='2xl:-ml-1 font-Rajdhani font-bold uppercase text-white -tracking-[1px] text-[30px] leading-[36px] sm:text-[46px] sm:leading-[56px] md:text-[68px] md:leading-[74px] lg:text-[56px] lg:leading-[62px] xl:text-[60px] xl:leading-[64px] 2xl:text-[90px] 2xl:leading-[90px]'>
              BUILDING TRUST
              <br />
              SECURING FUTURE
              <br />
              ASSURENCE
            </h1>
            <div className='mt-7'>
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
          <div className='relative'>
            <img
              src={bannerImg}
              draggable='false'
              className='2xl:w-[inherit] 2xl:max-w-[inherit] relative z-10 2xl:-right-[52px] 2xl:bottom-8'
            />
            <div className='hidden absolute -top-7 2xl:-top-16 3xl:-top-7 right-0 xl:right-0 2xl:right-0 3xl:-right-[234px] md:flex items-center gap-3 pr-[46px] pl-2 py-[6px] bg-white bg-opacity-30 border border-white border-opacity-60 rounded-full'>
              <div className='size-[38px] rounded-full bg-gradient-to-r to-PrimaryColor2-0 from-PrimaryColor3-0 flex items-center justify-center text-white'>
                <FaCheck size={20} />
              </div>
              <h5 className='flex-1 font-Rajdhani font-semibold text-HeadingColor-0 text-xl'>
                6 Years Warranty
              </h5>
            </div>
            <img
              src={border}
              draggable={false}
              alt='Border'
              className='absolute bottom-36 xl:bottom-[8rem] 2xl:bottom-[175px] left-14 xl:-left-[1.2rem] 2xl:left-14 hidden md:block'
            />
            <img
              src={border2}
              draggable={false}
              alt='Border'
              className='absolute -top-1 2xl:-top-10 3xl:-top-1 right-[260px] xl:right-[16rem] 2xl:right-[16rem] 3xl:right-6 hidden md:block'
            />
            <div className='hidden absolute -bottom-14 lg:-bottom-[7.25rem] xl:-bottom-[4.25rem] 2xl:-bottom-7 left-3 lg:-left-[7rem] xl:-left-[4.25rem] 2xl:left-3 max-w-[324px] w-full md:flex items-start gap-3 px-7 py-8 bg-white bg-opacity-30 border-2 border-white border-opacity-60 rounded-2xl'>
              <div className='size-[42px] rounded-full bg-gradient-to-t to-PrimaryColor2-0 from-PrimaryColor3-0 flex items-center justify-center text-white'>
                <FaCheck size={22} />
              </div>
              <div className='flex-1'>
                <h5 className='font-Rajdhani font-semibold text-HeadingColor-0 text-[22px] leading-[26px] border-b border-HeadingColor-0 border-opacity-30 pb-2 mb-2'>
                  PROTECT & SECURE EVERYTHIG
                </h5>
                <p className='font-Nunito text-lg text-HeadingColor-0 leading-6'>
                  High Defination HD <br /> Clean Footage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
