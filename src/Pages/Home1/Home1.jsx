import About from "../../Component1/About/About";
import Banner from "../../Component1/Banner/Banner";
import Blog from "../../Component1/Blog/Blog";
import Brand from "../../Component1/Brand/Brand";
import CallDoAction from "../../Component1/CallDoAction/CallDoAction";
import Course from "../../Component1/Course/CourseFilter";
import Feature from "../../Component1/Feature/Feature";
import Marquee from "../../Component1/Marquee/Marquee";
import Offer from "../../Component1/Offer/Offer";
import TeamMember from "../../Component1/TeamMember/TeamMember";
import Testimonial from "../../Component1/Testimonial/Testimonial";
import WhyChoose from "../../Component1/Whychoose/WhyChoose";
const Home1 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Marquee />
      <Course />
      <WhyChoose />
      <Offer />
      <TeamMember />
      <Testimonial />
      <CallDoAction />
      <Blog />
      <Brand />
    </>
  );
};

export default Home1;
