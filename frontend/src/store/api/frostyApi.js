import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const frostyApi = createApi({

  reducerPath: 'frostyApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `users/${id}`,
      providesTags: (result) =>
        result ?
          [
            ...result.map(({ id }) => ({ type: 'Users', id})),
            { type: 'Users', id: 'LIST' },
          ]
        :
          [{ type: 'Users', id: 'LIST'}],
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
      invalidatesTags: [{ type: 'Users', id: 'LIST '}]
    }),

    updateUser: builder.mutation({
      query(data) {
        return {
          url: 'users',
          method: 'PUT',
          body: data
        }
      },
      invalidatesTags: (res, err, { id }) => [{ type: 'Users', id }]

    }),







  })
});

export const { 
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation 
} = frostyApi;