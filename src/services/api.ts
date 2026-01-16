import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getOnRestaurants: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantMenu: builder.query<Restaurants, number>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetOnRestaurantsQuery,
  useGetRestaurantMenuQuery,
  usePurchaseMutation
} = api

export default api
