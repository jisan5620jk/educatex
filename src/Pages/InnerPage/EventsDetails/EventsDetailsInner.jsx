import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import TeamMember from "./TeamMember/TeamMember";
import EventsDetails from "./EventsDetails";

const EventsDetailsInner = () => {
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
