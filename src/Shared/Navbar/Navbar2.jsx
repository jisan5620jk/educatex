import { Link } from 'react-router-dom';
import star from '/images/top-star.png';
import Logo from '/images/logo.png';
import Logo2 from '/images/footer-logo.png';
import { useEffect, useRef, useState } from 'react';
import {
  FaArrowUp,
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { IoIosSearch, IoMdLogIn, IoMdPaperPlane } from 'react-icons/io';
import { SlUserFollow } from 'react-icons/sl';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { GrCart } from 'react-icons/gr';
import { LiaTimesSolid } from 'react-icons/lia';
import { IoSearch } from 'react-icons/io5';
import { BsBasket3 } from 'react-icons/bs';
import LogInPopup from './LogInPopup';
import RegisterForm from './RegisterForm';

const Navbar2 = () => {
  //sticky

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector('.header-sticky');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  //Menu Sidebar

  const menuSideBarRef = useRef(null);
  const sidebarContentRef = useRef(null);
  const bodyOverlay2Ref = useRef(null);
  const closeBtn2Ref = useRef(null);

  useEffect(() => {
    const menuSideBar = menuSideBarRef.current;
    const sidebarContent = sidebarContentRef.current;
    const bodyOverlay2 = bodyOverlay2Ref.current;
    const closeBtn2 = closeBtn2Ref.current;

    const addClasses = () => {
      sidebarContent.classList.add('opened');
      bodyOverlay2.classList.add('apply');
    };

    const removeClasses = () => {
      sidebarContent.classList.remove('opened');
      bodyOverlay2.classList.remove('apply');
    };

    if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
      menuSideBar.addEventListener('click', addClasses);
      closeBtn2.addEventListener('click', removeClasses);
      bodyOverlay2.addEventListener('click', removeClasses);
    }

    return () => {
      if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
        menuSideBar.removeEventListener('click', addClasses);
        closeBtn2.removeEventListener('click', removeClasses);
        bodyOverlay2.removeEventListener('click', removeClasses);
      }
    };
  }, []);

  //Menu Bar
  const menuBarRef = useRef(null);
  const offcanvasRef = useRef(null);
  const bodyOverlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const menuBar = menuBarRef.current;
    const offcanvas = offcanvasRef.current;
    const bodyOverlay = bodyOverlayRef.current;
    const closeBtn = closeBtnRef.current;

    const addClasses = () => {
      offcanvas.classList.add('opened');
      bodyOverlay.classList.add('apply');
    };

    const removeClasses = () => {
      offcanvas.classList.remove('opened');
      bodyOverlay.classList.remove('apply');
    };

    if (menuBar && offcanvas && bodyOverlay && closeBtn) {
      menuBar.addEventListener('click', addClasses);
      closeBtn.addEventListener('click', removeClasses);
      bodyOverlay.addEventListener('click', removeClasses);
    }

    return () => {
      if (menuBar && offcanvas && bodyOverlay && closeBtn) {
        menuBar.removeEventListener('click', addClasses);
        closeBtn.removeEventListener('click', removeClasses);
        bodyOverlay.removeEventListener('click', removeClasses);
      }
    };
  }, []);

  let headerIcon = `  
  <span class="header-icon">  
    <svg fill="currentColor" viewBox="0 0 320 512" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
    </svg>
  </span>  
  `;

  useEffect(() => {
    const mainMenuContent = document.querySelector('.main-menu-content');
    const mainMenuMobile = document.querySelector('.main-menu-mobile');

    if (mainMenuContent && mainMenuMobile) {
      const navContent = mainMenuContent.outerHTML;
      mainMenuMobile.innerHTML = navContent;

      const arrows = document.querySelectorAll(
        '.main-menu-mobile .has-dropdown > a'
      );

      arrows.forEach((arrow) => {
        const arrowBtn = document.createElement('BUTTON');
        arrowBtn.classList.add('dropdown-toggle-btn');
        arrowBtn.innerHTML = headerIcon;

        arrow.appendChild(arrowBtn);

        arrowBtn.addEventListener('click', (e) => {
          e.preventDefault();
          arrowBtn.classList.toggle('dropdown-opened');
          arrow.parentElement.classList.toggle('expanded');
          arrow.parentElement.parentElement.classList.add('dropdown-opened');
          arrow.parentElement.parentElement
            .querySelectorAll('.submenu')
            .forEach((submenu) => {
              if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
              } else {
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
              }
            });
          arrow.parentElement.parentElement
            .querySelectorAll('.has-dropdown')
            .forEach((sibling) => {
              if (sibling !== arrow.parentElement) {
                sibling.classList.remove('dropdown-opened');
                sibling.querySelectorAll('.submenu').forEach((submenu) => {
                  submenu.style.maxHeight = null;
                });
              }
            });
        });
      });
    }
  }, [headerIcon]);

  //Menu Search
  const handleMenuSearchClick = () => {
    document.body.classList.add('search-active');
  };

  const handleCloseSearchClick = () => {
    document.body.classList.remove('search-active');
  };

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

  // Menu Cart

  const cartSidebarRef = useRef(null);
  const cartOverlayRef = useRef(null);
  const openCartBtnRef = useRef(null);
  const closeCartBtnRef = useRef(null);

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

  // 🧠 Your original sidebar open/close logic
  useEffect(() => {
    const cartSidebar = cartSidebarRef.current;
    const cartOverlay = cartOverlayRef.current;
    const openCartBtn = openCartBtnRef.current;
    const closeCartBtn = closeCartBtnRef.current;

    const openCart = () => {
      cartSidebar.classList.remove('translate-x-full');
      cartOverlay.classList.add('opacity-100', 'pointer-events-auto');
      cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
    };

    const closeCart = () => {
      cartSidebar.classList.add('translate-x-full');
      cartOverlay.classList.remove('opacity-100', 'pointer-events-auto');
      cartOverlay.classList.add('opacity-0', 'pointer-events-none');
    };

    if (cartSidebar && cartOverlay && openCartBtn && closeCartBtn) {
      openCartBtn.addEventListener('click', openCart);
      closeCartBtn.addEventListener('click', closeCart);
      cartOverlay.addEventListener('click', closeCart);
    }

    return () => {
      if (cartSidebar && cartOverlay && openCartBtn && closeCartBtn) {
        openCartBtn.removeEventListener('click', openCart);
        closeCartBtn.removeEventListener('click', closeCart);
        cartOverlay.removeEventListener('click', closeCart);
      }
    };
  }, []);

  // LogIn Popup

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Register Popup
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div data-lenis-prevent>
      <div className='offcanvas-area'>
        <div
          ref={offcanvasRef}
          className='offcanvas'
        >
          <div className='offcanvas_close-btn'>
            <button
              ref={closeBtnRef}
              className='close-btn'
            >
              <FaTimes />
            </button>
          </div>
          <div className='offcanvas_logo'>
            <Link to={'/'}>
              <img
                src={Logo}
                draggable='false'
              />
            </Link>
          </div>
          <div className='offcanvas_title'>
            <p>
              Business consultation provides expert advice to improve
              performance.
            </p>
          </div>
          <div className='main-menu-mobile lg:none'></div>
          <div className='offcanvas_contact-info'>
            <div className='offcanvas_contact-title'>
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <MdLocationPin />
                <Link to={'/'}>Melbone st, Australia, Ny 12099</Link>
              </li>
              <li>
                <FaEnvelope />
                <Link to={'/'}>needhelp@company.com</Link>
              </li>
              <li>
                <FaPhoneAlt />
                <Link to={'/'}>+48 555 223 224</Link>
              </li>
            </ul>
          </div>
          <div className='offcanvas_input'>
            <div className='offcanvas_input-title'>
              <h4>Get Update</h4>
            </div>
            <form
              action='#'
              method='post'
            >
              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter E-Mail'
                  required
                />
                <button type='submit'>
                  <IoMdPaperPlane />
                </button>
              </div>
            </form>
            <div className='status'></div>
          </div>
          <div className='offcanvas_social'>
            <div className='social-icon'>
              <Link to={'/'}>
                <FaFacebookF />
              </Link>
              <Link to={'/'}>
                <FaXTwitter />
              </Link>
              <Link to={'/'}>
                <FaPinterestP />
              </Link>
              <Link to={'/'}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={bodyOverlayRef}
        className='body-overlay'
      ></div>
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
      <div className='header-area header-sticky style-two'>
        <div className='px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] py-4 lg:py-0 bg-SecondaryColor-0 lg:bg-transparent border-t lg:border-t-0 border-white border-opacity-10'>
          <div className='flex items-center gap-5 justify-between'>
            <div>
              <div
                className=''
                title='EducateX'
              >
                <Link to={'/'}>
                  <img
                    src={Logo2}
                    draggable='false'
                    className='brightness-0 invert-[1] lg:brightness-100 lg:invert-0'
                  />
                </Link>
              </div>
            </div>
            <div className='hidden lg:block'>
              <div className='header-main-menu text-right 2xl:text-center'>
                <nav className='main-menu-content'>
                  <ul>
                    <li className='has-dropdown'>
                      <Link
                        to={'/'}
                        className='active'
                      >
                        Home
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/'}>SEO & Digital Marketing</Link>
                        </li>
                        <li>
                          <Link to={'/home2'}>Artificial Intelligence</Link>
                        </li>
                        <li>
                          <Link to={'/home3'}>Software Agency</Link>
                        </li>
                        <li>
                          <Link to={'/home4'}>Software Agency Dark</Link>
                        </li>
                        <li>
                          <Link to={'/home5'}>Start Up Technology</Link>
                        </li>
                        <li>
                          <Link to={'/home6'}>Start Up Technology Dark</Link>
                        </li>
                        <li>
                          <Link to={'/home7'}>Start Up Agency</Link>
                        </li>
                        <li>
                          <Link to={'/home8'}>CCTV Security</Link>
                        </li>
                        <li>
                          <Link to={'/home9'}>CCTV Security Dark</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='has-dropdown'>
                      <Link to={'/about'}>
                        About
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/about'}>About Style One</Link>
                        </li>
                        <li>
                          <Link to={'/about2'}>About Style Two</Link>
                        </li>
                        <li>
                          <Link to={'/about3'}>About Style Three</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='has-dropdown'>
                      <Link to={'/'}>
                        Pages
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/mission_inner'}>
                            Mission & Vision Style One
                          </Link>
                        </li>
                        <li>
                          <Link to={'/mission_inner2'}>
                            Mission & Vision Style Two
                          </Link>
                        </li>
                        <li>
                          <Link to={'/career'}>IT Solution Career</Link>
                        </li>
                        <li>
                          <Link to={'/team_inner'}>Team Member Style One</Link>
                        </li>
                        <li>
                          <Link to={'/team_inner2'}>Team Member Style Two</Link>
                        </li>
                        <li>
                          <Link to={'/pricing_inner'}>Pricing Style One</Link>
                        </li>
                        <li>
                          <Link to={'/pricing2'}>Pricing Style Two</Link>
                        </li>
                        <li>
                          <Link to={'/why_choose'}>
                            Why Choose Us Style One
                          </Link>
                        </li>
                        <li>
                          <Link to={'/why_choose2'}>
                            Why Choose Us Style Two
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className='has-dropdown'>
                      <Link to={'/project2'}>
                        Courses
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/project'}>Project Style One</Link>
                        </li>
                        <li>
                          <Link to={'/project2'}>Project Style Two</Link>
                        </li>
                        <li>
                          <Link to={'/project_details'}>
                            Project Details Style One
                          </Link>
                        </li>
                        <li>
                          <Link to={'/project_details2'}>
                            Project Details Style Two
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className='has-dropdown'>
                      <Link to={'/'}>
                        Blog
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/blog_grid'}>Blog Grid Style One</Link>
                        </li>
                        <li>
                          <Link to={'/blog_grid2'}>Blog Grid Style Two</Link>
                        </li>
                        <li>
                          <Link to={'/blog_list'}>Blog List Style One</Link>
                        </li>
                        <li>
                          <Link to={'/blog_list_left_sidebar'}>
                            Blog List Left Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to={'/blog_list_right_sidebar'}>
                            Blog List Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to={'/blog_list_no_sidebar'}>
                            Blog List No Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to={'/blog_details'}>
                            Blog Details Style One
                          </Link>
                        </li>
                        <li>
                          <Link to={'/blog_details2'}>
                            Blog Details Style Two
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className='has-dropdown'>
                      <Link to={'/contact'}>
                        Contact
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/contact'}>Contact Style One</Link>
                        </li>
                        <li>
                          <Link to={'/contact2'}>Contact Style Two</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div>
              <div className='header-right-box flex items-center gap-2 sm:gap-7 lg:gap-5 xl:gap-[34px]'>
                <div className='flex items-center gap-2 sm:gap-4 lg:gap-2 xl:gap-4'>
                  <div
                    className='size-8 md:size-[46px] lg:size-9 xl:size-[46px] bg-white bg-opacity-10 rounded-full border border-white lg:border-white border-opacity-20 lg:border-opacity-20 overflow-hidden text-white lg:text-white transition-all duration-500 flex items-center justify-center cursor-pointer relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:rotate-180 before:scale-0 before:-z-10 hover:before:scale-100 hover:before:rotate-0 hover:text-white hover:border-PrimaryColor-0'
                    onClick={handleMenuSearchClick}
                  >
                    <button className='menu-cart text-lg md:text-[22px] lg:text-lg xl:text-[22px]'>
                      <IoIosSearch />
                    </button>
                  </div>
                  <div
                    className='size-8 md:size-[46px] lg:size-9 xl:size-[46px] bg-white bg-opacity-10 rounded-full border border-white lg:border-white border-opacity-20 lg:border-opacity-20 text-white lg:text-white transition-all duration-500 flex items-center justify-center cursor-pointer relative z-10 before:absolute before:left-0 before:rounded-full before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white hover:border-PrimaryColor-0'
                    ref={openCartBtnRef}
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
                    className='header-sidebar hidden size-[46px] bg-PrimaryColor-0 rounded-full 2xl:flex items-center justify-center cursor-pointer'
                    ref={menuSideBarRef}
                  >
                    <button className='menu-sidebar'>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
                <div className='header-bar lg:hidden'>
                  <button
                    ref={menuBarRef}
                    className='menu-bar'
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sidebar-content'>
        <div
          ref={sidebarContentRef}
          className='sidebar'
        >
          <div className='sidebar_close-btn'>
            <button
              ref={closeBtn2Ref}
              className='close-btn2'
            >
              <FaTimes />
            </button>
          </div>
          <div className='sidebar_logo'>
            <Link to={'/'}>
              <img
                src={Logo2}
                draggable='false'
              />
            </Link>
          </div>
          <div className='sidebar_title'>
            <p>
              Business consultation provides expert advice to improve
              performance.
            </p>
          </div>
          <div>
            <div className='sidebar_service-title'>
              <h5>What Services We Provide?</h5>
            </div>
            <ul className='service_list'>
              <li>
                <Link to={'/'}>
                  <button>Managed IT Services</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Cloud Services</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Cybersecurity Services</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Network Services</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Data Analytics</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>IT Consulting Services</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Backup and Disaster Recovery</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Website Development</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='sidebar_contact-info'>
            <div className='sidebar_contact-title'>
              <h5>Have Questions? Contact Our Team!</h5>
            </div>
            <ul>
              <li>
                <MdLocationPin />
                <Link to={'/'}>Melbone st, Australia, Ny 12099</Link>
              </li>
              <li>
                <FaEnvelope />
                <Link to={'/'}>needhelp@company.com</Link>
              </li>
              <li>
                <FaPhoneAlt />
                <Link to={'/'}>+48 555 223 224</Link>
              </li>
            </ul>
          </div>
          <div className='sidebar_input'>
            <div className='offcanvas_input-title'>
              <h4>Get Update</h4>
            </div>
            <form
              action='#'
              method='post'
            >
              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter E-Mail'
                  required
                />
                <button type='submit'>
                  <IoMdPaperPlane />
                </button>
              </div>
            </form>
          </div>
          <ul className='sidebar-social-icon'>
            <li>
              <Link to={'/'}>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <FaPinterestP />
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={bodyOverlay2Ref}
        className='body-overlay2'
      ></div>
      <div className='search-popup'>
        <button
          className='close-search'
          onClick={handleCloseSearchClick}
        >
          <LiaTimesSolid />
        </button>
        <button
          className='close-search2'
          onClick={handleCloseSearchClick}
        >
          <FaArrowUp />
        </button>
        <form
          method='post'
          onSubmit={handleSubmit}
        >
          <div className='form-group'>
            <input
              type='search'
              name='search-field'
              placeholder='Search Here'
              required
              ref={searchInputRef}
            />
            <button
              type='submit'
              disabled={isSubmitting} // Disable button if submitting
            >
              {isSubmitting ? (
                <span>Loading...</span> // Show loading text
              ) : (
                <IoSearch />
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Cart Sidebar */}
      <div
        ref={cartSidebarRef}
        className='fixed top-0 right-0 w-full sm:w-[340px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-full flex flex-col'
      >
        {/* Header */}
        <div className='flex justify-between items-center p-4 border-b'>
          <h4 className='font-Outfit text-2xl sm:text-[28px] text-HeadingColor-0 font-medium'>
            Your Cart
          </h4>
          <button
            ref={closeCartBtnRef}
            className='transition-all duration-300 hover:text-red-500 hover:rotate-180'
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className='flex-1 overflow-y-auto p-4'>
          {cartItems.length === 0 && (
            <p className='font text-xl sm:text-2xl text-TextColor-0 flex gap-2 items-center justify-center h-full'>
              <span className='text-PrimaryColor-0'>
                <BsBasket3 />
              </span>{' '}
              Your cart is empty.
            </p>
          )}

          {cartItems.map((item) => (
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
          ))}
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
        ref={cartOverlayRef}
        className='fixed inset-0 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 z-40 cursor-[url("/images/cross.png"),_pointer]'
      ></div>

      {/* LogIn Popup */}
      {isPopupVisible && <LogInPopup setIsPopupVisible={setIsPopupVisible} />}

      {/* Register Form */}
      {isVisible && <RegisterForm setIsVisible={setIsVisible} />}
    </div>
  );
};

export default Navbar2;
