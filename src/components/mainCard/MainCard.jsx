import Balance from '@/components/mainCard/Balance'
import TotalBlock from '@/components/mainCard/TotalBlock'
import PurchaseCardList from '@/components/mainCard/purchaseCardList/PurchaseCardList'

const MainCard = () => {
  return (
    <div>
      <Balance />
      <TotalBlock spendType={'-'} />
      <TotalBlock spendType={'+'} />
      <PurchaseCardList />
    </div>
  )
}

export default MainCard
