import { FaRegCalendarCheck } from 'react-icons/fa6';
import blogThumb from '/images/blog_img.png';
import blogThumb2 from '/images/blog_img2.png';
import blogThumb3 from '/images/blog_img3.png';
import blogThumb4 from '/images/blog-image.jpeg';
import blogThumb5 from '/images/blog-image2.jpeg';
import blogThumb6 from '/images/blog-image3.jpeg';
import BlogCard from './BlogCard';
import blogPostIcon from '/images/user1.png';
import blogPostIcon2 from '/images/user2.png';
import blogPostIcon3 from '/images/user3.png';

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '04 Mar, 2025',
    blogPostIcon: blogPostIcon,
    blogPost: 'By - Jhon D. Alexon',
    blogUrl: '/blog_details2',
    blogTitle: 'Expert Advice for Growing Your Digital Presence',
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '14 Mar, 2025',
    blogPostIcon: blogPostIcon2,
    blogPost: 'By - Samira Khan',
    blogUrl: '/blog_details2',
    blogTitle: 'Data-Driven Strategies and Case Studies Success',
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '24 Mar, 2025',
    blogPostIcon: blogPostIcon3,
    blogPost: 'By - Anjelina Watson',
    blogTitle: 'The Complete SEO Blog for Digital Success',
  },
  {
    id: 4,
    blogThumb: blogThumb4,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '24 May, 2025',
    blogPostIcon: blogPostIcon,
    blogPost: 'By - Jhon D. Alexon',
    blogUrl: '/blog_details2',
    blogTitle: 'Expert Advice for Growing Your Digital Presence',
  },
  {
    id: 5,
    blogThumb: blogThumb5,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '26 May, 2025',
    blogPostIcon: blogPostIcon2,
    blogPost: 'By - Samira Khan',
    blogUrl: '/blog_details2',
    blogTitle: 'Data-Driven Strategies and Case Studies Success',
  },
  {
    id: 6,
    blogThumb: blogThumb6,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '16 May, 2025',
    blogPostIcon: blogPostIcon3,
    blogPost: 'By - Anjelina Watson',
    blogTitle: 'The Complete SEO Blog for Digital Success',
  },
];

const Blog = () => {
  return (
    <section className='py-16 md:py-20 lg:py-28 bg-BodyBg-0'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
          {blogData.map(
            ({
              id,
              blogThumb,
              blogDateIcon,
              blogDate,
              blogPostIcon,
              blogPost,
              blogUrl,
              blogTitle,
            }) => {
              return (
                <div key={id}>
                  <BlogCard
                    blogThumb={blogThumb}
                    blogDateIcon={blogDateIcon}
                    blogDate={blogDate}
                    blogPostIcon={blogPostIcon}
                    blogPost={blogPost}
                    blogUrl={blogUrl}
                    blogTitle={blogTitle}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
