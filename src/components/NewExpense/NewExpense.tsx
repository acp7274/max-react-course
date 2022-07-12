import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props: any) => {
  const saveExpenseDataHandler = (fieldExpenseData: any) => {
    const fieldData = {
      ...fieldExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(fieldData);
    setIsEditing(false);
  };
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onCancel={stopEditingHandler}
            onSaveExpenseData={saveExpenseDataHandler}
          />
        )}
      </div>
    </>
  );
};

export default NewExpense;
