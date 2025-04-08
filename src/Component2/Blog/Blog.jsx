import blogThumb from '/images/01-1.jpg';
import blogThumb2 from '/images/02.jpg';
import blogThumb3 from '/images/03.jpg';
import titleShape from '/images/sub-title-shape.png';
import BlogCard from './BlogCard';
import blogPostIcon from '/images/user1.png';
import blogPostIcon2 from '/images/user2.png';
import blogPostIcon3 from '/images/user3.png';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogPostIcon: blogPostIcon,
    blogPost: 'By - Jhon D. Alexon',
    blogUrl: '/blog_details2',
    blogTitle: 'Top 5 Ways Robotics Can Boost Your Productivity',
    blogBtnText: 'Read More',
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogPostIcon: blogPostIcon2,
    blogPost: 'By - Samira Khan',
    blogUrl: '/blog_details2',
    blogTitle: 'Exploring Self-Driving Cars to Factory Automation',
    blogBtnText: 'Read More',
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogPostIcon: blogPostIcon3,
    blogPost: 'By - Anjelina Watson',
    blogUrl: '/blog_details2',
    blogTitle: 'Exploring Self-Driving Cars to Factory Automation',
    blogBtnText: 'Read More',
  },
];

const Blog = () => {
  const settings = {
    loop: true,
    spaceBetween: 32,
    modules: [Autoplay],
    speed: 1000,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
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
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className='py-16 md:py-20 lg:py-28 bg-white'>
      <div className='Container'>
        <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:items-center'>
          <div>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Latest Blog
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Ready Our Latest Insights
              <br /> from Our Blog Posts
            </h1>
          </div>
          <div className=''>
            <Link
              to={'/blog_grid2'}
              className='inline-block'
            >
              <button className='primary-btn'>
                {`All Projects`}
                <span className='icon-style'>
                  <svg
                    className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='CurrentColor'
                    width='14.2'
                    height='14.2'
                    viewBox='0 0 14.2 14.2'
                  >
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='mt-[36px]'>
          <Swiper {...settings}>
            {blogData.map(
              ({
                id,
                blogThumb,
                blogPostIcon,
                blogPost,
                blogUrl,
                blogTitle,
                blogBtnText,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      blogPostIcon={blogPostIcon}
                      blogPost={blogPost}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
                      blogBtnText={blogBtnText}
                    />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
