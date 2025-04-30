import bannerImg from '/images/hero-thumb8.png';
import bannerShape from '/images/hero-shape81.png';
import bannerShape2 from '/images/hero-circle2.png';
import bannerShape3 from '/images/hero-shape83.png';
import bannerShape4 from '/images/hero-arrow82.png';
import { Link } from 'react-router-dom';
import './banner.css';
import { FaCircle } from 'react-icons/fa6';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Banner = () => {
  return (
    <section className='px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[58px] bg-SecondaryColor-0 relative z-10 overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-6'>
        <div className='bg-[url("/images/hero-left-bg2.png")] bg-cover bg-bottom bg-no-repeat h-full flex items-center rounded-[20px] relative z-10 overflow-hidden'>
          <div className='pl-[104px]'>
            <div className='inline-block mb-4'>
              <h5 className='font-OpenSans bg-white bg-opacity-5 pl-4 pr-5 py-[7px] rounded-r-full border border-white text-HeadingColor-0 text-sm flex items-center gap-2 uppercase'>
                <span className='text-PrimaryColor2-0'>
                  <FaCircle size={8} />
                </span>
                Seek peace through Quran
              </h5>
            </div>
            <h1 className='font-Outfit font-semibold text-HeadingColor-0 text-[26px] leading-[32px] sm:text-[36px] sm:leading-[42px] md:text-[56px] md:leading-[62px] lg:text-[42px] lg:leading-[48px] xl:text-[48px] xl:leading-[54px] 2xl:text-[60px] 2xl:leading-[70px]'>
              Explore the Profound
              <br />
              Lessons of <span className='text-PrimaryColor-0'>Quran</span>
            </h1>
            <p className='font-OpenSans text-TextColor2-0 sm:text-lg mb-12 mt-8 max-w-[570px] w-full border-t border-SecondaryColor-0 border-opacity-10 pt-8'>
              Embark on a transformative journey of knowledge and spiritual pro
              filled with wisdom, guidance, and life lessons.
            </p>
            <div className='flex flex-wrap items-center gap-y-5 gap-x-12'>
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
                <img
                  src={bannerShape4}
                  draggable={false}
                  className='animate-dance'
                />
              </div>
            </div>
          </div>
          <div className='absolute -z-10 -bottom-[32%] -right-[21%]'>
            <img
              src={bannerShape2}
              draggable={false}
              className='animate-rotational'
            />
          </div>
          <div className='absolute -z-10 top-16 right-16'>
            <img
              src={bannerShape3}
              draggable={false}
              className='animate-float'
            />
          </div>
        </div>
        <div className='bg-[url("/images/hero-left-bg2.png")] bg-cover bg-bottom bg-no-repeat relative z-10 rounded-[20px] overflow-hidden'>
          <img
            src={bannerImg}
            draggable='false'
            className='2xl:w-[inherit]'
          />
          <img
            src={bannerShape}
            draggable={false}
            className='absolute top-16 animate-dance2 right-20 lg:right-20 hidden md:block lg:hidden xl:block'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
