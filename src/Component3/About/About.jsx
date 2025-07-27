import aboutThumb from '/images/about-thumb4.png';
import itemIcon from '/images/about-icon.png';
import subTilteIcon from '/images/sub-title2.png';
import shape from '/images/about-shpae2.png';
import shape2 from '/images/about-shpae1.png';
import { Link } from 'react-router-dom';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
import btnIcon from '/images/book-icon.png';
import aboutIcon from '/images/about-call2.png';

const About = () => {
  return (
    <section className='py-16 md:py-20 lg:pt-28 lg:pb-20 xl:py-28 relative'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 items-center'>
          <div className='relative z-10'>
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full 2xl:w-[inherit] max-w-[inherit] 2xl:-ml-[35px] xl:-[50px]'
            />
            <img
              src={shape}
              draggable={false}
              alt='Shape'
              className='absolute -z-10 bottom-12 lg:left-[5%] animate-dance'
            />
            <img
              src={shape2}
              draggable={false}
              alt='Shape'
              className='absolute -z-10 top-[12%] right-[13%] animate-rotateX hidden sm:block'
            />
          </div>
          <div className='relative'>
            <h5 className='zoom-in font-Outfit font-medium text-PrimaryColor-0 uppercase flex items-center gap-3'>
              <img
                src={subTilteIcon}
                draggable={false}
                alt='Icon'
              />{' '}
              ABOUT US
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4'>
              Who We Are – Introduction to
              <br />
              Educate Online Platform
            </h1>
            <div className='box-row grid grid-cols-1 sm:grid-cols-2 items-center gap-5 mt-8 mb-9'>
              <div className='box bg-PrimaryColor-0 bg-opacity-[7%] h-[316px] flex flex-col justify-between rounded-[20px] px-7 lg:px-4 xl:px-7 pt-8 pb-9'>
                <div>
                  <h4 className='font-Outfit text-HeadingColor-0 font-medium text-[26px]'>
                    Our Mission
                  </h4>
                  <p className='font-OpenSans lg:text-sm xl:text-base text-TextColor-0 max-w-[570px] w-full pt-[6px]'>
                    Educate the ultimate destination transforming to education
                    best educational environment
                  </p>
                </div>
                <ul className='space-y-2'>
                  <li className='flex items-center gap-[10px]'>
                    <div>
                      <img
                        src={itemIcon}
                        draggable={false}
                        alt='Icon'
                        className='w-[16px]'
                      />
                    </div>
                    <h5 className='flex-1 font-Outfit text-base lg:text-sm xl:text-base text-HeadingColor-0'>
                      Quick Learning System
                    </h5>
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <div>
                      <img
                        src={itemIcon}
                        draggable={false}
                        alt='Icon'
                        className='w-[16px]'
                      />
                    </div>
                    <h5 className='flex-1 font-Outfit text-base lg:text-sm xl:text-base text-HeadingColor-0'>
                      Super Fast Online Platform
                    </h5>
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <div>
                      <img
                        src={itemIcon}
                        draggable={false}
                        alt='Icon'
                        className='w-[16px]'
                      />
                    </div>
                    <h5 className='flex-1 font-Outfit text-base lg:text-sm xl:text-base text-HeadingColor-0'>
                      Weekly Assignments
                    </h5>
                  </li>
                </ul>
              </div>
              <div className='box bg-PrimaryColor2-0 bg-opacity-[7%] h-[316px] flex flex-col justify-between rounded-[20px] px-7 pt-8 pb-9'>
                <div className=''>
                  <div className='text-5xl md:text-[56px] lg:text-[56px] leading-[56px] tracking-wide font-semibold font-Outfit text-PrimaryColor2-0 inline-flex items-center relative'>
                    <OnScrollCounter
                      start={0}
                      end={6}
                      duration={1000}
                    />
                    <h1>K</h1>
                    <h2 className='absolute -top-0 -right-5 font-Outfit text-3xl'>
                      +
                    </h2>
                  </div>
                  <div>
                    <p className='font-OpenSans lg:text-sm text-TextColor-0 mt-2'>
                      Enrolled Students all
                      <br /> Over the World
                    </p>
                  </div>
                </div>
                <div className='flex lg:flex-col xl:flex-row items-start gap-4 pt-1'>
                  <div>
                    <img
                      src={aboutIcon}
                      draggable={false}
                      alt='Icon'
                    />
                  </div>
                  <div className='flex-1 -mt-1'>
                    <h6 className='font-Outfit text-HeadingColor-0'>
                      Call Us AnyTime
                    </h6>
                    <a
                      href='tel:+6803290570'
                      title='+(680) 3290 570'
                      className='font-Outfit text-xl font-medium text-HeadingColor-0 pt-1'
                    >
                      +(680) 3290 570
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='fade-up'>
              <Link
                to={'/about'}
                className='primary-btn2'
              >
                <img
                  src={btnIcon}
                  draggable={false}
                  alt='Button Icon'
                />
                More About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
