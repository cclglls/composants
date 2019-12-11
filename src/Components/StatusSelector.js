import React from 'react';
import '../App.css';
import { Select } from 'antd';

const { Option } = Select;


// function onChange(value) {
//     console.log(`selected ${value}`);
    
//   }


  
  function onSearch(val) {
    console.log('search:', val);
  }
  
  
class StatusSelector extends React.Component {

    constructor(props){
        super()
        this.onChange = this.onChange.bind(this)
      }

    onChange(value) {
        console.log(" ")
        console.log(`from composant enfant Status Selector : Status choisi -> ${value}`);
        this.props.handleClickParent(value);
    }


    render() {
        return (
            <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Set a status"
            optionFilterProp="children"
            onChange={this.onChange}
           
            onSearch={onSearch}
            filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }>

            <Option value="On_track">On track</Option>
            <Option value="At_risk">At risk</Option>
            <Option value="Off_track">Off track</Option>

            </Select>
        )
    }    
}

export default StatusSelector;