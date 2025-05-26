import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import TeamDetailsMain from './TeamDetailsMain';
import HelmetChanger from '../../../Shared/Helmet/Helmet';

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
