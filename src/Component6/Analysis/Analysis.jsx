import titleShape from '/images/sub-title-shape.png';
import whyChooseThumb from '/images/choose-us-thumb2.webp';
import analysisShape from '/images/choose-us-shpe2.webp';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Analysis = () => {
  return (
    <section className='pt-16 md:pt-20 lg:pt-[120px] relative z-10'>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 items-center relative'>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-white uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
                className='brightness-0 invert-[1]'
              />{' '}
              Analysis
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-3'>
              Transforming IT Challenges
              <br />
              into Best Opportunities
            </h1>
            <p className='font-Nunito text-white text-opacity-70 max-w-[580px] w-full'>
              Competently leverage existing top-line bandwidth vis-a-vis
              client-centric supply chains. Enthusiastically maximize cost
              effective technologies collaboratively transform highly efficient
              applications
            </p>
            <ul className='space-y-3 mt-[22px] mb-7'>
              <li className='flex items-center gap-2 font-Rajdhani font-semibold text-lg text-white'>
                <span className='text-white'>
                  <RiCheckboxCircleFill size={22} />
                </span>
                Project analysis and Research
              </li>
              <li className='flex items-center gap-2 font-Rajdhani font-semibold text-lg text-white'>
                <span className='text-white'>
                  <RiCheckboxCircleFill size={22} />
                </span>
                Professionally transform cost effective
              </li>
              <li className='flex items-center gap-2 font-Rajdhani font-semibold text-lg text-white'>
                <span className='text-white'>
                  <RiCheckboxCircleFill size={22} />
                </span>
                Interactively plagiarize virtual processes before
              </li>
              <li className='flex items-center gap-2 font-Rajdhani font-semibold text-lg text-white'>
                <span className='text-white'>
                  <RiCheckboxCircleFill size={22} />
                </span>
                Continually evolve orthogonal business
              </li>
            </ul>
            <Link
              to={'/about3'}
              className='inline-block'
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
          <div className='relative inline-block'>
            <img
              src={whyChooseThumb}
              draggable={false}
              alt='Why Choose Image'
              className='2xl:w-[inherit] 2xl:max-w-[inherit] relative'
            />
            <img
              src={analysisShape}
              draggable={false}
              alt='Why Choose Shape'
              className='absolute left-60 bottom-14 animate-dance3 hidden md:block'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
