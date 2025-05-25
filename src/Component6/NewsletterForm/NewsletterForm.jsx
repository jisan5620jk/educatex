import { FaRegEnvelope } from 'react-icons/fa6';
import shape from '/images/subscribe-shape2.png';
import shape2 from '/images/brand-line.png';

const NewsletterForm = () => {
  return (
    <section className='bg-BodyBg-0 py-16 md:py-20 lg:py-28 relative'>
      <div className='absolute top-32 left-24 animate-dance2 hidden lg:block'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
        />
      </div>
      <div className='absolute -top-16 right-32 animate-wiggle hidden lg:block'>
        <img
          src={shape2}
          draggable={false}
          alt='Shape'
        />
      </div>
      <div className='Container'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
          <h2 className='text-xl md:text-[40px] md:leading-[50px] font-semibold font-Outfit text-HeadingColor-0 text-center md:text-left'>
            Subscribe Our Newsletter For <br className='hidden md:block' />
            Regular Updates
          </h2>

          <form
            action='#'
            className='flex sm:gap-7 items-center rounded-full overflow-hidden relative z-10'
          >
            <div className='relative'>
              <div className='absolute left-6 top-1/2 -translate-y-1/2 flex items-center text-gray-500'>
                <FaRegEnvelope size={16} />
              </div>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email'
                className='w-full sm:w-[412px] h-[50px] sm:h-[60px] font-Outfit flex-1 bg-PrimaryColor-0 bg-opacity-10 text-HeadingColor-0 placeholder:text-TextColor-0 px-12 py-3 rounded-full focus:outline-none'
                required
              />
            </div>
            <div className='absolute top-0 right-0 md:relative'>
              <button
                type='submit'
                className='font-OpenSans bg-PrimaryColor-0 text-white font-medium px-3 sm:px-[52px] py-3 sm:py-[18px] rounded-full relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor2-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0'
              >
                <span className='md:hidden'>Subscribe</span>
                <span className='hidden md:block'>Subscribe Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
