import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import type { HomeViewProps } from './types';

export const View = ({
  handleGetRepository,
  handleGetStars,
  handleGetForks,
  stars,
  forks,
  buttonsEnabled,
}: HomeViewProps): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>Estrelas: {stars}</Text>
      <Text>Forks: {forks}</Text>
      <Button title="Obter repositório" onPress={handleGetRepository} />
      <Button
        title="Obter estrelas"
        onPress={handleGetStars}
        disabled={!buttonsEnabled}
      />
      <Button
        title="Obter forks"
        onPress={handleGetForks}
        disabled={!buttonsEnabled}
      />
    </SafeAreaView>
  );
};
