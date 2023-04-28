import Link from 'next/link'
// todo запрос данных по id карты
const History = ({ cardID }) => {
  return (
    <div>
      <div className='head'>
        <h4>History</h4>
        <Link href={'/history'}>See all</Link>
      </div>
      <ul></ul>
    </div>
  )
}

export default History
