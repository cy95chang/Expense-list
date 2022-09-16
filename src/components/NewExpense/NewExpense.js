import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpenseData(expenseData);
  };

  const isEditingHandler = () => {
    setIsEditing(true)
  }

  const isNotEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onClick={isEditingHandler}>ADD NEW EXPENSE</button>}
      {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} onCancel={isNotEditingHandler}/>}
    </div>
  );
}

// export default NewExpense;
