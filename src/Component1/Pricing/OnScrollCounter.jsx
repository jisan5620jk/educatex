/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const OnScrollCounter = ({ start = 0, end = 1000, duration = 2000 }) => {
  const [counter, setCounter] = useState(start);
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCounter(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, start, end, duration]);

  return (
    <div ref={ref}>
      <Odometer
        value={counter}
        format='(,ddd)'
      />
    </div>
  );
};

export default OnScrollCounter;
