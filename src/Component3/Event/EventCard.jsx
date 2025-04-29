/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const EventCard = ({
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
}) => {

  return (
    <div className='group flex flex-col sm:flex-row sm:items-center gap-8 p-6 rounded-[20px] bg-white transition-all duration-300 relative overflow-hidden'>
      {/* Left Side: Event Image */}
      <div className='flex-shrink-0 w-[220px] sm:w-[200px] md:w-[180px] xl:w-[220px] rounded-[15px] overflow-hidden'>
        <img
          src={eventThumb}
          draggable={false}
          alt='Event Image'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='flex-1'>
        <div className='event-date flex items-center gap-2 text-PrimaryColor-0 mb-3'>
          <span className='text-xl'>{eventDateIcon}</span>
          <p className='uppercase font-Outfit text-base'>
           {eventDate}, {eventMonth}, {eventYear}
          </p>
        </div>

        <Link
          to={eventUrl}
          className='event-title transition-all duration-500 font-Outfit text-base md:text-[22px] lg:text-2xl text-HeadingColor-0 hover:text-PrimaryColor-0 block mb-4 mr-10'
        >
          {eventTitle}
        </Link>

        <div className='flex flex-col gap-2 mb-6 text-[16px]'>
          <div className='flex items-center gap-2'>
            <div className='event-icon text-PrimaryColor-0 text-xl'>
              {eventTimeIcon}
            </div>
            <p className='font-OpenSans text-TextColor-0 text-[15px]'>
              {eventTime}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <div className='event-icon text-PrimaryColor-0 text-xl'>
              {eventPlaceIcon}
            </div>
            <p className='font-OpenSans text-TextColor-0 text-[15px]'>
              {eventPlace}
            </p>
          </div>
        </div>

        <Link to={eventUrl}>
          <button className='event-button font-Outfit flex items-center gap-2 uppercase text-sm bg-PrimaryColor-0 text-white px-5 py-2 rounded-full transition-all duration-500'>
            {eventBtnText}
            <span className='text-lg'>{eventBtnIcon}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
