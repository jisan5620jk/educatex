import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import ProjectCard from './ProjectCard';
import projectImg3 from '/images/work-image.jpg';
import projectImg2 from '/images/work-image2.jpg';
import projectImg from '/images/work-image3.jpg';
import './project.css';
import titleShape from '/images/sub-title-shape.png';
import { Link } from 'react-router-dom';

const projectCard = [
  {
    id: 1,
    projectImg: projectImg,
    projectSubTitle: 'Camera',
    projectBoxLink: '/project_details',
    projectTitle: 'Night vision Camera',
    projectBtn: 'View Details',
  },
  {
    id: 2,
    projectImg: projectImg3,
    projectSubTitle: 'Camera',
    projectBoxLink: '/project_details',
    projectTitle: 'Visual Gruard System',
    projectBtn: 'View Details',
  },
  {
    id: 3,
    projectImg: projectImg2,
    projectBoxLink: '/project_details',
    projectTitle: 'Tread Detected',
    projectSubTitle: 'Camera',
    projectBtn: 'View Details',
  },
];

const Project = () => {
  const settings = {
    loop: true,
    spaceBetween: 28,
    modules: [Autoplay],
    speed: 2500,
    autoplay: {
      delay: 5000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className='project bg-BodyBg7-0 py-16 md:py-20 lg:py-28'>
      <div className='Container'>
        <div className='flex flex-col md:flex-row md:items-center justify-between'>
          <div>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Projects
            </h5>
            <h1 className='font-Outfit font-bold text-[40px] leading-[42px] sm:text-[50px] sm:leading-[52px] md:text-[60px] md:leading-[72px] lg:text-[60px] lg:leading-[62px] xl:text-[70px] xl:leading-[72px] 2xl:text-[80px] 2xl:leading-[82px] text-HeadingColor-0 mt-[14px] mb-4'>
              Selected projects
            </h1>
          </div>
          <div>
            <Link
              to={'/project2'}
              className='inline-block'
            >
              <button className='primary-btn'>
                {`All projects`}
                <span className='icon-style'>
                  <svg
                    className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='CurrentColor'
                    width='14.2'
                    height='14.2'
                    viewBox='0 0 14.2 14.2'
                  >
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='mx-2 sm:mx-3 md:mx-5 lg:mx-2 xl:mx-5 2xl:mx-8 3xl:mx-[50px] mt-7'>
        <Swiper
          {...settings}
          pagination={pagination}
          modules={[Pagination]}
        >
          <div>
            {projectCard.map(
              ({
                id,
                projectImg,
                projectBoxLink,
                projectTitle,
                projectSubTitle,
                projectBtn,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className='pb-[92px]'>
                      <ProjectCard
                        projectImg={projectImg}
                        projectBoxLink={projectBoxLink}
                        projectTitle={projectTitle}
                        projectSubTitle={projectSubTitle}
                        projectBtn={projectBtn}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
