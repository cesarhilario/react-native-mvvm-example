import { AxiosResponse } from 'axios';
import { atom } from 'jotai';

export const repositoryAtom = atom<AxiosResponse<any, any>>(
  {} as AxiosResponse<any, any>,
);
