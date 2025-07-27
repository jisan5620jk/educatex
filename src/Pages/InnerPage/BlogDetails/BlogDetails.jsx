import blog_detailsThumb from "/images/blog-details-thumb.png";
import author from "/images/bd-autor.png";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import { BsArrowUpRight } from "react-icons/bs";
import {
  FaCheck,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { LuCalendarFold } from "react-icons/lu";
import { AiOutlineComment } from "react-icons/ai";

import BoxReveal from "../../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const BlogDetails = () => {
  // Box Reveal

  BoxReveal();

  // Text Reveal

  TextReveal();

  // Image Reveal

  ImageReveal();

  return (
    <>
      <HelmetChanger title={"Blog Details Inner Page Style One"} />
      <BreadCrumb2
        breadCrumbTitle={"Blog Details"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbIcon2={<BsArrowUpRight />}
        url={"/blog"}
        breadCrumbLink={"Blog"}
        breadCrumbText={"trends that are shipping the..."}
      />
      <div className="Container lg:p-0">
        <div className="px-4 sm:px-7 md:px-10 lg:px-[50px] pt-4 sm:pt-7 md:pt-10 lg:pt-[50px] -mt-14 bg-white border border-SecondaryColor-0 border-opacity-10 rounded-xl relative z-20">
          <div className="mb-9 relative inline-block z-10">
            <img
              src={blog_detailsThumb}
              draggable={false}
              alt="Blog Details Image"
              className="w-full"
            />
            <h5 className="absolute bottom-7 left-7 inline-block px-7 py-2 rounded-full bg-PrimaryColor-0 text-white font-Outfit uppercase text-sm">
              Education
            </h5>
          </div>
          {/* Article Content */}
          <article className="">
            <div className="fade-up flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-4">
                <img src={author} alt="Anjelina Watson" draggable={false} />
                <h2 className="font-Outfit text-HeadingColor-0 font-medium">
                  Anjelina Watson
                </h2>
              </div>
              <div>
                <div className="flex items-center font-OpenSans text-TextColor-0 text-sm sm:text-base gap-2 sm:gap-6">
                  <div className="flex items-center gap-1">
                    <span className="text-lg text-PrimaryColor-0">
                      <LuCalendarFold />
                    </span>
                    <span>18 January, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg text-PrimaryColor-0">
                      <AiOutlineComment />
                    </span>
                    <span>(1) Comments</span>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="font-Outfit text-xl sm:text-3xl md:text-[38px] md:leading-[46px] font-semibold text-HeadingColor-0">
              Trends that are shaping the Learning experience
            </h1>

            <p className="fade-up font-OpenSans text-TextColor-0 mt-4">
              Globally engage cross-media leadership skills before cross-media
              innovation forward morph flexible whereas process-centric models
              predomin Efficiently that’s transform customer directed alignments
              for front-end meta Dramatically harness cross-platform best
              practices whereas centric data business services. Awesome
              Conveniently formula standards in innovation with wireless
              vertical intellectual capital before global architectures
              technically engage based results with visionary models.
              Dramatically harness-platform best practices whereas business
              services. Conveniently experiences. formula standards in
              innovation with wireless business services conveniently formula
              standards in innovation.
            </p>

            <p className="fade-up font-OpenSans text-TextColor-0 mt-7 mb-11">
              Dramatically harness cross-platform best practices whereas
              business services. Conveniently standards in innovation with
              wireless Globally engage leadership best breed to rather than
              bricks-and-clicks infomediaries monotonectally standards in
              innovation within wireless vertical intellectual global
              architectures engage based results main visionary models
              digitalizations completed business services. Conveniently formula
              standards in innovation with wireless vertical intellectual
              capital before global architectures technically business services.
              Conveniently formula standards in innovation with wireless
              vertical.
            </p>

            {/* Quote Block */}
            <blockquote className="fade-up font-Outfit font-medium text-HeadingColor-0 text-base sm:text-xl pl-7 sm:pl-12 md:pl-20 relative max-w-[850px] w-full">
              <span className="absolute top-3 left-0 w-5 sm:w-10 md:w-[64px] h-[2px] bg-PrimaryColor-0"></span>
              “Globally engage cross-media leadership skills before cross-media
              great opportunities whereas process-centric models efficiently.”
            </blockquote>

            {/* Learn Benefits */}
            <h2 className="fade-up font-Outfit text-xl sm:text-3xl md:text-[38px] md:leading-[46px] font-semibold text-HeadingColor-0 mt-8 mb-3">
              Learn Benefits
            </h2>

            <p className="fade-up font-OpenSans text-TextColor-0">
              Globally engage cross-media leadership skills before cross-media
              innovation forward meaning flexible whereas process-centric models
              problem. Efficiently transform customer-directed alignments for
              the future mindshare. Dramatically harness cross-platform best
              practices whereas process-centric models business services. After
              cross-media leadership skills in information without wireless
              scenario. Interactively recaptiualize clicks-and-mortar results
              whereas intuitive total tactical capital before global
              architectures. Holisticly engage proactive service.
            </p>

            {/* Benefits Grid */}
            <div className="box-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
              {[
                "Professional Team Member",
                "24/7 Problem Solving",
                "Solutions for Clients Problems",
                "24/7 Supports Available",
                "Free Tools Provides for Clients",
                "Free Tools Provides for Clients",
                "Free Tools Provides for Clients",
                "Extra Facilities Sales Increase",
                "Extra Facilities Sales Increase",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="box flex items-center gap-2 text-HeadingColor-0 font-Outfit text-"
                >
                  <FaCheck className="text-PrimaryColor-0 text-lg" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="box-row flex items-center justify-between gap-5 flex-wrap mt-[78px] mb-3">
              <div className="box flex flex-wrap items-center gap-2">
                {["Technology", "Education", "Learning"].map((tag, index) => (
                  <span
                    key={index}
                    className="px-5 py-1.5 font-Outfit bg-PrimaryColor-0 bg-opacity-10 text-HeadingColor-0 transition-all duration-500 hover:text-white rounded-full relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:scale-0 before:transition-all before:duration-500 before:-z-10 before:rounded-full before:bg-PrimaryColor-0 hover:before:scale-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="box flex gap-3">
                <li data-no-animate>
                  <button className="size-9 rounded-full text-sm bg-PrimaryColor-0 bg-opacity-10 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                    <FaFacebookF />
                  </button>
                </li>
                <li data-no-animate>
                  <button className="size-9 rounded-full text-sm bg-PrimaryColor-0 bg-opacity-10 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                    <FaXTwitter />
                  </button>
                </li>
                <li data-no-animate>
                  <button className="size-9 rounded-full text-sm bg-PrimaryColor-0 bg-opacity-10 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                    <FaLinkedinIn />
                  </button>
                </li>
                <li data-no-animate>
                  <button className="size-9 rounded-full text-sm bg-PrimaryColor-0 bg-opacity-10 flex items-center justify-center text-HeadingColor-0 overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                    <FaPinterestP />
                  </button>
                </li>
              </ul>
            </div>

            {/* Post Navigation */}
            <div className="box-row flex justify-between items-center mt-8 border-t py-8">
              <button className="box flex items-center gap-1 sm:gap-2 text-base sm:text-lg font-Outfit font-medium text-HeadingColor-0">
                <img
                  src="/images/pagination_icon1.png"
                  draggable={false}
                  alt="icon"
                  className="w-7 sm:w-[inherit]"
                />{" "}
                Previous Posts
              </button>
              <button className="box flex items-center gap-1 sm:gap-2 text-base sm:text-lg font-Outfit font-medium text-PrimaryColor-0">
                Next Posts{" "}
                <img
                  src="/images/pagination_icon2.png"
                  draggable={false}
                  alt="Icon"
                  className="w-7 sm:w-[inherit]"
                />
              </button>
            </div>
          </article>
        </div>

        {/* Comments Section */}
        <section className="mt-16">
          <h3 className="fade-up font-Outfit text-HeadingColor-0 text-2xl sm:text-[28px] font-medium mb-6">
            Comments (1)
          </h3>

          <div className="fade-up px-4 sm:px-10 py-4 sm:py-11 rounded-md bg-BodyBg-0">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div>
                <img
                  src="/images/aouthor.png"
                  alt="Avatar"
                  draggable={false}
                  className="w-[inherit]"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-Outfit text-HeadingColor-0 text-xl">
                    John D. Alexon
                  </h4>
                  <button className="bg-white rounded-full px-5 py-2 font-Outfit font-medium text-sm text-HeadingColor-0 border border-PrimaryColor-0 border-opacity-30 transition-all duration-500 hover:border-opacity-100 uppercase">
                    Reply
                  </button>
                </div>
                <span className="text-TextColor-0 font-OpenSans mt-1 block">
                  May 5, 2025
                </span>
                <p className="font-OpenSans text-TextColor-0 mt-2 max-w-[990px] w-full">
                  Media leadership skills before cross-media innovation forward
                  meaning flexible whereas process-centric models new online
                  education. Efficiently transform customer directed alignments
                  for the future and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment Form */}
        <section className="mt-16 pb-16 md:pb-20 lg:pb-28">
          <h3 className="fade-up font-Outfit text-HeadingColor-0 text-2xl sm:text-[28px] font-medium mb-5">
            Post a Comment
          </h3>
          <p className="fade-up font-OpenSans text-TextColor-0 mb-9">
            Your email address will not be published. So, don’t worry.
          </p>
          <form className="box-row space-y-6">
            <textarea
              className="box w-full px-7 py-4 rounded-md border border-HeadingColor-0 font-OpenSans border-opacity-10 transition-all duration-500 hover:border-PrimaryColor-0 focus:border-PrimaryColor-0 outline-none placeholder:text-TextColor-0"
              rows="5"
              placeholder="Write Comments..."
            ></textarea>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your Name *"
                className="box w-full px-7 py-4 rounded-md border border-HeadingColor-0 font-OpenSans border-opacity-10 transition-all duration-500 hover:border-PrimaryColor-0 focus:border-PrimaryColor-0 outline-none placeholder:text-TextColor-0"
              />
              <input
                type="email"
                placeholder="Your E-Mail *"
                className="box w-full px-7 py-4 rounded-md border border-HeadingColor-0 font-OpenSans border-opacity-10 transition-all duration-500 hover:border-PrimaryColor-0 focus:border-PrimaryColor-0 outline-none placeholder:text-TextColor-0"
              />
            </div>

            <input
              type="url"
              placeholder="Website URL"
              className="box w-full px-7 py-4 rounded-md border border-HeadingColor-0 font-OpenSans border-opacity-10 transition-all duration-500 hover:border-PrimaryColor-0 focus:border-PrimaryColor-0 outline-none placeholder:text-TextColor-0"
            />

            <label className="box flex items-center gap-2 font-OpenSans text-TextColor-0">
              <input type="checkbox" className="accent-PrimaryColor-0" />
              Save my information in this browser for next comments
            </label>

            <button type="submit" className="box primary-btn2 capitalize">
              Post Comment
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default BlogDetails;
