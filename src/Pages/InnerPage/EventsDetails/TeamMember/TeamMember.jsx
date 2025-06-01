import teamThumb from "/images/team-thumb1.png";
import teamThumb2 from "/images/team-thumb2.png";
import teamThumb3 from "/images/team-thumb3.png";
import teamThumb4 from "/images/team-thumb4.png";
import TeamCard from "./TeamCard";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

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
    <section className="bg-white pb-16 md:pb-20 lg:pb-28 pt-10 md:pt-14 lg:pt-[74px] relative z-10">
      <div className="Container">
        <div>
          <h1 className="font-Outfit font-semibold text-2xl sm:text-3xl md:text-[38px] text-HeadingColor-0">
            Event Speakers
          </h1>
        </div>
        <div className="mt-[48px]">
          <Swiper {...settings}>
            {teamData.map((teams) => {
              return (
                <SwiperSlide key={teams.id}>
                  <TeamCard {...teams} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
