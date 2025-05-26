import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import Testimonial from './Testimonial/Testimonial';
import Service from './Service/Service';

const ProjectInner = () => {
  return (
    <>
      <HelmetChanger title={'Project Inner Page Style One'} />
      <BreadCrumb
        breadCrumbTitle={'Our Projects'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'Our Proejcts'}
      />
      <Service />
      <Testimonial />
    </>
  );
};

export default ProjectInner;
