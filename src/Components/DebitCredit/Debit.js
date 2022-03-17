import React, { useContext } from "react";
import { GlobalContext } from "../../App";

export default function Debit(){    

    const mycontext = useContext(GlobalContext)

    const check = mycontext.transactions.filter((items)=>{
        return items.amount<0
    })
    console.log('check',check)

    const totalCredit = mycontext.transactions.filter((items)=>{
        return items.amount<0
    }).map((items => items.amount)).reduce((prev,next)=> prev+next)


    return(
        <h1> {totalCredit}</h1>
    )

    
}