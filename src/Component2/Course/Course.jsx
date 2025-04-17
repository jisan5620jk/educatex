import { useEffect } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import courseImg1 from '/images/case-thumb1.jpg';
import courseImg2 from '/images/case-thumb2.jpg';
import courseImg3 from '/images/case-thumb3.jpg';
import instructorImg from '/images/case-autor.png';
import instructorImg2 from '/images/case-autor2.png';
import instructorImg3 from '/images/case-autor3.png';
import shape from '/images/case-shape1.png';
import './course.css';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { PiUsersThree } from 'react-icons/pi';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Course = () => {
  const courses = [
    {
      id: 1,
      img: courseImg1,
      category: 'Business',
      title: 'Business Innovation And Development',
      price: '$30',
      rating: 4.5,
      ratingContent: '/3 Ratings',
      lessons: 12,
      students: 1200,
      instructor: 'John D. Alexon',
      instructorImg: instructorImg,
    },
    {
      id: 2,
      img: courseImg2,
      category: 'Design',
      title: 'Fundamentals of Network And Domains',
      price: '$40',
      rating: 4.7,
      ratingContent: '/7 Ratings',
      lessons: 15,
      students: 1500,
      instructor: 'Jane Smith',
      instructorImg: instructorImg2,
    },
    {
      id: 3,
      img: courseImg3,
      category: 'Finance',
      title: 'Creative Graphic Design with Adobe Suite',
      price: '$50',
      rating: 4.8,
      ratingContent: '/5 Ratings',
      lessons: 10,
      students: 2000,
      instructor: 'Michael B. Jordan',
      instructorImg: instructorImg3,
    },
  ];

  useEffect(() => {
    const $grid = new Isotope('.course-box', {
      masonry: {
        columnWidth: '.course-sizer',
        gutter: '.gutter-sizer',
      },
      itemSelector: '.course-item',
      percentPosition: true,
    });

    imagesLoaded('.course-box', () => {
      $grid.layout();
    });

    const filterButtons = document.querySelectorAll(
      '.filter-button-group button'
    );
    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        this.classList.add('active');
        const filterValue = this.getAttribute('data-filter');
        $grid.arrange({ filter: filterValue });
      });
    });

    filter_animation();

    function filter_animation() {
      const activeBg = document.querySelector('.course-active-bg');
      const activeElement = document.querySelector(
        '.filter-button-group .active'
      );
      updateActiveFilterBtn(activeBg, activeElement);

      filterButtons.forEach((button) => {
        button.addEventListener('click', function () {
          updateActiveFilterBtn(activeBg, this);
        });
      });
    }

    function updateActiveFilterBtn(activeBg, element) {
      if (!element) return;
      const leftOff = element.getBoundingClientRect().left;
      const width = element.offsetWidth;
      const menuLeft = document
        .querySelector('.filter-button-group')
        .getBoundingClientRect().left;

      activeBg.style.left = `${leftOff - menuLeft}px`;
      activeBg.style.width = `${width}px`;
    }

    return () => {
      filterButtons.forEach((button) => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className='course-filter bg-white pt-[60px] pb-[30px] md:pt-20 md:pb-[60px] lg:pt-[100px] xl:pt-[120px] lg:pb-[60px] xl:pb-20 relative'>
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

        <div className='flex items-center justify-center mt-11'>
          <div
            className='button-group filter-button-group relative z-10 inline-block'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <button
              data-filter='*'
              className='active px-3 sm:px-6 md:px-5 lg:px-[30px] py-[5px] sm:py-[9px] mx-[1px] sm:mx-2 md:mx-1 lg:mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              All <span className='hidden lg:inline-block'>Categories</span>
            </button>
            <button
              data-filter='.finance'
              className='hidden md:inline-block px-3 sm:px-6 md:px-5 lg:px-[30px] py-[5px] sm:py-[9px] mx-[1px] sm:mx-2 md:mx-1 lg:mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              Wordpress
            </button>
            <button
              data-filter='.wordpress'
              className=' px-3 sm:px-6 md:px-5 lg:px-[30px] py-[5px] sm:py-[9px] mx-[1px] sm:mx-2 md:mx-1 lg:mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              Business
            </button>
            <button
              data-filter='.networking'
              className='hidden md:inline-block px-3 sm:px-6 md:px-5 lg:px-[30px] py-[5px] sm:py-[9px] mx-[1px] sm:mx-2 md:mx-1 lg:mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              Networking
            </button>
            <button
              data-filter='.finance'
              className='px-3 sm:px-6 md:px-5 lg:px-[30px] py-[6px] sm:py-[9px] mx-[1px] sm:mx-2 md:mx-1 lg:mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              Finance
            </button>
            <button
              data-filter='.wordpress'
              className='px-3 sm:px-6 md:px-5 lg:px-[30px] py-[5px] sm:py-[9px] mx-[1px] sm:mx-2 md:mx-1 lg:mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              Designing
            </button>
            <div className='course-active-bg rounded-full top-0 left-0 bottom-0 right-0 absolute -z-10 bg-PrimaryColor-0 transition-all duration-500'></div>
          </div>
        </div>

        <div
          className='course-box flex flex-wrap -mx-[1.25%] pt-10 md:pt-[50px]'
          data-aos='fade-up'
          data-aos-delay='500'
          data-aos-duration='1000'
        >
          {/* Only needed if you're using Isotope */}
          <div className='course-sizer hidden lg:block w-[30.83%]'></div>
          <div className='gutter-sizer hidden lg:block w-[2.5%]'></div>

          {courses.map((course, idx) => (
            <div
              key={idx}
              className={` course-item box${course.id}
                          ${
                            idx === 0
                              ? 'finance'
                              : idx === 1
                              ? 'wordpress'
                              : idx === 2
                              ? 'networking'
                              : idx === 3
                              ? 'finance'
                              : 'wordpress'
                          }

                          md:w-[46%] lg:w-[30.83%]
                          mx-[2%] lg:mx-0 mb-[4%]
                          p-4 xl:p-[30px] rounded-[20px]
                          group relative z-10 overflow-hidden `}
            >
              <div className='relative rounded-2xl overflow-hidden'>
                <div className='hover-bg'>
                  <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-0'></span>
                  <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
                  <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-1/2'></span>
                  <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
                </div>
                <img
                  src={course.img}
                  alt='Course'
                  draggable={false}
                  className='w-full'
                />
                <div className='course-price absolute z-20 bottom-5 left-5 size-[70px] flex items-center justify-center text-white text-xl rounded-full font-Outfit font-medium'>
                  {course.price}
                </div>
              </div>

              <div className='sm:px-3 pt-6 text-left'>
                <span className='course-category font-Outfit text-sm px-5 py-[5px] rounded-3xl font-medium mb-4 inline-block'>
                  {course.category}
                </span>
                <h3 className='course-title font-Outfit text-xl sm:text-2xl lg:text-[22px] xl:text-2xl font-medium text-HeadingColor-0 transition-all duration-500 2xl:mr-12'>
                  {course.title}
                </h3>

                <div className='flex items-center gap-1 text-ReviewText-0 text-sm mt-3 mb-5'>
                  {[...Array(Math.floor(course.rating))].map((_, i) => (
                    <BsStarFill key={i} />
                  ))}
                  {course.rating % 1 !== 0 && <BsStarHalf />}
                  <span className='font-Outfit ml-1 text-HeadingColor-0 text-base'>
                    ({course.rating}
                    {course.ratingContent})
                  </span>
                </div>

                <div className='flex items-center gap-3 mb-7'>
                  <img
                    src={course.instructorImg}
                    alt='Instructor'
                  />
                  <div>
                    <h5 className='font-Outfit text-lg font-medium text-HeadingColor-0'>
                      {course.instructor}
                    </h5>
                    <p className='font-OpenSans text-[15px] text-TextColor-0'>
                      Instructor
                    </p>
                  </div>
                </div>

                <div className='border-t pt-5 relative'>
                  <div className='flex justify-between transition-all duration-500 group-hover:opacity-0'>
                    <div className='font-Outfit text-HeadingColor-0 flex items-center gap-1'>
                      <IoDocumentTextOutline size={18} />
                      {course.lessons} Lessons
                    </div>
                    <div className='font-Outfit text-HeadingColor-0 flex items-center gap-2'>
                      <PiUsersThree size={18} />
                      {course.students} Students
                    </div>
                  </div>
                  <Link to={'/course'}>
                    <button className='course-button absolute left-0 -bottom-20 font-Outfit inline-flex items-center gap-2 uppercase text-sm justify-between px-7 py-[12px] border z-10 overflow-hidden rounded-full text-white transition-all duration-500 group-hover:-bottom-4'>
                      Enroll Now
                      <span className='text-xl'>
                        <GoArrowRight />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
