import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import LatestWork from "./LatestWork/LatestWork";
import CallDoAction from "../ContactInner2/CallDoAction";

const ProjectInner2 = () => {
  return (
    <>
      <HelmetChanger title={'Project Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'Our Projects'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Our Proejcts'}
      />
      <LatestWork />
      <CallDoAction />
    </>
  );
};

export default ProjectInner2;
