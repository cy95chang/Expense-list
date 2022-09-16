import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (pros) => {
  if (pros.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {pros.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            price={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
