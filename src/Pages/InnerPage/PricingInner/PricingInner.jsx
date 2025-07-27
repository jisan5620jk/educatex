import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Pricing from "./Pricing/Pricing";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";

import BoxReveal from "../../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const PricingInner = () => {
  // Box Reveal

  BoxReveal();

  // Text Reveal

  TextReveal();

  // Image Reveal

  ImageReveal();

  return (
    <>
      <HelmetChanger title={"Pricing Inner Page Style Two"} />
      <BreadCrumb
        breadCrumbTitle={"Affordable Price"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={"Pricing Plan"}
      />
      <Pricing />
    </>
  );
};

export default PricingInner;
