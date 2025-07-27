import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import Event from "./Event/Event";

import BoxReveal from "../../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const EventsInner = () => {
  // Box Reveal

  BoxReveal();

  // Text Reveal

  TextReveal();

  // Image Reveal

  ImageReveal();

  return (
    <>
      <HelmetChanger title={"Events Inner Page"} />
      <BreadCrumb
        breadCrumbTitle={"Events"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={"Events"}
      />
      <Event />
    </>
  );
};

export default EventsInner;
