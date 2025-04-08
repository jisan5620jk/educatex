import titleShape from '/images/sub-title-shape.png';
import { Link } from 'react-router-dom';
import { HiOutlineCheck } from 'react-icons/hi';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';

const WhyChoose = () => {
  return (
    <section className='bg-HeadingColor-0 lg:bg-[url("/images/why-choose.webp")] bg-cover bg-right lg:bg-center bg-no-repeat py-16 md:py-20 lg:py-28 relative z-10'>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-10 lg:gap-28 xl:gap-[190px] lg:grid-cols-2 items-end relative'>
          <div className='relative'>
            <div className='lg:absolute -bottom-[72px] -right-9'>
              <div className='font-Rajdhani font-bold flex items-center text-white text-[50px] -tracking-wide'>
                <OnScrollCounter
                  start={0}
                  end={10}
                  duration={3000}
                />
                <h1>K+</h1>
              </div>
              <div>
                <h5 className='font-Rajdhani font-semibold leading-7 text-[22px] text-white'>
                  OUR TOTAL FINISEHD
                  <br /> PROJECTS
                </h5>
              </div>
            </div>
          </div>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
                className='brightness-0 invert-[1]'
              />{' '}
              Why Choose us?
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-9'>
              Few Reason Why You Should
              <br /> Choose Our Services for Your
              <br /> Next Gen Business?
            </h1>
            <ul className='space-y-5'>
              <li className='flex gap-4'>
                <div className='size-[28px] rounded-full flex items-center justify-center bg-white bg-opacity-10 text-white text-xl'>
                  <HiOutlineCheck />
                </div>
                <p className='flex-1 font-Nunito text-lg text-white text-opacity-70'>
                  Globally underwhelm resource-leveling outsourcing
                </p>
              </li>
              <li className='flex gap-4'>
                <div className='size-[28px] rounded-full flex items-center justify-center bg-white bg-opacity-10 text-white text-xl'>
                  <HiOutlineCheck />
                </div>
                <p className='flex-1 font-Nunito text-lg text-white text-opacity-70'>
                  Rapidiously transform vertical information whereas accurate
                  technologies. Uniquely predominate
                </p>
              </li>
              <li className='flex gap-4'>
                <div className='size-[28px] rounded-full flex items-center justify-center bg-white bg-opacity-10 text-white text-xl'>
                  <HiOutlineCheck />
                </div>
                <p className='flex-1 font-Nunito text-lg text-white text-opacity-70'>
                  Dynamically coordinate intuitive infomediaries on team
                </p>
              </li>
              <li className='flex gap-4'>
                <div className='size-[28px] rounded-full flex items-center justify-center bg-white bg-opacity-10 text-white text-xl'>
                  <HiOutlineCheck />
                </div>
                <p className='flex-1 font-Nunito text-lg text-white text-opacity-70'>
                  Interactively optimize clicks-and-mortar vortals
                </p>
              </li>
            </ul>
            <Link
              to={'/about3'}
              className='inline-block mt-11'
            >
              <button className='primary-btn'>
                {`Learn More`}
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
    </section>
  );
};

export default WhyChoose;
