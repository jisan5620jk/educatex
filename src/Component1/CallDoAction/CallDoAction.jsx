import callDoAction from '/images/call-do-img.png';
import callDoActionIcon from '/images/call-do-icon.png';
import callDoActionShape from '/images/hand.png';

const CallDoAction = () => {
  return (
    <section className='bg-[url(/images/call-to-bg.png)] bg-cover bg-center relative'>
      <div className='Container'>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between px-2 lg:px-0 py-10 xl:py-0'>
          <div className='flex xl:pl-[272px] relative xl:py-12'>
            <div className='absolute left-0 bottom-0 hidden xl:block'>
              <img
                src={callDoAction}
                draggable={false}
                alt='Image'
              />
            </div>
            <div>
              <h1 className='font-Rajdhani font-bold text-lg leading-6 sm:text-[34px] sm:leading-[44px] md:text-[38px] md:leading-[48px] lg:text-[30px] lg:leading-[40px] xl:text-[34px] xl:leading-[40px] text-white mt-[14px] mb-4'>
                Need SEO Service for growing your <br /> Business? Just Call Us.
              </h1>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <div>
              <img
                src={callDoActionIcon}
                draggable={false}
                alt='Icon'
                className='w-9 sm:w-[inherit]'
              />
            </div>
            <div>
              <h6 className='font-Rajdhani text-white'>Call Us Anytime</h6>
              <a
                href='tel:+001234567890'
                className='font-Rajdhani text-white text-lg sm:text-[26px] sm:leading-10 font-medium'
              >
                +00 123 (4567) 890
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute right-0 lg:right-20 bottom-0 animate-dance3 hidden md:block lg:hidden 3xl:block'>
        <img
          src={callDoActionShape}
          draggable={false}
          alt='Image'
        />
      </div>
    </section>
  );
};

export default CallDoAction;
