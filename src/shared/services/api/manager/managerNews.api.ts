import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../lib';

import { NewsDTO, CreateNewsDTO } from './managerNewsDTO';

export const managerNewsAPI = createApi({
  reducerPath: 'managerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['News'],
  endpoints: builder => ({
    getAllNews: builder.query<NewsDTO[], void>({
      query: () => 'manager/news',
      providesTags: ['News'],
    }),
    getNewsById: builder.query<NewsDTO, number>({
      query: id => `manager/news/${id}`,
      providesTags: ['News'],
    }),
    createNews: builder.mutation<NewsDTO, CreateNewsDTO>({
      query: newNews => ({
        url: 'manager/news',
        method: 'POST',
        body: newNews,
      }),
      invalidatesTags: ['News'],
    }),
    updateNews: builder.mutation<NewsDTO, { id: number; news: Partial<NewsDTO> }>({
      query: ({ id, news }) => ({
        url: `manager/news/${id}`,
        method: 'PUT',
        body: news,
      }),
      invalidatesTags: ['News'],
    }),
    deleteNews: builder.mutation<void, number>({
      query: id => ({
        url: `manager/news/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['News'],
    }),
    addPicturesToNews: builder.mutation<void, { id: number; pictures: string[] }>({
      query: ({ id, pictures }) => ({
        url: `manager/news/${id}/pictures/`,
        method: 'PUT',
        body: pictures,
      }),
      invalidatesTags: ['News'],
    }),
    unpublishNews: builder.mutation<void, number[]>({
      query: ids => ({
        url: 'manager/news/unpublish',
        method: 'PUT',
        body: ids,
      }),
      invalidatesTags: ['News'],
    }),
    publishNews: builder.mutation<void, number[]>({
      query: ids => ({
        url: 'manager/news/publish',
        method: 'PUT',
        body: ids,
      }),
      invalidatesTags: ['News'],
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  useGetNewsByIdQuery,
  useCreateNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
  useAddPicturesToNewsMutation,
  useUnpublishNewsMutation,
  usePublishNewsMutation,
} = managerNewsAPI;
