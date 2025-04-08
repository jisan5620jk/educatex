import serviceIcon from '/images/Software-Tecnology-3.webp';
import serviceIcon2 from '/images/team-2.webp';
import serviceIcon3 from '/images/support.webp';
import serviceIcon4 from '/images/icon2-2.webp';
import serviceIcon5 from '/images/color.webp';
import serviceIcon6 from '/images/settings1.webp';
import serviceThumb from '/images/Software-Tecnology-2.webp';
import ServiceCard from './ServiceCard';
import titleShape from '/images/sub-title-shape.png';

const Service = () => {
  return (
    <section className="relative pt-16 md:py-20 lg:pt-28 pb-6 md:pb-48 lg:pb-[190px] bg-[url('/images/service-bg-2.webp')] bg-cover bg-no-repeat bg-bottom">
      <div className='Container'>
        <div className='text-center'>
          <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
            />{' '}
            WAHT WE PROVIDE{' '}
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='rotate-180'
            />
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] 3xl:mb-2'>
            We Provide Business Solutions
          </h1>
        </div>
      </div>
      <div className='max-w-[1620px] flex flex-col items-center gap-10 md:gap-[56px] w-full mx-auto px-2 md:px-3 lg:px-4 3xl:pt-9'>
        <div className='flex flex-col md:flex-row items-center gap-10 md:gap-7 xl:gap-[56px]'>
          <div className='max-w-[400px] w-full mt-[54px] xl:mt-0 space-y-7'>
            <div className='rounded-[10px] bg-white relative xl:left-20 xl:[clip-path:polygon(0_0,_100%_0,_93%_98%,_0%_100%)]'>
              <ServiceCard
                serviceIcon={serviceIcon}
                serviceTitle={'Graphic Design'}
                serviceDesc={
                  'Professionally pursue scalables on market positioning'
                }
              />
            </div>
            <div className='rounded-[10px] bg-white'>
              <ServiceCard
                serviceIcon={serviceIcon2}
                serviceTitle={'Audience Generate'}
                serviceDesc={
                  'Professionally pursue scalables on market positioning'
                }
              />
            </div>
            <div className='rounded-[10px] bg-white relative xl:left-20 xl:[clip-path:polygon(0_0,_94%_0,_100%_100%,_0%_100%)]'>
              <ServiceCard
                serviceIcon={serviceIcon3}
                serviceTitle={'Customer Strategy'}
                serviceDesc={
                  'Professionally pursue scalables on market positioning'
                }
              />
            </div>
          </div>
          <div className='w-full md:hidden xl:block'>
            <img
              src={serviceThumb}
              draggable={false}
              className='max-w-[inherit] w-[inherit]'
              alt='Image'
            />
          </div>
          <div className='max-w-[400px] w-full md:mt-[54px] xl:mt-0 space-y-7 relative xl:-left-20'>
            <div className='rounded-[10px] bg-white xl:pl-4 xl:[clip-path:polygon(0%_0,_100%_0,_100%_100%,_6%_100%)]'>
              <ServiceCard
                serviceIcon={serviceIcon4}
                serviceTitle={'Market Research'}
                serviceDesc={
                  'Professionally pursue scalables on market positioning'
                }
              />
            </div>
            <div className='rounded-[10px] bg-white relative xl:left-20'>
              <ServiceCard
                serviceIcon={serviceIcon5}
                serviceTitle={'Competitor Research'}
                serviceDesc={
                  'Professionally pursue scalables on market positioning'
                }
              />
            </div>
            <div className='rounded-[10px] bg-white xl:pl-4 xl:[clip-path:polygon(7%_0%,_100%_0,_100%_100%,_0%_100%)]'>
              <ServiceCard
                serviceIcon={serviceIcon6}
                serviceTitle={'Data Driven Soft'}
                serviceDesc={
                  'Professionally pursue scalables on market positioning'
                }
              />
            </div>
          </div>
        </div>
        <div className='w-full hidden md:block xl:hidden'>
          <img
            src={serviceThumb}
            draggable={false}
            className='max-w-[inherit] w-[inherit]'
            alt='Image'
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
