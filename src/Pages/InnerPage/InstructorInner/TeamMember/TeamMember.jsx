import teamThumb from "/images/team-thumb11.png";
import teamThumb2 from "/images/team-thumb12.png";
import teamThumb3 from "/images/team-thumb13.png";
import teamThumb4 from "/images/team-thumb14.png";
import teamThumb5 from "/images/team-thumb15.png";
import teamThumb6 from "/images/team-thumb16.png";
import shape from "/images/team-shape1.png";
import shape2 from "/images/team-shape2.png";
import TeamCard from "./TeamCard";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import subTilteIcon from "/images/sub-title2.png";

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamUrl: "/team_details",
    teamTitle: "Jone D. Alexon",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "Web Developer",
    ratingFill: <BsStarFill />,
    ratingHalf: <BsStarHalf />,
    ratingContant: "(4.5)",
    cardBg: "bg-PrimaryColor3-0 bg-opacity-[7%]",
    descBg: "bg-PrimaryColor3-0 bg-opacity-10",
    descBorder: "border-PrimaryColor3-0 border-opacity-30",
    descText: "text-PrimaryColor3-0",
    hoverText: "hover:text-PrimaryColor3-0",
    gradientFrom: "from-PrimaryColor3-0 from-20%",
    gradientVia: "via-transparent",
    gradientTo: "to-transparent",
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamUrl: "/team_details",
    teamTitle: "Anjelina M. Jholi",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "Graphic Designer",
    ratingFill: <BsStarFill />,
    ratingHalf: <BsStarHalf />,
    ratingContant: "(4.5)",
    cardBg: "bg-PrimaryColor-0 bg-opacity-[7%]",
    descBg: "bg-PrimaryColor-0 bg-opacity-10",
    descBorder: "border-PrimaryColor-0 border-opacity-30",
    descText: "text-PrimaryColor-0",
    hoverText: "hover:text-PrimaryColor-0",
    gradientFrom: "from-PrimaryColor-0 from-20%",
    gradientVia: "via-transparent",
    gradientTo: "to-transparent",
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamUrl: "/team_details",
    teamTitle: "Alaina Melvis",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "App Developer",
    ratingFill: <BsStarFill />,
    ratingHalf: <BsStarHalf />,
    ratingContant: "(4.5)",
    cardBg: "bg-PrimaryColor2-0 bg-opacity-[7%]",
    descBg: "bg-PrimaryColor2-0 bg-opacity-10",
    descBorder: "border-PrimaryColor2-0 border-opacity-30",
    descText: "text-PrimaryColor2-0",
    hoverText: "hover:text-PrimaryColor2-0",
    gradientFrom: "from-PrimaryColor2-0 from-20%",
    gradientVia: "via-transparent",
    gradientTo: "to-transparent",
  },
  {
    id: 4,
    teamThumb: teamThumb4,
    teamUrl: "/team_details",
    teamTitle: "David Jhonson",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "UI/UX Designer",
    ratingFill: <BsStarFill />,
    ratingHalf: <BsStarHalf />,
    ratingContant: "(4.5)",
    cardBg: "bg-PrimaryColor4-0 bg-opacity-[7%]",
    descBg: "bg-PrimaryColor4-0 bg-opacity-10",
    descBorder: "border-PrimaryColor4-0 border-opacity-30",
    descText: "text-PrimaryColor4-0",
    hoverText: "hover:text-PrimaryColor4-0",
    gradientFrom: "from-PrimaryColor4-0 from-20%",
    gradientVia: "via-transparent",
    gradientTo: "to-transparent",
  },
  {
    id: 5,
    teamThumb: teamThumb5,
    teamUrl: "/team_details",
    teamTitle: "Emily R. Watson",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "Full Stack Engineer",
    ratingFill: <BsStarFill />,
    ratingHalf: <BsStarHalf />,
    ratingContant: "(4.5)",
    cardBg: "bg-PrimaryColor3-0 bg-opacity-[7%]",
    descBg: "bg-PrimaryColor3-0 bg-opacity-10",
    descBorder: "border-PrimaryColor3-0 border-opacity-30",
    descText: "text-PrimaryColor3-0",
    hoverText: "hover:text-PrimaryColor3-0",
    gradientFrom: "from-PrimaryColor3-0 from-20%",
    gradientVia: "via-transparent",
    gradientTo: "to-transparent",
  },
  {
    id: 6,
    teamThumb: teamThumb6,
    teamUrl: "/team_details",
    teamTitle: "Michael B. Clarke",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "Project Manager",
    ratingFill: <BsStarFill />,
    ratingHalf: <BsStarHalf />,
    ratingContant: "(4.5)",
    cardBg: "bg-PrimaryColor2-0 bg-opacity-[7%]",
    descBg: "bg-PrimaryColor2-0 bg-opacity-10",
    descBorder: "border-PrimaryColor2-0 border-opacity-30",
    descText: "text-PrimaryColor2-0",
    hoverText: "hover:text-PrimaryColor2-0",
    gradientFrom: "from-PrimaryColor2-0 from-20%",
    gradientVia: "via-transparent",
    gradientTo: "to-transparent",
  },
];

const TeamMember = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28 relative z-10 team-member">
      <div className="absolute left-32 top-26 animate-wiggle hidden 3xl:block">
        <img src={shape} draggable={false} alt="Shape" />
      </div>
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Outfit font-medium text-PrimaryColor-0 uppercase flex items-center justify-center gap-3">
            <img src={subTilteIcon} draggable={false} alt="Icon" /> INstructor
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4">
            Introducing The Educators and<br /> Professional Instructor
          </h1>
        </div>
        <div className="mt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((teams) => {
            return (
              <div key={teams.id}>
                <TeamCard {...teams} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute right-7 bottom-0 hidden 3xl:block">
        <img
          src={shape2}
          draggable={false}
          alt="Shape"
          className="animate-dance"
        />
      </div>
    </section>
  );
};

export default TeamMember;
