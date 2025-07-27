import blogThumb from '/images/blog-thumb81.png';
import blogThumb2 from '/images/blog-thumb82.png';
import blogThumb3 from '/images/blog-thumb83.png';
import blogPostIcon from '/images/blog-autor1.png';
import { Link } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';
import { HiArrowNarrowRight } from 'react-icons/hi';
import boxShape from '/images/blog-dot-shape.png';
import shape from '/images/blog-shape81.png';
import shape2 from '/images/blog-shape82.png';
import shape3 from '/images/faq-shape81.png';

const Blog = () => {
  return (
    <section className='bg-[url("/images/blog-bg8.png")] bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-28 bg-white overflow-hidden relative z-10'>
      <div className='Container'>
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <div>
            <h5 className='zoom-in font-OpenSans font-medium text-sm text-SecondaryColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor2-0 before:rounded-full before:size-[9px]'>
              latest news & blog
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-4 mb-4'>
              Read Latest Blog
              <span className='text-PrimaryColor-0'> & Inside</span>
            </h1>
          </div>
          <div className='fade-right'>
            <Link
              to={'/about'}
              className='primary-btn2'
            >
              Start Trial
              <HiArrowNarrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 mt-8 md:mt-[46px]'>
          <div className='fade-up col-span-1 lg:col-span-5'>
            <div className='p-3 sm:p-6 rounded-[20px] border border-SecondaryColor-0 border-opacity-20'>
              <div className='group bg-white transition-all duration-500 rounded-[20px]'>
                <div className='relative rounded-[10px] overflow-hidden'>
                  <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 bg-PrimaryColor3-0 z-10 group-hover:bg-opacity-0 group-hover:w-[25%] group-hover:left-0'></span>
                  <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 bg-PrimaryColor3-0 z-10 group-hover:bg-opacity-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
                  <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 bg-PrimaryColor3-0 z-10 group-hover:bg-opacity-0 group-hover:w-[25%] group-hover:left-1/2'></span>
                  <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 bg-PrimaryColor3-0 z-10 group-hover:bg-opacity-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
                  <img
                    src={blogThumb}
                    className='w-full h-64 sm:h-[322px] object-cover object-center'
                  />
                </div>
                <div className='relative z-20 rounded-lg transition-all duration-500 px-4 sm:px-10 pb-4 sm:pb-10'>
                  <p className='font-Outfit font-medium text-HeadingColor-0 flex gap-3 items-center mt-4 md:mt-8 mb-4 sm:mb-6'>
                    <img
                      src={blogPostIcon}
                      draggable={false}
                      alt='UserIcon'
                    />
                    Jhon D. Alexon
                  </p>
                  <Link to={'/blog_details'}>
                    <button className='font-Outfit text-left font-medium text-lg sm:text-[22px] md:text-xl xl:text-[22px] 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor3-0 mb-6 md:mb-[34px] lg:mb-4 xl:mb-[34px]'>
                      10 Essential Strategies for a More Rewarding Ramadan
                    </button>
                  </Link>
                  <Link to={'/blog_details'}>
                    <button className='font-Outfit flex items-center justify-between w-full pl-8 pr-6 py-[13px] text-PrimaryColor3-0 border border-PrimaryColor3-0 border-opacity-30 bg-PrimaryColor3-0 bg-opacity-10 relative z-10 overflow-hidden rounded-full transition-all duration-500 group-hover:!text-white before:absolute before:right-0 before:top-0 before:bg-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:left-0'>
                      Continue Reading
                      <span className='text-2xl'>
                        <IoMdLogIn />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='box-row col-span-1 lg:col-span-7 space-y-6 lg:ml-10'>
            <div className='box group rounded-[20px] overflow-hidden flex flex-col md:flex-row'>
              <div className='w-full overflow-hidden relative z-10 before:absolute before:-left-3/4 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r before:to-transparent before:via-white before:from-transparent before:-skew-x-[20deg] before:opacity-50 group-hover:before:animate-shine'>
                <img
                  src={blogThumb2}
                  alt='Blog Image'
                  className='w-full md:w-[inherit] md:max-w-[inherit] h-[315px] lg:h-[290x] xl:h-[310px] 2xl:h-[315px] object-cover object-left'
                  draggable={false}
                />
              </div>
              <div className='bg-white -mt-8 md:mt-0 md:-ml-[30px] rounded-[20px] pl-4 md:pl-10 lg:pl-5 xl:pl-10 pr-3 md:pr-8 lg:pr-4 xl:pr-8 pt-6 pb-6 md:pt-0 md:pb-0 flex items-center w-full relative z-10 overflow-hidden'>
                <span className='absolute left-[12.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                <span className='absolute left-[37.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                <span className='absolute left-[62.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                <span className='absolute left-[87.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                <div>
                  <div className='font-OpenSans text-[15px] text-PrimaryColor-0 bg-PrimaryColor-0 bg-opacity-10 border border-PrimaryColor-0 border-opacity-30 px-5 py-1 inline-block rounded-full uppercase transition-all duration-500 group-hover:bg-white group-hover:bg-opacity-10 group-hover:border-white group-hover:border-opacity-30 group-hover:text-white'>
                    Science
                  </div>
                  <h3 className='font-Outfit text-xl md:text-2xl lg:text-[22px] xl:text-2xl font-medium text-HeadingColor-0 border-b border-SecondaryColor-0 group-hover:border-white group-hover:border-opacity-20 border-opacity-10 transition-all duration-500 group-hover:text-white pb-[18px] mt-6 mb-5'>
                    A Journey Through Wisdom
                  </h3>
                  <p className='font-OpenSans text-TextColor-0 transition-all duration-500 group-hover:text-white'>
                    Backgroud to courses to and learners our education-focused.
                  </p>
                  <div className='flex items-center justify-between mt-10 lg:mt-4 xl:mt-8 2xl:mt-10'>
                    <div className='inline-block overflow-hidden'>
                      <Link
                        to={'/blog_details'}
                        className='inline-flex gap-2 items-center font-Outfit text-PrimaryColor-0 uppercase transition-all duration-500 group-hover:text-white'
                      >
                        Read More
                        <span className='text-xl'>
                          <HiArrowNarrowRight />
                        </span>
                      </Link>
                    </div>
                    <div className=''>
                      <img
                        src={boxShape}
                        draggable={false}
                        alt='Shape'
                        className='animate-dance transition-all duration-500 group-hover:brightness-0 group-hover:invert'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='box group rounded-[20px] overflow-hidden flex flex-col md:flex-row'>
              <div className='w-full overflow-hidden relative z-10 before:absolute before:-left-3/4 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r before:to-transparent before:via-white before:from-transparent before:-skew-x-[20deg] before:opacity-50 group-hover:before:animate-shine'>
                <img
                  src={blogThumb3}
                  alt='Blog Image'
                  className='w-full md:w-[inherit] md:max-w-[inherit] h-[315px] lg:h-[290px] xl:h-[310px] 2xl:h-[315px] object-cover object-left'
                  draggable={false}
                />
              </div>
              <div className='bg-white -mt-8 md:mt-0 md:-ml-[30px] rounded-[20px] pl-4 md:pl-10 lg:pl-5 xl:pl-10 pr-3 md:pr-8 lg:pr-4 xl:pr-8 pt-6 pb-6 md:pt-0 md:pb-0 flex items-center w-full relative z-10 overflow-hidden'>
                <span className='absolute left-[12.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                <span className='absolute left-[37.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                <span className='absolute left-[62.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                <span className='absolute left-[87.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                <div>
                  <div className='font-OpenSans text-[15px] text-PrimaryColor-0 bg-PrimaryColor-0 bg-opacity-10 border border-PrimaryColor-0 border-opacity-30 px-5 py-1 inline-block rounded-full uppercase transition-all duration-500 group-hover:bg-white group-hover:bg-opacity-10 group-hover:border-white group-hover:border-opacity-30 group-hover:text-white'>
                    Science
                  </div>
                  <h3 className='font-Outfit text-xl md:text-2xl lg:text-[22px] xl:text-2xl font-medium text-HeadingColor-0 border-b border-SecondaryColor-0 group-hover:border-white group-hover:border-opacity-20 border-opacity-10 transition-all duration-500 group-hover:text-white pb-[18px] mt-6 mb-5'>
                    A Journey Through Wisdom
                  </h3>
                  <p className='font-OpenSans text-TextColor-0 transition-all duration-500 group-hover:text-white'>
                    Backgroud to courses to and learners our education-focused.
                  </p>
                  <div className='flex items-center justify-between mt-10 lg:mt-4 xl:mt-8 2xl:mt-10'>
                    <div className='inline-block overflow-hidden'>
                      <Link
                        to={'/blog_details'}
                        className='inline-flex gap-2 items-center font-Outfit text-PrimaryColor-0 uppercase transition-all duration-500 group-hover:text-white'
                      >
                        Read More
                        <span className='text-xl'>
                          <HiArrowNarrowRight />
                        </span>
                      </Link>
                    </div>
                    <div className=''>
                      <img
                        src={boxShape}
                        draggable={false}
                        alt='Shape'
                        className='animate-dance transition-all duration-500 group-hover:brightness-0 group-hover:invert'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-36 right-[42%] hidden xl:block'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
          className='animate-dance2'
        />
      </div>
      <div className='absolute bottom-28 left-2 hidden 2xl:block'>
        <img
          src={shape2}
          draggable={false}
          alt='Shape'
          className='animate-flip'
        />
      </div>
      <div className='absolute -z-10 -top-[25%] -right-6 hidden xl:block'>
        <img
          src={shape3}
          draggable={false}
          alt='Shape'
          className='animate-dance'
        />
      </div>
    </section>
  );
};

export default Blog;
