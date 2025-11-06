import React, { useState } from 'react';

interface AddExpenseFormProps {
    onAdd : (name: string, amount: number) => void;
}

/*
 Component: AddExpenseForm
    Renders a form to add a new expense with name and amount.

    It communicates via props with the logic layer (useBudget hook).

 */

export default function AddExpenseForm({ onAdd }: AddExpenseFormProps){
    const [name, setName] = useState('');
    const [amount, setAmount] = useState<number>(0);

    // Handle form submission
    // prevent reload, validate inpute and call onAdd prop

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!name || amount <= 0)return; // simple validation
        onAdd(name, amount);
        setName('');
        setAmount(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Expense name'
                value={name}
                onChange={e => setName(e.target.value)} />
            
            <input
                type='number'
                placeholder='Amount'
                value={amount}
                onChange={e => setAmount(parseFloat(e.target.value))} />

            <button type='submit'>Add</button>
        </form>
    )
}