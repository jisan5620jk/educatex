import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChevronDown,
  FaTimes,
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import logo from "/images/logo.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GrCart } from "react-icons/gr";
import LogInPopup from "./LogInPopup";
import RegisterForm from "./RegisterForm";
import { BsBasket3 } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";

const Navbar6 = () => {
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = (label) => {
    setActiveMobileMenu((prev) => (prev === label ? null : label));
  };

  const menuItems = [
    {
      label: "Home",
      links: [
        { to: "/", label: "Online Education Main Demo" },
        { to: "/home2", label: "Online University" },
        { to: "/home3", label: "Kinder Garden" },
        { to: "/home4", label: "Islamic Education" },
        { to: "/home5", label: "Online Education" },
        { to: "/home6", label: "Trainning Center" },
      ],
    },
    {
      label: "About",
      links: [{ to: "/about", label: "About Page" }],
    },
    {
      label: "Pages",
      links: [
        { to: "/mission_inner", label: "Mission & Vision Style One" },
        { to: "/mission_inner2", label: "Mission & Vision Style Two" },
        { to: "/career", label: "IT Solution Career" },
        { to: "/team_inner", label: "Team Member Style One" },
        { to: "/team_inner2", label: "Team Member Style Two" },
        { to: "/pricing_inner", label: "Pricing Style One" },
        { to: "/pricing2", label: "Pricing Style Two" },
        { to: "/why_choose", label: "Why Choose Us Style One" },
        { to: "/why_choose2", label: "Why Choose Us Style Two" },
      ],
    },
    {
      label: "Courses",
      links: [
        { to: "/course", label: "Course Page" },
        { to: "/course_details", label: "Course Details Page" },
      ],
    },
    {
      label: "Blog",
      links: [
        { to: "/blog_left_sidebar", label: "Blog Left Sidebar" },
        { to: "/blog_right_sidebar", label: "Blog Right Sidebar" },
        { to: "/blog_no_sidebar", label: "Blog No Sidebar" },
        { to: "/blog_details", label: "Blog Details Page" },
      ],
    },
    {
      label: "Contact",
      links: [{ to: "/contact", label: "Contact Page" }],
    },
  ];

  const isParentActive = (links) =>
    links.some((link) => link.to === currentPath);

  // Menu Cart
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Business Innovation And Development",
      price: 60,
      image: "/images/case-thumb1.jpg",
    },
    {
      id: 2,
      title: "Banking Management for Economics Industry",
      price: 100,
      image: "/images/case-thumb2.jpg",
    },
  ]);

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  //Menu Search
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchInputRef = useRef(null);

  const handleMenuSearchClick = () => setIsSearchActive(true);
  const handleCloseSearchClick = () => setIsSearchActive(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (searchInputRef.current) {
        searchInputRef.current.value = "";
      }
      setIsSearchActive(false); // close overlay after submission
    }, 2000);
  };

  // LogIn Popup

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Register Popup
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative z-50">
      {/* Header Top */}
      <div className="bg-SecondaryColor-0 px-2 sm:px-3 md:px-5 lg:px-10 xl:px-6 2xl:px-8 3xl:px-[50px] flex justify-between items-center relative z-10 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 xl:before:w-[28%] before:h-[.5px] before:bg-gradient-to-r before:to-SecondaryColor-0 before:via-PrimaryColor-0 before:from-SecondaryColor-0">
        <div className="sm:flex items-center gap-10 hidden">
          <div className="flex items-center gap-3">
            <div className="text-PrimaryColor-0">
              <FiPhoneCall size={"20"} />
            </div>
            <a href="tel:+1234567890" title="+123 (4567) 890">
              <button className="font-Outfit text-white text-opacity-70 transition-all duration-500 hover:text-PrimaryColor-0 hover:text-opacity-100">
                +123 (4567) 890
              </button>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-PrimaryColor-0">
              <FaRegEnvelope size={"20"} />
            </div>
            <a href="mailto:support@gmail.com" title="support@gmail.com">
              <button className="font-Outfit text-white text-opacity-70 transition-all duration-500 hover:text-PrimaryColor-0 hover:text-opacity-100">
                support@gmail.com
              </button>
            </a>
          </div>
        </div>
        <div className="py-[6px] flex gap-5 items-center">
          <h4 className="sm:hidden md:block font-Outfit text-xl text-PrimaryColor-0 pr-12 lg:pr-[88px] relative z-10 before:absolute before:right-0 before:top-3.5 before:w-10 lg:before:w-[70px] before:h-[2px] before:bg-PrimaryColor-0">
            Follow Us
          </h4>
          <ul className="flex items-center gap-2 sm:gap-3 md:gap-5">
            <li>
              <button className="size-[38px] rounded-full text-sm bg-transparent flex items-center justify-center text-white border-2 border-white border-opacity-50 overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 hover:border-PrimaryColor-0 hover:border-opacity-100 relative z-10">
                <FaFacebookF />
              </button>
            </li>
            <li>
              <button className="size-[38px] rounded-full text-sm bg-transparent flex items-center justify-center text-white border-2 border-white border-opacity-50 overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 hover:border-PrimaryColor-0 hover:border-opacity-100 relative z-10">
                <FaXTwitter />
              </button>
            </li>
            <li>
              <button className="size-[38px] rounded-full text-sm bg-transparent flex items-center justify-center text-white border-2 border-white border-opacity-50 overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 hover:border-PrimaryColor-0 hover:border-opacity-100 relative z-10">
                <FaLinkedinIn />
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Header Main */}
      <header className="transition-all duration-300 bg-SecondaryColor-0 relative z-50">
        <div
          className={`px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] py-4 lg:py-0 bg-white ${
            isSticky
              ? "!fixed top-0 left-0 w-full shadow-shadows bg-SecondaryColor-0 lg:bg-white animate-headerSlideDown border-transparent"
              : ""
          }`}
        >
          <div className="flex items-center justify-between gap-5">
            {/* Logo */}
            <div className="">
              <Link to="/" title="EducateX">
                <img src={logo} draggable="false" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block 3xl:ml-24">
              <nav>
                <ul className="flex gap-6 lg:gap-2 xl:gap-3 2xl:gap-4 3xl:gap-6 text-sm font-medium">
                  {menuItems.map((item, idx) => (
                    <li key={idx} className="relative group">
                      <Link
                        to="#"
                        className={`inline-flex items-center gap-1.5 py-1 px-0 mx-1 my-[35px] font-OpenSans font-medium uppercase rounded-[5px] transition-all duration-500 relative z-10 overflow-hidden before:absolute before:top-0 before:left-auto before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:right-auto group-hover:before:left-0 group-hover:text-white group-hover:px-3 ${
                          isParentActive(item.links)
                            ? "px-3 before:w-full text-white"
                            : "text-HeadingColor-0"
                        }`}
                      >
                        {item.label}
                        <FaChevronDown size={12} className="mt-[2px]" />
                      </Link>
                      <ul className="absolute z-50 -left-1 top-full origin-top w-64 bg-white text-HeadingColor-0 rounded-md border-t-[3px] border-PrimaryColor-0 shadow-cases scale-y-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 overflow-hidden">
                        {item.links.map((link, i) => (
                          <li key={i}>
                            <Link
                              to={link.to}
                              className={`block px-7 py-3 border-b border-SecondaryColor-0 border-opacity-10 font-OpenSans font-medium transition-all duration-500 relative z-10 before:absolute before:left-0 before:top-auto before:bottom-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:bottom-auto hover:before:top-0 hover:text-white ${
                                currentPath === link.to
                                  ? "before:h-full text-white"
                                  : ""
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
              <div className="flex items-center gap-2 sm:gap-4 md:gap-5 lg:gap-2 xl:gap-5">
                <div className="flex items-center">
                  <div
                    className="size-8 md:size-[46px] lg:size-9 xl:size-[46px] bg-transparent rounded-full border border-HeadingColor-0 border-opacity-20 text-HeadingColor-0 transition-all duration-500 flex items-center justify-center cursor-pointer relative z-10 before:absolute before:left-0 before:rounded-full before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white hover:border-PrimaryColor-0"
                    onClick={() => setIsCartOpen(true)}
                  >
                    <button className="menu-cart relative z-10 text-sm md:text-lg lg:text-sm xl:text-lg">
                      <GrCart />
                      <span className="absolute -top-[16px] -right-[16px] size-[18px] rounded-full bg-PrimaryColor-0 flex items-center justify-center text-white font-Outfit text-xs">
                        2
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden 2xl:block">
                    <Link
                      to={"/contact"}
                      className="inline-flex items-center gap-2 text-base uppercase text-white font-medium font-Outfit rounded-full bg-PrimaryColor-0 px-[30px] py-3.5 transition-all duration-500 relative z-10 overflow-hidden before:absolute before:h-full before:w-0 before:bg-PrimaryColor2-0 before:opacity-50 before:top-0 before:left-auto before:right-0 before:transition-all before:duration-500 before:-z-10 hover:before:left-0 hover:before:opacity-100 hover:before:w-full hover:right-auto"
                    >
                      Apply Now
                      <HiArrowNarrowRight size={18} />
                    </Link>
                  </div>
                </div>
                <div
                  className="size-8 md:size-[46px] lg:size-9 xl:size-[46px] bg-transparent lg:bg-SecondaryColor-0 rounded-full border border-HeadingColor-0 border-opacity-20 overflow-hidden text-HeadingColor-0 lg:text-white transition-all duration-500 flex items-center justify-center cursor-pointer relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:rotate-180 before:scale-0 before:-z-10 hover:before:scale-100 hover:before:rotate-0 hover:text-white hover:border-PrimaryColor-0"
                  onClick={handleMenuSearchClick}
                >
                  <button className="menu-cart text-lg md:text-[22px] lg:text-lg xl:text-[22px]">
                    <IoIosSearch />
                  </button>
                </div>

                <div className="sm:inline-flex gap-1 hidden">
                  <div>
                    <button
                      type="button"
                      className=" text-PrimaryColor-0 text-base font-medium transition-all duration-500 hover:text-PrimaryColor2-0 uppercase cursor-pointer"
                      onClick={() => setIsPopupVisible(true)}
                    >
                      LogIn
                    </button>
                  </div>
                  <div className="text-PrimaryColor-0">/</div>
                  <div>
                    <button
                      type="button"
                      className="text-PrimaryColor-0 text-base font-medium transition-all duration-500 hover:text-PrimaryColor2-0 uppercase"
                      onClick={() => setIsVisible(true)}
                    >
                      Register
                    </button>
                  </div>
                </div>

                {/* Hamburger Icon */}

                <div
                  className="group lg:hidden size-8 md:size-[46px] bg-transparent border border-HeadingColor-0 border-opacity-20 rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => setMobileOpen(true)}
                >
                  <button className="space-y-[3px] md:space-y-1">
                    <span className="bg-HeadingColor-0 w-4 md:w-5 h-0.5 rounded-xl block"></span>
                    <span className="bg-HeadingColor-0 w-4 md:w-5 h-0.5 rounded-xl block"></span>
                    <span className="bg-HeadingColor-0 w-2 md:w-3 h-0.5 rounded-xl block transition-all duration-500 group-hover:w-4 md:group-hover:w-5"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-[350px] md:w-[380px] overflow-y-auto bg-white text-black shadow-lg transform transition-transform duration-300 z-50 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="font-OpenSans text-2xl font-medium">Menu</h2>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-xl transition-all duration-500 hover:rotate-180"
            >
              <FaTimes />
            </button>
          </div>
          <ul className="p-4 mt-6">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => toggleMobileMenu(item.label)}
                  className={`w-full text-left inline-flex items-center justify-between py-3 ${
                    idx !== 0
                      ? "border-t border-SecondaryColor-0 border-opacity-10"
                      : ""
                  } font-OpenSans font-medium uppercase transition-all duration-500 relative z-10 overflow-hidden before:absolute before:top-0 before:left-auto before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:right-auto group-hover:before:left-0 group-hover:text-white`}
                >
                  {item.label}
                  <FaChevronDown
                    className={`transition-transform duration-500 ${
                      activeMobileMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeMobileMenu === item.label ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="pl-3 mt-2 text-sm">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.to}
                          onClick={() => setMobileOpen(false)}
                          className={`block px-5 py-3 ${
                            idx !== 0
                              ? "border-t border-SecondaryColor-0 border-opacity-10"
                              : ""
                          } font-OpenSans font-medium transition-all duration-500 relative z-10 before:absolute before:left-0 before:top-auto before:bottom-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:bottom-auto hover:before:top-0 hover:text-white ${
                            currentPath === link.to
                              ? "before:h-full text-white"
                              : ""
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
              ? "opacity-100 visible left-0"
              : "opacity-0 invisible left-1/2"
          }`}
          onClick={() => setMobileOpen(false)}
        ></div>
      </header>
      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-[340px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h4 className="font-Outfit text-2xl sm:text-[28px] text-HeadingColor-0 font-medium">
            Your Cart
          </h4>
          <button
            onClick={() => setIsCartOpen(false)}
            className="transition-all duration-300 hover:text-red-500 hover:rotate-180"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="font text-xl sm:text-2xl text-TextColor-0 flex gap-2 items-center justify-center h-full">
              <span className="text-PrimaryColor-0">
                <BsBasket3 />
              </span>{" "}
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 relative border-b py-5">
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className="w-[80px] h-[80px] object-cover object-center rounded"
                />
                <div className="flex-1">
                  <h5 className="font-Outfit text-sm sm:text-base text-HeadingColor-0">
                    {item.title}
                  </h5>
                  <p className="text-sm text-gray-500 mt-1">${item.price}.00</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="absolute top-1/2 -translate-y-1/2 right-0 text-gray-400 transition-all duration-300 size-7 flex items-center justify-center bg-white shadow-xl border border-HeadingColor-0 border-opacity-10 rounded-full hover:text-red-500"
                >
                  <FaTimes size={12} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex flex-col gap-5">
          <div className="flex items-center justify-between font-Outfit text-2xl sm:text-[28px] text-HeadingColor-0 font-medium">
            <span>Total:</span>
            <span>${total}.00</span>
          </div>
          <Link to="/cart">
            <button className="font-Outfit w-full py-2 bg-gray-100 transition-all duration-500 hover:bg-gray-200 rounded">
              View Cart
            </button>
          </Link>
          <Link to="/checkout">
            <button className="font-Outfit w-full py-2 bg-black text-white transition-all duration-500 hover:bg-gray-800 rounded">
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
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Search */}
      <div
        className={`fixed top-0 left-0 h-screen w-full z-[99999] backdrop-blur-sm bg-black/20 transition-all duration-[1500ms] ease-[cubic-bezier(0.86,0,0.07,1)] ${
          isSearchActive
            ? "translate-y-0 mt-0"
            : "-translate-y-full -mt-[540px]"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseSearchClick}
          className="absolute top-10 right-10 w-10 h-10 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center text-[20px]"
        >
          <LiaTimesSolid />
        </button>

        {/* Arrow Button */}
        <button
          onClick={handleCloseSearchClick}
          className={`absolute left-0 right-0 mx-auto rounded-full bg-gradient-to-r from-PrimaryColor-0 to-PrimaryColor3-0 w-[70px] h-[70px] cursor-pointer border-4 border-t-white border-l-[#a64cf9] border-b-white border-r-[#a64cf9] shadow-md flex items-center justify-center transition-all duration-500 ease-in-out ${
            isSearchActive
              ? "visible opacity-100 top-[25%] delay-[1500ms]"
              : "invisible opacity-0 top-[75%] -mt-[200px]"
          }`}
        >
          <FaArrowUp className="text-white text-[30px]" />
        </button>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className={`absolute max-w-[700px] top-1/2 left-[15px] right-[15px] mx-auto -mt-[35px] bg-transparent transition-all duration-300 ease-in-out ${
            isSearchActive ? "scale-x-100 delay-[1200ms]" : "scale-x-0"
          }`}
        >
          <div className="relative m-0 overflow-hidden rounded-md">
            <input
              type="search"
              name="search-field"
              placeholder="Search Here"
              required
              ref={searchInputRef}
              className="block w-full h-14 md:h-[70px] text-[18px] leading-[50px] px-[30px] py-[10px] text-black bg-white border-2 border-[#1ec28f] rounded-md font-['Outfit'] appearance-none transition-all duration-500 ease-in-out focus:outline-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1ec28f] h-full px-[25px] text-white text-[24px] cursor-pointer border-none transition-all duration-500 ease-in-out"
            >
              {isSubmitting ? <span>Loading...</span> : <IoSearch />}
            </button>
          </div>
        </form>
      </div>
      {/* LogIn Popup */}
      {isPopupVisible && <LogInPopup setIsPopupVisible={setIsPopupVisible} />}
      {/* Register Form */}
      {isVisible && <RegisterForm setIsVisible={setIsVisible} />}{" "}
    </div>
  );
};

export default Navbar6;
