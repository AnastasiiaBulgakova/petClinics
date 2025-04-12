import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, prepareHeaders } from '../lib';

import { AddExamPetDTO, BaseExamPetDataDTO, EditExamPetDTO, ExamDataDTO } from './doctorExamDTO';

export const doctorExamApi = createApi({
  reducerPath: 'doctorExamApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders }),
  tagTypes: ['Exam'],
  endpoints: builder => ({
    //Получение клинического обcл по id
    getExam: builder.query<ExamDataDTO, number>({
      query: examId => `doctor/exam/${examId}`,
      providesTags: ['Exam'],
    }),
    //Получение клинического обсл по id питомца
    getExamPet: builder.query<ExamDataDTO, number>({
      query: petId => `doctor/exam?petId=${petId}`,
      providesTags: ['Exam'],
    }),
    //Добавление нового клинического обсл
    addExam: builder.mutation<BaseExamPetDataDTO, AddExamPetDTO>({
      query: ({ newExam, petId }) => ({
        url: `doctor/exam?petId=${petId}`,
        method: 'POST',
        body: newExam,
      }),
      invalidatesTags: ['Exam'],
    }),
    //Обновление инф по ID
    editExam: builder.mutation<BaseExamPetDataDTO, EditExamPetDTO>({
      query: ({ newExam, examId }) => ({
        url: `doctor/exam/${examId}`,
        method: 'PUT',
        body: newExam,
      }),
      invalidatesTags: ['Exam'],
    }),
    //Удаление клинического обсл
    deleteExam: builder.mutation<void, number>({
      query: examId => ({
        url: `doctor/exam/${examId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Exam'],
    }),
  }),
});

export const { useGetExamQuery, useGetExamPetQuery, useAddExamMutation, useEditExamMutation, useDeleteExamMutation } =
  doctorExamApi;
