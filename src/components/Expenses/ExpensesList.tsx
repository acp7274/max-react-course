import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props: any) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list_fallback">No expenses found.</h2>;
  }
  return (
    <>
      <ul className="expenses-list">
        {props.items.map((expense: any) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;