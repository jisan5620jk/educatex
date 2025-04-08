import aboutThumb from '/images/about-thumb-1.webp';
import titleShape from '/images/sub-title-shape.png';
import itemIcon from '/images/tam1.png';
import itemIcon2 from '/images/terget-1.png';
import itemIcon3 from '/images/about-icon3.webp';
import itemIcon4 from '/images/about-icon4.webp';
import shape from '/images/shape.webp';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='bg-BodyBgDark3-0 relative z-20'>
      <section className='mx-2 sm:mx-3 md:mx-5 lg:mx-2 xl:mx-5 2xl:mx-8 3xl:mx-[50px] rounded-md lg:rounded-[20px] py-16 md:py-20 lg:py-[120px] bg-BodyBgDark2-0 relative z-10 overflow-hidden'>
        <div className='absolute -z-10 top-1/2 -left-[60%] -translate-y-1/2 size-[1245px] rounded-full blur-[150px] bg-PrimaryColor2-0 bg-opacity-50'></div>
        <div className='Container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center'>
            <div className='relative z-10 xl:-ml-[62px]'>
              <img
                src={aboutThumb}
                draggable='false'
                className='w-full md:w-[inherit] lg:w-full 2xl:w-[inherit]'
              />
            </div>
            <div className='relative'>
              <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-white uppercase'>
                <img
                  src={titleShape}
                  draggable={false}
                  alt='Shape'
                  className='brightness-0 invert-[1]'
                />{' '}
                About Us
              </h5>
              <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
                Innovations Excellence Building
                <br />
                Digital Future Together
              </h1>
              <p className='font-Nunito text-white text-opacity-80 pb-8'>
                Competently leverage existing top-line bandwidth vis-a-vis
                client-centric supply chains. Enthusiastically maximize cost
                effective technologies
              </p>
              <div className='mb-11'>
                <ul className='grid items-center grid-cols-1 sm:grid-cols-2 gap-8'>
                  <li className='group flex items-center gap-4'>
                    <div>
                      <img
                        src={itemIcon}
                        draggable={false}
                        alt='Icon'
                        className='group-hover:animate-wobble_vertical'
                      />
                    </div>
                    <h5 className='flex-1 font-Rajdhani font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-white'>
                      IT Infrastructure
                      <br />
                      Management
                    </h5>
                  </li>
                  <li className='group flex items-center gap-4'>
                    <div>
                      <img
                        src={itemIcon2}
                        draggable={false}
                        alt='Icon2'
                        className='group-hover:animate-wobble_vertical'
                      />
                    </div>
                    <h5 className='flex-1 font-Rajdhani font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-white'>
                      Cloud Integrations
                      <br />
                      Service Provide
                    </h5>
                  </li>
                  <li className='group flex items-center gap-4'>
                    <div>
                      <img
                        src={itemIcon3}
                        draggable={false}
                        alt='Icon3'
                        className='group-hover:animate-wobble_vertical'
                      />
                    </div>
                    <h5 className='flex-1 font-Rajdhani font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-white'>
                      Custom Software
                      <br />
                      Development
                    </h5>
                  </li>
                  <li className='group flex items-center gap-4'>
                    <div>
                      <img
                        src={itemIcon4}
                        draggable={false}
                        alt='Icon4'
                        className='group-hover:animate-wobble_vertical'
                      />
                    </div>
                    <h5 className='flex-1 font-Rajdhani font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-white'>
                      Instant Supports
                      <br />
                      any Queries
                    </h5>
                  </li>
                </ul>
              </div>
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
            </div>
          </div>
        </div>
      </section>
      <img
        src={shape}
        draggable={false}
        alt='Shape'
        className='absolute z-20 -bottom-12 right-16 animate-wiggle hidden 2xl:block'
      />
    </div>
  );
};

export default About;
