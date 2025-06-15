import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import TeamDetailsMain from './InstructorInfo';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import { BsArrowUpRight } from 'react-icons/bs';

const TeamDetails = () => {
  return (
    <>
      <HelmetChanger title={'Team Details Inner Page'} />
      <BreadCrumb
        breadCrumbTitle={'Team Details'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'Team Details'}
      />
      <TeamDetailsMain />
    </>
  );
};

export default TeamDetails;
