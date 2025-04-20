import { FaLocationDot } from 'react-icons/fa6';
import { LuClock3 } from 'react-icons/lu';
import { HiArrowLongRight } from 'react-icons/hi2';
import EventCard from './EventCard';
import './event.css';
import eventThumb from '/images/event-thumb.png';
import eventThumb2 from '/images/event-thumb2.png';
import eventThumb3 from '/images/event-thumb3.png';

const eventData = [
  {
    id: 1,
    eventDate: 16,
    eventMonth: 'January',
    eventYear: 2025,
    eventTitle: 'Business Innovation And Development Conf.',
    eventPlaceIcon: <FaLocationDot />,
    eventPlace: 'California, USA',
    eventTimeIcon: <LuClock3 />,
    eventTime: '(7.00 am to 9.00 am)',
    eventThumb: eventThumb,
    eventUrl: '/event/business-innovation',
    eventBtnText: 'Join Events',
    eventBtnIcon: <HiArrowLongRight />,
  },
  {
    id: 2,
    eventDate: 21,
    eventMonth: 'January',
    eventYear: 2025,
    eventTitle: 'Career Guidance And Networking event',
    eventPlaceIcon: <FaLocationDot />,
    eventPlace: 'California, USA',
    eventTimeIcon: <LuClock3 />,
    eventTime: '(7.00 am to 9.00 am)',
    eventThumb: eventThumb2,
    eventUrl: '/event/career-guidance',
    eventBtnText: 'Join Events',
    eventBtnIcon: <HiArrowLongRight />,
  },
  {
    id: 3,
    eventDate: 29,
    eventMonth: 'January',
    eventYear: 2025,
    eventTitle: 'Environmental Awarness Conference - 2025',
    eventPlaceIcon: <FaLocationDot />,
    eventPlace: 'California, USA',
    eventTimeIcon: <LuClock3 />,
    eventTime: '(7.00 am to 9.00 am)',
    eventThumb: eventThumb3,
    eventUrl: '/event/environmental-awarness',
    eventBtnText: 'Join Events',
    eventBtnIcon: <HiArrowLongRight />,
  },
];

const Event = () => {
  return (
    <section className='py-16 md:py-20 lg:py-28'>
      <div className='Container'>
        <div className='relative grid items-center grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='border-b border-SecondaryColor-0 border-opacity-15 py-6'>
            <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase pl-4 relative z-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:size-[6px]'>
              OUR COURSES
            </h5>
          </div>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0'>
            Our Courses – Comprehensive
            <br />
            Available all Programs
          </h1>
        </div>
        <div className='event-card space-y-[18px] mt-[58px]'>
          {eventData.map(
            ({
              id,
              eventDate,
              eventMonth,
              eventYear,
              eventTitle,
              eventPlaceIcon,
              eventPlace,
              eventTimeIcon,
              eventTime,
              eventThumb,
              eventUrl,
              eventBtnText,
              eventBtnIcon,
            }) => (
              <div
                key={id}
                className='event-card-box'
              >
                <EventCard
                  eventDate={eventDate}
                  eventMonth={eventMonth}
                  eventYear={eventYear}
                  eventTitle={eventTitle}
                  eventPlaceIcon={eventPlaceIcon}
                  eventPlace={eventPlace}
                  eventTimeIcon={eventTimeIcon}
                  eventTime={eventTime}
                  eventThumb={eventThumb}
                  eventUrl={eventUrl}
                  eventBtnText={eventBtnText}
                  eventBtnIcon={eventBtnIcon}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Event;
