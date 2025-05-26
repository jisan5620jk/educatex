import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import Service from './Service';
import WhyChooseUs from './WhyChooseUs';

const WhyChoose2 = () => {
  return (
    <>
      <HelmetChanger title={'Why Choose Us Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'Why Choose Us'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'Why Choose Us'}
      />
      <WhyChooseUs />
      <Service />
    </>
  );
};

export default WhyChoose2;
