import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ClientResponse, AvatarResponse } from '@api/api/client/clientDTO';

import { baseUrl } from '../lib';

export const clientAPI = createApi({
  reducerPath: 'clientAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Client', 'Avatar'],
  endpoints: builder => ({
    getClientWithPets: builder.query<ClientResponse, void>({
      query: () => '/client',
      providesTags: ['Client'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error('Ошибка при получении клиента:', error);
        }
      },
    }),

    getClientAvatar: builder.query<string[], void>({
      query: () => '/client/avatar',
      providesTags: ['Avatar'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error('Ошибка при получении аватара клиента:', error);
        }
      },
    }),

    uploadClientAvatar: builder.mutation<AvatarResponse, FormData>({
      query: formData => ({
        url: '/client/avatar',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Avatar'],
    }),
  }),
});

export const { useGetClientWithPetsQuery, useGetClientAvatarQuery, useUploadClientAvatarMutation } = clientAPI;
