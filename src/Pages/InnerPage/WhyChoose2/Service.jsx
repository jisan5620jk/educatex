import ServiceCard from './ServiceCard';
import serviceIcon from '/images/why-choose-inner-icon.png';
import serviceIcon2 from '/images/why-choose-inner-icon2.png';
import serviceIcon3 from '/images/why-choose-inner-icon3.png';

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: 'People',
    serviceDesc:
      'Approach is centered around delivering tailo of solutions that address the unique challengessi your business faces. We don’t just offer genere IT services we work closely',
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: 'Support',
    serviceDesc:
      'Approach is centered around delivering tailo of solutions that address the unique challengessi your business faces. We don’t just offer genere IT services we work closely',
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceTitle: 'Quality',
    serviceDesc:
      'Approach is centered around delivering tailo of solutions that address the unique challengessi your business faces. We don’t just offer genere IT services we work closely',
  },
];

const Service = () => {
  return (
    <section className='py-16 md:py-20 lg:py-28 relative z-10 bg-[url(/images/mision-process-bg.jpg)] bg-cover bg-center bg-no-repeat'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {ServiceData.map(({ id, serviceIcon, serviceTitle, serviceDesc }) => {
            return (
              <>
                <div key={id}>
                  <ServiceCard
                    serviceIcon={serviceIcon}
                    serviceTitle={serviceTitle}
                    serviceDesc={serviceDesc}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
