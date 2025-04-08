import { Link } from 'react-router-dom';
import shape2 from '/images/cta-thumb.png';
import shape3 from '/images/cta-arrow.png';

const CallDoAction = () => {
  return (
    <section className="bg-[url('/images/cta-bg.png')] bg-cover bg-top bg-no-repeat pt-20 md:pt-[120px] pb-10 md:pb-[87px]  relative z-30">
      <div className='Container'>
        <div className='flex flex-col gap-7 md:gap-0 md:flex-row justify-between md:items-center'>
          <div>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white'>
              We Provide Best Solutions
              <br />
              For Your Business
            </h1>
          </div>
          <div>
            <Link
              to={'/contact2'}
              className='inline-block'
            >
              <button className='primary-btn'>
                Get In Touch
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
      </div>
      <img
        src={shape2}
        draggable={false}
        alt='Shape'
        className='absolute -bottom-[2px] left-1/2 -translate-x-1/2 hidden lg:block'
      />
      <img
        src={shape3}
        draggable={false}
        alt='Shape'
        className='absolute top-[155px] right-[21%] 3xl:right-[29%] animate-swing hidden xl:block'
      />
    </section>
  );
};

export default CallDoAction;
