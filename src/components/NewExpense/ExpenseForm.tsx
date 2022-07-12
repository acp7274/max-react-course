import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props: {
  onSaveExpenseData: (arg0: {
    title: string;
    amount: string;
    date: Date;
  }) => void;
  onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  const [titleField, setTitleField] = useState("");
  const [amountField, setAmountField] = useState("");
  const [dateField, setDateField] = useState("");
  // const [userInput, setUserInput] = useState({
  //   titleField: "",
  //   amountField: "",
  //   dateField: "",
  // });
  const titleChangeHandler = (event: any) => {
    setTitleField(event.target.value);
  };
  const amountChangeHandler = (event: any) => {
    setAmountField(event.target.value);
  };
  const dateChangeHandler = (event: any) => {
    setDateField(event.target.value);
  };
  const submitHandler = (event: any) => {
    event.preventDefault();
    const fieldData = {
      title: titleField,
      amount: amountField,
      date: new Date(dateField),
    };
    props.onSaveExpenseData(fieldData);
    setAmountField("");
    setTitleField("");
    setDateField("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense_controls">
          <div className="new-expense_control">
            <label>Title</label>
            <input
              type="text"
              value={titleField}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense_control">
            <label>Amount</label>
            <input
              type="number"
              value={amountField}
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense_control">
            <label>Date</label>
            <input
              type="date"
              value={dateField}
              onChange={dateChangeHandler}
              min="2022-01-01"
              max="2025-12-31"
            />
          </div>
        </div>
        <div className="new-expense_actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
