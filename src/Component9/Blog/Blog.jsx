import blogThumb from '/images/blog1-1.webp';
import blogThumb2 from '/images/blog2-1.webp';
import blogThumb3 from '/images/blog3-1.webp';
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
    blogTitle: 'How to Optimize Your CCTV Camera Placement',
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
    blogTitle: 'Top 5 Benefits of Installing CCTV Commercial Properties',
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
      delay: 4000, // Set delay time in milliseconds
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
    <section className='py-16 md:py-20 lg:py-28 bg-BorderColor5-0'>
      <div className='Container'>
        <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:items-center'>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
                className='brightness-0 invert-[1]'
              />{' '}
              Latest Blog
            </h5>
            <h1 className='font-Rajdhani font-bold text-[40px] leading-[42px] sm:text-[50px] sm:leading-[52px] md:text-[60px] md:leading-[72px] lg:text-[60px] lg:leading-[62px] xl:text-[70px] xl:leading-[72px] 2xl:text-[80px] 2xl:leading-[82px] text-white mt-[14px]'>
              Latest Insights
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
        <div className='mt-[54px]'>
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
