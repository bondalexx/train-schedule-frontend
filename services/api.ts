import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers) => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Trains'],
  endpoints: (builder) => ({
    getTrains: builder.query<any[], void>({
      query: () => '/trains',
      providesTags: ['Trains'],
    }),
    createTrain: builder.mutation<any, any>({
      query: (train) => ({
        url: '/trains',
        method: 'POST',
        body: train,
      }),
      invalidatesTags: ['Trains'],
    }),
    updateTrain: builder.mutation<any, { id: number } & any>({
      query: ({ id, ...rest }) => ({
        url: `/trains/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Trains'],
    }),
    deleteTrain: builder.mutation<any, number>({
      query: (id) => ({
        url: `/trains/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Trains'],
    }),
    register: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetTrainsQuery,
  useCreateTrainMutation,
  useUpdateTrainMutation,
  useDeleteTrainMutation,
  useRegisterMutation,
  useLoginMutation,
} = api;