import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { prepareHeaders } from '../lib';
import { baseUrl } from '../lib';

import { DoctorNonWorkingDTO } from './adminDoctorNonWorkingDTO';

export const adminDoctorNonWorkingApi = createApi({
  reducerPath: 'adminDoctorNonWorkingApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  tagTypes: ['DoctorNonWorking'],
  endpoints: builder => ({
    deleteDoctorNonWorking: builder.mutation<void, number>({
      query: doctorId => ({
        url: `admin/doctor_non_working/${doctorId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['DoctorNonWorking'],
    }),
    addDoctorNonWorking: builder.mutation<void, DoctorNonWorkingDTO>({
      query: body => ({
        url: 'admin/doctor_non_working/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['DoctorNonWorking'],
    }),
    editDoctorNonWorking: builder.mutation<void, DoctorNonWorkingDTO>({
      query: body => ({
        url: `admin/doctor_non_working/${body.doctorNonWorkingId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['DoctorNonWorking'],
    }),
  }),
});

export const { useDeleteDoctorNonWorkingMutation, useAddDoctorNonWorkingMutation, useEditDoctorNonWorkingMutation } =
  adminDoctorNonWorkingApi;
