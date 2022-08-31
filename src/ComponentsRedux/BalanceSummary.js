import React from 'react'
import { useSelector } from 'react-redux'
import store from './Store/Store';



export function BalanceSummary() {

  let income = 0;
  let expense = 0;

  let allTransactions = useSelector((store) => {
    return store.transactions;
  })

  allTransactions.map((transaction) => {
    if (transaction.transactionAmount > 0) {
      return income += transaction.transactionAmount;
    }
    else {
      return expense += Math.abs(transaction.transactionAmount)
    }
  })


  return (
    <>
      <div className='expense-container'>

        <h3> <b className='h33'>INCOME</b> <br /> ${income}</h3>
        <h3> <b className='h33'>EXPENSE</b>  <br />${expense}</h3>

      </div>

    </>
  )
}
