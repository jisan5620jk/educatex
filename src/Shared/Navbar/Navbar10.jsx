import { Link } from 'react-router-dom';
import Logo2 from '/images/logo2.png';
import Logo from '/images/main-logo.png';
import './navbar.css';
import { useEffect, useRef } from 'react';
import {
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaRegEnvelope,
  FaXTwitter,
} from 'react-icons/fa6';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { IoMdPaperPlane, IoMdStar } from 'react-icons/io';
import { GoArrowUpRight } from 'react-icons/go';
import { GiPhone } from 'react-icons/gi';

const Navbar10 = () => {
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
                src={Logo2}
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
      <div className='px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] flex flex-col lg:flex-row lg:items-center justify-between bg-PrimaryColor-0'>
        <div className='hidden sm:flex lg:flex items-center gap-2 md:hidden py-3 md:py-0'>
          <div className='size-[16px] rounded-full flex items-center justify-center text-PrimaryColor-0 bg-white'>
            <IoMdStar size={14} />
          </div>
          <p className='flex-1 font-Nunito text-white text-opacity-80'>
            Continually formulate B2C partnerships orthogonal software
          </p>
        </div>
        <div className='flex sm:hidden md:flex items-center md:justify-center lg:justify-end gap-6 sm:gap-8 py-3 md:py-0'>
          <div className='lg:hidden xl:block'>
            <a
              href='mailto:example@gmail.com'
              className='flex items-center gap-2 text-white text-opacity-80 transition-all duration-500 hover:text-opacity-100'
            >
              <FaRegEnvelope />
              example@gmail.com
            </a>
          </div>
          <div className='border-x lg:border-l-transparent xl:border-l-white border-white !border-opacity-20 py-2 lg:py-[14px] px-8 hidden md:block'>
            <a
              href='tel:+00123456789'
              className='flex items-center gap-1 text-white text-opacity-80 transition-all duration-500 hover:text-opacity-100'
            >
              <GiPhone className='[transform:rotateX(175deg)] text-lg' />
              +00 123 (456) 789
            </a>
          </div>
          <ul className='flex items-center gap-2 sm:gap-5'>
            <li>
              <button
                type='button'
                className='text-white text-opacity-80 transition-all duration-500 hover:text-opacity-100'
              >
                <FaFacebookF />
              </button>
            </li>
            <li>
              <button
                type='button'
                className='text-white text-opacity-80 transition-all duration-500 hover:text-opacity-100'
              >
                <FaInstagram />
              </button>
            </li>
            <li>
              <button
                type='button'
                className='text-white text-opacity-80 transition-all duration-500 hover:text-opacity-100'
              >
                <FaXTwitter />
              </button>
            </li>
            <li>
              <button
                type='button'
                className='text-white text-opacity-80 transition-all duration-500 hover:text-opacity-100'
              >
                <FaLinkedinIn />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='header-area header-sticky border-t lg:border-t-0 border-white border-opacity-25'>
        <div className='px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px]'>
          <div className='flex items-center justify-between lg:grid lg:grid-cols-12'>
            <div className='col-span-2'>
              <div className='header-logo'>
                <Link to={'/'}>
                  <img
                    src={Logo}
                    draggable='false'
                    className='brightness-0 invert-[1] lg:brightness-100 lg:invert-0'
                  />
                </Link>
              </div>
            </div>
            <div className='col-span-7 3xl:col-span-8 hidden lg:block'>
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
                      <Link to={'/service'}>
                        Service
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/service'}>service</Link>
                        </li>
                        <li>
                          <Link to={'/service_details'}>service details</Link>
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
                        Project
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
            <div className='col-span-3 3xl:col-span-2'>
              <div className='header-right-box flex items-center gap-10 lg:gap-4 justify-end'>
                <div className='header-btn hidden lg:block'>
                  <Link to={'/contact'}>
                    get a quote<span></span>
                    <GoArrowUpRight size={22} />
                  </Link>
                </div>
                <div
                  className='header-sidebar hidden size-[50px] bg-gradient-to-l from-PrimaryColor2-0 to-PrimaryColor3-0 rounded-full 2xl:flex items-center justify-center cursor-pointer'
                  ref={menuSideBarRef}
                >
                  <button className='menu-sidebar'>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
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
    </div>
  );
};

export default Navbar10;
