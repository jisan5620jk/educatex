import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import Feature from './Feature/Feature';
import Career from './Career';
import HelmetChanger from '../../../Shared/Helmet/Helmet';

const CareerInner = () => {
  return (
    <>
      <HelmetChanger title={'Career Inner Page'} />
      <BreadCrumb2
        breadCrumbTitle={'Careers'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'Careers'}
      />
      <Career />
      <Feature />
    </>
  );
};

export default CareerInner;
