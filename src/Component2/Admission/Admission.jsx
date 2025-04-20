import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Admission = () => {
    return (
      <section className='relative z-10'>
        <div className='absolute top-0 left-0 -z-10 w-full h-[100px] bg-SecondaryColor-0'></div>
        <div className='Container'>
          <div className="bg-[url('/images')] bg-cover bg-center bg-no-repeat rounded-[20px] overflow-hidden">
            <div>
              <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
                ABOUT US
              </h5>
              <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 mb-4'>
                Who We Are – Introduction to
                <br />
                Educate Online Platform
              </h1>
            </div>
            <div>
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