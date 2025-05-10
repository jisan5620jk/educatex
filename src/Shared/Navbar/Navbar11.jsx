import star from '/images/top-star.png';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaChevronDown,
  FaTimes,
  FaArrowUp,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import logo from '/images/logo.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { GrCart } from 'react-icons/gr';
import { IoIosSearch, IoMdLogIn, IoMdPaperPlane } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';
import { IoSearch } from 'react-icons/io5';
import LogInPopup from './LogInPopup';
import RegisterForm from './RegisterForm';
import { BsBasket3 } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { MdLocationPin } from 'react-icons/md';
import { SlUserFollow } from 'react-icons/sl';

const Navbar11 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (label) => {
    setActiveMobileMenu((prev) => (prev === label ? null : label));
  };

  const menuItems = [
    {
      label: 'Home',
      links: [
        { to: '/', label: 'SEO & Digital Marketing' },
        { to: '/home2', label: 'Artificial Intelligence' },
        { to: '/home3', label: 'Software Agency' },
        { to: '/home4', label: 'Software Agency Dark' },
        { to: '/home5', label: 'Start Up Technology' },
        { to: '/home6', label: 'Start Up Technology Dark' },
        { to: '/home7', label: 'Start Up Agency' },
        { to: '/home8', label: 'CCTV Security' },
        { to: '/home9', label: 'CCTV Security Dark' },
      ],
    },
    {
      label: 'About',
      links: [
        { to: '/about', label: 'About Style One' },
        { to: '/about2', label: 'About Style Two' },
        { to: '/about3', label: 'About Style Three' },
      ],
    },
    {
      label: 'Pages',
      links: [
        { to: '/mission_inner', label: 'Mission & Vision Style One' },
        { to: '/mission_inner2', label: 'Mission & Vision Style Two' },
        { to: '/career', label: 'IT Solution Career' },
        { to: '/team_inner', label: 'Team Member Style One' },
        { to: '/team_inner2', label: 'Team Member Style Two' },
        { to: '/pricing_inner', label: 'Pricing Style One' },
        { to: '/pricing2', label: 'Pricing Style Two' },
        { to: '/why_choose', label: 'Why Choose Us Style One' },
        { to: '/why_choose2', label: 'Why Choose Us Style Two' },
      ],
    },
    {
      label: 'Courses',
      links: [
        { to: '/project', label: 'Project Style One' },
        { to: '/project2', label: 'Project Style Two' },
        { to: '/project_details', label: 'Project Details Style One' },
        { to: '/project_details2', label: 'Project Details Style Two' },
      ],
    },
    {
      label: 'Blog',
      links: [
        { to: '/blog_grid', label: 'Blog Grid Style One' },
        { to: '/blog_grid2', label: 'Blog Grid Style Two' },
        { to: '/blog_list', label: 'Blog List Style One' },
        { to: '/blog_list_left_sidebar', label: 'Blog List Left Sidebar' },
        { to: '/blog_list_right_sidebar', label: 'Blog List Right Sidebar' },
        { to: '/blog_list_no_sidebar', label: 'Blog List No Sidebar' },
        { to: '/blog_details', label: 'Blog Details Style One' },
        { to: '/blog_details2', label: 'Blog Details Style Two' },
      ],
    },
    {
      label: 'Contact',
      links: [
        { to: '/contact', label: 'Contact Style One' },
        { to: '/contact2', label: 'Contact Style Two' },
      ],
    },
  ];

  const isParentActive = (links) =>
    links.some((link) => link.to === currentPath);

  //Menu Search
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleMenuSearchClick = () => setIsSearchActive(true);
  const handleCloseSearchClick = () => setIsSearchActive(false);

  const searchContentRef = useRef(null);
  const bodyOverlay3Ref = useRef(null);
  const searchInputRef = useRef(null); // Reference for the search input
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Set submitting state

    // Simulate a submission with a timeout (replace with your actual submission logic)
    setTimeout(() => {
      setIsSubmitting(false); // Reset submitting state
      // Optionally clear the input field or close the overlay
      if (searchInputRef.current) {
        searchInputRef.current.value = ''; // Clear the input
      }
      bodyOverlay3Ref.current.classList.remove('apply'); // Close overlay on submit (optional)
      searchContentRef.current.classList.remove('opened'); // Close search content (optional)
    }, 2000); // Simulate a delay of 2 seconds
  };

  //Menu Sidebar

  const [isOpen, setIsOpen] = useState(false);

  // Menu Cart
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Business Innovation And Development',
      price: 60,
      image: '/images/case-thumb1.jpg',
    },
    {
      id: 2,
      title: 'Banking Management for Economics Industry',
      price: 100,
      image: '/images/case-thumb2.jpg',
    },
  ]);

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  // LogIn Popup

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Register Popup
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div data-lenis-prevent>
      <div className='bg-SecondaryColor-0 px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] flex justify-between items-center'>
        <div className='sm:flex items-center gap-3 hidden'>
          <img
            src={star}
            draggable={false}
            alt='Star'
          />
          <p className='font-OpenSans text-[15px] text-white text-opacity-80'>
            Welcome to{' '}
            <Link
              to={'#'}
              className='text-PrimaryColor-0 text-opacity-100'
            >
              Educate
            </Link>{' '}
            – Unlocking the Power of Education!
          </p>
        </div>
        <div className='py-[14px] flex items-center gap-7 '>
          <div>
            <button
              type='button'
              className='flex items-center gap-1 text-white font-medium text-[15px] font-Outfit uppercase cursor-pointer'
              onClick={() => setIsPopupVisible(true)}
            >
              <span className='text-PrimaryColor-0'>
                <IoMdLogIn size={20} />
              </span>
              LogIn
            </button>
          </div>
          <div>
            <button
              type='button'
              className='flex items-center gap-[6px] text-white font-medium text-[15px] font-Outfit uppercase'
              onClick={() => setIsVisible(true)}
            >
              <span className='text-PrimaryColor-0'>
                <SlUserFollow size={16} />
              </span>
              Registration
            </button>
          </div>
        </div>
      </div>
      <header
        className={`absolute w-full z-50 transition-all duration-300 bg-SecondaryColor-0 lg:bg-transparent border-b border-SecondaryColor-0 border-opacity-10 ${
          isSticky
            ? '!fixed top-0 shadow-shadows bg-SecondaryColor-0 lg:bg-white animate-headerSlideDown border-transparent'
            : ''
        }`}
      >
        <div className='px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] py-4 lg:py-0'>
          <div className='flex items-center justify-between gap-5'>
            {/* Logo */}
            <div className='header-logo'>
              <Link
                to='/'
                title='EducateX'
              >
                <img
                  src={logo}
                  draggable='false'
                  className='brightness-0 invert-[1] lg:brightness-100 lg:invert-0'
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className='hidden lg:block lg:ml-24'>
              <nav>
                <ul className='flex gap-6 text-sm font-medium'>
                  {menuItems.map((item, idx) => (
                    <li
                      key={idx}
                      className='relative group'
                    >
                      <Link
                        to='#'
                        className={`inline-flex items-center gap-1.5 py-1 px-0 mx-1 my-[35px] font-OpenSans font-medium uppercase rounded-[5px] transition-all duration-500 relative z-10 overflow-hidden before:absolute before:top-0 before:left-auto before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:right-auto group-hover:before:left-0 group-hover:text-white group-hover:px-3 ${
                          isParentActive(item.links)
                            ? 'px-3 before:w-full text-white'
                            : 'text-HeadingColor-0 hover:text-primary'
                        }`}
                      >
                        {item.label}
                        <FaChevronDown
                          size={12}
                          className='mt-[2px]'
                        />
                      </Link>
                      <ul className='absolute z-50 -left-1 top-full origin-top w-64 bg-white text-HeadingColor-0 rounded-md border-t-[3px] border-PrimaryColor-0 shadow-cases scale-y-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 overflow-hidden'>
                        {item.links.map((link, i) => (
                          <li key={i}>
                            <Link
                              to={link.to}
                              className={`block px-7 py-3 border-b border-SecondaryColor-0 border-opacity-10 font-OpenSans font-medium transition-all duration-500 relative z-10 before:absolute before:left-0 before:top-auto before:bottom-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:bottom-auto hover:before:top-0 hover:text-white ${
                                currentPath === link.to
                                  ? 'before:h-full text-white'
                                  : ''
                              }`}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <div className='flex items-center gap-2 sm:gap-7 lg:gap-5 xl:gap-[34px]'>
                <div className='flex items-center gap-2 sm:gap-4 lg:gap-2 xl:gap-4'>
                  <div
                    className='size-8 md:size-[46px] lg:size-9 xl:size-[46px] bg-transparent rounded-full border border-white lg:border-HeadingColor-0 border-opacity-20 lg:border-opacity-20 overflow-hidden text-white lg:text-HeadingColor-0 transition-all duration-500 flex items-center justify-center cursor-pointer relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:rotate-180 before:scale-0 before:-z-10 hover:before:scale-100 hover:before:rotate-0 hover:text-white hover:border-PrimaryColor-0'
                    onClick={handleMenuSearchClick}
                  >
                    <button className='menu-cart text-lg md:text-[22px] lg:text-lg xl:text-[22px]'>
                      <IoIosSearch />
                    </button>
                  </div>
                  <div
                    className='size-8 md:size-[46px] lg:size-9 xl:size-[46px] bg-transparent rounded-full border border-white lg:border-HeadingColor-0 border-opacity-20 lg:border-opacity-20 text-white lg:text-HeadingColor-0 transition-all duration-500 flex items-center justify-center cursor-pointer relative z-10 before:absolute before:left-0 before:rounded-full before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white hover:border-PrimaryColor-0'
                    onClick={() => setIsCartOpen(true)}
                  >
                    <button className='menu-cart relative z-10 text-sm md:text-lg lg:text-sm xl:text-lg'>
                      <GrCart />
                      <span className='absolute -top-[16px] -right-[16px] size-[18px] rounded-full bg-PrimaryColor-0 flex items-center justify-center text-white font-Outfit text-xs'>
                        2
                      </span>
                    </button>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='hidden lg:block'>
                    <Link
                      to={'/contact'}
                      className='header-btn'
                    >
                      Free Trial
                      <HiArrowNarrowRight size={18} />
                    </Link>
                  </div>
                  <div
                    className='group hidden size-[46px] bg-SecondaryColor-0 rounded-full 2xl:flex items-center justify-center cursor-pointer'
                    onClick={() => setIsOpen(true)}
                  >
                    <button className='space-y-1'>
                      <span className='bg-white w-5 h-0.5 rounded-xl block'></span>
                      <span className='bg-white w-5 h-0.5 rounded-xl block'></span>
                      <span className='bg-white w-3 h-0.5 rounded-xl block transition-all duration-500 group-hover:w-5'></span>
                    </button>
                  </div>
                </div>
                {/* Hamburger Icon */}

                <div
                  className='group lg:hidden size-8 md:size-[46px] bg-transparent border border-white border-opacity-10 rounded-full flex items-center justify-center cursor-pointer'
                  onClick={() => setMobileOpen(true)}
                >
                  <button className='space-y-[3px] md:space-y-1'>
                    <span className='bg-white w-4 md:w-5 h-0.5 rounded-xl block'></span>
                    <span className='bg-white w-4 md:w-5 h-0.5 rounded-xl block'></span>
                    <span className='bg-white w-2 md:w-3 h-0.5 rounded-xl block transition-all duration-500 group-hover:w-4 md:group-hover:w-5'></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-[350px] md:w-[380px] overflow-y-auto bg-white text-black shadow-lg transform transition-transform duration-300 z-50 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='p-4 flex justify-between items-center border-b'>
            <h2 className='font-OpenSans text-2xl font-medium'>Menu</h2>
            <button
              onClick={() => setMobileOpen(false)}
              className='text-xl transition-all duration-500 hover:rotate-180'
            >
              <FaTimes />
            </button>
          </div>
          <ul className='p-4 mt-6'>
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => toggleMobileMenu(item.label)}
                  className={`w-full text-left inline-flex items-center justify-between py-3 ${
                    idx !== 0
                      ? 'border-t border-SecondaryColor-0 border-opacity-10'
                      : ''
                  } font-OpenSans font-medium uppercase transition-all duration-500 relative z-10 overflow-hidden before:absolute before:top-0 before:left-auto before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:right-auto group-hover:before:left-0 group-hover:text-white`}
                >
                  {item.label}
                  <FaChevronDown
                    className={`transition-transform duration-500 ${
                      activeMobileMenu === item.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeMobileMenu === item.label ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <ul className='pl-3 mt-2 text-sm'>
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.to}
                          onClick={() => setMobileOpen(false)}
                          className={`block px-5 py-3 ${
                            idx !== 0
                              ? 'border-t border-SecondaryColor-0 border-opacity-10'
                              : ''
                          } font-OpenSans font-medium transition-all duration-500 relative z-10 before:absolute before:left-0 before:top-auto before:bottom-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:bottom-auto hover:before:top-0 hover:text-white ${
                            currentPath === link.to
                              ? 'before:h-full text-white'
                              : ''
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 cursor-[url('/images/cross.png'),_pointer] ${
            mobileOpen
              ? 'opacity-100 visible left-0'
              : 'opacity-0 invisible left-1/2'
          }`}
          onClick={() => setMobileOpen(false)}
        ></div>
      </header>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[99] h-full w-full max-w-[400px] bg-[#041424] p-9 overflow-y-auto shadow-[0_20px_50px_0_#04142466] transition-all duration-500 ${
          isOpen
            ? 'translate-x-0 opacity-100 visible'
            : 'translate-x-full opacity-0 invisible'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-7 right-7 h-10 w-10 bg-[#1ec28f] text-white flex items-center justify-center transition-transform duration-500 hover:rotate-180'
        >
          <FaTimes className='text-lg' />
        </button>

        <div className='mb-6'>
          <Link to='/'>
            <img
              src={logo}
              alt='Logo'
              draggable='false'
            />
          </Link>
        </div>

        <p className='text-sm text-[#a3b7b7] mb-5'>
          Business consultation provides expert advice to improve performance.
        </p>

        <div>
          <h5 className='text-white text-xl font-medium mb-5 font-outfit'>
            What Services We Provide?
          </h5>
          <ul className='list-disc list-inside text-[#a3b7b7] font-medium font-outfit space-y-2'>
            {[
              'Managed IT Services',
              'Cloud Services',
              'Cybersecurity Services',
              'Network Services',
              'Data Analytics',
              'IT Consulting Services',
              'Backup and Disaster Recovery',
              'Website Development',
            ].map((service, i) => (
              <li key={i}>
                <Link
                  to='/'
                  className='hover:text-white transition'
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-8 mb-12'>
          <h5 className='text-white text-xl font-medium font-outfit mb-6'>
            Have Questions? Contact Our Team!
          </h5>
          <ul className='space-y-4 text-white text-sm font-outfit'>
            <li className='flex items-center'>
              <MdLocationPin className='text-[#1ec28f]' />
              <Link
                to='/'
                className='ml-2 hover:text-[#1ec28f] transition'
              >
                Melbone st, Australia, Ny 12099
              </Link>
            </li>
            <li className='flex items-center'>
              <FaEnvelope className='text-[#1ec28f]' />
              <Link
                to='/'
                className='ml-2 hover:text-[#1ec28f] transition'
              >
                needhelp@company.com
              </Link>
            </li>
            <li className='flex items-center'>
              <FaPhoneAlt className='text-[#1ec28f]' />
              <Link
                to='/'
                className='ml-2 hover:text-[#1ec28f] transition'
              >
                +48 555 223 224
              </Link>
            </li>
          </ul>
        </div>

        <div className='mb-10'>
          <h4 className='text-white text-xl font-normal font-outfit mb-6'>
            Get Update
          </h4>
          <form className='relative'>
            <input
              type='email'
              name='email'
              placeholder='Enter E-Mail'
              required
              className='w-full h-[60px] pl-5 pr-[80px] bg-transparent border border-white/10 text-white placeholder:text-white/35 outline-none'
            />
            <button
              type='submit'
              className='absolute bottom-0 right-0 h-[60px] w-[60px] bg-[#1ec28f] text-white text-xl flex items-center justify-center'
            >
              <IoMdPaperPlane />
            </button>
          </form>
        </div>

        <ul className='flex items-center space-x-4 mt-6'>
          {[FaFacebookF, FaXTwitter, FaPinterestP, FaLinkedinIn].map(
            (Icon, i) => (
              <li key={i}>
                <Link
                  to='/'
                  className='relative z-10 h-[45px] w-[45px] flex items-center justify-center rounded-full text-white bg-white/5 hover:text-white transition'
                >
                  <span className='absolute inset-0 bg-[#1ec28f] scale-0 rounded-full transition-transform duration-500 z-[-1] hover:scale-100'></span>
                  <Icon />
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-500 cursor-[url("/images/cross.png"),_pointer] ${
          isOpen ? 'opacity-100 visible left-0' : 'opacity-0 invisible left-1/2'
        }`}
      ></div>
      {/* Search */}
      <div
        className={`fixed top-0 left-0 h-screen w-full z-[99999] backdrop-blur-sm bg-black/20 transition-all duration-[1500ms] ease-[cubic-bezier(0.86,0,0.07,1)] ${
          isSearchActive
            ? 'translate-y-0 mt-0'
            : '-translate-y-full -mt-[540px]'
        }`}
      >
        <button
          onClick={handleCloseSearchClick}
          className='absolute top-10 right-10 w-10 h-10 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center text-[20px]'
        >
          <LiaTimesSolid />
        </button>

        <button
          onClick={handleCloseSearchClick}
          className={`absolute left-0 right-0 mx-auto rounded-full bg-gradient-to-r from-PrimaryColor-0 to-PrimaryColor3-0 w-[70px] h-[70px] cursor-pointer border-4 border-t-white border-l-[#a64cf9] border-b-white border-r-[#a64cf9] shadow-md flex items-center justify-center transition-all duration-500 ease-in-out ${
            isSearchActive
              ? 'visible opacity-100 top-[25%] delay-[1500ms]'
              : 'invisible opacity-0 top-[75%] -mt-[200px]'
          }`}
        >
          <FaArrowUp className='text-white text-[30px]' />
        </button>

        <form
          onSubmit={handleSubmit}
          className={`absolute max-w-[700px] top-1/2 left-[15px] right-[15px] mx-auto -mt-[35px] bg-transparent transition-all duration-300 ease-in-out ${
            isSearchActive ? 'scale-x-100 delay-[1200ms]' : 'scale-x-0'
          }`}
        >
          <div className='relative m-0 overflow-hidden rounded-md'>
            <input
              type='search'
              name='search-field'
              placeholder='Search Here'
              required
              ref={searchInputRef}
              className="block w-full h-[70px] text-[18px] leading-[50px] px-[30px] py-[10px] text-black bg-white border-2 border-[#1ec28f] rounded-md font-['Outfit'] appearance-none transition-all duration-500 ease-in-out focus:outline-none"
            />
            <button
              type='submit'
              disabled={isSubmitting}
              className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1ec28f] h-full px-[25px] text-white text-[24px] cursor-pointer border-none transition-all duration-500 ease-in-out'
            >
              {isSubmitting ? <span>Loading...</span> : <IoSearch />}
            </button>
          </div>
        </form>
      </div>
      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-[340px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className='flex justify-between items-center p-4 border-b'>
          <h4 className='font-Outfit text-2xl sm:text-[28px] text-HeadingColor-0 font-medium'>
            Your Cart
          </h4>
          <button
            onClick={() => setIsCartOpen(false)}
            className='transition-all duration-300 hover:text-red-500 hover:rotate-180'
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className='flex-1 overflow-y-auto p-4'>
          {cartItems.length === 0 ? (
            <p className='font text-xl sm:text-2xl text-TextColor-0 flex gap-2 items-center justify-center h-full'>
              <span className='text-PrimaryColor-0'>
                <BsBasket3 />
              </span>{' '}
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className='flex gap-4 relative border-b py-5'
              >
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className='w-[80px] h-[80px] object-cover object-center rounded'
                />
                <div className='flex-1'>
                  <h5 className='font-Outfit text-sm sm:text-base text-HeadingColor-0'>
                    {item.title}
                  </h5>
                  <p className='text-sm text-gray-500 mt-1'>${item.price}.00</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className='absolute top-1/2 -translate-y-1/2 right-0 text-gray-400 transition-all duration-300 size-7 flex items-center justify-center bg-white shadow-xl border border-HeadingColor-0 border-opacity-10 rounded-full hover:text-red-500'
                >
                  <FaTimes size={12} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className='border-t p-4 flex flex-col gap-5'>
          <div className='flex items-center justify-between font-Outfit text-2xl sm:text-[28px] text-HeadingColor-0 font-medium'>
            <span>Total:</span>
            <span>${total}.00</span>
          </div>
          <Link to='/cart'>
            <button className='font-Outfit w-full py-2 bg-gray-100 transition-all duration-500 hover:bg-gray-200 rounded'>
              View Cart
            </button>
          </Link>
          <Link to='/checkout'>
            <button className='font-Outfit w-full py-2 bg-black text-white transition-all duration-500 hover:bg-gray-800 rounded'>
              Checkout
            </button>
          </Link>
        </div>
      </div>
      {/* Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 cursor-[url("/images/cross.png"),_pointer] ${
          isCartOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />
      {/* LogIn Popup */}
      {isPopupVisible && <LogInPopup setIsPopupVisible={setIsPopupVisible} />}
      {/* Register Form */}
      {isVisible && <RegisterForm setIsVisible={setIsVisible} />}{' '}
    </div>
  );
};

export default Navbar11;
