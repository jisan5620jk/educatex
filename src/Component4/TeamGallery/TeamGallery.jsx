import { FaUser } from "react-icons/fa6";

const teamMembers = [
  { id: 1, image: '/images/team-thumb81.png', name: <FaUser /> },
  { id: 2, image: '/images/team-thumb82.png', name: <FaUser /> },
  { id: 3, image: '/images/team-thumb83.png', name: <FaUser /> },
  { id: 4, image: '/images/team-thumb84.png', name: <FaUser /> },
];

const TeamGallery = () => {
  return (
    <div className='bg-SecondaryColor-0 py-10 px-6 flex justify-center items-center min-h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6'>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className='overflow-hidden inline-block transition duration-300 relative'
          >
            <img
              src={member.image}
              draggable={false}
              alt={member.name}
              className='w-full object-cover object-center'
            />
            <div className='absolute z-10 top-8 right-7 text-white text-center py-2'>{member.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGallery;
