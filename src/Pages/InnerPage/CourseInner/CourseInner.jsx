import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import { BsArrowUpRight } from 'react-icons/bs';
import CourseList from './CourseGrid';

const CourseInner = () => {
  return (
    <>
      <HelmetChanger title={'Pricing Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'Affordable Price'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'Pricing Plan'}
      />
      <CourseList />
    </>
  );
};

export default CourseInner;
