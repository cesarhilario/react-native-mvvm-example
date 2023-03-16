import { useCallback } from 'react';
import { useState } from 'react';
import { useHomeViewModel } from './useHomeViewModel';

export const useHomeViewController = () => {
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);
  const [buttonsEnabled, setButtonEnabled] = useState(false);

  const {
    lazyFetchGithubRepository,
    getForksCountFromRepository,
    getStarsFromRepository,
  } = useHomeViewModel();

  const handleGetRepository = useCallback(() => {
    lazyFetchGithubRepository();
    setButtonEnabled(true);
  }, [lazyFetchGithubRepository]);

  const handleGetStars = useCallback(async () => {
    const starsFromRepository = await getStarsFromRepository();
    setStars(starsFromRepository);
  }, [getStarsFromRepository]);

  const handleGetForks = useCallback(async () => {
    const forksFromRepository = await getForksCountFromRepository();
    setForks(forksFromRepository);
  }, [getForksCountFromRepository]);

  return {
    handleGetRepository,
    handleGetStars,
    handleGetForks,
    stars,
    forks,
    buttonsEnabled,
  };
};
