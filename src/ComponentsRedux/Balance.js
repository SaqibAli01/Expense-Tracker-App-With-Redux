import React from 'react'
import { useSelector } from 'react-redux';

export  function Balance() {
 let totalbalance = 0;

  let allTransactions = useSelector((dataBalance)=>{
    return dataBalance.transactions;
  })

  allTransactions.map((amount)=>{
    return totalbalance += amount.transactionAmount;
  })
 
  return (
    <div className='YourBalance'>
    <h2>Your Balance</h2>
    <h3>${totalbalance}</h3>

    </div>
  )
}
