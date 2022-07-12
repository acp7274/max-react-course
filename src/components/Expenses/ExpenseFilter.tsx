import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props: any) => {
  const dropdownChangeHandler = (event: any) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <>
      <div className="expenses-filter">
        <div className="expenses-filter_control">
          <label>Filter by Year</label>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ExpenseFilter;
