import aboutThumb from '/images/about-thumb.png';
import titleShape from '/images/sub-title-shape.png';
import itemIcon from '/images/about-icon1.png';
import itemIcon2 from '/images/about-icon2.png';
import icon from '/images/call-icon.png';
import shape from '/images/line-shape.webp';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

const About = () => {
  return (
    <section className='bg-[url(/images/about-bg.png)] pb-16 md:pb-20 lg:pb-[186px] pt-16 md:pt-28 lg:pt-[205px] bg-no-repeat bg-center bg-cover relative z-20'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 xl:gap-10 items-end'>
          <div className='relative z-10 xl:-ml-[102px]'>
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full md:w-[inherit] lg:w-full 2xl:w-[inherit]'
            />
          </div>
          <div className='relative'>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              About Us
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Next Generation Depends on
              <br />
              Digital Software’s Growing
              <br />
              Business Smoothly
            </h1>
            <ul className='mb-11 mt-10 space-y-8'>
              <li className='group flex items-start gap-6'>
                <div>
                  <img
                    src={itemIcon}
                    draggable={false}
                    alt='Icon'
                    className='group-hover:animate-wobble_vertical'
                  />
                </div>
                <div className='flex-1 -mt-1'>
                  <h5 className='flex-1 font-Rajdhani font-semibold text-xl md:text-[26px] lg:text-base xl:text-xl 2xl:text-[26px] leading-[28px] text-HeadingColor-0'>
                    Advanced Marketing
                  </h5>
                  <p className='font-Nunito text-TextColor2-0 max-w-[362px] w-full mt-3'>
                    Clients-focused data centric process energistically
                    communicate installed done.
                  </p>
                </div>
              </li>
              <li className='group flex items-start gap-6'>
                <div>
                  <img
                    src={itemIcon2}
                    draggable={false}
                    alt='Icon'
                    className='group-hover:animate-wobble_vertical'
                  />
                </div>
                <div className='flex-1 -mt-1'>
                  <h5 className='flex-1 font-Rajdhani font-semibold text-xl md:text-[26px] lg:text-base xl:text-xl 2xl:text-[26px] leading-[28px] text-HeadingColor-0'>
                    Innovation Soluitions
                  </h5>
                  <p className='font-Nunito text-TextColor2-0 max-w-[362px] w-full mt-3'>
                    Clients-focused data centric process energistically
                    communicate installed done.
                  </p>
                </div>
              </li>
            </ul>
            <div className='flex flex-col sm:flex-row sm:items-center gap-5'>
              <Link
                to={'/about3'}
                className='inline-block'
              >
                <button className='primary-btn'>
                  {`More About`}
                  <FaArrowRightLong />
                </button>
              </Link>
              <div className='group flex gap-5 items-center'>
                <div>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                    className='group-hover:animate-wobble_vertical'
                  />
                </div>
                <div className='flex-1'>
                  <h6 className='font-Nunito text-TextColor2-0'>
                    Call Us Anytime
                  </h6>
                  <a
                    href='tel:+881234567890'
                    className='font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl text-HeadingColor-0'
                  >
                    +88 123 4567 890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={shape}
        draggable='false'
        alt='Shape'
        className='absolute -z-10 right-0 top-[35%] animate-wiggle hidden 2xl:block'
      />
    </section>
  );
};

export default About;
