import React, { useContext, useReducer, useState } from "react";
import { GlobalContext } from "../../App";
import css from './AddTransaction.css'

export default function AddTransaction(){

    const [title, setTitle ] = useState('')
    const [amount, setAmount ] = useState(0)
   

    const { addTransaction } = useContext(GlobalContext) 

   

    function getData(e){
        e.preventDefault()
        const newTransaction = {
            id : Math.floor(Math.random() * 31) + 50,
            title, 
            amount
        }

        addTransaction(newTransaction)
    }

    

    return(<div className="transaction">
        <form onSubmit={getData}>

            <div>
                <h3>Title:</h3>
                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Enter Amounut"></input>
            </div>
    
            <div>
                <h3>Amount:</h3>
                <input type='number' value={amount}  onChange={(e)=> setAmount(e.target.value)} placeholder="Enter Amounut"></input>
            </div>

            <div className="text-center">
                <button className="btn" value="Submit">ADD</button>
            </div>

        </form>
    </div>)



}