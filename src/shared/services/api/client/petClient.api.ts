import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../lib/index';

import { PetDTO, NewPetDTO } from './petClientDTO';

export const petClientAPI = createApi({
  reducerPath: 'petClientAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Pet'],
  endpoints: builder => ({
    getPetById: builder.query<PetDTO, number>({
      query: petId => `client/pet/${petId}`,
      providesTags: ['Pet'],
      keepUnusedDataFor: 180,
    }),
    getAllPets: builder.query<PetDTO[], void>({
      query: () => 'client/pet',
      providesTags: ['Pet'],
      keepUnusedDataFor: 180,
    }),
    addPet: builder.mutation<PetDTO, NewPetDTO>({
      query: newPet => ({
        url: 'client/pet',
        method: 'POST',
        body: newPet,
      }),
      invalidatesTags: ['Pet'],
    }),
    updatePet: builder.mutation<PetDTO, { petId: number; pet: Partial<NewPetDTO> }>({
      query: ({ petId, pet }) => ({
        url: `client/pet/${petId}`,
        method: 'PUT',
        body: pet,
      }),
      invalidatesTags: ['Pet'],
    }),
    deletePet: builder.mutation<void, number>({
      query: petId => ({
        url: `client/pet/${petId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pet'],
    }),
  }),
});

export const { useGetPetByIdQuery, useGetAllPetsQuery, useAddPetMutation, useUpdatePetMutation, useDeletePetMutation } =
  petClientAPI;
