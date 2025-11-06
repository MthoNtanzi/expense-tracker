// Represents a single expense item.
export interface Expense{
    id: number;
    name: string;
    amount: number;
}

// Track overall budget info.
export interface Budget{
    limit: number;  //Budget limit
    total: number; //Total spent
}