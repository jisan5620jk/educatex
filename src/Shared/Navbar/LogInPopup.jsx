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
        className={`flex items-center justify-center indent-0 z-50 w-full h-auto max-w-[768px] min-h-[480px] bg-white rounded-[20px] shadow-shadows overflow-hidden transition-all duration-500 ease-in-out 
          ${isRightPanelActive ? 'right-panel-active' : ''} 
          ${
            isClosing
              ? 'animate-zoomOut opacity-0'
              : 'animate-zoomIn opacity-100'
          }`}
      >
        <button
          onClick={closePopup}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-800 z-[101]'
        >
          <FaTimes size={20} />
        </button>

        {/* Sign Up Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ease-in-out ${
            isRightPanelActive
              ? 'translate-x-full opacity-100 z-[5]'
              : 'opacity-0 z-[1]'
          }`}
        >
          <form className='bg-white flex flex-col items-center justify-center px-[50px] h-full text-center'>
            <h1 className='font-bold text-xl'>Create Account</h1>
            <div className='flex my-5'>
              {[FaFacebookF, FaGooglePlusG, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href='#'
                  className='border border-[#DDD] rounded-full h-10 w-10 flex items-center justify-center mx-1'
                >
                  <Icon />
                </a>
              ))}
            </div>
            <span className='text-xs'>or use your email for registration</span>
            <input
              type='text'
              placeholder='Name'
              className='bg-[#eee] border-none py-3 px-4 my-2 w-full'
            />
            <input
              type='email'
              placeholder='Email'
              className='bg-[#eee] border-none py-3 px-4 my-2 w-full'
            />
            <input
              type='password'
              placeholder='Password'
              className='bg-[#eee] border-none py-3 px-4 my-2 w-full'
            />
            <button className='rounded-full border border-PrimaryColor-0 bg-PrimaryColor-0 text-white text-xs font-bold py-3 px-[45px] uppercase mt-2'>
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 z-[2] transition-transform duration-500 ease-in-out ${
            isRightPanelActive ? 'translate-x-full' : ''
          }`}
        >
          <form className='bg-white flex flex-col items-center justify-center px-[50px] h-full text-center'>
            <h1 className='font-bold text-xl'>Sign in</h1>
            <div className='flex my-5'>
              {[FaFacebookF, FaGooglePlusG, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href='#'
                  className='border border-[#DDD] rounded-full h-10 w-10 flex items-center justify-center mx-1'
                >
                  <Icon />
                </a>
              ))}
            </div>
            <span className='text-xs'>or use your account</span>
            <input
              type='email'
              placeholder='Email'
              className='bg-[#eee] border-none py-3 px-4 my-2 w-full'
            />
            <input
              type='password'
              placeholder='Password'
              className='bg-[#eee] border-none py-3 px-4 my-2 w-full'
            />
            <a
              href='#'
              className='text-sm my-4 text-[#333]'
            >
              Forgot your password?
            </a>
            <button className='rounded-full border border-PrimaryColor3-0 bg-PrimaryColor3-0 text-white text-xs font-bold py-3 px-[45px] uppercase'>
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay Transition Panel */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-[100] transition-transform duration-500 ease-in-out ${
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
              <h1 className='text-2xl font-bold'>Welcome Back!</h1>
              <p className='text-sm font-light leading-5 my-6'>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setIsRightPanelActive(false)}
                className='ghost border border-white bg-transparent text-white rounded-full py-3 px-[45px] uppercase text-xs font-bold'
              >
                Sign In
              </button>
            </div>
            <div
              className={`flex flex-col items-center justify-center text-center px-10 w-1/2 transition-transform duration-500 ease-in-out ${
                isRightPanelActive ? 'translate-x-[20%]' : 'translate-x-0'
              }`}
            >
              <h1 className='text-2xl font-bold'>Hello, Friend!</h1>
              <p className='text-sm font-light leading-5 my-6'>
                Enter your personal details and start journey with us
              </p>
              <button
                onClick={() => setIsRightPanelActive(true)}
                className='ghost border border-white bg-transparent text-white rounded-full py-3 px-[45px] uppercase text-xs font-bold'
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
