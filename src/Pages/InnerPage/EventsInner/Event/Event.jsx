import { FaLocationDot } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";
import { HiArrowLongRight } from "react-icons/hi2";
import EventCard from "./EventCard";
import eventThumb from "/images/event-thumb.png";
import eventThumb2 from "/images/event-thumb2.png";
import eventThumb3 from "/images/event-thumb3.png";
import shape from "/images/event-shape.png";
import subTilteIcon from "/images/sub-title2.png";

const eventData = [
  {
    id: 1,
    eventDate: 16,
    eventMonth: "January",
    eventYear: 2025,
    eventTitle: "Business Innovation And Development Conf.",
    eventPlaceIcon: <FaLocationDot />,
    eventPlace: "California, USA",
    eventTimeIcon: <LuClock3 />,
    eventTime: "(7.00 am to 9.00 am)",
    eventThumb: eventThumb,
    eventUrl: "/event_details",
    eventBtnText: "Join Events",
    eventBtnIcon: <HiArrowLongRight />,
    bgColor: "bg-PrimaryColor3-0 bg-opacity-10",
    textColor: "text-PrimaryColor3-0",
    hoverText: "group-hover:text-PrimaryColor3-0",
    iconColor: "text-PrimaryColor3-0",
    btnColor:
      "text-PrimaryColor3-0 bg-PrimaryColor3-0 bg-opacity-10 border-PrimaryColor3-0 border-opacity-30 before:bg-PrimaryColor3-0",
  },
  {
    id: 2,
    eventDate: 21,
    eventMonth: "January",
    eventYear: 2025,
    eventTitle: "Career Guidance And Networking event",
    eventPlaceIcon: <FaLocationDot />,
    eventPlace: "California, USA",
    eventTimeIcon: <LuClock3 />,
    eventTime: "(7.00 am to 9.00 am)",
    eventThumb: eventThumb2,
    eventUrl: "/event_details",
    eventBtnText: "Join Events",
    eventBtnIcon: <HiArrowLongRight />,
    bgColor: "bg-PrimaryColor2-0 bg-opacity-10",
    textColor: "text-PrimaryColor2-0",
    hoverText: "group-hover:text-PrimaryColor2-0",
    iconColor: "text-PrimaryColor2-0",
    btnColor:
      "text-PrimaryColor2-0 bg-PrimaryColor2-0 bg-opacity-10 border-PrimaryColor2-0 border-opacity-30 before:bg-PrimaryColor2-0",
  },
  {
    id: 3,
    eventDate: 29,
    eventMonth: "January",
    eventYear: 2025,
    eventTitle: "Environmental Awarness Conference - 2025",
    eventPlaceIcon: <FaLocationDot />,
    eventPlace: "California, USA",
    eventTimeIcon: <LuClock3 />,
    eventTime: "(7.00 am to 9.00 am)",
    eventThumb: eventThumb3,
    eventUrl: "/event_details",
    eventBtnText: "Join Events",
    eventBtnIcon: <HiArrowLongRight />,
    bgColor: "bg-PrimaryColor-0 bg-opacity-10",
    textColor: "text-PrimaryColor-0",
    hoverText: "group-hover:text-PrimaryColor-0",
    iconColor: "text-PrimaryColor-0",
    btnColor:
      "text-PrimaryColor-0 bg-PrimaryColor-0 bg-opacity-10 border-PrimaryColor-0 border-opacity-30 before:bg-PrimaryColor-0",
  },
  {
    id: 4,
    eventDate: 16,
    eventMonth: "March",
    eventYear: 2025,
    eventTitle: "Tech Leadership & AI Future Trends",
    eventPlaceIcon: <FaLocationDot />,
    eventPlace: "New York, USA",
    eventTimeIcon: <LuClock3 />,
    eventTime: "(10.00 am to 1.00 pm)",
    eventThumb: eventThumb2,
    eventUrl: "/event_details",
    eventBtnText: "Join Events",
    eventBtnIcon: <HiArrowLongRight />,
    bgColor: "bg-PrimaryColor4-0 bg-opacity-10",
    textColor: "text-PrimaryColor4-0",
    hoverText: "group-hover:text-PrimaryColor4-0",
    iconColor: "text-PrimaryColor4-0",
    btnColor:
      "text-PrimaryColor4-0 bg-PrimaryColor4-0 bg-opacity-10 border-PrimaryColor4-0 border-opacity-30 before:bg-PrimaryColor4-0",
  },
];

const Event = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-20 lg:pb-[120px] relative z-10">
      <div className="absolute left-36 top-24 hidden xl:hidden">
        <img
          src={shape}
          draggable={false}
          alt="Shape"
          className="animate-wiggle"
        />
      </div>
      <div className="Container">
        <div className="text-center">
          <h5 className="zoom-in font-Outfit font-medium text-PrimaryColor-0 uppercase flex items-center justify-center gap-3">
            <img src={subTilteIcon} draggable={false} alt="Icon" /> participate
            our events
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4">
            Upcoming Academic Meetups
            <br /> Workshops and Seminars
          </h1>
        </div>
        <div className="box-row event-card space-y-[18px] mt-[58px]">
          {eventData.map((events) => (
            <div key={events.id} className="box">
              <EventCard {...events} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
