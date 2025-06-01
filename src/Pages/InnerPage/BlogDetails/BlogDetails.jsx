import blog_detailsThumb from "/images/blog-details-thumb.png";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import { BsArrowUpRight } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaReply } from "react-icons/fa6";

const BlogDetails = () => {
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
      <div className="py-16 md:py-20 lg:py-28 text-gray-800">
        <div className="Container">
          <div className="mb-10">
            <img
              src={blog_detailsThumb}
              draggable={false}
              alt="Blog Details Image"
            />
          </div>
          {/* Article Content */}
          <article className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Trends that are shaping the Learning experience
            </h1>

            <p>
              Globally engage cross-media leadership skills before cross-media
              innovation forward meaning flexible whereas process-centric models
              problem. Efficiently transform customer-directed alignments for
              future mindshare. Dramatically harness cross-platform business
              models before proactive internal or organic sources. Assertively
              incentivize standards in services. Collaboratively formulate
              standards in innovation with worldwide value.
            </p>

            <p>
              Dramatically harness cross-platform best practices whereas
              business services. Conveniently standardize innovation with
              schemas. Globally engage leadership skills before tactical
              internal or organic sources. Efficiently transform
              customer-directed alignments for future mindshare. Collaboratively
              formulate standards in innovation with worldwide value.
              Interactively recaptiualize clicks-and-mortar results whereas
              intuitive total tactical capital before global architectures.
              Holisticly engage cross-media leadership skills before proactive
              customer service.
            </p>

            {/* Quote Block */}
            <blockquote className="p-4 border-l-4 border-PrimaryColor-0 bg-gray-100 italic text-lg">
              “Globally engage cross-media leadership skills before cross-media
              great opportunities whereas process-centric models efficiently.”
            </blockquote>

            {/* Learn Benefits */}
            <h2 className="text-2xl font-semibold mt-8">Learn Benefits</h2>

            <p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
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
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <FaCheckCircle className="text-PrimaryColor-0" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-8">
              {["Technology", "Education", "Learning"].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Post Navigation */}
            <div className="flex justify-between items-center mt-8 border-t pt-6">
              <button className="flex items-center gap-2 text-sm text-PrimaryColor-0 hover:underline">
                <FaArrowLeft /> Previous Posts
              </button>
              <button className="flex items-center gap-2 text-sm text-PrimaryColor-0 hover:underline">
                Next Posts <FaArrowRight />
              </button>
            </div>
          </article>

          {/* Comments Section */}
          <section className="mt-16 space-y-6">
            <h3 className="text-xl font-semibold">Comments (1)</h3>

            <div className="p-4 rounded-md border bg-gray-50">
              <div className="flex items-start gap-4">
                <img
                  src="https://i.pravatar.cc/60?img=1"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800">
                      John D. Alexson
                    </h4>
                    <button className="text-sm text-PrimaryColor-0 hover:underline flex items-center gap-1">
                      <FaReply className="text-xs" /> Reply
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">
                    Media leadership skills before cross-media innovation
                    forward meaning flexible whereas process-centric models new
                    online education. Efficiently transform customer directed
                    alignments for the future and more.
                  </p>
                  <span className="text-xs text-gray-500 mt-1 block">
                    May 5, 2025
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Comment Form */}
          <section className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Post a Comment</h3>
            <p className="text-sm text-gray-500 mb-6">
              Your email address will not be published. So, don’t worry.
            </p>
            <form className="space-y-6">
              <textarea
                className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryColor-0"
                rows="5"
                placeholder="Write Comments..."
              ></textarea>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter your Name *"
                  className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-PrimaryColor-0"
                />
                <input
                  type="email"
                  placeholder="Your E-Mail *"
                  className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-PrimaryColor-0"
                />
              </div>

              <input
                type="url"
                placeholder="Website URL"
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-PrimaryColor-0"
              />

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-PrimaryColor-0" />
                Save my information in this browser for next comments
              </label>

              <button
                type="submit"
                className="bg-PrimaryColor-0 text-white px-6 py-3 rounded-md hover:bg-PrimaryColor-0-dark transition"
              >
                Post Comment
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
