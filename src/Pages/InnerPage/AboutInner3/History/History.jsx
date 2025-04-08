import titleShape from '/images/sub-title-shape.png';
import shape from '/images/shape_About-Us.webp';
import HistoryCard from './HistoryCard';

const historyData = [
  {
    id: 1,
    historyTime: '1998 - 2000',
    historyTitle: 'Building Dreams, 1998 - 2000',
    historyDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital scale cross-platform materials and process-centric',
  },
  {
    id: 2,
    historyTime: '2000 - 2015',
    historyTitle: 'Milestones and Growth, 2000 - 2015',
    historyDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital scale cross-platform materials and process-centric',
  },
  {
    id: 3,
    historyTime: '2016 - 2023',
    historyTitle: 'Present and Future Goals, 2016 - 2023',
    historyDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital scale cross-platform materials and process-centric',
  },
];

const History = () => {
  return (
    <section className='bg-HeadingColor-0 py-16 md:py-20 lg:py-28 relative z-10'>
      <div className='Container'>
        <div className='relative'>
          <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='brightness-0 invert-[1]'
            />{' '}
            More About
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
            Trusted by Industry Leaders
            <br /> Successful Softwares
          </h1>
          <img src={shape} draggable={false} alt="Shape" className='absolute right-14 top-0 animate-rotational hidden xl:block' />
        </div>
        <div className='relative z-10 mt-12 space-y-7'>
          {historyData.map(({ id, historyTime, historyTitle, historyDesc }) => {
            return (
              <div key={id}>
                <HistoryCard
                  historyTime={historyTime}
                  historyTitle={historyTitle}
                  historyDesc={historyDesc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default History;
