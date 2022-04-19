import './App.css';
import React, { createContext , useReducer} from 'react'
import ExpenseList from './Components/ExpenseList/ExpenseList';
import AddTransaction from './Components/AddTransaction/AddTransaction';

 
 const initialStates = {
  transactions : [
    {id:1,title:'Payment', amount:100},
    {id:2,title:'Expense', amount:50},
    {id:3,title:'Schooling', amount:400},
    {id:4,title:'Shopping', amount:170},
    {id:5,title:'Learning', amount:980},
  ]
}

export const GlobalContext = createContext(initialStates)


   function reducer(state, action){
    switch(action.type){
        case 'add':
            return {
              transactions: [action.payload, ...state.transactions]

         } 
         case 'delete':
            return {
              transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        default:
            return state;
    }
}




function App() {
  const [state, dispatch] = useReducer(reducer, initialStates)
  console.log('im ap' , state)

  function addTransaction(tansaction){
    dispatch({
    type:'add',
    payload:tansaction
    })
  }

  function deleteTransaction(id){
    dispatch({
    type:'delete',
    payload:id
    })
  } 


  return (
    <div className="App">
        <GlobalContext.Provider value={{ transactions: state.transactions, addTransaction , deleteTransaction}}>

            {/* <Balance></Balance>
            <DebitCredit></DebitCredit> */}
            <ExpenseList></ExpenseList>
            <AddTransaction></AddTransaction>


        </GlobalContext.Provider>
    </div>
  );
}

export default App;
