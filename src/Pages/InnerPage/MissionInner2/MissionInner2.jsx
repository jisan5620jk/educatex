import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import missionImg from '/images/mision-image1.png';
import missionImg2 from '/images/mision-image2.png';
import missionImg3 from '/images/mision-image3.png';
import icon from '/images/mision-icon.png';
import MisionProcess from './MisionProcess/MisionProcess';

const MissionInner2 = () => {
  return (
    <>
      <HelmetChanger title={'Mission & Vision Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'Mission Vision'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'Mission Vision'}
      />
      <section className='relative py-16 md:py-20 lg:py-28 z-10'>
        <div className='Container lg:px-0'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0'>
            <div>
              <img
                src={missionImg}
                draggable={false}
                alt='Image'
              />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Outfit font-bold text-HeadingColor-0 text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Our Mission
              </h2>
              <div className='flex flex-row gap-4'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-OpenSans text-TextColor2-0 flex-1 -mt-1 max-w-[484px] w-full'>
                  Completely target market-driven collaboration and idea-sharing
                  via partnerships. Monotonectally unleash open-sources
                  leaderships of through unique markets.
                </p>
              </div>
              <div className='flex flex-row gap-4 my-6'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-OpenSans text-TextColor2-0 flex-1 -mt-1 max-w-[484px] w-full'>
                  We believe that technology should not only be powerful but
                  also in intuitive and user-friendly, and our offerings reflect
                  that philosophy of a culture of continuous learning and
                  improvement.
                </p>
              </div>
              <div className='flex flex-row gap-4 mb-12'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-OpenSans text-TextColor2-0 flex-1 -mt-1 max-w-[488px] w-full'>
                  Sustainability is also at the heart of our mission. We
                  recognize there environmental and societal impacts of
                  technology, and we are can to ensuring that our products and
                  services.
                </p>
              </div>
              <Link
                to={'/contact2'}
                className='inline-block'
              >
                <button className='primary-btn'>
                  {`Get In Touch`}
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
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0 py-16 md:py-20 lg:py-28'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Outfit font-bold text-HeadingColor-0 text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Our Commitment
              </h2>
              <div className='flex flex-row gap-4'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-OpenSans text-TextColor2-0 flex-1 -mt-1 max-w-[484px] w-full'>
                  Completely target market-driven collaboration and idea-sharing
                  via partnerships. Monotonectally unleash open-sources
                  leaderships of through unique markets.
                </p>
              </div>
              <div className='flex flex-row gap-4 my-6'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-OpenSans text-TextColor2-0 flex-1 -mt-1 max-w-[484px] w-full'>
                  We believe that technology should not only be powerful but
                  also in intuitive and user-friendly, and our offerings reflect
                  that philosophy of a culture of continuous learning and
                  improvement.
                </p>
              </div>
              <div className='flex flex-row gap-4 mb-12'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-OpenSans text-TextColor2-0 flex-1 -mt-1 max-w-[488px] w-full'>
                  Sustainability is also at the heart of our mission. We
                  recognize there environmental and societal impacts of
                  technology, and we are can to ensuring that our products and
                  services.
                </p>
              </div>
              <Link
                to={'/contact2'}
                className='inline-block'
              >
                <button className='primary-btn'>
                  {`Get In Touch`}
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
            </div>{' '}
            <div>
              <img
                src={missionImg2}
                draggable={false}
                alt='Image'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0'>
            <div>
              <img
                src={missionImg3}
                draggable={false}
                alt='Image'
              />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Outfit font-bold text-HeadingColor-0 text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Our Culture
              </h2>
              <div className='flex flex-row gap-4'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-OpenSans text-TextColor2-0 flex-1 -mt-1 max-w-[484px] w-full'>
                  Completely target market-driven collaboration and idea-sharing
                  via partnerships. Monotonectally unleash open-sources
                  leaderships of through unique markets.
                </p>
              </div>
              <div className='flex flex-row gap-4 my-6'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-OpenSans text-TextColor2-0 flex-1 -mt-1 max-w-[484px] w-full'>
                  We believe that technology should not only be powerful but
                  also in intuitive and user-friendly, and our offerings reflect
                  that philosophy of a culture of continuous learning and
                  improvement.
                </p>
              </div>
              <div className='flex flex-row gap-4 mb-12'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-OpenSans text-TextColor2-0 flex-1 -mt-1 max-w-[488px] w-full'>
                  Sustainability is also at the heart of our mission. We
                  recognize there environmental and societal impacts of
                  technology, and we are can to ensuring that our products and
                  services.
                </p>
              </div>
              <Link
                to={'/contact2'}
                className='inline-block'
              >
                <button className='primary-btn'>
                  {`Get In Touch`}
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
      </section>
      <MisionProcess />
    </>
  );
};

export default MissionInner2;
