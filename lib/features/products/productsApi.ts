import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product { /* your interface from before */ }

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.escuelajs.co/api/v1',
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { offset?: number; limit?: number }>({
      query: ({ offset = 0, limit = 10 }) => `products?offset=${offset}&limit=${limit}`,
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useLazyGetProductsQuery 
} = productsApi;