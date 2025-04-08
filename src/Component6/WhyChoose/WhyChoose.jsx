import titleShape from '/images/sub-title-shape.png';
import whyChooseThumb from '/images/choose-us-thumb.webp';
import whyChooseShape from '/images/choose-us-shpe1.webp';
import whyChooseShape2 from '/images/dot-dark.png';
import icon from '/images/ico1.webp';
import icon2 from '/images/ico2.webp';
import shape from '/images/animation-shap2e.webp';
import Analysis from '../Analysis/Analysis';

const WhyChoose = () => {
  return (
    <div className='px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] bg-BodyBgDark3-0 relative z-20'>
      <section className='rounded-md lg:rounded-[20px] bg-BodyBgDark2-0 py-16 md:py-20 lg:py-28 relative z-10 overflow-hidden'>
        <div className='absolute -z-10 top-1/2 -translate-y-1/2 -right-[10%] size-[800px] rounded-full blur-[150px] bg-[#a1a6ff] bg-opacity-30'></div>
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
              <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-white uppercase'>
                <img
                  src={titleShape}
                  draggable={false}
                  alt='Shape'
                  className='brightness-0 invert-[1]'
                />{' '}
                Why Choose us?
              </h5>
              <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-3'>
                Brain Storming, Researcing and
                <br />
                Work Strategist for Create Best
                <br />
                Sucessfull Products
              </h1>
              <p className='font-OpenSans text-white text-opacity-70 max-w-[580px] w-full'>
                Competently leverage existing top-line bandwidth vis-a-vis
                client-centric supply chains. Enthusiastically maximize cost
                effective technologies
              </p>
              <div className='space-y-6 border-t border-white border-opacity-10 pt-7 mt-6'>
                <div className='flex gap-5 group'>
                  <div className='size-[62px] rounded-full flex items-center justify-center relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-b before:from-PrimaryColor2-0 before:to-PrimaryColor3-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 before:-z-10'>
                    <img
                      src={icon}
                      draggable={false}
                      alt='Icon'
                      className='group-hover:animate-wobble_vertical'
                    />
                  </div>
                  <div className='flex-1 -mt-1'>
                    <h5 className='font-Outfit font-semibold text-white text-2xl pb-[6px]'>
                      Market Research
                    </h5>
                    <p className='font-OpenSans text-white text-opacity-70 max-w-[370px] w-full'>
                      Competently leverage existing top-line technology maximize
                      cost effective service done
                    </p>
                  </div>
                </div>
                <div className='flex gap-5 group'>
                  <div className='size-[62px] rounded-full flex items-center justify-center relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-b before:from-PrimaryColor2-0 before:to-PrimaryColor3-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 before:-z-10'>
                    <img
                      src={icon2}
                      draggable={false}
                      alt='Icon'
                      className='group-hover:animate-wobble_vertical'
                    />
                  </div>
                  <div className='flex-1 -mt-1'>
                    <h5 className='font-Outfit font-semibold text-white text-2xl pb-[6px]'>
                      Project Analysis
                    </h5>
                    <p className='font-OpenSans text-white text-opacity-70 max-w-[370px] w-full'>
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
    </div>
  );
};

export default WhyChoose;
