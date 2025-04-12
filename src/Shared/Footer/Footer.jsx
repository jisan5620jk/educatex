import { Link } from 'react-router-dom';
import footerLogo from '/images/footer-logo.png';
import { FaEnvelope, FaPhoneVolume } from 'react-icons/fa6';
import footerImg from '/images/footer-recent-img1.png';
import footerImg2 from '/images/footer-recent-img2.png';
import { HiOutlineMail } from 'react-icons/hi';
import { IoPaperPlane } from 'react-icons/io5';
import { IoMdLogIn } from 'react-icons/io';

const Footer = () => {
  return (
    <>
      <div className='bg-SecondaryColor-0 pt-[60px]'>
        <div className='Container -mb-[70px] relative z-10'>
          <div className='bg-white bg-opacity-5 rounded-[20px] py-5 md:py-7 px-6 md:px-[50px] grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-7 lg:gap-0 lg:grid-cols-3 lg:items-center'>
            <div className='py-4'>
              <Link
                to={'/'}
                title='EducateX'
              >
                <img
                  src={footerLogo}
                  draggable='false'
                />
              </Link>
            </div>
            <div>
              <h4 className='font-Outfit font-medium text-2xl text-white uppercase'>
                Subscribe{' '}
                <span className='text-PrimaryColor-0'>Newsletter</span>
              </h4>
            </div>
            <div className='flex lg:justify-end'>
              <form
                action='#'
                method='post'
                className='relative inline-block z-10'
              >
                <label
                  htmlFor='email'
                  className='relative'
                >
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter Your E-Mail*'
                    required
                    className='w-[388px] h-[52px] font-OpenSans bg-transparent rounded-full outline-none focus:outline-none border border-white border-opacity-15 pl-14 pr-8 py-2 text-white placeholder:text-white placeholder:text-opacity-50'
                  />
                  <HiOutlineMail className='absolute top-1/2 -translate-y-1/2 left-6 text-PrimaryColor-0 text-xl' />
                </label>

                <div className='absolute top-0 right-0'>
                  <button
                    type='submit'
                    className='size-[52px] flex items-center justify-center bg-PrimaryColor-0 rounded-full text-white relative z-10 overflow-hidden before:absolute before:left-0 before:top-0 before:-z-10 before:w-full before:h-full before:bg-PrimaryColor2-0 before:scale-0 before:transition-all before:duration-500 before:rotate-180 hover:before:rotate-0 hover:before:scale-100'
                  >
                    <IoPaperPlane size={'22'} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-SecondaryColor-0 relative pt-28 overflow-hidden'>
        <div className='Container'>
          <div className='grid gap-y-7 grid-cols-12 lg:mt-8'>
            <div className='col-span-12 md:col-span-6 lg:col-span-4'>
              <h4 className='font-Outfit text-2xl text-white font-medium mb-[33px]'>
                Get in Touch
              </h4>
              <p className='font-OpenSans text-white text-opacity-60 mt-7 lg:mt-0 mb-5 w-full max-w-[272px]'>
                Educate the ultimate destination for We are committed to
                transforming without standards
              </p>
              <div className='flex items-center gap-2 mb-3'>
                <div className='text-PrimaryColor-0'>
                  <FaPhoneVolume size={'18'} />
                </div>
                <a
                  href='tel:+1234567890'
                  title='+123 (4567) 890'
                >
                  <button className='font-Outfit text-[22px] text-white font-medium'>
                    +123 (4567) 890
                  </button>
                </a>
              </div>
              <div className='flex items-center gap-2'>
                <div className='text-PrimaryColor-0'>
                  <FaEnvelope size={'18'} />
                </div>
                <a
                  href='mailto:example@gmail.com'
                  title='example@gmail.com'
                >
                  <button className='font-Outfit text-lg text-white'>
                    example@gmail.com
                  </button>
                </a>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-2'>
              <h4 className='font-Outfit text-2xl text-white font-medium mb-[33px]'>
                Online Platform
              </h4>
              <ul>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-Outfit text-white text-opacity-60 transition-all duration-500 hover:text-opacity-100 hover:gap-1 mb-[14px]'>
                      <IoMdLogIn className='text-lg text-PrimaryColor-0' />
                      About Us
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-Outfit text-white text-opacity-60 transition-all duration-500 hover:text-opacity-100 hover:gap-1 mb-[14px]'>
                      <IoMdLogIn className='text-lg text-PrimaryColor-0' />
                      Our Team
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-Outfit text-white text-opacity-60 transition-all duration-500 hover:text-opacity-100 hover:gap-1 mb-[14px]'>
                      <IoMdLogIn className='text-lg text-PrimaryColor-0' />
                      Pricing Plan
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-Outfit text-white text-opacity-60 transition-all duration-500 hover:text-opacity-100 hover:gap-1 mb-[14px]'>
                      <IoMdLogIn className='text-lg text-PrimaryColor-0' />
                      Latest Blog
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-Outfit text-white text-opacity-60 transition-all duration-500 hover:text-opacity-100 hover:gap-1'>
                      <IoMdLogIn className='text-lg text-PrimaryColor-0' />
                      Careers
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
              <h4 className='font-Outfit text-2xl text-white font-medium mb-[33px]'>
                Quick Links
              </h4>
              <ul>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-Outfit text-white text-opacity-60 transition-all duration-500 hover:text-opacity-100 hover:gap-1 mb-[14px]'>
                      <IoMdLogIn className='text-lg text-PrimaryColor-0' />
                      IT Solutions
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-Outfit text-white text-opacity-60 transition-all duration-500 hover:text-opacity-100 hover:gap-1 mb-[14px]'>
                      <IoMdLogIn className='text-lg text-PrimaryColor-0' />
                      Cyber Security
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-Outfit text-white text-opacity-60 transition-all duration-500 hover:text-opacity-100 hover:gap-1 mb-[14px]'>
                      <IoMdLogIn className='text-lg text-PrimaryColor-0' />
                      Digital Marketing
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-Outfit text-white text-opacity-60 transition-all duration-500 hover:text-opacity-100 hover:gap-1 mb-[14px]'>
                      <IoMdLogIn className='text-lg text-PrimaryColor-0' />
                      Brand Identity
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-Outfit text-white text-opacity-60 transition-all duration-500 hover:text-opacity-100 hover:gap-1'>
                      <IoMdLogIn className='text-lg text-PrimaryColor-0' />
                      SEO Marketing
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
              <h4 className='font-Outfit text-2xl text-white font-medium mb-[33px]'>
                Recent Posts
              </h4>
              <Link
                to={'/blog_details'}
                className='flex items-center gap-[18px] group'
              >
                <div>
                  <img
                    src={footerImg}
                    className='rounded'
                  />
                </div>
                <div className='flex-1'>
                  <h6 className='font-Outfit text-[17px] leading-6 text-white transition-all duration-500 group-hover:text-PrimaryColor-0'>
                    10 Proven Strategies to
                    <br className='hidden 2xl:block' /> Online Learning
                  </h6>
                  <p className='font-OpenSans text-sm text-PrimaryColor-0 mt-1'>
                    Nov 16, 2025
                  </p>
                </div>
              </Link>
              <Link
                to={'/blog_details'}
                className='flex items-center gap-[18px] group mt-5'
              >
                <div>
                  <img
                    src={footerImg2}
                    className='rounded'
                  />
                </div>
                <div className='flex-1'>
                  <h6 className='font-Outfit text-[17px] leading-6 text-white transition-all duration-500 group-hover:text-PrimaryColor-0'>
                    Trends that are shaping
                    <br className='hidden 2xl:block' /> the Learning...
                  </h6>
                  <p className='font-OpenSans text-sm text-PrimaryColor-0 mt-1'>
                    Nov 16, 2025
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='bg-white bg-opacity-5 mt-16 md:mt-[96px]'>
          <div className='Container'>
            <div className='flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-7'>
              <div>
                <p className='font-OpenSans text-white text-opacity-60'>
                  &copy; {new Date().getFullYear()}{' '}
                  <Link
                    to={'/'}
                    className='text-opacity-100 text-PrimaryColor-0'
                  >
                    EducateX{' '}
                  </Link>
                  . Designed By Dream IT Solution
                </p>
              </div>
              <div>
                <ul className='flex items-center gap-10'>
                  <li>
                    <Link
                      to={'/'}
                      className='font-OpenSans text-white'
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/'}
                      className='font-OpenSans text-white'
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
