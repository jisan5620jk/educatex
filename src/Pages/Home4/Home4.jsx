import About from "../../Component4/About/About";
import Banner from "../../Component4/Banner/Banner";
import Blog from "../../Component4/Blog/Blog";
import Brand from "../../Component4/Brand/Brand";
import Courses from "../../Component4/Course/Course";
import Faq from "../../Component4/Faq/Faq";
import Feature from "../../Component4/Feature/Feature";
import Marquee from "../../Component4/Marquee/Marquee";
import Service from "../../Component4/Service/Service";
import TeamGallery from "../../Component4/TeamGallery/TeamGallery";
import BoxReveal from "../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../Shared/TextAnim/TextReveal";

const Home4 = () => {
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
      <Service />
      <About />
      <Courses />
      <Faq />
      <TeamGallery />
      <Marquee />
      <Blog />
      <Brand />
    </>
  );
};

export default Home4;
