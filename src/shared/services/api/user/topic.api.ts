import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../lib';

import { TopicDTO, CreateTopicDTO, CommentDTO } from './topicDTO';

export const topicAPI = createApi({
  reducerPath: 'topicApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Topic'],
  endpoints: builder => ({
    deleteTopic: builder.mutation<void, number>({
      query: topicId => ({
        url: `user/topic/${topicId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Topic'],
    }),
    getTopicById: builder.query<TopicDTO, number>({
      query: topicId => `user/topic/${topicId}`,
      providesTags: ['Topic'],
    }),
    getAllTopics: builder.query<TopicDTO[], void>({
      query: () => 'user/topic/allTopics',
      providesTags: ['Topic'],
    }),
    createTopic: builder.mutation<TopicDTO, CreateTopicDTO>({
      query: newTopic => ({
        url: 'user/topic',
        method: 'POST',
        body: newTopic,
      }),
      invalidatesTags: ['Topic'],
    }),
    addCommentToTopic: builder.mutation<void, { topicId: number; comment: Partial<CommentDTO> }>({
      query: ({ topicId, comment }) => ({
        url: `user/topic/${topicId}/addComment`,
        method: 'POST',
        body: comment,
      }),
      invalidatesTags: ['Topic'],
    }),
    updateTopic: builder.mutation<void, { topicId: number; updatedTopic: Partial<TopicDTO> }>({
      query: ({ topicId, updatedTopic }) => ({
        url: `user/topic/${topicId}`,
        method: 'PUT',
        body: updatedTopic,
      }),
      invalidatesTags: ['Topic'],
    }),
    getYourTopics: builder.query<TopicDTO[], void>({
      query: () => 'user/topic/yourTopics',
      providesTags: ['Topic'],
    }),
  }),
});

export const {
  useDeleteTopicMutation,
  useGetTopicByIdQuery,
  useGetAllTopicsQuery,
  useCreateTopicMutation,
  useAddCommentToTopicMutation,
  useUpdateTopicMutation,
  useGetYourTopicsQuery,
} = topicAPI;
