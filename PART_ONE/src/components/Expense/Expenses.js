import { useState } from "react";
import ExpensesFilter from "../Expense/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseList from './ExpenseList'
import ExpensesChart from "./ExpensesChart";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
	};
	
	const filteredExpenses = items.filter(item => item.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
        <ExpensesChart expenses={filteredExpenses}/>
			 <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
