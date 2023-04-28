import getFormattedMoney from '@/functions/getFormattedMoney'

const TotalBlock = ({ spendType }) => {
  return (
    <div>
      {spendType}
      {getFormattedMoney(100)}
    </div>
  )
}

export default TotalBlock
