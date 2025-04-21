import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import shape2 from '/images/addmission-dot.png';

const Admission = () => {
  return (
    <section className='relative z-10'>
      <div className='absolute top-0 left-0 -z-10 w-full h-[100px] bg-SecondaryColor-0'></div>
      <div className='absolute -z-10 right-56 -bottom-12'>
        <img
          src={shape2}
          draggable={false}
          alt='Shape'
          className='animate-movebtn'
        />
      </div>
      <div className='Container'>
        <div className="bg-[url('/images/addmission-bg.png')] bg-cover bg-left lg:bg-center bg-no-repeat pt-7 sm:pt-16 md:pt-[92px] pb-10 sm:pb-20 md:pb-[136px] px-7 sm:px-10 md:px-20 rounded-[20px] overflow-hidden">
          <div>
            <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              Admission
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2'>
              Creative and Impactful
              <br />
              Learning Methods.
            </h1>
          </div>
          <div className='mt-8'>
            <Link
              to={'/about'}
              className='primary-btn2'
            >
              Get Admissions
              <HiArrowNarrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
