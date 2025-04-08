import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Feature from '../../../Component2/Feature/Feature';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import missionImg from "/images/mission-1.png";
import missionImg2 from "/images/mission-2.png";

const MissionInner = () => {
  return (
    <>
      <HelmetChanger title={'Mission & Vision Inner Page Style Two'} />
      <BreadCrumb
        breadCrumbTitle={'Our Mission vision & Goal'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Our Mission vision & Goal'}
      />
      <section className='relative pt-28 pb-[120px] bg-[#f5f8ed] z-10'>
        <div className='Container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 bg-BodyBg-0 rounded-md mb-8 lg:mb-0'>
            <div>
              <img
                src={missionImg}
                draggable='false'
              />
            </div>
            <div className='ml-10 2xl:ml-20 mr-10'>
              <h2 className='font-Rajdhani font-bold text-HeadingColor-0 text-[42px] mb-8'>
                Our Mission
              </h2>
              <div className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                <div className='size-11 rounded-full bg-white text-xl flex items-center justify-center'>
                  <FiCheck />
                </div>
                <p className='font-Nunito text-TextColor2-0 flex-1'>
                  We Communicate clearly, because in a world crowded with
                  over-the-top marketing. simple wins.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-5 sm:items-center mt-10'>
                <div className='size-11 rounded-full bg-white text-xl flex items-center justify-center'>
                  <FiCheck />
                </div>
                <p className='font-Nunito text-TextColor2-0 flex-1'>
                  We are not rock stars, ninjas or any other disingenuous buzz
                  term. We are creative professionals.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-5 sm:items-center mt-10 mb-16'>
                <div className='size-11 rounded-full bg-white text-xl flex items-center justify-center'>
                  <FiCheck />
                </div>
                <p className='font-Nunito text-TextColor2-0 flex-1'>
                  Before you can market a business, you need to know its story
                  support staff that’s always there when you need us.
                </p>
              </div>
              <Link to={'/'}>
                <button className='primary-btn4'>Find Out More</button>
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 bg-BodyBg-0 rounded-md mb-8 lg:mb-0'>
            <div className='ml-10 mr-10 2xl:mr-20'>
              <h2 className='font-Rajdhani font-bold text-HeadingColor-0 text-[42px] mb-8'>
                Our Vision
              </h2>
              <div className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                <div className='size-11 rounded-full bg-white text-xl flex items-center justify-center'>
                  <FiCheck />
                </div>
                <p className='font-Nunito text-TextColor2-0 flex-1'>
                  We Communicate clearly, because in a world crowded with
                  over-the-top marketing. simple wins.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-5 sm:items-center mt-10'>
                <div className='size-11 rounded-full bg-white text-xl flex items-center justify-center'>
                  <FiCheck />
                </div>
                <p className='font-Nunito text-TextColor2-0 flex-1'>
                  We are not rock stars, ninjas or any other disingenuous buzz
                  term. We are creative professionals.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-5 sm:items-center mt-10 mb-16'>
                <div className='size-11 rounded-full bg-white text-xl flex items-center justify-center'>
                  <FiCheck />
                </div>
                <p className='font-Nunito text-TextColor2-0 flex-1'>
                  Before you can market a business, you need to know its story
                  support staff that’s always there when you need us.
                </p>
              </div>
              <Link to={'/'}>
                <button className='primary-btn4'>Find Out More</button>
              </Link>
            </div>
            <div>
              <img
                src={missionImg2}
                draggable='false'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 bg-BodyBg-0 rounded-md'>
            <div>
              <img
                src={missionImg}
                draggable='false'
              />
            </div>
            <div className='ml-10 2xl:ml-20 mr-10'>
              <h2 className='font-Rajdhani font-bold text-HeadingColor-0 text-[42px] mb-8'>
                Our Goal
              </h2>
              <div className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                <div className='size-11 rounded-full bg-white text-xl flex items-center justify-center'>
                  <FiCheck />
                </div>
                <p className='font-Nunito text-TextColor2-0 flex-1'>
                  We Communicate clearly, because in a world crowded with
                  over-the-top marketing. simple wins.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-5 sm:items-center mt-10'>
                <div className='size-11 rounded-full bg-white text-xl flex items-center justify-center'>
                  <FiCheck />
                </div>
                <p className='font-Nunito text-TextColor2-0 flex-1'>
                  We are not rock stars, ninjas or any other disingenuous buzz
                  term. We are creative professionals.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-5 sm:items-center mt-10 mb-16'>
                <div className='size-11 rounded-full bg-white text-xl flex items-center justify-center'>
                  <FiCheck />
                </div>
                <p className='font-Nunito text-TextColor2-0 flex-1'>
                  Before you can market a business, you need to know its story
                  support staff that’s always there when you need us.
                </p>
              </div>
              <Link to={'/'}>
                <button className='primary-btn4'>Find Out More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Feature />
    </>
  );
};

export default MissionInner;
