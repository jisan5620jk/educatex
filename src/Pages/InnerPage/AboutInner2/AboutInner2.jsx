import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import WhyChoose from "../../../Component2/WhyChoose/WhyChoose";
import About from "./About";
import Counter from "../../../Component2/WhyChoose/Counter";
import HelmetChanger from "../../../Shared/Helmet/Helmet";

const AboutInner2 = () => {
  return (
    <>
      <HelmetChanger title={'About Inner Page Two'} />
      <BreadCrumb
        breadCrumbTitle={'About Us 02'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'About Us 02'}
      />
      <About />
      <Counter />
      <WhyChoose />
    </>
  );
};

export default AboutInner2;
