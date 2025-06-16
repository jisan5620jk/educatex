import PricingCard from "./PricingCard";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { BsPatchCheck } from "react-icons/bs";
import subTilteIcon from "/images/sub-title2.png";
import icon from "/images/pricing-icon1.png";
import icon2 from "/images/pricing-icon2.png";
import icon3 from "/images/pricing-icon3.png";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
  const pricingData = [
    {
      icon: icon,
      planName: "Starter Plan",
      targetUser: "Indivisual",
      features: [
        "Unlimited Websites",
        "10+ Paid Plugin",
        "Woocommerce Support",
        "50+ WP theme",
        "Free Equipments",
      ],
      featureIcon: <BsPatchCheck />,
      price: billing === "monthly" ? 29 : (29 * 12 * 0.8).toFixed(0),
      billingCycle: billing === "monthly" ? "month" : "year",
      bgColor: "bg-PrimaryColor2-0 bg-opacity-[7%]",
      iconColor:
        "border-PrimaryColor2-0 bg-PrimaryColor2-0 bg-opacity-10 before:bg-PrimaryColor2-0",
      textColor: "text-PrimaryColor2-0",
      buttonColor:
        "text-PrimaryColor2-0 bg-PrimaryColor2-0 border-PrimaryColor2-0 before:bg-PrimaryColor2-0",
      buttonLabel: "PURCHASE NOW",
      buttonIcon: <FaArrowRight />,
    },
    {
      icon: icon2,
      planName: "Professional",
      targetUser: "Indivisual",
      features: [
        "Unlimited Websites",
        "10+ Paid Plugin",
        "Woocommerce Support",
        "50+ WP theme",
        "Free Equipments",
      ],
      featureIcon: <BsPatchCheck />,
      price: billing === "monthly" ? 69 : (69 * 12 * 0.8).toFixed(0),
      billingCycle: billing === "monthly" ? "month" : "year",
      bgColor: "bg-PrimaryColor-0 bg-opacity-[7%]",
      iconColor:
        "border-PrimaryColor-0 bg-PrimaryColor-0 bg-opacity-10 before:bg-PrimaryColor-0",
      textColor: "text-PrimaryColor-0",
      buttonColor:
        "text-PrimaryColor-0 bg-PrimaryColor-0 border-PrimaryColor-0 before:bg-PrimaryColor-0",
      buttonLabel: "PURCHASE NOW",
      buttonIcon: <FaArrowRight />,
    },
    {
      icon: icon3,
      planName: "Business Plan",
      targetUser: "Indivisual",
      features: [
        "Unlimited Websites",
        "10+ Paid Plugin",
        "Woocommerce Support",
        "50+ WP theme",
        "Free Equipments",
      ],
      featureIcon: <BsPatchCheck />,
      price: billing === "monthly" ? 99 : (99 * 12 * 0.8).toFixed(0),
      billingCycle: billing === "monthly" ? "month" : "year",
      bgColor: "bg-PrimaryColor3-0 bg-opacity-[7%]",
      iconColor:
        "border-PrimaryColor3-0 bg-PrimaryColor3-0 bg-opacity-10 before:bg-PrimaryColor3-0",
      textColor: "text-PrimaryColor3-0",
      buttonColor:
        "text-PrimaryColor3-0 bg-PrimaryColor3-0 border-PrimaryColor3-0 before:bg-PrimaryColor3-0",
      buttonLabel: "PURCHASE NOW",
      buttonIcon: <FaArrowRight />,
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Outfit font-medium text-PrimaryColor-0 uppercase flex items-center justify-center gap-3">
            <img src={subTilteIcon} draggable={false} alt="Icon" /> PRICING
            PLANS
          </h5>
          <h1 className="font-Outfit font-semibold text-lg leading-7 sm:text-[30px] sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 md:mt-[14px] mb-4">
            Great Plans for Dedicated Learners
            <br /> Aiming Higher Features
          </h1>
        </div>
        {/* Toggle Switch */}
        <div className="flex justify-center mt-10 mb-10">
          <div className="inline-flex items-center justify-center space-x-4 py-2.5 px-7 rounded-full border border-HeadingColor-0 border-opacity-15">
            <span
              className={`font-Outfit font-medium transition-all duration-500 ${
                billing === "yearly" ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Yearly
            </span>
            <button
              onClick={() =>
                setBilling(billing === "monthly" ? "yearly" : "monthly")
              }
              className={`w-[58px] h-7 flex items-center rounded-full border border-PrimaryColor-0 border-opacity-30 transition duration-500 ease-in-out bg-PrimaryColor-0 bg-opacity-10 ${
                billing === "monthly" ? "" : ""
              }`}
            >
              <div
                className={`bg-PrimaryColor-0 size-7 rounded-full shadow-md transition duration-500 ${
                  billing === "monthly" ? "translate-x-7" : ""
                }`}
              />
            </button>
            <span
              className={`font-Outfit font-medium transition-all duration-500 ${
                billing === "monthly" ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
