import React, { useState } from "react";

export const UncontrolledOnboardingFlow = ({
  children,
  onFinish,
}) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChild = React.Children.toArray(children)[currentIndex];

  const goToNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return React.cloneElement(currentChild, { goToNext });
};