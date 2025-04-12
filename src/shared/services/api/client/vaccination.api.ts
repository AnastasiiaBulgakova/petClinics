import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../lib/index';

import { VaccinationDTO, AddVaccinationDTO } from './vaccinationDTO';

export const vaccinationAPI = createApi({
  reducerPath: 'vaccinationAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  tagTypes: ['Vaccination'],
  endpoints: builder => ({
    deleteVaccination: builder.mutation<VaccinationDTO, number>({
      query: id => ({
        url: `client/procedure/vaccination/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Vaccination'],
    }),
    getVaccinationByProcedureId: builder.query<VaccinationDTO, number>({
      query: id => `client/procedure/vaccination/${id}`,
      providesTags: ['Vaccination'],
    }),
    getAllVaccinationProceduresByPetId: builder.query<VaccinationDTO, number>({
      query: id => `client/procedure/vaccination?petId=${id}`,
      providesTags: ['Vaccination'],
    }),
    addVaccinationProcedure: builder.mutation<AddVaccinationDTO, VaccinationDTO>({
      query: ({ id, ...rest }) => ({ url: `client/procedure/vaccination?petId=${id}`, method: 'POST', body: rest }),
      invalidatesTags: ['Vaccination'],
    }),
    updateVaccinations: builder.mutation<VaccinationDTO, VaccinationDTO>({
      query: body => ({ url: `client/procedure/vaccination/${body.id}`, method: 'PUT', body: body }),
      invalidatesTags: ['Vaccination'],
    }),
  }),
});

export const {
  useDeleteVaccinationMutation,
  useGetVaccinationByProcedureIdQuery,
  useGetAllVaccinationProceduresByPetIdQuery,
  useAddVaccinationProcedureMutation,
  useUpdateVaccinationsMutation,
} = vaccinationAPI;
