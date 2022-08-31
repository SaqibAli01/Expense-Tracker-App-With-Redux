import React from 'react';
// import './styless.css';
import {Header} from './Header';
import {Balance} from './Balance'
import {BalanceSummary} from './BalanceSummary';
import {TransactionHistory} from './TransactionHistory';
import { AddTransaction } from './AddTransaction';
import store from './Store/Store';

export default function Apps() {
  return (<>
  
  {/* <Provider store={store}>  */}
  <div className='main_App'>
    <Header/>
    <Balance/>
    <BalanceSummary/>
    <TransactionHistory/>
    <AddTransaction/>
    </div>
    {/* </Provider>  */}
   


    </> )
}
