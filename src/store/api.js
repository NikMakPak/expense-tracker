import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react' // warning: webstorm неправильно автомат ставит путь, она забывает добавить в конец /react - будь аккуратнее!

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/' }),
  endpoints: build => ({
    getTransactions: build.query({
      query: () => 'transactions'
    })
  })
})

export const { useGetTransactionsQuery } = api
