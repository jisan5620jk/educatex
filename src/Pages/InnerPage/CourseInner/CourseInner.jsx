import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import CourseList from "./CourseGrid";

import BoxReveal from "../../../Shared/BoxReveal/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const CourseInner = () => {
  // Box Reveal

  BoxReveal();

  // Text Reveal

  TextReveal();

  // Image Reveal

  ImageReveal();

  return (
    <>
      <HelmetChanger title={"Pricing Inner Page Style Two"} />
      <BreadCrumb2
        breadCrumbTitle={"All Courses"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={"Course"}
      />
      <CourseList />
    </>
  );
};

export default CourseInner;
