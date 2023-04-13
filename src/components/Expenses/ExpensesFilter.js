
import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

   // const [selectedValue, setSelectedValue] = useState("");


    const dropdownChangeHandler = (event) =>{

        props.onChangeFilter(event.target.value);
       // console.log(event.target.value);
       // setSelectedValue(event.target.value);
        
    };

    //props.onAddFilter(selectedValue);
    

    

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;