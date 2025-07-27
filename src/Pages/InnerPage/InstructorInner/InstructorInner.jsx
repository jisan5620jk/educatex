import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import TeamMember from "./TeamMember/TeamMember";

import BoxReveal from "../../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const InstructorInner = () => {
  // Box Reveal

  BoxReveal();

  // Text Reveal

  TextReveal();

  // Image Reveal

  ImageReveal();

  return (
    <>
      <HelmetChanger title={"Instructor Inner Page"} />
      <BreadCrumb
        breadCrumbTitle={"Instructor"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={"Instructor"}
      />
      <TeamMember />
    </>
  );
};

export default InstructorInner;
