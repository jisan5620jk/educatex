import titleShape from '/images/sub-title-shape.png';

const Appointment = () => {
  return (
    <section className='py-16 md:py-20 lg:py-[102px]'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
          <div className='relative'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867283.0267128727!2d34.232606549050644!3d31.8841932044305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cf2d28866bdd9%3A0xee17a001d166f686!2sPalestine!5e0!3m2!1sen!2sbd!4v1715597594739!5m2!1sen!2sbd'
              width='100%'
              height='632'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='rounded-lg w-full'
            ></iframe>
          </div>
          <div className='mr-4'>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Get In Touch
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-8'>
              Write Us Something
            </h1>
            <form
              action='#'
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
                  className='font-OpenSans text-HeadingColor-0 border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
                />
                <input
                  type='text'
                  name='number'
                  id='number'
                  placeholder='Your Number'
                  className='font-OpenSans text-HeadingColor-0 border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
                />
              </div>
              <div className='flex flex-col md:flex-row gap-7'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Your E-Mail*'
                  required
                  className='font-OpenSans text-HeadingColor-0 border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
                />
                <input
                  type='text'
                  name='address'
                  id='address'
                  placeholder='Your Address'
                  className='font-OpenSans text-HeadingColor-0 border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
                />
              </div>
              <textarea
                name='message'
                id='message'
                placeholder='Write A Message...'
                className='font-OpenSans text-HeadingColor-0 border border-BorderColor2-0 rounded py-2 px-6 outline-none resize-none h-[140px] w-full'
              ></textarea>
              <div className='flex gap-2 text-TextColor2-0 font-OpenSans'>
                <input
                  type='checkbox'
                  name='terms'
                  id='terms'
                />
                <p>I agree with the Terms & Conditions</p>
              </div>
              <div className='inline-block'>
                <button
                  type='submit'
                  className='primary-btn'
                >
                  {`Submit Message`}
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
