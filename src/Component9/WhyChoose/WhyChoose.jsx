import ProgressBar from 'react-animated-progress-bar';
import titleShape from '/images/sub-title-shape.png';
import whyChooseThumb from '/images/AI-6.png';
import whyChooseShape from '/images/AI-1-1.png';
import featureShape from '/images/AI-5.png';
import { Link } from 'react-router-dom';
import './why-choose.css';
import Counter from './Counter';
import Testimonial from '../Testimonial/Testimonial';
import Marquee from '../Marquee/Marquee';

const WhyChoose = () => {
  return (
    <section className='bg-[url("images/bg-1.jpg")] bg-cover bg-center bg-no-repeat pt-16 md:pt-20 lg:pt-28 pb-10 sm:pb-16 md:pb-[90px]'>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2 items-center relative'>
          <div className='absolute top-16 -right-[184px] animate-wiggle hidden md:block'>
            <img
              src={featureShape}
              draggable='false'
              alt='Shape'
            />
          </div>
          <div className='relative inline-block'>
            <img
              src={whyChooseThumb}
              draggable={false}
              alt='Why Choose Image'
            />
            <img
              src={whyChooseShape}
              draggable={false}
              alt='Why Choose Shape'
              className='absolute left-0 3xl:-left-16 top-60 animate-wiggle hidden md:block'
            />
          </div>
          <div>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Why Choose us?
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Advanced Machine Learning
              <br />
              for Robotic Vision
            </h1>
            <p className='font-OpenSans text-TextColor2-0'>
              Competently leverage existing top-line bandwidth vis-a-vis
              client-centric supply
              <br className='hidden md:block lg:hidden 2xl:block' /> chains.
              Enthusiastically maximize cost effective technologies
            </p>
            <div className='-space-y-2'>
              <div>
                <h5 className='font-Outfit font-semibold text-lg text-HeadingColor-0 uppercase ml-7 translate-y-[40px] relative z-20'>
                  Data Science
                </h5>
                <div className='relative z-10 why-choose-progress1'>
                  <ProgressBar
                    rect
                    width='100%'
                    height='52px'
                    fontColor='#001818'
                    fontSize='18px'
                    leading='10px'
                    margin='0px'
                    rectBorderRadius='5px'
                    fontWeight='500'
                    percentage='85'
                    defColor={{
                      excellent: '#eff3ff',
                      good: '#eff3ff',
                      fair: 'green',
                      poor: 'red',
                    }}
                    trackPathColor='transparent'
                    trackBorderColor='transparent'
                    trackPathBorderRadius='6px'
                  />
                </div>
              </div>
              <div>
                <h5 className='font-Outfit font-semibold text-lg text-HeadingColor-0 uppercase ml-7 translate-y-[40px] relative z-20'>
                  MACHINE LEARNING
                </h5>
                <div className='relative z-10 why-choose-progress2'>
                  <ProgressBar
                    rect
                    width='100%'
                    height='52px'
                    fontColor='#001818'
                    fontSize='18px'
                    leading='10px'
                    margin='0px'
                    rectBorderRadius='5px'
                    fontWeight='500'
                    percentage='90'
                    defColor={{
                      excellent: '#eff3ff',
                      good: '#eff3ff',
                      fair: 'green',
                      poor: 'red',
                    }}
                    trackPathColor='transparent'
                    trackBorderColor='transparent'
                    trackPathBorderRadius='6px'
                  />
                </div>
              </div>
              <div>
                <h5 className='font-Outfit font-semibold text-lg text-HeadingColor-0 uppercase ml-7 translate-y-[40px] relative z-20'>
                  ARTIFICIAL INTELLIGENCE
                </h5>
                <div className='relative z-10 why-choose-progress3'>
                  <ProgressBar
                    rect
                    width='100%'
                    height='52px'
                    fontColor='#001818'
                    fontSize='18px'
                    leading='10px'
                    margin='0px'
                    rectBorderRadius='5px'
                    fontWeight='500'
                    percentage='95'
                    defColor={{
                      excellent: '#eff3ff',
                      good: '#eff3ff',
                      fair: 'green',
                      poor: 'red',
                    }}
                    trackPathColor='transparent'
                    trackBorderColor='transparent'
                    trackPathBorderRadius='6px'
                  />
                </div>
              </div>
            </div>
            <Link
              to={'/about3'}
              className='inline-block mt-10'
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
      <Counter />
      <Testimonial />
      <Marquee />
    </section>
  );
};

export default WhyChoose;
