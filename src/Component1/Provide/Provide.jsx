import provideBoxIcon from '/images/service-icon21.png';
import provideBoxIcon2 from '/images/feature-icon21.png';
import provideBoxIcon3 from '/images/service-icon23.png';
import ProvideCard from './ProvideCard';
import { GoArrowRight } from 'react-icons/go';
import titleShape from '/images/sub-title-shape.png';
import itemIcon from '/images/service-icon24.png';
import itemIcon2 from '/images/service-icon25.png';
import itemIcon3 from '/images/service-icon26.png';
import provideShape from '/images/hand-img.png';
import { Link } from 'react-router-dom';

const provideData = [
  {
    id: 1,
    provideBoxIcon: provideBoxIcon,
    provideBoxTitle: 'Best Data-Driven SEO Campaigns',
    provideBoxDesc:
      'Rapidiously aggregate premier collaboration and idea-sharing vis-a-vis worldwide total linkage seamlessly generate',
    provideBoxBtnUrl: '/service_details',
    provideBoxBtnText: 'Details',
    provideBoxBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    provideBoxIcon: provideBoxIcon2,
    provideBoxTitle: 'Advanced Search Engine Optimization',
    provideBoxDesc:
      'Rapidiously aggregate premier collaboration and idea-sharing vis-a-vis worldwide total linkage seamlessly generate',
    provideBoxBtnUrl: '/service_details',
    provideBoxBtnText: 'Details',
    provideBoxBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    provideBoxIcon: provideBoxIcon3,
    provideBoxTitle: 'On-Page Optimization SEO Services',
    provideBoxDesc:
      'Rapidiously aggregate premier collaboration and idea-sharing vis-a-vis worldwide total linkage seamlessly generate',
    provideBoxBtnUrl: '/service_details',
    provideBoxBtnText: 'Details',
    provideBoxBtnIcon: <GoArrowRight />,
  },
];

const Provide = () => {
  return (
    <section className='pt-16 md:pt-20 lg:pt-28 relative bg-white'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
            />{' '}
            What We Provide{' '}
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='rotate-180'
            />
          </h5>
          <h1 className='font-Rajdhani font-bold text-lg leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px]'>
            Dominate Local Search Results with <br /> Tailored Local SEO
            Solutions
          </h1>
        </div>
      </div>
      <div className='px-5'>
        <div className='mt-[46px] relative z-10 overflow-hidden bg-[url(/images/service-bg21.png)] bg-cover bg-center max-w-[1490px] w-full mx-auto xl:rounded-lg py-8 lg:py-[100px]'>
          <div className='Container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
              {provideData.map(
                ({
                  id,
                  provideBoxIcon,
                  provideBoxTitle,
                  provideBoxDesc,
                  provideBoxBtnUrl,
                  provideBoxBtnText,
                  provideBoxBtnIcon,
                }) => {
                  return (
                    <div key={id}>
                      <ProvideCard
                        provideBoxIcon={provideBoxIcon}
                        provideBoxTitle={provideBoxTitle}
                        provideBoxDesc={provideBoxDesc}
                        provideBoxBtnUrl={provideBoxBtnUrl}
                        provideBoxBtnText={provideBoxBtnText}
                        provideBoxBtnIcon={provideBoxBtnIcon}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className='Container'>
            <ul className='grid items-center grid-cols-1 md:grid-cols-20 lg:grid-cols-3 gap-8 mt-7'>
              <li className='group flex items-center gap-4 sm:gap-7 lg:gap-4 xl:gap-7 bg-BodyBg-0 rounded-lg pr-4 sm:pr-6 md:pr-14 lg:pr-5 xl:pr-10 2xl:pr-14 pl-4 sm:pl-[30px] py-5 sm:py-9 relative z-10 overflow-hidden transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:right-0 before:bg-[#fdf6f0] before:w-0 before:h-full before:transition-all before:duration-300 before:ease-linear before:-z-10 hover:before:w-full hover:before:left-0'>
                <div className='size-[60px] sm:size-[72px] lg:size-[60px] xl:size-[72px] rounded-lg bg-BodyBg2-0 relative z-10 flex items-center justify-center overflow-hidden'>
                  <img
                    src={itemIcon}
                    draggable={false}
                    alt='Icon'
                    className='group-hover:animate-wobble_vertical'
                  />
                </div>
                <h5 className='flex-1 font-Rajdhani font-semibold text-lg sm:text-[22px] lg:text-lg xl:text-[19px] 2xl:text-[22px] leading-6 sm:leading-7 text-HeadingColor-0'>
                  Content Strategy Development
                </h5>
              </li>
              <li className='group flex items-center gap-4 sm:gap-7 lg:gap-4 xl:gap-7 bg-BodyBg-0 rounded-lg pr-4 sm:pr-6 md:pr-14 lg:pr-5 xl:pr-10 2xl:pr-14 pl-4 sm:pl-[30px] py-5 sm:py-9 relative z-10 overflow-hidden transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:right-0 before:bg-[#fdf6f0] before:w-0 before:h-full before:transition-all before:duration-300 before:ease-linear before:-z-10 hover:before:w-full hover:before:left-0'>
                <div className='size-[60px] sm:size-[72px] lg:size-[60px] xl:size-[72px] rounded-lg bg-BodyBg2-0 relative z-10 flex items-center justify-center overflow-hidden'>
                  <img
                    src={itemIcon2}
                    draggable={false}
                    alt='Icon'
                    className='group-hover:animate-wobble_vertical'
                  />
                </div>
                <h5 className='flex-1 font-Rajdhani font-semibold text-lg sm:text-[22px] lg:text-lg xl:text-[19px] 2xl:text-[22px] leading-6 sm:leading-7 text-HeadingColor-0'>
                  High-Speed Website Optimization
                </h5>
              </li>
              <li className='group flex items-center gap-4 sm:gap-7 lg:gap-4 xl:gap-7 bg-BodyBg-0 rounded-lg pr-4 sm:pr-6 md:pr-14 lg:pr-5 xl:pr-10 2xl:pr-14 pl-4 sm:pl-[30px] py-5 sm:py-9 relative z-10 overflow-hidden transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:right-0 before:bg-[#fdf6f0] before:w-0 before:h-full before:transition-all before:duration-300 before:ease-linear before:-z-10 hover:before:w-full hover:before:left-0'>
                <div className='size-[60px] sm:size-[72px] lg:size-[60px] xl:size-[72px] rounded-lg bg-BodyBg2-0 relative z-10 flex items-center justify-center overflow-hidden'>
                  <img
                    src={itemIcon3}
                    draggable={false}
                    alt='Icon'
                    className='group-hover:animate-wobble_vertical'
                  />
                </div>
                <h5 className='flex-1 font-Rajdhani font-semibold text-lg sm:text-[22px] lg:text-lg xl:text-[19px] 2xl:text-[22px] leading-6 sm:leading-7 text-HeadingColor-0'>
                  Sustainable Business Growth Service
                </h5>
              </li>
            </ul>
            <div className='flex items-center justify-center mt-10 sm:mt-[72px]'>
              <Link
                to={'/service'}
                className='inline-block'
              >
                <button className='primary-btn'>
                  {`All Services`}
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
          <div className='absolute -bottom-8 left-0 animate-wiggle hidden lg:block'>
            <img
              src={provideShape}
              draggable={false}
              alt='Shape'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;
