import { FaRegCalendarCheck } from 'react-icons/fa6';
import blogThumb from '/images/blog1.webp';
import blogThumb2 from '/images/blog2.webp';
import blogThumb3 from '/images/blog3.webp';
import titleShape from '/images/sub-title-shape.png';
import BlogCard from './BlogCard';
import blogPostIcon from '/images/user1.png';
import blogPostIcon2 from '/images/user2.png';
import blogPostIcon3 from '/images/user3.png';
import bgShape from '/images/blog-bg.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '24',
    blogMonth: 'Mar',
    blogPostIcon: blogPostIcon,
    blogPost: 'By - Jhon D. Alexon',
    blogUrl: '/blog_details2',
    blogTitle: '5 popular online security tools for data protect',
    blogBtnText: 'Read More',
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '18',
    blogMonth: 'Apl',
    blogPostIcon: blogPostIcon2,
    blogPost: 'By - Samira Khan',
    blogUrl: '/blog_details2',
    blogTitle: 'How to Install SEO Tools on wordpress theme',
    blogBtnText: 'Read More',
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '20',
    blogMonth: 'Jun',
    blogPostIcon: blogPostIcon3,
    blogPost: 'By - Anjelina Watson',
    blogTitle: '10 Secreate and Hidden Tips Grow Audience',
    blogUrl: '/blog_details2',
    blogBtnText: 'Read More',
  },
];

const Blog = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    modules: [Autoplay],
    speed: 2000,
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
    },
  };
  return (
    <section className='pt-0 pb-16 md:pt-10 md:pb-20 xl:py-20 2xl:py-28 bg-white relative z-10'>
      <div className='mx-auto'>
        <img
          src={bgShape}
          draggable={false}
          alt='Bg Shape'
          className='w-full absolute -top-[20%] 2xl:-top-[44%] -z-10'
        />
      </div>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
            />{' '}
            Latest Blog{' '}
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='rotate-180'
            />
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[38px] md:leading-[48px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
            Ready Our Latest Insights
            <br /> from Our Blog Posts
          </h1>
          <p className='font-Nunito text-TextColor2-0 max-w-[605px] w-full mx-auto'>
            Sit amet consectetur adipiscing elite sed eiusmod tempor incididunt
            ut labore dolore pendisse ultrices gravidaisus commodo viva aliqua
            quis
          </p>
        </div>
        <div className='mt-[46px]'>
          <Swiper {...settings}>
            {blogData.map(
              ({
                id,
                blogThumb,
                blogDateIcon,
                blogDate,
                blogMonth,
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
                      blogDateIcon={blogDateIcon}
                      blogDate={blogDate}
                      blogMonth={blogMonth}
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
