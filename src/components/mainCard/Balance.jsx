import getFormattedMoney from '@/functions/getFormattedMoney'

const Balance = () => {
  return <h1>{getFormattedMoney('8,655.90')}</h1>
}

export default Balance
