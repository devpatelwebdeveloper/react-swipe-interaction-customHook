import React, { useState } from "react";

const useSwipeDetect = ({ onSwipedLeft, onSwipedRight }) => {
  const [swipeTouchStart, setSwipeTouchStart] = useState(null);
  const [swipeTouchEnd, setSwipeTouchEnd] = useState(null);

  //Swipe in mobile

  const minSwipeDistance = 50; // minimum required distance between swipeTouchStart and swipeTouchEnd to be detected as a swipe
  const onTouchStart = (e) => {
    setSwipeTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setSwipeTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setSwipeTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!swipeTouchStart || !swipeTouchEnd) return;
    const distance = swipeTouchStart - swipeTouchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      onSwipedLeft();
    }
    if (isRightSwipe) {
      onSwipedRight();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};

export default useSwipeDetect;
