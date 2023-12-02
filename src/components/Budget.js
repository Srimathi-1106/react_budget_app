import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget , dispatch ,currency,expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const newbudget=event.target.value;
        setNewBudget(newbudget);

        if(newbudget<totalExpenses)
        {
            alert("You cannot reduce the budget lower than the spending!");
            return;
        }
        else if(newbudget>20000)
        {
            alert("The value cannot exceed maximum of 20000");
            return;
        }
        
        dispatch({
            type:'SET_BUDGET',
            payload:newbudget,
        })

    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget:{currency}</span>
        <input type="number" step="10" max="20000" min={ totalExpenses} value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
