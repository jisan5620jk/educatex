import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import TeamMember from "./TeamMember/TeamMember";


const InstructorInner = () => {
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
