import aboutThumb from '/images/about-thumb.webp';
import titleShape from '/images/sub-title-shape.png';
import itemIcon from '/images/tam1.png';
import itemIcon2 from '/images/terget-1.png';
import itemIcon3 from '/images/time.png';
import itemIcon4 from '/images/message.png';
import shape from '/images/about-shape1.webp';
import shape2 from '/images/about-shape2.webp';
import shape3 from '/images/about-shape3.webp';
import dotShape from '/images/testi-shape.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='pt-[94px] md:pt-[110px] lg:pt-[150px] pb-16 md:pb-20 lg:pb-28 bg-BodyBgDark3-0 relative z-10 -mt-[30px]'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div className='relative z-10 xl:right-[50px]'>
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full md:w-[inherit] lg:w-full xl:w-[inherit]'
            />
            <img
              src={shape}
              draggable='false'
              alt='Shape'
              className='absolute bottom-[127px] left-[84px] animate-wiggle hidden sm:block lg:hidden xl:block'
            />
            <img
              src={shape2}
              draggable='false'
              alt='Shape'
              className='absolute bottom-0 left-20 animate-dance2 hidden sm:block'
            />
            <img
              src={shape3}
              draggable='false'
              alt='Shape'
              className='absolute bottom-0 right-0 animate-dance3 hidden sm:block'
            />
          </div>
          <div className='relative'>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-white uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
                className='brightness-0 invert-[1]'
              />{' '}
              About Us
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
              Innovations Excellence Building
              <br />
              Digital Future Together
            </h1>
            <p className='font-OpenSans text- pb-7 max-w-[580px] w-full text-white text-opacity-70'>
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
                  <h5 className='flex-1 font-Outfit font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-white'>
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
                  <h5 className='flex-1 font-Outfit font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-white'>
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
                  <h5 className='flex-1 font-Outfit font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-white'>
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
                  <h5 className='flex-1 font-Outfit font-semibold text-xl md:text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] leading-[28px] text-white'>
                    Social Media Integration and Sharing
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
      <img
        src={dotShape}
        draggable={false}
        alt='Shape'
        className='brightness-0 invert-[1] absolute bottom-0 right-0 hidden 2xl:block'
      />
    </section>
  );
};

export default About;
