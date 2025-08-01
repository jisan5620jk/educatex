import About from "../../Component5/About/About";
import Banner from "../../Component5/Banner/Banner";
import Blog from "../../Component5/Blog/Blog";
import Brand from "../../Component5/Brand/Brand";
import CallDoAction from "../../Component5/CallDoAction/CallDoAction";
import Course from "../../Component5/Course/Course";
import FeaturedCourse from "../../Component5/FeatureCourse/FeatureCourse";
import Marquee from "../../Component5/Marquee/Marquee";
import TeamMember from "../../Component5/TeamMember/TeamMember";
import BoxReveal from "../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../Shared/TextAnim/TextReveal";

const Home5 = () => {
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
      <Course />
      <About />
      <Marquee />
      <FeaturedCourse />
      <TeamMember />
      <CallDoAction />
      <Blog />
      <Brand />
    </>
  );
};

export default Home5;
