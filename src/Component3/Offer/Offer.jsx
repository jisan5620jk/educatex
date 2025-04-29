import offerImg from '/images/offer-video2.png';
import offerThumb from '/images/offer-thumb2.png';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { IoPlaySharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import shape from '/images/offer-arrow.png';

const Offer = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <section className='pt-12 md:py-16 lg:py-20'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='rounded-[20px] overflow-hidden px-5 sm:px-11 lg:px-6 2xl:px-11 pt-6 sm:pt-[50px] lg:pt-5 2xl:pt-[50px] pb-7 sm:pb-[49px] lg:pb-5 xl:pb-6 2xl:pb-[49px] bg-PrimaryColor-0 bg-opacity-15 relative z-10'>
            <h6 className='bg-PrimaryColor-0 bg-opacity-10 border border-PrimaryColor-0 border-opacity-30 font-Outfit text-sm text-PrimaryColor-0 px-5 py-[5px] rounded-3xl font-medium mb-4 inline-block uppercase'>
              Academic
            </h6>
            <h3 className='font-Outfit text-xl sm:text-[28px] font-semibold sm:leading-[36px] text-HeadingColor-0 transition-all duration-500'>
              Physical Development
              <br />
              And Motor Skills
            </h3>

            <div className='flex items-center gap-1 text-ReviewText-0 text-[15px] mt-[14px] mb-3'>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <span className='font-Outfit ml-1 text-HeadingColor-0 text-base'>
                (4.5/3 Ratings)
              </span>
            </div>
            <div className='absolute top-12 right-[32%] sm:right-[22%] md:right-[32%] lg:right-[32%] hidden sm:block lg:hidden xl:block'>
              <div className='w-[68px] h-[70px] flex flex-col items-center justify-center relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[url("/images/off-price-bg.png")] before:-z-10 before:animate-rotational'>
                <h5 className='font-Outfit text-white text-[22px] font-medium'>
                  10%
                </h5>
                <h6 className='font-Outfit text-white text-sm font-medium uppercase -mt-2'>
                  Off
                </h6>
              </div>
            </div>
            <div className='absolute -bottom-3 -right-24 md:-right-9 lg:-right-36 xl:-right-9 hidden sm:block'>
              <img
                src={offerThumb}
                draggable={false}
                alt='Offer Image'
                className='w-[70%] md:w-[inherit] lg:w-[70%] xl:w-[84%] 2xl:w-[inherit]'
              />
            </div>
            <div className='flex items-center gap-4 mb-9 lg:mb-4 xl:mb-9'>
              <h5 className='font-Outfit text-[22px] text-PrimaryColor-0'>
                $60
              </h5>
              <h5 className='font-Outfit text-[22px] text-TextColor-0 line-through'>
                $100
              </h5>
            </div>
            <div>
              <Link
                to={'/about'}
                className='primary-btn2'
              >
                Enroll Now
                <HiArrowNarrowRight size={20} />
              </Link>
            </div>
            <div className='absolute z-10 bottom-20 left-64 animate-swing hidden xl:block'>
              <img
                src={shape}
                draggable={false}
                alt='Shape'
              />
            </div>
          </div>
          <div className='rounded-[20px] lg:h-[313px] xl:h-[inherit] overflow-hidden relative z-10 before:absolute before:-left-3/4 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r before:to-transparent before:via-white before:from-transparent before:-skew-x-[20deg] before:opacity-30 hover:before:animate-shine'>
            <img
              src={offerImg}
              draggable={false}
              alt='Offer Background Image'
              className='w-full object-center object-cover lg:h-full xl:h-[inherit]'
            />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <button
                className='size-[64px] bg-white rounded-full text-PrimaryColor-0 text-2xl flex items-center justify-center animate-ripple_white'
                onClick={() => setToggler(!toggler)}
              >
                <IoPlaySharp />
              </button>
            </div>
          </div>
        </div>
      </div>

      <FsLightbox
        toggler={toggler}
        sources={['https://youtu.be/LlCwHnp3kL4?si=SD5vSCPhr4vc_U5t']}
      />
    </section>
  );
};

export default Offer;
