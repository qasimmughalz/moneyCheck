import React, {useContext} from 'react'
import { GlobalContext } from '../../App'
import ExpenseCard from '../ExpenseCard/ExpenseCard'
import css from './ExpenseList.css'

const ExpenseList = ()=>{

    const {transactions} = useContext(GlobalContext)
    console.log('inside expense list ',transactions)
    return(
            <ul>
 
            {transactions.map((e)=>{
                return <ExpenseCard key={e.id} id={e.id}  title={e.title} amount={e.amount}></ExpenseCard>
            })}

            </ul>
    )


}


export default ExpenseList