import { Link } from 'react-router-dom';
import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import blogListImg from '/images/blog-list-image.jpg';
import blogListImg2 from '/images/blog-list-image2.jpg';
import blogListImg3 from '/images/blog-list-image3.jpg';
import blogListImg4 from '/images/blog-list-image4.jpg';
import blogListImg5 from '/images/blog-list-image5.jpg';
import { IoSearch } from 'react-icons/io5';
import {
  FaAngleRight,
  FaArrowRightLong,
  FaRegCalendarDays,
  FaAnglesRight,
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

const BlogRightSideBar = () => {
  return (
    <>
      <HelmetChanger title={'Blog List Left Sidebar Inner Page'} />
      <BreadCrumb2
        breadCrumbTitle={'Blog List Left Sidebar'}
        url={'/blog'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        breadCrumbLink={'Blog'}
        breadCrumbContent={'Blog List Left Sidebar'}
      />
      <section className='pt-16 md:pt-20 lg:pt-[120px] pb-16 md:pb-20 lg:pb-[120px]'>
        <div className='Container'>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-7'>
            <div className='col-span-2 lg:col-span-1'>
              <div className='relative inline-block w-full mb-7 p-4 sm:p-8 lg:p-6 xl:p-8 rounded-md bg-BodyBg-0'>
                <input
                  type='text'
                  name='search'
                  id='search'
                  placeholder='Search here...'
                  required
                  className='w-full h-[56px] p-6 rounded font-Nunito'
                />
                <button
                  type='submit'
                  className=' text-xl text-TextColor2-0 rounded h-[56px] w-[56px] transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-7 top-1/2 -translate-y-1/2'
                >
                  <IoSearch />
                </button>
              </div>
              <div className='px-4 sm:px-8 lg:px-6 xl:px-8 bg-BodyBg-0 rounded-md pt-7 pb-4 mb-7'>
                <h4 className='font-Rajdhani font-semibold text-left text-2xl text-HeadingColor-0 pb-1 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-12 before:h-[1px] before:bg-SecondaryColor-0'>
                  Popular Post
                </h4>
                <Link to={'/blog_details'}>
                  <button className='group flex gap-5 mb-6'>
                    <div className='size-20 rounded overflow-hidden'>
                      <img
                        draggable='false'
                        src={blogListImg}
                        className='h-full object-center object-cover'
                      />
                    </div>
                    <div className='flex-1 text-left'>
                      <h6 className='font-Rajdhani font-semibold sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 ease-linear group-hover:underline group-hover:underline-offset-4'>
                        Expert Advice for Growing Your Digital Presence
                      </h6>
                      <p className='font-Nunito text-TextColor2-0 text-sm mt-1'>
                        01 Jan, 2025
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={'/blog_details'}>
                  <button className='group flex gap-5 mb-6'>
                    <div className='size-20 rounded overflow-hidden'>
                      <img
                        draggable='false'
                        src={blogListImg2}
                        className='h-full object-center object-cover'
                      />
                    </div>
                    <div className='flex-1 text-left'>
                      <h6 className='font-Rajdhani font-semibold sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 ease-linear group-hover:underline group-hover:underline-offset-4'>
                        Data-Driven Strategies and Case Studies Success.
                      </h6>
                      <p className='font-Nunito text-TextColor2-0 text-sm mt-1'>
                        24 May, 2025
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={'/blog_details'}>
                  <button className='group flex gap-5 mb-6'>
                    <div className='size-20 rounded overflow-hidden'>
                      <img
                        draggable='false'
                        src={blogListImg3}
                        className='h-full object-center object-cover'
                      />
                    </div>
                    <div className='flex-1 text-left'>
                      <h6 className='font-Rajdhani font-semibold sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 ease-linear group-hover:underline group-hover:underline-offset-4'>
                        The Complete SEO Blog for Digital Success.
                      </h6>
                      <p className='font-Nunito text-TextColor2-0 text-sm mt-1'>
                        30 Mar, 2025
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
              <div className='bg-BodyBg-0 rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7'>
                <h4 className='font-Rajdhani font-semibold text-left text-2xl text-HeadingColor-0 pb-1 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-12 before:h-[1px] before:bg-SecondaryColor-0'>
                  Categories
                </h4>
                <ul className='mt-8'>
                  <li>
                    <Link to={'/service_details'}>
                      <button className='w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded border-b border-HeadingColor-0 border-opacity-10 overflow-hidden z-10 relative'>
                        <span className='flex items-center gap-1'>
                          <FaAnglesRight className='text-HeadingColor-0 text-sm transition-all duration-500 group-hover:text-PrimaryColor-0' />
                          Web Development
                        </span>
                        <FaArrowRightLong className='text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100' />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/service_details2'}>
                      <button className='w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded border-b border-HeadingColor-0 border-opacity-10 overflow-hidden z-10 relative'>
                        <span className='flex items-center gap-1'>
                          <FaAnglesRight className='text-HeadingColor-0 text-sm transition-all duration-500 group-hover:text-PrimaryColor-0' />
                          Digital Marketing
                        </span>
                        <FaArrowRightLong className='text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100' />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/service_details3'}>
                      <button className='w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded border-b border-HeadingColor-0 border-opacity-10 overflow-hidden z-10 relative'>
                        <span className='flex items-center gap-1'>
                          <FaAnglesRight className='text-HeadingColor-0 text-sm transition-all duration-500 group-hover:text-PrimaryColor-0' />
                          IT Solution
                        </span>
                        <FaArrowRightLong className='text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100' />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/service_details4'}>
                      <button className='w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded border-b border-HeadingColor-0 border-opacity-10 overflow-hidden z-10 relative'>
                        <span className='flex items-center gap-1'>
                          <FaAnglesRight className='text-HeadingColor-0 text-sm transition-all duration-500 group-hover:text-PrimaryColor-0' />
                          App Development
                        </span>
                        <FaArrowRightLong className='text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100' />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/service_details5'}>
                      <button className='w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded border-b border-HeadingColor-0 border-opacity-10 overflow-hidden z-10 relative'>
                        <span className='flex items-center gap-1'>
                          <FaAnglesRight className='text-HeadingColor-0 text-sm transition-all duration-500 group-hover:text-PrimaryColor-0' />
                          Web Design
                        </span>
                        <FaArrowRightLong className='text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100' />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/service_details6'}>
                      <button className='w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group py-3 flex items-center justify-between rounded overflow-hidden z-10 relative'>
                        <span className='flex items-center gap-1'>
                          <FaAnglesRight className='text-HeadingColor-0 text-sm transition-all duration-500 group-hover:text-PrimaryColor-0' />
                          UI/UX Design
                        </span>
                        <FaArrowRightLong className='text-PrimaryColor-0 text-sm transition-all duration-500 opacity-0 group-hover:opacity-100' />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='bg-BodyBg-0 rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-8'>
                <h4 className='font-Rajdhani font-semibold text-left text-2xl text-HeadingColor-0 pb-1 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-12 before:h-[1px] before:bg-SecondaryColor-0'>
                  Tags
                </h4>
                <ul className='inline-block'>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white rounded flex items-center justify-center font-Nunito text-HeadingColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-gradient-to-t before:from-PrimaryColor3-0 before:to-PrimaryColor2-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white'>
                        Cyber Security
                      </button>
                    </Link>
                  </li>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white rounded flex items-center justify-center font-Nunito text-HeadingColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-gradient-to-t before:from-PrimaryColor3-0 before:to-PrimaryColor2-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white'>
                        Learning
                      </button>
                    </Link>
                  </li>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white rounded flex items-center justify-center font-Nunito text-HeadingColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-gradient-to-t before:from-PrimaryColor3-0 before:to-PrimaryColor2-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white'>
                        Web Drvelopment
                      </button>
                    </Link>
                  </li>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white rounded flex items-center justify-center font-Nunito text-HeadingColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-gradient-to-t before:from-PrimaryColor3-0 before:to-PrimaryColor2-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white'>
                        IT Solution
                      </button>
                    </Link>
                  </li>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white rounded flex items-center justify-center font-Nunito text-HeadingColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-gradient-to-t before:from-PrimaryColor3-0 before:to-PrimaryColor2-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white'>
                        Marketing
                      </button>
                    </Link>
                  </li>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white rounded flex items-center justify-center font-Nunito text-HeadingColor-0 transition-all duration-500 px-5 py-2 relative z-10 before:absolute before:top-0 before:right-0 before:rounded before:w-0 before:h-full before:bg-gradient-to-t before:from-PrimaryColor3-0 before:to-PrimaryColor2-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:text-white'>
                        Technology
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-span-2'>
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
              <div>
                <ul className='flex items-center gap-2 justify-center pt-[50px]'>
                  <li>
                    <button className='h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                      01
                    </button>
                  </li>
                  <li>
                    <button className='h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                      02
                    </button>
                  </li>
                  <li>
                    <button className='h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                      03
                    </button>
                  </li>
                  <li>
                    <button className='h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                      <FaAngleRight />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallDoAction />
    </>
  );
};

export default BlogRightSideBar;
