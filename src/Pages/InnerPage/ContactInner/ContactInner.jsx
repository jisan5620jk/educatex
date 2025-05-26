import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import ContactBox from './ContactBox/ContactBox';
import Map from './Map';
import ContactForm from './ContactForm';
import HelmetChanger from '../../../Shared/Helmet/Helmet';

const ContactInner = () => {
  return (
    <>
      <HelmetChanger title={'Contact Inner Page'} />
      <BreadCrumb
        breadCrumbTitle={'Contact Us'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'Contact Us'}
      />
      <ContactBox />
      <ContactForm />
      <Map />
    </>
  );
};

export default ContactInner;
