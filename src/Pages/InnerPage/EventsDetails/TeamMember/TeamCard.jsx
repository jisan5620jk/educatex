/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  teamTitle,
  teamUrl,
  teamDesc,
  ratingFill,
  ratingHalf,
  ratingContant,
  cardBg = "bg-PrimaryColor-0 bg-opacity-[7%]",
  descBg = "bg-PrimaryColor-0 bg-opacity-10",
  descBorder = "border-PrimaryColor-0 border-opacity-30",
  descText = "text-PrimaryColor-0",
  hoverText = "hover:text-PrimaryColor-0",
  gradientFrom = "from-PrimaryColor-0 from-20%",
  gradientVia = "via-transparent",
  gradientTo = "to-transparent",
}) => {
  return (
    <div className={`group relative rounded-[20px] p-3 sm:p-5 ${cardBg}`}>
      <div className="team-thumb overflow-hidden rounded-[14px] relative z-10">
        <div
          className={`
            absolute left-0 bottom-0 w-full h-0 transition-all duration-500 group-hover:h-full z-10
            bg-gradient-to-t ${gradientFrom} ${gradientVia} ${gradientTo}
          `}
        ></div>

        <img src={teamThumb} alt="Team Image" className="w-full relative z-0" />

        {/* Social icons */}
        {[socialIcon, socialIcon2, socialIcon3].map((icon, i) => (
          <div
            key={i}
            style={{
              left: `${25 + i * 18}%`,
              transitionDuration: `${300 + i * 200}ms`,
            }}
            className="absolute z-20 -bottom-10 transition-all group-hover:bottom-5"
          >
            <Link to={"/"}>
              <button className="size-9 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-30 border border-white transition-all duration-500 hover:text-PrimaryColor-0 text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {icon}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Info section */}
      <div className="bg-transparent relative transition-all duration-500 rounded-md text-center pt-3 sm:pt-7 pb-1">
        <Link
          to={teamUrl}
          className={`font-Outfit font-medium text-2xl text-HeadingColor-0 transition-all duration-500 ${hoverText}`}
        >
          {teamTitle}
        </Link>
        <p
          className={`
            font-Outfit text-sm px-5 py-[5px] rounded-3xl font-medium mt-3 inline-block
            ${descBg} ${descBorder} ${descText} border
          `}
        >
          {teamDesc}
        </p>

        <div className="flex items-center justify-center gap-1 text-ReviewText-0 text-[15px] mt-[19px]">
          {ratingFill}
          {ratingFill}
          {ratingFill}
          {ratingFill}
          {ratingHalf}
          <span className="font-Outfit ml-1 text-HeadingColor-0 text-base">
            {ratingContant}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
