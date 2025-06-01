import { useState } from "react";
import PricingCard from "./PricingCard";
import shape from "/images/pricing-shape11.png";
import shape2 from "/images/pricing-shape12.png";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      title: "SILVER PLAN",
      price: billing === "monthly" ? 89 : (89 * 12 * 0.8).toFixed(0),
      pricingPlan: billing === "monthly" ? "month" : "year",
      bgColor: "bg-PrimaryColor4-0 bg-opacity-10",
      textColor: "text-HeadingColor-0 group-hover:text-PrimaryColor4-0",
      buttonColor: "bg-PrimaryColor4-0 bg-opacity-10 before:bg-PrimaryColor4-0",
      Url: "/pricing",
    },
    {
      title: "GOLD PLAN",
      price: billing === "monthly" ? 159 : (159 * 12 * 0.8).toFixed(0),
      pricingPlan: billing === "monthly" ? "month" : "year",
      bgColor: "bg-PrimaryColor3-0 bg-opacity-10",
      textColor: "text-HeadingColor-0 group-hover:text-PrimaryColor3-0",
      buttonColor: "bg-PrimaryColor3-0 bg-opacity-10 before:bg-PrimaryColor3-0",
      Url: "/pricing",
    },
    {
      title: "DIAMOND PLAN",
      price: billing === "monthly" ? 269 : (269 * 12 * 0.8).toFixed(0),
      pricingPlan: billing === "monthly" ? "month" : "year",
      bgColor: "bg-PrimaryColor-0 bg-opacity-10",
      textColor: "text-HeadingColor-0 group-hover:text-PrimaryColor-0",
      buttonColor: "bg-PrimaryColor-0 bg-opacity-10 before:bg-PrimaryColor-0",
      Url: "/pricing",
    },
  ];

  const features = [
    "Pricing at a Glance",
    "Course & Fee Overview",
    "Transparent Pricing Hidden Fees",
    "Best Plan for Your Learning",
    "Simple & Clear Pricing",
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 relative z-10 overflow-hidden">
      <img
        src={shape}
        draggable={false}
        alt="Shape"
        className="absolute -top-12 right-0 animate-wiggle hidden 3xl:block"
      />
      <img
        src={shape2}
        draggable={false}
        alt="Shape"
        className="absolute top-28 left-28 animate-dance hidden 2xl:block"
      />
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Outfit font-medium text-HeadingColor-0 uppercase pl-4 inline-block relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]">
            pricing plan
          </h5>
          <h1 className="font-Outfit font-semibold text-lg leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4">
            Comprehensive Course Guide and<br /> Best Fee Schedule
          </h1>
        </div>
        {/* Toggle Switch */}
        <div className="flex items-center justify-center space-x-4 mb-16 mt-10">
          <span
            className={`font-Outfit text-lg sm:text-[22px] font-medium transition-all duration-500 ${
              billing === "yearly" ? "text-gray-900" : "text-gray-400"
            }`}
          >
            Yearly
          </span>
          <button
            onClick={() =>
              setBilling(billing === "monthly" ? "yearly" : "monthly")
            }
            className={`w-[90px] h-[46px] flex items-center rounded-full p-1 transition duration-500 ease-in-out bg-PrimaryColor-0 bg-opacity-10 ${
              billing === "monthly" ? "" : ""
            }`}
          >
            <div
              className={`bg-PrimaryColor-0 size-[38px] rounded-full shadow-md transition duration-500 ${
                billing === "monthly" ? "translate-x-11" : ""
              }`}
            />
          </button>
          <span
            className={`font-Outfit text-lg sm:text-[22px] transition-all duration-500 ${
              billing === "monthly" ? "text-gray-900" : "text-gray-400"
            }`}
          >
            Monthly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 xl:gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} features={features} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
