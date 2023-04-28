import Link from 'next/link'
import {useGetTransactionsQuery} from '@/store/api'

const History = ({ cardID }) => {
  const { data: history, isLoading, error } = useGetTransactionsQuery() // todo: сделать первый лоад через серверный рендер, далее при повторном посещении страницы делать refresh данных
  return (
    <div>
      <div className='head'>
        <h4>History</h4>
        <Link href={'/history'}>See all</Link>
      </div>
      {isLoading ? (
        'Loading...' // todo: сделать лоадер react skeleton
      ) : error ? ( // todo: не отрабатывает ошибка - см. api.js
        <h5>{error.status} - ваш запрос не обработан :(</h5>
      ) : (
        <ul>
          {history.map(item => (
            <li key={item.id}>{item.amount}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default History
