import {
  FaCalendarAlt,
  FaDollarSign,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import eventDetailsImg from "/images/event-detail-thumb.png";
import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { HiArrowNarrowRight } from "react-icons/hi";

const EventsDetails = () => {
  // Helper function to calculate remaining time
  const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0)
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    const timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };

    return timeLeft;
  };

  const targetDate = "2026-12-31T23:59:59"; // Change this to your desired date/time
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, [targetDate]);
  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="col-span-1 lg:col-span-2">
            <div>
              <img
                src={eventDetailsImg}
                draggable="false"
                alt="Event Details Image"
              />
            </div>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[34px] xl:leading-[44px] 2xl:text-[38px] 2xl:leading-[48px] text-HeadingColor-0 mt-[30px] mb-6">
              Business Innovation and Development Conf.
            </h1>
            <p className="font-OpenSans text-TextColor-0">
              Educate the ultimate destination for knowledge seekers and
              educators alike distinctively restore installed We are committed
              to transforming special education impact global channels base
              information with user without standards compliant systems base
              information with
            </p>
            <p className="font-OpenSans text-TextColor-0 mt-6 mb-[52px]">
              Quickly deploy performance based architectures vis-a-vis business
              bandwidth. Professionally disseminate best-of-breed customer
              service and virtual catalysts for change. Proactively visualize
              professional paradigms for robust imperatives. Seamlessly matrix
              robust infrastructures for premium innovation
            </p>
            <h4 className="font-Outfit text-xl sm:text-[22px] text-HeadingColor-0">
              {`Why you'll Learn`}
            </h4>
            <div className="space-y-3 mt-6 mb-7">
              {[
                "Covering essential topics like entrepreneurship, marketing",
                "Regular live sessions with industry professionals for real-time learning.",
                "Interactive tests to reinforce knowledge and track progress.",
                "Learning from successful business models and failures.",
                "A recognized certificate to boost credibility.",
              ].map((lears, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 font-OpenSans text-TextColor-0"
                >
                  <GiCheckMark className="text-PrimaryColor-0 text-lg" />
                  {lears}
                </div>
              ))}
            </div>
            <p className="font-OpenSans text-TextColor-0">
              Educate the ultimate destination for knowledge seekers and
              educators alike distinctively restore installed We are committed
              to transforming special education impact global
            </p>
          </div>
          <div>
            <div className="bg-white rounded-2xl p-6 border-t-4 border-green-500 rounded-t shadow-shades">
              <div className=" "></div>

              <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-6">
                Event Info
              </h2>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FaDollarSign className="text-PrimaryColor-0" />
                    Cost
                  </span>
                  <span className="text-PrimaryColor-0 font-semibold">$60</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-500" />
                    Start Date
                  </span>
                  <span>31 Dec, 2024</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FaClock className="text-gray-500" />
                    Time
                  </span>
                  <span>12.30 - 02.30</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FaUsers className="text-gray-500" />
                    Total Slot
                  </span>
                  <span>560+</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-gray-500" />
                    Location
                  </span>
                  <span>California, USA</span>
                </div>
              </div>

              <button className="mt-6 primary-btn2 w-full justify-center">
                BOOK NOW <HiArrowNarrowRight size={20} />
              </button>

              {/* Dynamic Countdown */}
              <div className="mt-6 px-4 2xl:px-7 pt-4 2xl:pt-7 pb-3 2xl:pb-6 bg-BodyBg-0 rounded-xl flex justify-between items-center gap-1 flex-wrap text-center">
                <div className="font-Outfit text-TextColor2-0 uppercase">
                  <div className="font-Outfit text-2xl text-PrimaryColor-0 flex flex-col items-center justify-center py-4 px-4 rounded-lg bg-white mb-2">
                    {timeLeft.days}
                  </div>
                  DAYS
                </div>
                <div className="font-Outfit text-TextColor2-0 uppercase">
                  <div className="font-Outfit text-2xl text-PrimaryColor2-0 flex flex-col items-center justify-center py-4 px-4 rounded-lg bg-white mb-2">
                    {timeLeft.hours}
                  </div>
                  HOUR
                </div>
                <div className="font-Outfit text-TextColor2-0 uppercase">
                  <div className="font-Outfit text-2xl text-PrimaryColor3-0 flex flex-col items-center justify-center py-4 px-4 rounded-lg bg-white mb-2">
                    {timeLeft.minutes}
                  </div>
                  MINS
                </div>
                <div className="font-Outfit text-TextColor2-0 uppercase">
                  <div className="font-Outfit text-2xl text-PrimaryColor4-0 flex flex-col items-center justify-center py-4 px-4 rounded-lg bg-white mb-2">
                    {timeLeft.seconds}
                  </div>
                  SEC
                </div>
              </div>
            </div>
            <div className="px-10 pt-8 pb-7 bg-BodyBg-0 mt-8 rounded-2xl">
              <div className="border-4 border-white w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615750.1120117789!2d34.09446658476134!3d31.50847548965568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2sGaza!5e0!3m2!1sen!2sbd!4v1748773470312!5m2!1sen!2sbd"
                  width="100%"
                  height="220px"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsDetails;
