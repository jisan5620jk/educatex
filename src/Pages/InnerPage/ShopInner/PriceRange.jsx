/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useRef, useState, useEffect } from "react";

const PriceRange = () => {
  const sliderRef = useRef(null);
  const [minPos, setMinPos] = useState(20); // percentage (0–100)
  const [maxPos, setMaxPos] = useState(60); // percentage (0–100)
  const [dragging, setDragging] = useState(null); // 'min' or 'max'

  const priceMax = 1000; // Total price range in dollars

  // Mouse down handlers
  const onMouseDownMin = () => setDragging("min");
  const onMouseDownMax = () => setDragging("max");

  // Mouse move handler
  const onMouseMove = (e) => {
    if (!dragging) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    if (dragging === "min") {
      setMinPos(Math.min(Math.max(0, percentage), maxPos - 1));
    } else if (dragging === "max") {
      setMaxPos(Math.max(Math.min(100, percentage), minPos + 1));
    }
  };

  // Mouse up handler
  const onMouseUp = () => setDragging(null);

  // Attach/detach mousemove & mouseup listeners
  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging]);

  // Calculate actual values
  const minValue = Math.round((minPos / 100) * priceMax);
  const maxValue = Math.round((maxPos / 100) * priceMax);

  return (
    <div className="bg-BodyBg-0 px-7 pt-7 pb-7 rounded-lg">
      <h2 className="font-Outfit text-2xl font-medium text-HeadingColor-0 mb-4">
        Select Price Range
      </h2>

      <div
        ref={sliderRef}
        className="relative h-16 flex items-center cursor-pointer"
      >
        {/* Track */}
        <div className="absolute w-full h-1 bg-gray-300 rounded top-1/2 transform -translate-y-1/2"></div>

        {/* Selected Range */}
        <div
          className="absolute h-1 bg-PrimaryColor-0 rounded top-1/2 transform -translate-y-1/2"
          style={{
            left: `${minPos}%`,
            width: `${maxPos - minPos}%`,
          }}
        ></div>

        {/* Min Thumb */}
        <div
          className="absolute w-4 h-4 bg-PrimaryColor-0 rounded-full cursor-pointer top-1/2 transform -translate-y-1/2"
          style={{ left: `${minPos}%`, marginLeft: -12 }}
          onMouseDown={onMouseDownMin}
        ></div>

        {/* Max Thumb */}
        <div
          className="absolute w-4 h-4 bg-PrimaryColor-0 rounded-full cursor-pointer top-1/2 transform -translate-y-1/2"
          style={{ left: `${maxPos}%`, marginLeft: -12 }}
          onMouseDown={onMouseDownMax}
        ></div>
      </div>

      {/* Display selected range */}
      <div className="mt-1 flex justify-between font-Outfit text-HeadingColor-0 font-medium px-2">
        <div>Min: ${minValue}</div>
        <div>Max: ${maxValue}</div>
      </div>

    </div>
  );
};

export default PriceRange;
