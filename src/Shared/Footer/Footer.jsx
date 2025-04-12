import { Link } from 'react-router-dom';
import footerLogo from '/images/logo.png';
import {
  FaEnvelope,
} from 'react-icons/fa6';
import { PiArrowCircleRight, PiWhatsappLogoLight } from 'react-icons/pi';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import footerImg from '/images/footer-recent-img1.png';

const Footer = () => {
  return (
    <>
      <div className='bg-SecondaryColor-0'>
        <div className='Container -mb-[70px] relative z-10'>
          <div className='bg-gradient-to-r to-PrimaryColor2-0 from-PrimaryColor3-0 py-5 md:py-12 px-6 md:px-16 rounded-[10px] grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-7 lg:gap-0 lg:grid-cols-3 lg:items-center'>
            <div className=''>
              <h6 className='font-OpenSans text-[15px] text-white mb-[6px]'>
                Email Us at :
              </h6>
              <div className='flex items-center gap-2'>
                <div className='text-white'>
                  <HiOutlineEnvelope size={'28'} />
                </div>
                <a
                  href='mailto:example@gmail.com'
                  title='example@gmail.com'
                >
                  <button className='font-Outfit text-xl sm:text-2xl text-white font-medium'>
                    example@gmail.com
                  </button>
                </a>
              </div>
            </div>
            <div className='flex lg:justify-center lg:border-l-0 xl:border-x border-BorderColor2-0 border-opacity-30 py-4'>
              <Link
                to={'/'}
                title='educatex'
              >
                <img
                  src={footerLogo}
                  draggable='false'
                  className='brightness-0 invert-[1]'
                />
              </Link>
            </div>
            <div className='flex lg:justify-end'>
              <div className=''>
                <h6 className='font-OpenSans text-[15px] text-white mb-[6px]'>
                  Call Us Anytime
                </h6>
                <div className='flex items-center gap-2'>
                  <div className='text-white'>
                    <PiWhatsappLogoLight size={'28'} />
                  </div>
                  <a
                    href='tel:+001234567890'
                    title='+00 123 4567 890'
                  >
                    <button className='font-Outfit text-xl sm:text-2xl text-white font-medium'>
                      +00 123 4567 890
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-SecondaryColor-0 relative pt-28 overflow-hidden'>
        <div className='Container'>
          <div className='grid gap-y-7 grid-cols-12 lg:mt-8'>
            <div className='col-span-12 md:col-span-6 lg:col-span-4'>
              <h4 className='font-Outfit text-[28px] text-white font-semibold mb-[33px]'>
                About EducateX
              </h4>
              <p className='font-OpenSans text-white text-opacity-70 mt-7 lg:mt-0 mb-5 w-full max-w-[340px]'>
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
                  <button className='font-Outfit text-xl text-white font-medium'>
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
                  <button className='font-Outfit text-lg text-white font-medium'>
                    example@gmail.com
                  </button>
                </a>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-2'>
              <h4 className='font-Outfit text-[28px] text-white font-semibold mb-[33px]'>
                Company
              </h4>
              <ul>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-OpenSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                      <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                      About Us
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-OpenSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                      <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                      Our Team
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-OpenSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                      <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                      Pricing Plan
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-OpenSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                      <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                      Latest Blog
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-OpenSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1'>
                      <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                      Careers
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
              <h4 className='font-Outfit text-[28px] text-white font-semibold mb-[33px]'>
                Our Services
              </h4>
              <ul>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-OpenSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                      <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                      IT Solutions
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-OpenSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                      <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                      Cyber Security
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-OpenSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                      <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                      Digital Marketing
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-OpenSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                      <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                      Brand Identity
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='flex items-center gap-2 font-OpenSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1'>
                      <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                      SEO Marketing
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
              <h4 className='font-Outfit text-[28px] text-white font-semibold mb-[30px]'>
                Newsletter
              </h4>
              <Link
                to={'/'}
                className='flex items-center gap-[18px] group'
              >
                <div>
                  <img
                    src={footerImg}
                    className='rounded'
                  />
                </div>
                <div className='flex-1'>
                  <h6 className='font-Outfit text-[17px] text-white transition-all duration-500 group-hover:text-PrimaryColor-0'>
                    10 Proven Strategies to
                    <br className='hidden 2xl:block' /> Online Learning
                  </h6>
                  <p className='font-OpenSans text-sm text-white text-opacity-70 mt-1'>
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
                <p className='font-OpenSans text-white'>
                  &copy; {new Date().getFullYear()} educatex. Designed By Dream
                  IT Solution
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
