/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const RegisterForm = ({ setIsVisible }) => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    position: '',
    company: '',
    businessArena: '',
    employees: '',
    street: '',
    additionalInfo: '',
    zipCode: '',
    place: '',
    country: '',
    code: '',
    phone: '',
    email: '',
    termsAccepted: false,
  });

  const [isClosing, setIsClosing] = useState(false);
  const containerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      closePopup();
    }
  };

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 800); // animation duration
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full'>
      <div
        ref={containerRef}
        className={`relative bg-white rounded-[20px] shadow-shadows w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden transition-all duration-500 ease-in-out 
          ${
            isClosing
              ? 'animate-zoomOut opacity-0'
              : 'animate-zoomIn opacity-100'
          }`}
      >
        <button
          onClick={closePopup}
          className='absolute top-4 right-4 size-9 rounded-full border border-white flex items-center justify-center text-white z-50 font-Outfit'
          title='Close'
        >
          <FaTimes size={24} />
        </button>

        {/* General Information */}
        <div className='p-8'>
          <h2 className='text-3xl font-medium font-Outfit text-PrimaryColor-0 mb-6'>
            General Information
          </h2>
          <div className='space-y-4 font-Opensans'>
            <select
              name='title'
              value={formData.title}
              onChange={handleChange}
              className='w-full border-b p-2'
            >
              <option value=''>Title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Ms</option>
            </select>
            <div className='flex space-x-4'>
              <input
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                placeholder='First Name'
                className='w-1/2 border-b p-2'
              />
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Last Name'
                className='w-1/2 border-b p-2'
              />
            </div>
            <select
              name='position'
              value={formData.position}
              onChange={handleChange}
              className='w-full border-b p-2'
            >
              <option value=''>Position</option>
              <option>Manager</option>
              <option>Director</option>
              <option>Staff</option>
            </select>
            <input
              type='text'
              name='company'
              value={formData.company}
              onChange={handleChange}
              placeholder='Company'
              className='w-full border-b p-2'
            />
            <div className='flex space-x-4'>
              <input
                type='text'
                name='businessArena'
                value={formData.businessArena}
                onChange={handleChange}
                placeholder='Business Arena'
                className='w-1/2 border-b p-2'
              />
              <select
                name='employees'
                value={formData.employees}
                onChange={handleChange}
                className='w-1/2 border-b p-2'
              >
                <option value=''>Employees</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className='p-8 bg-PrimaryColor-0 text-white'>
          <h2 className='text-3xl font-medium font-Outfit mb-6'>
            Contact Details
          </h2>
          <div className='space-y-4 font-Opensans'>
            <input
              type='text'
              name='street'
              value={formData.street}
              onChange={handleChange}
              placeholder='Street + Nr'
              className='w-full border-b p-2 bg-PrimaryColor-0 placeholder-white focus:outline-none'
            />
            <input
              type='text'
              name='additionalInfo'
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder='Additional Information'
              className='w-full border-b p-2 bg-PrimaryColor-0 placeholder-white focus:outline-none'
            />
            <div className='flex space-x-4'>
              <input
                type='text'
                name='zipCode'
                value={formData.zipCode}
                onChange={handleChange}
                placeholder='Zip Code'
                className='w-1/2 border-b p-2 bg-PrimaryColor-0 placeholder-white focus:outline-none'
              />
              <select
                name='place'
                value={formData.place}
                onChange={handleChange}
                className='w-1/2 border-b p-2 bg-PrimaryColor-0 text-white focus:outline-none'
              >
                <option value=''>Place</option>
                <option>City1</option>
                <option>City2</option>
              </select>
            </div>
            <select
              name='country'
              value={formData.country}
              onChange={handleChange}
              className='w-full border-b p-2 bg-PrimaryColor-0 text-white focus:outline-none'
            >
              <option value=''>Country</option>
              <option>USA</option>
              <option>Germany</option>
              <option>India</option>
            </select>
            <div className='flex space-x-4'>
              <input
                type='text'
                name='code'
                value={formData.code}
                onChange={handleChange}
                placeholder='Code +'
                className='w-1/2 border-b p-2 bg-PrimaryColor-0 placeholder-white focus:outline-none'
              />
              <input
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Phone Number'
                className='w-1/2 border-b p-2 bg-PrimaryColor-0 placeholder-white focus:outline-none'
              />
            </div>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your Email'
              className='w-full border-b p-2 bg-PrimaryColor-0 placeholder-white focus:outline-none'
            />
            <div className='flex items-center space-x-2 mt-4'>
              <input
                type='checkbox'
                name='termsAccepted'
                checked={formData.termsAccepted}
                onChange={handleChange}
                className='form-checkbox'
              />
              <label htmlFor='termsAccepted'>
                I accept the{' '}
                <a
                  href='#'
                  className='underline'
                >
                  Terms and Conditions
                </a>
                .
              </label>
            </div>
            <button
              type='submit'
              className='mt-6 w-full bg-white text-PrimaryColor-0 font-Outfit font-medium py-3 rounded-full hover:bg-gray-100 transition'
            >
              Register Badge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
