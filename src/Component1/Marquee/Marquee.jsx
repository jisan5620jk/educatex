import star from '/images/marquee-icon.png';

const Marquee = () => {
  const marqueeItems = [
    'ARTIFICIAL INTELLIGENCE',
    'DATA SCIENCE',
    'Industrial Robotics',
  ];

  const doubledItems = marqueeItems.concat(marqueeItems);

  return (
    <div className='w-full overflow-hidden whitespace-nowrap bg-PrimaryColor-0 py-10'>
      {[1, 2].map((row) => (
        <div
          key={`row-${row}`}
          className='inline-flex will-change-transform animate-marquee hover:[animation-play-state:paused]'
        >
          {doubledItems.map((text, index) => (
            <div
              key={`${row}-${index}`}
              className='flex items-center'
            >
              <span className='inline-block text-3xl md:text-[34px] text-white uppercase font-Rajdhani font-medium mx-5 md:mx-10'>
                {text}
              </span>
              <span className='inline-block w-5 md:w-[35px] pt-1 md:pt-0'>
                <img
                  src={star}
                  draggable={false}
                  alt='Star'
                  className='w-full animate-rotational'
                />
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
