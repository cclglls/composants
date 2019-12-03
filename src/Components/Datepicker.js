import React from 'react';
import '../App.css';
import { DatePicker } from 'antd';


function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }

  
  class Datepicker extends React.Component {

    render() {
        return (

          <div>
                <DatePicker onChange={onChangeDate} />          
          </div>

          )
        }    
    }
    
export default Datepicker;