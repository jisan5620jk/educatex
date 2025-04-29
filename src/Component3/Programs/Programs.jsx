import programsImg1 from '/images/program-thumb1.png';
import programsImg2 from '/images/program-thumb2.png';
import programsImg3 from '/images/program-thumb3.png';
import './programs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ProgramsCard from './ProgramsCard';
import ProgramsNavigation from './ProgramsNavigation';
import subTilteIcon from '/images/sub-title2.png';
import { useRef } from 'react';
import shape from '/images/program-shape1.png';
import shape2 from '/images/program-shape2.png';

const programss = [
  {
    id: 1,
    img: programsImg1,
    category: '1st School',
    title: '1st School (01–02 Years)',
    programsUrl: '/programs',
    programsDesc:
      'Ultimate destination for knowledge seekers\nWe are committed to transforming special education impact global',
  },
  {
    id: 2,
    img: programsImg2,
    category: 'Pre School',
    title: 'Pre School (02–03 Years)',
    programsUrl: '/programs',
    programsDesc:
      'Ultimate destination for knowledge seekers\nWe are committed to transforming special education impact global',
  },
  {
    id: 3,
    img: programsImg3,
    category: 'Kinder Garden',
    title: 'Kindergarted (03–05 Years)',
    programsUrl: '/programs',
    programsDesc:
      'Ultimate destination for knowledge seekers\nWe are committed to transforming special education impact global',
  },
  {
    id: 4,
    img: programsImg2,
    category: 'Pre School',
    title: 'Pre School (02–03 Years)',
    programsUrl: '/programs',
    programsDesc:
      'Ultimate destination for knowledge seekers\nWe are committed to transforming special education impact global',
  },
];

const Programs = () => {
  const swiperRef = useRef(null);

  const settings = {
    loop: true,
    spaceBetween: 28,
    modules: [Autoplay],
    speed: 1500,
    autoplay: {
      delay: 50000,
      disableOnInteraction: false,
    },
    navigation: true,
    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
      1400: { slidesPerView: 3 },
    },
  };

  return (
    <div className='programs-section bg-[url("/images/program-bg4.png")] bg-cover bg-center bg-no-repeat py-24 md:py-32 lg:py-[180px] relative'>
      <div className='absolute top-[21%] xl:left-[14%] 2xl:left-[22%] hidden xl:block'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
          className='animate-flip'
        />
      </div>
      <div className='absolute top-[21%] right-[25%] hidden xl:block'>
        <img
          src={shape2}
          draggable={false}
          alt='Shape'
          className='animate-zigzagWriteExtreme'
        />
      </div>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase flex items-center justify-center gap-3'>
            <img
              src={subTilteIcon}
              draggable={false}
              alt='Icon'
            />{' '}
            OUR programsS
          </h5>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 mb-4'>
            Every Child Matters Nurturing
            <br />
            Growth at Every Stage
          </h1>
        </div>
      </div>

      <div className='w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1350px] 3xl:w-[1450px] px-2 md:px-3 lg:px-4 mx-auto pt-11'>
        <div className='relative z-10 pr-0 lg:px-[70px]'>
          <Swiper
            {...settings}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {programss.map(
              ({ id, img, category, title, programsUrl, programsDesc }) => (
                <SwiperSlide key={id}>
                  <div className='programs-box pb-20 lg:pb-0'>
                    <ProgramsCard
                      programsImg={img}
                      programsCategory={category}
                      programsTitle={title}
                      programsUrl={programsUrl}
                      programsDesc={programsDesc}
                    />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
          {/* Move programsNavigation outside the Swiper */}
          <ProgramsNavigation swiperRef={swiperRef} />
        </div>
      </div>
    </div>
  );
};

export default Programs;
