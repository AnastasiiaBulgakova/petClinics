import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../lib';
import { PetType } from '../../types/mainTypes';

import { ColorDTO, BreedDTO } from './managerAppearanceControllerDTO';

export const managerAppearanceApi = createApi({
  reducerPath: 'managerAppearanceApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Color', 'Breed'],
  endpoints: builder => ({
    // Работа с цветами
    getColors: builder.query<ColorDTO, void>({
      query: () => 'manager/color',
      providesTags: ['Color'],
    }),

    addColors: builder.mutation<void, ColorDTO>({
      query: newColor => ({
        url: 'manager/color',
        method: 'POST',
        body: newColor,
      }),
      invalidatesTags: ['Color'],
    }),

    deleteColors: builder.mutation<void, ColorDTO>({
      query: deleteColor => ({
        url: 'manager/color',
        method: 'DELETE',
        body: deleteColor,
      }),
      invalidatesTags: ['Color'],
    }),

    // Работа с пародами
    getBreeds: builder.query<BreedDTO, { petType: PetType }>({
      query: ({ petType }) => `manager/breed?petType=${petType}`,
      providesTags: ['Breed'],
    }),

    addBreeds: builder.mutation<void, BreedDTO>({
      query: breed => ({
        url: 'manager/breed',
        method: 'POST',
        body: breed,
      }),
      invalidatesTags: ['Breed'],
    }),

    deleteBreeds: builder.mutation<void, BreedDTO>({
      query: breed => ({
        url: 'manager/breed',
        method: 'DELETE',
        body: breed,
      }),
      invalidatesTags: ['Breed'],
    }),
  }),
});

export const {
  useGetColorsQuery,
  useAddColorsMutation,
  useDeleteColorsMutation,
  useGetBreedsQuery,
  useAddBreedsMutation,
  useDeleteBreedsMutation,
} = managerAppearanceApi;
