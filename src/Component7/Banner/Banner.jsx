import { Link } from 'react-router-dom';
import bannerImg from '/images/hero-thumb.png';
import bannerShape from '/images/hero-shape.png';
import subTilteShape from '/images/hero-title-shape1.png';
import titleShape from '/images/hero-title-shape2.png';
import bannerReview from '/images/rating-shape.png';
import { FaArrowRightLong } from 'react-icons/fa6';

const Banner = () => {
  return (
    <section className="bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[700px] sm:h-[1260px] md:h-[1360px] lg:h-[700px] xl:h-[900px] flex items-center relative z-10 overflow-hidden">
      <div className='Container'>
        <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0 pt-[70px] lg:pt-0'>
          <div className='relative'>
            <h5 className='font-Outfit text-white text-xl font-semibold flex items-center gap-2 mb-4 uppercase'>
              <img
                src={subTilteShape}
                alt='Shape'
                draggable='false'
                className='animate-swing'
              />
              Best software agency
            </h5>
            <h1 className='font-Outfit font-extrabold text-white text-[34px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[58px] xl:leading-[68px] 2xl:text-[80px] 2xl:leading-[75px]'>
              Convert Idea to
              <br />
              <span className='flex items-center gap-2 sm:gap-4'>
                <img
                  src={titleShape}
                  alt='Shape'
                  draggable='false'
                  className='animate-bounce w-8 sm:w-12 2xl:w-[inherit]'
                />{' '}
                Your Business
              </span>
            </h1>
            <p className='font-OpenSans sm:text-xl text-white mb-10 mt-6'>
              Continually formulate B2C partnerships orthogonal software
              <br className='hidden 2xl:block' /> maintainable quality through
              low budgets
            </p>
            <div className='flex flex-col sm:flex-row gap-5 mb-9'>
              <Link to={'/about'}>
                <button className='primary-btn'>
                  {`Learn More`}
                  <FaArrowRightLong size={'18'} />
                </button>
              </Link>
              <Link to={'/about'}>
                <button className='flex items-center gap-2 border border-BorderColor3-0 py-[13px] px-11 transition-all text-lg duration-500 ease-linear rounded-full text-white font-semibold font-Outfit uppercase bg-transparent to-PrimaryColor-0 from-PrimaryColor2-0 hover:border-PrimaryColor-0 hover:bg-gradient-to-l'>
                  {`Contact Us`}
                  <FaArrowRightLong size={'18'} />
                </button>
              </Link>
            </div>
            <div>
              <img
                src={bannerReview}
                draggable='false'
                alt='Image'
              />
            </div>
          </div>
          <div className='sm:flex justify-center lg:justify-end lg:-mb-12 relative hidden'>
            <img
              src={bannerImg}
              draggable='false'
              className='2xl:w-[inherit]'
            />
            <img
              src={bannerShape}
              draggable={false}
              className='absolute -top-7 right-0 md:right-20 lg:right-0 xl:right-0 2xl:right-[5rem] animate-rotational hidden sm:block'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
