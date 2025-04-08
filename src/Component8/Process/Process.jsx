import ProcessCard from './ProcessCard';
import processIcon from '/images/process1.webp';
import processIcon2 from '/images/process2.webp';
import processIcon3 from '/images/process3.webp';

const processCardData = [
  {
    id: 1,
    processNumber: 'Step : 01',
    processIcon: processIcon,
    processTitle: 'Install and Setup',
    processDesc:
      'Distinctively reconceptualize mission technology positioning materials after out of resoulations to actualize distinctive footage',
  },
  {
    id: 2,
    processNumber: 'Step : 02',
    processIcon: processIcon2,
    processTitle: 'Essential Testing',
    processDesc:
      'Distinctively reconceptualize mission technology positioning materials after out of resoulations to actualize distinctive footage',
  },
  {
    id: 3,
    processNumber: 'Step : 03',
    processIcon: processIcon3,
    processTitle: 'Finished Process',
    processDesc:
      'Distinctively reconceptualize mission technology positioning materials after out of resoulations to actualize distinctive footage',
  },
];

const Process = () => {
  return (
    <section className='bg-BodyBg7-0 pb-16 md:pb-20 lg:pb-28'>
      <div className='Container'>
        <div className='text-center'>
          <h1 className='font-Outfit font-bold text-[40px] leading-[42px] sm:text-[50px] sm:leading-[52px] md:text-[60px] md:leading-[72px] lg:text-[60px] lg:leading-[62px] xl:text-[70px] xl:leading-[72px] 2xl:text-[80px] 2xl:leading-[82px] text-HeadingColor-0 mb-4'>
            Working Process
          </h1>
        </div>
        <div className='relative z-10 mt-12'>
          <div className='absolute top-[38px] left-0 w-full hidden xl:block'>
            <span className='w-full h-[2px] border-[1.5px] border-dashed border-SecondaryColor-0 border-opacity-15 inline-block'></span>
            <div className='flex justify-around -mt-[15px]'>
              <span className='size-4 rounded-full bg-gradient-to-t to-PrimaryColor2-0 from-PrimaryColor3-0 inline-block'></span>
              <span className='size-4 rounded-full bg-gradient-to-t to-PrimaryColor2-0 from-PrimaryColor3-0 inline-block'></span>
              <span className='size-4 rounded-full bg-gradient-to-t to-PrimaryColor2-0 from-PrimaryColor3-0 inline-block'></span>
            </div>
          </div>
          <div className='flex gap-7 items-center justify-around flex-wrap'>
            {processCardData.map(
              ({
                id,
                processNumber,
                processIcon,
                processTitle,
                processDesc,
              }) => (
                <ProcessCard
                  key={id}
                  processNumber={processNumber}
                  processIcon={processIcon}
                  processTitle={processTitle}
                  processDesc={processDesc}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
