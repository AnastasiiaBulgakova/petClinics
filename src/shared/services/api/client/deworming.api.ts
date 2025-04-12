import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../lib/consts';

import { DewormingDTO } from './dewormingDTO';

export const dewormingAPI = createApi({
  reducerPath: 'dewormingAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Deworming'],
  endpoints: builder => ({
    deleteDewormingProcedure: builder.mutation<DewormingDTO, number>({
      query: id => ({
        url: `client/procedure/deworming/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Deworming'],
    }),
    getDewormingProcedureById: builder.query<DewormingDTO, number>({
      query: id => `client/procedure/deworming/${id}`,
      providesTags: ['Deworming'],
    }),
    getDewormingProcedureByPetId: builder.query<DewormingDTO, number>({
      query: id => `client/procedure/deworming?petId=${id}`,
      providesTags: ['Deworming'],
    }),
    addNewDewormingProcedure: builder.mutation<DewormingDTO, DewormingDTO>({
      query: ({ id, ...rest }) => ({
        url: `client/procedure/deworming?petId=${id}`,
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['Deworming'],
    }),
    updateDewormingProcedure: builder.mutation<DewormingDTO, DewormingDTO>({
      query: ({ id, ...body }) => ({
        url: `client/procedure/deworming/${id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Deworming'],
    }),
  }),
});

export const {
  useDeleteDewormingProcedureMutation,
  useGetDewormingProcedureByIdQuery,
  useGetDewormingProcedureByPetIdQuery,
  useAddNewDewormingProcedureMutation,
  useUpdateDewormingProcedureMutation,
} = dewormingAPI;
