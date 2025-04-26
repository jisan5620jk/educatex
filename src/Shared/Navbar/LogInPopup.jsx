/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTimes,
} from 'react-icons/fa';

const LogInPopup = ({ setIsPopupVisible }) => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const containerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      closePopup();
    }
  };

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsPopupVisible(false);
      setIsClosing(false);
    }, 800); // matches transition
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full'>
      {/* Login Popup Container */}
      <div
        ref={containerRef}
        id='container'
        className={`flex items-center justify-center indent-0 z-40 w-full h-auto max-w-[768px] min-h-[480px] bg-white rounded-[20px] shadow-shadows overflow-hidden transition-all duration-500 ease-in-out 
          ${isRightPanelActive ? 'right-panel-active' : ''} 
          ${
            isClosing
              ? 'animate-zoomOut opacity-0'
              : 'animate-zoomIn opacity-100'
          }`}
      >
        <button
          onClick={closePopup}
          className='absolute top-4 right-4 text-red-500 z-50'
        >
          <FaTimes size={20} />
        </button>

        {/* Sign Up Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ease-in-out ${
            isRightPanelActive
              ? 'translate-x-full opacity-100 z-20'
              : 'opacity-0 z-10'
          }`}
        >
          <form className='bg-white flex flex-col items-center justify-center px-[50px] h-full text-center'>
            <h1 className='font-medium text-3xl font-Outfit'>Create Account</h1>
            <div className='flex my-5'>
              {[FaFacebookF, FaGooglePlusG, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href='#'
                  className='border border-SecondaryColor-0 border-opacity-20 rounded-full size-10 flex items-center justify-center mx-1 transition-all duration-500 hover:text-white hover:border-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:scale-0 before:-z-10 before:rounded-full before:transition-all before:duration-500 hover:before:scale-100'
                >
                  <Icon />
                </a>
              ))}
            </div>
            <span className='font-OpenSans mb-4'>
              or use your email for registration
            </span>
            <input
              type='text'
              placeholder='Name'
              className='bg-SecondaryColor-0 bg-opacity-5 rounded-md border-none py-3 px-5 my-2 w-full'
            />
            <input
              type='email'
              placeholder='Email'
              className='bg-SecondaryColor-0 bg-opacity-5 rounded-md border-none py-3 px-5 my-2 w-full'
            />
            <input
              type='password'
              placeholder='Password'
              className='bg-SecondaryColor-0 bg-opacity-5 rounded-md border-none py-3 px-5 my-2 w-full'
            />
            <button className='rounded-full border border-PrimaryColor-0 bg-PrimaryColor-0 text-white text-xs font-bold py-3 px-[45px] uppercase mt-2'>
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 z-10 transition-transform duration-500 ease-in-out ${
            isRightPanelActive ? 'translate-x-full' : ''
          }`}
        >
          <form className='bg-white flex flex-col items-center justify-center px-8 h-full text-center'>
            <h1 className='font-medium text-3xl font-Outfit uppercase'>
              Sign in
            </h1>
            <div className='flex my-5'>
              {[FaFacebookF, FaGooglePlusG, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href='#'
                  className='border border-SecondaryColor-0 border-opacity-20 rounded-full size-10 flex items-center justify-center mx-1 transition-all duration-500 hover:text-white hover:border-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:scale-0 before:-z-10 before:rounded-full before:transition-all before:duration-500 hover:before:scale-100'
                >
                  <Icon />
                </a>
              ))}
            </div>
            <span className='mb-5 font-OpenSans'>or use your account</span>
            <input
              type='email'
              placeholder='Email'
              className='bg-SecondaryColor-0 bg-opacity-5 rounded-md border-none py-3 px-5 my-2 w-full'
            />
            <input
              type='password'
              placeholder='Password'
              className='bg-SecondaryColor-0 bg-opacity-5 rounded-md border-none py-3 px-5 my-2 w-full'
            />
            <a
              href='#'
              className='my-4 text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 font-Outfit'
            >
              Forgot your password?
            </a>
            <button className='font-Outfit rounded-full border border-PrimaryColor3-0 bg-PrimaryColor3-0 text-white text-sm font-medium py-[10px] px-11 uppercase'>
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay Transition Panel */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-40 transition-transform duration-500 ease-in-out ${
            isRightPanelActive ? '-translate-x-full' : ''
          }`}
        >
          <div
            className={`bg-gradient-to-r from-PrimaryColor-0 to-PrimaryColor3-0 text-white absolute left-[-100%] w-[200%] h-full flex transition-transform duration-500 ease-in-out ${
              isRightPanelActive ? 'translate-x-1/2' : ''
            }`}
          >
            <div
              className={`flex flex-col items-center justify-center text-center px-10 w-1/2 transition-transform duration-500 ease-in-out ${
                isRightPanelActive ? 'translate-x-0' : '-translate-x-[20%]'
              }`}
            >
              <h1 className='text-3xl font-medium font-Outfit'>
                Welcome Back!
              </h1>
              <p className='font-OpenSans leading-5 my-6'>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setIsRightPanelActive(false)}
                className='font-Outfit border border-white bg-transparent text-white rounded-full py-[10px] px-11 uppercase text-sm font-medium'
              >
                Sign In
              </button>
            </div>
            <div
              className={`flex flex-col items-center justify-center text-center px-10 w-1/2 transition-transform duration-500 ease-in-out ${
                isRightPanelActive ? 'translate-x-[20%]' : 'translate-x-0'
              }`}
            >
              <h1 className='text-3xl font-medium font-Outfit'>
                Hello, Friend!
              </h1>
              <p className='leading-5 font-OpenSans my-6'>
                Enter your personal details and start journey with us
              </p>
              <button
                onClick={() => setIsRightPanelActive(true)}
                className='Outfit border border-white bg-transparent text-white rounded-full py-[10px] px-11 uppercase text-sm font-medium'
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPopup;
