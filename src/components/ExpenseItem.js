import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation= (name) => {
        const expense ={ 
            name:name,
            cost:10
        }

        dispatch({
            type:'RED_EXPENSE',
            payload:expense
        })
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={{background:'lightgreen' , color:'white' , borderRadius:'50%' , fontSize:20 }} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={{background:'red' , color:'white' , borderRadius:'50%' , fontSize:20 }} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
