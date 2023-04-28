import React from 'react'
import PurchaseCard from '@/components/mainCard/purchaseCardList/PurchaseCard'

const PurchaseCardList = () => {
  return (
    <ul>
      <PurchaseCard cardID={'3457'} />
      <PurchaseCard cardID={'6897'} />
    </ul>
  )
}

export default PurchaseCardList
