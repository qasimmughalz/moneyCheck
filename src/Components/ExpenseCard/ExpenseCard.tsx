import React, { useContext } from 'react'
import { GlobalContext } from '../../App'
import './ExpenseCard.css'

export default function ExpenseCard({ id, title, amount}){

    const {deleteTransaction} = useContext(GlobalContext)

    return(
        <li className='list-card'> 
            <div>{title}</div> 
            <div>${amount}</div> 
            <button onClick={() => deleteTransaction(id)}>Delete</button>
        </li>
    )



}