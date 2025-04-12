import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, prepareHeaders } from '../lib';

import { DiagnosisDTO } from './doctorDTO';

export const doctorAPI = createApi({
  reducerPath: 'doctorApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  tagTypes: ['Doctor'],
  endpoints: builder => ({
    addDiagnosis: builder.mutation<DiagnosisDTO, { petId: number; diagnos: string }>({
      query: ({ petId, diagnos }) => ({
        url: `doctor/pet/${petId}/addDiagnosis`,
        method: 'POST',
        body: diagnos,
      }),
      invalidatesTags: ['Doctor'],
    }),
  }),
});

export const { useAddDiagnosisMutation } = doctorAPI;
