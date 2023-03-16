import React from 'react';
import { View } from './View';
import { useHomeViewController } from './useHomeViewController';

export const Home = () => {
  const {
    stars,
    forks,
    buttonsEnabled,
    handleGetRepository,
    handleGetStars,
    handleGetForks,
  } = useHomeViewController();
  return (
    <View
      stars={stars}
      forks={forks}
      buttonsEnabled={buttonsEnabled}
      handleGetRepository={handleGetRepository}
      handleGetStars={handleGetStars}
      handleGetForks={handleGetForks}
    />
  );
};
