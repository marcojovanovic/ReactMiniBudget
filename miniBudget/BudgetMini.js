import React,{useState, useEffect} from 'react'

import './budget.css'

// logika ako su brojevi pozitini idu na kredit, a ako su negativni idu na debit


// boostrap +
// state +
// obezbedi inpute +
// submit forme +
// balance +
// credit
// debit 
// clear +

function BudgetMini() {

  const [transactions, setTransactions]=useState({

         name:'',
         amount:''

  })

  const [list, setList]=useState([])  
  let [credit, setCredit]=useState('')
  let [debit, setDebit]=useState('')
  const [balance, setBalance]=useState('')


  const handleSubmit=(e)=>{

    e.preventDefault()

    setList([transactions, ...list ])
   
    setTransactions({name:'', amount:''})

    plusMinus()

    console.log(list)


  }

  useEffect(() => {
    
    getBalance()
   
  
  }, [list])
  
  const handleChange=(e)=>{
  
    setTransactions({...transactions, [e.target.name]:e.target.value})
  
  
    console.log(e.target.value)

  }


  const clearItems=()=>{

    setCredit('')
    setDebit('')
    setBalance('')
    setList([])


  }


  const plusMinus=()=>{


    if(transactions.amount > 0){

      setCredit (Number(credit) + parseInt(transactions.amount))


    } else {

      setDebit (Number(debit) + parseInt(transactions.amount))
    }
  }


  const getBalance=()=>{

    let money = list.map(item=> parseInt(item.amount))
    let res = money.reduce((acc, curr)=> curr += acc, 0).toFixed(2)

    setBalance(res)

  }

  return (
    <div className='container'>
      <h1 className='display-3 mb-5 text-center mt-5'>Budget APP</h1>
      <div className='d-flex justify-content-center text-center'>
        <div class='card mb-5'>
          <div className='card-footer'>
            <h5 className='lead'>Balance</h5>
           <p className='text-light bg-dark p-2'>{balance}</p>
          </div>
           </div>
        <div class='card mb-5 ml-4'>
          <div className='card-footer'>
            <h5 className='lead'>Credit</h5>
  <p className='text-light bg-dark p-2'>{credit}</p>
          </div>
           </div>
        <div class='card mb-5 ml-4'>
          <div className='card-footer'>
            <h5 className='lead'>Debit</h5>
  <p className='text-light bg-dark p-2'>{debit}</p>
          </div>
           </div>
         
       
     </div>
          <div>
         {list.map((item,index)=>(


<table class="table">

<tbody key={index}>
  <tr>
  
         <td>{item.name}</td>
         <td>{parseInt(item.amount)}</td>
  </tr>

  
 
</tbody>
</table>

         ))}
          </div>

        <form onSubmit={handleSubmit} className='form-group'>
          <input type='text'
           className='form-control mb-2' 
           placeholder='enter name'
           onChange={handleChange}
           value={transactions.name}
           name='name'
            
           />

          <input type='text'
           className='form-control' 
           placeholder='enter amount'
           onChange={handleChange}
           value={transactions.amount}
           name='amount'

           />
           <button className='btn btn-block btn-warning mt-3' type='submit'>Submit</button>
        </form>
        <button onClick={clearItems} className='btn btn-block btn-danger mt-3' type='button'>Clear</button>
     
    </div>
  )
}

export default BudgetMini
