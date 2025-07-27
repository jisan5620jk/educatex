import serviceIcon from '/images/learn-icon1.png';
import serviceIcon2 from '/images/learn-icon2.png';
import serviceIcon3 from '/images/learn-icon3.png';
import serviceShape from '/images/circle-hover1.png';
import serviceShape2 from '/images/learn-circle.png';
import shape from '/images/learn-arabic.png';
import shape2 from '/images/learn-round.png';
import shape3 from '/images/learn-book.png';
import ServiceCard from './ServiceCard';
import { HiArrowNarrowRight } from 'react-icons/hi';

const serviceCard = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: 'Quran Memorization',
    serviceUrl: '/service/quran-memorization',
    serviceBtnText: 'Read More',
    serviceBtnIcon: <HiArrowNarrowRight />,
    serviceDesc:
      'Embark on a transformative journey knowledge and spiritual growth with in. Delve into its timeless teachings, wisdom, guidance, and life lessons.',
    serviceShape: serviceShape,
    serviceShape2: serviceShape2,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: 'Free Trial Classes',
    serviceUrl: '/service/free-trial-classes',
    serviceBtnText: 'Read More',
    serviceBtnIcon: <HiArrowNarrowRight />,
    serviceDesc:
      'Embark on a transformative journey knowledge and spiritual growth with in. Delve into its timeless teachings, wisdom, guidance, and life lessons.',
    serviceShape: serviceShape,
    serviceShape2: serviceShape2,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceTitle: 'Arabic Language',
    serviceUrl: '/service/arabic-language',
    serviceBtnText: 'Read More',
    serviceBtnIcon: <HiArrowNarrowRight />,
    serviceDesc:
      'Embark on a transformative journey knowledge and spiritual growth with in. Delve into its timeless teachings, wisdom, guidance, and life lessons.',
    serviceShape: serviceShape,
    serviceShape2: serviceShape2,
  },
];

const Service = () => {
  return (
    <section className='relative py-16 md:py-20 lg:py-28  bg-SecondaryColor-0 overflow-hidden'>
      <div className='absolute left-28 top-32'>
        <img src={shape} draggable={false} alt="Shape" className='animate-dance2 hidden lg:block' />
      </div>
      <div className='absolute -bottom-60 -left-8'>
        <img src={shape2} draggable={false} alt="Shape" className='animate-dance hidden lg:block' />
      </div>
      <div className='absolute right-24 bottom-[24%]'>
        <img src={shape3} draggable={false} alt="Shape" className='animate-flip hidden lg:block' />
      </div>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='zoom-in font-Outfit text-sm text-PrimaryColor-0 uppercase pb-1 relative z-10 before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:w-[48%] md:before:w-[11%] before:h-[.5px] before:bg-gradient-to-r before:to-SecondaryColor-0 before:via-PrimaryColor-0 before:from-SecondaryColor-0'>
            learn & place
          </h5>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px] mb-4'>
            Perfecting Quranic{' '}
            <span className='text-PrimaryColor-0'>Learning</span>
          </h1>
        </div>
        <div className='box-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7 mt-8 md:mt-[58px]'>
          {serviceCard.map(
            ({
              id,
              serviceIcon,
              serviceTitle,
              serviceUrl,
              serviceDesc,
              serviceBtnText,
              serviceBtnIcon,
              serviceShape,
              serviceShape2,
            }) => (
              <div key={id} className='box'>
                <ServiceCard
                  serviceIcon={serviceIcon}
                  serviceTitle={serviceTitle}
                  serviceUrl={serviceUrl}
                  serviceBtnText={serviceBtnText}
                  serviceBtnIcon={serviceBtnIcon}
                  serviceDesc={serviceDesc}
                  serviceShape={serviceShape}
                  serviceShape2={serviceShape2}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
