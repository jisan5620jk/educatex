import { FaGraduationCap, FaUser } from 'react-icons/fa6';
import CourseCard from './CourseCard';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';

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
            <span className='inline-flex items-center gap-2 text-sm font-medium text-gray-600 bg-blue-100 px-3 py-1 rounded-full'>
              <span className='w-2 h-2 bg-orange-400 rounded-full' />
              FEATURE COURSES
            </span>
            <h2 className='text-4xl font-bold mt-4'>
              Explore Featured <span className='text-green-500'>Courses</span>
            </h2>
            <p className='text-gray-600 mt-2'>
              Our online education platform offers accessible, and creative pro
              learning experience tailored to your needs.
            </p>
            <button className='mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition'>
              START TRIAL →
            </button>
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
