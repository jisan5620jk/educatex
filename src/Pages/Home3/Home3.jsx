import About from "../../Component3/About/About";
import Activities from "../../Component3/Activities/Activities";
import Banner from "../../Component3/Banner/Banner";
import Blog from "../../Component3/Blog/Blog";
import Course from "../../Component3/Course/Course";
import Event from "../../Component3/Event/Event";
import Offer from "../../Component3/Offer/Offer";
import Programs from "../../Component3/Programs/Programs";
import Testimonial from "../../Component3/Testimonial/Testimonial";
import BoxReveal from "../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../Shared/TextAnim/TextReveal";

const Home3 = () => {
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
      <About />
      <Course />
      <Activities />
      <Programs />
      <Offer />
      <Event />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home3;
