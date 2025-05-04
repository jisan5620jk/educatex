import { FaUser } from 'react-icons/fa6';
import shape from '/images/team_shape2.png';
import shape2 from '/images/team_shape1.png';
import shape3 from '/images/team-shape3.png';

const teamMembers = [
  { id: 1, image: '/images/team-thumb81.png', icon: <FaUser /> },
  { id: 2, image: '/images/team-thumb82.png', icon: <FaUser /> },
  { id: 3, image: '/images/team-thumb83.png', icon: <FaUser /> },
  { id: 4, image: '/images/team-thumb84.png', icon: <FaUser /> },
];

const TeamGallery = () => {
  return (
    <section className='bg-SecondaryColor-0 py-16 md:py-20 lg:py-28 relative'>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-14 hidden md:block'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
          className='animate-flip'
        />
      </div>
      <div className='absolute right-24 top-24 hidden md:block'>
        <img
          src={shape2}
          draggable={false}
          alt='Shape'
          className='animate-dance2'
        />
      </div>
      <div className='absolute left-28 top-28 hidden md:block'>
        <img
          src={shape3}
          draggable={false}
          alt='Shape'
          className='animate-dance'
        />
      </div>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-Outfit text-sm text-PrimaryColor-0 uppercase pb-1 relative z-10 before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:w-[48%] md:before:w-[11%] before:h-[.5px] before:bg-gradient-to-r before:to-SecondaryColor-0 before:via-PrimaryColor-0 before:from-SecondaryColor-0'>
            Creative Teacher
          </h5>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px] mb-4'>
            Our Awesome Team <span className='text-PrimaryColor-0'>Member</span>
          </h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6 mt-8 md:mt-14'>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className='group overflow-hidden inline-block transition duration-300 relative'
            >
              <img
                src={member.image}
                draggable={false}
                alt='Team Image'
                className='w-full object-cover object-center'
              />
              <div className='absolute z-10 top-8 -right-14 transition-all duration-500 group-hover:right-7 size-[54px] flex justify-center items-center rounded-full border border-white border-opacity-50 bg-white bg-opacity-20 text-2xl text-white text-center'>
                {member.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
