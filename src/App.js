import React from 'react';
import Expences from './component/Expenses/Expences';

const App =()=>{
    // let expenceDate = new Date(2023, 3, 28);
    // let expenceTitle = "Scholl Fee";
    // let expenceAmount = 300;

    let expences = [
        {
            id: 'e1',
            title: 'School Fee',
            amount: 250,
            date: new Date(2021, 5, 12)
        },

        {
            id: 'e1',
            title: 'School Fee',
            amount: 250,
            date: new Date(2021, 5, 12)
        },

        {
            id: 'e2',
            title: 'Book',
            amount: 230,
            date: new Date(2021, 5, 22)
        },

        {
            id: 'e3',
            title: 'Hous Fee',
            amount: 1250,
            date: new Date(2021, 7, 23)
        },

        {
            id: 'e4',
            title: 'Food ',
            amount: 1250,
            date: new Date(2021, 7, 23)
        },
    ];

    return (
    <div>
        <h1> Let's get Started </h1>

        <Expences items={expences}/>
        
    </div>
    )
    
}

export default App;