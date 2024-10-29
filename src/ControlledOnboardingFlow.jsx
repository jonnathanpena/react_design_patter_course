import React from "react";

export const ControlledOnboardingFlow = ({
  children,
  onFinish,
  currentIndex,
  onNext,
}) => {
  const currentChild = React.Children.toArray(children)[currentIndex];

  const goToNext = stepData => {
    onNext(stepData);
  };

  return React.cloneElement(currentChild, { goToNext });
};