import { AxiosResponse } from 'axios';

export interface HomeModelProtocol {
  fetchGithubRepository(
    owner: string,
    repository: string,
  ): Promise<AxiosResponse<any, any> | undefined>;
}
