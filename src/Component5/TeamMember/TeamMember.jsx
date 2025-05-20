import { FaCircle } from 'react-icons/fa';
import TeamCard from './TeamCard';
import Testimonial from '../Testimonial/Testimonial';

const teamMembers = [
  {
    image: '/images/team-thumb71.png',
    name: 'Pensive–Tesla',
    title: 'Instructor',
    profileLink: '/portfolio/pensive-tesla',
    bgColor: 'bg-blue-50',
  },
  {
    image: '/images/team-thumb72.png',
    name: 'Nita Nikolus',
    title: 'Instructor',
    profileLink: '/portfolio/brendan-fraser',
    bgColor: 'bg-green-50',
  },
  {
    image: '/images/team-thumb73.png',
    name: 'Brendan Fraser',
    title: 'Instructor',
    profileLink: '/portfolio/brendan-fraser',
    bgColor: 'bg-yellow-50',
  },
  {
    image: '/images/team-thumb74.png',
    name: 'David R. Konnor',
    title: 'Instructor',
    profileLink: '/portfolio/david-konnor',
    bgColor: 'bg-purple-50',
  },
];

const TeamMember = () => {
  return (
    <section className='bg-PrimaryColor-0 pt-16 md:pt-20 lg:pt-28 relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-[80%] before:bg-[url("/images/team-bg7.png")] before:bg-no-repeat before:bg-cover before:bg-center'>
      <div className='relative z-10'>
        <div className='Container'>
          <div className='text-center'>
            <h5 className='font-Outfit text-sm text-HeadingColor-0 uppercase flex items-center gap-3 justify-center relative z-10 before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:w-[44%] md:before:w-[11%] before:h-[.5px] before:bg-gradient-to-r before:to-transparent before:via-PrimaryColor-0 before:from-transparent'>
              <span className='text-PrimaryColor2-0'>
                <FaCircle size={8} />
              </span>
              team member
            </h5>
            <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[45px] 2xl:leading-[55px] text-HeadingColor-0 mt-2 md:mt-[18px] mb-4'>
              Educate Awesome <span className='text-PrimaryColor-0'>Teams</span>
            </h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[52px]'>
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                {...member}
              />
            ))}
          </div>
        </div>
      </div>
      <Testimonial />
    </section>
  );
};

export default TeamMember;
