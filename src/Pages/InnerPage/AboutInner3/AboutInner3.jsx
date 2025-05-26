import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import About from './About';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import Marquee from './Marquee/Marquee';
import TeamMember from './TeamMember/TeamMember';
import CallDoAction from './CallDoAction';
import Counter from './Counter/Counter';
import Service from './Service/Service';
import History from './History/History';

const AboutInner3 = () => {
  return (
    <>
      <HelmetChanger title={'About Inner Page Three'} />
      <BreadCrumb2
        breadCrumbTitle={'About educatex'}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbLink={'About educatex'}
      />
      <About />
      <Marquee />
      <Service />
      <History />
      <Counter />
      <TeamMember />
      <CallDoAction />
    </>
  );
};

export default AboutInner3;
