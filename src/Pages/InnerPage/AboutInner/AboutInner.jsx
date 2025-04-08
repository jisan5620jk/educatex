import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Feature from "./Feature/Feature";
import About from "./About/About";
import Testimonial from "../../../Component1/Testimonial/Testimonial";
import Counter from "../../../Component2/WhyChoose/Counter";
import Brand from "../../../Component2/Brand/Brand";
import HelmetChanger from "../../../Shared/Helmet/Helmet";

const AboutInner = () => {
  return (
    <>
      <HelmetChanger title={'About Inner Page'} />
      <BreadCrumb
        breadCrumbTitle={'About Us 01'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'About Us 01'}
      />
      <Feature />
      <About />
      <Counter />
      <Testimonial />
      <Brand />
    </>
  );
};

export default AboutInner;
