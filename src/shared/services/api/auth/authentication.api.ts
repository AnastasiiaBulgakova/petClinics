import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { removeFromStorageKeys, setLocalStorageKeys, setSessionStorageKeys } from '../lib/storage';
import { prepareHeaders } from '../lib/prepareHeadersApi';
import { baseUrl } from '../lib/consts';

import { loginBody, loginResponse } from './authenticationDTO';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders,
  }),
  tagTypes: ['Auth'],
  endpoints: build => ({
    loginUser: build.mutation<loginResponse, { body: loginBody; rememberMe: boolean }>({
      query: ({ body }) => ({
        url: 'auth',
        method: 'POST',
        body,
      }),
      async onQueryStarted({ rememberMe }, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.jwtToken) {
            if (rememberMe) {
              setLocalStorageKeys([
                { key: 'jwtToken', value: data.jwtToken },
                { key: 'role', value: data.role },
              ]);
            } else {
              setSessionStorageKeys([
                { key: 'jwtToken', value: data.jwtToken },
                { key: 'role', value: data.role },
              ]);
            }
          }
        } catch (error) {
          console.error(error);
        }
      },
      invalidatesTags: ['Auth'],
    }),
    getCurrentUserByToken: build.query<loginResponse, void>({
      query: () => ({
        url: 'auth/getCurrent',
        method: 'GET',
      }),
      providesTags: ['Auth'],
    }),
    checkUserToken: build.mutation<boolean, string>({
      query: body => ({
        url: 'auth/token',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    logoutUser: build.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      async onQueryStarted() {
        try {
          await prepareHeaders;
          removeFromStorageKeys(['jwtToken', 'role']);
        } catch (error) {
          console.error(error);
        }
      },
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useLoginUserMutation, useCheckUserTokenMutation, useGetCurrentUserByTokenQuery, useLogoutUserMutation } =
  authAPI;
