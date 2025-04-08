import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import ContactBox from "./ContactBox/ContactBox";
import Appointment from './Appointment';
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import CallDoAction from "./CallDoAction";

const ContactInner2 = () => {
  return (
    <>
      <HelmetChanger title={'Contact Inner Page'} />
      <BreadCrumb2
        breadCrumbTitle={'Contact Us'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Contact Us'}
      />
      <ContactBox />
      <Appointment />
      <CallDoAction />
    </>
  );
};

export default ContactInner2;
