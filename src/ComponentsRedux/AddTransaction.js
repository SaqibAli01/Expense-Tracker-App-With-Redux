import React, { useState } from 'react';
import store from './Store/Store';


export function AddTransaction() {

    const [description, setDescription] = useState("");
    const [transactionAmount, settransactionAmount] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("description" + description);
        console.log("transactionAmount" + transactionAmount);

        const newTransaction = {
            id: new Date().getTime(),
            description: description,
            transactionAmount: +transactionAmount,
        }

        store.dispatch({
            type: "ADD_TRANSACTION",
            payload: newTransaction
        })

        console.log("newTransaction", newTransaction);

        setDescription("");
        settransactionAmount(" ");

    }

    return (
        <>
            <h3>Add new Transaction </h3>

            <form onSubmit={onSubmit} className='transaction-form'>

                <label>
                    Enter Description <br />
                    <input type="text"
                        id='description'
                        required="required"
                        value={description}
                        onChange={(event) => { setDescription(event.target.value) }}
                        placeholder='Enter Description' />
                </label>
                <br />

                <label>
                    Enter Amount <br />
                    <input type="number"
                        id='transaction'
                        required="required"
                        value={transactionAmount}
                        onChange={(event) => { settransactionAmount(event.target.value) }}
                        placeholder='Enter Amount ' />
                </label>


                <br />
                <input type="submit" value="Add Transaction" />
            </form>

        </>
    )
}
