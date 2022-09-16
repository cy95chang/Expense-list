import "./ExpenseItem.css";
import ExpsenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function handleClick() {
    setTitle("Upated!");
  }

  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <ExpsenseDate date={props.date} />
          <h2>{title}</h2>
          <div className="expense-item__price">{props.price}</div>
          <button onClick={handleClick}>Click</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
