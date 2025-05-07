import blogThumb from '/images/blog-thumb81.png';
import blogThumb2 from '/images/blog-thumb82.png';
import blogThumb3 from '/images/blog-thumb83.png';
import blogPostIcon from '/images/blog-autor1.png';
import subTilteIcon from '/images/sub-title2.png';
import { Link } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';
import { HiArrowNarrowRight } from 'react-icons/hi';
import boxShape from '/images/blog-dot-shape.png';

const Blog = () => {
  return (
    <section className='bg-[url("/images/blog-bg8.png")] bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-28 bg-white'>
      <div className='Container'>
        <div className='flex items-center justify-between flex-wrap gap-7'>
          <div>
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
          <div>
            <Link
              to={'/about'}
              className='primary-btn2'
            >
              Start Trial
              <HiArrowNarrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-10 mt-6 md:mt-[46px]'>
          <div className='col-span-5'>
            <div className='p-6 rounded-[20px] border border-SecondaryColor-0 border-opacity-20'>
              <div className='group bg-white transition-all duration-500 rounded-[20px]'>
                <div className='relative rounded-[10px] overflow-hidden'>
                  <span className='absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 bg-PrimaryColor3-0 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-0'></span>
                  <span className='absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 bg-PrimaryColor3-0 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[25%]'></span>
                  <span className='absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 bg-PrimaryColor3-0 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-1/2'></span>
                  <span className='absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 bg-PrimaryColor3-0 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[75%]'></span>
                  <img
                    src={blogThumb}
                    className='w-full'
                  />
                </div>
                <div className='relative z-20 rounded-lg transition-all duration-500 px-10 pb-10'>
                  <p className='font-Outfit font-medium text-HeadingColor-0 flex gap-3 items-center mt-7 mb-4'>
                    <img
                      src={blogPostIcon}
                      draggable={false}
                      alt='UserIcon'
                    />
                    Jhon D. Alexon
                  </p>
                  <Link to={'/blog_details'}>
                    <button className='font-Outfit text-left font-medium text-lg sm:text-[22px] md:text-xl lg:text-2xl xl:text-[21px] 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor3-0 mb-7'>
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
          <div className='col-span-7 space-y-6'>
            <div className='group rounded-[20px] overflow-hidden flex flex-col md:flex-row'>
              <div className='w-full overflow-hidden relative z-10 before:absolute before:-left-3/4 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r before:to-transparent before:via-white before:from-transparent before:-skew-x-[20deg] before:opacity-50 group-hover:before:animate-shine'>
                <img
                  src={blogThumb2}
                  alt='Blog Image'
                  className='w-full md:w-[inherit] md:max-w-[inherit] h-[318px] object-cover'
                  draggable={false}
                />
              </div>
              <div className='bg-white -ml-[76px] rounded-[20px] pl-10 pr-8 flex items-center w-full relative z-10 overflow-hidden'>
                <span className='absolute left-[12.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                <span className='absolute left-[37.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                <span className='absolute left-[62.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                <span className='absolute left-[87.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                <div>
                  <div className='font-OpenSans text-[15px] text-PrimaryColor-0 bg-PrimaryColor-0 bg-opacity-10 border border-PrimaryColor-0 border-opacity-30 px-5 py-1 inline-block rounded-full uppercase transition-all duration-500 group-hover:bg-white group-hover:bg-opacity-10 group-hover:border-white group-hover:border-opacity-30 group-hover:text-white'>
                    Science
                  </div>

                  <h3 className='font-Outfit text-xl md:text-2xl font-medium text-HeadingColor-0 border-b border-SecondaryColor-0 group-hover:border-white group-hover:border-opacity-20 border-opacity-10 transition-all duration-500 group-hover:text-white pb-4 mb-[2px]'>
                    A Journey Through Wisdom
                  </h3>

                  <p className='font-OpenSans text-TextColor-0 transition-all duration-500 group-hover:text-white'>
                    Backgroud to courses to and learners our education-focused.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='inline-block overflow-hidden'>
                      <Link
                        to={'/blog_details'}
                        className='inline-flex gap-2 items-center font-Outfit text-HeadingColor-0 uppercase transition-all duration-500 group-hover:text-white'
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
            <div className='group rounded-[20px] overflow-hidden flex flex-col md:flex-row'>
              <div className='w-full overflow-hidden relative z-10 before:absolute before:-left-3/4 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r before:to-transparent before:via-white before:from-transparent before:-skew-x-[20deg] before:opacity-50 group-hover:before:animate-shine'>
                <img
                  src={blogThumb3}
                  alt='Blog Image'
                  className='w-full md:w-[inherit] md:max-w-[inherit] h-auto object-cover'
                  draggable={false}
                />
              </div>
              <div className='bg-white -ml-[76px] rounded-[20px] pl-10 pr-8 flex items-center w-full relative z-10 overflow-hidden'>
                <span className='absolute left-[12.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                <span className='absolute left-[37.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                <span className='absolute left-[62.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                <span className='absolute left-[87.5%] top-0 h-full w-0 bg-PrimaryColor-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                <div>
                  <div className='font-OpenSans text-[15px] text-PrimaryColor-0 bg-PrimaryColor-0 bg-opacity-10 border border-PrimaryColor-0 border-opacity-30 px-5 py-1 inline-block rounded-full uppercase transition-all duration-500 group-hover:bg-white group-hover:bg-opacity-10 group-hover:border-white group-hover:border-opacity-30 group-hover:text-white'>
                    Science
                  </div>

                  <h3 className='font-Outfit text-xl md:text-2xl font-medium text-HeadingColor-0 border-b border-SecondaryColor-0 group-hover:border-white group-hover:border-opacity-20 border-opacity-10 transition-all duration-500 group-hover:text-white pb-4 mb-[2px]'>
                    A Journey Through Wisdom
                  </h3>

                  <p className='font-OpenSans text-TextColor-0 transition-all duration-500 group-hover:text-white'>
                    Backgroud to courses to and learners our education-focused.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='inline-block overflow-hidden'>
                      <Link
                        to={'/blog_details'}
                        className='inline-flex gap-2 items-center font-Outfit text-HeadingColor-0 uppercase transition-all duration-500 group-hover:text-white'
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
                        className='animate-flip transition-all duration-500 group-hover:brightness-0 group-hover:invert'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
