import About from "../../Component6/About/About";
import Banner from "../../Component6/Banner/Banner";
import Blog from "../../Component6/Blog/Blog";
import Brand from "../../Component6/Brand/Brand";
import Counter from "../../Component6/Counter/Counter";
import CourseFilter from "../../Component6/Course/CourseFilter";
import Feature from "../../Component6/Feature/Feature";
import Marquee from "../../Component6/Marquee/Marquee";
import NewsletterForm from "../../Component6/NewsletterForm/NewsletterForm";
import Pricing from "../../Component6/Pricing/Pricing";
import Testimonial from "../../Component6/Testimonial/Testimonial";
import BoxReveal from "../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../Shared/TextAnim/TextReveal";

const Home6 = () => {
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
      <CourseFilter />
      <Marquee />
      <Feature />
      <Counter />
      <Pricing />
      <Testimonial />
      <Brand />
      <Blog />
      <NewsletterForm />
    </>
  );
};

export default Home6;
