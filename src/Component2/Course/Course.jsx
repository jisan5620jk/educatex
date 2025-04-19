import courseImg1 from '/images/case-thumb1.jpg';
import courseImg2 from '/images/case-thumb2.jpg';
import courseImg3 from '/images/case-thumb3.jpg';
import shape from '/images/case-shape1.png';
import './course.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import CourseNavigation from './CourseNavigation';
import CourseCard from './CourseCard';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';

const courses = [
  {
    id: 1,
    img: courseImg1,
    category: 'Business',
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
    category: 'Design',
    title: 'Fundamentals of Network And Domains',
    price: '$40',
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
    title: 'Creative Graphic Design with Adobe Suite',
    price: '$50',
    courseRatingIcon: <BsStarFill />,
    courseRatingIcon2: <BsStarHalf />,
    rating: 4.8,
    ratingContent: '/5 Ratings',
    courseUrl: '/course',
    enrollBtn: 'Enroll Now',
    enrollBtnIcon: <HiArrowNarrowRight />,
  },
];

const Course = () => {
  const settings = {
    loop: true,
    spaceBetween: 26,
    modules: [Autoplay],
    speed: 1500,
    autoplay: {
      delay: 300000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <div className='course-section bg-BodyBg-0 pt-[60px] pb-[30px] md:pt-20 md:pb-[60px] lg:pt-[100px] xl:pt-[120px] lg:pb-[60px] xl:pb-20 relative'>
      <div className='absolute left-7 bottom-0 hidden 3xl:block'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
          className='animate-dance'
        />
      </div>
      <div className='Container lg:px-0'>
        <div className='relative grid items-center grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='border-b border-SecondaryColor-0 border-opacity-15 py-6'>
            <h5 className='font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              OUR COURSES
            </h5>
          </div>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0'>
            Our Courses – Comprehensive
            <br />
            Available all Programs
          </h1>
        </div>
      </div>
      <div className='w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1400px] px-2 md:px-3 lg:px-4 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          <div className='col-span-1'></div>
          <div className='col-span-2'>
            <div
              className='course-box flex flex-wrap pt-10 md:pt-[50px]'
              data-aos='fade-up'
              data-aos-delay='500'
              data-aos-duration='1000'
            >
              <Swiper
                {...settings}
                className='!pr-20'
              >
                {courses.map(
                  ({
                    id,
                    img,
                    category,
                    title,
                    price,
                    rating,
                    courseRatingIcon,
                    courseRatingIcon2,
                    ratingContent,
                    lessons,
                    students,
                    enrollBtn,
                    enrollBtnIcon,
                    courseUrl,
                  }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div className='course-box'>
                          <CourseCard
                            courseImg={img}
                            courseCategory={category}
                            courseTitle={title}
                            coursePrice={price}
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
                    );
                  }
                )}

                <CourseNavigation />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
