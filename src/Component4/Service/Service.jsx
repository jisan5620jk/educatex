import serviceIcon from '/images/learn-icon1.png';
import serviceIcon2 from '/images/learn-icon2.png';
import serviceIcon3 from '/images/learn-icon3.png';
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
  },
];



const Service = () => {
  return (
    <section className='relative pt-16 md:py-20 lg:pt-28 pb-6 md:pb-48 lg:pb-[190px] bg-SecondaryColor-0'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-Outfit text-sm text-PrimaryColor-0 uppercase pb-1 relative z-10 before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:w-[48%] md:before:w-[11%] before:h-[.5px] before:bg-gradient-to-r before:to-SecondaryColor-0 before:via-PrimaryColor-0 before:from-SecondaryColor-0'>
            learn & place
          </h5>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px] mb-4'>
            Perfecting Quranic{' '}
            <span className='text-PrimaryColor-0'>Learning</span>
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7'>
          {serviceCard.map(
            ({ id, serviceIcon, serviceTitle, serviceUrl, serviceDesc, serviceBtnText , serviceBtnIcon }) => (
              <div key={id}>
                <ServiceCard
                  serviceIcon={serviceIcon}
                  serviceTitle={serviceTitle}
                  serviceUrl={serviceUrl}
                  serviceBtnText={serviceBtnText}
                  serviceBtnIcon={serviceBtnIcon}
                  serviceDesc={serviceDesc}
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
