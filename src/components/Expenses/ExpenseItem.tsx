import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props: {
  date: {
    toLocaleString: (
      arg0: string,
      arg1: { month?: string | undefined; day?: string | undefined }
    ) => any;
    getFullYear: () => any;
  };
  title: string;
  amount: string;
}) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!!!");
    console.log(title);
  };

  return (
    <>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item_description">
            <h2>{title}</h2>
            <div className="expense-item_price">${props.amount}</div>
          </div>
          <button onClick={clickHandler}>Change Title</button>
        </Card>
      </li>
    </>
  );
}

export default ExpenseItem;
