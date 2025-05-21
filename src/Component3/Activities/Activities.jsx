import subTilteIcon from '/images/sub-title2.png';
import { Link } from 'react-router-dom';
import btnIcon from '/images/book-icon.png';
import Icon from '/images/activite-icon1.png';
import Icon2 from '/images/activite-icon2.png';
import Icon3 from '/images/activite-icon3.png';
import Icon4 from '/images/activite-icon4.png';
import Icon5 from '/images/activite-icon5.png';
import Shape from '/images/activite-shape1.png';
import Shape2 from '/images/activite-shape2.png';
import Shape3 from '/images/about-shape31.png';

const Activities = () => {
  return (
    <section className='py-10 md:py-20 xl:py-28 relative'>
      <div className='absolute left-24 top-32 hidden 3xl:block'>
        <img
          src={Shape}
          draggable={false}
          alt='Shape'
          className='animate-float'
        />
      </div>
      <div className='absolute top-36 right-32 animate-dance2 hidden 3xl:block'>
        <img
          src={Shape2}
          draggable='false'
          alt='Shape'
        />
      </div>
      <div
        className='absolute top-36 right-32 animate-dance2 hidden 3xl:block'
        style={{ animationDelay: '1.5s' }}
      >
        <img
          src={Shape2}
          draggable='false'
          alt='Shape'
        />
      </div>
      <div className='absolute right-8 -bottom-20 hidden 3xl:block'>
        <img
          src={Shape3}
          draggable={false}
          alt='Shape'
          className='animate-dance'
        />
      </div>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-7 lg:gap-0 lg:grid-cols-2 items-center'>
          <div>
            <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase flex items-center gap-3'>
              <img
                src={subTilteIcon}
                draggable={false}
                alt='Icon'
              />{' '}
              ACTIVITIES
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4'>
              Exploring Nature, Playgrounds
              <br />
              Physical Activities for Kids
            </h1>
          </div>
          <div className='xl:pr-8 flex lg:justify-end'>
            <p className='font-OpenSans text-TextColor-0 max-w-[500px] w-full'>
              Educate the ultimate destination for knowledge seekers educators
              We are committed to transforming special education impact global
              without standards compliant systems
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-x-6 gap-y-3 mt-8'>
          <div className='group bg-[url("/images/activite-bg1.png")] bg-cover bg-center bg-no-repeat flex items-start gap-7 pt-8 sm:pt-10 md:pt-7 lg:pt-10 xl:pt-8 2xl:pt-10 pl-4 sm:pl-8 pr-3 sm:pr-7 h-[160px] rounded-[20px] transition-all duration-500 relative z-10'>
            <div className='mb-6'>
              <img
                src={Icon}
                draggable='false'
                className='transition-all duration-500 group-hover:animate-wobble_vertical'
              />
            </div>
            <div className='flex-1 -mt-1'>
              <Link
                to={'/service'}
                className='font-Outfit font-medium text-lg sm:text-2xl md:text-xl xl:text-[22px] text-HeadingColor-0 transition-all duration-500'
              >
                Art Galary Visit
              </Link>
              <p className='font-OpenSans text-sm sm:text-base text-TextColor2-0 transition-all duration-500 w-full max-w-[270px] mt-2'>
                Explore local parks or nature trails, identifying plants,
                animals...
              </p>
            </div>
          </div>
          <div className='group bg-[url("/images/activite-bg2.png")] bg-cover bg-center bg-no-repeat flex items-start gap-7 pt-8 sm:pt-10 md:pt-7 lg:pt-10 xl:pt-8 2xl:pt-10 pl-4 sm:pl-8 pr-3 sm:pr-7 h-[160px] rounded-[20px] transition-all duration-500 relative z-10'>
            <div className='mb-6'>
              <img
                src={Icon2}
                draggable='false'
                className='transition-all duration-500 group-hover:animate-wobble_vertical'
              />
            </div>
            <div className='flex-1 -mt-1'>
              <Link
                to={'/service'}
                className='font-Outfit font-medium text-lg sm:text-2xl md:text-xl xl:text-[22px] text-HeadingColor-0 transition-all duration-500'
              >
                Nature Walking
              </Link>
              <p className='font-OpenSans text-sm sm:text-base text-TextColor2-0 transition-all duration-500 w-full max-w-[270px] mt-2'>
                Explore local parks or nature trails, identifying plants,
                animals...
              </p>
            </div>
          </div>
          <div className='group bg-[url("/images/activite-bg1.png")] bg-cover bg-center bg-no-repeat flex items-start gap-7 pt-8 sm:pt-10 md:pt-7 lg:pt-10 xl:pt-8 2xl:pt-10 pl-4 sm:pl-8 pr-3 sm:pr-7 h-[160px] rounded-[20px] transition-all duration-500 relative z-10'>
            <div className='mb-6'>
              <img
                src={Icon3}
                draggable='false'
                className='transition-all duration-500 group-hover:animate-wobble_vertical'
              />
            </div>
            <div className='flex-1 -mt-1'>
              <Link
                to={'/service'}
                className='font-Outfit font-medium text-lg sm:text-2xl md:text-xl xl:text-[22px] text-HeadingColor-0 transition-all duration-500'
              >
                Aquarium Adventure
              </Link>
              <p className='font-OpenSans text-sm sm:text-base text-TextColor2-0 transition-all duration-500 w-full max-w-[270px] mt-2'>
                Explore local parks or nature trails, identifying plants,
                animals...
              </p>
            </div>
          </div>
          <div className='group bg-[url("/images/activite-bg4.png")] bg-cover bg-center bg-no-repeat flex items-start gap-7 pt-8 sm:pt-10 md:pt-7 lg:pt-10 xl:pt-8 2xl:pt-10 pl-4 sm:pl-8 pr-3 sm:pr-7 h-[160px] rounded-[20px] transition-all duration-500 relative z-10'>
            <div className='mb-6'>
              <img
                src={Icon4}
                draggable='false'
                className='transition-all duration-500 group-hover:animate-wobble_vertical'
              />
            </div>
            <div className='flex-1 -mt-1'>
              <Link
                to={'/service'}
                className='font-Outfit font-medium text-lg sm:text-2xl md:text-xl xl:text-[22px] text-HeadingColor-0 transition-all duration-500'
              >
                Music & Dancing
              </Link>
              <p className='font-OpenSans text-sm sm:text-base text-TextColor2-0 transition-all duration-500 w-full max-w-[270px] mt-2'>
                Explore local parks or nature trails, identifying plants,
                animals...
              </p>
            </div>
          </div>
          <div className='group bg-[url("/images/activite-bg5.png")] bg-cover bg-center bg-no-repeat flex items-start gap-7 pt-8 sm:pt-10 md:pt-7 lg:pt-10 xl:pt-8 2xl:pt-10 pl-4 sm:pl-8 pr-3 sm:pr-7 h-[160px] rounded-[20px] transition-all duration-500 relative z-10'>
            <div className='mb-6'>
              <img
                src={Icon5}
                draggable='false'
                className='transition-all duration-500 group-hover:animate-wobble_vertical'
              />
            </div>
            <div className='flex-1 -mt-1'>
              <Link
                to={'/service'}
                className='font-Outfit font-medium text-lg sm:text-2xl md:text-xl xl:text-[22px] text-HeadingColor-0 transition-all duration-500'
              >
                Sports Training
              </Link>
              <p className='font-OpenSans text-sm sm:text-base text-TextColor2-0 transition-all duration-500 w-full max-w-[270px] mt-2'>
                Explore local parks or nature trails, identifying plants,
                animals...
              </p>
            </div>
          </div>

          <div className='group bg-[url("/images/activite-bg6.png")] bg-cover bg-center bg-no-repeat flex items-center justify-center h-[160px] rounded-[10px]'>
            <div>
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

export default Activities;
