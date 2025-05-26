import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import HelpCenter from './HelpCenter';
import Map from '../ContactInner/Map';
import ContactBox from '../ContactInner/ContactBox/ContactBox';
import HelmetChanger from '../../../Shared/Helmet/Helmet';

const LocationInner = () => {
  return (
    <>
      <HelmetChanger title={'Location Inner Page'} />
      <BreadCrumb
        breadCrumbTitle={'Location'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'Location'}
      />
      <HelpCenter />
      <Map />
      <ContactBox />
    </>
  );
};

export default LocationInner;
