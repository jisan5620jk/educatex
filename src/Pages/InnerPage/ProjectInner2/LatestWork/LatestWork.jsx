import latestWorkCardImg from '/images/project-img1.png';
import latestWorkCardImg2 from '/images/project-img2.png';
import latestWorkCardImg3 from '/images/project-img3.png';
import latestWorkCardImg4 from '/images/project-img4.png';
import LatestWorkCard from './LatestWorkCard';

const latestWorkCard = [
  {
    id: 1,
    latestWorkCardImg: latestWorkCardImg,
    latestWorkSubTitle: 'Marketing',
    latestWorkCardURL: '/project_details',
    latestWorkTitle: 'Comprehensive SEO Audit and Keyword Strategy',
    latestWorkBtnText: 'Read More',
  },
  {
    id: 2,
    latestWorkCardImg: latestWorkCardImg2,
    latestWorkSubTitle: 'Marketing',
    latestWorkCardURL: '/project_details',
    latestWorkTitle: 'The Complete Guide Technical On-Page Optimization',
    latestWorkBtnText: 'Read More',
  },
  {
    id: 3,
    latestWorkCardImg: latestWorkCardImg3,
    latestWorkSubTitle: 'Marketing',
    latestWorkCardURL: '/project_details',
    latestWorkTitle: 'Innovative SEO and Content Marketing Strategies',
    latestWorkBtnText: 'Read More',
  },
  {
    id: 4,
    latestWorkCardImg: latestWorkCardImg4,
    latestWorkSubTitle: 'Marketing',
    latestWorkCardURL: '/project_details',
    latestWorkTitle: 'SEO Optimization Effective Lead Generation',
    latestWorkBtnText: 'Read More',
  },
  {
    id: 5,
    latestWorkCardImg: latestWorkCardImg3,
    latestWorkSubTitle: 'Marketing',
    latestWorkCardURL: '/project_details',
    latestWorkTitle: 'Comprehensive SEO Audit and Keyword Strategy',
    latestWorkBtnText: 'Read More',
  },
  {
    id: 6,
    latestWorkCardImg: latestWorkCardImg,
    latestWorkSubTitle: 'Marketing',
    latestWorkCardURL: '/project_details',
    latestWorkTitle: 'The Complete Guide Technical On-Page Optimization',
    latestWorkBtnText: 'Read More',
  },
];

const LatestWork = () => {
  return (
    <section className='bg-white py-16 md:py-20 lg:py-28'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-7'>
          {latestWorkCard.map(
            ({
              id,
              latestWorkCardImg,
              latestWorkSubTitle,
              latestWorkCardURL,
              latestWorkTitle,
              latestWorkBtnText,
            }) => {
              return (
                <div key={id}>
                  <LatestWorkCard
                    latestWorkCardImg={latestWorkCardImg}
                    latestWorkSubTitle={latestWorkSubTitle}
                    latestWorkCardURL={latestWorkCardURL}
                    latestWorkTitle={latestWorkTitle}
                    latestWorkBtnText={latestWorkBtnText}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
