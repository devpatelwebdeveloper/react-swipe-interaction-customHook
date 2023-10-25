import React from "react";
import useSwipeDetect from "./useSwipeDetect";

const Slider = () => {
  // const [randomColor, setRandomColor] = useState("#00aeef");
  const createRandomColor = () => {
    const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    document.documentElement.style.setProperty("--main-bg-color", randomColor);
  };

  // Swipe custom
  const swipeHandlers = useSwipeDetect({
    onSwipedLeft: () => {
      createRandomColor();
      console.log("swipeLeft");
    },
    onSwipedRight: () => {
      createRandomColor();
      console.log("swipeLeft");
    }
  });
  // Swipe custom

  // document.documentElement.style.setProperty("--main-bg-color", randomColor);

  return (
    <>
      <div className="slider" {...swipeHandlers}>
        <h2>Slider</h2>
      </div>
    </>
  );
};

export default Slider;
