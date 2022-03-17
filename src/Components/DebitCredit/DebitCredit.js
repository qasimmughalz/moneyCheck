import React from "react"
import Balance from "../Balance/Balance"
import Credit from "./Credit"
import Debit from "./Debit"
import css from './DebitCredit.css'

export default function DebitCredit(){

    return(<div className="debitCredit">

            <Credit></Credit>
            <Debit></Debit>

    </div>)



}