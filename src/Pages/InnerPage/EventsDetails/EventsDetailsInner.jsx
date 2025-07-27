import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import TeamMember from "./TeamMember/TeamMember";
import EventsDetails from "./EventsDetails";

import BoxReveal from "../../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const EventsDetailsInner = () => {
  // Box Reveal

  BoxReveal();

  // Text Reveal

  TextReveal();

  // Image Reveal

  ImageReveal();

  return (
    <>
      <HelmetChanger title={"Events Details Inner Page"} />
      <BreadCrumb
        breadCrumbTitle={"Events Details"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={"Events Details"}
      />
      <EventsDetails />
      <TeamMember />
    </>
  );
};

export default EventsDetailsInner;
