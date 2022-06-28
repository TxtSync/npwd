import { atom, useRecoilValue } from 'recoil';
import { ResourceConfig } from '@typings/config';

export const phoneState = {
  visibility: atom<boolean>({
    key: 'phoneVisibility',
    default: false,
  }),
  resourceConfig: atom<ResourceConfig>({
    key: 'resourceConfig',
    default: null,
  }),
  phoneTime: atom<string>({
    key: 'phoneTime',
    default: null,
  }),
  isPhoneDisabled: atom<boolean>({
    key: 'isPhoneDisabled',
    default: false,
  }),
  playerSource: atom<number>({
    key: 'playerSource',
    default: 0,
  }),
  coreCreds: atom<any>({
    key: 'coreCreds',
    default: false,
  }),
};

export const useCoreCreds = () => {
  return useRecoilValue(phoneState.coreCreds);
};
