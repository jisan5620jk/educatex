import star from '/images/marquee-icon.png';

const Marquee = () => {
  const marqueeItems = [
    'learning innovation',
    'worldwide learners',
    'unique knowledge',
    'Learn Smartly',
  ];

  return (
    <div className='fade-up w-full overflow-hidden whitespace-nowrap bg-PrimaryColor-0 pt-14 pb-12'>
      <div className='inline-flex will-change-transform overflow-hidden animate-marquee transition-all hover:animate-paused'>
        {marqueeItems.concat(marqueeItems).map((text, index) => (
          <>
            <span
              key={`text-${index}`}
              className='inline-block text-2xl md:text-[34px] text-white uppercase font-Outfit font-semibold mx-5 md:mx-8'
            >
              {text}
            </span>
            <span
              key={`star-${index}`}
              className='inline-block w-5 md:w-[35px] pt-1 md:pt-0 md:pb-1'
            >
              <img
                src={star}
                draggable={false}
                alt='Star'
                className='w-full animate-rotational'
              />
            </span>
          </>
        ))}
      </div>
      <div className='inline-flex will-change-transform overflow-hidden animate-marquee transition-all hover:animate-paused'>
        {marqueeItems.concat(marqueeItems).map((text, index) => (
          <>
            <span
              key={`text-${index}`}
              className='inline-block text-2xl md:text-[34px] text-white uppercase font-Outfit font-semibold mx-5 md:mx-8'
            >
              {text}
            </span>
            <span
              key={`star-${index}`}
              className='inline-block w-5 md:w-[35px] pt-1 md:pt-0 md:pb-1'
            >
              <img
                src={star}
                draggable={false}
                alt='Star'
                className='w-full animate-rotational'
              />
            </span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
