import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import productImage from "/images/shop-details-thumb.png";

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
      <section className="pt-16 md:pt-20 lg:pt-28 bg-white shadow rounded-lg">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="w-full">
              <img
                src={productImage}
                alt="Brave New World"
                className="rounded-lg w-full object-cover"
              />
            </div>

            <div className="">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Brave New World
                </h2>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="flex text-yellow-500">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaRegStar />
                  </span>
                  <span className="text-sm text-gray-500">(02 Reviews)</span>
                </div>
                <p className="text-green-600 text-xl font-semibold">
                  $70{" "}
                  <span className="text-gray-400 line-through ml-1">$100</span>
                </p>
                <p className="text-gray-600 mt-3">
                  Educate the ultimate destination for knowledge seekers and
                  educators alike. We are committed to transforming special
                  education impact global channels without standards compliant
                  systems reintermediate virtual mindshare for synergistic
                  platforms dramatically
                </p>
              </div>

              <div className="flex items-center space-x-4 my-7">
                {/* Quantity Selector */}
                <div className="flex items-center border rounded-md bg-gray-100">
                  <button
                    onClick={decreaseQuantity}
                    className="px-3 py-2 text-gray-700 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-12 text-center border-none bg-transparent focus:outline-none"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="px-3 py-2 text-gray-700 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 flex items-center">
                  Add to Cart
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 5M17 13l1.4 5M9 21h6m-6-4h6"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-6">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    <span className="font-semibold">Colors:</span> Black &
                    Yellow
                  </li>
                  <li>
                    <span className="font-semibold">Category:</span> Historical
                    Fiction
                  </li>
                  <li>
                    <span className="font-semibold">Tags:</span> Design,
                    Business
                  </li>
                </ul>
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
                className={`cursor-pointer pb-2 ${
                  activeTab === 0
                    ? "border-b-2 border-emerald-500 text-emerald-600"
                    : "text-gray-500 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab(0)}
              >
                Reviews
              </li>
              <li
                className={`cursor-pointer pb-2 ${
                  activeTab === 1
                    ? "border-b-2 border-emerald-500 text-emerald-600"
                    : "text-gray-500 hover:text-gray-800"
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
              <div className="mt-10 bg-white shadow rounded-lg">
                <div className="mb-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src="https://i.pravatar.cc/40"
                      className="w-10 h-10 rounded-full"
                      alt="avatar"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        David Alsson
                      </h4>
                      <p className="text-sm text-gray-400 mb-1">Feb 29, 2025</p>
                      <div className="flex text-yellow-500 mb-2">
                        {[...Array(4)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                        <FaStar className="text-gray-300" />
                      </div>
                      <p className="text-gray-600">
                        Dramatically reinvent adaptive bandwidth...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-6 bg-white shadow rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Add a Review</h3>

                <form className="space-y-5">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">
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
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <input
                      type="email"
                      placeholder="Enter E-Mail"
                      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <textarea
                    rows="4"
                    placeholder="Write Comments"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />

                  <button
                    type="submit"
                    className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded hover:bg-emerald-600 transition"
                  >
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
              <p>
                Certainly! Brave New World by Aldous Huxley is a dystopian novel
                that envisions a future society governed by technological
                advancements and strict social control. Set in the World State,
                a society where people are genetically engineered and
                conditioned from birth, the novel explores themes of conformity,
                consumerism, and the loss of individuality.
              </p>
              <p className="mt-3">
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
              <p className="mt-3">
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
