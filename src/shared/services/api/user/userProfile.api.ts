import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { prepareHeaders } from '../lib/prepareHeadersApi';
import { baseUrl } from '../lib/consts';

import { profileDTO } from './userProfileDTO';

export const userProfileAPI = createApi({
  reducerPath: 'userProfileApi',
  baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders: prepareHeaders }),
  tagTypes: ['userProfile'],
  endpoints: builder => ({
    getUserProfile: builder.query<profileDTO, void>({
      query: () => 'user/profile',
      providesTags: ['userProfile'],
    }),
    updateUserProfile: builder.mutation<profileDTO, profileDTO>({
      query: updatedProfile => ({
        url: 'user/profile',
        body: updatedProfile,
        method: 'PUT',
      }),
      invalidatesTags: ['userProfile'],
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } = userProfileAPI;
