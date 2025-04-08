import titleShape from '/images/sub-title-shape.png';
import whyChooseThumb from '/images/choose-us-thumb.webp';
import whyChooseShape from '/images/choose-us-shpe1.webp';
import whyChooseShape2 from '/images/dotte-shpe.webp';
import shape from '/images/animation-shap2e.webp';
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb';
import Analysis from '../Analysis/Analysis';

const WhyChoose = () => {
  return (
    <section className='mx-2 sm:mx-3 md:mx-5 lg:mx-2 xl:mx-5 2xl:mx-8 3xl:mx-[50px] rounded-md lg:rounded-[20px] bg-[url("/images/why-choose-us-bg.webp")] bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-28 relative z-10'>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2 items-end relative'>
          <div className='relative inline-block'>
            <img
              src={whyChooseThumb}
              draggable={false}
              alt='Why Choose Image'
              className='2xl:w-[inherit] 2xl:max-w-[inherit] relative 2xl:-left-20'
            />
            <img
              src={whyChooseShape}
              draggable={false}
              alt='Why Choose Shape'
              className='absolute left-60 bottom-14 animate-dance3 hidden md:block'
            />
          </div>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Why Choose us?
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-3'>
              Brain Storming, Researcing and
              <br />
              Work Strategist for Create Best
              <br />
              Sucessfull Products
            </h1>
            <p className='font-Nunito text-TextColor2-0 max-w-[580px] w-full'>
              Competently leverage existing top-line bandwidth vis-a-vis
              client-centric supply chains. Enthusiastically maximize cost
              effective technologies
            </p>
            <div className='space-y-6 border-t border-SecondaryColor-0 border-opacity-10 pt-7 mt-6'>
              <div className='flex gap-3 group'>
                <div className='group-hover:animate-wobble_vertical text-PrimaryColor-0'>
                  <TbRosetteDiscountCheckFilled size={34} />
                </div>
                <div className='flex-1 -mt-1'>
                  <h5 className='font-Rajdhani font-semibold text-HeadingColor-0 text-2xl pb-[6px]'>
                    Market Research
                  </h5>
                  <p className='font-Nunito text-TextColor2-0 max-w-[370px] w-full'>
                    Competently leverage existing top-line technology maximize
                    cost effective service done
                  </p>
                </div>
              </div>
              <div className='flex gap-3 group'>
                <div className='group-hover:animate-wobble_vertical text-PrimaryColor-0'>
                  <TbRosetteDiscountCheckFilled size={34} />
                </div>
                <div className='flex-1 -mt-1'>
                  <h5 className='font-Rajdhani font-semibold text-HeadingColor-0 text-2xl pb-[6px]'>
                    Project Analysis
                  </h5>
                  <p className='font-Nunito text-TextColor2-0 max-w-[370px] w-full'>
                    Competently leverage existing top-line technology maximize
                    cost effective service done
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute -right-32 -top-2 animate-dance2 hidden 3xl:block'>
            <img
              src={shape}
              draggable={false}
              alt='Shape'
              className='w-[120px]'
            />
          </div>
          <img
            src={whyChooseShape2}
            draggable={false}
            alt='Why Choose Shape'
            className='absolute -right-36 -bottom-32 animate-wiggle hidden 2xl:block'
          />
        </div>
      </div>
      <Analysis />
    </section>
  );
};

export default WhyChoose;
