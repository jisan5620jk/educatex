import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import WhyChooseUs from "./WhyChooseUs";
import HelmetChanger from "../../../Shared/Helmet/Helmet";


const WhyChoose = () => {
  return (
    <>
      <HelmetChanger title={'Why Choose Us Inner Page Style One'} />
      <BreadCrumb
        breadCrumbTitle={'Why Choose Us'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Why Choose Us'}
      />
      <WhyChooseUs />
    </>
  );
};

export default WhyChoose;
