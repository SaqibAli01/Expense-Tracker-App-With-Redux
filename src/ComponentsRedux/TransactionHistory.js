import React from 'react';
import {Transaction} from './Transaction';



export const TransactionHistory = ()=> {


    return (<>  
      <h3>History</h3>

        <ul className='list' >
            <Transaction/>
        
        </ul>

    </>
    )
}
