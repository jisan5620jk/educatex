import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight, BsCartPlus } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import productImage from "/images/shop-details-thumb.png";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";

const ShopDetails = () => {
  // Rating
  const [rating, setRating] = useState(0);

  // Product Quantity increase decrease

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Tab
  const [activeTab, setActiveTab] = useState(0);
  const contentRefs = useRef([]);

  useEffect(() => {
    if (contentRefs.current[activeTab]) {
      const activeEl = contentRefs.current[activeTab];
      activeEl.style.maxHeight = activeEl.scrollHeight + "px";
    }

    contentRefs.current.forEach((el, idx) => {
      if (el && idx !== activeTab) {
        el.style.maxHeight = "0px";
      }
    });
  }, [activeTab]);

  return (
    <>
      <HelmetChanger title={"Project Details Inner Page Style One"} />
      <BreadCrumb2
        breadCrumbTitle={"Product Details"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbIcon2={<BsArrowUpRight />}
        url={"/shop"}
        breadCrumbLink={"Shop"}
        breadCrumbText={"Brave New Brand"}
      />
      <section className="">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0 p-10 bg-white rounded-2xl shadow-shades relative z-20 -mt-[62px]">
            <div className="w-full 2xl:pr-[60px]">
              <img
                src={productImage}
                alt="Brave New World"
                className="rounded-lg"
              />
            </div>

            <div className="">
              <div>
                <h2 className="font-Outfit text-[32px] font-semibold text-HeadingColor-0 mb-1">
                  Brave New World
                </h2>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex text-ReviewText-0 text-2xl">
                    {[...Array(4)].map((_, i) => (
                      <IoMdStar key={i} />
                    ))}
                    <IoMdStarHalf />
                  </span>
                  <span className="font-Outfit text-HeadingColor-0 text-lg">
                    (02 Reviews)
                  </span>
                </div>
                <p className="font-Outfit text-PrimaryColor-0 text-[22px] font-medium">
                  $70{" "}
                  <span className="text-gray-400 line-through font-normal ml-1">
                    $100
                  </span>
                </p>
                <p className="font-OpenSans text-TextColor-0 mt-5 max-w-[580px] w-full">
                  Educate the ultimate destination for knowledge seekers and
                  educators alike. We are committed to transforming special
                  education impact global channels without standards compliant
                  systems reintermediate virtual mindshare for synergistic
                  platforms dramatically
                </p>
              </div>

              <div className="flex items-center space-x-4 my-9">
                {/* Quantity Selector */}
                <div className="flex items-center border border-SecondaryColor-0 border-opacity-10 rounded-full w-[160px] relative">
                  <button
                    onClick={increaseQuantity}
                    className="absolute top-2 right-5 inline-block text-sm text-TextColor-0"
                  >
                    <FaChevronUp />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className="w-full h-[50px] text-left pl-7 border-none bg-transparent outline-none"
                  />
                  <button
                    onClick={decreaseQuantity}
                    className="absolute bottom-2 right-5 inline-block text-sm text-TextColor-0"
                  >
                    <FaChevronDown />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button className="primary-btn2 capitalize">
                  Add to Cart
                  <BsCartPlus />
                </button>
              </div>

              <div className="mt-6">
                <div className="space-y-2 text-base font-medium text-black">
                  <div className="flex">
                    <span className="w-24 font-Outfit text-HeadingColor-0">
                      Colors
                    </span>
                    <span className="mr-2">:</span>
                    <span className="font-Outfit text-TextColor-0 font-light">
                      Black & Yellow
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-24 font-Outfit text-HeadingColor-0">
                      Category
                    </span>
                    <span className="mr-2">:</span>
                    <span className="font-Outfit text-TextColor-0 font-light">
                      Historical Fiction
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-24 font-Outfit text-HeadingColor-0">
                      Tags
                    </span>
                    <span className="mr-2">:</span>
                    <span className="font-Outfit text-TextColor-0 font-light">
                      Design, Business
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-28 bg-white shadow rounded-lg">
        <div className="Container">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <ul className="flex space-x-6 text-sm font-medium">
              <li
                className={`cursor-pointer font-Outfit text-xl transition-all duration-500 font-medium pb-2 ${
                  activeTab === 0
                    ? "border-b-2 border-PrimaryColor-0 text-PrimaryColor-0"
                    : "text-HeadingColor-0 hover:text-PrimaryColor-0"
                }`}
                onClick={() => setActiveTab(0)}
              >
                Reviews
              </li>
              <li
                className={`cursor-pointer font-Outfit text-xl transition-all duration-500 font-medium pb-2 ${
                  activeTab === 1
                    ? "border-b-2 border-PrimaryColor-0 text-PrimaryColor-0"
                    : "text-HeadingColor-0 hover:text-PrimaryColor-0"
                }`}
                onClick={() => setActiveTab(1)}
              >
                Description
              </li>
            </ul>
          </div>

          {/* Reviews Tab */}
          <div
            ref={(el) => (contentRefs.current[0] = el)}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div>
              <div className="flex items-start gap-3 mt-8">
                <div className="text-[80px] text-gray-300 -mt-2">
                  <HiUserCircle />
                </div>
                <div>
                  <div className="flex text-ReviewText-0 mb-2">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaStar className="text-gray-300" />
                  </div>
                  <div className="flex items-center gap-10 mb-1">
                    <h4 className="font-Outfit text-HeadingColor-0 font-medium text-lg">
                      Jhon D. Alexon
                    </h4>
                    <p className="font-OpenSans text-TextColor-0 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[26px] before:w-3 before:h-[1px] before:bg-SecondaryColor-0">
                      Feb 29, 2025
                    </p>
                  </div>
                  <p className="font-OpenSans text-TextColor-0">
                    Dramatically reinvent adaptive bandwidth vis reliable
                    infrastructures to the progressively iterate distributed
                    interfaces.
                  </p>
                </div>
              </div>
              <div className="mt-16">
                <h3 className="font-Outfit text-HeadingColor-0 text-xl mb-2">
                  Add a Review
                </h3>
                <p className="font-OpenSans text-TextColor-0 mb-6">
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                <form className="space-y-5">
                  <div className="flex items-center space-x-2">
                    <span className="font-Outfit text-HeadingColor-0 font-light">
                      Your Rating:
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`cursor-pointer ${
                            i < rating ? "text-yellow-500" : "text-gray-300"
                          }`}
                          onClick={() => setRating(i + 1)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <label htmlFor="name">
                      Name*
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name"
                        className="mt-2 w-full border border-gray-200 px-6 py-3.5 rounded-md hover:border-PrimaryColor-0 focus:border-PrimaryColor-0 transition-all duration-500 outline-none"
                        required
                      />
                    </label>
                    <label htmlFor="email">
                      E-Mail*
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter E-Mail"
                        className="mt-2 w-full border border-gray-200 px-6 py-3.5 rounded-md hover:border-PrimaryColor-0 focus:border-PrimaryColor-0 transition-all duration-500 outline-none"
                      />
                    </label>
                  </div>

                  <label htmlFor="message">
                    Comment
                    <textarea
                      rows="5"
                      name="message"
                      id="message"
                      placeholder="Write Comments"
                      className="mt-2 w-full border border-gray-200 px-6 py-3.5 rounded-md hover:border-PrimaryColor-0 focus:border-PrimaryColor-0 transition-all duration-500 outline-none resize-none"
                    />
                  </label>
                  <button type="submit" className="primary-btn2">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Description Tab */}
          <div
            ref={(el) => (contentRefs.current[1] = el)}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="text-TextColor-0 font-OpenSans max-w-[930px] w-full">
              <p className="font-OpenSans text-TextColor-0 mt-6">
                Certainly! Brave New World by Aldous Huxley is a dystopian novel
                that envisions a future society governed by technological
                advancements and strict social control. Set in the World State,
                a society where people are genetically engineered and
                conditioned from birth, the novel explores themes of conformity,
                consumerism, and the loss of individuality.
              </p>
              <p className="mt-6 font-OpenSans text-TextColor-0">
                In this world, emotions and deep relationships are discouraged,
                replaced by instant gratification and artificial happiness
                through the use of a drug called soma. The population is divided
                into castes, with Alphas at the top and Epsilons at the bottom,
                each designed for specific roles in society. The novel follows
                characters like Bernard Marx, an outsider who questions the
                system, and John the Savage, who struggles to reconcile his
                natural human emotions with the sterile, controlled world of the
                future.
              </p>
              <p className="mt-6 font-OpenSans text-TextColor-0">
                Huxley’s work is often compared to 1984 by George Orwell, but
                while Orwell’s dystopia is ruled by oppression and fear, Brave
                New World presents a world where people are controlled through
                pleasure and distraction. The novel remains a powerful critique
                of unchecked technological progress and the dangers of
                sacrificing individuality for stability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetails;
