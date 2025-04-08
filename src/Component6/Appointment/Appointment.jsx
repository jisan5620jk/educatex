import { FaRegEnvelopeOpen, FaRegUser } from 'react-icons/fa6';
import { RiSendPlaneFill } from 'react-icons/ri';
import appoinmentThumb from '/images/contact-thumb.webp';
import titleShape from '/images/sub-title-shape.png';
import shape from '/images/contact-shape1.webp';
import shape2 from '/images/contact-shape2.webp';
import shape3 from '/images/contact-shape.webp';

const Appointment = () => {
  return (
    <div className='px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] bg-BodyBgDark3-0 relative z-20'>
      <section className='bg-BodyBgDark2-0 py-16 md:py-20 lg:py-28 relative z-10'>
        <div className='absolute -z-10 -top-[20%] -left-[10%] size-[300px] rounded-full blur-[150px] bg-[#a1a6ff] bg-opacity-30'></div>
        <div className='Container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center '>
            <div className='relative'>
              <img
                src={appoinmentThumb}
                draggable={false}
                alt='Appoinment Image'
                className='2xl:max-w-[inherit] relative xl:-left-12'
              />
              <img
                src={shape}
                draggable={false}
                alt='Shape'
                className='absolute top-[32%] left-6 animate-dance3 hidden md:block'
              />
              <img
                src={shape2}
                draggable={false}
                alt='Shape'
                className='absolute top-[36%] right-36 animate-wiggle hidden md:block'
              />
            </div>
            <div>
              <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-white uppercase'>
                <img
                  src={titleShape}
                  draggable={false}
                  alt='Shape'
                />{' '}
                GET IN TOUCH
              </h5>
              <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
                Feel Free to Contact with Us
              </h1>
              <form
                action='https://formspree.io/f/xayrekgy'
                method='post'
                className='space-y-5'
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
                  <div className='relative'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Your Name*'
                      required
                      className='h-[56px] w-full rounded-md pl-[60px] text-white font-Outfit text-lg bg-white bg-opacity-10 outline-none border border-SecondaryColor-0 border-opacity-15 transition-all duration-500 ease-linear placeholder:text-white hover:border-white focus:border-white'
                    />
                    <span className='absolute top-1/2 -translate-y-1/2 left-0 h-6 w-11 flex items-center justify-center text-white border-r border-white border-opacity-25'>
                      <FaRegUser />
                    </span>
                  </div>
                  <div className='relative'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Your E-Mail*'
                      required
                      className='h-[56px] w-full rounded-md pl-[60px] text-white font-Outfit text-lg bg-white bg-opacity-10 outline-none border border-SecondaryColor-0 border-opacity-15 transition-all duration-500 ease-linear placeholder:text-white hover:border-white focus:border-white'
                    />
                    <span className='absolute top-1/2 -translate-y-1/2 left-0 h-6 w-11 flex items-center justify-center text-white border-r border-white border-opacity-25'>
                      <FaRegEnvelopeOpen />
                    </span>
                  </div>
                </div>
                <div className='relative'>
                  <select
                    className='h-[60px] w-full cursor-pointer rounded-md pl-[56px] text-white font-Outfit text-lg bg-white bg-opacity-10 outline-none border border-SecondaryColor-0 border-opacity-15 placeholder:text-white transition-all duration-500 ease-linear hover:border-white focus:border-white'
                    defaultValue=''
                  >
                    <option
                      value=''
                      disabled
                    >
                      Select Subject
                    </option>
                    <option value='math'>Mathematics</option>
                    <option value='science'>Science</option>
                    <option value='history'>History</option>
                    <option value='literature'>Literature</option>
                  </select>

                  <span className='absolute top-1/2 -translate-y-1/2 left-0 h-6 w-11 flex items-center justify-center text-white border-r border-white border-opacity-25'>
                    <RiSendPlaneFill size={20} />
                  </span>
                </div>
                <div className='relative'>
                  <textarea
                    name='message'
                    id='message'
                    placeholder='Write Message...'
                    className='min-h-[150px] w-full rounded-md px-7 py-3 resize-none text-white font-Outfit text-lg bg-white bg-opacity-10 outline-none border border-SecondaryColor-0 border-opacity-15 transition-all duration-500 ease-linear placeholder:text-white hover:border-white focus:border-white'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='primary-btn'
                >
                  {`Send Message`}
                  <span className='icon-style'>
                    <svg
                      className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
                      xmlns='http://www.w3.org/2000/svg'
                      stroke='CurrentColor'
                      width='14.2'
                      height='14.2'
                      viewBox='0 0 14.2 14.2'
                    >
                      <g>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      </g>
                      <g>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <img
          src={shape3}
          draggable={false}
          alt='Shape'
          className='absolute -top-14 right-0 animate-dance3 hidden 2xl:block'
        />
      </section>
    </div>
  );
};

export default Appointment;
