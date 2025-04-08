import { useEffect } from 'react';
import whyChooseBoxIcon from '/images/choose-icon1.png';
import whyChooseBoxIcon2 from '/images/time.png';
import whyChooseBoxIcon3 from '/images/choose-icon3.png';
import titleShape from '/images/sub-title-shape.png';
import whyChooseImg from '/images/choose-thumb21.png';
import WhyChooseCard from './WhyChooseCard';
import './why-choose.css';
import { IoSearchSharp } from 'react-icons/io5';
import bannerShape from '/images/shape-3.png';
import whyChooseShape from '/images/seo-rank.png';
import whyChooseShape2 from '/images/choose-google.png';

const WhyChoose = () => {
  useEffect(() => {
    const handleMouseEnter = (event) => {
      event.target.classList.add('active');

      // Remove 'active' class from siblings
      const parent = event.target.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll('.why-choose-box');
        siblings.forEach((sibling) => {
          if (sibling !== event.target) {
            sibling.classList.remove('active');
          }
        });
      }
    };

    const elements = document.querySelectorAll('.why-choose-box');
    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
    });

    // Clean up event listeners when component unmounts
    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, []);

  return (
    <section className='lg:-mt-[176px] pt-16 lg:pt-[290px] pb-28 relative bg-[url(/images/choose-bg2.png)] bg-cover bg-center overflow-hidden'>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2'>
          <div>
            <div>
              <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
                <img
                  src={titleShape}
                  draggable={false}
                  alt='Shape'
                />{' '}
                WHY CHOOSE US?
              </h5>
              <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
                Why We’re Your Best Choice for
                <br /> SEO Marketing Success
              </h1>
            </div>
            <div className='space-y-5 mt-7'>
              <div className='why-choose-box transition-all duration-500 inline-block'>
                <WhyChooseCard
                  whyChooseBoxIcon={whyChooseBoxIcon}
                  whyChooseBoxTitle='Social Paid Campaign'
                  whyChooseBoxDesc='Competently leverage existing line supples Enthusiastically maximize done'
                />
              </div>
              <div className='why-choose-box active transition-all duration-300 inline-block'>
                <WhyChooseCard
                  whyChooseBoxIcon={whyChooseBoxIcon2}
                  whyChooseBoxTitle='Social Paid Campaign'
                  whyChooseBoxDesc='Competently leverage existing line supples Enthusiastically maximize done'
                />
              </div>
              <div className='why-choose-box transition-all duration-300 inline-block'>
                <WhyChooseCard
                  whyChooseBoxIcon={whyChooseBoxIcon3}
                  whyChooseBoxTitle='Social Paid Campaign'
                  whyChooseBoxDesc='Competently leverage existing line supples Enthusiastically maximize done'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='relative'>
              <img
                src={whyChooseShape}
                draggable={false}
                alt='Shape'
                className='absolute z-10 top-40 left-0 animate-wiggle hidden sm:block lg:hidden xl:block'
              />
              <img
                src={whyChooseShape2}
                draggable={false}
                alt='Shape'
                className='absolute z-10 top-10 right-0 animate-dance2 hidden sm:block lg:hidden xl:block'
              />
              <img
                src={whyChooseImg}
                draggable={false}
                alt='Why CHoose Image'
                className='w-[inherit] -mb-28 relative lg:-bottom-[172px] xl:-bottom-[76px] lg:left-14 xl:left-5 2xl:left-0 2xl:-bottom-4'
              />
              <div className='absolute top-[39%] xl:top-[54%] 2xl:top-[41%] left-[170px] pointer-events-none hidden md:block lg:hidden xl:block'>
                <div className='relative'>
                  <input
                    type='text'
                    name='Search'
                    id='Search'
                    placeholder='www.yoursite.com'
                    required
                    className='w-[520px] xl:w-[400px] 2xl:w-[520px] h-[65px] rounded-full text-xl font-medium border border-white px-10 py-3 outline-none text-HeadingColor-0 font-Rajdhani placeholder:text-HeadingColor-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-[5px]'
                  />
                  <button
                    type='submit'
                    className='absolute top-1/2 right-2 -translate-y-1/2 size-[50px] rounded-full bg-gradient-to-t to-PrimaryColor3-0 from-PrimaryColor2-0 flex items-center justify-center text-white'
                  >
                    <IoSearchSharp size={22} />
                  </button>
                </div>
              </div>
              <img
                src={bannerShape}
                draggable={false}
                className='absolute bottom-40 right-0 md:right-20 lg:right-0 animate-wiggle hidden sm:block lg:hidden xl:block xl:bottom-[14px] 2xl:bottom-40'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
