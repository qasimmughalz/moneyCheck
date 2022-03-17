import React, { useContext } from "react";
import { GlobalContext } from "../../App";

export default function Credit(){

    const MyContext = useContext(GlobalContext)

  
    const total = MyContext.transactions.map((item)=>{
        return item.amount
    }).reduce((prev, next)=> prev+next)

    return(<h1>
         +{total}
    </h1>)


}   