import Link from 'next/link'
import { useGetTransactionsQuery } from '@/store/api'
import HistoryItem from '@/components/history/HistoryItem'
import Loader from '@/components/Loader'

const History = ({ cardID }) => {
  const { data: history, isLoading, error } = useGetTransactionsQuery() // todo: сделать первый лоад через серверный рендер, далее при повторном посещении страницы делать refresh данных
  return (
    <div>
      <div className='head'>
        <h4>History</h4>
        <Link href={'/history'}>See all</Link>
      </div>
      {isLoading ? (
        <Loader /> // todo: сделать лоадер react skeleton
      ) : error ? (
        <h5>{error.status} - ваш запрос не обработан :(</h5>
      ) : (
        <ul>
          {history.map(transaction => (
            <HistoryItem key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default History
