import bannerImg from '/images/hero-thumb4.png';
import bannerShape from '/images/hero-shape46.png';
import bannerShape2 from '/images/hero-shape45.png';
import bannerShape3 from '/images/hero-shape43.png';
import bannerShape4 from '/images/hero-shape44.png';
import bannerShape5 from '/images/hero-shape41.png';
import bannerShape6 from '/images/hero-shape42.png';
import btnIcon from '/images/book-icon.png';
import user from '/images/hero-autor.png';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
import './banner.css';

const Banner = () => {
  return (
    <section className="bg-[url('/images/hero-bg4.png')] bg-cover bg-bottom bg-no-repeat h-[1200px] sm:h-[1350px] md:h-[1450px] lg:h-[750px] xl:h-[890px] flex items-center relative z-10 overflow-hidden">
      <div className='absolute top-[26%] left-6 lg:left-20 hidden md:block lg:hidden 2xl:block'>
        <img
          src={bannerShape5}
          draggable={false}
          className='animate-float'
        />
      </div>
      <div className='absolute bottom-36 left-6 lg:left-36 hidden md:block lg:hidden 2xl:block'>
        <img
          src={bannerShape6}
          draggable={false}
          className='animate-flip'
        />
      </div>
      <div className='Container lg:px-0'>
        <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0 mt-[70px] lg:mt-[90px]'>
          <div className='relative'>
            <h1 className='font-Outfit font-semibold text-HeadingColor-0 text-[26px] leading-[32px] sm:text-[36px] sm:leading-[42px] md:text-[56px] md:leading-[62px] lg:text-[42px] lg:leading-[48px] xl:text-[48px] xl:leading-[76px] 2xl:text-[60px] 2xl:leading-[70px]'>
              Unlocking the Magic of <br />
              Learning – Bright Future <br />
              Strong Foundation
            </h1>
            <p className='font-OpenSans text-TextColor2-0 mb-8 mt-5'>
              <span className='text-HeadingColor-0'>Educate</span> the ultimate
              destination for knowledge seekers and educators alike.
              <br className='hidden 2xl:block' /> We are committed to
              transforming education
            </p>
            <div className='flex flex-wrap items-center gap-y-5 gap-x-8'>
              <div>
                <Link
                  to={'/about'}
                  className='primary-btn !px-9'
                >
                  <img
                    src={btnIcon}
                    draggable={false}
                    alt='Button Icon'
                  />
                  Get Started
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
          </div>
          <div className='sm:flex justify-center lg:justify-end relative 3xl:-right-[110px] z-10'>
            <img
              src={bannerImg}
              draggable='false'
              className='2xl:w-[inherit]'
            />
            <img
              src={bannerShape}
              draggable={false}
              className='absolute top-10 animate-dance2 right-16 lg:-right-5 hidden md:block lg:hidden xl:block'
            />
            <img
              src={bannerShape3}
              draggable={false}
              className='absolute top-[17%] left-6 lg:-left-4 animate-rotational hidden md:block lg:hidden 2xl:block'
            />
            <img
              src={bannerShape2}
              draggable={false}
              className='absolute top-0 right-44 animate-swing hidden md:block lg:hidden 2xl:block'
            />
            <img
              src={bannerShape4}
              draggable={false}
              className='absolute -z-10 bottom-0 -left-20 animate-dance hidden md:block lg:hidden 2xl:block'
            />
            <div className='hidden absolute bottom-32 lg:bottom-20 xl:bottom-2 left-0 lg:left-[24%] bg-white rounded-[20px] px-7 py-7 md:inline-flex gap-5 items-start animate-movebtn'>
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
