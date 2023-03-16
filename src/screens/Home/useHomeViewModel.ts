import { repositoryAtom } from './states';
import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { useHomeModel } from './useHomeModel';
import { AxiosResponse } from 'axios';

export const useHomeViewModel = () => {
  const [repositoryAtomValue, setRepositoryAtomValue] = useAtom(repositoryAtom);
  const { fetchGithubRepository } = useHomeModel();

  const lazyFetchGithubRepository = useCallback(async () => {
    if (!repositoryAtomValue?.data) {
      try {
        const response = await fetchGithubRepository(
          'facebook',
          'react-native',
        );
        if (response) {
          setRepositoryAtomValue(response.data);
          return response.data;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return repositoryAtomValue?.data;
    }
  }, [fetchGithubRepository, repositoryAtomValue, setRepositoryAtomValue]);

  const resetRepositoryAtomValue = useCallback(() => {
    setRepositoryAtomValue({} as AxiosResponse<any, any>);
  }, [setRepositoryAtomValue]);

  const getStarsFromRepository = useCallback(async () => {
    const repository = await lazyFetchGithubRepository();
    return repository?.stargazers_count;
  }, [lazyFetchGithubRepository]);

  const getForksCountFromRepository = useCallback(async () => {
    const repository = await lazyFetchGithubRepository();
    return repository?.forks_count;
  }, [lazyFetchGithubRepository]);

  return {
    lazyFetchGithubRepository,
    getForksCountFromRepository,
    getStarsFromRepository,
    resetRepositoryAtomValue,
  };
};
