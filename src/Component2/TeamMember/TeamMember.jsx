import teamThumb from '/images/team-thumb1.png';
import teamThumb2 from '/images/team-thumb2.png';
import teamThumb3 from '/images/team-thumb3.png';
import teamThumb4 from '/images/team-thumb4.png';
import shape from '/images/team-shape1.png';
import shape2 from '/images/team-shape2.png';
import TeamCard from './TeamCard';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import './team-member.css';

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamUrl: '/team_details',
    teamTitle: 'Jone D. Alexon',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Web Developer',
    ratingFill: <BsStarFill />,
    ratingHalf: <BsStarHalf />,
    ratingContant: '(4.5)',
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamUrl: '/team_details',
    teamTitle: 'Anjelina M. Jholi',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Graphic Designer',
    ratingFill: <BsStarFill />,
    ratingHalf: <BsStarHalf />,
    ratingContant: '(4.5)',
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamUrl: '/team_details',
    teamTitle: 'Alaina Melvis',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'App Developer',
    ratingFill: <BsStarFill />,
    ratingHalf: <BsStarHalf />,
    ratingContant: '(4.5)',
  },
  {
    id: 4,
    teamThumb: teamThumb4,
    teamUrl: '/team_details',
    teamTitle: 'David Jhonson',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'UI/UX Designer',
    ratingFill: <BsStarFill />,
    ratingHalf: <BsStarHalf />,
    ratingContant: '(4.5)',
  },
];

const TeamMember = () => {
  const settings = {
    loop: true,
    spaceBetween: 26,
    modules: [Autoplay],
    speed: 1500,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section className='bg-white py-16 md:py-20 lg:py-28 relative z-10 team-member'>
      <div className='absolute left-32 top-26 animate-wiggle hidden 3xl:block'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
        />
      </div>
      <div className='Container'>
        <div className='relative grid items-center grid-cols-1 lg:grid-cols-2 gap-8'>
          <div
            className='border-b border-SecondaryColor-0 border-opacity-15 
pb-6 lg:py-6'
          >
            <h5 className='font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              INSTRUCTOR
            </h5>
          </div>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0'>
            Introducing the Educators and
            <br />
            Professional Instructor
          </h1>
        </div>
        <div className='mt-[48px]'>
          <Swiper {...settings}>
            {teamData.map(
              ({
                id,
                teamThumb,
                teamUrl,
                teamTitle,
                socialIcon,
                socialIcon2,
                socialIcon3,
                teamDesc,
                ratingFill,
                ratingHalf,
                ratingContant,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className='team-member-box'>
                      <TeamCard
                        teamThumb={teamThumb}
                        teamUrl={teamUrl}
                        teamTitle={teamTitle}
                        socialIcon={socialIcon}
                        socialIcon2={socialIcon2}
                        socialIcon3={socialIcon3}
                        teamDesc={teamDesc}
                        ratingFill={ratingFill}
                        ratingHalf={ratingHalf}
                        ratingContant={ratingContant}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
      <div className='absolute right-7 bottom-0 hidden 3xl:block'>
        <img
          src={shape2}
          draggable={false}
          alt='Shape'
          className='animate-dance'
        />
      </div>
    </section>
  );
};

export default TeamMember;
