import { BaseQueryApi } from '@reduxjs/toolkit/query';

import { RootState } from '@/shared/services';

export const prepareHeaders = (headers: Headers, { getState }: Pick<BaseQueryApi, 'getState'>) => {
  const state = getState() as RootState;
  const jwtTokenState = state.authenticationSlice?.jwtToken;

  const jwtToken = jwtTokenState || localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken');

  if (jwtToken) {
    const clearToken = jwtToken.replace(/\bBearer\b/g, '').trim();
    headers.set('Authorization', `Bearer ${clearToken}`);
  }

  headers.set('Accept', '*/*');
  headers.set('Content-Type', 'application/json');

  return headers;
};
