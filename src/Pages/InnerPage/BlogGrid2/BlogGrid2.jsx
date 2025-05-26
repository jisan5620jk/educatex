import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import Blog from './Blog/Blog';
import CallDoAction from '../AboutInner3/CallDoAction';

const BlogGrid2 = () => {
  return (
    <>
      <HelmetChanger title={'Blog Grid Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'Blog Grid'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'Blog Grid'}
      />
      <Blog />
      <CallDoAction />
    </>
  );
};

export default BlogGrid2;
