import titleShape from '/images/sub-title-shape.png';
import processThumb from '/images/process-thumb.webp';
import processIcon from '/images/process-icon1.webp';
import processIcon2 from '/images/process-icon2.webp';
import processIcon3 from '/images/process-icon3.webp';
import borderShape from '/images/process-shape1.webp';
import shape from '/images/process-shape3.webp';
import shape2 from '/images/process-shape5.webp';
import shape3 from '/images/process-shape4.webp';
import Shape from '/images/animation-shap2e.webp';
import { useEffect } from 'react';
import './process.css';

const Process = () => {
  useEffect(() => {
    const handleMouseEnter = (event) => {
      event.target.classList.add('active');

      // Remove 'active' class from siblings
      const parent = event.target.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll('.process-box');
        siblings.forEach((sibling) => {
          if (sibling !== event.target) {
            sibling.classList.remove('active');
          }
        });
      }
    };

    const elements = document.querySelectorAll('.process-box');
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
    <section className='mx-2 sm:mx-3 md:mx-5 lg:mx-2 xl:mx-5 2xl:mx-8 3xl:mx-[50px] rounded-md lg:rounded-[20px] bg-[url("/images/process-bg.webp")] bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-28 relative z-20'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center'>
          <div>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              WORK PROCESS
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Our Proven Process for Digital
              <br /> Excellence IT Solutions
            </h1>
            <div className='space-y-7 md:space-y-[74px] lg:space-y-10 xl:space-y-[74px] mt-8'>
              <div className='process-box group inline-block'>
                <div className='flex gap-4 sm:gap-7 items-center relative'>
                  <img
                    src={borderShape}
                    draggable={false}
                    alt='Border Shape'
                    className='absolute -bottom-16 left-[50px] hidden md:block lg:hidden xl:block'
                  />
                  <div className='process-icon size-14 sm:size-[100px] rounded-full bg-white flex items-center justify-center shadow-shade relative z-10'>
                    <img
                      src={processIcon}
                      draggable={false}
                      alt='Process Icon'
                      className='max-w-7 sm:max-w-[inherit] transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1] group-hover:animate-wobble_vertical'
                    />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-Outfit font-semibold text-2xl sm:text-[28px] text-HeadingColor-0'>
                      Planning Idea
                    </h4>
                    <p className='max-w-[288px] w-full font-OpenSans text-TextColor2-0'>
                      Competently leverage existing top-line maximize cost
                      effective done
                    </p>
                  </div>
                </div>
              </div>
              <div className='process-box active group inline-block'>
                <div className='flex gap-4 sm:gap-7 items-center relative md:left-[192px] lg:left-20 xl:left-[192px]'>
                  <div className='process-icon size-14 sm:size-[100px] rounded-full bg-white flex items-center justify-center shadow-shade relative z-10 transition-all duration-500'>
                    <img
                      src={processIcon2}
                      draggable={false}
                      alt='Process Icon'
                      className='max-w-7 sm:max-w-[inherit] transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1] group-hover:animate-wobble_vertical'
                    />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-Outfit font-semibold text-2xl sm:text-[28px] text-HeadingColor-0'>
                      Research & Analysis
                    </h4>
                    <p className='max-w-[288px] w-full font-OpenSans text-TextColor2-0'>
                      Competently leverage existing top-line maximize cost
                      effective done
                    </p>
                  </div>
                </div>
              </div>
              <div className='process-box group inline-block'>
                <div className='flex gap-4 sm:gap-7 items-center relative'>
                  <img
                    src={borderShape}
                    draggable={false}
                    alt='Border Shape'
                    className='absolute -top-16 left-[50px] [transform:rotateX(180deg)] hidden md:block lg:hidden xl:block'
                  />
                  <div className='process-icon size-14 sm:size-[100px] rounded-full bg-white flex items-center justify-center shadow-shade relative z-10'>
                    <img
                      src={processIcon3}
                      draggable={false}
                      alt='Process Icon'
                      className='max-w-7 sm:max-w-[inherit] transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1] group-hover:animate-wobble_vertical'
                    />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-Outfit font-semibold text-2xl sm:text-[28px] text-HeadingColor-0'>
                      Finished Works
                    </h4>
                    <p className='max-w-[288px] w-full font-OpenSans text-TextColor2-0'>
                      Competently leverage existing top-line maximize cost
                      effective done
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative flex lg:justify-end'>
            <img
              src={processThumb}
              draggable={false}
              alt='Process Image'
              className='md:w-[inherit] lg:w-11/12 2xl:w-[inherit] relative xl:left-5'
            />
            <img
              src={shape}
              draggable={false}
              alt='Shape'
              className='absolute top-28 left-16 animate-wiggle hidden md:block'
            />
            <img
              src={shape2}
              draggable={false}
              alt='Shape'
              className='absolute top-4 right-0 animate-dance3 hidden md:block'
            />
            <img
              src={shape3}
              draggable={false}
              alt='Shape'
              className='absolute -top-4 left-56 animate-rotateX hidden md:block'
            />
          </div>
        </div>
      </div>
      <div className='absolute left-20 -bottom-[70px] animate-dance2 hidden 3xl:block'>
        <img
          src={Shape}
          draggable={false}
          alt='Shape'
          className='w-[120px]'
        />
      </div>
    </section>
  );
};

export default Process;
