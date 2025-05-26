import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb"
import Pricing from "./Pricing/Pricing";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";

const PricingInner = () => {
  return (
    <>
      <HelmetChanger title={'Pricing Inner Page Style Two'} />
      <BreadCrumb
        breadCrumbTitle={'Affordable Price'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'Pricing Plan'}
      />
      <Pricing />
    </>
  );
};

export default PricingInner;
