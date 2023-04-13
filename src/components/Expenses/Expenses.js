import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

function Expenses(props){

    const [filteredYear,setFilteredYear] = useState('2020');
    const filterChangehandler = selectedYear =>{

        setFilteredYear(selectedYear);
        console.log(filteredYear);


    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

 
    return <div>

    
    
    <Card className="expenses">
    <ExpensesFilter
     selected={filteredYear} 
     onChangeFilter = {filterChangehandler}/>  
   <ExpensesList items = {filteredExpenses}/>      
    </Card>

    </div>


}

export default Expenses;