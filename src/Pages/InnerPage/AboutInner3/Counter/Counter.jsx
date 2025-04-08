import OnScrollCounter from '../../../../Shared/Counter/OnScrollCounter';
import shape from '/images/call-do-shape2.webp';

const Counter = () => {
  return (
    <section className="bg-[url('/images/call-do-bg.webp')] bg-cover bg-bottom bg-no-repeat py-14 relative">
      <img
        src={shape}
        draggable={false}
        alt='Shape'
        className='absolute top-[70px] left-24 animate-rotateX hidden 3xl:block'
      />
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 md:items-center'>
          <div className=''>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[38px] md:text-[42px] md:leading-[46px] lg:text-[30px] lg:leading-[34px] xl:text-[36px] xl:leading-[40px] 2xl:text-[42px] 2xl:leading-[46px] text-white mt-[14px] mb-4'>
              View Our Achivement of top
              <br />
              Technology Milestone’s
            </h1>
          </div>
          <div className='flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap sm:items-center justify-between w-full relative z-10'>
            <div className=''>
              <div className='font-Outfit font-semibold text-white text-[60px] flex items-center'>
                <OnScrollCounter
                  start={0}
                  end={10}
                  duration={1000}
                />
                <h1>K+</h1>
              </div>
              <p className='font-OpenSans text-white opacity-80 -mt-2'>
                All Completed Works
              </p>
            </div>
            <div className=''>
              <div className='font-Outfit font-semibold text-white text-[60px] flex items-center'>
                <OnScrollCounter
                  start={0}
                  end={37}
                  duration={1000}
                />
                <h1>+</h1>
              </div>
              <p className='font-OpenSans text-white opacity-80 -mt-2'>
                Our Expert Engineers
              </p>
            </div>
            <div className=''>
              <div className='font-Outfit font-semibold text-white text-[60px] flex items-center'>
                <OnScrollCounter
                  start={0}
                  end={97}
                  duration={1000}
                />
                <h1>%</h1>
              </div>
              <p className='font-OpenSans text-white opacity-80 -mt-2'>
                Satisfaction Rates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
