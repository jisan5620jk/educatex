import courseImg1 from '/images/course-thumb41.png';
import courseImg2 from '/images/course-thumb42.png';
import courseImg3 from '/images/course-thumb43.png';
import shape from '/images/course-shape1.png';
import shape2 from '/images/course-shape2.png';
import './course.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import CourseCard from './CourseCard';
import CourseNavigation from './CourseNavigation';
import subTilteIcon from '/images/sub-title2.png';
import { useRef } from 'react';

const courses = [
  {
    id: 1,
    img: courseImg1,
    category: 'Academic',
    title: 'Business Innovation And Development',
    price: '$30',
    courseRatingIcon: <BsStarFill />,
    courseRatingIcon2: <BsStarHalf />,
    rating: 4.5,
    ratingContent: '/3 Ratings',
    lessons: 12,
    students: 1200,
    courseUrl: '/course',
    enrollBtn: 'Enroll Now',
    enrollBtnIcon: <HiArrowNarrowRight />,
  },
  {
    id: 2,
    img: courseImg2,
    category: 'Healths',
    title: 'Introduction to General Math Concepts',
    price: '$40',
    discountPrice: '$50',
    courseRatingIcon: <BsStarFill />,
    courseRatingIcon2: <BsStarHalf />,
    rating: 4.7,
    ratingContent: '/7 Ratings',
    lessons: 15,
    students: 1500,
    courseUrl: '/course',
    enrollBtn: 'Enroll Now',
    enrollBtnIcon: <HiArrowNarrowRight />,
  },
  {
    id: 3,
    img: courseImg3,
    category: 'Finance',
    title: 'Physical Development and Motor Skills',
    price: '$50',
    courseRatingIcon: <BsStarFill />,
    courseRatingIcon2: <BsStarHalf />,
    rating: 4.8,
    ratingContent: '/5 Ratings',
    courseUrl: '/course',
    enrollBtn: 'Enroll Now',
    enrollBtnIcon: <HiArrowNarrowRight />,
  },
  {
    id: 4,
    img: courseImg2,
    category: 'Social',
    title: 'Building Early Literacy and Communication',
    price: '$80',
    discountPrice: '$100',
    courseRatingIcon: <BsStarFill />,
    courseRatingIcon2: <BsStarHalf />,
    rating: 4.6,
    ratingContent: '/6 Ratings',
    lessons: 10,
    students: 1300,
    courseUrl: '/course',
    enrollBtn: 'Enroll Now',
    enrollBtnIcon: <HiArrowNarrowRight />,
  },
];

const Course = () => {
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
    <div className='course-section3 bg-[url("/images/course-bg4.png")] bg-cover bg-center bg-no-repeat pt-24 sm:pt-32 md:pt-32 lg:pt-[140px] xl:pt-[170px] pb-16 sm:pb-24 md:pb-20 lg:pb-[140px] xl:pb-[204px] relative'>
      <div className='absolute left-52 top-48 hidden 3xl:block'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
          className='animate-rotateZoom'
        />
      </div>
      <div className='absolute right-32 top-60 hidden 3xl:block'>
        <img
          src={shape2}
          draggable={false}
          alt='Shape'
          className='animate-flip'
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
            OUR COURSES
          </h5>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[30px] sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 mb-4'>
            Browse Our Courses – Comprehensive{' '}
            <br className='hidden sm:block' /> Teaching Kindness and Empathy
          </h1>
        </div>
      </div>

      <div className='w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1350px] 3xl:w-[1450px] px-2 md:px-3 lg:px-4 mx-auto pt-5 md:pt-11'>
        <div className='relative z-10 pr-0 lg:px-[50px] 2xl:px-[70px]'>
          <Swiper
            {...settings}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {courses.map(
              ({
                id,
                img,
                category,
                title,
                price,
                discountPrice,
                rating,
                courseRatingIcon,
                courseRatingIcon2,
                ratingContent,
                lessons,
                students,
                enrollBtn,
                enrollBtnIcon,
                courseUrl,
              }) => (
                <SwiperSlide key={id}>
                  <div className='course-box pb-20 lg:pb-0'>
                    <CourseCard
                      courseImg={img}
                      courseCategory={category}
                      courseTitle={title}
                      coursePrice={price}
                      discountPrice={discountPrice}
                      courseRating={rating}
                      courseRatingIcon={courseRatingIcon}
                      courseRatingIcon2={courseRatingIcon2}
                      courseRatingContent={ratingContent}
                      courseLessons={lessons}
                      courseStudents={students}
                      enrollBtn={enrollBtn}
                      enrollBtnIcon={enrollBtnIcon}
                      courseUrl={courseUrl}
                    />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
          {/* Move CourseNavigation outside the Swiper */}
          <CourseNavigation swiperRef={swiperRef} />
        </div>
      </div>
    </div>
  );
};

export default Course;
