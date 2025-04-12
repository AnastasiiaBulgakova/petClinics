import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ClientNewsDTO } from '@api/api/client/clientNewsDTO.ts';
import { baseUrl } from '@api/api/lib';

export const clientNewsAPI = createApi({
  reducerPath: 'clientNewsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ['ClientNews'],
  endpoints: builder => ({
    getClientNews: builder.query<ClientNewsDTO[], void>({
      query: () => '/client/news',
      providesTags: ['ClientNews'],
    }),
  }),
});

export const { useGetClientNewsQuery } = clientNewsAPI;
