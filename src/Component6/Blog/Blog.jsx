import blogThumb from '/images/blog-thumb7.png';
import blogThumb2 from '/images/blog-thumb8.png';
import blogThumb3 from '/images/blog-thumb9.png';
import blogPostIcon from '/images/blog-autor1.png';
import blogPostIcon2 from '/images/blog-autor2.png';
import blogPostIcon3 from '/images/blog-autor3.png';
import { IoMdLogIn } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import BlogCard from './BlogCard';
import TextReveal from '../../Shared/TextAnim/TextReveal';

const blogData = [
  {
    id: 1,
    blogThumb,
    blogDate: '04 Feb',
    blogPostIcon,
    blogPost: 'By - Jhon D. Alexon',
    blogUrl: '/blog_details2',
    blogTitle: '10 Proven Strategies to excel Online Learning',
    blogBtnText: 'Continue Reading',
    blogBtnIcon: <IoMdLogIn />,
    bgColor: 'bg-PrimaryColor3-0 bg-opacity-[7%]',
    spanBg: 'bg-PrimaryColor3-0',
    dateBg: 'bg-PrimaryColor3-0',
    titleHover: 'hover:text-PrimaryColor3-0',
    borderColor: 'border-PrimaryColor3-0 border-opacity-30',
    buttonBg: 'bg-PrimaryColor3-0 bg-opacity-10',
    buttonText: 'text-PrimaryColor3-0',
    buttonBefore: 'before:bg-PrimaryColor3-0',
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
    bgColor: 'bg-PrimaryColor-0 bg-opacity-[7%]',
    spanBg: 'bg-PrimaryColor-0',
    dateBg: 'bg-PrimaryColor-0',
    titleHover: 'hover:text-PrimaryColor-0',
    borderColor: 'border-PrimaryColor-0 border-opacity-30',
    buttonBg: 'bg-PrimaryColor-0 bg-opacity-10',
    buttonText: 'text-PrimaryColor-0',
    buttonBefore: 'before:bg-PrimaryColor-0',
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
    bgColor: 'bg-PrimaryColor2-0 bg-opacity-[7%]',
    spanBg: 'bg-PrimaryColor2-0',
    dateBg: 'bg-PrimaryColor2-0',
    titleHover: 'hover:text-PrimaryColor2-0',
    borderColor: 'border-PrimaryColor2-0 border-opacity-30',
    buttonBg: 'bg-PrimaryColor2-0 bg-opacity-10',
    buttonText: 'text-PrimaryColor2-0',
    buttonBefore: 'before:bg-PrimaryColor2-0',
  },
];

const Blog = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    modules: [Autoplay],
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  };

  return (
    <section className='py-16 md:py-20 lg:py-28 bg-white'>
      <div className='Container'>
        <div className='relative grid items-center grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='border-b border-SecondaryColor-0 border-opacity-15 pb-6 lg:py-6'>
            <h5 className='font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              LATEST BLOG
            </h5>
          </div>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0'>
            <TextReveal text='Read the Latest Insights and'/>
            <TextReveal text='Updates Educate Blog'/>
          </h1>
        </div>

        <div className='mt-[46px]'>
          <Swiper {...settings}>
            {blogData.map((item) => (
              <SwiperSlide key={item.id}>
                <BlogCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
