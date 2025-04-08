import titleShape from '/images/sub-title-shape.png';
import ctaImage from '/images/cta-image.png';
import { Link } from 'react-router-dom';

const CallDoAction = () => {
  return (
    <section className='bg-[url("./images/cta-bg.jpeg")] bg-no-repeat bg-center bg-cover'>
      <div className='Container'>
        <div className='text-center'>
          <div className='relative z-10'>
            <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Contact Us{' '}
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />
            </h5>
            <h1 className='font-Rajdhani font-bold text-lg leading-6 sm:text-[32px] sm:leading-[40px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-3'>
              Do You Want to Take Your Business to
              <br /> Next Level? Connect with Us
            </h1>
            <p className='font-Nunito text-TextColor2-0 max-w-[590px] w-full mx-auto mb-8'>
              Authoritatively disintermediate business to optimal web-readiness
              task vertical service timely human capital business plans with us
            </p>
            <Link
              to={'/contact2'}
              className='inline-block'
            >
              <button className='primary-btn'>
                {`Contact Us`}
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
            src={ctaImage}
            draggable={false}
            alt='Image'
            className='-mt-4 sm:-mt-8 lg:-mt-28 xl:-mt-40 2xl:-mt-64 2xl:w-[inherit] 2xl:max-w-[inherit] 2xl:-ml-[8%]'
          />
        </div>
      </div>
    </section>
  );
};

export default CallDoAction;
