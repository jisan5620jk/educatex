import {
  FaArrowRightLong,
} from "react-icons/fa6";
import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import CallDoAction from "../AboutInner3/CallDoAction";
import TeamMember from "./TeamMember/TeamMember";


const TeamInner2 = () => {
  return (
    <>
      <HelmetChanger title={'Team Member Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'Leadership Team'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Team Member'}
      />
      <TeamMember />
      <CallDoAction />
    </>
  );
};

export default TeamInner2;


