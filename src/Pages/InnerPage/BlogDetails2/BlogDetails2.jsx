import { Link } from 'react-router-dom';
import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import blog_detailsThumb from '/images/blog-list-image.jpg';
import blog_detailsImg from '/images/blog-list-image4.jpg';
import blog_detailsImg2 from '/images/blog-list-image5.jpg';
import blogListImg from '/images/blog-list-image.jpg';
import blogListImg2 from '/images/blog-list-image2.jpg';
import blogListImg3 from '/images/blog-list-image3.jpg';
import { IoSearch } from 'react-icons/io5';
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesRight,
  FaArrowRightLong,
} from 'react-icons/fa6';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import user from '/images/blog-details-user.png';
import user2 from '/images/blog-details-user2.png';
import CallDoAction from '../ContactInner2/CallDoAction';

const BlogDetails2 = () => {
  return (
    <>
      <HelmetChanger title={'Blog Details Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'Blog Details'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Blog Details'}
      />
      <section className='py-16 md:py-20 lg:py-28'>
        <div className='Container'>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-7'>
            <div className='col-span-2'>
              <div className=''>
                <div className='relative overflow-hidden rounded-md'>
                  <img
                    draggable='false'
                    src={blog_detailsThumb}
                    className='w-full'
                  />
                </div>
                <div className='flex items-center gap-2 pt-9 relative'>
                  <h6 className='flex items-center gap-2 font-Nunito text-HeadingColor-0 font-light uppercase'>
                    January 03, 2025
                  </h6>
                  <span className='flex items-center gap-2 font-Nunito text-HeadingColor-0 font-light uppercase'>
                    /
                  </span>
                  <h6 className='flex items-center gap-2 font-Nunito text-HeadingColor-0 font-light uppercase'>
                    IT Solution
                  </h6>
                </div>
                <h4 className='font-Rajdhani font-bold text-left text-xl sm:text-2xl md:text-3xl text-HeadingColor-0 mt-[14px] mb-5'>
                  Expert Advice for Growing Your Digital Presence
                </h4>
                <p className='font-Nunito text-TextColor2-0 pb-7 md:w-11/12'>
                  {`Rapidiously evolve pandemic experiences and end-to-end
                  platforms. Dramatically administrate inexpensive users with
                  integrated experiences Collaboratively redefine cutting-edge
                  infrastructures whereas open main convergence energistically
                  simplify discover. Quickly leverage other's collaborative
                  innovation after next- generation applications.`}
                </p>
                <p className='font-Nunito text-TextColor2-0 pb-9 md:w-11/12'>
                  {`Uniquely syndicate extensible niches after seamless partnerships. Intrinsicly matrix distributed value through 
                  open-source solutions. Objectively customize interactive infrastructures before diverse interfaces. Efficiently 
                  leverage other's optimal models for stand-alone processes.`}
                </p>
                <h4 className='font-Rajdhani font-bold text-left text-xl sm:text-2xl md:text-3xl text-HeadingColor-0 sm:mt-[14px] mb-3'>
                  Rules & Regulations
                </h4>
                <p className='font-Nunito text-TextColor2-0'>
                  {`Collaboratively redefine cutting-edge infrastructures whereas
                  open main convergence energistically simplify discover.
                  Quickly leverage other's collaborative innovation after next-
                  generation applications.`}
                </p>
                <ul className='flex flex-col gap-[14px] mt-8'>
                  <li className='flex gap-2 items-center font-Rajdhani font-semibold text-lg sm:text-lg text-HeadingColor-0'>
                    <FaAnglesRight
                      size={'16'}
                      className='text-PrimaryColor-0'
                    />
                    <span className='flex-1'>
                      Phosfluorescently envisioneer process done
                    </span>
                  </li>
                  <li className='flex gap-2 items-center font-Rajdhani font-semibold text-lg sm:text-lg text-HeadingColor-0'>
                    <FaAnglesRight
                      size={'16'}
                      className='text-PrimaryColor-0'
                    />
                    <span className='flex-1'>
                      Rapidiously deliver progressive experiences rather
                    </span>
                  </li>
                  <li className='flex gap-2 items-center font-Rajdhani font-semibold text-lg sm:text-lg text-HeadingColor-0'>
                    <FaAnglesRight
                      size={'16'}
                      className='text-PrimaryColor-0'
                    />
                    <span className='flex-1'>
                      Professionally actualize intuitive products via
                      multifunctional
                    </span>
                  </li>
                  <li className='flex gap-2 items-center font-Rajdhani font-semibold text-lg sm:text-lg text-HeadingColor-0'>
                    <FaAnglesRight
                      size={'16'}
                      className='text-PrimaryColor-0'
                    />
                    <span className='flex-1'>
                      Conveniently extend covalent metrics
                    </span>
                  </li>
                </ul>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-14'>
                  <div className='rounded-md overflow-hidden'>
                    <img
                      draggable='false'
                      src={blog_detailsImg}
                    />
                  </div>
                  <div className='rounded-md overflow-hidden'>
                    <img
                      draggable='false'
                      src={blog_detailsImg2}
                    />
                  </div>
                </div>
                <p className='font-Nunito text-TextColor2-0 mt-7 mb-8'>
                  Interactively visualize top-line internal or organic sources
                  rather than top-line niche markets. Continually unleash 24/7
                  opportunities after high standards in process improvements.
                  Uniquely deploy impactful are methodologies with reliable
                  information. Synergistically revolutionize fully researched
                  manufactured items with optimal materials competently
                  envisioneer.
                </p>
                <p className='font-Nunito text-TextColor2-0'>
                  Holisticly innovate global ROI with user-centric total
                  linkage. Collaboratively e-enable efficient markets with
                  multifunctional e-business. Continually incentivize
                  sustainable products for B2B
                </p>
                <div className='flex flex-col sm:flex-row gap-5 items-start sm:justify-between border-y border-HeadingColor-0 border-opacity-10 mt-9 py-6'>
                  <div className='flex items-center gap-5'>
                    <h5 className='font-Rajdhani font-semibold text-xl text-HeadingColor-0 '>
                      Tags :
                    </h5>
                    <div className='font-Nunito text-lg font-medium flex gap-2'>
                      <Link to={'/'}>
                        <button className='font-Nunito px-2 md:px-5 py-1 sm:py-[6px] text-TextColor2-0 text-sm rounded border border-SecondaryColor-0 border-opacity-10 transition-all duration-500 hover:bg-PrimaryColor-0 hover:text-white'>
                          IT Solution
                        </button>
                      </Link>
                      <Link to={'/'}>
                        <button className='font-Nunito px-2 md:px-5 py-1 md:py-[6px] text-TextColor2-0 text-sm rounded border border-SecondaryColor-0 border-opacity-10 transition-all duration-500 hover:bg-PrimaryColor-0 hover:text-white'>
                          Development
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center gap-5'>
                      <h5 className='font-Rajdhani font-semibold text-xl text-HeadingColor-0 '>
                        Share :
                      </h5>
                      <ul className='flex items-center gap-5'>
                        <li>
                          <button
                            className='font-Nunito text-HeadingColor-0 uppercase transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:bottom-1 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0'
                            title='Facebook'
                          >
                            FB
                          </button>
                        </li>
                        <li>
                          <button
                            className='font-Nunito text-HeadingColor-0 uppercase transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:bottom-1 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0'
                            title='Twitter X'
                          >
                            X
                          </button>
                        </li>
                        <li>
                          <button
                            className='font-Nunito text-HeadingColor-0 uppercase transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:bottom-1 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0'
                            title='LinkedIn'
                          >
                            LI
                          </button>
                        </li>
                        <li>
                          <button
                            className='font-Nunito text-HeadingColor-0 uppercase transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:bottom-1 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0'
                            title='Pinterest'
                          >
                            PI
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-[60px]'>
                  <div className=''>
                    <Link
                      to={'/'}
                      className='flex gap-2 rounded-md border border-SecondaryColor-0 border-opacity-10 transition-all duration-500 hover:bg-BodyBg-0 py-3 sm:py-7 px-2 sm:px-7 md:px-4 xl:px-5 2xl:px-7'
                    >
                      <button className='text-TextColor2-0'>
                        <FaAngleLeft size={'16'} />
                      </button>
                      <div className='size-20 rounded overflow-hidden sm:mr-3'>
                        <img
                          src={blogListImg2}
                          draggable={false}
                          className='h-full object-center object-cover'
                        />
                      </div>
                      <div className='flex-1'>
                        <h4 className='font-Rajdhani font-semibold text-sm sm:text-lg md:text-base 2xl:text-xl text-HoverColor-0'>
                          Data-Driven Strategies and Case Studies Success.
                        </h4>
                        <p className='font-Poppins text-sm text-TextColor2-0 mt-1'>
                          24 May, 2025
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className=''>
                    <Link
                      to={'/'}
                      className='flex gap-2 rounded-md border border-SecondaryColor-0 border-opacity-10 transition-all duration-500 hover:bg-BodyBg-0 py-3 sm:py-7 px-2 sm:px-7 md:px-4 xl:px-5 2xl:px-7'
                    >
                      <div className='flex-1'>
                        <h4 className='text-right font-Rajdhani font-semibold text-sm sm:text-lg md:text-base 2xl:text-xl text-HoverColor-0'>
                          The Complete SEO Blog for Digital Success.
                        </h4>
                        <p className='text-right font-Poppins text-sm text-TextColor2-0 mt-1'>
                          30 Mar, 2025
                        </p>
                      </div>
                      <div className='size-20 rounded overflow-hidden sm:ml-3'>
                        <img
                          src={blogListImg2}
                          draggable={false}
                          className='h-full object-center object-cover'
                        />
                      </div>
                      <button className='text-TextColor2-0'>
                        <FaAngleRight size={'16'} />
                      </button>
                    </Link>
                  </div>
                </div>
                <h3 className='font-Rajdhani font-semibold text-HeadingColor-0 text-xl sm:text-3xl mb-5 sm:mb-10 mt-10 sm:mt-16 md:mt-24'>
                  {`"02"`} Comments
                </h3>
                <div className='flex flex-col sm:flex-row gap-6 border border-HeadingColor-0 border-opacity-10 rounded-md px-4 sm:px-8 pt-6 pb-7'>
                  <div>
                    <img
                      src={user}
                      draggable={false}
                      alt='User Image'
                    />
                  </div>
                  <div className='flex-1 relative'>
                    <h5 className='font-Rajdhani font-semibold text-HeadingColor-0 text-xl'>
                      Anjelina Jholi{' '}
                      <span className='ml-1 pl-7 block sm:inline-block font-Nunito text-TextColor2-0 text-sm relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-[1px] before:bg-HeadingColor-0'>
                        January 17, 2025
                      </span>
                    </h5>
                    <p className='font-Poppins text-[15px] text-TextColor2-0 mt-3 max-w-[618px] w-full'>
                      Interactively visualize top-line internal or organic
                      sources rather than top-line niche mark unleash 24/7
                      opportunities after high standards in process
                      improvements. Uniquely deploy methodologies with reliable
                      information.
                    </p>
                    <Link to={'/'}>
                      <button className='text-HeadingColor-0 text-sm rounded-full font-Rajdhani font-semibold font-xl uppercase absolute top-2 sm:-top-1 right-0 underline'>
                        Reply
                      </button>
                    </Link>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-6 border border-HeadingColor-0 border-opacity-10 rounded-md px-4 sm:px-8 pt-6 pb-7 mt-5 md:ml-[100px]'>
                  <div>
                    <img
                      src={user2}
                      draggable={false}
                      alt='User Image'
                    />
                  </div>
                  <div className='flex-1 relative'>
                    <h5 className='font-Rajdhani font-semibold text-HeadingColor-0 text-xl'>
                      Jhon Alexon{' '}
                      <span className='ml-1 pl-7 block sm:inline-block font-Nunito text-TextColor2-0 text-sm relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-[1px] before:bg-HeadingColor-0'>
                        April 23, 2025
                      </span>
                    </h5>
                    <p className='font-Poppins text-[15px] text-TextColor2-0 mt-3 max-w-[540px] w-full'>
                      Interactively visualize top-line internal or organic
                      sources rather than top-line unleash 24/7 opportunities
                      after standards in process
                    </p>
                    <Link to={'/'}>
                      <button className='text-HeadingColor-0 text-sm rounded-full font-Rajdhani font-semibold font-xl uppercase absolute top-2 sm:-top-1 right-0 underline'>
                        Reply
                      </button>
                    </Link>
                  </div>
                </div>
                <h3 className='font-Rajdhani font-semibold text-HeadingColor-0 text-xl sm:text-3xl mt-10 sm:mt-16 md:mt-20 mb-10'>
                  Leave A Comments
                </h3>
                <form
                  action='https://formspree.io/f/xayrekgy'
                  method='post'
                >
                  <div className='grid sm:grid-cols-2 gap-4 sm:gap-7 mb-5'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Enter Your Name*'
                      required
                      className='outline-none rounded-md font-Poppins text-sm placeholder:text-TextColor2-0 bg-BodyBg-0 w-full px-6 py-2 h-[56px]'
                    />
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Enter Your E-Mail*'
                      required
                      className='outline-none rounded-md font-Poppins text-sm placeholder:text-TextColor2-0 bg-BodyBg-0 w-full px-6 py-2 h-[56px]'
                    />
                  </div>
                  <input
                    type='url'
                    name='website'
                    id='website'
                    placeholder='Enter Your Website URL*'
                    required
                    className='outline-none rounded-md font-Poppins text-sm placeholder:text-TextColor2-0 bg-BodyBg-0 w-full px-6 py-2 h-[56px] mb-5'
                  />
                  <textarea
                    name='comment'
                    id='comment'
                    placeholder='Write A Comment...'
                    required
                    className='outline-none resize-none rounded-md font-Poppins placeholder:text-TextColor2-0 text-sm bg-BodyBg-0 w-full px-6 py-3 h-[160px]'
                  ></textarea>
                  <div className='flex items-center gap-2 my-7'>
                    <input
                      type='checkbox'
                      name='terms'
                      id='terms'
                      className='text-SecondaryColor-0 cursor-pointer'
                    />
                    <p className='font-Poppins text-TextColor2-0'>
                      Save your email info in the browser for next comments.
                    </p>
                  </div>
                  <button
                    type='submit'
                    className='primary-btn'
                  >
                    Submit Now
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
                </form>
              </div>
            </div>
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
          </div>
        </div>
      </section>
      <CallDoAction />
    </>
  );
};

export default BlogDetails2;
