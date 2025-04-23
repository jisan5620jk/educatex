import programsImg1 from '/images/program-thumb1.png';
import programsImg2 from '/images/program-thumb2.png';
import programsImg3 from '/images/program-thumb3.png';
import './programs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ProgramsCard from './ProgramsCard';
import ProgramsNavigation from './ProgramsNavigation';
import subTilteIcon from '/images/sub-title2.png';
import { useRef } from 'react';

const programss = [
  {
    id: 1,
    img: programsImg1,
    category: 'Academic',
    title: 'Business Innovation And Development',
    price: '$30',
    programsRatingIcon: <BsStarFill />,
    programsRatingIcon2: <BsStarHalf />,
    rating: 4.5,
    ratingContent: '/3 Ratings',
    lessons: 12,
    students: 1200,
    programsUrl: '/programs',
    enrollBtn: 'Enroll Now',
    enrollBtnIcon: <HiArrowNarrowRight />,
  },
  {
    id: 2,
    img: programsImg2,
    category: 'Healths',
    title: 'Introduction to General Math Concepts',
    price: '$40',
    discountPrice: '$50',
    programsRatingIcon: <BsStarFill />,
    programsRatingIcon2: <BsStarHalf />,
    rating: 4.7,
    ratingContent: '/7 Ratings',
    lessons: 15,
    students: 1500,
    programsUrl: '/programs',
    enrollBtn: 'Enroll Now',
    enrollBtnIcon: <HiArrowNarrowRight />,
  },
  {
    id: 3,
    img: programsImg3,
    category: 'Finance',
    title: 'Physical Development and Motor Skills',
    price: '$50',
    programsRatingIcon: <BsStarFill />,
    programsRatingIcon2: <BsStarHalf />,
    rating: 4.8,
    ratingContent: '/5 Ratings',
    programsUrl: '/programs',
    enrollBtn: 'Enroll Now',
    enrollBtnIcon: <HiArrowNarrowRight />,
  },
  {
    id: 4,
    img: programsImg2,
    category: 'Social',
    title: 'Building Early Literacy and Communication',
    price: '$80',
    discountPrice: '$100',
    programsRatingIcon: <BsStarFill />,
    programsRatingIcon2: <BsStarHalf />,
    rating: 4.6,
    ratingContent: '/6 Ratings',
    lessons: 10,
    students: 1300,
    programsUrl: '/programs',
    enrollBtn: 'Enroll Now',
    enrollBtnIcon: <HiArrowNarrowRight />,
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
    <div className='programs-section bg-[url("/images/program-bg4.png")] bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-[180px] relative'>
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
            Browse Our programss – Comprehensive <br /> Teaching Kindness and
            Empathy
          </h1>
        </div>
      </div>

      <div className='w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1350px] 3xl:w-[1450px] px-2 md:px-3 lg:px-4 mx-auto pt-11'>
        <div className='relative z-10 pr-0 md:px-[70px]'>
          <Swiper
            {...settings}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {programss.map(
              ({
                id,
                img,
                category,
                title,
                price,
                discountPrice,
                rating,
                programsRatingIcon,
                programsRatingIcon2,
                ratingContent,
                lessons,
                students,
                enrollBtn,
                enrollBtnIcon,
                programsUrl,
              }) => (
                <SwiperSlide key={id}>
                  <div className='programs-box pb-20 lg:pb-0'>
                    <ProgramsCard
                      programsImg={img}
                      programsCategory={category}
                      programsTitle={title}
                      programsPrice={price}
                      discountPrice={discountPrice}
                      programsRating={rating}
                      programsRatingIcon={programsRatingIcon}
                      programsRatingIcon2={programsRatingIcon2}
                      programsRatingContent={ratingContent}
                      programsLessons={lessons}
                      programsStudents={students}
                      enrollBtn={enrollBtn}
                      enrollBtnIcon={enrollBtnIcon}
                      programsUrl={programsUrl}
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
