import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../lib';

import { AddExternalDTO, ExternalDTO } from './externalDTO';

export const externalAPI = createApi({
  reducerPath: 'externalAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['External'],
  endpoints: builder => ({
    deleteExternal: builder.mutation<ExternalDTO, number>({
      query: id => ({
        url: `client/procedure/external/${id}`,
        method: 'DELETE',
      }),
    }),
    getExternalById: builder.query<ExternalDTO, number>({
      query: id => `client/procedure/external/${id}`,
      providesTags: ['External'],
    }),
    getAllExternalByPetId: builder.query<ExternalDTO, number>({
      query: id => `client/procedute/external?petId=${id}`,
      providesTags: ['External'],
    }),
    addExternal: builder.mutation<AddExternalDTO, ExternalDTO>({
      query: ({ id, ...rest }) => ({
        url: `client/procedure/external/${id}`,
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['External'],
    }),
    updateExternal: builder.mutation<ExternalDTO, ExternalDTO>({
      query: body => ({
        url: `client/procedure/external/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['External'],
    }),
  }),
});

export const {
  useDeleteExternalMutation,
  useGetExternalByIdQuery,
  useGetAllExternalByPetIdQuery,
  useAddExternalMutation,
  useUpdateExternalMutation,
} = externalAPI;
