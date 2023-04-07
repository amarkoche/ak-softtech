import React from 'react';
import './Expences.css';
import ExpencesItems from './ExpencesItems';
import Card from '../UI/Card';


const Expences = (props) =>{
   

    return(
    
    <Card className='expences'>      
        <ExpencesItems 
            date={props.items[0].date} 
            title={props.items[0].title} 
            amount={props.items[0].amount} />        
        

        <ExpencesItems 
            date={props.items[1].date} 
            title={props.items[1].title} 
            amount={props.items[1].amount} />        
        

        <ExpencesItems 
            date={props.items[2].date} 
            title={props.items[2].title} 
            amount={props.items[2].amount} />        
        

        <ExpencesItems 
            date={props.items[3].date} 
            title={props.items[3].title} 
            amount={props.items[3].amount} />        
       
    </Card>
    )
}

export default Expences;