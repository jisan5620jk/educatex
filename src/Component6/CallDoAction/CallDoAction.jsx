import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import shape from '/images/call-to-arrow2.png';

const CallDoAction = () => {
  return (
    <section className='bg-[url("/images/call-to-bg2.png")] bg-cover bg-center bg-no-repeat py-[42px] relative z-10'>
      <div className='Container'>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-0 items-center relative'>
          <div className='flex relative'>
            <div>
              <h1 className='font-Outfit font-medium text-lg leading-6 sm:text-[30px] sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] text-white mt-2 mb-4'>
                Your Learning Journey Begins Here
                <br />
                Explore – all programs Today
              </h1>
            </div>
          </div>
          <div>
            <Link
              to={'/about'}
              className='primary-btn2 !bg-white !bg-opacity-10 border border-white border-opacity-30 hover:border-PrimaryColor2-0'
            >
              All Programs
              <HiArrowNarrowRight size={20} />
            </Link>
          </div>
          <div className='absolute top-0 right-[20%] lg:right-[27%] xl:right-[23%] 2xl:right-[20%] hidden lg:block'>
            <img
              src={shape}
              draggable={false}
              alt='Shape'
              className='animate-swing'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallDoAction;
