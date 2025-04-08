import MisionProcessCard from './MisionProcessCard';
import misionProcessIcon from '/images/mision-process-icon.png';
import misionProcessIcon2 from '/images/mision-process-icon2.png';
import misionProcessIcon3 from '/images/mision-process-icon3.png';

const misionProcessCard = [
  {
    id: 1,
    misionProcessIcon: misionProcessIcon,
    misionProcessTitle: 'Commitment',
    misionProcessDesc:
      'Every team member is expected to own their can work and deliver results with integrity and likes transparency holding ourselves',
  },  {
    id: 2,
    misionProcessIcon: misionProcessIcon2,
    misionProcessTitle: 'Globalization',
    misionProcessDesc:
      'Every team member is expected to own their can work and deliver results with integrity and likes transparency holding ourselves',
  },  {
    id: 3,
    misionProcessIcon: misionProcessIcon3,
    misionProcessTitle: 'Success',
    misionProcessDesc:
      'Every team member is expected to own their can work and deliver results with integrity and likes transparency holding ourselves',
  },
];

const MisionProcess = () => {
  return (
    <section className='py-16 md:py-20 lg:py-28 bg-[url("/images/mision-process-bg.jpg")] bg-cover bg-no-repeat bg-center'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {misionProcessCard.map(
            ({
              id,
              misionProcessIcon,
              misionProcessTitle,
              misionProcessDesc,
            }) => {
              return (
                <div key={id}>
                  <MisionProcessCard
                    misionProcessIcon={misionProcessIcon}
                    misionProcessTitle={misionProcessTitle}
                    misionProcessDesc={misionProcessDesc}
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

export default MisionProcess;
