import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import Faq from './Accordion/FaqAccordion';
import CallDoAction from '../AboutInner3/CallDoAction';

const FaqInner2 = () => {
  return (
    <>
      <HelmetChanger title={'Faq Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'F.A.Q'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'FAQ'}
      />
      <Faq />
      <CallDoAction />
    </>
  );
};

export default FaqInner2;
