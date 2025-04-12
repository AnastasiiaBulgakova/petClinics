import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../lib';

import { ReproductionDTO, ReproductionParamsDTO } from './reproductionDTO';

export const reproductionAPI = createApi({
  reducerPath: 'reproductionAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Reproduction'],
  endpoints: builder => ({
    deleteReproductionById: builder.mutation<ReproductionDTO, ReproductionParamsDTO>({
      query: ({ petId, reproductionId }) => ({
        url: `client/pet/${petId}/reproduction/${reproductionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reproduction'],
    }),
    getReproductionById: builder.query<ReproductionDTO, ReproductionParamsDTO>({
      query: ({ petId, reproductionId }) => `client/pet/${petId}/reproduction/${reproductionId}`,
      providesTags: ['Reproduction'],
    }),
    getAllReproduction: builder.query<ReproductionDTO[], number>({
      query: id => `client/pet/${id}/reproduction`,
      providesTags: ['Reproduction'],
    }),
    addNewReproduction: builder.mutation<ReproductionDTO, { petId: string; data: ReproductionDTO }>({
      query: ({ petId, data }) => ({
        url: `client/pet/${petId}/reproduction`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Reproduction'],
    }),
    updateReproductionById: builder.mutation<
      ReproductionDTO,
      { petId: number; reproductionId: number; data: ReproductionDTO }
    >({
      query: ({ petId, reproductionId, data }) => ({
        url: `client/pet/${petId}/reproduction/${reproductionId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Reproduction'],
    }),
  }),
});

export const {
  useDeleteReproductionByIdMutation,
  useGetReproductionByIdQuery,
  useGetAllReproductionQuery,
  useAddNewReproductionMutation,
  useUpdateReproductionByIdMutation,
} = reproductionAPI;
