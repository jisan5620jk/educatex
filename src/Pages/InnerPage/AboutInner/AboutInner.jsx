import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import { BsArrowUpRight } from 'react-icons/bs';
import About from './About/About';
import Feature from '../../../Component2/Feature/Feature';
import TeamMember from '../../../Component1/TeamMember/TeamMember';
import CallDoAction from '../../../Component2/CallDoAction/CallDoAction';
import Testimonial from './Testimonial/Testimonial';
import Brand from './Brand/Brand';
import Offer from './Offer/Offer';

const AboutInner = () => {
  return (
    <>
      <HelmetChanger title={'About Inner Page'} />
      <BreadCrumb
        breadCrumbTitle={'About Us'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'About Us'}
      />
      <About />
      <Feature />
      <Offer />
      <CallDoAction />
      <TeamMember />
      <Testimonial />
      <Brand />
    </>
  );
};

export default AboutInner;
