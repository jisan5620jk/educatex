import callDoActionIcon from '/images/call-icon.png';
import shape from '/images/call-arrow.png';
import logo from '/images/call-logo.png';

const CallDoAction = () => {
  return (
    <section className='fade-up relative z-20 bg-PrimaryColor-0 py-4'>
      <div className='Container'>
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:items-center'>
          <div className='flex relative'>
            <div>
              <h1 className='font-Outfit font-semibold text-lg leading-6 sm:text-[34px] sm:leading-[44px] md:text-[38px] md:leading-[48px] lg:text-[30px] lg:leading-[40px] xl:text-[34px] xl:leading-[40px] text-white mt-[14px] mb-4'>
                Learn Whenever, Wherever
                <br />
                Free Trial Available
              </h1>
            </div>
          </div>
          <div className='flex flex-wrap xl:flex-nowrap 2xl:flex-wrap items-center gap-7 md:gap-0 justify-between relative'>
            <div className='absolute top-7 -left-20 animate-dance3 lg:hidden xl:block'>
              <img
                src={shape}
                draggable={false}
                alt='Shape'
              />
            </div>
            <div className='flex items-center gap-5'>
              <div>
                <img
                  src={callDoActionIcon}
                  draggable={false}
                  alt='Icon'
                  className='rounded-full'
                />
              </div>
              <div>
                <h6 className='font-Outfit text-white'>Call Us Anytime</h6>
                <a
                  href='tel:+001234567890'
                  className='font-Outfit text-white text-lg sm:text-2xl font-medium mt-2'
                >
                  +123 (4567) 890
                </a>
              </div>
            </div>
            <div className='max-w-[294px] xl:max-w-[230px] 2xl:max-w-[294px] w-full rounded-md bg-white pt-[42px] pb-10'>
              <img
                src={logo}
                draggable={logo}
                alt='Logo'
                className='mx-auto'
              />
              <h5 className='font-OpenSans text-TextColor-0 text-center mt-3'>
                <span className='text-PrimaryColor-0'>890+</span> Trustpilot 4.9
                Ratings
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallDoAction;
