import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Background from "./components/UI/Background";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2024, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e5",
    title: "Book",
    amount: 9.49,
    date: new Date(2024, 6, 10),
  },
  {
    id: "e6",
    title: "Helmet",
    amount: 94.67,
    date: new Date(2025, 7, 18),
  },
  {
    id: "e7",
    title: "Lamp",
    amount: 45.36,
    date: new Date(2025, 11, 22),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: any) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <div className="App">
        <Background color="#4E4351">
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </Background>
        {/* <Background color="#8697A6">
          <Expenses items={expenses} />
        </Background>
        <Background color="#BFCDD9">
          <Expenses items={expenses} />
        </Background>
        <Background color="#BF8756">
          <Expenses items={expenses} />
        </Background>
        <Background color="#8C4F2B">
          <Expenses items={expenses} />
        </Background> */}
      </div>
    </>
  );
}

export default App;
