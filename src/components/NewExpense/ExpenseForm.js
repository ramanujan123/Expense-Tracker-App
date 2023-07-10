import React, { useState } from "react";

import "./ExpenseForm.css"; 

const ExpenseForm = (props) => {
  const [enteredTitle,setEnteredTitle] = useState('');
  const [enteredAmount,setEnteredAmount] = useState('');
  const [enteredDate,setEnteredDate] = useState('');

  const titleChangeHandler = (event)=>{
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event)=>{
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value);
  };

  const inputChangeHandler = (identifier,value)=>{
    if(identifier==='title'){
      setEnteredTitle(value);
    } else if(identifier==='date') {
      setEnteredDate(value);
    } else{
      setEnteredAmount(value);
    }
  };
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  // const titleChangeHandler = (event)=>{
  //   // setEnteredTitle(event.target.value);
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value
  //   })
  // };

  // Note- Above way of updating the state is not recommended.
  //       Below way is recommended if you are using single state in your component.
  //       Reason being that if there are a lot of state variables changing simultaneously, 
  //       there is a possibility that i don't get the correct previous state,
  //       whereas in the second way, react guarrantes this.

  // const titleChangeHandler = (event)=>{
  //   setUserInput((prevState)=>{
  //     return {...prevState, enteredTitle: event.target.value};
  //   });
  // };

  // const amountChangeHandler = (event)=>{
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value
  //   })
  // };

  // const dateChangeHandler = (event)=>{
  //   setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value
  //   })
  // };

  const submitHandler = (event)=>{
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          {/* <input type="text" onChange={(event)=>{inputChangeHandler('title',event.target.value)}} /> */}
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
          {/* <input type="number" min="0.01" step="0.01" onChange={(event)=>{inputChangeHandler('amount',event.target.value)}} /> */}
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
          {/* <input type="date" min="2019-01-01" max="2022-12-31" onChange={(event)=>{inputChangeHandler('date',event.target.value)}} /> */}
        </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
