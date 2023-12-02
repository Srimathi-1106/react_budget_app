// Currency.js
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency , dispatch } = useContext(AppContext);
    const [cur,setCur]=useState('Currency( £ Pound )');
    
    const currencyHandler = (event) => {
        const selectedCurrency = event.target.value;
        console.log(selectedCurrency);
        const symbol = getSymbolFromCurrency(selectedCurrency);
        setCur(selectedCurrency);
        dispatch({ type: 'CHG_CURRENCY', payload: symbol });
    }

    const getSymbolFromCurrency = (currencyString) => {
        // Assuming your currency string format is like '£ Pound', '€ Euro', etc.
        const parts = currencyString.split(' ');
        return parts[1]; // This extracts the symbol part
    }
    

    return (
            <div className='alert alert-secondary'>
                <select
                    className="custom-select"
                    onChange={currencyHandler}
                    value={`Currency(${currency.value})`}
                    style={{ marginLeft: '1px' , background:'#badbcc' }}
                >
                    <option style={{display:'none'}} defaultValue>{cur}</option>
                    <option value="Currency( £ Pound )">£ Pound</option>
                    <option value="Currency( € Euro )">€ Euro</option>
                    <option value="Currency( ₹ Rupee )">₹ Rupee</option>
                    <option value="Currency( $ Dollar )">$ Dollar</option>
                </select>
            </div>
        );
};
export default Currency;
