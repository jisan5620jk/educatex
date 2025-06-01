import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import Event from "./Event/Event";


const EventsInner = () => {
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
