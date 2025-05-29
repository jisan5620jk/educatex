/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useRef, useState } from "react";

const PriceRange = () => {
  // Initial min and max prices
  const sliderRef = useRef(null);
  const [minPos, setMinPos] = useState(20); // percentage (0-100)
  const [maxPos, setMaxPos] = useState(60); // percentage (0-100)

  const [dragging, setDragging] = useState(null); // 'min', 'max' or null

  // Mouse down handlers
  const onMouseDownMin = () => setDragging("min");
  const onMouseDownMax = () => setDragging("max");

  // Mouse move handler
  const onMouseMove = (e) => {
    if (!dragging) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse position relative to slider
    const percentage = (x / rect.width) * 100;

    if (dragging === "min") {
      setMinPos((prev) => Math.min(percentage, maxPos - 1));
    } else if (dragging === "max") {
      setMaxPos((prev) => Math.max(percentage, minPos + 1));
    }
  };

  // Mouse up handler
  const onMouseUp = () => {
    setDragging(null);
  };

  // Attach mousemove and mouseup globally when dragging
  React.useEffect(() => {
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
  return (
    <div className="p-4 border rounded shadow-lg font-sans">
      <h2 className="text-lg font-semibold mb-4">Select Price Range</h2>

      <div
        ref={sliderRef}
        className="relative h-16 flex items-center cursor-pointer"
      >
        {/* Track */}
        <div className="absolute w-full h-1 bg-gray-300 rounded top-1/2 transform -translate-y-1/2"></div>

        {/* Selected Range */}
        <div
          className="absolute h-1 bg-green-400 rounded top-1/2 transform -translate-y-1/2"
          style={{
            left: `${minPos}%`,
            width: `${maxPos - minPos}%`,
          }}
        ></div>

        {/* Min Thumb */}
        <div
          className="absolute w-6 h-6 bg-white border-2 border-gray-400 rounded-full cursor-pointer top-1/2 transform -translate-y-1/2"
          style={{ left: `${minPos}%`, marginLeft: -12 }}
          onMouseDown={onMouseDownMin}
        ></div>

        {/* Max Thumb */}
        <div
          className="absolute w-6 h-6 bg-white border-2 border-gray-400 rounded-full cursor-pointer top-1/2 transform -translate-y-1/2"
          style={{ left: `${maxPos}%`, marginLeft: -12 }}
          onMouseDown={onMouseDownMax}
        ></div>
      </div>

      {/* Display selected range */}
      <div className="mt-4 flex justify-between text-gray-700 font-medium px-2">
        <div>Min: ${Math.round((minPos / 100) * 100)}</div>
        <div>Max: ${Math.round((maxPos / 100) * 100)}</div>
      </div>
    </div>
  );
};

export default PriceRange;
