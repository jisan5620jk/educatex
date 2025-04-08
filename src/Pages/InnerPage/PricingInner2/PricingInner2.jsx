import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2"
import Pricing from "./Pricing/Pricing";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import FaqAccordion from "../Faq2/Accordion/FaqAccordion";

const PricingInner2 = () => {
  return (
    <>
      <HelmetChanger title={'Pricing Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'Affordable Price'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Pricing Plan'}
      />
      <Pricing />
      <div className='lg:-mt-8'>
        <FaqAccordion />
      </div>
    </>
  );
};

export default PricingInner2;
