import { FaCircle } from 'react-icons/fa';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGraduationCap, FaUser } from 'react-icons/fa6';
import { BsFillCalendar2WeekFill  } from 'react-icons/bs';

const courses = [
  {
    image: '/images/course-thumb71.png',
    category: 'Business',
    categoryColor:
      'bg-PrimaryColor3-0 bg-opacity-10 text-PrimaryColor-0 border-PrimaryColor3-0 border-opacity-30',
    title: 'Starting SEO as Your Home Based Business.',
    courseLink: '/course',
    price: 'FREE',
    author: 'Emily Johnson',
    authorIcon: <FaUser />,
    lessons: '16 Lessons',
    lessonIcon: <FaGraduationCap />,
    duration: '10 weeks',
    durationIcon: <BsFillCalendar2WeekFill  />,
    bgColor: 'bg-PrimaryColor3-0 bg-opacity-5',
    hoverBgColor: 'bg-PrimaryColor3-0',
    hoverTextColor: 'hover:text-PrimaryColor3-0',
    textColor: 'text-PrimaryColor3-0',
  },
  {
    image: '/images/course-thumb72.png',
    category: 'Business',
    categoryColor:
      'bg-PrimaryColor-0 bg-opacity-10 text-PrimaryColor-0 border-PrimaryColor-0 border-opacity-30',
    title: "Children's Drawing and Painting Class",
    courseLink: '/course',
    price: 'FREE',
    author: 'Jacob Smith',
    authorIcon: <FaUser />,
    lessons: '16 Lessons',
    lessonIcon: <FaGraduationCap />,
    duration: '10 weeks',
    durationIcon: <BsFillCalendar2WeekFill  />,
    bgColor: 'bg-PrimaryColor-0 bg-opacity-5',
    hoverBgColor: 'bg-PrimaryColor-0',
    hoverTextColor: 'hover:text-PrimaryColor-0',
    textColor: 'text-PrimaryColor-0',
  },
  {
    image: '/images/course-thumb73.png',
    category: 'Business',
    categoryColor:
      'bg-PrimaryColor2-0 bg-opacity-10 text-PrimaryColor2-0 border-PrimaryColor2-0 border-opacity-30',
    title: 'Digital Healthy Cooking Masterclass',
    courseLink: '/course',
    price: 'FREE',
    author: 'Sophia Miller',
    authorIcon: <FaUser />,
    lessons: '16 Lessons',
    lessonIcon: <FaGraduationCap />,
    duration: '10 weeks',
    durationIcon: <BsFillCalendar2WeekFill  />,
    bgColor: 'bg-PrimaryColor2-0 bg-opacity-5',
    hoverBgColor: 'bg-PrimaryColor2-0',
    hoverTextColor: 'hover:text-PrimaryColor2-0',
    textColor: 'text-PrimaryColor2-0',
  },
  {
    image: '/images/course-thumb74.png',
    category: 'Business',
    categoryColor:
      'bg-PrimaryColor4-0 bg-opacity-10 text-PrimaryColor4-0 border-PrimaryColor4-0 border-opacity-30',
    title: 'Complete Guide to Digital Marketing',
    courseLink: '/course',
    price: 'FREE',
    author: 'Liam Anderson',
    authorIcon: <FaUser />,
    lessons: '16 Lessons',
    lessonIcon: <FaGraduationCap />,
    duration: '10 weeks',
    durationIcon: <BsFillCalendar2WeekFill  />,
    bgColor: 'bg-PrimaryColor4-0 bg-opacity-5',
    hoverBgColor: 'bg-PrimaryColor4-0',
    hoverTextColor: 'hover:text-PrimaryColor4-0',
    textColor: 'text-PrimaryColor4-0',
  },
];

const Course = () => {
  return (
    <section className='bg-white py-16 md:py-20 lg:py-28 relative z-10'>
      <div className='Container'>
        <div className='flex items-center justify-between flex-wrap'>
          <div>
            <h5 className='font-Outfit text-sm text-HeadingColor-0 uppercase pb-1 flex items-center gap-3 relative z-10 before:absolute before:left-0 before:top-full before:w-[44%] md:before:w-[35%] before:h-[.5px] before:bg-gradient-to-r before:to-white before:via-PrimaryColor-0 before:from-white'>
              <span className='text-PrimaryColor2-0'>
                <FaCircle size={10} />
              </span>
              Educate Courses
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[45px] 2xl:leading-[55px] text-HeadingColor-0 mt-[18px]'>
              Educate Trending{' '}
              <span className='text-PrimaryColor-0'>Courses</span>
            </h1>
          </div>
          <div>
            <Link
              to={'/about'}
              className='primary-btn2'
            >
              More Details
              <HiArrowNarrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-[52px]'>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
