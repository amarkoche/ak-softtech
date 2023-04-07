import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) =>{
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});

    return(
        <div className='expence-date'>
            <div className='expence-date-month'>{ month }</div> 
            <div className='expence-date-year'>{ year }</div> 
            <div className='expence-date-day'>{ day}</div>
        </div>
    )
}

export default ExpenseDate;