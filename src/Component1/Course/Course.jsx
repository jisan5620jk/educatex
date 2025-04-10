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
      <div className='absolute left-7 bottom-0'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
          className='animate-dance'
        />
      </div>
      <div className='Container lg:px-0'>
        <div className='relative grid items-center grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='border-b border-SecondaryColor-0 border-opacity-15 py-6'>
            <h5 className='font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              OUR COURSES
            </h5>
          </div>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0'>
            Our Courses – Comprehensive
            <br />
            Available all programs
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
              className='active px-[7px] sm:px-6 md:px-[30px] py-[9px] mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              All Categories
            </button>
            <button
              data-filter='.finance'
              className='px-[7px] sm:px-6 md:px-[30px] py-[9px] mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              Wordpress
            </button>
            <button
              data-filter='.wordpress'
              className='px-[7px] sm:px-6 md:px-[30px] py-[9px] mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              Business
            </button>
            <button
              data-filter='.networking'
              className='px-[7px] sm:px-6 md:px-[30px] py-[9px] mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              Networking
            </button>
            <button
              data-filter='.finance'
              className='px-[7px] sm:px-6 md:px-[30px] py-[9px] mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              Finance
            </button>
            <button
              data-filter='.wordpress'
              className='px-[7px] sm:px-6 md:px-[30px] py-[9px] mx-2 rounded-full relative z-10 transition-all duration-500 font-Outfit text-sm sm:text-base font-medium text-HeadingColor-0 bg-PrimaryColor3-0 bg-opacity-10  capitalize'
            >
              Designing
            </button>
            <div className='course-active-bg rounded-full top-0 left-0 bottom-0 right-0 absolute -z-10 bg-PrimaryColor-0 transition-all duration-500'></div>
          </div>
        </div>

        <div
          className='course-box text-center pt-10 md:pt-[50px]'
          data-aos='fade-up'
          data-aos-delay='500'
          data-aos-duration='1000'
        >
          <div className='course-sizer w-[30.83%]'></div>
          <div className='gutter-sizer w-[2.5%]'></div>

          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`course-item box${course.id} ${
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

              }   rounded-[20px] mb-[4%] w-full md:w-[47%] lg:w-[30.83%] p-[30px] group relative z-10`}
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
                />
                <div className='course-price absolute z-20 bottom-5 left-5 size-[70px] flex items-center justify-center text-white text-xl rounded-full font-Outfit font-medium'>
                  {course.price}
                </div>
              </div>

              <div className='px-3 pt-6 text-left'>
                <span className='course-category font-Outfit text-sm px-5 py-[5px] rounded-3xl font-medium mb-4 inline-block'>
                  {course.category}
                </span>
                <h3 className='course-title font-Outfit text-2xl font-medium text-HeadingColor-0 transition-all duration-500'>
                  {course.title}
                </h3>

                <div className='flex items-center gap-1 text-[#ff9614] text-sm mt-3 mb-5'>
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

                <div className='flex justify-between border-t pt-5'>
                  <div className='font-Outfit text-HeadingColor-0 flex items-center gap-1'>
                    <span className='icon'>
                      <IoDocumentTextOutline size={18} />
                    </span>
                    {course.lessons} Lessons
                  </div>
                  <div className='font-Outfit text-HeadingColor-0 flex items-center gap-2'>
                    <span className='icon'>
                      <PiUsersThree size={18} />
                    </span>
                    {course.students} Students
                  </div>
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
