import About from "../../Component1/About/About";
import Banner from "../../Component1/Banner/Banner";
import Blog from "../../Component1/Blog/Blog";
import CallDoAction from "../../Component1/CallDoAction/CallDoAction";
import Feature from "../../Component1/Feature/Feature";
import Integrations from "../../Component1/Integrations/Integrations";
import LatestWork from "../../Component1/LatestWork/LatestWork";
import Pricing from "../../Component1/Pricing/Pricing";
import Provide from "../../Component1/Provide/Provide";
import Testimonial from "../../Component1/Testimonial/Testimonial";
import WhyChoose from "../../Component1/Whychoose/WhyChoose";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Provide />
      <WhyChoose />
      <LatestWork />
      <CallDoAction />
      <Pricing />
      <Integrations />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home1;
