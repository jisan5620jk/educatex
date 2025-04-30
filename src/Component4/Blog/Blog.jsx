import blogThumb from '/images/blog-thumb1.png';
import blogThumb2 from '/images/blog-thumb2.png';
import blogThumb3 from '/images/blog-thumb3.png';
import BlogCard from './BlogCard';
import blogPostIcon from '/images/blog-autor1.png';
import blogPostIcon2 from '/images/blog-autor2.png';
import blogPostIcon3 from '/images/blog-autor3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import './blog.css';
import { IoMdLogIn } from 'react-icons/io';
import subTilteIcon from '/images/sub-title2.png';

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDate: '04 Feb',
    blogPostIcon: blogPostIcon,
    blogPost: 'By - Jhon D. Alexon',
    blogUrl: '/blog_details2',
    blogTitle: '10 Proven Strategies to excel Online Learning',
    blogBtnText: 'Continue Reading',
    blogBtnIcon: <IoMdLogIn />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDate: '14 Mar',
    blogPostIcon: blogPostIcon2,
    blogPost: 'By - Samira Khan',
    blogUrl: '/blog_details2',
    blogTitle: 'Trends that are shaping the Learning experience',
    blogBtnText: 'Continue Reading',
    blogBtnIcon: <IoMdLogIn />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDate: '24 Nov',
    blogPostIcon: blogPostIcon3,
    blogPost: 'By - Anjelina Watson',
    blogUrl: '/blog_details2',
    blogTitle: 'Learning is the Key soft skills and Professional',
    blogBtnText: 'Continue Reading',
    blogBtnIcon: <IoMdLogIn />,
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
    <section className='bg-[url("/images/blog-bg4.png")] bg-cover bg-top bg-no-repeat pb-16 md:pb-20 lg:pb-28 pt-24 sm:pt-32 md:pt-40 lg:pt-[180px] bg-white blog-section3'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase flex items-center justify-center gap-3'>
            <img
              src={subTilteIcon}
              draggable={false}
              alt='Icon'
            />{' '}
            LATEST BLOG
          </h5>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 mb-4'>
            Read the Latest Insights and
            <br />
            Updates Educate Blog
          </h1>
        </div>
        <div className='mt-6 md:mt-[46px]'>
          <Swiper {...settings}>
            {blogData.map(
              ({
                id,
                blogThumb,
                blogDate,
                blogPostIcon,
                blogPost,
                blogUrl,
                blogTitle,
                blogBtnText,
                blogBtnIcon,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className='blog-box'>
                      <BlogCard
                        blogThumb={blogThumb}
                        blogDate={blogDate}
                        blogPostIcon={blogPostIcon}
                        blogPost={blogPost}
                        blogUrl={blogUrl}
                        blogTitle={blogTitle}
                        blogBtnText={blogBtnText}
                        blogBtnIcon={blogBtnIcon}
                      />
                    </div>
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
