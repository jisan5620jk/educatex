import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import Contact from "./Contact";
import Map from "./Map";


const ContactInner = () => {
  return (
    <>
      <HelmetChanger title={"Contact Inner Page"} />
      <BreadCrumb
        breadCrumbTitle={"Contact"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={"Contact"}
      />
      <Contact />
      <Map />
    </>
  );
};
export default ContactInner;
