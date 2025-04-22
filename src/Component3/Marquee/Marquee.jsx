import star from '/images/marquee-icon.png';
import './marquee.css';

const Marquee = () => {
  return (
    <div>
      <div className='marquee-text-section'>
        <div className='marquee-animation'>
          <span className='marquee-text-item'>Learning Innovation</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>Worlwide learners</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>Unique Knowledge</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>Best Online School</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
        </div>
        <div className='marquee-animation'>
          <span className='marquee-text-item'>Learning Innovation</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>Worlwide learners</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>Unique Knowledge</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>Best Online School</span>
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
