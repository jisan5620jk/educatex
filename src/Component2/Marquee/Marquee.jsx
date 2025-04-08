import star from '/images/star.png';
import './marquee.css';

const Marquee = () => {
  return (
    <div>
      <div className='marquee-text-section'>
        <div className='marquee-animation'>
          <span className='marquee-text-item'>ARTIFICIAL INTELLIGENCE</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>DATA SCIENCE</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>Industrial Robotics</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>ARTIFICIAL INTELLIGENCE</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>DATA SCIENCE</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
        </div>
        <div className='marquee-animation'>
          <span className='marquee-text-item'>ARTIFICIAL INTELLIGENCE</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>DATA SCIENCE</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>Industrial Robotics</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>ARTIFICIAL INTELLIGENCE</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>DATA SCIENCE</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
