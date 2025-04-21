/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';

const EventCard = ({
  eventDate,
  eventMonth,
  eventYear,
  eventTitle,
  eventPlaceIcon,
  eventPlace,
  eventTime,
  eventTimeIcon,
  eventThumb,
  eventUrl,
  eventBtnText,
  eventBtnIcon,
}) => {
  return (
    <div className='group grid grid-cols-12 items-center rounded-[20px] relative py-8 before:absolute before:left-[19%] before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[100px] before:bg-SecondaryColor-0 before:bg-opacity-10 after:absolute after:left-[57%] after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[100px] after:bg-SecondaryColor-0 after:bg-opacity-10'>
      <div className='col-span-2 flex items-center justify-end gap-5'>
        <div className='event-date font-Outfit font-semibold text-[80px]'>
          <OnScrollCounter
            start={0}
            end={eventDate}
            duration={1000}
          />
        </div>
        <div>
          <h6 className='font-Outfit text-HeadingColor-0 font-medium uppercase'>
            {eventMonth}
          </h6>
          <h6 className='font-Outfit text-HeadingColor-0 font-medium'>
            {eventYear}
          </h6>
        </div>
      </div>
      <div className='col-span-4 pl-20'>
        <Link
          to={eventUrl}
          className='event-title transition-all duration-500 font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[30px] xl:leading-[40px]text-HeadingColor-0 mt-2 mb-4'
        >
          {eventTitle}
        </Link>
      </div>
      <div className='col-span-4 flex flex-col justify-center mx-auto'>
        <div className='flex items-center gap-2'>
          <div className='event-icon'>{eventPlaceIcon}</div>
          <p className='font-OpenSans text-TextColor-0 text-[15px]'>
            {eventPlace}
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='event-icon'>{eventTimeIcon}</div>
          <p className='font-OpenSans text-TextColor-0 text-[15px]'>
            {eventTime}
          </p>
        </div>
      </div>
      <div className='col-span-2'>
        <Link to={eventUrl}>
          <button className='event-button font-Outfit inline-flex items-center gap-2 uppercase text-sm justify-between px-7 py-[12px] border overflow-hidden rounded-full transition-all duration-500 relative z-10 before:absolute before:right-0 before:top-0 before:w-0 before:h-full before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:left-0'>
            {eventBtnText}
            <span className='text-xl'>{eventBtnIcon}</span>
          </button>
        </Link>
      </div>
      <div className='absolute z-10 top-24 left-[56%] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-top-4'>
        <img
          src={eventThumb}
          draggable={false}
          alt='Event Image'
          className='rounded-[20px] rotate-12'
        />
      </div>
    </div>
  );
};

export default EventCard;
