import getFormattedMoney from '@/functions/getFormattedMoney'
import { useGetCurrencySymbolQuery } from '@/store/api'
import Loader from '@/components/Loader'

const TotalBlock = ({ spendType }) => {
  const { data, isLoading, error } = useGetCurrencySymbolQuery()
  return (
    <div>
      {spendType}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h5>{error.status} - ваш запрос не обработан :(</h5>
      ) : (
        getFormattedMoney(data.symbol, 100)
      )}
    </div>
  )
}

export default TotalBlock
