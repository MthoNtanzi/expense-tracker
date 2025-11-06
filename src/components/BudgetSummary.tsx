interface BudgetSummaryProps{
    total: number;
    remaining: number;
    isOverBudget: boolean;
}

// Component: BudgetSummary
// Renders the computed budget summary information.

export default function BudgetSummary({
    total,
    remaining,
    isOverBudget
}: BudgetSummaryProps){
    return(
        <div>
            <p>Total Spent: <strong>R{total.toFixed(2)}</strong></p>
            <p>Remaining Budget: <strong>R{remaining.toFixed(2)}</strong></p>
            {isOverBudget && (
                <p>You are over budget by <strong>R{-(remaining).toFixed(2)}</strong></p>
            )}
        </div>
    );
}