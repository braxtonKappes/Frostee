import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const frostyApi = createApi({

  reducerPath: 'frostyApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `users/${id}`,
      providesTags: ['User']
    }),

    createUser: builder.mutation({
      query(data) {
        return {
          url: 'users/signup',
          method: 'POST',
          body: data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      },
      invalidatesTags: ['User']
    }),

    updateUser: builder.mutation({
      query(data) {
        return {
          url: 'users',
          method: 'PUT',
          body: data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      },
      invalidatesTags: ['User']

    }),







  })
});

export const { 
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation 
} = frostyApi;