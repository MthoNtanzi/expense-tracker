import type { Expense } from '../types/Expense';

interface ExpenseListProps{
    expenses: Expense[];
    onRemove: (id: number) => void;
}

/*
    Component: ExpenseList

    Renders a list of expenses
*/

export default function ExpenseList({ expenses, onRemove}: ExpenseListProps){
    if(expenses.length === 0){
        return <p>No expenses yet.</p>
    }

    return(
        <ul>
            {
                expenses.map(exp => (
                    <li key={exp.id}>
                        <span>{exp.name}</span> <span>R{exp.amount.toFixed(2)} <button onClick={() => onRemove(exp.id)}>✖</button>
                        </span>
                    </li>
                ))
            }
        </ul>
    );
}