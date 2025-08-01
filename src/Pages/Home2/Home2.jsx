import About from "../../Component2/About/About";
import Admission from "../../Component2/Admission/Admission";
import Banner from "../../Component2/Banner/Banner";
import Blog from "../../Component2/Blog/Blog";
import Brand from "../../Component2/Brand/Brand";
import CallDoAction from "../../Component2/CallDoAction/CallDoAction";
import Campus from "../../Component2/Campus/Campus";
import Course from "../../Component2/Course/Course";
import Event from "../../Component2/Event/Event";
import Faq from "../../Component2/Faq/Faq";
import Feature from "../../Component2/Feature/Feature";
import Marquee from "../../Component2/Marquee/Marquee";
import Testimonial from "../../Component2/Testimonial/Testimonial";
import BoxReveal from "../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../Shared/TextAnim/TextReveal";

const Home2 = () => {
  // Box Reveal

  BoxReveal();

  // Text Reveal

  TextReveal();

  // Image Reveal

  ImageReveal();

  BoxReveal();
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Course />
      <CallDoAction />
      <Campus />
      <Brand />
      <Testimonial />
      <Admission />
      <Event />
      <Marquee />
      <Faq />
      <Blog />
    </>
  );
};

export default Home2;
