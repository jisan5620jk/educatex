import image from '/images/trending-thumb81.png';
import image2 from '/images/trending-thumb82.png';
import image3 from '/images/trending-thumb83.png';
import image4 from '/images/trending-thumb84.png';
import bottomRightIcon from '/images/trending-book.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import CourseCard from './CourseCard';
import { MdOutlineStar } from 'react-icons/md';
import shape from '/images/trending-shape81.png';
import shape2 from '/images/trending-shape84.png';
import shape3 from '/images/trending-shape83.png';
import shape4 from '/images/trending-shape82.png';

const quranCourses = [
  {
    id: 1,
    image: image,
    category: 'Business',
    price: 'FREE',
    title: 'Learn to Read with Tajweed',
    rating: 5,
    ratingCount: 0,
    description: 'Background to courses to and learners our education-focused.',
    readMoreText: 'READ MORE',
    readMoreUrl: '/course_details',
    readMoreIcon: <HiArrowNarrowRight />,
    bottomRightIcon: bottomRightIcon,
    starIcon: <MdOutlineStar />,
  },
  {
    id: 2,
    image: image2,
    category: 'Business',
    price: 'FREE',
    title: 'Adult Noorani Qaida Course',
    rating: 5,
    ratingCount: 0,
    description: 'Background to courses to and learners our education-focused.',
    readMoreText: 'READ MORE',
    readMoreUrl: '/course_details',
    readMoreIcon: <HiArrowNarrowRight />,
    bottomRightIcon: bottomRightIcon,
    starIcon: <MdOutlineStar />,
  },
  {
    id: 3,
    image: image3,
    category: 'Business',
    price: 'FREE',
    title: 'Children’s Ijazah Training',
    rating: 5,
    ratingCount: 0,
    description: 'Background to courses to and learners our education-focused.',
    readMoreText: 'READ MORE',
    readMoreUrl: '/course_details',
    readMoreIcon: <HiArrowNarrowRight />,
    bottomRightIcon: bottomRightIcon,
    starIcon: <MdOutlineStar />,
  },
  {
    id: 4,
    image: image4,
    category: 'Business',
    price: 'FREE',
    title: 'Master Quran Memorization',
    rating: 5,
    ratingCount: 0,
    description: 'Background to courses to and learners our education-focused.',
    readMoreText: 'READ MORE',
    readMoreUrl: '/course_details',
    readMoreIcon: <HiArrowNarrowRight />,
    bottomRightIcon: bottomRightIcon,
    starIcon: <MdOutlineStar />,
  },
];

const Course = () => {
  return (
    <div className='bg-SecondaryColor-0 py-16 md:py-20 lg:py-28 relative overflow-hidden'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-Outfit text-sm text-PrimaryColor-0 uppercase pb-1 relative z-10 before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:w-[48%] md:before:w-[11%] before:h-[.5px] before:bg-gradient-to-r before:to-SecondaryColor-0 before:via-PrimaryColor-0 before:from-SecondaryColor-0'>
            educate courses
          </h5>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px] mb-4'>
            Educate Trending{' '}
            <span className='text-PrimaryColor-0'>Courses</span>
          </h1>
        </div>
        <div className='grid gap-6 md:grid-cols-1 lg:grid-cols-2 mt-8 md:mt-14'>
          {quranCourses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
            />
          ))}
        </div>
      </div>
      <div className='absolute top-32 left-24 hidden md:block'><img src={shape} draggable={false} alt="Shape" className='animate-flip' /></div>
      <div className='absolute bottom-32 right-32 hidden md:block'><img src={shape2} draggable={false} alt="Shape" className='animate-dance' /></div>
      <div className='absolute top-32 right-32 hidden md:block'><img src={shape3} draggable={false} alt="Shape" className='animate-dance2' /></div>
      <div className='absolute -top-[22%] -right-7 hidden md:block'><img src={shape4} draggable={false} alt="Shape" className='animate-dance' /></div>
    </div>
  );
};

export default Course;
