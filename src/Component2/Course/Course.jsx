import courseImg1 from '/images/case-thumb1.jpg';
import courseImg2 from '/images/case-thumb2.jpg';
import courseImg3 from '/images/case-thumb3.jpg';
import { HiArrowNarrowRight } from 'react-icons/hi';
import './course.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import CourseNavigation from './CourseNavigation';
import CourseCard from './CourseCard';
import { FaCircleCheck } from 'react-icons/fa6';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
import user from '/images/hero-autor.png';
import shape from '/images/couse-dot.png';
import shape2 from '/images/couse-arrow.png';

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
      delay: 50000, // Set delay time in milliseconds
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

  const tabRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    tabRefs.current.forEach((tab, index) => {
      const handleClick = () => {
        tabRefs.current.forEach((t) => t?.classList.remove('active'));
        tab?.classList.add('active');

        contentRefs.current.forEach((c) => c?.classList.remove('active'));
        contentRefs.current[index]?.classList.add('active');
      };

      tab?.addEventListener('click', handleClick);

      return () => tab?.removeEventListener('click', handleClick);
    });
  }, []);

  return (
    <div className='course-section bg-BodyBg-0 py-16 md:py-20 lg:py-[100px] xl:py-[120px] relative'>
      <div className='Container lg:px-0'>
        <div className='relative grid items-center grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='border-b border-SecondaryColor-0 border-opacity-15 pb-6 lg:py-6'>
            <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
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
      <div className='w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1350px] 3xl:w-[1510px] px-2 md:px-3 lg:px-4 mx-auto mt-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:pl-20 gap-y-10 lg:gap-0'>
          <div className='col-span-1 relative z-10'>
            <div className='space-y-5 lg:mr-10 2xl:mr-20'>
              <div className='course-tab-btn'>
                <button
                  ref={(el) => (tabRefs.current[0] = el)}
                  className='active group font-Outfit bg-white rounded-[16px] w-full text-HeadingColor-0 text-lg sm:text-xl lg:text-[17px] xl:text-xl transition-all duration-500 hover:text-white flex items-center gap-2 px-3 sm:px-6 lg:px-3 xl:px-6 py-4 sm:py-5 relative z-10 overflow-hidden'
                >
                  <div>
                    <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-0'></span>
                    <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
                    <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-1/2'></span>
                    <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
                  </div>
                  <FaCircleCheck className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                  Graduate Program
                </button>
              </div>
              <div className='course-tab-btn'>
                <button
                  ref={(el) => (tabRefs.current[1] = el)}
                  className='group font-Outfit bg-white rounded-[16px] w-full text-HeadingColor-0 text-lg sm:text-xl lg:text-[17px] xl:text-xl transition-all duration-500 hover:text-white flex items-center gap-2 px-3 sm:px-6 lg:px-3 xl:px-6 py-4 sm:py-5 relative z-10 overflow-hidden'
                >
                  <div>
                    <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-0'></span>
                    <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
                    <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-1/2'></span>
                    <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
                  </div>
                  <FaCircleCheck className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                  Under Graduate Program
                </button>
              </div>
              <div className='course-tab-btn'>
                <button
                  ref={(el) => (tabRefs.current[2] = el)}
                  className='group font-Outfit bg-white rounded-[16px] w-full text-HeadingColor-0 text-lg sm:text-xl lg:text-[17px] xl:text-xl transition-all duration-500 hover:text-white flex items-center gap-2 px-3 sm:px-6 lg:px-3 xl:px-6 py-4 sm:py-5 relative z-10 overflow-hidden'
                >
                  <div>
                    <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-0'></span>
                    <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
                    <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-1/2'></span>
                    <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
                  </div>
                  <FaCircleCheck className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                  Online Program
                </button>
              </div>
              <div className='course-tab-btn'>
                <button
                  ref={(el) => (tabRefs.current[3] = el)}
                  className='group font-Outfit bg-white rounded-[16px] w-full text-HeadingColor-0 text-lg sm:text-xl lg:text-[17px] xl:text-xl transition-all duration-500 hover:text-white flex items-center gap-2 px-3 sm:px-6 lg:px-3 xl:px-6 py-4 sm:py-5 relative z-10 overflow-hidden'
                >
                  <div>
                    <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-0'></span>
                    <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
                    <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-1/2'></span>
                    <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
                  </div>
                  <FaCircleCheck className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                  Scholarship Program
                </button>
              </div>
            </div>

            <div className='absolute bottom-0 left-24 hidden lg:block'>
              <div>
                <img
                  src={user}
                  draggable={false}
                  alt='User Image'
                />
              </div>
              <div className='flex items-center gap-5'>
                <div className='!font-Outfit font-semibold text-[26px] text-HeadingColor-0 flex gap-1 items-center'>
                  <OnScrollCounter
                    start={0}
                    end={130}
                    duration={3000}
                  />
                  <span>+</span>
                </div>
                <h5 className='font-OpenSans text-HeadingColor-0'>
                  Instructor
                </h5>
              </div>
            </div>
            <div className='absolute -z-10 bottom-8 left-40 hidden lg:block'>
              <img
                src={shape}
                draggable={false}
                alt='Shape'
                className='animate-wiggle'
              />
            </div>
            <div className='absolute bottom-12 left-4 animate-dance3 hidden lg:block'>
              <img
                src={shape2}
                draggable={false}
                alt='Shape'
              />
            </div>
          </div>

          <div
            ref={(el) => (contentRefs.current[0] = el)}
            className='course-tab-content col-span-2 active'
          >
            <Swiper
              {...settings}
              className='pr-0 md:!pr-20'
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
                      <div className='course-box pb-20 lg:pb-0'>
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
          <div
            ref={(el) => (contentRefs.current[1] = el)}
            className='course-tab-content col-span-2'
          >
            <Swiper
              {...settings}
              className='pr-0 md:!pr-20'
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
                      <div className='course-box pb-20 lg:pb-0'>
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
          <div
            ref={(el) => (contentRefs.current[2] = el)}
            className='course-tab-content col-span-2'
          >
            <Swiper
              {...settings}
              className='pr-0 md:!pr-20'
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
                      <div className='course-box pb-20 lg:pb-0'>
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
          <div
            ref={(el) => (contentRefs.current[3] = el)}
            className='course-tab-content col-span-2'
          >
            <Swiper
              {...settings}
              className='pr-0 md:!pr-20'
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
                      <div className='course-box pb-20 lg:pb-0'>
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
  );
};

export default Course;
