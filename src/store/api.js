import {createApi} from '@reduxjs/toolkit/query/react'

const url = 'http://localhost:4200/'
export const api = createApi({
  reducerPath: 'api',
  endpoints: builder => ({
    getTransactions: builder.query({
      queryFn: async () => {
        try {
          const response = await fetch(url + 'transactions')
          return { data: await response.json() }
        } catch (e) {
          // todo: исправить обработку ошибок (крашится все приложение если есть ошибка) - причина не ясна - 28.04.2023
          return { error: e.message }
        }
      }
    })
  })
})

export const { useGetTransactionsQuery } = api
