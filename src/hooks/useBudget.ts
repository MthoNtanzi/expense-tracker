import { useState } from 'react';
import type { Expense } from '../types/Expense';

// This hook manages budget state and provides functions to update it.

export function useBudget(initialLimit: number){
    // keep track of budget limit and total expenses

    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [limit, setLimit] = useState(initialLimit);

    /*
    Derived values

    calculate from current state
    total = sum of all expense amounts
    remaining = how much is left
    isOverBudget = flag if total exceeds limit
    
    */

    const total = expenses.reduce((sum, e) => sum + e.amount, 0 );
    const remaining = limit - total;
    const isOverBudget = total > limit;

    // Functions to add a new expense to the list
    function addExpense(name: string, amount: number){
        const newExpense: Expense = {
            id: Date.now(), // simple unique id
            name,
            amount
        };
        setExpenses(prev => [...prev, newExpense]);
    }
    // Function to remove an expense by id
    function removeExpense(id: number){
        setExpenses(prev => prev.filter(e => e.id !== id));
    }

    return {
        expenses,
        limit,
        total,
        remaining,
        isOverBudget,
        addExpense,
        removeExpense,
        setLimit
    };
}