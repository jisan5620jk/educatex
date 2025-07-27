import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import Contact from "./Contact";
import Map from "./Map";

import BoxReveal from "../../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const ContactInner = () => {
  // Box Reveal

  BoxReveal();

  // Text Reveal

  TextReveal();

  // Image Reveal

  ImageReveal();

  return (
    <>
      <HelmetChanger title={"Contact Inner Page"} />
      <BreadCrumb
        breadCrumbTitle={"Contact Us"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={"Contact"}
      />
      <Contact />
      <Map />
    </>
  );
};
export default ContactInner;
