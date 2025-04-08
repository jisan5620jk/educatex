import aboutThumb from '/images/left-img-1.png';
import aboutThumb2 from '/images/about-1.png';
import titleShape from '/images/sub-title-shape.png';
import itemIcon from '/images/tam1.png';
import itemIcon2 from '/images/terget-1.png';
import itemIcon3 from '/images/time.png';
import itemIcon4 from '/images/message.png';
import arrowShape from '/images/arrow-shape.png';
import { Link } from 'react-router-dom';
import OnScrollCounter from './OnScrollCounter';
import { AiOutlineRise } from 'react-icons/ai';

const About = () => {
  return (
    <section className='bg-[url(/images/banner-1.png)] pt-16 md:pt-20 lg:pt-[120px] pb-24 md:pb-32 lg:pb-[180px] bg-white bg-no-repeat bg-center bg-cover relative'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center'>
          <div className='relative z-10 flex items-start gap-7 md:max-w-[712px] lg:max-w-full xl:max-w-[712px] w-full lg:-ml-[240px] xl:-ml-[160px]'>
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full md:w-[inherit] lg:w-full xl:w-[inherit]'
            />
            <img
              src={aboutThumb2}
              draggable='false'
              className='w-full md:w-[inherit] lg:w-full xl:w-[inherit] hidden sm:block'
            />
            <div className='absolute bottom-0 left-[25%] md:left-[14.5rem] size-[160px] md:size-[240px] text-center px-5 sm:px-7 flex flex-col items-center justify-center bg-gradient-to-r to-PrimaryColor3-0 from-PrimaryColor2-0 rounded-xl'>
              <div className='flex items-center justify-center text-white text-3xl sm:text-[40px]'>
                <AiOutlineRise />
              </div>
              <div className='text-2xl md:text-[42px] font-semibold font-Outfit text-white flex items-center justify-center'>
                <h2 className=' font-Outfit'>+</h2>
                <OnScrollCounter
                  start={0}
                  end={300}
                  duration={3000}
                />
                <h2 className=' font-Outfit'>%</h2>
              </div>
              <h6 className='font-OpenSans text-sm md:text-lg text-white'>
                Growing Organic Traffics
              </h6>
            </div>
          </div>
          <div className='relative'>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              About Us
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Transform Your Website into a<br />
              Revenue-Generating Machine
              <br />
              Achieve Online Success
            </h1>
            <p className='font-OpenSans text-TextColor2-0 pb-7'>
              Competently leverage existing top-line bandwidth vis-a-vis
              client-centric supply chains. Enthusiastically maximize cost
              effective technologies
            </p>
            <div className='mb-11'>
              <ul className='grid items-center grid-cols-1 sm:grid-cols-2 gap-y-8'>
                <li className='flex items-center gap-4'>
                  <div>
                    <img
                      src={itemIcon}
                      draggable={false}
                      alt='Icon'
                    />
                  </div>
                  <h5 className='flex-1 font-Outfit font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-HeadingColor-0'>
                    Real time Performance Report send
                  </h5>
                </li>
                <li className='flex items-center gap-4'>
                  <div>
                    <img
                      src={itemIcon2}
                      draggable={false}
                      alt='Icon2'
                    />
                  </div>
                  <h5 className='flex-1 font-Outfit font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-HeadingColor-0'>
                    User Friendly SEO Dashboard
                  </h5>
                </li>
                <li className='flex items-center gap-4'>
                  <div>
                    <img
                      src={itemIcon3}
                      draggable={false}
                      alt='Icon3'
                    />
                  </div>
                  <h5 className='flex-1 font-Outfit font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-HeadingColor-0'>
                    Local SEO & Business Integrations
                  </h5>
                </li>
                <li className='flex items-center gap-4'>
                  <div>
                    <img
                      src={itemIcon4}
                      draggable={false}
                      alt='Icon4'
                    />
                  </div>
                  <h5 className='flex-1 font-Outfit font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-HeadingColor-0'>
                    Social Media Integration and Sharing
                  </h5>
                </li>
              </ul>
            </div>
            <div className='flex items-center gap-16'>
              <Link
                to={'/about3'}
                className='inline-block'
              >
                <button className='primary-btn'>
                  {`More About`}
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
              <div>
                <img
                  src={arrowShape}
                  draggable={false}
                  alt='Shape'
                  className='animate-dance3 hidden sm:block'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
