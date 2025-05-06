import aboutThumb from '/images/about-thumb4.png';
import shape from '/images/about-shpae2.png';
import shape2 from '/images/about-shpae1.png';
import shape3 from '/images/about-shape83.png';
import shape4 from '/images/about-shape82.png';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className='bg-[url("/images/about-bg8.png")] bg-no-repeat bg-center bg-cover py-16 md:py-20 lg:pt-28 lg:pb-20 xl:py-28 relative z-10'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 items-center'>
          <div className='relative z-10'>
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full 2xl:w-[inherit] max-w-[inherit] 2xl:-ml-[35px] xl:-[50px]'
            />
            <img
              src={shape}
              draggable={false}
              alt='Shape'
              className='absolute -z-10 bottom-12 lg:left-[5%] animate-dance'
            />
            <img
              src={shape2}
              draggable={false}
              alt='Shape'
              className='absolute -z-10 top-[12%] right-[13%] animate-rotateX hidden sm:block'
            />
          </div>
          <div className='relative'>
            <h5 className='font-OpenSans font-medium text-sm text-SecondaryColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor2-0 before:rounded-full before:size-[9px]'>
              about our educate
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-4 mb-4'>
              Join Online Quran Classes
              <br />
              for Kids <span className='text-PrimaryColor-0'>and Adults</span>
            </h1>
            <p className='font-OpenSans text-TextColor-0 text-[17px] w-full max-w-[500px] mb-9'>
              Experience future of learning our education-focused to main
              backgroud courses pro designed to and empower learners courses
              combine teaching tools.
            </p>
            <ul className='w-full max-w-[430px] grid gap-x-9 gap-y-6 grid-cols-2'>
              <li>
                <h5 className='font-Outfit font-medium text-SecondaryColor-0 uppercase pl-5 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor2-0 before:rounded-full before:size-[9px]'>
                  Create Your Profile
                </h5>
              </li>
              <li>
                <h5 className='font-Outfit font-medium text-SecondaryColor-0 uppercase pl-5 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor2-0 before:rounded-full before:size-[9px]'>
                  Set Your Schedule
                </h5>
              </li>
              <li>
                <h5 className='font-Outfit font-medium text-SecondaryColor-0 uppercase pl-5 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor2-0 before:rounded-full before:size-[9px]'>
                  Connect Students
                </h5>
              </li>
              <li>
                <h5 className='font-Outfit font-medium text-SecondaryColor-0 uppercase pl-5 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor2-0 before:rounded-full before:size-[9px]'>
                  Start Tutoring
                </h5>
              </li>
            </ul>
            <p className='font-OpenSans text-TextColor-0 text-[17px] w-full max-w-[500px] mt-8 mb-12'>
              Backgroud courses pro designed to and empower learners courses
              combine teaching tools.
            </p>
            <div>
              <Link
                to={'/about'}
                className='primary-btn2'
              >
                Start Trial
                <HiArrowNarrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 right-44 z-10'>
        <img
          src={shape3}
          draggable={false}
          alt='Shape'
          className='animate-dance'
        />
      </div>
      <div className='absolute top-24 right-28 z-10'>
        <img
          src={shape4}
          draggable={false}
          alt='Shape'
          className='animate-dance2'
        />
      </div>
    </section>
  );
};

export default About;
