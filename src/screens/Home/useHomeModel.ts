import axios, { AxiosResponse } from 'axios';
import { useCallback } from 'react';
import type { HomeModelProtocol } from './types';

export const useHomeModel = (): HomeModelProtocol => {
  const fetchGithubRepository = useCallback(
    async (
      owner: string,
      repo: string,
    ): Promise<AxiosResponse<any, any> | undefined> => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}`,
        );
        return response;
      } catch (error) {
        console.error(error);
      }
    },
    [],
  );

  return {
    fetchGithubRepository,
  };
};
