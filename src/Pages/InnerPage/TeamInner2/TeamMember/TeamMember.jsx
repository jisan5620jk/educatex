import teamThumb from '/images/team-image.png';
import teamThumb2 from '/images/team-image2.png';
import teamThumb3 from '/images/team-image3.png';
import teamThumb4 from '/images/team-image4.png';
import teamThumb5 from '/images/team-image5.png';
import teamThumb6 from '/images/team-image6.png';
import TeamCard from './TeamCard';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6';
import { IoShareSocialOutline } from 'react-icons/io5';

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: 'Anjelina Jholi',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'CEO & Founder',
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: 'Jone D. Alexon',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'Excutive Officer',
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: 'Beg Artugrul',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'IT Expert',
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 4,
    teamThumb: teamThumb4,
    teamTitle: 'David Miller',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'Web Developer',
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 5,
    teamThumb: teamThumb5,
    teamTitle: 'Alaina Melvis',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'App Developer',
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 6,
    teamThumb: teamThumb6,
    teamTitle: 'Melt Jhonson',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'Team Leader',
    teamShareIcon: <IoShareSocialOutline />,
  },
];

const TeamMember = () => {
  return (
    <section className='bg-BodyBg-0 py-16 md:py-20 lg:py-28 relative'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {teamData.map(
            ({
              id,
              teamThumb,
              teamTitle,
              socialIcon,
              socialIcon2,
              socialIcon3,
              socialIcon4,
              teamDesc,
              teamShareIcon,
            }) => {
              return (
                <div key={id}>
                  <TeamCard
                    teamThumb={teamThumb}
                    teamTitle={teamTitle}
                    socialIcon={socialIcon}
                    socialIcon2={socialIcon2}
                    socialIcon3={socialIcon3}
                    socialIcon4={socialIcon4}
                    teamDesc={teamDesc}
                    teamShareIcon={teamShareIcon}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
