/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FeatureCard = ({
  featureIcon,
  featureshape,
  featureshape2,
  featureTitle,
  featureDesc,
  featureUrl,
  featureBtn,
}) => {
  return (
    <div className="text-center shadow-shade overflow-hidden group px-8 sm:px-10 pt-[60px] pb-8 rounded-lg bg-white relative z-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[url('/images/feature-box-shape.png')] before:bg-cover before:bg-center before:bg-no-repeat before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:before:top-0">
      <div className="relative text-center z-10">
        <img src={featureIcon} draggable="false" className="mx-auto group-hover:animate-wobble_vertical" />
        <img
          src={featureshape}
          draggable="false"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-500 group-hover:opacity-0"
        />
        <img
          src={featureshape2}
          draggable="false"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-500 opacity-0 group-hover:opacity-100"
        />
      </div>
      <h4 className="font-Rajdhani font-semibold text-2xl sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-11 mb-2">
        {featureTitle}
      </h4>
      <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-[18px]">
        {featureDesc}
      </p>
      <Link
        to={featureUrl}
        className="inline-block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:w-8 before:h-[2px] before:-translate-x-1/2 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-4 group-hover:before:bg-white group-hover:before:-left-6 group-hover:before:-translate-x-0"
      >
        <button className="font-Nunito font-medium text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
          {featureBtn}
        </button>
      </Link>
    </div>
  );
};

export default FeatureCard;
