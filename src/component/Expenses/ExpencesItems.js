import React, { useState } from 'react';
import './ExpencesItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpencesItems = (props) =>{
    // document.getElementById().addEventListener()
   const [title, setTitle] = useState(props.title);
   
    const clickHandler = ()=>{
        setTitle("New title");
    }

    return(

        <Card className='expence-items'>  
            <div className='expence-div'>
                <ExpenseDate date={props.date} />        
                <h2 className='expence-item-description'>{ title }</h2>
            </div>
           
            <div className='expence-items-price'>${ props.amount }</div>  
            <button onClick={clickHandler}> Change Title </button>          
        </Card>
    )
}

export default ExpencesItems;