import { useState } from 'react';
import WhyChooseImg from '/images/why-choose-inner-image.jpg';
import titleShape from '/images/sub-title-shape.png';
import FsLightbox from 'fslightbox-react';
import { FaPlay } from 'react-icons/fa6';

const WhyChooseUs = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className='py-16 md:py-20 lg:py-28'>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-8 2xl:gap-0 lg:grid-cols-2 items-center'>
          <div>
            <img
              src={WhyChooseImg}
              draggable={false}
              alt='Why Choose Image'
            />
          </div>
          <div>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Why Choose Us
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-5'>
              Transforming Digital Future
              <br /> With Tailored IT Solutions Can
              <br /> Rely On Before That Final
            </h1>
            <p className='font-OpenSans text-TextColor2-0 pb-5 max-w-[530px] w-full'>
              Competently leverage existing top-line bandwidth vis vis client
              centric of chains. Enthusiastically maximize cost effective
              technologies TechVantage has the experience and tools to build.
            </p>
            <p className='font-OpenSans text-TextColor2-0 pb-10 max-w-[530px] w-full'>
              {`With DeepTech's comprehensive skillset and resources, we create,
              main tain, and optimize scalable IT solutions, giving you the
              freedom to concent rate on what matters most your business.`}
            </p>
            <div className='inline-block'>
              <div
                className='flex items-center gap-5 cursor-pointer'
                onClick={() => setToggler(!toggler)}
              >
                <button className='size-[64px] rounded-full bg-gradient-to-l to-PrimaryColor2-0 from-PrimaryColor3-0 text-white flex justify-center items-center'>
                  <FaPlay size={28} />
                </button>
                <span className='font-Outfit font-semibold text-lg text-PrimaryColor-0 underline underline-offset-4 uppercase'>
                  Play Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={['https://youtu.be/NKJ-6zCSk2E?si=XQUpq01QZ8hNXLdc']}
      />
    </section>
  );
};

export default WhyChooseUs;
