import getFormattedMoney from '@/functions/getFormattedMoney'
import { useGetCurrencySymbolQuery } from '@/store/api'
import Loader from '@/components/Loader'

const Balance = () => {
  const { data, isLoading, error } = useGetCurrencySymbolQuery()
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h5>{error.status} - ваш запрос не обработан :(</h5>
      ) : (
        <h1>{getFormattedMoney(data.symbol, '8,655.90')}</h1>
      )}
    </>
  )
}

export default Balance
