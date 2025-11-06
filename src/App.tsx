import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BudgetSummary from "./components/BudgetSummary";
import { useBudget } from "./hooks/useBudget";

function App() {
  const {
    expenses,
    total,
    remaining,
    isOverBudget,
    addExpense,
    removeExpense,
  } = useBudget(500); // Initial budget limit of 500

  return (
    <div>
      <h1>Budget Tracker</h1>

      {/* UI */}
      <AddExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onRemove={removeExpense} />
      <BudgetSummary total={total} remaining={remaining} isOverBudget={isOverBudget} />
    </div>
  )
}

export default App
