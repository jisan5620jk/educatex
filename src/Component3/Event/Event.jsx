import { LuCalendarCheck } from 'react-icons/lu';
import EventCard from './EventCard';
import './event.css';
import eventThumb1 from '/images/event-thumb41.png';
import eventThumb2 from '/images/event-thumb42.png';
import eventThumb3 from '/images/event-thumb43.png';
import eventThumb4 from '/images/event-thumb44.png';
import shape from '/images/event-shape41.png';
import shape2 from '/images/event-shape42.png';
import subTilteIcon from '/images/sub-title2.png';
import { IoAlarmOutline, IoLocationSharp } from 'react-icons/io5';
import { HiArrowNarrowRight } from 'react-icons/hi';

const eventData = [
  {
    id: 1,
    eventDate: 12,
    eventMonth: 'Feb',
    eventYear: 2025,
    eventDateIcon: <LuCalendarCheck />,
    eventTitle: 'Tiny Hand Big Creations Festival - 2025',
    eventPlaceIcon: <IoLocationSharp />,
    eventPlace: 'California, USA',
    eventTimeIcon: <IoAlarmOutline />,
    eventTime: '(7.00 am to 9.00 am)',
    eventThumb: eventThumb1,
    eventUrl: '/event',
    eventBtnText: 'Join Events',
    eventBtnIcon: <HiArrowNarrowRight />,
  },
  {
    id: 2,
    eventDate: 13,
    eventMonth: 'Feb',
    eventYear: 2025,
    eventDateIcon: <LuCalendarCheck />,
    eventTitle: 'A Journey Through Tales And Imagination',
    eventPlaceIcon: <IoLocationSharp />,
    eventPlace: 'Sandigo, USA',
    eventTimeIcon: <IoAlarmOutline />,
    eventTime: '(10.00 am to 12.00 pm)',
    eventThumb: eventThumb2,
    eventUrl: '/event',
    eventBtnText: 'Join Events',
    eventBtnIcon: <HiArrowNarrowRight />,
  },
  {
    id: 3,
    eventDate: 14,
    eventMonth: 'Feb',
    eventYear: 2025,
    eventDateIcon: <LuCalendarCheck />,
    eventTitle: 'Mini Olympians Fun Fitness Friendly Competition',
    eventPlaceIcon: <IoLocationSharp />,
    eventPlace: 'Melborne, Australia',
    eventTimeIcon: <IoAlarmOutline />,
    eventTime: '(9.00 am to 11.00 am)',
    eventThumb: eventThumb3,
    eventUrl: '/event',
    eventBtnText: 'Join Events',
    eventBtnIcon: <HiArrowNarrowRight />,
  },
  {
    id: 4,
    eventDate: 15,
    eventMonth: 'Feb',
    eventYear: 2025,
    eventDateIcon: <LuCalendarCheck />,
    eventTitle: 'Rainbow Dreams Arts Festival - 2025',
    eventPlaceIcon: <IoLocationSharp />,
    eventPlace: 'California, USA',
    eventTimeIcon: <IoAlarmOutline />,
    eventTime: '(7.00 am to 9.00 am)',
    eventThumb: eventThumb4,
    eventUrl: '/event',
    eventBtnText: 'Join Events',
    eventBtnIcon: <HiArrowNarrowRight />,
  },
];

const Event = () => {
  return (
    <section className='bg-[url("/images/event-bg4.png")] bg-cover bg-center bg-no-repeat py-52 sm:py-40 md:py-40 lg:py-[180px] relative z-10'>
      <div className='absolute left-60 top-52 hidden xl:block'>
        <img
          src={shape}
          draggable={false}
          alt='Shape'
          className='animate-flip'
        />
      </div>
      <div className='absolute right-48 top-72 hidden xl:block'>
        <img
          src={shape2}
          draggable={false}
          alt='Shape'
          className='animate-dance'
        />
      </div>
      <div className='Container px-0'>
        <div className='text-center'>
          <h5 className='font-Outfit font-medium text-PrimaryColor-0 uppercase flex items-center justify-center gap-3'>
            <img
              src={subTilteIcon}
              draggable={false}
              alt='Icon'
            />{' '}
            JOIN EVENTS
          </h5>
          <h1 className='font-Outfit font-semibold text-xl leading-7 sm:text-[30px] sm:leading-[40px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-2 mb-4'>
            Upcoming Events and Celebrations <br className='hidden sm:block' /> For Our Little Learners
          </h1>
        </div>
        <div className='event-card2 grid grid-cols-1 xl:grid-cols-2 items-center gap-6 mt-[50px]'>
          {eventData.map(
            ({
              id,
              eventDate,
              eventMonth,
              eventYear,
              eventDateIcon,
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
                className='event-card2-box'
              >
                <EventCard
                  eventDate={eventDate}
                  eventMonth={eventMonth}
                  eventYear={eventYear}
                  eventDateIcon={eventDateIcon}
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
