import bannerImg from '/images/hero-thumb7.png';
import bannerShape from '/images/hero-love.png';
import icon from '/images/star-icon.png';
import user from '/images/hero-autor.png';
import author from '/images/hero-autor3.png';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { RxStarFilled } from 'react-icons/rx';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
import { FaCircle } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] bg-SecondaryColor-0'>
      <section className="bg-[url('/images/hero-bg7.png')] bg-cover bg-center bg-no-repeat h-[1200px] sm:h-[1350px] md:h-[1450px] lg:h-[750px] xl:h-[870px] flex items-center relative z-10 rounded-b-[30px] overflow-hidden">
        <div className='Container'>
          <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0 mt-[70px] lg:mt-[90px]'>
            <div className='relative'>
              <h5 className='font-OpenSans bg-white bg-opacity-30 pl-4 pr-5 py-[7px] rounded-r-full border border-white text-HeadingColor-0 text-sm inline-flex items-center gap-2 uppercase mb-4'>
                <span className='text-PrimaryColor2-0'>
                  <FaCircle size={10} />
                </span>
                Welcome to Online Education
              </h5>
              <h1 className='font-Outfit font-semibold text-HeadingColor-0 text-[26px] leading-[32px] sm:text-[36px] sm:leading-[42px] md:text-[56px] md:leading-[62px] lg:text-[42px] lg:leading-[48px] xl:text-[48px] xl:leading-[54px] 2xl:text-[65px] 2xl:leading-[75px]'>
                <span className='flex gap-3'>
                  Explore
                  <span className='text-PrimaryColor-0'>
                    <OnScrollCounter
                      start={0}
                      end={2319}
                      duration={2000}
                    />
                  </span>
                  <span className='text-PrimaryColor-0'>+</span>
                </span>
                Best Online Courses
                <br /> from Educate
              </h1>
              <div className='mt-8'>
                  <Link
                    to={'/about'}
                    className='primary-btn'
                  >
                    Find Courses
                    <HiArrowNarrowRight size={20} />
                  </Link>
              </div>
              <div className='flex flex-col sm:flex-row gap-5 items-start mt-16 md:mt-14'>
                <div className='flex items-center -space-x-3'>
                  <div>
                    <img
                      src={icon}
                      draggable={false}
                      alt='Icon'
                    />
                  </div>
                  <div className='size-[57px] rounded-full bg-PrimaryColor-0 border-[3px] border-white flex items-center justify-center'>
                    <h5 className='font-Outfit text-white text-xl font-medium'>
                      1k+
                    </h5>
                  </div>
                </div>
                <div>
                  <div className='flex items-center gap-2 mb-2'>
                    <ul className='flex items-center gap-[2px]'>
                      <li className='text-[#ff9d14] text-lg'>
                        <RxStarFilled />
                      </li>
                      <li className='text-[#ff9d14] text-lg'>
                        <RxStarFilled />
                      </li>
                      <li className='text-[#ff9d14] text-lg'>
                        <RxStarFilled />
                      </li>
                      <li className='text-[#ff9d14] text-lg'>
                        <RxStarFilled />
                      </li>
                      <li className='text-[#ff9d14] text-lg'>
                        <RxStarFilled />
                      </li>
                    </ul>
                    <div>
                      <h6 className='font-Outfit text-HeadingColor-0'>
                        (4.9 Ratings)
                      </h6>
                    </div>
                  </div>
                  <p className='font-OpenSans text-TextColor-0'>
                    Students learn daily with
                    <br /> educate platform
                  </p>
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
              <div className='absolute top-0 left-[23.5%] rounded-[20px] overflow-hidden bg-PrimaryColor2-0 h-[138px] w-[25.5%] pt-8 pl-5'>
                <img
                  src={author}
                  draggable={false}
                  alt='User'
                />
                <h5 className='font-Outfit text-white uppercase mt-3'>
                  Ui/Ux Designer
                </h5>
              </div>
              <div className='hidden absolute bottom-32 lg:bottom-20 xl:bottom-32 left-0 lg:-left-16 bg-white bg-opacity-40 backdrop-filter backdrop-blur-md border-2 border-white rounded-[20px] px-7 py-7 md:inline-flex gap-5 items-start'>
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
    </div>
  );
};

export default Banner;
