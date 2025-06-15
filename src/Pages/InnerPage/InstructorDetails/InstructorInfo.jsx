import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPinterestP,
} from "react-icons/fa";
import { FaRegEnvelope, FaXTwitter } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { IoDocumentTextOutline, IoLocationSharp } from "react-icons/io5";
import instructorThumb from "/images/instructor-details-thumb.png";
import { PiUsersThree } from "react-icons/pi";

const InstructorInfo = () => {
  return (
    <section>
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-7 p-8 rounded-2xl bg-white shadow-shades -mt-[62px] relative z-20">
            <div className="flex items-center gap-7">
              <div>
                <img
                  src={instructorThumb}
                  draggable={false}
                  alt="Instructor Thumb"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-Outfit text-[28px] text-HeadingColor-0 font-semibold">
                  Anjelina Jholi
                </h3>
                <div className="flex items-center py-3">
                  {/* Stars */}
                  {[...Array(5)].map((_, i) => {
                    const starClass =
                      i < 4
                        ? "text-ReviewText-0"
                        : "text-ReviewText-0 text-opacity-50";
                    return (
                      <div key={i} className={`text-[22px] ${starClass}`}>
                        <IoMdStar />
                      </div>
                    );
                  })}
                  <span className="ml-1 font-Outfit font-medium text-HeadingColor-0">
                    (4.5)
                  </span>
                </div>
                <h6 className="font-Outfit text-sm text-PrimaryColor-0 inline-block px-5 py-1.5 bg-PrimaryColor-0 bg-opacity-10 border border-PrimaryColor-0 border-opacity-30 rounded-3xl mb-6">
                  UI/UX Designer
                </h6>
                <div className="flex items-center gap-7">
                  <div
                    className={`font-Outfit text-HeadingColor-0 flex items-center gap-1`}
                  >
                    <IoDocumentTextOutline size={18} className="text-PrimaryColor-0" />
                    12 Lessons
                  </div>
                  <div
                    className={`font-Outfit text-HeadingColor-0 flex items-center gap-2`}
                  >
                    <PiUsersThree size={18} className="text-PrimaryColor-0" />
                    160 Students
                  </div>
                </div>
                <ul className="flex gap-3 mt-12">
                  <li>
                    <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                      <FaFacebookF />
                    </button>
                  </li>
                  <li>
                    <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                      <FaXTwitter />
                    </button>
                  </li>
                  <li>
                    <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                      <FaLinkedinIn />
                    </button>
                  </li>
                  <li>
                    <button className="size-9 rounded-full text-sm bg-white border border-SecondaryColor-0 border-opacity-15 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                      <FaPinterestP />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          <div className="lg:pl-10 lg:border-l border-HeadingColor-0 border-opacity-10 inline-block">
            <h2 className="font-Outfit text-2xl font-medium text-HeadingColor-0 mb-4">About Me</h2>
            <p className="mb-10 font-OpenSans text-TextColor-0 max-w-[460px] w-full">
              Hello I’m Anjelina Watson destination for knowledge seekers and
              We are committed to transforming special education impact global
              without standards compliant.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaRegEnvelope className="text-PrimaryColor-0" />
                <a
                  href="mailto:example@gmail.com"
                  title="example@gmail.com"
                  className="font-OpenSans text-[15px] text-HeadingColor-0"
                >
                  example@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-PrimaryColor-0" />
                <a
                  href="call:+1234567890"
                  title="+1234567890" className="font-OpenSans text-[15px] text-HeadingColor-0">+123 (4567) 890</a>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationSharp className="text-PrimaryColor-0" />
                <p className="font-OpenSans text-[15px] text-HeadingColor-0">102/B main road, California-USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorInfo;
