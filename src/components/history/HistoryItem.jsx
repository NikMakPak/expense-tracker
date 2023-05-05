import React from 'react'
import getFormattedMoney from '@/functions/getFormattedMoney'
import { useGetCurrencySymbolQuery } from '@/store/api'
import Loader from '@/components/Loader'

const HistoryItem = ({ transaction }) => {
  const { data, isLoading, error } = useGetCurrencySymbolQuery()
  return (
    <li key={transaction.id}>
      <div className='icon'>
        {/*  иконка вытягивается из мап листа по названию тега*/}
      </div>
      <div className='content'>
        <h4 className='category'>{transaction.category}</h4>
        <h5 className='date'>{transaction.date}</h5>
      </div>
      <div className={`amount ${transaction.spendType}`}>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <h5>{error.status} - ваш запрос не обработан :(</h5>
        ) : (
          getFormattedMoney(data.symbol, transaction.amount)
        )}
      </div>
    </li>
  )
}

export default HistoryItem
