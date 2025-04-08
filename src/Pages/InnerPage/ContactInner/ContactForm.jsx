import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import contactFormImg from "/images/contact-form-img.png";
import titleShape from '/images/sub-title-shape.png';

const ContactForm = () => {
  return (
    <div className='Container py-28 bg-BodyBg-0 border-t-4 border-PrimaryColor-0'>
      <div className='grid grid-cols-2 lg:grid-cols-3 lg:items-center gap-10 lg:gap-0'>
        <div className='col-span-2 lg:col-span-1 rounded-md overflow-hidden inline-block'>
          <img
            src={contactFormImg}
            className='w-full'
            draggable='false'
          />
          <div className='bg-gradient-to-br to-PrimaryColor2-0 from-PrimaryColor3-0 pl-9 pt-7 pb-9'>
            <h4 className='font-Rajdhani font-semibold text-xl sm:text-[28px] leading-[34px] text-white'>
              Feel Free to Contact & Hire <br /> Us for Your Solution
            </h4>
            <h6 className='font-Rajdhani font-semibold text-xl text-white mt-6 mb-5'>
              Follow US :
            </h6>
            <ul className='flex items-center gap-3'>
              <li>
                <Link to={'/'}>
                  <button className='size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    <FaFacebookF />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    <FaXTwitter />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    <FaLinkedinIn />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    <FaPinterestP />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-span-2 lg:pl-[120px]'>
          <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
            />{' '}
            Have Any Consultation....?
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-8'>
            Get In Touch Your Nearest Local <br />
            Business Sales Executive
          </h1>
          <form
            action='https://formspree.io/f/xayrekgy'
            method='post'
            className='flex flex-col gap-7'
          >
            <div className='flex flex-col md:flex-row gap-7'>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Your Name*'
                required
                className='border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
              />
              <input
                type='text'
                name='number'
                id='number'
                placeholder='Your Number'
                className='border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
              />
            </div>
            <div className='flex flex-col md:flex-row gap-7'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Your E-Mail*'
                required
                className='border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
              />
              <input
                type='text'
                name='address'
                id='address'
                placeholder='Your Address'
                className='border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
              />
            </div>
            <textarea
              name='message'
              id='message'
              placeholder='Write A Message...'
              className='border border-BorderColor2-0 rounded py-2 px-6 outline-none resize-none h-[140px] w-full'
            ></textarea>
            <div className='inline-block mt-3'>
              <button
                type='submit'
                className='primary-btn'
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
