import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import subTilteIcon from "/images/sub-title2.png";

const Contact = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <div>
              <h5 className="zoom-in font-Outfit font-medium text-PrimaryColor-0 uppercase flex items-center gap-3">
                <img src={subTilteIcon} draggable={false} alt="Icon" /> Get In
                Touch
              </h5>
              <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4">
                Trusted by The Genius
                <br /> People with EducateX
              </h1>
              <p className="fade-up font-OpenSans text-TextColor-0 pt-2">
                Globally engage cross-media leadership skills before cross-media
                <br className="hidden md:block" /> develope standardized
                platforms without robust
              </p>
            </div>
            <div className="box-row bg-BodyBg-0 rounded-xl p-4 sm:p-10 mt-10">
              <div className="box flex items-center gap-5 group border-b border-dashed border-HeadingColor-0 border-opacity-20 pb-5">
                <div className="size-[70px] bg-white rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100">
                  <FaPhoneAlt size={"22"} />
                </div>
                <div className="flex-1">
                  <h6 className="font-OpenSans text-TextColor-0">
                    Call us Anytime
                  </h6>
                  <a href="tel:+1234567890" title="+123 - (4567) - 890">
                    <button className="font-Outfit text-lg sm:text-xl text-HeadingColor-0 font-medium mt-1">
                      +123 - (4567) - 890
                    </button>
                  </a>
                </div>
              </div>
              <div className="box flex items-center gap-5 group border-b border-dashed border-HeadingColor-0 border-opacity-20 py-5">
                <div className="size-[70px] bg-white rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100">
                  <FaRegEnvelopeOpen size={"25"} />
                </div>
                <div className="flex-1">
                  <h6 className="font-OpenSans text-TextColor2-0">E-Mail us</h6>
                  <a
                    href={"mailto:example@gmail.com"}
                    title="example@gmail.com"
                  >
                    <button className="font-Outfit text-lg sm:text-xl text-HeadingColor-0 font-medium mt-1">
                      example@gmail.com
                    </button>
                  </a>
                </div>
              </div>
              <div className="box flex items-center gap-5 group pt-5 pb-2">
                <div className="size-[70px] bg-white rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100">
                  <IoLocationOutline size={"32"} />
                </div>
                <div className="flex-1">
                  <h6 className="font-OpenSans text-TextColor-0">
                    Our Locations
                  </h6>
                  <p className="font-OpenSans text-HeadingColor-0 mt-2">
                    102/B Soltek New Elephant Road <br /> California, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-20 bg-white shadow-shades pt-16 px-4 sm:px-6 md:px-[50px] lg:px-4 xl:px-10 2xl:px-[50px] rounded-xl">
            <div className="text-center">
              <h5 className="zoom-in font-Outfit font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
                CONTACT US
              </h5>
              <h1 className="font-Outfit font-semibold text-HeadingColor-0 inline-block text-2xl sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[30px] lg:leading-[44px] xl:text-[32px] xl:leading-[44px] 2xl:text-[34px] 2xl:leading-[44px] relative pb-4">
                Feel Free to Contact Us
              </h1>
            </div>
            <form
              action="https://formspree.io/f/xayrekgy"
              method="post"
              className="box-row flex flex-col gap-y-5 pt-10 pb-12"
            >
              <div className="box grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative inline-block">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name*"
                    required
                    className="font-Outfit text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-15 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                  />
                  <FaUser
                    size={"14"}
                    className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                  />
                </div>
                <div className="relative inline-block">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter E-Mail*"
                    required
                    className="font-Outfit text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-15 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                  />
                  <HiOutlineMailOpen
                    size={"16"}
                    className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                  />
                </div>
              </div>
              <div className="box grid grid-cols-1 sm:grid-cols-2 gap-5">
                <select
                  name="select"
                  id="select"
                  className="font-Outfit text-TextColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-15 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                >
                  <option value="subject" className="text-TextColor-0">
                    Your Subject
                  </option>
                  <option value="subject2" className="text-TextColor-0">
                    Bangla
                  </option>
                  <option value="subject3" className="text-TextColor-0">
                    Arabic
                  </option>
                  <option value="subject4" className="text-TextColor-0">
                    China
                  </option>
                </select>
                <div className="relative inline-block">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Enter Number*"
                    required
                    className="font-Outfit text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-15 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                  />
                  <MdCall
                    size={"16"}
                    className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                  />
                </div>
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Write a short meassage..."
                className="box font-Outfit text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-15 rounded py-2 px-6 h-[120px] w-full focus:outline-PrimaryColor-0 resize-none"
              ></textarea>
              <label
                htmlFor="terms"
                className="box font-OpenSans text-TextColor-0 text-sm flex items-center gap-2 cursor-pointer"
              >
                <input type="checkbox" name="terms" id="terms" />I accept all
                terms & conditions.
              </label>
              <div className="box inline-block mt-2">
                <button className="primary-btn2">{`Submit Now`}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
