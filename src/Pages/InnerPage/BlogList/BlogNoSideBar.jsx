import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import blogListImg from '/images/blog-list-image.jpg';
import blogListImg2 from '/images/blog-list-image2.jpg';
import blogListImg3 from '/images/blog-list-image3.jpg';
import blogListImg4 from '/images/blog-list-image4.jpg';
import blogListImg5 from '/images/blog-list-image5.jpg';
import {
  FaAngleRight,
  FaArrowRightLong,
  FaRegCalendarDays,
  FaRegFolderOpen,
} from 'react-icons/fa6';
import BlogListCard from './BlogListCard';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import CallDoAction from '../ContactInner2/CallDoAction';

const blogListData = [
  {
    id: 1,
    blogListImg: blogListImg,
    thumbContent: 'IT Solution',
    blogListTilte: 'Expert Advice for Growing Your Digital Presence',
    postBy: 'By Author',
    postDateIcon: <FaRegCalendarDays />,
    postDate: '01 January, 2025',
    postFromIcon: <FaRegFolderOpen />,
    postFrom: 'Recycling',
    blogListDesc:
      'Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities',
    blogListBtnText: 'Continue Reading',
    blogListBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    blogListImg: blogListImg2,
    thumbContent: 'Environment',
    blogListTilte: 'Data-Driven Strategies and Case Studies Success.',
    postBy: 'By Author',
    postDateIcon: <FaRegCalendarDays />,
    postDate: '01 January, 2025',
    postFromIcon: <FaRegFolderOpen />,
    postFrom: 'Recycling',
    blogListDesc:
      'Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities',
    blogListBtnText: 'Continue Reading',
    blogListBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    blogListImg: blogListImg3,
    thumbContent: 'IT Solution',
    blogListTilte: 'The Complete SEO Blog for Digital Success.',
    postBy: 'By Author',
    postDateIcon: <FaRegCalendarDays />,
    postDate: '01 January, 2025',
    postFromIcon: <FaRegFolderOpen />,
    postFrom: 'Recycling',
    blogListDesc:
      'Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities',
    blogListBtnText: 'Continue Reading',
    blogListBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 4,
    blogListImg: blogListImg4,
    thumbContent: 'Branding',
    blogListTilte: 'Progressively Syndicate Vista Seamless Natural.',
    postBy: 'By Author',
    postDateIcon: <FaRegCalendarDays />,
    postDate: '01 January, 2025',
    postFromIcon: <FaRegFolderOpen />,
    postFrom: 'Recycling',
    blogListDesc:
      'Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities',
    blogListBtnText: 'Continue Reading',
    blogListBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 5,
    blogListImg: blogListImg5,
    thumbContent: 'Cyber Security',
    blogListTilte: 'The Definitive Handbook for Online Branding Success.',
    postBy: 'By Author',
    postDateIcon: <FaRegCalendarDays />,
    postDate: '01 January, 2025',
    postFromIcon: <FaRegFolderOpen />,
    postFrom: 'Recycling',
    blogListDesc:
      'Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities',
    blogListBtnText: 'Continue Reading',
    blogListBtnIcon: <FaArrowRightLong />,
  },
];

const BlogNoSideBar = () => {
  return (
    <>
      <HelmetChanger title={'Blog List No Sidebar Inner Page'} />
      <BreadCrumb2
        breadCrumbTitle={'Blog List No Sidebar'}
        url={'/blog'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        breadCrumbLink={'Blog'}
        breadCrumbContent={'Blog List No Sidebar'}
      />
      <section className='pt-16 md:pt-20 lg:pt-[120px] pb-16 md:pb-20 lg:pb-[120px]'>
        <div className='Container'>
          <div className=''>
            {blogListData.map(
              ({
                id,
                blogListImg,
                thumbContent,
                blogListTilte,
                postBy,
                postDateIcon,
                postDate,
                postFromIcon,
                postFrom,
                blogListDesc,
                blogListBtnIcon,
                blogListBtnText,
              }) => {
                return (
                  <div
                    key={id}
                    className='mb-7'
                  >
                    <BlogListCard
                      blogListImg={blogListImg}
                      thumbContent={thumbContent}
                      blogListTitle={blogListTilte}
                      postBy={postBy}
                      postDateIcon={postDateIcon}
                      postDate={postDate}
                      postFromIcon={postFromIcon}
                      postFrom={postFrom}
                      blogListDesc={blogListDesc}
                      blogListBtnIcon={blogListBtnIcon}
                      blogListBtnText={blogListBtnText}
                    />
                  </div>
                );
              }
            )}
          </div>
          <div>
            <ul className='flex items-center gap-2 justify-center pt-[50px]'>
              <li>
                <button className='h-[50px] w-[50px] font-OpenSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  01
                </button>
              </li>
              <li>
                <button className='h-[50px] w-[50px] font-OpenSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  02
                </button>
              </li>
              <li>
                <button className='h-[50px] w-[50px] font-OpenSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  03
                </button>
              </li>
              <li>
                <button className='h-[50px] w-[50px] font-OpenSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  <FaAngleRight />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <CallDoAction />
    </>
  );
};

export default BlogNoSideBar;
