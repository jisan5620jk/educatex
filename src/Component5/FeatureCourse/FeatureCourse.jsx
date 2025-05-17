import { FaGraduationCap, FaUser } from 'react-icons/fa6';
import CourseCard from './CourseCard';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaCircle } from 'react-icons/fa';

const courses = [
  {
    id: 1,
    title: 'Develop Modern Responsive Websites with HTML',
    category: 'Business',
    lessons: '16 Lessons',
    duration: '10 weeks',
    tutor: 'John Carter',
    rating: 0,
    bgColor: 'bg-green-50',
    image: '/images/feature-course1.png',
    categoryColor:
      'bg-PrimaryColor3-0 bg-opacity-10 text-PrimaryColor3-0 border-PrimaryColor3-0 border-opacity-30',
    courseLink: '/course',
    price: 'FREE',
    author: 'Jacob Smith',
    authorIcon: <FaUser />,
    lessonIcon: <FaGraduationCap />,
    durationIcon: <BsFillCalendar2WeekFill />,
    hoverBgColor: 'bg-PrimaryColor3-0',
    hoverTextColor: 'hover:text-PrimaryColor3-0',
    textColor: 'text-PrimaryColor3-0',
  },
  {
    id: 2,
    title: 'Complete WordPress Theme Development',
    category: 'Business',
    lessons: '18 Lessons',
    duration: '12 weeks',
    tutor: 'Emily Johnson',
    rating: 0,
    bgColor: 'bg-blue-50',
    image: '/images/feature-course2.png',
    categoryColor:
      'bg-PrimaryColor-0 bg-opacity-10 text-PrimaryColor-0 border-PrimaryColor-0 border-opacity-30',
    courseLink: '/course',
    price: 'FREE',
    author: 'Jacob Smith',
    authorIcon: <FaUser />,
    lessonIcon: <FaGraduationCap />,
    durationIcon: <BsFillCalendar2WeekFill />,
    hoverBgColor: 'bg-PrimaryColor-0',
    hoverTextColor: 'hover:text-PrimaryColor-0',
    textColor: 'text-PrimaryColor-0',
  },
  {
    id: 3,
    title: 'Fundamental React Lessons for Enhancement',
    category: 'Business',
    lessons: '20 Lessons',
    duration: '14 weeks',
    tutor: 'Michael Smith',
    rating: 0,
    bgColor: 'bg-orange-50',
    image: '/images/feature-course3.png',
    categoryColor:
      'bg-PrimaryColor2-0 bg-opacity-10 text-PrimaryColor2-0 border-PrimaryColor2-0 border-opacity-30',
    courseLink: '/course',
    price: 'FREE',
    author: 'Jacob Smith',
    authorIcon: <FaUser />,
    lessonIcon: <FaGraduationCap />,
    durationIcon: <BsFillCalendar2WeekFill />,
    hoverBgColor: 'bg-PrimaryColor2-0',
    hoverTextColor: 'hover:text-PrimaryColor2-0',
    textColor: 'text-PrimaryColor2-0',
  },
];

const FeatureCourse = () => {
  return (
    <section className='bg-white py-16 md:py-20 lg:py-28'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className=''>
            <h5 className='font-OpenSans bg-PrimaryColor-0 bg-opacity-20 pl-4 pr-5 py-[7px] rounded-r-full border border-PrimaryColor-0 border-opacity-20 text-HeadingColor-0 text-sm inline-flex items-center gap-2 uppercase'>
              <span className='text-PrimaryColor2-0'>
                <FaCircle size={10} />
              </span>
              Featured Courses
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[45px] 2xl:leading-[55px] text-HeadingColor-0 mt-[18px] mb-4'>
              Explore Featured{' '}
              <span className='text-PrimaryColor-0'>Courses</span>
            </h1>
            <p className='font-OpenSans text-TextColor-0 text-[17px] w-full max-w-[525px] mb-9'>
              Our online education platform offers accessible, and creative pro
              learning experience tailored to your needs.
            </p>
            <div>
              <Link
                to={'/about'}
                className='primary-btn2'
              >
                Start Trial
                <HiArrowNarrowRight size={20} />
              </Link>
            </div>
          </div>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeatureCourse;
