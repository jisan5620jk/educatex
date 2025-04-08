import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegCircleCheck,
  FaXTwitter,
} from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { PiArrowCircleRight } from 'react-icons/pi';
import logo from '/images/main-logo.png';

const Footer2 = () => {
  return (
    <footer className="bg-[url('/images/footer_bg2.jpg')] bg-no-repeat bg-center bg-cover relative pt-16 md:pt-20 lg:pt-28 overflow-hidden">
      <div className='Container'>
        <div className='lg:grid gap-y-7 grid-cols-12 border-b border-HeadingColor-0 border-opacity-10 pb-5 hidden'>
          <div className='col-span-12 md:col-span-6 lg:col-span-4'>
            <Link to={'/home2'}>
              <img
                src={logo}
                draggable={false}
                alt='Brand Logo'
              />
            </Link>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-2'>
            <h4 className='font-Outfit text-[28px] text-HeadingColor-0 font-semibold'>
              Company
            </h4>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-Outfit text-[28px] text-HeadingColor-0 font-semibold'>
              Our Services
            </h4>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-Outfit text-[28px] text-HeadingColor-0 font-semibold'>
              Newsletter
            </h4>
          </div>
        </div>
        <div className='grid gap-y-7 grid-cols-12 lg:mt-8'>
          <div className='col-span-12 md:col-span-6 lg:col-span-4'>
            <div className='lg:hidden mb-7'>
              <Link to={'/home2'}>
                <img
                  src={logo}
                  draggable={false}
                  alt='Brand Logo'
                  title='educatex'
                />
              </Link>
            </div>
            <p className='font-OpenSans text-HeadingColor-0 lg:-mt-1 mb-5 w-full max-w-[340px]'>
              Globally expedite enterprise-wide action items rather than
              distinctive architectures. Globally engage market positioning.
            </p>
            <div className='flex items-center gap-2'>
              <div className='text-PrimaryColor-0'>
                <FaEnvelope size={'18'} />
              </div>
              <a
                href='mailto:example@gmail.com'
                title='example@gmail.com'
              >
                <button className='font-Outfit text-lg text-HeadingColor-0 font-semibold'>
                  example@gmail.com
                </button>
              </a>
            </div>
            <ul className='flex gap-3 mt-7'>
              <li>
                <button className='size-9 rounded-full text-sm bg-HeadingColor-0 bg-opacity-10 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-gradient-to-l before:to-PrimaryColor-0 before:from-PrimaryColor2-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className='size-9 rounded-full text-sm bg-HeadingColor-0 bg-opacity-10 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-gradient-to-l before:to-PrimaryColor-0 before:from-PrimaryColor2-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className='size-9 rounded-full text-sm bg-HeadingColor-0 bg-opacity-10 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-gradient-to-l before:to-PrimaryColor-0 before:from-PrimaryColor2-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className='size-9 rounded-full text-sm bg-HeadingColor-0 bg-opacity-10 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-gradient-to-l before:to-PrimaryColor-0 before:from-PrimaryColor2-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-2'>
            <h4 className='font-Outfit text-[28px] text-HeadingColor-0 font-semibold mb-7 lg:hidden'>
              Company
            </h4>
            <ul>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-OpenSans text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-OpenSans text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-OpenSans text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Pricing Plan
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-OpenSans text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Latest Blog
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-OpenSans text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-Outfit text-[28px] text-HeadingColor-0 font-semibold mb-7 lg:hidden'>
              Our Services
            </h4>
            <ul>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-OpenSans text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    IT Solutions
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-OpenSans text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Cyber Security
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-OpenSans text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Digital Marketing
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-OpenSans text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Brand Identity
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-OpenSans text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    SEO Marketing
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-Outfit text-[28px] text-HeadingColor-0 font-semibold mb-[30px] lg:hidden'>
              Newsletter
            </h4>
            <form
              action='#'
              method='post'
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
                  className='w-full h-[56px] font-OpenSans rounded-full outline-none focus:outline-none border-none bg-HeadingColor-0 bg-opacity-10 px-8 py-2 text-HeadingColor-0 placeholder:text-HeadingColor-0 mb-3'
                />
                <HiOutlineMail className='absolute top-1/2 -translate-y-1/2 right-6 text-HeadingColor-0 text-xl' />
              </label>

              <div>
                <button
                  type='submit'
                  className='primary-btn !w-full !py-[17px]'
                >
                  {`Discover More`}
                  <GoArrowRight size={'22'} />
                </button>
              </div>
            </form>
            <p className='font-OpenSans flex gap-2 text-HeadingColor-0 font-medium mt-5'>
              <span className='relative top-[3px] text-green-600'>
                <FaRegCircleCheck />
              </span>
              Protecting Your Service
            </p>
          </div>
        </div>
      </div>
      <div className='bg-HeadingColor-0 bg-opacity-10 mt-14 md:mt-[70px] lg:mt-[96px]'>
        <div className='Container'>
          <div className='flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-7'>
            <div>
              <p className='font-OpenSans text-HeadingColor-0'>
                &copy; {new Date().getFullYear()} educatex. Designed By Dream IT
                Solution
              </p>
            </div>
            <div>
              <ul className='flex items-center gap-10'>
                <li>
                  <Link
                    to={'/'}
                    className='font-OpenSans text-HeadingColor-0'
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/'}
                    className='font-OpenSans text-HeadingColor-0'
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
  );
};

export default Footer2;
